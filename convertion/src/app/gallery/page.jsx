"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

const logoPath = "/update.png";

const noticeImages = [
  "/Gallery/notice1.jpg",
  "/Gallery/notice2.jpg",
  "/Gallery/notice3.jpg",
  "/Gallery/notice4.jpg",
  "/Gallery/notice5.jpg",
  "/Gallery/notice6.jpg",
];

const doctorNurseImages = [
  "/Gallery/dn1.jpg",
  "/Gallery/dn2.jpg",
  "/Gallery/dn3.jpg",
  "/Gallery/dn4.jpg",
  "/Gallery/dn5.jpg",
  "/Gallery/dn6.jpg",
];

const patientServiceImages = [
  "/Gallery/pic1.jpg",
  "/Gallery/pic2.jpg",
  "/Gallery/pic3.jpg",
  "/Gallery/pic4.jpg",
  "/Gallery/pic5.jpg",
  "/Gallery/pic6.jpg",
];

const rows = [
  {
    id: "notice",
    title: "নোটিশ সেকশন",
    images: noticeImages,
    direction: "left",
    autoStep: 2000,
  },
  {
    id: "doctor-nurse",
    title: "ডাক্তার ও নার্স সেকশন",
    images: doctorNurseImages,
    direction: "right",
    autoStep: 2000,
  },
  {
    id: "patient-service",
    title: "রোগী ও সেবা সেকশন",
    images: patientServiceImages,
    direction: "left",
    autoStep: 2000,
  },
];

const getClientX = (event) => {
  if ("touches" in event && event.touches.length > 0) {
    return event.touches[0].clientX;
  }
  if ("changedTouches" in event && event.changedTouches.length > 0) {
    return event.changedTouches[0].clientX;
  }
  return event.clientX;
};

const clampIndex = (index, total) => {
  if (total <= 0) return 0;
  return ((index % total) + total) % total;
};

const CarouselRow = ({
  title,
  images,
  direction = "left",
  autoStep = 2000,
  onOpenLightbox,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const autoRef = useRef(null);
  const dragState = useRef({
    isDown: false,
    startX: 0,
    moved: false,
  });

  const total = images.length;

  const goPrev = () => {
    setActiveIndex((prev) => clampIndex(prev - 1, total));
  };

  const goNext = () => {
    setActiveIndex((prev) => clampIndex(prev + 1, total));
  };

  useEffect(() => {
    if (isHovered || dragState.current.isDown || total <= 1) return;

    autoRef.current = setInterval(() => {
      setActiveIndex((prev) =>
        clampIndex(direction === "left" ? prev + 1 : prev - 1, total),
      );
    }, autoStep);

    return () => clearInterval(autoRef.current);
  }, [isHovered, direction, total, autoStep]);

  const handlePointerDown = (event) => {
    dragState.current.isDown = true;
    dragState.current.startX = getClientX(event);
    dragState.current.moved = false;
    setDragOffset(0);
  };

  const handlePointerMove = (event) => {
    if (!dragState.current.isDown) return;

    const currentX = getClientX(event);
    const diff = currentX - dragState.current.startX;

    if (Math.abs(diff) > 5) {
      dragState.current.moved = true;
    }

    setDragOffset(diff);
  };

  const handlePointerUp = () => {
    if (!dragState.current.isDown) return;

    const threshold = 80;

    if (dragOffset <= -threshold) {
      goNext();
    } else if (dragOffset >= threshold) {
      goPrev();
    }

    dragState.current.isDown = false;
    setDragOffset(0);
  };

  const handleCardClick = (index) => {
    if (dragState.current.moved) return;
    onOpenLightbox(images, index, title);
  };

  const visibleCards = useMemo(() => {
    if (!images.length) return [];

    const prev2 = clampIndex(activeIndex - 2, total);
    const prev1 = clampIndex(activeIndex - 1, total);
    const current = clampIndex(activeIndex, total);
    const next1 = clampIndex(activeIndex + 1, total);
    const next2 = clampIndex(activeIndex + 2, total);

    return [
      { image: images[prev2], index: prev2, position: -2 },
      { image: images[prev1], index: prev1, position: -1 },
      { image: images[current], index: current, position: 0 },
      { image: images[next1], index: next1, position: 1 },
      { image: images[next2], index: next2, position: 2 },
    ];
  }, [activeIndex, images, total]);

  const getCardStyles = (position) => {
    const baseClass =
      "absolute left-1/2 top-1/2 overflow-hidden rounded-[30px] border border-white/60 bg-white/85 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform";

    const translateX = dragOffset * 0.3;

    switch (position) {
      case -2:
        return {
          className: `${baseClass} z-[6] hidden lg:block`,
          style: {
            transform: `translate3d(calc(-50% - 480px + ${translateX}px), -50%, -180px) scale(0.68) rotateY(28deg) rotateZ(-1deg)`,
            opacity: 0.18,
            filter: "blur(1.5px)",
            boxShadow: "0 22px 40px rgba(18,65,77,0.10)",
          },
        };

      case -1:
        return {
          className: `${baseClass} z-[12]`,
          style: {
            transform: `translate3d(calc(-50% - 270px + ${translateX}px), -50%, -80px) scale(0.86) rotateY(18deg)`,
            opacity: 0.62,
            filter: "blur(0.4px)",
            boxShadow: "0 28px 55px rgba(18,65,77,0.16)",
          },
        };

      case 0:
        return {
          className: `${baseClass} z-[20]`,
          style: {
            transform: `translate3d(calc(-50% + ${translateX}px), -50%, 0) scale(1.05) rotateY(0deg)`,
            opacity: 1,
            filter: "blur(0px)",
            boxShadow: "0 35px 90px rgba(18,65,77,0.22)",
          },
        };

      case 1:
        return {
          className: `${baseClass} z-[12]`,
          style: {
            transform: `translate3d(calc(-50% + 270px + ${translateX}px), -50%, -80px) scale(0.86) rotateY(-18deg)`,
            opacity: 0.62,
            filter: "blur(0.4px)",
            boxShadow: "0 28px 55px rgba(18,65,77,0.16)",
          },
        };

      case 2:
        return {
          className: `${baseClass} z-[6] hidden lg:block`,
          style: {
            transform: `translate3d(calc(-50% + 480px + ${translateX}px), -50%, -180px) scale(0.68) rotateY(-28deg) rotateZ(1deg)`,
            opacity: 0.18,
            filter: "blur(1.5px)",
            boxShadow: "0 22px 40px rgba(18,65,77,0.10)",
          },
        };

      default:
        return {
          className: `${baseClass} hidden`,
          style: {},
        };
    }
  };

  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold tracking-wide text-[#12414D] sm:text-lg">
            {title}
          </h2>
          <div className="mt-2 h-[2px] w-24 rounded-full bg-[#87E4DB]/80" />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8BC9D0]/60 bg-white/85 text-lg text-[#12414D] shadow-[0_8px_20px_rgba(18,65,77,0.10)] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            aria-label={`${title} previous`}
          >
            ←
          </button>

          <button
            type="button"
            onClick={goNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8BC9D0]/60 bg-white/85 text-lg text-[#12414D] shadow-[0_8px_20px_rgba(18,65,77,0.10)] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            aria-label={`${title} next`}
          >
            →
          </button>
        </div>
      </div>

      <div
        className="relative overflow-hidden rounded-[36px] border border-white/55 bg-white/45 px-4 py-8 shadow-[0_18px_60px_rgba(18,65,77,0.10)] backdrop-blur-xl sm:px-6 sm:py-10 lg:px-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handlePointerUp();
        }}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-16 bg-gradient-to-r from-[#F4FBFC] via-[#F4FBFC]/80 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-16 bg-gradient-to-l from-[#F4FBFC] via-[#F4FBFC]/80 to-transparent sm:w-24" />

        <div className="relative h-[250px] sm:h-[320px] lg:h-[390px] [perspective:2200px] [transform-style:preserve-3d]">
          {visibleCards.map((card) => {
            const config = getCardStyles(card.position);

            return (
              <button
                key={`${card.image}-${card.index}-${card.position}`}
                type="button"
                onClick={() => handleCardClick(card.index)}
                className={`${config.className} group`}
                style={config.style}
              >
                <div className="relative h-[185px] w-[220px] sm:h-[245px] sm:w-[310px] lg:h-[305px] lg:w-[420px] overflow-hidden rounded-[30px]">
                  <img
                    src={card.image}
                    alt={title}
                    draggable="false"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#103943]/18 via-transparent to-white/5" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Lightbox = ({
  gallery,
  currentIndex,
  title,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (!gallery.length) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#081519]/88 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-[110] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl font-semibold text-white transition duration-300 hover:bg-white/20 sm:right-6 sm:top-6"
        aria-label="Close lightbox"
      >
        ×
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition duration-300 hover:bg-white/20 sm:left-6"
        aria-label="Previous image"
      >
        ←
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition duration-300 hover:bg-white/20 sm:right-6"
        aria-label="Next image"
      >
        →
      </button>

      <div
        className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={gallery[currentIndex]}
          alt={title}
          className="max-h-[92vh] w-full object-contain"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#061014]/80 via-[#061014]/30 to-transparent px-5 pb-5 pt-10 sm:px-8 sm:pb-7">
          <p className="text-sm font-medium tracking-wide text-white/80 sm:text-base">
            {title}
          </p>
          <p className="mt-1 text-xs text-white/70 sm:text-sm">
            {currentIndex + 1} / {gallery.length}
          </p>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [lightbox, setLightbox] = useState({
    open: false,
    title: "",
    images: [],
    currentIndex: 0,
  });

  const openLightbox = (images, index, title) => {
    setLightbox({
      open: true,
      images,
      currentIndex: index,
      title,
    });
  };

  const closeLightbox = () => {
    setLightbox({
      open: false,
      title: "",
      images: [],
      currentIndex: 0,
    });
  };

  const handlePrevLightbox = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: clampIndex(prev.currentIndex - 1, prev.images.length),
    }));
  };

  const handleNextLightbox = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: clampIndex(prev.currentIndex + 1, prev.images.length),
    }));
  };

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#F4FBFC_0%,#EAF8F9_45%,#DFF3F5_100%)] px-4 py-8 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-60px] top-10 h-64 w-64 rounded-full bg-[#87E4DB]/25 blur-3xl" />
          <div className="absolute right-[-40px] top-0 h-72 w-72 rounded-full bg-[#6CC9D6]/20 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 h-60 w-60 rounded-full bg-[#9EDAE2]/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[36px] border border-white/55 bg-white/55 shadow-[0_22px_70px_rgba(18,65,77,0.14)] backdrop-blur-2xl">
            <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-5 flex justify-center">
                  <img
                    src={logoPath}
                    alt="Update Diagnostic"
                    className="h-20 w-auto object-contain sm:h-24 md:h-28"
                  />
                </div>

                <span className="inline-flex rounded-full border border-[#8BC9D0]/60 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#12414D] shadow-sm">
                  Gallery Section
                </span>

                <h1 className="mt-5 text-2xl font-bold leading-tight text-[#12414D] sm:text-3xl md:text-4xl">
                  আমাদের সেবার দৃশ্যপট
                </h1>

                <h2 className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-7 text-[#35606B] sm:text-base md:text-lg">
                  প্রতিটি ছবির পেছনে রয়েছে সেবা, আস্থা, যত্ন এবং সুস্থতার গল্প
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#4C7981] sm:text-base">
                  আমাদের ক্লিনিকের নোটিশ, ডাক্তার ও নার্সদের নিবেদিত মুহূর্ত,
                  রোগী সেবা এবং চিকিৎসা যাত্রার বাস্তব দৃশ্যগুলো এখানে সাজানো
                  আছে যত্নের সাথে—যেখানে প্রতিটি ফ্রেম আমাদের দায়িত্ব, আন্তরিকতা
                  এবং মানবিক সেবার পরিচয় বহন করে।
                </p>
              </div>

              <div className="mt-10 space-y-10 sm:space-y-12">
                {rows.map((row) => (
                  <CarouselRow
                    key={row.id}
                    title={row.title}
                    images={row.images}
                    direction={row.direction}
                    autoStep={row.autoStep}
                    onOpenLightbox={openLightbox}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightbox.open && (
        <Lightbox
          gallery={lightbox.images}
          currentIndex={lightbox.currentIndex}
          title={lightbox.title}
          onClose={closeLightbox}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
        />
      )}
    </>
  );
};

export default Gallery;
