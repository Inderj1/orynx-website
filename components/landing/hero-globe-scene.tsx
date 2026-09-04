"use client";

import { useEffect, useRef } from "react";
import { SCENARIOS, scenarioAt, scenarioClock, useScenario } from "./hero-scenarios";

/**
 * Hero globe scene: the ASCII sphere with an information layer on top.
 * A core node (the front desk) sits at the centre; channel nodes sit on the
 * disc; each scenario lights a channel, tethers it to the core, shows the
 * request on a card and resolves it (Act) or hands it to a person (Escalate).
 */

const INK = "#1b1f38";
const INDIGO = "#343b62";
const BLUE = "#63a6c4";
const BLUE_INK = "#2f5568";
const CORAL = "#d9856f";
const CORAL_INK = "#a2472f";
const AMBER = "#e2ac5a";
const AMBER_INK = "#7f5312";
const PAPER = "#f4f4f1";

// Channel nodes at fixed positions on the disc (fractions of the sphere radius).
const NODES: { name: string; x: number; y: number; tone: "blue" | "coral" }[] = [
  { name: "PHONE", x: -0.7, y: -0.22, tone: "blue" },
  { name: "WEB CHAT", x: 0.12, y: -0.72, tone: "blue" },
  { name: "SMS", x: 0.74, y: -0.28, tone: "blue" },
  { name: "WHATSAPP", x: 0.6, y: 0.48, tone: "blue" },
  { name: "EMAIL", x: -0.5, y: 0.58, tone: "blue" },
  { name: "PATIENT PORTAL", x: -0.08, y: 0.7, tone: "coral" },
];
const CHIPS: Record<string, string> = {
  "NEW REQUEST": "SLOT · TODAY 2:30 PM · HELD",
  RESCHEDULE: "MOVED · FRI 9:00 AM · CONFIRMED",
  MESSAGE: "CARE TEAM · WITH CONTEXT",
  INVOICE: "PAYMENT · MATCHED · CLOSED",
  BOOKING: "SLOT · TUE 9:30 AM · HELD",
  CANCELLATION: "3:00 PM · REFILLED · SMS SENT",
};

const GLYPHS = "░▒▓█▀▄▌▐│─┤├┴┬╭╮╰╯";
const RAD = Math.PI / 180;
const rgba = (hex: string, a: number) =>
  `rgba(${parseInt(hex.slice(1, 3), 16)},${parseInt(hex.slice(3, 5), 16)},${parseInt(hex.slice(5, 7), 16)},${a.toFixed(3)})`;
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    canvas.style.fontFamily = "var(--font-jetbrains), ui-monospace, SFMono-Regular, monospace";
    const mono = getComputedStyle(canvas).fontFamily || "monospace";

    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    let spin = 0;
    let last = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduced) draw(3.5);
    };

    const draw = (t: number) => {
      const S = Math.min(width, height);
      if (S <= 0) return;
      const cx = width / 2;
      const cy = height / 2;
      const R = S * 0.46; // a touch under the original 0.5 so the hero headline keeps clear of the disc
      ctx.clearRect(0, 0, width, height);
      const { local, stage, scenario } = scenarioAt(t);
      const active = NODES.find((n) => n.name === scenario.channel) ?? NODES[0];
      const tone = scenario.outcome === "escalate" ? CORAL : stage >= 2 ? AMBER : active.tone === "coral" ? CORAL : BLUE;

      // ── ASCII sphere body (the original hero texture, in brand ink) ──
      ctx.font = `${Math.max(9, Math.round(S / 66))}px ${mono}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const rotY = spin * 0.3;
      const rotX = spin * 0.2;
      const pts: { x: number; y: number; z: number; band: boolean }[] = [];
      for (let theta = 0.2; theta < Math.PI - 0.2; theta += 0.15) {
        // Widen the longitude step toward the poles so the grid never bunches into a knot.
        const step = 0.15 / Math.max(0.3, Math.sin(theta));
        for (let phi = 0; phi < Math.PI * 2 - step / 2; phi += step) {
          const x0 = Math.sin(theta) * Math.cos(phi + spin * 0.5);
          const y0 = Math.sin(theta) * Math.sin(phi + spin * 0.5);
          const z0 = Math.cos(theta);
          const x1 = x0 * Math.cos(rotY) - z0 * Math.sin(rotY);
          const z1 = x0 * Math.sin(rotY) + z0 * Math.cos(rotY);
          const y1 = y0 * Math.cos(rotX) - z1 * Math.sin(rotX);
          const z2 = y0 * Math.sin(rotX) + z1 * Math.cos(rotX);
          pts.push({ x: cx + x1 * R, y: cy + y1 * R, z: z2, band: false });
        }
      }
      pts.sort((a, b) => a.z - b.z);
      // A horizontal band of glyphs across the front carries the channel tone — the work in flight.
      const bandY = cy + R * 0.22;
      const bandColor = active.tone === "coral" ? CORAL : BLUE;
      for (const p of pts) {
        const depth = (p.z + 1) / 2;
        const a = 0.08 + depth * 0.42;
        const inBand = p.z > 0.15 && Math.abs(p.y - bandY) < R * 0.05;
        ctx.fillStyle = inBand ? rgba(bandColor, 0.3 + depth * 0.55) : rgba(INK, a);
        ctx.fillText(GLYPHS[Math.floor(depth * (GLYPHS.length - 1))], p.x, p.y);
      }

      // ── Limb ──
      ctx.beginPath();
      ctx.setLineDash([2, 5]);
      ctx.arc(cx, cy, R * 0.985, 0, Math.PI * 2);
      ctx.strokeStyle = rgba(INK, 0.25);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);

      // ── Tethers ──
      const ax = cx + active.x * R;
      const ay = cy + active.y * R;
      const cardX = width - S * 0.05;
      const cardY = S * 0.16;
      if (stage >= 0 && stage <= 2) {
        const p = stage === 0 ? clamp01(local / 0.6) : 1;
        ctx.beginPath();
        ctx.setLineDash([2, 4]);
        ctx.moveTo(ax, ay);
        ctx.lineTo(ax + (cx - ax) * p, ay + (cy - ay) * p);
        ctx.strokeStyle = rgba(INK, 0.55);
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.setLineDash([]);
      }
      if (stage >= 1 && stage <= 2) {
        ctx.beginPath();
        ctx.setLineDash([2, 4]);
        ctx.moveTo(ax, ay);
        ctx.lineTo(ax, cardY + 8);
        ctx.lineTo(cardX, cardY + 8);
        ctx.strokeStyle = rgba(INK, 0.3);
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // ── Channel nodes ──
      ctx.font = `600 9px ${mono}`;
      for (const n of NODES) {
        const nx = cx + n.x * R;
        const ny = cy + n.y * R;
        const isActive = n === active;
        const color = n.tone === "coral" ? CORAL : BLUE;
        const inkColor = n.tone === "coral" ? CORAL_INK : BLUE_INK;
        // paper halo so the node reads over the glyphs
        ctx.beginPath();
        ctx.arc(nx, ny, 9, 0, Math.PI * 2);
        ctx.fillStyle = rgba(PAPER, 0.9);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(nx, ny, isActive ? 5 : 3.5, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? rgba(color, 1) : rgba(PAPER, 1);
        ctx.fill();
        ctx.strokeStyle = rgba(isActive ? inkColor : INK, isActive ? 1 : 0.45);
        ctx.lineWidth = 1.2;
        ctx.stroke();
        if (isActive && stage === 0 && !reduced) {
          const k = (local % 0.9) / 0.9;
          ctx.beginPath();
          ctx.arc(nx, ny, 6 + 14 * k, 0, Math.PI * 2);
          ctx.strokeStyle = rgba(color, 0.8 * (1 - k));
          ctx.stroke();
        }
        ctx.textAlign = n.x < -0.2 ? "right" : n.x > 0.2 ? "left" : "center";
        ctx.textBaseline = n.y > 0.6 ? "top" : n.y < -0.6 ? "bottom" : "middle";
        const lx = nx + (n.x < -0.2 ? -12 : n.x > 0.2 ? 12 : 0);
        const ly = ny + (n.y > 0.6 ? 12 : n.y < -0.6 ? -12 : 0);
        ctx.lineWidth = 3;
        ctx.strokeStyle = rgba(PAPER, 0.95);
        ctx.strokeText(n.name, lx, ly);
        ctx.fillStyle = rgba(isActive ? inkColor : INK, isActive ? 1 : 0.55);
        ctx.fillText(n.name, lx, ly);
      }

      // ── Core node (the front desk) ──
      ctx.beginPath();
      ctx.arc(cx, cy, 13, 0, Math.PI * 2);
      ctx.fillStyle = rgba(PAPER, 0.92);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx, cy, 10, 0, Math.PI * 2);
      ctx.strokeStyle = rgba(INDIGO, 0.9);
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = rgba(INDIGO, 1);
      ctx.fill();
      if (stage === 1 && !reduced) {
        const k = ((local - 1.4) % 0.75) / 0.75;
        ctx.beginPath();
        ctx.arc(cx, cy, 12 + 18 * k, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(INDIGO, 0.7 * (1 - k));
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // ── Result chip beside the active node (Act / Escalate) ──
      if (stage >= 2) {
        const chip = CHIPS[scenario.type] ?? "";
        const fade = stage === 3 ? 1 - clamp01((local - (SCENARIO_END - 0.6)) / 0.6) : clamp01((local - 2.9) / 0.35);
        ctx.font = `600 9px ${mono}`;
        const w = ctx.measureText(chip).width + 18;
        const chipX = active.x > 0.2 ? ax - 14 - w : ax + 14;
        const chipY = ay - 22;
        ctx.fillStyle = rgba(PAPER, 0.96 * fade);
        ctx.strokeStyle = rgba(tone, 0.9 * fade);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(chipX, chipY, w, 18, 9);
        ctx.fill();
        ctx.stroke();
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillStyle = rgba(scenario.outcome === "escalate" ? CORAL_INK : AMBER_INK, fade);
        ctx.fillText(chip, chipX + 9, chipY + 9.5);
      }
    };

    const SCENARIO_END = 7;
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (visible && !document.hidden) {
        spin += dt;
        draw(scenarioClock());
      }
      frame = requestAnimationFrame(loop);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      last = performance.now();
    });
    io.observe(canvas);
    if (!reduced) frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} aria-hidden="true" />;
}

export function HeroGlobeScene() {
  const { stage, scenario, local } = useScenario();
  const escalates = scenario.outcome === "escalate";
  const showCard = stage >= 1 && !(stage === 3 && local > 6.4);
  const showResult = stage >= 2;
  const toneClass = escalates ? "text-brand-coral-ink" : "text-brand-blue-ink";
  const resultClass = escalates ? "text-brand-coral-ink" : "text-brand-amber-ink";

  return (
    <div className="relative w-full h-full">
      <GlobeCanvas />

      {/* Conversation card */}
      <div
        className={`absolute right-[5%] top-[12%] w-[300px] max-w-[46%] border border-foreground/10 bg-card/95 backdrop-blur-sm px-4 py-3 shadow-lg shadow-foreground/10 transition-all duration-500 ${
          showCard ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
        aria-live="polite"
      >
        <div className="flex items-baseline justify-between gap-3 font-mono text-[10px] uppercase tracking-wider">
          <span className={toneClass}>
            {scenario.channel} · {scenario.type}
          </span>
          <span className="text-muted-foreground whitespace-nowrap">
            {scenario.vertical} · {scenario.time}
          </span>
        </div>
        <p className="mt-1.5 text-[13px] leading-snug text-foreground">{scenario.quote}</p>
        <p
          className={`mt-1.5 font-mono text-[11px] leading-snug ${resultClass} transition-opacity duration-500 ${
            showResult ? "opacity-100" : "opacity-0"
          }`}
        >
          → {scenario.result}
        </p>
      </div>

      {/* Caption */}
      <div className="absolute inset-x-0 -bottom-7 flex flex-col items-center font-mono text-[10px] uppercase tracking-wider">
        <div className="text-muted-foreground">
          Running for <span className="ml-2 text-foreground">{scenario.vertical}</span>
        </div>
      </div>
    </div>
  );
}

export { SCENARIOS };
