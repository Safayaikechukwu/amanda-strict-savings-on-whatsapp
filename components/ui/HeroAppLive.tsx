"use client";

import {
  AppBubble,
  AppChatHeader,
  AppChatWatermark,
  AppComposer,
  ChatBody,
  DatePill,
  PhoneShell,
} from "@/components/ui/FeatureSceneIllustrations";
import { AMANDA_THREAD } from "@/components/ui/heroWhatsAppData";
import type { HeroAnimState } from "@/components/ui/useHeroAnim";

function bubblePosition(
  index: number,
  visible: typeof AMANDA_THREAD,
): "single" | "first" | "middle" | "last" {
  const role = visible[index]?.from;
  const samePrev = index > 0 && visible[index - 1]?.from === role;
  const sameNext = index < visible.length - 1 && visible[index + 1]?.from === role;
  if (!samePrev && !sameNext) return "single";
  if (!samePrev && sameNext) return "first";
  if (samePrev && sameNext) return "middle";
  return "last";
}

function TypingBubble() {
  return (
    <div className="flex justify-start px-[10px]">
      <div
        className="hero-app-bubble flex max-w-[72px] items-center gap-[4px] rounded-[18px] rounded-bl-[3px] px-3 py-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
        style={{ background: "#fff" }}
      >
        <span className="hero-app-typing" aria-hidden>
          <i />
          <i />
          <i />
        </span>
      </div>
    </div>
  );
}

function Thread({ anim }: { anim: HeroAnimState }) {
  const visible = AMANDA_THREAD.slice(0, anim.amandaCount);

  return (
    <div className="relative flex min-h-0 flex-1 flex-col bg-[#f4f4f5]">
      <AppChatWatermark />
      <AppChatHeader />
      <ChatBody>
        {visible.length > 0 || anim.typing ? <DatePill>Today</DatePill> : null}
        {visible.map((bubble, index) => {
          const body =
            bubble.bold != null ? (
              <>
                {bubble.text}
                {"\n\n"}
                <span className="font-semibold">{bubble.bold}</span>
              </>
            ) : (
              bubble.text
            );

          return (
            <AppBubble
              key={bubble.id}
              from={bubble.from}
              time={bubble.time}
              position={bubblePosition(index, visible)}
              animate
            >
              {body}
            </AppBubble>
          );
        })}
        {anim.typing ? <TypingBubble /> : null}
      </ChatBody>
      <AppComposer />
    </div>
  );
}

/** Animated Amanda in-app chat — phone only (mobile + desktop). */
export function HeroAppLive({
  anim,
  scale = 0.82,
}: {
  anim: HeroAnimState;
  scale?: number;
}) {
  return (
    <PhoneShell scale={scale} variant="hero">
      <Thread anim={anim} />
    </PhoneShell>
  );
}

/** @deprecated use HeroAppLive */
export function HeroPhoneLive({
  anim,
  scale = 0.82,
}: {
  anim: HeroAnimState;
  scale?: number;
}) {
  return <HeroAppLive anim={anim} scale={scale} />;
}

/** @deprecated use HeroAppLive */
export function HeroWhatsAppLive({ anim }: { anim: HeroAnimState }) {
  return (
    <div className="flex justify-center">
      <HeroAppLive anim={anim} scale={0.88} />
    </div>
  );
}
