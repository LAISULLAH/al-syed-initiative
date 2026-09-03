import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks';

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
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 4.5, 12.5);

    const gridWidth = 36;
    const gridHeight = 24;
    const segX = 64;
    const segY = 48;
    const terrainGeo = new THREE.PlaneGeometry(gridWidth, gridHeight, segX, segY);
    terrainGeo.rotateX(-Math.PI / 2.3);
    terrainGeo.translate(0, -1.8, 0);

    const pos = terrainGeo.attributes.position as THREE.BufferAttribute;
    const origY = new Float32Array(pos.count);
    for (let i = 0; i < pos.count; i++) {
      origY[i] = pos.getY(i);
    }

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x404040,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const terrainMesh = new THREE.Mesh(terrainGeo, wireMat);
    scene.add(terrainMesh);

    const pointsMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.035,
      transparent: true,
      opacity: 0.65,
    });
    const terrainPoints = new THREE.Points(terrainGeo, pointsMat);
    scene.add(terrainPoints);

    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 32;
      particlePositions[i + 1] = Math.random() * 8 - 1;
      particlePositions[i + 2] = (Math.random() - 0.5) * 20;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0xa0a0a5,
      size: 0.03,
      transparent: true,
      opacity: 0.4,
    });
    const particles = new THREE.Points(particleGeo, dustMat);
    scene.add(particles);

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
      const speed = reducedMotion ? 0.2 : 0.65;

      curMouseX += (targetMouseX - curMouseX) * 0.04;
      curMouseY += (targetMouseY - curMouseY) * 0.04;

      camera.position.x = curMouseX * 1.8;
      camera.position.y = 4.5 - curMouseY * 1.2;
      camera.lookAt(0, -0.5, 0);

      const count = pos.count;
      for (let i = 0; i < count; i++) {
        const vx = pos.getX(i);
        const vz = pos.getZ(i);

        const wave1 = Math.sin(vx * 0.32 + elapsed * speed) * Math.cos(vz * 0.38 + elapsed * speed * 0.8) * 0.95;
        const wave2 = Math.sin(vx * 0.65 - elapsed * speed * 0.7) * 0.35;
        const total = origY[i] + wave1 + wave2;

        pos.setY(i, total);
      }
      pos.needsUpdate = true;

      const pPos = particleGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 1; i < particleCount * 3; i += 3) {
        let py = pPos.array[i] as number;
        py += 0.004;
        if (py > 7) py = -1;
        pPos.array[i] = py;
      }
      pPos.needsUpdate = true;

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
      particleGeo.dispose();
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
