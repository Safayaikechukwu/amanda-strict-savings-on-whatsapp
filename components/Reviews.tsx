import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SnapCarousel } from "@/components/ui/SnapCarousel";

const cards = [
  {
    tag: "ADHD",
    tagBg: "#fdecec",
    tagDot: "#e03e3e",
    quote:
      "As somebody with ADHD and dyslexia, Amanda helps because I never remember to actually go into a savings app to lock funds or ever use a budgeting app. Amanda is the real deal.",
    name: "Safaya Ikechukwu",
    role: "21 · Product manager, Lagos",
    overlay: "bg-[#c23b3b]/75",
    image: "/reviews/adhd.jpg",
  },
  {
    tag: "Gift pressure",
    tagBg: "#fbf3db",
    tagDot: "#cb912f",
    quote:
      "I make around ₦3 million a month, but I couldn't keep it. People message me to beg, and I end up spending on gifts. With Amanda I just show them proof the money is locked. They stop asking, and it has saved me a lot.",
    name: "Samuel Akpan",
    role: "Regional Marketing Manager, Lagos State",
    overlay: "bg-[#c46a1b]/75",
    image: "/reviews/samuel-akpan.png",
  },
  {
    tag: "Freelance income",
    tagBg: "#f6eaea",
    tagDot: "#4a0508",
    quote:
      "As a freelancer the money comes in big, then it disappears for weeks. Amanda helps me treat a ₦2 million job like it has to last — I budget around ₦1 million and break it into monthly, weekly, and daily so I don't burn the whole thing at once.",
    name: "Ngazi Promise",
    role: "Freelancer, Lagos",
    overlay: "bg-[#4a0508]/75",
    image: "/reviews/ngazi-promise.png",
  },
] as const;

export function Reviews() {
  return (
    <Section id="reviews" aria-labelledby="reviews-heading">
      <Reveal>
        <h2
          id="reviews-heading"
          className="text-left text-[2rem] font-bold tracking-[-0.03em] text-ink sm:text-4xl md:text-[2.75rem]"
        >
          What customers are saying
        </h2>
      </Reveal>

      {/* Mobile: horizontal snap carousel + dots. Desktop: 3-up grid. */}
      <SnapCarousel
        count={cards.length}
        label="Customer testimonials"
        trackClassName="-mx-4 mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-5 sm:gap-4 sm:px-5 [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0 md:pb-0"
      >
        {cards.map((card, index) => (
          <Reveal
            key={card.name}
            delay={index * 80}
            variant="zoom"
            className="w-[min(82vw,320px)] shrink-0 snap-center sm:w-[min(70vw,340px)] md:w-auto md:snap-align-none"
          >
            <figure className="relative h-[560px] overflow-hidden rounded-[18px] sm:h-[620px] lg:h-[680px]">
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(max-width: 768px) 82vw, 33vw"
                className="object-cover object-top"
              />
              <div
                className={["absolute inset-0 mix-blend-multiply", card.overlay].join(
                  " ",
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/20" />

              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7 lg:p-8">
                <span
                  className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[13px] font-semibold tracking-[-0.01em] text-ink"
                  style={{ backgroundColor: card.tagBg }}
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: card.tagDot }}
                    aria-hidden="true"
                  />
                  {card.tag}
                </span>
                <figcaption>
                  <blockquote className="text-[1.05rem] leading-[1.4] tracking-[-0.01em] text-white [font-family:var(--font-serif),ui-serif,Georgia,serif] sm:text-[1.15rem] lg:text-[1.2rem]">
                    “{card.quote}”
                  </blockquote>
                  <p className="mt-5 text-[14px] font-semibold text-white">
                    {card.name}
                  </p>
                  <p className="mt-1 text-[13px] text-white/80">{card.role}</p>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        ))}
      </SnapCarousel>
    </Section>
  );
}
