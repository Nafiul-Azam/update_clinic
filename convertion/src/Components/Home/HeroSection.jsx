"use client";

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

  const activeCard = useMemo(() => heroCards[activeIndex], [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroCards.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTypedTitle("");

    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setTypedTitle(activeCard.title.slice(0, index));

      if (index >= activeCard.title.length) {
        clearInterval(timer);
      }
    }, 28);

    return () => clearInterval(timer);
  }, [activeCard]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % heroCards.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + heroCards.length) % heroCards.length);
  };

  return (
    <section className="relative overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <style>{`
        @keyframes softFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(2deg); }
        }

        @keyframes imageReveal {
          0% { opacity: 0; transform: scale(1.08) translateY(18px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(22px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes progressLine {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        .hero-float {
          animation: softFloat 6s ease-in-out infinite;
        }

        .hero-image-reveal {
          animation: imageReveal 900ms ease-out both;
        }

        .hero-slide-up {
          animation: slideUp 700ms ease-out both;
        }

        .hero-progress {
          animation: progressLine 6.5s linear infinite;
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[34px] border border-white/50 bg-gradient-to-br from-[#F5F9F9] via-[#EAF7F5] to-[#DDF3F0] shadow-[0_24px_70px_rgba(1,93,103,0.12)]">
          {/* Background Decoration */}
          <div className="pointer-events-none absolute -left-20 top-10 h-60 w-60 rounded-full bg-[#87E4DB]/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-[#00ACB1]/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#CAF0C1]/25 blur-3xl" />

          <div className="relative grid min-h-[640px] items-center gap-8 px-5 py-8 sm:px-7 md:min-h-[620px] lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-12 xl:px-14">
            {/* Left Content */}
            <div className="relative z-20 text-center lg:text-left">
              <div className="hero-slide-up inline-flex items-center gap-2 rounded-full border border-[#87E4DB]/50 bg-white/70 px-3 py-2 shadow-sm backdrop-blur-md sm:px-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ACB1] opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00ACB1]" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1F6C75] sm:text-xs">
                  Advanced Diagnostic Care
                </span>
              </div>

              <h1 className="hero-slide-up mt-5 text-3xl font-black leading-tight tracking-[-0.03em] text-[#015D67] sm:text-4xl md:text-5xl xl:text-6xl">
                আধুনিক MRI সেবা
                <span className="relative mx-auto mt-2 block w-fit text-[#00ACB1] lg:mx-0">
                  এখন রংপুরে
                  <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-[#87E4DB]/35" />
                </span>
              </h1>

              <div className="hero-slide-up mx-auto mt-5 min-h-[92px] max-w-2xl lg:mx-0">
                <h2 className="text-xl font-extrabold leading-snug text-[#015D67] sm:text-2xl md:text-3xl">
                  {typedTitle}
                  <span className="ml-1 inline-block h-6 w-[3px] animate-pulse rounded-full bg-[#00ACB1] align-middle" />
                </h2>
              </div>

              <p className="hero-slide-up mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#47878E] sm:text-base lg:mx-0">
                {activeCard.subtitle}
              </p>

              {/* CTA */}
              <div className="hero-slide-up mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <a
                  href="#appointment"
                  className="group inline-flex w-full items-center justify-center rounded-2xl bg-[#015D67] px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_38px_rgba(1,93,103,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#00ACB1] sm:w-auto"
                >
                  সিরিয়াল বুক করুন
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#services"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-[#87E4DB]/60 bg-white/70 px-6 py-3.5 text-sm font-bold text-[#015D67] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto"
                >
                  সেবা দেখুন
                </a>
              </div>

              {/* Stats */}
              <div className="hero-slide-up mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/55 bg-white/60 p-3 text-center shadow-sm backdrop-blur-md lg:text-left">
                  <div className="text-xl font-black text-[#015D67] sm:text-2xl">
                    MRI
                  </div>
                  <div className="mt-1 text-[11px] font-semibold text-[#47878E] sm:text-xs">
                    Advanced Scan
                  </div>
                </div>

                <div className="rounded-2xl border border-white/55 bg-white/60 p-3 text-center shadow-sm backdrop-blur-md lg:text-left">
                  <div className="text-xl font-black text-[#015D67] sm:text-2xl">
                    24/7
                  </div>
                  <div className="mt-1 text-[11px] font-semibold text-[#47878E] sm:text-xs">
                    Patient Support
                  </div>
                </div>

                <div className="rounded-2xl border border-white/55 bg-white/60 p-3 text-center shadow-sm backdrop-blur-md lg:text-left">
                  <div className="text-xl font-black text-[#015D67] sm:text-2xl">
                    Fast
                  </div>
                  <div className="mt-1 text-[11px] font-semibold text-[#47878E] sm:text-xs">
                    Report Service
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative z-10 mx-auto w-full max-w-[520px] lg:max-w-none">
              <div className="hero-float absolute -left-3 top-7 z-20 hidden rounded-3xl border border-white/60 bg-white/75 p-4 shadow-[0_20px_45px_rgba(1,93,103,0.14)] backdrop-blur-xl sm:block lg:-left-7">
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#00ACB1]">
                  Current Focus
                </div>
                <div className="mt-1 max-w-[180px] text-sm font-extrabold leading-snug text-[#015D67]">
                  {activeCard.badge}
                </div>
              </div>

              <div className="hero-float absolute -right-2 bottom-10 z-20 rounded-3xl border border-white/60 bg-white/80 p-4 shadow-[0_20px_45px_rgba(1,93,103,0.14)] backdrop-blur-xl lg:-right-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#87E4DB]/25 text-xl">
                    ✓
                  </div>
                  <div>
                    <div className="text-sm font-black text-[#015D67]">
                      Reliable Report
                    </div>
                    <div className="text-xs font-semibold text-[#47878E]">
                      Trusted Care
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-[34px] border border-white/55 bg-white/55 p-3 shadow-[0_26px_70px_rgba(1,93,103,0.16)] backdrop-blur-xl sm:p-4">
                <div className="absolute -inset-1 -z-10 rounded-[38px] bg-gradient-to-br from-[#87E4DB]/40 via-white/20 to-[#00ACB1]/25 blur-xl" />

                <div className="relative overflow-hidden rounded-[28px]">
                  <img
                    key={activeCard.id}
                    src={activeCard.image}
                    alt={activeCard.title}
                    className="hero-image-reveal h-[320px] w-full object-cover sm:h-[390px] lg:h-[500px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#015D67]/70 via-[#015D67]/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <div className="overflow-hidden rounded-full bg-white/30">
                      <div className="hero-progress h-1.5 rounded-full bg-[#87E4DB]" />
                    </div>

                    <div className="mt-4 rounded-3xl border border-white/35 bg-white/20 p-4 backdrop-blur-md">
                      <p className="text-sm font-semibold leading-6 text-white sm:text-base">
                        {activeCard.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile/desktop controls */}
              <div className="mt-5 flex items-center justify-center gap-3">
                <button
                  onClick={prevSlide}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#87E4DB]/60 bg-white/70 text-xl font-black text-[#015D67] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                  aria-label="Previous slide"
                >
                  ‹
                </button>

                <div className="flex items-center gap-2 rounded-full border border-[#87E4DB]/40 bg-white/65 px-3 py-2 shadow-sm backdrop-blur-md">
                  {heroCards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`rounded-full transition-all duration-500 ${
                        activeIndex === index
                          ? "h-2.5 w-8 bg-[#00ACB1]"
                          : "h-2.5 w-2.5 bg-[#BFD9DB] hover:bg-[#87E4DB]"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#87E4DB]/60 bg-white/70 text-xl font-black text-[#015D67] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                  aria-label="Next slide"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
