import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 
        =========================================================
        PREMIUM RESPONSIVE NAVBAR
        =========================================================
        Features:
        - Glassmorphism navbar
        - Mobile menu toggle
        - Compact premium search bar
        - Public folder icons:
          /phone-call.png
          /magnifying-glass.png
      */}
      <header className="sticky top-0 z-50 w-full">
        {/* Main navbar */}
        <nav className="mx-auto mt-3 flex w-[95%] max-w-7xl items-center justify-between gap-3 rounded-[24px] border border-white/30 bg-[#87E4DB]/45 px-3 py-3 shadow-[0_10px_35px_rgba(1,93,103,0.12)] backdrop-blur-xl sm:px-4 md:px-5">
          {/* Left side: logo */}
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/45 shadow-sm">
              <span className="text-base font-bold text-[#015D67]">S</span>
            </div>

            <div className="min-w-0 leading-tight">
              <h1 className="truncate text-sm font-bold tracking-wide text-[#015D67] sm:text-base md:text-lg">
                TechTeam
              </h1>
              <p className="hidden text-[11px] font-medium text-[#1F6C75] sm:block">
                Trusted care, modern service
              </p>
            </div>
          </div>

          {/* Desktop search */}
          <div className="hidden flex-1 px-2 lg:flex">
            <div
              className="
                group mx-auto flex w-full max-w-xl items-center overflow-hidden
                rounded-full border border-[#c7dddf]
                bg-white/75 shadow-[0_6px_24px_rgba(1,93,103,0.08)]
                transition-all duration-300
                focus-within:border-[#59b8bb]
                focus-within:bg-white/95
                focus-within:shadow-[0_10px_30px_rgba(1,93,103,0.14)]
                focus-within:ring-4 focus-within:ring-[#87E4DB]/30
              "
            >
              <input
                type="text"
                placeholder="আপনার প্রয়োজনীয় সেবা অনুসন্ধান করুন"
                className="
                  h-11 w-full bg-transparent px-5 text-sm font-medium
                  text-[#015D67] outline-none placeholder:text-[#6e9699]
                "
              />

              <button
                type="button"
                className="
                  flex h-11 w-14 shrink-0 items-center justify-center
                  border-l border-[#c7dddf]
                  bg-white/20 transition-all duration-300
                  hover:bg-[#d8f3f0]
                  active:scale-[0.97]
                "
              >
                <img
                  src="/magnifying-glass.png"
                  alt="Search"
                  className="h-4.5 w-4.5 object-contain transition-transform duration-300 group-focus-within:scale-110"
                />
              </button>
            </div>
          </div>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-5 xl:flex">
            <li>
              <a
                href="#"
                className="text-sm font-semibold text-[#1F6C75] transition duration-300 hover:text-[#015D67]"
              >
                সেবা
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-semibold text-[#1F6C75] transition duration-300 hover:text-[#015D67]"
              >
                ডাক্তার খুঁজুন
              </a>
            </li>
          </ul>

          {/* Right side actions */}
          <div className="flex shrink-0 items-center gap-2">
            {/* Desktop CTA */}
            <button className="hidden rounded-xl bg-[#00ACB1] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-[#015D67] lg:inline-flex">
              যোগাযোগ করুন
            </button>

            {/* Call button */}
            <a
              href="tel:+8801234567890"
              className="
                flex h-10 w-10 items-center justify-center rounded-2xl
                border border-white/40 bg-white/35 shadow-sm backdrop-blur-md
                transition duration-300 hover:bg-white/55 active:scale-95 sm:h-11 sm:w-11
              "
            >
              <img
                src="/phone-call.png"
                alt="Call"
                className="h-4.5 w-4.5 object-contain sm:h-5 sm:w-5"
              />
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="
                flex h-10 w-10 items-center justify-center rounded-2xl
                border border-white/40 bg-white/35 shadow-sm backdrop-blur-md
                transition duration-300 hover:bg-white/55 active:scale-95 md:hidden
              "
              aria-label="Toggle mobile menu"
            >
              {/* 3 dots / menu style icon */}
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="h-1 w-1 rounded-full bg-[#015D67]"></span>
                <span className="h-1 w-1 rounded-full bg-[#015D67]"></span>
                <span className="h-1 w-1 rounded-full bg-[#015D67]"></span>
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile / tablet search */}
        <div className="mx-auto mt-2.5 w-[95%] max-w-7xl lg:hidden">
          <div
            className="
              group flex items-center overflow-hidden rounded-full
              border border-[#c7dddf]
              bg-white/80 shadow-[0_8px_22px_rgba(1,93,103,0.08)]
              transition-all duration-300
              focus-within:border-[#59b8bb]
              focus-within:bg-white/95
              focus-within:shadow-[0_10px_26px_rgba(1,93,103,0.12)]
              focus-within:ring-4 focus-within:ring-[#87E4DB]/30
            "
          >
            <input
              type="text"
              placeholder="সেবা খুঁজুন..."
              className="
                h-10 w-full bg-transparent px-4 text-[13px] font-medium
                text-[#015D67] outline-none placeholder:text-[#6e9699]
                sm:h-11 sm:px-5 sm:text-sm
              "
            />

            <button
              type="button"
              className="
                flex h-10 w-12 shrink-0 items-center justify-center
                border-l border-[#c7dddf]
                bg-white/20 transition-all duration-300
                hover:bg-[#d8f3f0]
                active:scale-[0.97]
                sm:h-11 sm:w-14
              "
            >
              <img
                src="/magnifying-glass.png"
                alt="Search"
                className="h-4 w-4 object-contain transition-transform duration-300 group-focus-within:scale-110 sm:h-4.5 sm:w-4.5"
              />
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`mx-auto mt-2 w-[95%] max-w-7xl overflow-hidden rounded-[22px] border border-white/30 bg-white/70 shadow-[0_10px_30px_rgba(1,93,103,0.10)] backdrop-blur-xl transition-all duration-300 md:hidden ${
            isMobileMenuOpen
              ? "max-h-72 opacity-100 py-3"
              : "max-h-0 border-transparent opacity-0 py-0"
          }`}
        >
          <div className="flex flex-col px-3">
            <a
              href="#"
              className="rounded-xl px-4 py-3 text-sm font-semibold text-[#1F6C75] transition hover:bg-[#e7f7f5] hover:text-[#015D67]"
            >
              সেবা
            </a>

            <a
              href="#"
              className="rounded-xl px-4 py-3 text-sm font-semibold text-[#1F6C75] transition hover:bg-[#e7f7f5] hover:text-[#015D67]"
            >
              ডাক্তার খুঁজুন
            </a>

            <a
              href="#"
              className="rounded-xl px-4 py-3 text-sm font-semibold text-[#1F6C75] transition hover:bg-[#e7f7f5] hover:text-[#015D67]"
            >
              যোগাযোগ করুন
            </a>

            <a
              href="tel:+8801234567890"
              className="mt-2 flex items-center justify-center rounded-xl bg-[#00ACB1] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#015D67]"
            >
              এখনই কল করুন
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;