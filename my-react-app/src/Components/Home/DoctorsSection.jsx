import React, { useEffect, useRef, useState } from "react";

const doctors = [
  {
    id: 1,
    name: "ডা. সাদিয়া রহমান",
    degree: "এমবিবিএস, এফসিপিএস",
    specialty: "মেডিসিন, ডায়াবেটিস ও হৃদরোগ বিশেষজ্ঞ",
    schedule: "প্রতিদিন সকাল ৯টা – দুপুর ১টা",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "ডা. করিম হাসান",
    degree: "এমবিবিএস, এমডি",
    specialty: "শিশু ও নবজাতক বিশেষজ্ঞ",
    schedule: "প্রতিদিন বিকাল ৪টা – রাত ৮টা",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "ডা. নুসরাত জাহান",
    degree: "এমবিবিএস, এমএস",
    specialty: "গাইনি ও প্রসূতি বিশেষজ্ঞ",
    schedule: "রবি – বৃহস্পতি, সকাল ১০টা – দুপুর ২টা",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "ডা. রফিকুল ইসলাম",
    degree: "এমবিবিএস, ডি-কার্ড",
    specialty: "হৃদরোগ ও রক্তচাপ বিশেষজ্ঞ",
    schedule: "প্রতিদিন সন্ধ্যা ৬টা – রাত ৯টা",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
  },
];

const DoctorsSection = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  const loopDoctors = [...doctors, ...doctors];

  const pauseAutoScroll = (delay = 2200) => {
    setIsPaused(true);

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, delay);
  };

  const scrollByAmount = (amount) => {
    const container = scrollRef.current;
    if (!container) return;

    pauseAutoScroll();

    container.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  const startDragging = (pageX) => {
    const container = scrollRef.current;
    if (!container) return;

    setIsDragging(true);
    setIsPaused(true);
    setStartX(pageX);
    setScrollLeftStart(container.scrollLeft);
  };

  const stopDragging = () => {
    if (!isDragging) return;
    setIsDragging(false);
    pauseAutoScroll(1600);
  };

  const onDragging = (pageX) => {
    const container = scrollRef.current;
    if (!isDragging || !container) return;

    const walk = (pageX - startX) * 1.15;
    container.scrollLeft = scrollLeftStart - walk;
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const autoScroll = () => {
      if (!container) return;

      if (!isPaused && !isDragging) {
        container.scrollLeft -= 0.5;

        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft <= 0) {
          container.scrollLeft = halfWidth;
        }
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused, isDragging]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = () => pauseAutoScroll(1800);
    const handleTouch = () => pauseAutoScroll(1800);

    container.addEventListener("wheel", handleWheel, { passive: true });
    container.addEventListener("touchstart", handleTouch, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouch);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <section className="bg-[#F8FAFC] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center text-center sm:items-start sm:text-left md:flex-row md:items-end md:justify-between gap-6">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[#87E4DB]/40 bg-white/80 px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-[#1F6C75] shadow-sm">
              EXPERT DOCTORS
            </span>

            <h2 className="mt-4 text-2xl font-bold text-[#015D67] sm:text-3xl">
              আজকে ডাক্তার বসেছেন
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#47878E] sm:text-base">
              অভিজ্ঞ ও বিশ্বস্ত চিকিৎসকদের প্রোফাইল, যোগ্যতা এবং সময়সূচি সহজেই
              দেখুন।
            </p>
          </div>

          {/* RIGHT BUTTONS (DESKTOP ONLY) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollByAmount(-320)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D6E9E7] bg-white text-xl font-semibold text-[#015D67] shadow-[0_10px_30px_rgba(1,93,103,0.08)] transition hover:-translate-y-1 hover:bg-[#F5F9F9]"
            >
              ←
            </button>

            <button
              onClick={() => scrollByAmount(320)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D6E9E7] bg-white shadow-[0_10px_30px_rgba(1,93,103,0.08)] transition hover:-translate-y-1 hover:bg-[#F5F9F9]"
            >
              <img src="/right.png" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className={`doctor-scroll flex overflow-x-auto pb-5 ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseDown={(e) => startDragging(e.pageX)}
          onMouseMove={(e) => onDragging(e.pageX)}
          onMouseUp={stopDragging}
          onMouseLeave={() => {
            stopDragging();
            setIsPaused(false);
          }}
          onTouchStart={(e) => startDragging(e.touches[0].pageX)}
          onTouchMove={(e) => onDragging(e.touches[0].pageX)}
          onTouchEnd={stopDragging}
        >
          <div className="flex gap-5 pr-5">
            {loopDoctors.map((doctor, index) => (
              <div
                key={`${doctor.id}-${index}`}
                className="group relative min-w-[280px] max-w-[280px] flex-shrink-0 overflow-hidden rounded-[28px] border border-white/50 bg-white/90 p-5 shadow-[0_18px_45px_rgba(1,93,103,0.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(1,93,103,0.16)] sm:min-w-[300px] sm:max-w-[300px]"
              >
                <div className="absolute left-5 right-5 top-0 h-1.5 rounded-b-full bg-gradient-to-r from-[#015D67] via-[#00ACB1] to-[#87E4DB]"></div>

                <div className="mt-3 flex justify-center">
                  <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-[#DFF3F1] bg-[#F5F9F9] shadow-sm">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-[18px] font-bold leading-6 text-[#015D67]">
                    {doctor.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-[#00ACB1]">
                    {doctor.degree}
                  </p>

                  <p className="mt-3 min-h-[52px] text-sm leading-6 text-[#47878E]">
                    {doctor.specialty}
                  </p>

                  <div className="mt-4 rounded-[20px] border border-[#E6F1F0] bg-[#F8FCFC] px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1F6C75]">
                      সময়সূচি
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#4B6B70]">
                      {doctor.schedule}
                    </p>
                  </div>

                  <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#015D67] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#014D56]">
                    বিস্তারিত দেখুন
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-3 md:hidden">
          <button
            onClick={() => scrollByAmount(-260)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D6E9E7] bg-white text-lg font-semibold text-[#015D67] shadow-[0_10px_30px_rgba(1,93,103,0.08)]"
          >
            ←
          </button>

          <button
            onClick={() => scrollByAmount(260)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D6E9E7] bg-white shadow-[0_10px_30px_rgba(1,93,103,0.08)]"
          >
            <img
              src="/right.png"
              alt="আরও দেখুন"
              className="h-5 w-5 object-contain"
            />
          </button>
        </div>
      </div>

      <style>{`
        .doctor-scroll {
          scrollbar-width: thin;
          scrollbar-color: #00ACB1 #DFF3F1;
        }

        .doctor-scroll::-webkit-scrollbar {
          height: 10px;
        }

        .doctor-scroll::-webkit-scrollbar-track {
          background: #DFF3F1;
          border-radius: 999px;
        }

        .doctor-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #015D67, #00ACB1);
          border-radius: 999px;
        }

        .doctor-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, #014D56, #029AA0);
        }
      `}</style>
    </section>
  );
};

export default DoctorsSection;
