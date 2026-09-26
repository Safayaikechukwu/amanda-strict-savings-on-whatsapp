"use client";

import { useEffect, useRef } from "react";
import { HeroAppLive } from "@/components/ui/HeroAppLive";
import {
  forceHeroAnimDoneIfStuck,
  resetHeroAnim,
  startHeroAnim,
  useHeroAnim,
} from "@/components/ui/useHeroAnim";

/** Hero phone canvas (must match PhoneShell hero variant × scale) */
const PHONE_SCALE = 0.82;
const PHONE_DESIGN_H = 852;
const PHONE_VISIBLE = 0.78; // top portion — hard-crop the rest

const cropH = Math.round(PHONE_DESIGN_H * PHONE_SCALE * PHONE_VISIBLE);

/**
 * Single visible Amanda in-app chat phone + visibility-gated hero clock.
 */
export function HeroProduct() {
  const anim = useHeroAnim();
  const rootRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const seqRef = useRef<string[]>([]);

  const seqKey = anim.done
    ? "done"
    : `chat${anim.amandaCount}${anim.typing ? "t" : ""}`;
  if (seqRef.current[seqRef.current.length - 1] !== seqKey) {
    seqRef.current = [...seqRef.current, seqKey];
  }

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    resetHeroAnim();
    startedRef.current = false;
    seqRef.current = [];

    const arm = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      startHeroAnim();
    };

    const visiblyOnScreen = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const visiblePx = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
      if (visiblePx <= 0) return false;
      const ratio = visiblePx / Math.min(rect.height || 1, vh);
      return ratio >= 0.3;
    };

    if (visiblyOnScreen()) {
      arm();
      return;
    }

    if (!("IntersectionObserver" in window)) {
      arm();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) arm();
      },
      { threshold: [0.25, 0.4] },
    );

    observer.observe(node);
    const retry = window.setTimeout(() => {
      if (visiblyOnScreen()) arm();
    }, 120);

    return () => {
      observer.disconnect();
      window.clearTimeout(retry);
    };
  }, []);

  useEffect(() => {
    if (!startedRef.current) return;
    if (anim.done) return;
    if (anim.amandaCount > 0) return;

    const id = window.setTimeout(() => {
      forceHeroAnimDoneIfStuck();
    }, 2500);

    return () => window.clearTimeout(id);
  }, [anim.done, anim.amandaCount]);

  return (
    <div
      ref={rootRef}
      data-hero-phase="chat"
      data-hero-amanda={anim.amandaCount}
      {...(process.env.NODE_ENV === "development"
        ? { "data-hero-seq": seqRef.current.join(">") }
        : {})}
      className="flex justify-center px-2"
    >
      {/* Soft shadow outside crop — overflow-hidden was clipping PhoneShell drop-shadow */}
      <div
        className="mx-auto w-full max-w-[340px] md:max-w-[360px]"
        style={{
          filter: "drop-shadow(0 14px 24px rgba(0,0,0,0.12))",
        }}
      >
        <div className="overflow-hidden" style={{ height: cropH }}>
          <HeroAppLive anim={anim} scale={PHONE_SCALE} />
        </div>
      </div>
    </div>
  );
}
