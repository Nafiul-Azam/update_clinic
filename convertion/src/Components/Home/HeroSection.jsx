import React, { useEffect, useMemo, useState } from "react";

const heroCards = [
  {
    id: 1,
    title: "রংপুরে আমরাই প্রথম উন্নতমানের MRI সেবা প্রদান করছি",
    subtitle:
      "আধুনিক প্রযুক্তি ও নির্ভুল রিপোর্টের মাধ্যমে নিশ্চিত করুন সঠিক চিকিৎসা",
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1200&q=80",
    badge: "Main Highlight",
  },
  {
    id: 2,
    title: "অভিজ্ঞ ডাক্তার ও আধুনিক যন্ত্রপাতির সমন্বয়ে সেরা সেবা",
    subtitle: "প্রতিটি পরীক্ষায় নির্ভুলতা ও রোগীর নিরাপত্তা আমাদের অগ্রাধিকার",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    badge: "Trust & Technology",
  },
  {
    id: 3,
    title: "দ্রুত, সহজ ও ঝামেলামুক্ত স্বাস্থ্যসেবা এখন আপনার হাতের মুঠোয়",
    subtitle:
      "অনলাইনে সিরিয়াল, স্বল্প সময়ে রিপোর্ট এবং ২৪/৭ পাশে থাকার প্রতিশ্রুতি",
    image:
      "https://images.unsplash.com/photo-1516549655669-df8a8f4f2f5d?auto=format&fit=crop&w=1200&q=80",
    badge: "Service & Care",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const [typedSubtitle, setTypedSubtitle] = useState("");

  const activeCard = useMemo(() => heroCards[activeIndex], [activeIndex]);

  useEffect(() => {
    const slider = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroCards.length);
    }, 7500);

    return () => clearInterval(slider);
  }, []);

  useEffect(() => {
    setTypedTitle("");
    setTypedSubtitle("");

    let titleIndex = 0;
    let subtitleIndex = 0;
    let subtitleTimer;

    const titleTimer = setInterval(() => {
      titleIndex++;
      setTypedTitle(activeCard.title.slice(0, titleIndex));

      if (titleIndex >= activeCard.title.length) {
        clearInterval(titleTimer);

        setTimeout(() => {
          subtitleTimer = setInterval(() => {
            subtitleIndex++;
            setTypedSubtitle(activeCard.subtitle.slice(0, subtitleIndex));

            if (subtitleIndex >= activeCard.subtitle.length) {
              clearInterval(subtitleTimer);
            }
          }, 22);
        }, 250);
      }
    }, 30);

    return () => {
      clearInterval(titleTimer);
      clearInterval(subtitleTimer);
    };
  }, [activeCard]);

  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[34px] border border-white/40 bg-gradient-to-br from-[#F5F9F9] via-[#EAF7F5] to-[#DDF3F0] px-4 py-8 shadow-[0_20px_60px_rgba(1,93,103,0.10)] sm:px-6 md:px-8 lg:px-10 lg:py-12">
          <div className="pointer-events-none absolute -left-14 top-8 h-44 w-44 rounded-full bg-[#87E4DB]/25 blur-3xl"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-[#00ACB1]/10 blur-3xl"></div>
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-[#CAF0C1]/20 blur-3xl"></div>

          <div className="relative z-10 mb-8 text-center">
            <span className="inline-flex rounded-full border border-[#87E4DB]/40 bg-white/65 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#1F6C75] shadow-sm backdrop-blur-md sm:text-xs">
              ADVANCED DIAGNOSTIC CARE
            </span>

            <h1 className="mx-auto mt-4 max-w-4xl text-2xl font-bold leading-snug text-[#015D67] sm:text-3xl md:text-4xl lg:text-5xl">
              আধুনিক প্রযুক্তি, নির্ভরযোগ্য রিপোর্ট এবং আন্তরিক সেবায়
              <span className="block text-[#00ACB1]">আপনার আস্থার ঠিকানা</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#47878E] sm:text-base">
              উন্নত MRI, অভিজ্ঞ চিকিৎসক এবং রোগীকেন্দ্রিক সেবার সমন্বয়ে আমরা
              প্রতিদিন কাজ করছি আরও নির্ভরযোগ্য স্বাস্থ্যসেবা পৌঁছে দিতে।
            </p>
          </div>

          {/* Desktop cards */}
          <div className="relative z-10 hidden justify-center md:flex">
            <div className="flex items-center justify-center gap-5 lg:gap-7">
              {heroCards.map((card, index) => {
                const isActive = index === activeIndex;
                const isSide =
                  index ===
                    (activeIndex - 1 + heroCards.length) % heroCards.length ||
                  index === (activeIndex + 1) % heroCards.length;

                return (
                  <div
                    key={card.id}
                    className={`relative overflow-hidden rounded-[30px] border transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? "w-[300px] scale-[1.05] border-white/55 bg-white/80 p-5 shadow-[0_28px_70px_rgba(1,93,103,0.18)] backdrop-blur-xl lg:w-[330px]"
                        : isSide
                          ? "w-[300px] scale-100 border-white/35 bg-white/56 p-5 shadow-[0_14px_34px_rgba(1,93,103,0.08)] backdrop-blur-md"
                          : "hidden"
                    }`}
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-1.5 ${
                        isActive ? "bg-[#00ACB1]" : "bg-[#87E4DB]"
                      }`}
                    ></div>

                    {/* image box fixed */}
                    <div className="h-56 overflow-hidden rounded-[24px] lg:h-60">
                      <img
                        src={card.image}
                        alt={card.title}
                        className={`h-full w-full object-cover transition-all duration-[1600ms] ${
                          isActive ? "scale-100" : "scale-105 blur-[1.4px]"
                        }`}
                      />
                    </div>

                    {/* text area fixed height / locked */}
                    <div className="pt-4">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold ${
                          isActive
                            ? "border-[#87E4DB]/50 bg-[#87E4DB]/15 text-[#015D67]"
                            : "border-[#D5E4E6] bg-[#F5F9F9] text-[#1F6C75]"
                        }`}
                      >
                        {card.badge}
                      </span>

                      {/* title fixed height */}
                      <h3 className="mt-3 min-h-[78px] text-[22px] font-bold leading-snug text-[#015D67]">
                        {isActive ? typedTitle : card.title}
                        {isActive && (
                          <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-[#00ACB1] align-middle"></span>
                        )}
                      </h3>

                      {/* subtitle fixed block */}
                      <div className="min-h-[90px]">
                        <div
                          className={`overflow-hidden transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isActive
                              ? "mt-3 max-h-40 translate-y-0 opacity-100"
                              : "max-h-0 translate-y-3 opacity-0"
                          }`}
                        >
                          <p className="text-sm leading-7 text-[#47878E]">
                            {typedSubtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile card */}
          <div className="relative z-10 md:hidden">
            <div className="mx-auto max-w-sm overflow-hidden rounded-[28px] border border-white/45 bg-white/80 p-4 shadow-[0_20px_55px_rgba(1,93,103,0.14)] backdrop-blur-xl transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
              <div className="mb-4 h-1.5 w-full rounded-full bg-gradient-to-r from-[#015D67] via-[#00ACB1] to-[#87E4DB]"></div>

              <div className="h-56 overflow-hidden rounded-[22px]">
                <img
                  src={activeCard.image}
                  alt={activeCard.title}
                  className="h-full w-full object-cover transition-all duration-[1600ms]"
                />
              </div>

              <div className="pt-4">
                <span className="inline-flex rounded-full border border-[#87E4DB]/50 bg-[#87E4DB]/15 px-3 py-1 text-[11px] font-semibold text-[#015D67]">
                  {activeCard.badge}
                </span>

                <h3 className="mt-3 min-h-[76px] text-xl font-bold leading-snug text-[#015D67]">
                  {typedTitle}
                  <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-[#00ACB1] align-middle"></span>
                </h3>

                <div className="min-h-[92px]">
                  <div className="mt-3 overflow-hidden transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <p className="text-sm leading-7 text-[#47878E]">
                      {typedSubtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* dots */}
          <div className="mt-7 flex items-center justify-center gap-2">
            {heroCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition-all duration-700 ${
                  activeIndex === index
                    ? "h-3 w-8 bg-[#00ACB1]"
                    : "h-3 w-3 bg-[#BFD9DB]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
