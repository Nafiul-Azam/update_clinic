import React, { useEffect, useRef, useState } from "react";

const contactItems = [
  {
    name: "Facebook",
    icon: "/facebook.png",
    link: "https://facebook.com",
  },
  {
    name: "YouTube",
    icon: "/youtube.png",
    link: "https://youtube.com",
  },
  {
    name: "Twitter",
    icon: "/twitter.png",
    link: "https://x.com",
  },
  {
    name: "Instagram",
    icon: "/instagram.png",
    link: "https://instagram.com",
  },
  {
    name: "WhatsApp",
    icon: "/whatsapp.png",
    link: "https://wa.me/8801234567890",
  },
  {
    name: "Call",
    icon: "/call.png",
    link: "tel:+8801234567890",
  },
  {
    name: "Google Maps",
    icon: "/google-maps.png",
    link: "https://maps.google.com",
  },
  {
    name: "Gmail",
    icon: "/gmail.png",
    link: "mailto:yourclinic@gmail.com",
  },
];

const Location = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  /*
    =========================================================
    SCROLL REVEAL ANIMATION
    ---------------------------------------------------------
    - নিচে scroll করলে section টা smoothly show হবে
  */
  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 pb-12 pt-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`relative overflow-hidden rounded-[30px] border border-white/40 bg-gradient-to-br from-[#F5F9F9] via-[#EAF7F5] to-[#DDF3F0] p-5 shadow-[0_18px_55px_rgba(1,93,103,0.10)] transition-all duration-1000 ease-out sm:p-6 md:p-8 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"
          }`}
        >
          {/* Soft ambient blur */}
          <div className="pointer-events-none absolute -left-10 top-0 h-36 w-36 rounded-full bg-[#87E4DB]/25 blur-3xl"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[#00ACB1]/10 blur-3xl"></div>
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-[#CAF0C1]/20 blur-3xl"></div>

          {/* Header */}
          <div className="relative z-10 text-center">
            <span className="inline-flex rounded-full border border-[#87E4DB]/40 bg-white/65 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#1F6C75] shadow-sm backdrop-blur-md sm:text-xs">
              CONTACT & LOCATION
            </span>

            <h2 className="mt-4 text-2xl font-bold text-[#015D67] sm:text-3xl md:text-4xl">
              আমাদের সাথে যোগাযোগ করুন
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#47878E] sm:text-base">
              যেকোনো প্রয়োজনে আমাদের সাথে সহজেই যোগাযোগ করুন। কল, ম্যাপ, ইমেইল
              কিংবা সামাজিক যোগাযোগমাধ্যম — সবকিছু এক জায়গাতেই।
            </p>
          </div>

          {/* Main content */}
          <div className="relative z-10 mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left side - contact icons */}
            <div className="rounded-[28px] border border-white/45 bg-white/65 p-5 shadow-[0_14px_35px_rgba(1,93,103,0.08)] backdrop-blur-xl sm:p-6">
              <div className="mb-5">
                <h3 className="text-lg font-bold text-[#015D67] sm:text-xl">
                  সরাসরি যোগাযোগের মাধ্যম
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#47878E]">
                  আপনার সুবিধামতো যেকোনো মাধ্যমে যোগাযোগ করতে পারেন।
                </p>
              </div>

              {/* Icon grid */}
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-4 xl:grid-cols-4">
                {contactItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target={
                      item.name !== "Call" && item.name !== "Gmail"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.name !== "Call" && item.name !== "Gmail"
                        ? "noreferrer"
                        : undefined
                    }
                    className={`group flex flex-col items-center justify-center rounded-[22px] border border-white/40 bg-white/70 p-3 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#87E4DB]/60 hover:bg-white/90 hover:shadow-[0_14px_28px_rgba(1,93,103,0.12)] sm:p-4 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${index * 80}ms`,
                    }}
                    aria-label={item.name}
                  >
                    {/* 
                      Icon wrapper
                      - PNG public folder থেকে load হবে
                    */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5F9F9] shadow-inner transition duration-500 group-hover:scale-105 group-hover:bg-[#EAF7F5] sm:h-16 sm:w-16">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                      />
                    </div>

                    <span className="mt-3 text-center text-xs font-semibold text-[#015D67] sm:text-sm">
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right side - address cards */}
            <div className="flex flex-col gap-4">
              {/* Rangpur branch */}
              <div className="rounded-[28px] border border-white/45 bg-white/65 p-5 shadow-[0_14px_35px_rgba(1,93,103,0.08)] backdrop-blur-xl transition-all duration-700 hover:shadow-[0_18px_40px_rgba(1,93,103,0.12)] sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#87E4DB]/18">
                    <img
                      src="/google-maps.png"
                      alt="Rangpur Location"
                      className="h-7 w-7 object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#015D67] sm:text-xl">
                      আপডেট ক্লিনিক (রংপুর শাখা)
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#47878E] sm:text-base">
                      ধাপ, জেল রোড, রংপুর - ৫৫০৪
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-[#00ACB1] px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_22px_rgba(0,172,177,0.22)] transition duration-300 hover:bg-[#015D67] sm:text-sm"
                      >
                        ম্যাপে দেখুন
                      </a>

                      <a
                        href="tel:+8801234567890"
                        className="inline-flex items-center justify-center rounded-full border border-[#87E4DB]/50 bg-white/70 px-4 py-2 text-xs font-semibold text-[#015D67] shadow-sm transition duration-300 hover:bg-white sm:text-sm"
                      >
                        কল করুন
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kurigram branch */}
              <div className="rounded-[28px] border border-white/45 bg-white/65 p-5 shadow-[0_14px_35px_rgba(1,93,103,0.08)] backdrop-blur-xl transition-all duration-700 hover:shadow-[0_18px_40px_rgba(1,93,103,0.12)] sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#87E4DB]/18">
                    <img
                      src="/google-maps.png"
                      alt="Kurigram Location"
                      className="h-7 w-7 object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#015D67] sm:text-xl">
                      আপডেট ক্লিনিক (কুড়িগ্রাম শাখা)
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#47878E] sm:text-base">
                      রাজারহাট, কুড়িগ্রাম, রংপুর
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-[#00ACB1] px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_22px_rgba(0,172,177,0.22)] transition duration-300 hover:bg-[#015D67] sm:text-sm"
                      >
                        ম্যাপে দেখুন
                      </a>

                      <a
                        href="tel:+8801234567890"
                        className="inline-flex items-center justify-center rounded-full border border-[#87E4DB]/50 bg-white/70 px-4 py-2 text-xs font-semibold text-[#015D67] shadow-sm transition duration-300 hover:bg-white sm:text-sm"
                      >
                        কল করুন
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra info card */}
              <div className="rounded-[24px] border border-[#87E4DB]/30 bg-[#F5F9F9]/80 p-4 shadow-sm sm:p-5">
                <p className="text-sm leading-7 text-[#47878E] sm:text-base">
                  আমাদের সাথে দ্রুত যোগাযোগ করতে উপরের যেকোনো মাধ্যম ব্যবহার
                  করুন। জরুরি প্রয়োজনে সরাসরি কল করুন অথবা লোকেশন দেখে ক্লিনিকে
                  চলে আসুন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
