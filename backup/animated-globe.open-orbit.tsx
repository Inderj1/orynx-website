"use client";

import { useEffect, useRef } from "react";

/**
 * Open Orbit — the Orynx hero globe.
 *
 * The logo's three rings (r 15 : 11.5 : 8) are the cosines of three latitudes
 * (0°, 39.94°, 57.77°), so the logo IS this globe seen from the north pole.
 * The intro draws the logo flat, then tilts the camera; the globe turns once
 * every 24 s (one 15° meridian per second). Requests arrive on a ring (Listen),
 * stop at Understand and Act, and one in four lifts off the ring to a person
 * (Escalate). Every completed item leaves a tick on the outer ledger.
 */

const COLORS = {
  ink: "#1b1f38",
  indigo: "#46527f",
  blue: "#63a6c4",
  coral: "#d9856f",
  amber: "#e2ac5a",
};

// Screen angles are clockwise from 3 o'clock in the pole view (exact logo orientation).
const RINGS = [
  { lat: 0, sweep: 290.3, gapCentre: 303.2, color: COLORS.indigo },
  { lat: 39.94, sweep: 284.0, gapCentre: 74.0, color: COLORS.blue },
  { lat: 57.77, sweep: 272.2, gapCentre: 184.1, color: COLORS.coral },
];
const STATIONS = [
  { f: 0, name: "LISTEN", color: COLORS.blue },
  { f: 0.42, name: "UNDERSTAND", color: COLORS.indigo },
  { f: 0.78, name: "ACT", color: COLORS.amber },
  { f: 1, name: "ESCALATE", color: COLORS.coral },
];
const SPIN_RATE = 15; // deg/s → one revolution per 24 s
const LAUNCH_EVERY = 4.8; // per ring; three rings → one launch every 1.6 s
const RAD = Math.PI / 180;

type Pulse = { ring: number; tau: number; escalates: boolean };

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const smoothstep = (t: number) => t * t * (3 - 2 * t);
const rgba = (hex: string, a: number) =>
  `rgba(${parseInt(hex.slice(1, 3), 16)},${parseInt(hex.slice(3, 5), 16)},${parseInt(hex.slice(5, 7), 16)},${a.toFixed(3)})`;

/** Pulse position along its ring (0..1 of the sweep) and visual state at life-time tau. */
function pulseState(p: Pulse) {
  const t = p.tau;
  if (t < 1.6) return { f: 0.42 * easeInOutQuad(t / 1.6), stage: 0, done: false, lift: 0 };
  if (t < 1.85) return { f: 0.42, stage: 1, done: false, lift: 0 };
  if (t < 3.15) return { f: 0.42 + 0.36 * easeInOutQuad((t - 1.85) / 1.3), stage: 1, done: false, lift: 0 };
  if (t < 3.4) return { f: 0.78, stage: 2, done: false, lift: 0 };
  if (!p.escalates) return { f: 0.78, stage: 2, done: t >= 3.9, lift: 0, bloom: clamp01((t - 3.4) / 0.5) };
  if (t < 4.2) return { f: 0.78 + 0.22 * easeInOutQuad((t - 3.4) / 0.8), stage: 2, done: false, lift: 0 };
  if (t < 5.0) return { f: 1, stage: 3, done: false, lift: easeOutCubic((t - 4.2) / 0.8) };
  if (t < 7.0) return { f: 1, stage: 3, done: false, lift: 1 + 0.05 * ((t - 5) / 2) };
  return { f: 1, stage: 3, done: t >= 7.6, lift: 1.05, fade: clamp01((t - 7) / 0.6) };
}

export function AnimatedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hover = window.matchMedia("(hover: hover)").matches;
    canvas.style.fontFamily = "var(--font-jetbrains), ui-monospace, SFMono-Regular, monospace";
    const mono = getComputedStyle(canvas).fontFamily || "monospace";

    let width = 0;
    let height = 0;
    let dpr = 1;
    let elapsed = reduced ? 20 : 0; // reduced motion: one steady-state frame
    let last = performance.now();
    let running = true;
    let visible = true;
    let frame = 0;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const ledger: { angle: number; color: string; at: number }[] = [];
    const finished = new Set<string>();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduced) draw();
    };

    // Orthographic projection. Elevation e = 90° looks straight down at the north pole.
    const project = (lat: number, lon: number, e: number, scale: number, R: number, cx: number, cy: number) => {
      const cp = Math.cos(lat);
      const x = cp * Math.sin(lon);
      const y = Math.sin(lat);
      const z = cp * Math.cos(lon);
      const se = Math.sin(e);
      const ce = Math.cos(e);
      return { sx: cx + R * scale * x, sy: cy + R * scale * (-y * ce + z * se), d: y * se + z * ce };
    };

    const strokePolyline = (pts: { sx: number; sy: number; d: number }[], color: string, front: number, back: number, lw: number) => {
      // Batch into a front path and a back path so each polyline costs two strokes.
      for (const pass of [0, 1]) {
        ctx.beginPath();
        let open = false;
        for (let i = 1; i < pts.length; i++) {
          const a = pts[i - 1];
          const b = pts[i];
          const isFront = a.d + b.d > 0;
          if ((pass === 1) === isFront) {
            if (!open) ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            open = true;
          } else open = false;
        }
        ctx.strokeStyle = rgba(color, pass === 1 ? front : back);
        ctx.lineWidth = lw;
        ctx.stroke();
      }
    };

    const draw = () => {
      const t = elapsed;
      const S = Math.min(width, height);
      if (S <= 0) return;
      const R = S * 0.4;
      const cx = width / 2 + pointer.x;
      const cy = height / 2 + pointer.y;
      ctx.clearRect(0, 0, width, height);

      // Camera: logo (pole view) → tilt → gentle nod. Spin ramps in with the tilt.
      const tilt = easeInOutCubic(clamp01((t - 0.9) / 2.2));
      const eSteady = 42 + 6 * Math.cos((2 * Math.PI * Math.max(0, t - 3.1)) / 40);
      const e = (90 + (eSteady - 90) * tilt) * RAD;
      // Spin rate ramps 0 → 15°/s with the tilt (easeInQuad); its integral over the ramp is 11°.
      const u = clamp01((t - 0.9) / 2.2);
      const spinDeg = t < 3.1 ? -11 * u * u * u : -SPIN_RATE * (t - 3.1) - 11;
      const spin = spinDeg * RAD;
      const body = smoothstep(clamp01((90 * RAD - e) / (20 * RAD)));
      const lonAt = (screenDeg: number) => (90 - screenDeg) * RAD + spin;

      // Limb
      if (body > 0) {
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(COLORS.ink, 0.32 * body);
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Meridians every 15° (one passes per second). Cut at ±78° so the pole never knots.
      if (body > 0) {
        for (let m = 0; m < 24; m++) {
          const lon = m * 15 * RAD + spin;
          const pts = [];
          for (let k = 0; k <= 26; k++) {
            const lat = (-78 + (156 * k) / 26) * RAD;
            pts.push(project(lat, lon, e, 1, R, cx, cy));
          }
          strokePolyline(pts, COLORS.ink, 0.14 * body, 0.045 * body, 1);
        }
      }

      // Logo rings, drawn on during the intro, then riding the spin.
      const ringPts: { sx: number; sy: number; d: number }[][] = [];
      RINGS.forEach((ring, i) => {
        const gap = 360 - ring.sweep;
        const start = ring.gapCentre + gap / 2;
        const progress = easeOutCubic(clamp01((t - 0.08 * i) / 0.6));
        const n = 120;
        const pts = [];
        for (let k = 0; k <= n; k++) {
          const screenDeg = start + (ring.sweep * progress * k) / n;
          pts.push(project(ring.lat * RAD, lonAt(screenDeg), e, 1, R, cx, cy));
        }
        ringPts.push(pts);
        strokePolyline(pts, ring.color, 0.9, 0.24, 1.6);
        // Station ticks and labels (equator ring only, front-facing only) once the globe is up.
        if (body > 0.6 && progress >= 1) {
          STATIONS.forEach((st) => {
            const deg = start + ring.sweep * st.f;
            const p = project(ring.lat * RAD, lonAt(deg), e, 1, R, cx, cy);
            const q = project(ring.lat * RAD, lonAt(deg), e, 1.045, R, cx, cy);
            if (p.d < 0.05) return;
            const a = clamp01((p.d - 0.05) / 0.4) * body;
            ctx.beginPath();
            ctx.moveTo(p.sx, p.sy);
            ctx.lineTo(q.sx, q.sy);
            ctx.strokeStyle = rgba(ring.color, 0.8 * a);
            ctx.lineWidth = 1.2;
            ctx.stroke();
            if (i === 0) {
              // Labels sit just inside the limb so they never spill into the headline column.
              const l = project(ring.lat * RAD, lonAt(deg), e, 0.9, R, cx, cy);
              ctx.font = `500 10px ${mono}`;
              ctx.textAlign = l.sx < cx ? "left" : "right";
              ctx.textBaseline = "middle";
              ctx.fillStyle = rgba(COLORS.ink, 0.62 * a);
              ctx.fillText(st.name, l.sx, l.sy);
            }
          });
        }
      });

      // Pulses: ring i launches at 2 + 1.6·i + 4.8·k; launch (k + i) mod 4 == 3 escalates.
      if (body > 0.3) {
        RINGS.forEach((ring, i) => {
          const gap = 360 - ring.sweep;
          const start = ring.gapCentre + gap / 2;
          const kMax = Math.floor((t - 2 - 1.6 * i) / LAUNCH_EVERY);
          for (let k = Math.max(0, kMax - 1); k <= kMax; k++) {
            const tau = t - (2 + 1.6 * i + LAUNCH_EVERY * k);
            if (tau < 0) continue;
            const pulse: Pulse = { ring: i, tau, escalates: (k + i) % 4 === 3 };
            const st = pulseState(pulse);
            const key = `${i}:${k}`;
            if (st.done) {
              if (!finished.has(key) && !reduced) {
                finished.add(key);
                ledger.push({ angle: (90 + t * SPIN_RATE) * RAD, color: pulse.escalates ? COLORS.coral : COLORS.amber, at: t });
                if (ledger.length > 48) ledger.shift();
              }
              continue;
            }
            const deg = start + ring.sweep * st.f;
            const scale = 1 + 0.2 * st.lift;
            const p = project(ring.lat * RAD, lonAt(deg), e, scale, R, cx, cy);
            const depthA = p.d > 0 ? 1 : 0.4;
            const fade = 1 - (st.fade ?? 0);
            const color = STATIONS[st.stage].color;
            // Ping at arrival
            if (tau < 0.3) {
              const r = 2 + 9 * (tau / 0.3);
              ctx.beginPath();
              ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
              ctx.strokeStyle = rgba(COLORS.blue, 0.8 * (1 - tau / 0.3) * depthA);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            // Bloom at Act for resolved items
            if (st.bloom !== undefined) {
              ctx.beginPath();
              ctx.arc(p.sx, p.sy, 3 + 9 * st.bloom, 0, Math.PI * 2);
              ctx.strokeStyle = rgba(COLORS.amber, 0.85 * (1 - st.bloom) * depthA);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            // Tether from the ring's end cap to the escalated item
            if (st.lift > 0) {
              const cap = project(ring.lat * RAD, lonAt(start + ring.sweep), e, 1, R, cx, cy);
              ctx.beginPath();
              ctx.moveTo(cap.sx, cap.sy);
              ctx.lineTo(p.sx, p.sy);
              ctx.strokeStyle = rgba(COLORS.coral, 0.7 * depthA * fade);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            const r = st.stage === 3 ? 3 + 1.8 * Math.min(1, st.lift) : 3;
            ctx.beginPath();
            ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
            ctx.fillStyle = rgba(color, depthA * fade);
            ctx.fill();
            if (st.stage === 3) {
              ctx.strokeStyle = rgba(COLORS.ink, 0.9 * depthA * fade);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      }

      // Ledger: every completed item leaves a tick outside the limb, fading over 60 s.
      for (const tick of ledger) {
        const age = t - tick.at;
        if (age > 60) continue;
        const a = 0.7 * (1 - age / 60) * body;
        const c = Math.cos(tick.angle);
        const s = Math.sin(tick.angle);
        ctx.beginPath();
        ctx.moveTo(cx + (R + 5) * c, cy + (R + 5) * s);
        ctx.lineTo(cx + (R + 11) * c, cy + (R + 11) * s);
        ctx.strokeStyle = rgba(tick.color, a);
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    };

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (running && visible) {
        elapsed += dt;
        pointer.x += (pointer.tx - pointer.x) * 0.06;
        pointer.y += (pointer.ty - pointer.y) * 0.06;
        draw();
      }
      frame = requestAnimationFrame(loop);
    };

    const onPointer = (ev: PointerEvent) => {
      pointer.tx = ((ev.clientX / window.innerWidth) - 0.5) * 12;
      pointer.ty = ((ev.clientY / window.innerHeight) - 0.5) * 12;
    };
    const onVisibility = () => {
      running = !document.hidden;
      last = performance.now();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      last = performance.now();
    });
    io.observe(canvas);

    if (reduced) {
      draw();
    } else {
      document.addEventListener("visibilitychange", onVisibility);
      if (hover) window.addEventListener("pointermove", onPointer, { passive: true });
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} aria-hidden="true" />;
}
