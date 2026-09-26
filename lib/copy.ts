import { whatsappIntentUrl, whatsappJoinUrl } from "@/lib/site";

export const copy = {
  brand: "Amanda",
  tagline: "Your strict savings partner, in the app.",

  hero: {
    line1Prefix: "End",
    line2: "with a strict partner.",
    rotatingWords: [
      { text: "overspending", bg: "#fdecec", dot: "#e03e3e" },
      { text: "overeating", bg: "#fbf3db", dot: "#cb912f" },
      { text: "overshopping", bg: "#eadffb", dot: "#6940a5" },
      { text: "impulse buys", bg: "#f6eaea", dot: "#4a0508" },
    ],
    subtext:
      "Amanda is an AI agent that makes sense of your finances, locks funds, and grows your money through smart savings, strict financial habits, and financial education.",
    cta: "Join Amanda",
  },

  nav: {
    /** Desktop text links + mobile list links — hrefs match real section ids */
    links: [
      { label: "Features", href: "#how-amanda-helps" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Reviews", href: "#reviews" },
      { label: "Security", href: "#security" },
      { label: "FAQ", href: "#faq" },
    ],
    /** Mobile featured cards — Notion Product mega-menu style (art on top) */
    featured: [
      {
        label: "Testimonials",
        blurb: "Hear how people stay disciplined with Amanda.",
        href: "#reviews",
        tone: "blue" as const,
      },
      {
        label: "Learn",
        blurb: "Short money videos on TikTok.",
        href: "https://www.tiktok.com/@amandahq",
        tone: "coral" as const,
        external: true,
      },
      {
        label: "The science behind Amanda",
        blurb: "Research that shaped how Amanda locks and saves.",
        href: "/science",
        tone: "gold" as const,
      },
    ],
    /** Primary CTA — opens WhatsApp with a pre-filled join message */
    joinHref: whatsappJoinUrl,
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },

  joinPrompt: {
    title: "Your money is leaking tonight.",
    body: "Late-night transfers, food runs, and “just this once” add up fast. Amanda locks the door at 7PM and helps you keep what you meant to save.",
    primary: "Join Amanda",
    secondary: "Not now",
  },

  trust: [
    { icon: "phone", text: "Lives in the Amanda app" },
    { icon: "lock", text: "Hard lock from 7PM to morning" },
    { icon: "bank", text: "Powered by Rubies Microfinance Bank" },
    { icon: "naira", text: "Built for Nigerian money habits" },
    { icon: "shield", text: "Strict savings, not soft reminders" },
    { icon: "target", text: "Made for salary leaks and SAPA" },
  ],

  /** Notion-style logo wall under the hero CTA */
  scienceProof: {
    line: "Backed by science",
    labs: [
      { name: "Stanford", mark: "stanford" },
      { name: "MIT", mark: "mit" },
      { name: "Chicago Booth", mark: "booth" },
      { name: "LSE", mark: "lse" },
      { name: "Yale", mark: "yale" },
      { name: "Harvard", mark: "harvard" },
      { name: "UCL", mark: "ucl" },
      { name: "Oxford", mark: "oxford" },
    ],
  },

  whyItWorks: {
    title: "Why It Works",
    lead: "Financial discipline doesn't come from willpower. It comes from systems.",
    body: "You've tried budgeting apps, Excel trackers, and savings apps. But after seven days, you forget to open the tracker. Before you know it, you've spent more than you can even remember.",
    contrast:
      "Amanda is the opposite. It lives in your phone as a chat, locks funds, and holds you accountable so you can reach your goals.",
    closer:
      "Saving isn't something you remember to do. It's something the system helps you do.",
  },

  /** Research-backed pillars — real authors, real papers */
  scienceBehind: {
    eyebrow: "The science behind Amanda",
    headline: "ADHD brains don’t fail at money. They fail at remembering to protect it.",
    support:
      "Amanda is built around what research already shows: impulse, delay aversion, and weak follow-through beat willpower — so the system has to sit in a chat you actually open.",
    pillars: [
      {
        label: "01",
        title: "Impulse isn’t a character flaw",
        body: "Adults with ADHD are more likely to buy on impulse, struggle to save, and make weaker “future-facing” money decisions — even when they care about money. That’s what standardized financial decision-making studies keep finding.",
        amanda:
          "Amanda surfaces spends in plain language in the app chat, so “I thought I had money” stops hiding in your balance.",
        linkLabel: "Bangma et al., Neuropsychology",
        href: "https://doi.org/10.1037/neu0000571",
        secondaryLinkLabel: "PLOS ONE community sample",
        secondaryHref:
          "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0239343",
      },
      {
        label: "02",
        title: "Future-you needs a lock",
        body: "Present bias makes “just this once” feel cheaper than tomorrow’s goal. Behavioral economists show people will voluntarily precommit — and that those constraints help when willpower fails.",
        amanda:
          "The 7PM hard lock is that precommitment: you decide while calm; the system holds you when impulse is loudest.",
        linkLabel: "Ariely & Wertenbroch on self-imposed deadlines",
        href: "https://doi.org/10.1111/1467-9280.00441",
        secondaryLinkLabel: "Laibson on hyperbolic discounting",
        secondaryHref: "https://doi.org/10.1162/003355397555253",
      },
      {
        label: "03",
        title: "Presence beats lonely willpower",
        body: "Body doubling — doing hard tasks with another presence nearby — is widely used in ADHD communities. Early accessibility research is starting to study it for real: safe, promising for some ADHD adults, still early as hard science.",
        amanda:
          "Amanda acts like a money body double in chat: always there for the night window, in the same place you check your money.",
        linkLabel: "ACM ASSETS body-doubling EEG study",
        href: "https://dl.acm.org/doi/10.1145/3663547.3759743",
        secondaryLinkLabel: "Neurodivergent body-doubling survey (PDF)",
        secondaryHref: "https://leyabreanna.com/papers/body_double_taccess.pdf",
      },
      {
        label: "04",
        title: "Savings collapse without systems",
        body: "Long ADHD outcome work linked to Barkley and colleagues tracks weaker saving, more financial dependence, and the “ADHD tax” of late fees and forgotten bills — executive function gaps, not laziness.",
        amanda:
          "The Amanda chat is the external scaffold: locks, clarity, and accountability happen in one place you already open.",
        linkLabel: "Altszuler et al. on financial dependence",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4887412/",
        secondaryLinkLabel: "ADHD money tips (Tuckman / CHADD context)",
        secondaryHref:
          "https://www.healthcentral.com/condition/adhd/money-managing-tips-when-you-live-with-adhd",
      },
    ],
    disclaimer:
      "Amanda is not medical treatment. Research informs product design — we map mechanisms (impulse control, precommitment, external scaffolding, accountability), not cures.",
  },

  howAmandaHelps: {
    headline: "Money where your habits live.",
    cards: [
      {
        label: "See the truth",
        title: "Know where every naira actually goes.",
        body: "Amanda breaks down your spends in plain language, so food, transfers, and noise stop hiding in your balance.",
        // Swap later: put a file in /public/mockups and set e.g. "/mockups/truth.png"
        mockup: "",
        mockupAlt: "Amanda spend breakdown in the Amanda app chat",
      },
      {
        label: "Hard time-lock",
        title: "Block transfers from 7PM to morning.",
        body: "When impulse is loudest, Amanda closes the door. No override. No “just this once.” Funds reopen in the morning.",
        mockup: "",
        mockupAlt: "Amanda 7PM transfer lock in the Amanda app chat",
      },
      {
        label: "Stay accountable",
        title: "Track every spend as it happens.",
        body: "Every transfer gets caught in the chat. You always know what you spent today, and what’s left before 7PM.",
        mockup: "",
        mockupAlt: "Amanda live spend tracking in the Amanda app chat",
      },
      {
        label: "Save while you spend",
        title: "Grow your goal with every transfer out.",
        body: "Each spend can tuck a little away automatically, so saving happens in the same moment as spending.",
        mockup: "",
        mockupAlt: "Amanda save-while-you-spend in the Amanda app chat",
      },
    ],
  },

  howItWorks: {
    headline: "How it works",
    steps: [
      { title: "Open Amanda", icon: "chat" },
      { title: "Set your savings goal", icon: "goal" },
      { title: "Move your money in", icon: "fund" },
      { title: "Live with the 7PM lock", icon: "lock" },
      { title: "Watch the goal get closer", icon: "progress" },
    ],
  },

  faq: {
    headline: "FAQ",
    blurb:
      "Clear answers about Amanda, the strict savings app from Amanda Technologies, how the hard lock works, and how your money stays protected with Rubies Microfinance Bank.",
    contactLabel: "Still have questions?",
    phone: "+234 707 706 9738",
    phoneNote: "WhatsApp support · Mon-Fri, 9AM-6PM WAT",
    items: [
      {
        question: "What is Amanda?",
        answer:
          "Amanda is a strict savings AI agent built by Amanda Technologies for Nigeria. It lives in a mobile app chat: it helps you understand spending, hard-locks outbound transfers when you are most likely to overspend, and keeps you accountable to savings goals.",
      },
      {
        question: "How does the 7PM lock work?",
        answer:
          "Amanda's hard lock blocks outbound transfers from 7PM until morning. You can still check balances and chat with Amanda during that window. The goal is to stop late-night impulse transfers, food runs, and \"just this once\" spending when willpower is weakest.",
      },
      {
        question: "Do I need to download another app?",
        answer:
          "Yes. Amanda is its own app — a chat-first savings agent, not another cluttered banking dashboard. Open Amanda, talk to it like a partner, and the hard lock and spend clarity live there.",
      },
      {
        question: "Is my money safe with Amanda?",
        answer:
          "Yes. Customer funds are held with Rubies Microfinance Bank. Amanda is the discipline and accountability layer on top of that banking relationship, not a place where money disappears into a black box. Amanda uses device locks, PINs, and NDPC-aligned data protection practices.",
      },
      {
        question: "Who is Amanda for?",
        answer:
          "Amanda is for people in Nigeria who know they should save but keep negotiating with themselves: ADHD spenders, emotional spenders, salary burners, and anyone tired of budgeting apps they forget to open. If chat is already how you get things done, Amanda meets you there.",
      },
      {
        question: "What if I lose my phone?",
        answer:
          "You can freeze your Amanda account instantly from the Block Account page on this site, then message support to unblock when you are ready. Amanda pauses payment activity and guides you through recovery.",
      },
      {
        question: "How do I join Amanda?",
        answer:
          "Tap Join Amanda on this site to get started, complete a short setup, set a savings goal, and move money in. After that, Amanda handles the hard lock and accountability so you do not have to rely on willpower alone.",
      },
      {
        question: "Is Amanda an app or a bank?",
        answer:
          "Amanda is a mobile savings app and AI chat. Banking services and fund holding are provided through Rubies Microfinance Bank, while Amanda Technologies builds the product experience.",
      },
    ],
  },

  instantBlock: {
    eyebrow: "INSTANT BLOCK",
    headline: "Lost Your Phone? Secure Your Accounts Instantly",
    body: "If your device is stolen or compromised, don't worry — you can freeze your Amanda account from this site and message support to recover. We'll pause all payment activity and guide you through recovery.",
    secondary: "Unblock Account",
    secondaryHref: whatsappIntentUrl(
      "Hi, I pressed Unblock Account. I want to unblock my Amanda account.",
    ),
    primary: "Block Account Now",
  },

  security: {
    headline: "Banking-grade security",
    subhead:
      "Device locks, NDPC certification, and passcodes so your money and chats stay yours.",
    cards: [
      {
        title: "Passcode for Every Payment",
        body: "Every payment through Amanda is protected by a PIN you create during setup. You're in control: set custom limits for when your passcode is required.",
        tone: "coral" as const,
      },
      {
        title: "NDPC-Certified & Private Chat Security",
        body: "Amanda is certified by the Nigeria Data Protection Commission (NDPC), ensuring world-class security standards. Secure your Amanda chat with your phone's password or biometric ID.",
        tone: "blue" as const,
      },
      {
        title: "Biometric Login for Extra Safety",
        body: "Your Amanda activity is protected by your phone's unlock. Want even more privacy? Lock the app with Face ID or your device passcode.",
        tone: "gold" as const,
      },
    ],
  },

  closing: {
    headline: "Stop Negotiating with Your Financial Security",
    subtext:
      "Amanda already knows what you want. Let it help you actually get there.",
    cta: "Join Amanda",
  },

  footer: {
    brandLine: "Amanda. Your strict savings partner, in the app.",
    product: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Reviews", href: "/#reviews" },
      { label: "Security", href: "/#security" },
      { label: "Science", href: "/science" },
      { label: "FAQ", href: "/#faq" },
      { label: "About", href: "/about" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Science", href: "/science" },
      { label: "Contact", href: "/#faq" },
    ],
    legal: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
    newsletter: {
      title: "Get early access updates",
      blurb: "Drop your email. We’ll tell you when Amanda opens, and how to join first.",
      placeholder: "Enter your email",
      cta: "Subscribe",
      success: "You're on the list. We’ll be in touch.",
      error: "Please enter a valid email.",
    },
    social: [
      { label: "X", href: "https://x.com/useamanda", icon: "x" },
      { label: "TikTok", href: "https://www.tiktok.com/@amandahq", icon: "tiktok" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/amanda-tech/", icon: "linkedin" },
    ],
    poweredBy: "Powered by Rubies Microfinance Bank.",
    copyright: "© 2026 Amanda. An Amanda Technologies product.",
  },

  whatsappMock: {
    blockMessage: "It's 7:42PM. Transfers reopen at 6AM.",
  },
} as const;
