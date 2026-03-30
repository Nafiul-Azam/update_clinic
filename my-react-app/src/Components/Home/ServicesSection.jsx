import React from "react";

const services = [
  {
    id: 1,
    title: "MRI",
    image: "/mri.png",
  },
  {
    id: 2,
    title: "প্যাথলজি",
    image: "/pathology.png",
  },
  {
    id: 3,
    title: "ডায়ালাইসিস সেবা",
    image: "/dialysis.png",
  },
  {
    id: 4,
    title: "এক্স-রে",
    image: "/xray.png",
  },
  {
    id: 5,
    title: "ইসিজি (ECG)",
    image: "/ecg.png",
  },
  {
    id: 6,
    title: "আল্ট্রাসনোগ্রাফি",
    image: "/ultrasound.png",
  },
  {
    id: 7,
    title: "ইনডোর সেবা",
    image: "/indoor-service.png",
  },
  {
    id: 8,
    title: "সুবিধাসমূহ",
    image: "/facilities.png",
  },
  {
    id: 9,
    title: "ডাক্তার পরামর্শ",
    image: "/doctor-consultation.png",
  },
  {
    id: 10,
    title: "CT-Scan",
    image: "/ct-scan.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full border border-[#87E4DB]/50 bg-[#F5F9F9] px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-[#1F6C75] shadow-sm">
            OUR SERVICES
          </span>

          <h2 className="mt-4 text-2xl font-bold text-[#015D67] sm:text-3xl md:text-4xl">
            আমাদের সেবাসমূহ
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-28 rounded-full bg-gradient-to-r from-[#015D67] via-[#00ACB1] to-[#87E4DB]"></div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#47878E] sm:text-base">
            আধুনিক প্রযুক্তি, নির্ভরযোগ্য পরীক্ষা এবং রোগীকেন্দ্রিক সেবার
            মাধ্যমে আমরা প্রতিদিন আপনাদের জন্য নিশ্চিত করছি মানসম্মত
            স্বাস্থ্যসেবা।
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-[24px] border border-[#D5E4E6] bg-white shadow-[0_18px_45px_rgba(1,93,103,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(1,93,103,0.14)]"
            >
              {/* image area */}
              <div className="relative h-[210px] overflow-hidden bg-[#E5F5EF]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover blur-[1.5px] transition duration-500 group-hover:scale-105 group-hover:blur-0"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#015D67]/70 via-[#015D67]/18 to-[#87E4DB]/10 transition duration-500 group-hover:from-[#015D67]/45"></div>

                {/* title on image */}
                <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                  <h3 className="text-base font-semibold leading-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] transition duration-300 group-hover:text-[17px] group-hover:font-bold sm:text-lg">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* bottom area */}
              <div className="flex items-center justify-between border-t border-[#E5EEEF] bg-[#F5F9F9] px-4 py-4">
                <p className="text-sm font-semibold text-[#1F6C75]">
                  বিস্তারিত দেখুন
                </p>

                <button className="inline-flex items-center gap-2 rounded-full border border-[#BFD9DB] bg-white px-3.5 py-2 text-xs font-semibold text-[#015D67] shadow-sm transition duration-300 hover:border-[#015D67] hover:bg-[#015D67] hover:text-white">
                  কল
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
