import React from "react";

const OffersSection = () => {
  return (
    <>
      {/* 
        =========================================================
        PREMIUM MOVING TITLE BAR (MARQUEE STYLE)
        =========================================================
        - Right → Left smooth movement
        - Infinite loop
        - Navbar color palette match
        - Soft premium glow + gradient edges
      */}
      <div className="relative w-full overflow-hidden border-y border-[#D5E4E6] bg-[#F5F9F9] py-3">
        
        {/* Left fade effect */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#F5F9F9] to-transparent z-10"></div>

        {/* Right fade effect */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#F5F9F9] to-transparent z-10"></div>

        {/* Moving content */}
        <div className="flex whitespace-nowrap animate-marquee">
          
          {/* Text duplicated for seamless loop */}
          <p className="mx-8 text-sm font-semibold text-[#015D67] tracking-wide">
            🚨 আজকের জন্য বিশেষ অফার — ক্যান্সার ও ডায়ালাইসিস রোগীদের জন্য সকল পরীক্ষায় ৩০% ছাড় • আজ বসছেন বিশেষজ্ঞ ডাক্তার • সিরিয়ালের জন্য এখনই কল করুন 📞
          </p>

          <p className="mx-8 text-sm font-semibold text-[#015D67] tracking-wide">
            🚨 আজকের জন্য বিশেষ অফার — ক্যান্সার ও ডায়ালাইসিস রোগীদের জন্য সকল পরীক্ষায় ৩০% ছাড় • আজ বসছেন বিশেষজ্ঞ ডাক্তার • সিরিয়ালের জন্য এখনই কল করুন 📞
          </p>

        </div>
      </div>
    </>
  );
};

export default OffersSection;