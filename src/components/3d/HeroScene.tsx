import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks';

function createSoftParticleTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  grad.addColorStop(0.25, 'rgba(220, 240, 255, 0.85)');
  grad.addColorStop(0.6, 'rgba(56, 189, 248, 0.25)');
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
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 11);

    const vortexGroup = new THREE.Group();
    const isDesktop = container.clientWidth >= 1024;
    vortexGroup.position.set(isDesktop ? 2.6 : 0, -0.2, 0);
    vortexGroup.rotation.x = -0.45;
    scene.add(vortexGroup);

    const particleTexture = createSoftParticleTexture();
    const particleCount = 14000;
    const geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const radii = new Float32Array(particleCount);
    const angles = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);
    const baseHeights = new Float32Array(particleCount);

    const minRadius = 1.15;
    const maxRadius = 15.5;

    for (let i = 0; i < particleCount; i++) {
      const p = Math.pow(Math.random(), 1.7);
      const r = minRadius + p * (maxRadius - minRadius);
      radii[i] = r;

      const spiralOffset = r * 1.8;
      const angle = Math.random() * Math.PI * 2 + spiralOffset;
      angles[i] = angle;

      speeds[i] = (0.28 / Math.pow(r, 0.65)) * (0.8 + Math.random() * 0.4);

      const verticalSpread = Math.exp(-r * 0.25) * 0.45 + 0.08;
      baseHeights[i] = (Math.random() - 0.5) * verticalSpread;

      positions[i * 3] = Math.cos(angle) * r;
      positions[i * 3 + 1] = baseHeights[i];
      positions[i * 3 + 2] = Math.sin(angle) * r;

      const normDist = (r - minRadius) / (maxRadius - minRadius);
      if (normDist < 0.15) {
        colors[i * 3] = 0.95;
        colors[i * 3 + 1] = 0.98;
        colors[i * 3 + 2] = 1.0;
      } else if (normDist < 0.45) {
        colors[i * 3] = 0.75 + Math.random() * 0.25;
        colors[i * 3 + 1] = 0.88 + Math.random() * 0.12;
        colors[i * 3 + 2] = 1.0;
      } else {
        const fade = Math.max(0.2, 1 - (normDist - 0.45) * 1.5);
        colors[i * 3] = fade * 0.85;
        colors[i * 3 + 1] = fade * 0.85;
        colors[i * 3 + 2] = fade * 0.95;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.09,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(geometry, material);
    vortexGroup.add(particles);

    const holeGeo = new THREE.SphereGeometry(0.95, 32, 32);
    const holeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const blackHole = new THREE.Mesh(holeGeo, holeMat);
    vortexGroup.add(blackHole);

    const photonGeo = new THREE.TorusGeometry(1.08, 0.022, 16, 100);
    const photonMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const photonRing = new THREE.Mesh(photonGeo, photonMat);
    photonRing.rotation.x = Math.PI / 2;
    vortexGroup.add(photonRing);

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

      const dt = clock.getDelta();
      const speedMult = reducedMotion ? 0.2 : 0.85;

      curMouseX += (targetMouseX - curMouseX) * 0.04;
      curMouseY += (targetMouseY - curMouseY) * 0.04;

      vortexGroup.rotation.x = -0.45 - curMouseY * 0.25;
      vortexGroup.rotation.y = curMouseX * 0.35;
      vortexGroup.rotation.z += dt * 0.04 * speedMult;

      const posArr = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        angles[i] += speeds[i] * dt * speedMult;
        const r = radii[i];
        const a = angles[i];

        posArr[i * 3] = Math.cos(a) * r;
        posArr[i * 3 + 2] = Math.sin(a) * r;
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      const desktop = width >= 1024;
      vortexGroup.position.set(desktop ? 2.6 : 0, -0.2, 0);
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
      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
      holeGeo.dispose();
      holeMat.dispose();
      photonGeo.dispose();
      photonMat.dispose();
      renderer.dispose();
    };
  }, [reducedMotion]);

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
