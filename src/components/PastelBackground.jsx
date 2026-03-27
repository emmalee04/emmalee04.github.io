import React, { useEffect, useMemo, useRef } from 'react';

const clamp01 = (n) => Math.max(0, Math.min(1, n));

const PastelBackground = () => {
  const containerRef = useRef(null);
  const mouse = useRef({ x: 0.5, y: 0.35 });
  const state = useRef({
    t0: performance.now(),
    blobs: [
      { x: 0.25, y: 0.25, vx: 0, vy: 0 },
      { x: 0.75, y: 0.30, vx: 0, vy: 0 },
      { x: 0.55, y: 0.75, vx: 0, vy: 0 },
    ],
  });

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const el = containerRef.current;
    if (!el) return;

    const onMove = (e) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      mouse.current.x = clamp01(e.clientX / w);
      mouse.current.y = clamp01(e.clientY / h);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });

    const blobEls = Array.from(el.querySelectorAll('[data-blob]'));
    let raf = 0;

    const tick = (now) => {
      const s = state.current;
      const t = (now - s.t0) / 1000;

      const mx = mouse.current.x - 0.5;
      const my = mouse.current.y - 0.5;

      const stiffness = 0.035;
      const damping = 0.90;

      s.blobs.forEach((b, i) => {
        const ax = Math.sin(t * (0.30 + i * 0.06) + i) * 0.0018;
        const ay = Math.cos(t * (0.26 + i * 0.05) + i * 1.7) * 0.0018;

        const targetX = 0.5 + mx * (0.055 + i * 0.018) + (i === 0 ? -0.18 : i === 1 ? 0.2 : 0.05);
        const targetY = 0.5 + my * (0.055 + i * 0.018) + (i === 0 ? -0.12 : i === 1 ? -0.1 : 0.22);

        const fx = (targetX - b.x) * stiffness + ax;
        const fy = (targetY - b.y) * stiffness + ay;

        b.vx = (b.vx + fx) * damping;
        b.vy = (b.vy + fy) * damping;
        b.x = clamp01(b.x + b.vx);
        b.y = clamp01(b.y + b.vy);

        const px = (b.x * 100).toFixed(3);
        const py = (b.y * 100).toFixed(3);
        const node = blobEls[i];
        if (node) node.style.transform = `translate3d(${px}vw, ${py}vh, 0) translate3d(-50%, -50%, 0)`;
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('pointermove', onMove);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="pastel-bg" ref={containerRef} aria-hidden="true">
      <div className="pastel-bg__base" />
      <div className="pastel-bg__blob pastel-bg__blob--a" data-blob />
      <div className="pastel-bg__blob pastel-bg__blob--b" data-blob />
      <div className="pastel-bg__blob pastel-bg__blob--c" data-blob />
      <div className="pastel-bg__grain" />
    </div>
  );
};

export default PastelBackground;