"use client";

import { useEffect, useRef } from "react";

export function AnimatedWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = "·∘○◯◌●◉";
    let time = 0;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = motionQuery.matches;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      ctx.font = "14px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const cols = Math.floor(rect.width / 20);
      const rows = Math.floor(rect.height / 20);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const px = (x + 0.5) * (rect.width / cols);
          const py = (y + 0.5) * (rect.height / rows);

          // Multiple wave interference
          const wave1 = Math.sin(x * 0.2 + time * 2) * Math.cos(y * 0.15 + time);
          const wave2 = Math.sin((x + y) * 0.1 + time * 1.5);
          const wave3 = Math.cos(x * 0.1 - y * 0.1 + time * 0.8);
          
          const combined = (wave1 + wave2 + wave3) / 3;
          const normalized = (combined + 1) / 2;
          
          const charIndex = Math.floor(normalized * (chars.length - 1));
          const alpha = 0.15 + normalized * 0.5;

          ctx.fillStyle = `rgba(52, 59, 98, ${alpha})`;
          ctx.fillText(chars[charIndex], px, py);
        }
      }
    };

    const render = () => {
      draw();
      time += 0.03;
      frameRef.current = requestAnimationFrame(render);
    };

    const stop = () => cancelAnimationFrame(frameRef.current);

    // Reduced motion: draw a single static frame (time stays at 0) instead of looping.
    const run = () => {
      stop();
      if (reduceMotion) {
        time = 0;
        draw();
      } else {
        frameRef.current = requestAnimationFrame(render);
      }
    };

    const onMotionChange = (event: MediaQueryListEvent) => {
      reduceMotion = event.matches;
      run();
    };

    const onResize = () => {
      resize();
      if (reduceMotion) draw();
    };

    resize();
    run();
    window.addEventListener("resize", onResize);
    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
