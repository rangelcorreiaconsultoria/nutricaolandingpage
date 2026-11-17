'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PHOTOS = [
  '/images/hero.webp',
  '/images/edsonaguiar.jpeg',
  '/images/viniciusbelo.jpeg',
  '/images/trecho7.jpeg',
  '/images/brunosilva.jpeg',
  '/images/andrejesus.jpeg',
];

const CARD_COUNT = 26;
const TUNNEL = 140; // profundidade total que a câmera percorre do topo ao rodapé
const BG = 0x101719;
const CYAN = 0x00b9cf;

// Fundo 3D do site inteiro: um túnel de cards (fotos e vidro) em espiral.
// A rolagem leva a câmera por dentro do túnel e gira a espiral, então os cards
// surgem da névoa, passam ao lado e giram entre si; o mouse inclina a câmera.
// Com "reduzir movimento" ou sem WebGL, fica um quadro parado (ou nada).
export default function ImmersiveBackdrop() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.matchMedia('(max-width: 767px)').matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: !small, alpha: false, powerPreference: 'high-performance' });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1 : 1.5));
    renderer.setClearColor(BG);
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(BG, 7, 40);
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 80);

    const spiral = new THREE.Group();
    scene.add(spiral);

    const loader = new THREE.TextureLoader();
    const textures = PHOTOS.map((src) => {
      const t = loader.load(src, () => needsFrame());
      t.colorSpace = THREE.SRGBColorSpace;
      return t;
    });

    const plane = new THREE.PlaneGeometry(1, 1);
    const edges = new THREE.EdgesGeometry(plane);
    const glass = new THREE.MeshBasicMaterial({ color: 0x1e2b30, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
    const edgeMat = new THREE.LineBasicMaterial({ color: CYAN, transparent: true, opacity: 0.45 });
    const photoMats = textures.map(
      (map) => new THREE.MeshBasicMaterial({ map, color: 0x6f7d82, transparent: true, opacity: 0.5, side: THREE.DoubleSide })
    );

    type Card = { obj: THREE.Group; spin: number; bob: number; y: number };
    const cards: Card[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < CARD_COUNT; i++) {
      const isPhoto = i % 3 === 0;
      const w = isPhoto ? 2.4 : 1.6 + (i % 4) * 0.35;
      const h = isPhoto ? 3 : w * (0.6 + (i % 3) * 0.25);
      const card = new THREE.Group();
      const face = new THREE.Mesh(plane, isPhoto ? photoMats[(i / 3) % photoMats.length | 0] : glass);
      face.scale.set(w, h, 1);
      const outline = new THREE.LineSegments(edges, edgeMat);
      outline.scale.set(w, h, 1);
      card.add(face, outline);

      // Espiral com um corredor largo no centro, por onde a câmera passa, para os
      // cards ficarem mais nas bordas e não atrás do texto
      const angle = i * golden * 2;
      const radius = 5.2 + (i % 5) * 0.9;
      card.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.7, -(i / CARD_COUNT) * TUNNEL);
      card.rotation.set((i % 3) * 0.12 - 0.12, -Math.cos(angle) * 0.6, (i % 5) * 0.06 - 0.12);
      spiral.add(card);
      cards.push({ obj: card, spin: (i % 2 ? 1 : -1) * (0.08 + (i % 4) * 0.03), bob: i * 1.7, y: card.position.y });
    }

    const dustCount = small ? 260 : 700;
    const dust = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dust[i * 3] = (Math.random() - 0.5) * 22;
      dust[i * 3 + 1] = (Math.random() - 0.5) * 16;
      dust[i * 3 + 2] = 8 - Math.random() * (TUNNEL + 20);
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dust, 3));
    const dustMat = new THREE.PointsMaterial({ color: CYAN, size: 0.05, transparent: true, opacity: 0.6 });
    scene.add(new THREE.Points(dustGeo, dustMat));

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      needsFrame();
    };

    const target = { scroll: 0, mx: 0, my: 0 };
    const current = { scroll: 0, mx: 0, my: 0 };
    const readScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      target.scroll = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };
    const onPointer = (e: PointerEvent) => {
      target.mx = (e.clientX / window.innerWidth) * 2 - 1;
      target.my = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const clock = new THREE.Clock();
    let raf = 0;
    const draw = () => {
      raf = 0;
      const dt = Math.min(clock.getDelta(), 0.05);
      const t = clock.elapsedTime;
      const ease = reduced ? 1 : 1 - Math.exp(-dt * 4);
      current.scroll += (target.scroll - current.scroll) * ease;
      current.mx += (target.mx - current.mx) * ease;
      current.my += (target.my - current.my) * ease;

      const z = 8 - current.scroll * TUNNEL;
      camera.position.set(current.mx * 1.1, -current.my * 0.8, z);
      camera.lookAt(current.mx * 0.4, -current.my * 0.3, z - 12);
      spiral.rotation.z = current.scroll * Math.PI * 1.6 + (reduced ? 0 : t * 0.025);

      if (!reduced) {
        for (const c of cards) {
          c.obj.rotation.y += c.spin * dt;
          c.obj.position.y = c.y + Math.sin(t * 0.6 + c.bob) * 0.18;
        }
      }
      renderer.render(scene, camera);

      const settling =
        Math.abs(target.scroll - current.scroll) > 1e-4 ||
        Math.abs(target.mx - current.mx) > 1e-3 ||
        Math.abs(target.my - current.my) > 1e-3;
      if (!reduced || settling) needsFrame();
    };
    function needsFrame() {
      if (!raf && !document.hidden) raf = requestAnimationFrame(draw);
    }

    const onScroll = () => {
      readScroll();
      needsFrame();
    };
    const onVisibility = () => {
      if (!document.hidden) {
        clock.getDelta();
        needsFrame();
      }
    };

    readScroll();
    current.scroll = target.scroll;
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    if (!reduced) window.addEventListener('pointermove', onPointer, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointermove', onPointer);
      [plane, edges, dustGeo].forEach((g) => g.dispose());
      [glass, edgeMat, dustMat, ...photoMats].forEach((m) => m.dispose());
      textures.forEach((t) => t.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none [&>canvas]:block [&>canvas]:w-full [&>canvas]:h-full" />;
}
