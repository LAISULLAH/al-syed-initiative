import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks';

// ─────────────────────────────────────────────────────────────────────────────
// HeroScene — premium editorial 3D sculpture
//
// A single monolithic form: a high-poly sphere displaced by layered
// mathematical waves, rendered in near-black polished chrome.
// No labels. No UI panels. No network graphs. Nothing cyberpunk.
// Cinematic three-point lighting, ACES tone mapping, synthetic studio HDR.
// ─────────────────────────────────────────────────────────────────────────────

/** Build the synthetic studio environment texture (equirectangular, 128×64). */
function buildEnvTexture(): THREE.DataTexture {
  const W = 128, H = 64;
  const data = new Uint8Array(W * H * 4);

  for (let row = 0; row < H; row++) {
    for (let col = 0; col < W; col++) {
      const idx = (row * W + col) * 4;
      const nx = col / (W - 1); // 0 → 1 left-to-right
      const ny = row / (H - 1); // 0 → 1 bottom-to-top in equirect

      // Base studio grey — dark floor, slightly lighter ceiling
      const base = 6 + ny * 28;

      // Primary key-light hotspot — upper-right quadrant
      const kx = Math.max(0, 1 - Math.abs(nx - 0.72) * 14);
      const ky = Math.max(0, 1 - Math.abs(ny - 0.68) *  9);
      const key = kx * ky * 255;

      // Rim-light hotspot — upper-left, narrower and dimmer
      const rx = Math.max(0, 1 - Math.abs(nx - 0.14) * 18);
      const ry = Math.max(0, 1 - Math.abs(ny - 0.62) * 11);
      const rim = rx * ry * 140;

      // Bottom bounce — very faint warm reflection
      const bx = Math.max(0, 1 - Math.abs(nx - 0.50) * 5);
      const by = Math.max(0, 1 - Math.abs(ny - 0.08) *  8);
      const bounce = bx * by * 28;

      const v = Math.min(255, Math.round(base + key + rim + bounce));
      data[idx] = data[idx + 1] = data[idx + 2] = v;
      data[idx + 3] = 255;
    }
  }

  const tex = new THREE.DataTexture(data, W, H);
  tex.needsUpdate = true;
  return tex;
}

/** Displace a high-poly sphere to create the organic sculptural form. */
function buildSculptureGeometry(): THREE.BufferGeometry {
  // 200 segments gives ~40k verts — smooth silhouette without being slow
  const geo = new THREE.SphereGeometry(2.0, 200, 200);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const v = new THREE.Vector3();

  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const n = v.clone().normalize(); // surface normal direction

    // Three octaves of displacement — low, mid, micro
    // Each octave uses independent axis rotations to break symmetry
    const low =
      Math.sin(n.x * 2.8 + 0.9)  * Math.sin(n.y * 3.5 + 1.4)  * Math.cos(n.z * 2.4 + 2.1)  * 0.36 +
      Math.cos(n.x * 3.2 + 2.7)  * Math.sin(n.y * 2.6 + 0.3)  * Math.sin(n.z * 3.8 + 1.0)  * 0.20;

    const mid =
      Math.sin(n.x * 6.1 + 1.8)  * Math.cos(n.y * 7.4 + 0.6)  * Math.sin(n.z * 5.9 + 2.8)  * 0.10 +
      Math.cos(n.x * 7.8 + 3.2)  * Math.sin(n.y * 6.2 + 2.0)  * Math.cos(n.z * 7.1 + 0.4)  * 0.07;

    const micro =
      Math.sin(n.x * 13.4 + 0.5) * Math.sin(n.y * 11.7 + 3.0) * Math.cos(n.z * 12.8 + 1.6) * 0.025;

    const displacement = low + mid + micro;
    v.normalize().multiplyScalar(2.0 + displacement);
    pos.setXYZ(i, v.x, v.y, v.z);
  }

  geo.computeVertexNormals();
  return geo;
}

// ─────────────────────────────────────────────────────────────────────────────

export const HeroScene: React.FC = () => {
  const mountRef    = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // ── Renderer ──────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      alpha:          true,
      antialias:      true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled   = true;
    renderer.shadowMap.type      = THREE.PCFSoftShadowMap;
    renderer.toneMapping         = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // ── Scene & Camera ────────────────────────────────────────────
    const scene  = new THREE.Scene();
    // Narrow FOV (30°) makes the sculpture feel monumental / close-up
    const camera = new THREE.PerspectiveCamera(
      30,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9.0);

    // ── Mouse-parallax pivot ──────────────────────────────────────
    const pivot = new THREE.Group();
    scene.add(pivot);

    // ── SCULPTURE ─────────────────────────────────────────────────
    const sculpGeo = buildSculptureGeometry();
    const sculpMat = new THREE.MeshStandardMaterial({
      color:            0x0e0e0e,
      roughness:        0.05,   // nearly mirror-smooth
      metalness:        0.97,   // fully metallic — chrome-like
      envMapIntensity:  1.8,    // strong env reflection
    });
    const sculpture = new THREE.Mesh(sculpGeo, sculpMat);
    sculpture.castShadow    = true;
    sculpture.receiveShadow = true;
    // Slight editorial tilt — asymmetric, not axially aligned
    sculpture.rotation.set(0.18, 0.4, 0.06);
    pivot.add(sculpture);

    // ── SYNTHETIC HDR ENVIRONMENT ─────────────────────────────────
    const pmrem   = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    const envTex  = buildEnvTexture();
    const envMap  = pmrem.fromEquirectangular(envTex).texture;
    scene.environment = envMap;
    envTex.dispose();
    pmrem.dispose();

    // ── CINEMATIC LIGHTING ────────────────────────────────────────
    // 1. Key — very strong directional, upper-right-front
    //    produces the primary highlight arc across the surface
    const key = new THREE.DirectionalLight(0xffffff, 6.0);
    key.position.set(5.5, 6.0, 5.0);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.near  = 1;
    key.shadow.camera.far   = 24;
    key.shadow.camera.left  = -5;
    key.shadow.camera.right =  5;
    key.shadow.camera.top   =  5;
    key.shadow.camera.bottom = -5;
    key.shadow.bias = -0.0005;
    scene.add(key);

    // 2. Rim — back-left, creates the hairline edge separation
    //    that reads as "depth" and prevents the form merging into bg
    const rim = new THREE.DirectionalLight(0xffffff, 3.5);
    rim.position.set(-6.0, 3.5, -6.0);
    scene.add(rim);

    // 3. Fill — opposite to key, barely perceptible,
    //    lifts the darkest shadow areas off pure-black
    const fill = new THREE.DirectionalLight(0x808080, 0.5);
    fill.position.set(-4.0, -2.5, 4.0);
    scene.add(fill);

    // 4. Bottom bounce — simulates a subtle floor reflection
    const bounce = new THREE.DirectionalLight(0x555555, 0.35);
    bounce.position.set(0, -6, 2.5);
    scene.add(bounce);

    // 5. Ambient — the absolute minimum to keep geometry readable
    scene.add(new THREE.AmbientLight(0xffffff, 0.08));

    // ── SHADOW CATCHER PLANE ──────────────────────────────────────
    // Barely visible dropped shadow grounds the sculpture in space
    const groundGeo = new THREE.PlaneGeometry(18, 18);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.18 });
    const ground    = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x    = -Math.PI / 2;
    ground.position.y    = -3.0;
    ground.receiveShadow = true;
    scene.add(ground);

    // ── MOUSE PARALLAX STATE ──────────────────────────────────────
    let tX = 0, tY = 0, eX = 0, eY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      tX = ((e.clientX - r.left)  / r.width  - 0.5) * 2;
      tY = ((e.clientY - r.top)   / r.height - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // ── VISIBILITY GUARD ──────────────────────────────────────────
    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0.05 }
    );
    io.observe(container);

    // ── ANIMATION LOOP ────────────────────────────────────────────
    const clock = new THREE.Clock();
    let raf = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (!visible) return;

      const dt  = clock.getDelta();
      const t   = clock.getElapsedTime();
      const spd = reducedMotion ? 0.08 : 1.0;

      // Smooth mouse parallax — very gentle tilt
      eX += (tX - eX) * 0.028;
      eY += (tY - eY) * 0.028;
      pivot.rotation.x = -eY * 0.10;
      pivot.rotation.y =  eX * 0.13;

      // Slow, stately Y-rotation — one revolution every ~70 s
      sculpture.rotation.y += dt * 0.09 * spd;

      // Imperceptible breathing — 0.8% scale oscillation
      const breathe = 1.0 + Math.sin(t * 0.38) * 0.008;
      sculpture.scale.setScalar(breathe);

      renderer.render(scene, camera);
    };
    animate();

    // ── RESIZE ────────────────────────────────────────────────────
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // ── CLEANUP ───────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      io.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      sculpGeo.dispose();
      sculpMat.dispose();
      groundGeo.dispose();
      groundMat.dispose();
      envMap.dispose();
      renderer.dispose();
    };
  }, [reducedMotion]);

  // ── DOM ──────────────────────────────────────────────────────────
  return (
    <div className="relative w-full h-full min-h-[460px] lg:min-h-[580px] select-none overflow-hidden rounded-3xl">

      {/* Deep matte background */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Single centred radial glow — amplifies perceived depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 72% 58% at 52% 46%, rgba(255,255,255,0.038) 0%, rgba(255,255,255,0.008) 42%, transparent 70%)',
        }}
      />

      {/* Three.js canvas mount */}
      <div ref={mountRef} className="absolute inset-0 z-10" />

      {/* Hairline border — barely there, just enough to frame */}
      <div className="absolute inset-0 rounded-3xl border border-white/[0.07] pointer-events-none z-20" />
    </div>
  );
};
