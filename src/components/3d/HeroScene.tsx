import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks';

function createSoftSprite(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  grad.addColorStop(0.2, 'rgba(235, 248, 255, 0.95)');
  grad.addColorStop(0.5, 'rgba(56, 189, 248, 0.35)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(canvas);
}

const vertexShader = `
  uniform float uTime;
  uniform float uSpeed;
  attribute float aRadius;
  attribute float aAngle;
  attribute float aSpeed;
  attribute float aHeight;
  attribute float aSize;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    float angle = aAngle + aSpeed * uTime * uSpeed;
    
    vec3 pos;
    pos.x = cos(angle) * aRadius;
    pos.z = sin(angle) * aRadius;
    pos.y = aHeight + sin(aRadius * 1.6 - uTime * 1.1 * uSpeed) * 0.07;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    gl_PointSize = (aSize * 260.0 / -mvPosition.z);
    
    vColor = aColor;
    float distNorm = clamp((aRadius - 0.95) / 18.0, 0.0, 1.0);
    vAlpha = smoothstep(1.0, 0.0, distNorm * 0.92);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec4 tex = texture2D(uTexture, gl_PointCoord);
    if (tex.a < 0.01) discard;
    gl_FragColor = vec4(vColor, tex.a * vAlpha * 0.98);
  }
`;

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
    camera.position.set(0, 0, 11.5);

    const vortexGroup = new THREE.Group();
    vortexGroup.position.set(0, -0.2, 0);
    vortexGroup.rotation.x = -0.22;
    scene.add(vortexGroup);

    const particleTexture = createSoftSprite();
    const particleCount = 28000;
    const geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const radii = new Float32Array(particleCount);
    const angles = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);
    const heights = new Float32Array(particleCount);
    const sizes = new Float32Array(particleCount);

    const minRadius = 0.95;
    const maxRadius = 26.0;
    const numArms = 2;

    for (let i = 0; i < particleCount; i++) {
      const p = Math.pow(Math.random(), 1.4);
      const r = minRadius + p * (maxRadius - minRadius);
      radii[i] = r;

      const isArm = Math.random() < 0.72;
      let angle = 0;
      if (isArm) {
        const arm = i % numArms;
        const armOffset = (arm * 2.0 * Math.PI) / numArms;
        const armAngle = r * 1.95 + armOffset;
        const armSpread = (Math.random() - 0.5) * (0.28 + r * 0.02);
        angle = armAngle + armSpread;
      } else {
        angle = Math.random() * Math.PI * 2;
      }
      angles[i] = angle;

      speeds[i] = 0.38 / Math.pow(r, 0.55);

      const verticalSpread = Math.exp(-r * 0.15) * 0.22 + 0.03;
      heights[i] = (Math.random() - 0.5) * verticalSpread;

      sizes[i] = 0.09 + Math.random() * 0.11;

      positions[i * 3] = Math.cos(angle) * r;
      positions[i * 3 + 1] = heights[i];
      positions[i * 3 + 2] = Math.sin(angle) * r;

      const norm = (r - minRadius) / (maxRadius - minRadius);
      if (norm < 0.06) {
        colors[i * 3] = 1.0;
        colors[i * 3 + 1] = 1.0;
        colors[i * 3 + 2] = 1.0;
      } else if (norm < 0.3) {
        colors[i * 3] = 0.88 + Math.random() * 0.12;
        colors[i * 3 + 1] = 0.94 + Math.random() * 0.06;
        colors[i * 3 + 2] = 1.0;
      } else {
        const fade = Math.max(0.4, 1.0 - norm * 0.65);
        colors[i * 3] = fade * 0.96;
        colors[i * 3 + 1] = fade * 0.96;
        colors[i * 3 + 2] = fade * 1.0;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aRadius', new THREE.BufferAttribute(radii, 1));
    geometry.setAttribute('aAngle', new THREE.BufferAttribute(angles, 1));
    geometry.setAttribute('aSpeed', new THREE.BufferAttribute(speeds, 1));
    geometry.setAttribute('aHeight', new THREE.BufferAttribute(heights, 1));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSpeed: { value: reducedMotion ? 0.2 : 0.8 },
        uTexture: { value: particleTexture },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, shaderMaterial);
    vortexGroup.add(particles);

    const holeGeo = new THREE.SphereGeometry(0.88, 32, 32);
    const holeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const blackHole = new THREE.Mesh(holeGeo, holeMat);
    vortexGroup.add(blackHole);

    const photonGeo = new THREE.TorusGeometry(0.96, 0.02, 16, 100);
    const photonMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.95,
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

      const elapsed = clock.getElapsedTime();
      const dt = clock.getDelta();
      const speedMult = reducedMotion ? 0.2 : 0.8;

      curMouseX += (targetMouseX - curMouseX) * 0.04;
      curMouseY += (targetMouseY - curMouseY) * 0.04;

      vortexGroup.rotation.x = -0.22 - curMouseY * 0.15;
      vortexGroup.rotation.y = curMouseX * 0.2;
      vortexGroup.rotation.z += dt * 0.035 * speedMult;

      shaderMaterial.uniforms.uTime.value = elapsed;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;

      if (camera.aspect < 1.0) {
        camera.position.z = 14.0;
      } else if (camera.aspect < 1.5) {
        camera.position.z = 12.5;
      } else {
        camera.position.z = 11.5;
      }

      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      vortexGroup.position.set(0, -0.2, 0);
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
      shaderMaterial.dispose();
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
