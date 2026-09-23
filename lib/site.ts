/** Canonical site URL for metadata, sitemap, and structured data. */
export const siteConfig = {
  name: "Amanda",
  legalName: "Amanda Technologies",
  legalEntity: "Amanda Global Limited",
  tagline: "Strict savings on WhatsApp",
  description:
    "Amanda is a strict savings AI agent on WhatsApp for Nigeria. It explains your spending, hard-locks transfers from 7PM until morning, and helps you build discipline without another app.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.useamanda.com",
  locale: "en_NG",
  twitterHandle: "@useamanda",
  /** E.164 without + — support line */
  whatsappNumber: "2347077069738",
  /** E.164 without + — Join Amanda CTA opens this line */
  whatsappJoinNumber: "2349066842645",
  whatsappJoinMessage: "HI AMANDA",
  supportPhoneDisplay: "+234 707 706 9738",
  supportHours: "Mon-Fri, 9AM-6PM WAT",
  bankingPartner: "Rubies Microfinance Bank",
  ndpcRegistration: "NDPC/DCP/11710",
  address: {
    streetAddress: "25 Herbert Macaulay Way",
    addressLocality: "Yaba",
    addressRegion: "Lagos State",
    addressCountry: "NG",
  },
  sameAs: [
    "https://x.com/useamanda",
    "https://www.tiktok.com/@amandahq",
    "https://www.linkedin.com/company/amanda-tech/",
  ],
} as const;

/** Opens WhatsApp with a pre-filled join message (Join Amanda buttons). */
export const whatsappJoinUrl = `https://wa.me/${siteConfig.whatsappJoinNumber}?text=${encodeURIComponent(siteConfig.whatsappJoinMessage)}`;

export const supportWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}`;
