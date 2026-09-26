"use client";

import { useSyncExternalStore } from "react";
import { AMANDA_THREAD } from "@/components/ui/heroWhatsAppData";

export type HeroPhase = "chat";

export type HeroAnimState = {
  phase: HeroPhase;
  amandaCount: number;
  typing: boolean;
  done: boolean;
};

const INITIAL: HeroAnimState = {
  phase: "chat",
  amandaCount: 0,
  typing: false,
  done: false,
};

const DONE: HeroAnimState = {
  phase: "chat",
  amandaCount: AMANDA_THREAD.length,
  typing: false,
  done: true,
};

const START_MS = 400;
const USER_MS = 320;
const TYPE_MS = 220;
const REPLY_MS = 480;
const GAP_MS = 240;

type Keyframe = { at: number; state: HeroAnimState };

function buildKeyframes(): Keyframe[] {
  const frames: Keyframe[] = [{ at: 0, state: { ...INITIAL } }];
  let t = START_MS;
  let count = 0;

  for (let i = 0; i < AMANDA_THREAD.length; i += 1) {
    const bubble = AMANDA_THREAD[i]!;
    const prev = AMANDA_THREAD[i - 1];
    const isAmanda = bubble.from === "amanda";
    const afterUser = prev?.from === "user";

    if (isAmanda && afterUser) {
      t += TYPE_MS;
      frames.push({
        at: t,
        state: {
          phase: "chat",
          amandaCount: count,
          typing: true,
          done: false,
        },
      });
      t += REPLY_MS;
    } else {
      t += i === 0 ? 0 : isAmanda ? REPLY_MS : USER_MS;
    }

    count += 1;
    frames.push({
      at: t,
      state: {
        phase: "chat",
        amandaCount: count,
        typing: false,
        done: false,
      },
    });
    t += GAP_MS;
  }

  frames.push({
    at: t,
    state: { ...DONE },
  });

  return frames;
}

const KEYFRAMES = buildKeyframes();

let state: HeroAnimState = { ...INITIAL };
let raf = 0;
let startAt = 0;
let running = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function stateAt(elapsed: number): HeroAnimState {
  let current = KEYFRAMES[0]!.state;
  for (const frame of KEYFRAMES) {
    if (elapsed >= frame.at) current = frame.state;
    else break;
  }
  return current;
}

function tick(now: number) {
  if (!running) return;
  const elapsed = now - startAt;
  const next = stateAt(elapsed);
  if (
    next.amandaCount !== state.amandaCount ||
    next.typing !== state.typing ||
    next.done !== state.done
  ) {
    state = next;
    emit();
  }
  if (!next.done) {
    raf = requestAnimationFrame(tick);
  } else {
    running = false;
  }
}

export function startHeroAnim() {
  if (running) return;
  running = true;
  startAt = performance.now();
  state = { ...INITIAL };
  emit();
  raf = requestAnimationFrame(tick);
}

export function resetHeroAnim() {
  running = false;
  if (raf) cancelAnimationFrame(raf);
  raf = 0;
  state = { ...INITIAL };
  emit();
}

/** If the clock never advanced past empty, snap to finished thread. */
export function forceHeroAnimDoneIfStuck() {
  if (state.done) return;
  if (state.amandaCount > 0) return;
  running = false;
  if (raf) cancelAnimationFrame(raf);
  state = { ...DONE };
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return state;
}

function getServerSnapshot() {
  return INITIAL;
}

export function useHeroAnim() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
