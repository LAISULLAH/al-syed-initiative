import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks';

function createGlowSprite(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  grad.addColorStop(0.2, 'rgba(56, 189, 248, 0.9)');
  grad.addColorStop(0.5, 'rgba(14, 165, 233, 0.4)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(canvas);
}

export const HeroScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      48,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 3.8, 12);

    const glowTexture = createGlowSprite();

    const gridWidth = 44;
    const gridDepth = 28;
    const segX = 70;
    const segY = 50;
    const terrainGeo = new THREE.PlaneGeometry(gridWidth, gridDepth, segX, segY);
    terrainGeo.rotateX(-Math.PI / 2.35);
    terrainGeo.translate(0, -2.6, -1);

    const pos = terrainGeo.attributes.position as THREE.BufferAttribute;
    const count = pos.count;
    const origY = new Float32Array(count);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      origY[i] = pos.getY(i);
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const distFromCenter = Math.sqrt(x * x + z * z);
      const ratio = Math.max(0, 1 - distFromCenter / 20);

      colors[i * 3] = 0.2 + ratio * 0.8;
      colors[i * 3 + 1] = 0.7 + ratio * 0.3;
      colors[i * 3 + 2] = 0.95 + ratio * 0.05;
    }
    terrainGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const terrainMesh = new THREE.Mesh(terrainGeo, wireMat);
    scene.add(terrainMesh);

    const pointsMat = new THREE.PointsMaterial({
      size: 0.16,
      map: glowTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const terrainPoints = new THREE.Points(terrainGeo, pointsMat);
    scene.add(terrainPoints);

    const gyroGroup = new THREE.Group();
    gyroGroup.position.set(0, 0.4, 0.5);
    scene.add(gyroGroup);

    const ring1Geo = new THREE.TorusGeometry(3.6, 0.022, 12, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    gyroGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.7, 0.02, 12, 90);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    gyroGroup.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(1.8, 0.025, 12, 80);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x30d158,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    gyroGroup.add(ring3);

    const coreGeo = new THREE.IcosahedronGeometry(0.7, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    gyroGroup.add(coreMesh);

    const dustCount = 260;
    const dustGeo = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 38;
      dustPositions[i + 1] = Math.random() * 10 - 2;
      dustPositions[i + 2] = (Math.random() - 0.5) * 26;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      size: 0.12,
      map: glowTexture,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    scene.add(dust);

    let targetMouseX = 0;
    let targetMouseY = 0;
    let curMouseX = 0;
    let curMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetMouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let raf = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();
      const dt = clock.getDelta();
      const speed = reducedMotion ? 0.2 : 0.85;

      curMouseX += (targetMouseX - curMouseX) * 0.05;
      curMouseY += (targetMouseY - curMouseY) * 0.05;

      camera.position.x = curMouseX * 2.2;
      camera.position.y = 3.8 - curMouseY * 1.5;
      camera.lookAt(0, -0.2, 0);

      gyroGroup.rotation.x = -curMouseY * 0.45;
      gyroGroup.rotation.y = curMouseX * 0.65;

      ring1.rotation.x += dt * 0.35 * speed;
      ring1.rotation.y += dt * 0.25 * speed;

      ring2.rotation.y -= dt * 0.45 * speed;
      ring2.rotation.z += dt * 0.3 * speed;

      ring3.rotation.z += dt * 0.6 * speed;
      ring3.rotation.x -= dt * 0.35 * speed;

      coreMesh.rotation.x += dt * 0.5 * speed;
      coreMesh.rotation.y += dt * 0.7 * speed;
      const coreScale = 1.0 + Math.sin(elapsed * 2.5) * 0.08;
      coreMesh.scale.set(coreScale, coreScale, coreScale);

      const mouseWorldX = curMouseX * 14;
      const mouseWorldZ = curMouseY * 10;

      for (let i = 0; i < count; i++) {
        const vx = pos.getX(i);
        const vz = pos.getZ(i);

        const dist = Math.sqrt((vx - mouseWorldX) * (vx - mouseWorldX) + (vz - mouseWorldZ) * (vz - mouseWorldZ));
        let mouseLift = 0;
        if (dist < 6.5) {
          const factor = Math.pow(1 - dist / 6.5, 2);
          mouseLift = factor * 2.4 * Math.sin(dist * 2.2 - elapsed * 5.0);
        }

        const wave1 = Math.sin(vx * 0.28 + elapsed * speed) * Math.cos(vz * 0.32 + elapsed * speed * 0.9) * 1.2;
        const wave2 = Math.sin(vx * 0.55 - elapsed * speed * 0.75) * 0.45;
        const total = origY[i] + wave1 + wave2 + mouseLift;

        pos.setY(i, total);
      }
      pos.needsUpdate = true;

      const dPos = dustGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 1; i < dustCount * 3; i += 3) {
        let py = dPos.array[i] as number;
        py += 0.006 * speed;
        if (py > 8) py = -2;
        dPos.array[i] = py;
      }
      dPos.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      terrainGeo.dispose();
      wireMat.dispose();
      pointsMat.dispose();
      glowTexture.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      renderer.dispose();
    };
  }, [reducedMotion]);

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
