/**
 * Amanda in-app chat mockups (from udara-mobile AI home).
 *
 * Designed at real iPhone logical width (390px), then uniformly scaled
 * for feature cards so proportions stay locked.
 */

import Image from "next/image";

/** iPhone logical width — design canvas for true UI proportions */
const DESIGN_W = 390;
/** Default display scale for feature cards */
const FEATURE_SCALE = 0.72;
/** Feature-card phone — taller Pro-like aspect (closer to 19.5:9) */
const DESIGN_H = 844;
/** Hero phone — iPhone 14/15 Pro logical height */
const HERO_DESIGN_W = 393;
const HERO_DESIGN_H = 852;

const APP = {
  bg: "#ffffff",
  text: "#0d0d0d",
  muted: "#6b6b6b",
  faint: "#9ca3af",
  accent: "#4a0508",
  bot: "#e9e9eb",
  border: "#ebebeb",
  composer: "#dddddd",
} as const;

function SignalIcon({ dark = true }: { dark?: boolean }) {
  const c = dark ? APP.text : "#fff";
  return (
    <svg width="17" height="11" viewBox="0 0 16 10" fill="none" aria-hidden>
      <rect x="0" y="6.5" width="2.2" height="3.5" rx="0.4" fill={c} />
      <rect x="3.5" y="4.5" width="2.2" height="5.5" rx="0.4" fill={c} />
      <rect x="7" y="2.2" width="2.2" height="7.8" rx="0.4" fill={c} />
      <rect x="10.5" y="0" width="2.2" height="10" rx="0.4" fill={c} />
    </svg>
  );
}

function WifiIcon({ dark = true }: { dark?: boolean }) {
  const c = dark ? APP.text : "#fff";
  return (
    <svg width="15" height="11" viewBox="0 0 14 10" fill="none" aria-hidden>
      <path
        d="M7 8.6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.6-1.7a3.7 3.7 0 0 1 5.2 0l-.9.9a2.4 2.4 0 0 0-3.4 0l-.9-.9Zm-1.9-1.9a6.3 6.3 0 0 1 9 0l-.9.9a5 5 0 0 0-7.2 0l-.9-.9Z"
        fill={c}
      />
    </svg>
  );
}

function BatteryIcon({ dark = true }: { dark?: boolean }) {
  const c = dark ? APP.text : "#fff";
  return (
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden>
      <rect
        x="0.5"
        y="0.75"
        width="21"
        height="10.5"
        rx="2.5"
        stroke={c}
        strokeOpacity="0.4"
      />
      <rect x="2" y="2.25" width="16.5" height="7.5" rx="1.5" fill={c} />
      <path
        d="M23 4v4c.8-.4.8-1.2 0-1.6V4Z"
        fill={c}
        fillOpacity="0.4"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M11 5v12M5 11h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V21h2v-3.1A7 7 0 0 0 19 11h-2z" />
    </svg>
  );
}

export function PhoneShell({
  children,
  scale = FEATURE_SCALE,
  variant = "feature",
}: {
  children: React.ReactNode;
  /** Uniform scale of the design canvas */
  scale?: number;
  /** Hero = taller iPhone Pro chassis */
  variant?: "feature" | "hero";
}) {
  const hero = variant === "hero";
  const canvasW = hero ? HERO_DESIGN_W : DESIGN_W;
  const canvasH = hero ? HERO_DESIGN_H : DESIGN_H;
  const displayW = canvasW * scale;
  const displayH = canvasH * scale;

  // Natural titanium Pro proportions for both feature + hero
  const outerR = hero ? 58 : 56;
  const midR = hero ? 53 : 51.5;
  const screenR = hero ? 49 : 47.5;
  const framePad = hero ? 6.5 : 5.5;
  const glassPad = 2.25;

  return (
    <div
      className="relative mx-auto select-none"
      style={{
        width: displayW,
        height: displayH,
        // Feature cards: soft lift. Hero shadow is applied outside the crop clip.
        filter: hero
          ? undefined
          : "drop-shadow(0 8px 14px rgba(0,0,0,0.12))",
      }}
      aria-hidden="true"
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: canvasW,
          height: canvasH,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {/* Silent / volume / power — graphite metal */}
        <div
          className="pointer-events-none absolute -left-[3.5px] top-[142px] z-50 h-[34px] w-[3.5px] rounded-l-[2px]"
          style={{
            background:
              "linear-gradient(90deg, #9a9a9e 0%, #4a4a4e 35%, #1a1a1c 100%)",
            boxShadow: "-1px 0 2px rgba(0,0,0,0.35)",
          }}
        />
        <div
          className="pointer-events-none absolute -left-[3.5px] top-[192px] z-50 h-[66px] w-[3.5px] rounded-l-[2px]"
          style={{
            background:
              "linear-gradient(90deg, #9a9a9e 0%, #4a4a4e 35%, #1a1a1c 100%)",
            boxShadow: "-1px 0 2px rgba(0,0,0,0.35)",
          }}
        />
        <div
          className="pointer-events-none absolute -left-[3.5px] top-[270px] z-50 h-[66px] w-[3.5px] rounded-l-[2px]"
          style={{
            background:
              "linear-gradient(90deg, #9a9a9e 0%, #4a4a4e 35%, #1a1a1c 100%)",
            boxShadow: "-1px 0 2px rgba(0,0,0,0.35)",
          }}
        />
        <div
          className="pointer-events-none absolute -right-[3.5px] top-[224px] z-50 h-[100px] w-[3.5px] rounded-r-[2px]"
          style={{
            background:
              "linear-gradient(270deg, #9a9a9e 0%, #4a4a4e 35%, #1a1a1c 100%)",
            boxShadow: "1px 0 2px rgba(0,0,0,0.35)",
          }}
        />

        {/* Outer titanium chassis */}
        <div
          className="relative h-full"
          style={{
            borderRadius: outerR,
            padding: framePad,
            background:
              "linear-gradient(145deg, #c4c4c8 0%, #8e8e93 12%, #5c5c60 28%, #2c2c2e 48%, #4a4a4e 62%, #1a1a1c 78%, #0a0a0b 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.55), inset 1px 0 0 rgba(255,255,255,0.12), inset -1px 0 0 rgba(0,0,0,0.35)",
          }}
        >
          {/* Flat side band (flat-edge iPhone look) */}
          <div
            className="pointer-events-none absolute inset-[1px] z-0"
            style={{
              borderRadius: outerR - 1,
              boxShadow:
                "inset 0 0 0 1.5px rgba(255,255,255,0.08), inset 0 0 0 3px rgba(0,0,0,0.25)",
            }}
          />

          {/* Glass / black bezel rim */}
          <div
            className="relative z-10 h-full overflow-hidden"
            style={{
              borderRadius: midR,
              padding: glassPad,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.05) 22%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,1) 100%)",
              boxShadow:
                "inset 0 0 0 1px rgba(0,0,0,0.75), 0 0 0 0.5px rgba(255,255,255,0.12)",
            }}
          >
            {/* Screen */}
            <div
              className="relative flex h-full flex-col overflow-hidden font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]"
              style={{
                borderRadius: screenR,
                background: "#f4f4f5",
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.35)",
              }}
            >
              {/* Dynamic Island */}
              <div
                className="absolute left-1/2 z-50 -translate-x-1/2 rounded-full bg-black"
                style={{
                  top: hero ? 13 : 12,
                  height: hero ? 37 : 35,
                  width: hero ? 126 : 122,
                  boxShadow:
                    "inset 0 0 0 1px rgba(255,255,255,0.16), 0 1px 3px rgba(0,0,0,0.55), 0 0 0 3px rgba(0,0,0,0.35)",
                }}
              >
                {/* Speaker grill hint */}
                <span
                  className="absolute left-1/2 top-1/2 h-[4px] w-[38px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)",
                    boxShadow: "inset 0 0.5px 0 rgba(255,255,255,0.08)",
                  }}
                />
                {/* Front camera */}
                <span
                  className="absolute top-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    right: hero ? 18 : 16,
                    height: hero ? 11 : 10,
                    width: hero ? 11 : 10,
                    background: "#0b1520",
                    boxShadow:
                      "inset 0 0 0 1.5px #1a3a5c, 0 0 0 1px rgba(0,0,0,0.85)",
                  }}
                />
                <span
                  className="absolute rounded-full"
                  style={{
                    right: hero ? 21 : 19,
                    top: hero ? 13 : 12,
                    height: 2.5,
                    width: 2.5,
                    background: "rgba(74,144,184,0.7)",
                  }}
                />
                {/* Ambient sensor */}
                <span
                  className="absolute top-1/2 -translate-y-1/2 rounded-full bg-[#111]"
                  style={{
                    left: hero ? 20 : 18,
                    height: 8,
                    width: 8,
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
                  }}
                />
              </div>

              {/* Status bar */}
              <div
                className={[
                  "relative z-40 flex shrink-0 items-end justify-between font-semibold tracking-[-0.01em]",
                  hero
                    ? "h-[59px] px-[30px] pb-[11px] text-[15px]"
                    : "h-[54px] px-[28px] pb-[10px] text-[15px]",
                ].join(" ")}
                style={{ color: APP.text, background: "#f4f4f5" }}
              >
                <span className="w-[64px]">9:41</span>
                <div className="flex w-[78px] items-center justify-end gap-[6px]">
                  <SignalIcon dark />
                  <WifiIcon dark />
                  <BatteryIcon dark />
                </div>
              </div>

              <div className="relative flex min-h-0 flex-1 flex-col bg-[#f4f4f5]">
                <div className="relative z-20 flex min-h-0 flex-1 flex-col">
                  {children}
                </div>
              </div>

              {/* Home indicator */}
              <div
                className={[
                  "pointer-events-none absolute inset-x-0 z-50 flex justify-center",
                  hero ? "bottom-[10px]" : "bottom-[8px]",
                ].join(" ")}
              >
                <div
                  className="rounded-full"
                  style={{
                    height: 5,
                    width: hero ? 134 : 128,
                    background: "rgba(0,0,0,0.88)",
                    boxShadow: "0 0.5px 1px rgba(255,255,255,0.25)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


/** Soft Amanda mark — low and quiet, like the real app empty state. */
export function AppChatWatermark() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-[120px] top-[120px] z-0 flex items-center justify-center"
      aria-hidden
    >
      <div className="opacity-[0.07]">
        <Image
          src="/amanda-mark.png"
          alt=""
          width={72}
          height={72}
          className="h-[72px] w-[72px] object-contain"
        />
      </div>
    </div>
  );
}

/** Real chat header — same density as the old WA header, Amanda app styling. */
export function AppChatHeader({ subtitle = "Always here" }: { subtitle?: string }) {
  return (
    <div
      className="relative z-30 flex h-[56px] shrink-0 items-center gap-[10px] border-b px-[14px]"
      style={{
        background: "rgba(255,255,255,0.92)",
        borderColor: APP.border,
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="relative h-[36px] w-[36px] shrink-0 overflow-hidden rounded-[30%]"
        style={{ background: APP.accent }}
      >
        <Image
          src="/amanda-mark.png"
          alt=""
          width={36}
          height={36}
          className="h-full w-full scale-[1.08] object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p
          className="truncate text-[17px] font-semibold leading-[20px] tracking-[-0.2px]"
          style={{ color: APP.text }}
        >
          Amanda
        </p>
        <p className="truncate text-[13px] leading-[16px]" style={{ color: APP.muted }}>
          {subtitle}
        </p>
      </div>
      <div
        className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full"
        style={{ background: "#f0f0f0", color: APP.accent }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 8v5l3 2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

/** @deprecated use AppChatHeader */
export function AppChatTopChrome() {
  return null;
}

export function AppComposer() {
  return (
    <div
      className="relative z-30 mt-auto flex shrink-0 items-end gap-[8px] border-t px-[10px] pb-[28px] pt-[10px]"
      style={{
        background: "rgba(255,255,255,0.96)",
        borderColor: APP.border,
        boxShadow: "0 -8px 24px rgba(0,0,0,0.04)",
      }}
    >
      <div
        className="mb-[2px] flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full text-white shadow-[0_1px_2px_rgba(0,0,0,0.18)]"
        style={{ background: APP.accent }}
      >
        <PlusIcon />
      </div>
      <div
        className="flex min-h-[40px] flex-1 items-center rounded-[22px] px-[16px] py-[10px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]"
        style={{ background: APP.composer }}
      >
        <span className="text-[15px] leading-none" style={{ color: APP.muted }}>
          Message Amanda
        </span>
      </div>
      <div
        className="mb-[2px] flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full text-white shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
        style={{ background: "#1a1a1a" }}
      >
        <MicIcon />
      </div>
    </div>
  );
}

export function DatePill({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center py-[8px]">
      <span
        className="rounded-[8px] px-[10px] py-[5px] text-[12px] font-medium shadow-[0_1px_1px_rgba(0,0,0,0.04)]"
        style={{ background: "#fff", color: APP.muted }}
      >
        {children}
      </span>
    </div>
  );
}

type BubblePosition = "single" | "first" | "middle" | "last";

function bubbleRadii(isUser: boolean, position: BubblePosition): string {
  const R = "18px";
  const G = "5px";
  const T = "3px";
  if (isUser) {
    switch (position) {
      case "first":
        return `${R} ${R} ${G} ${R}`;
      case "middle":
        return `${R} ${G} ${G} ${R}`;
      case "last":
        return `${R} ${G} ${T} ${R}`;
      default:
        return `${R} ${R} ${T} ${R}`;
    }
  }
  switch (position) {
    case "first":
      return `${R} ${R} ${R} ${G}`;
    case "middle":
      return `${G} ${R} ${R} ${G}`;
    case "last":
      return `${G} ${R} ${R} ${T}`;
    default:
      return `${R} ${R} ${R} ${T}`;
  }
}

export function AppBubble({
  from,
  time,
  children,
  position = "single",
  animate,
}: {
  from: "amanda" | "user";
  time?: string;
  children: React.ReactNode;
  position?: BubblePosition;
  /** Optional hero entrance animation class */
  animate?: boolean;
}) {
  const isUser = from === "user";

  return (
    <div
      className={`relative flex px-[10px] ${isUser ? "justify-end" : "justify-start"} ${
        animate ? "hero-app-bubble" : ""
      }`}
    >
      <div
        className="relative max-w-[82%] px-[12px] pb-[6px] pt-[7px] text-[15.5px] leading-[20px] tracking-[-0.15px] shadow-[0_1px_1.5px_rgba(0,0,0,0.08)]"
        style={{
          borderRadius: bubbleRadii(isUser, position),
          background: isUser ? APP.accent : "#fff",
          color: isUser ? "#fff" : APP.text,
          boxShadow: isUser
            ? "0 1px 2px rgba(74,5,8,0.22)"
            : "0 1px 2px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)",
        }}
      >
        <div className="whitespace-pre-wrap pr-[2px]">{children}</div>
        {time ? (
          <div className="-mb-px mt-[3px] flex items-center justify-end gap-[3px]">
            <span
              className="text-[11px] leading-none"
              style={{ color: isUser ? "rgba(255,255,255,0.65)" : APP.faint }}
            >
              {time}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function ChatBody({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative z-20 flex flex-1 flex-col justify-start gap-[5px] overflow-hidden px-[2px] pb-[6px] pt-[6px]"
      style={{ background: "#f4f4f5" }}
    >
      {children}
    </div>
  );
}

function AppChatScreen({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-0 flex-1 flex-col" style={{ background: "#f4f4f5" }}>
      <AppChatWatermark />
      <AppChatHeader />
      <ChatBody>{children}</ChatBody>
      <AppComposer />
    </div>
  );
}

/** Spending truth — same script, Amanda app chat. */
export function TruthScene() {
  return (
    <PhoneShell>
      <AppChatScreen>
        <DatePill>Today</DatePill>
        <AppBubble from="user" time="9:38 PM" position="single">
          Where did my money go this week?
        </AppBubble>
        <AppBubble from="amanda" time="9:38 PM" position="single">
          <span className="font-semibold">This week&apos;s truth</span>
          {"\n\n"}
          Food — ₦48,200 (52%)
          {"\n"}
          Transfers — ₦31,000
          {"\n"}
          Noise — ₦12,450
          {"\n\n"}
          Food alone ate most of what you moved.
        </AppBubble>
        <AppBubble from="user" time="9:39 PM" position="single">
          That food number is crazy
        </AppBubble>
        <AppBubble from="amanda" time="9:39 PM" position="single">
          Most of it hit after 7PM. Want me to lock snacks with the night rule?
        </AppBubble>
        <AppBubble from="user" time="9:40 PM" position="single">
          Yes. Do it.
        </AppBubble>
        <AppBubble from="amanda" time="9:40 PM" position="single">
          Done. I&apos;ll send tomorrow&apos;s breakdown at 9AM.
        </AppBubble>
      </AppChatScreen>
    </PhoneShell>
  );
}

/** 7PM lock — the signature product moment. */
export function LockScene() {
  return (
    <PhoneShell>
      <AppChatScreen>
        <DatePill>Today</DatePill>
        <AppBubble from="user" time="7:42 PM" position="single">
          Transfer ₦15,000 to FoodPlace?
        </AppBubble>
        <AppBubble from="amanda" time="7:42 PM" position="single">
          It&apos;s 7:42PM.
          {"\n\n"}
          Transfers reopen at 6AM.
          {"\n\n"}
          <span className="font-semibold">Transfer blocked.</span>
          {"\n"}
          No override. No exceptions.
        </AppBubble>
        <AppBubble from="user" time="7:43 PM" position="single">
          Please, just this once?
        </AppBubble>
        <AppBubble from="amanda" time="7:43 PM" position="single">
          Still no.
          {"\n"}
          Your land fund stays locked until morning.
        </AppBubble>
        <AppBubble from="user" time="7:44 PM" position="single">
          Fine. Show me what I have left for food tomorrow.
        </AppBubble>
        <AppBubble from="amanda" time="7:44 PM" position="single">
          ₦6,200 left in today&apos;s food budget.
          {"\n"}
          Resets at 6AM with the lock.
        </AppBubble>
        <AppBubble from="user" time="7:45 PM" position="single">
          Okay. Goodnight then.
        </AppBubble>
        <AppBubble from="amanda" time="7:45 PM" position="single">
          Sleep. The money will still be there.
        </AppBubble>
      </AppChatScreen>
    </PhoneShell>
  );
}

/** Live accountability feed. */
export function TrackScene() {
  return (
    <PhoneShell>
      <AppChatScreen>
        <DatePill>Today</DatePill>
        <AppBubble from="amanda" time="4:12 PM" position="single">
          <span className="font-semibold">Live spend update</span>
          {"\n"}
          <span style={{ color: APP.muted }}>Today so far</span>
          {"\n\n"}
          FoodPlace · Food
          {"\n"}
          ₦15,000
          {"\n\n"}
          Bolt · Transit
          {"\n"}
          ₦2,400
          {"\n\n"}
          Shoprite · Groceries
          {"\n"}
          ₦18,650
          {"\n\n"}
          ₦36,050 spent · ₦14,000 left today
        </AppBubble>
        <AppBubble from="user" time="4:13 PM" position="single">
          Keep watching it.
        </AppBubble>
        <AppBubble from="amanda" time="4:13 PM" position="single">
          Already am. I&apos;ll ping you before 7PM if food climbs again.
        </AppBubble>
        <AppBubble from="user" time="5:02 PM" position="single">
          Just took another Bolt
        </AppBubble>
        <AppBubble from="amanda" time="5:02 PM" position="single">
          Logged. Transit is ₦4,800 today.
          {"\n"}
          Still within range.
        </AppBubble>
        <AppBubble from="user" time="5:03 PM" position="single">
          Cool. Tell me if I get close.
        </AppBubble>
        <AppBubble from="amanda" time="5:03 PM" position="single">
          I will. That&apos;s the job.
        </AppBubble>
      </AppChatScreen>
    </PhoneShell>
  );
}

/** Save while you spend — auto tuck-away. */
export function SaveScene() {
  return (
    <PhoneShell>
      <AppChatScreen>
        <DatePill>Today</DatePill>
        <AppBubble from="user" time="2:08 PM" position="single">
          Just paid Bolt ₦2,400
        </AppBubble>
        <AppBubble from="amanda" time="2:08 PM" position="single">
          <span className="font-semibold">Saved ₦200 for you.</span>
          {"\n\n"}
          Tucked into Land Fund while you spent.
          {"\n\n"}
          Land Fund — ₦186,400
          {"\n"}
          +₦200 just now
        </AppBubble>
        <AppBubble from="user" time="2:09 PM" position="single">
          Keep doing that.
        </AppBubble>
        <AppBubble from="amanda" time="2:09 PM" position="single">
          Every spend can grow the goal. That&apos;s the point.
        </AppBubble>
        <AppBubble from="user" time="3:41 PM" position="single">
          Paid Shoprite ₦12,000
        </AppBubble>
        <AppBubble from="amanda" time="3:41 PM" position="single">
          Saved another ₦600.
          {"\n"}
          Land Fund — ₦187,000
        </AppBubble>
        <AppBubble from="user" time="3:42 PM" position="single">
          We&apos;re actually moving
        </AppBubble>
        <AppBubble from="amanda" time="3:42 PM" position="single">
          Quietly. That&apos;s how it sticks.
        </AppBubble>
      </AppChatScreen>
    </PhoneShell>
  );
}

/** Static hero conversation — lock + spend thread. */
export function HeroScene({ scale = 0.88 }: { scale?: number }) {
  return (
    <PhoneShell scale={scale} variant="hero">
      <AppChatScreen>
        <DatePill>Today</DatePill>
        <AppBubble from="user" time="7:41 PM" position="first">
          FoodPlace just dropped their account
        </AppBubble>
        <AppBubble from="user" time="7:41 PM" position="last">
          transfer 15k?
        </AppBubble>
        <AppBubble from="amanda" time="7:42 PM" position="single">
          It&apos;s 7:42PM. Transfers reopen at 6AM.
          {"\n\n"}
          <span className="font-semibold">Transfer blocked.</span>
        </AppBubble>
        <AppBubble from="user" time="7:42 PM" position="single">
          ah come on. please
        </AppBubble>
        <AppBubble from="amanda" time="7:42 PM" position="single">
          No. Land fund stays locked till morning.
          {"\n"}
          No override.
        </AppBubble>
        <AppBubble from="user" time="7:43 PM" position="single">
          fine. what did I even spend this week
        </AppBubble>
        <AppBubble from="amanda" time="7:43 PM" position="single">
          Food ₦18.4k · Transfers ₦6.2k · Noise ₦4.1k
        </AppBubble>
        <AppBubble from="user" time="7:43 PM" position="single">
          lock snacks after 7 too
        </AppBubble>
        <AppBubble from="amanda" time="7:44 PM" position="single">
          Done. Strict mode is on. Sleep — the money will still be there.
        </AppBubble>
      </AppChatScreen>
    </PhoneShell>
  );
}
