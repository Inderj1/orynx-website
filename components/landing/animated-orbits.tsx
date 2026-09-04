"use client";

import { useEffect, useRef } from "react";

/* All colours live here. Rings are faint indigo hairlines; the centre "Judgment" ring
   is coral (the human colour); dots follow about.html's
   orbit-card, outer → inner: blue, coral, amber. Text is brand ink. */
const COLORS = {
  ring: "rgba(52, 59, 98, 0.18)",
  centreRing: "rgba(217, 133, 111, 0.55)",
  dots: ["#63a6c4", "#d9856f", "#e2ac5a"],
  text: "#1b1f38",
};

/* Radii as a fraction of the square's side; period in seconds; direction ±1. */
const ORBITS = [
  { radius: 0.46, period: 18, direction: 1, phase: 0 },
  { radius: 0.32, period: 13, direction: -1, phase: 2.1 },
  { radius: 0.17, period: 9, direction: 1, phase: 4.2 },
];

const CENTRE_RADIUS = 0.115;
const DOT_RADIUS = 3;
const LABEL = "Judgment";

export function AnimatedOrbits() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = motionQuery.matches;
    let size = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      size = Math.min(rect.width, rect.height);
    };

    const draw = (elapsedSeconds: number) => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const cx = rect.width / 2;
      const cy = rect.height / 2;

      ctx.lineWidth = 1;

      // Orbit rings (hairlines) and their travelling dots
      ORBITS.forEach((orbit, index) => {
        const r = orbit.radius * size;

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = COLORS.ring;
        ctx.stroke();

        const angle =
          orbit.phase + orbit.direction * ((elapsedSeconds / orbit.period) * Math.PI * 2);
        const dx = cx + Math.cos(angle) * r;
        const dy = cy + Math.sin(angle) * r;

        ctx.beginPath();
        ctx.arc(dx, dy, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = COLORS.dots[index % COLORS.dots.length];
        ctx.fill();
      });

      // Centre circle
      const centreR = CENTRE_RADIUS * size;
      ctx.beginPath();
      ctx.arc(cx, cy, centreR, 0, Math.PI * 2);
      ctx.strokeStyle = COLORS.centreRing;
      ctx.stroke();

      // Centre label in the display font (resolved from the canvas element's computed style)
      const family = getComputedStyle(canvas).fontFamily || "serif";
      let fontSize = size * 0.05;
      ctx.font = `${fontSize}px ${family}`;
      const maxWidth = centreR * 1.6;
      const measured = ctx.measureText(LABEL).width;
      if (measured > maxWidth) {
        fontSize *= maxWidth / measured;
        ctx.font = `${fontSize}px ${family}`;
      }
      ctx.fillStyle = COLORS.text;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(LABEL, cx, cy);
    };

    const start = performance.now();
    const render = (now: number) => {
      draw((now - start) / 1000);
      frameRef.current = requestAnimationFrame(render);
    };

    const stop = () => cancelAnimationFrame(frameRef.current);

    const run = () => {
      stop();
      if (reduceMotion) {
        draw(0);
      } else {
        frameRef.current = requestAnimationFrame(render);
      }
    };

    const onMotionChange = (event: MediaQueryListEvent) => {
      reduceMotion = event.matches;
      run();
    };

    resize();
    run();

    // Redraw once web fonts have loaded so the static frame uses the display face
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (reduceMotion) draw(0);
      });
    }

    let resizeObserver: ResizeObserver | null = null;
    const onWindowResize = () => {
      resize();
      if (reduceMotion) draw(0);
    };

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(onWindowResize);
      resizeObserver.observe(canvas);
    } else {
      window.addEventListener("resize", onWindowResize);
    }

    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      stop();
      motionQuery.removeEventListener("change", onMotionChange);
      if (resizeObserver) resizeObserver.disconnect();
      else window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Animated illustration of automation orbiting human judgment"
      className="block w-full h-full font-display"
    />
  );
}
