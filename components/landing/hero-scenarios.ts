"use client";

import { useEffect, useState } from "react";

/**
 * Shared scenario clock for the hero: the globe canvas, the conversation card,
 * the caption under the globe and the Listen / Understand / Act / Escalate strip
 * all read the same timeline so they move together.
 */

export type Outcome = "act" | "escalate";
export type Stage = 0 | 1 | 2 | 3; // Listen · Understand · Act/Escalate · Logged

export type Scenario = {
  channel: string;
  type: string;
  vertical: string;
  time: string;
  quote: string;
  result: string;
  outcome: Outcome;
};

// Illustrative requests, drawn from the same situations as the activity feed
// (boiler breakdown, cancellation slot filled, invoice matched, clinical message escalated).
export const SCENARIOS: Scenario[] = [
  { channel: "PHONE", type: "NEW REQUEST", vertical: "HEATING", time: "TUE 08:42", quote: "“Our boiler’s gone off overnight — can someone come today?”", result: "Urgency read · same-day slot held · engineer assigned", outcome: "act" },
  { channel: "SMS", type: "RESCHEDULE", vertical: "PLUMBING", time: "WED 12:10", quote: "“Can we move Thursday to Friday morning?”", result: "Calendar updated · confirmation sent", outcome: "act" },
  { channel: "SCRIBE", type: "CONSULTATION", vertical: "CLINIC", time: "TUE 11:05", quote: "A 12-minute consultation, captured in the room.", result: "Structured note drafted · sent for clinician review", outcome: "act" },
  { channel: "PATIENT PORTAL", type: "MESSAGE", vertical: "CLINIC", time: "MON 09:48", quote: "“Is this something I should be worried about?”", result: "Clinical question · handed to the care team with context", outcome: "escalate" },
  { channel: "EMAIL", type: "INVOICE", vertical: "ELECTRICAL", time: "THU 16:05", quote: "“Did you get my payment for last week’s job?”", result: "Payment matched · invoice closed · books updated", outcome: "act" },
  { channel: "BOOKS", type: "RECONCILIATION", vertical: "ELECTRICAL", time: "MON 07:30", quote: "Three invoices past 30 days with no payment logged.", result: "Reminders queued · ledger flagged · owner briefed", outcome: "act" },
  { channel: "WHATSAPP", type: "BOOKING", vertical: "HEATING", time: "FRI 10:20", quote: "“Can you get me in on Tuesday?”", result: "Live availability checked · slot held", outcome: "act" },
  { channel: "WEB CHAT", type: "CANCELLATION", vertical: "CLINIC", time: "MON 14:15", quote: "“I need to cancel my 3pm today.”", result: "Slot released · priority list texted · gap filled", outcome: "act" },
];

export const SCENARIO_LENGTH = 7; // seconds
const STAGE_ENDS = [1.4, 2.9, 4.8, SCENARIO_LENGTH]; // Listen · Understand · Act/Escalate · Logged

export function stageAt(local: number): Stage {
  if (local < STAGE_ENDS[0]) return 0;
  if (local < STAGE_ENDS[1]) return 1;
  if (local < STAGE_ENDS[2]) return 2;
  return 3;
}

export function scenarioAt(t: number) {
  const index = Math.floor(t / SCENARIO_LENGTH) % SCENARIOS.length;
  const local = t % SCENARIO_LENGTH;
  return { index, local, stage: stageAt(local), scenario: SCENARIOS[index] };
}

let origin: number | null = null;
/** Seconds since the first hero component mounted on the client. */
export function scenarioClock() {
  if (origin === null) origin = performance.now();
  return (performance.now() - origin) / 1000;
}

export function useScenario() {
  const [state, setState] = useState(() => ({ index: 0, local: 0, stage: 0 as Stage, scenario: SCENARIOS[0], reduced: false }));
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setState({ ...scenarioAt(3.5), reduced: true });
      return;
    }
    const id = setInterval(() => setState({ ...scenarioAt(scenarioClock()), reduced: false }), 120);
    return () => clearInterval(id);
  }, []);
  return state;
}
