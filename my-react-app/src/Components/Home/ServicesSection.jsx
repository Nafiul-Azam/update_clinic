import React from "react";

const services = [
  {
    id: 1,
    title: "MRI",
    image: "/MRI.png",
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
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQacIiNQlB9IcGB1ZTuNGDvm6gkdn4PIe1VWQ&s",
  },
  {
    id: 10,
    title: "CT-Scan",
    image:
      "https://cdn-prod.medicalnewstoday.com/content/images/articles/153/153201/ct-scan.jpg",
  },

  {
    id: 9,
    title: "ডাক্তার পরামর্শ",
    image: "/doctor-consultation.png",
  },
  {
    id: 8,
    title: "সুবিধাসমূহ",
    image:
      "https://scontent.fspd6-1.fna.fbcdn.net/v/t39.30808-6/486311419_1121878079956810_2947821809962537653_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeE71svsU96zbIiwPbTTiOAWs9GWyWSrO92z0ZbJZKs73eRL4-kw3q8Hg-HW0cOG9RZ215YM60Y-XgCBlcKynsSp&_nc_ohc=Qjw8SrKRn7wQ7kNvwGilNa9&_nc_oc=AdoolNyV2-vN44_xuZ6ifA_4CMoaN2dc1CM7EJ8kmkEu065cBRYUd8bZBbiGkrh7XwA&_nc_zt=23&_nc_ht=scontent.fspd6-1.fna&_nc_gid=AM3oVSQQU1fU9ZyXXJBR_Q&_nc_ss=7a3a8&oh=00_Af0dY1Z7ozipGXZtCQ4Bj64hg89AcfSwXJ2UO320-L9mjA&oe=69D6A53E",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#F7FBFC] via-[#F8FAFC] to-[#EEF7F7] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">
          <span className="inline-flex rounded-full border border-[#87E4DB]/50 bg-white px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-[#1F6C75] shadow-sm sm:text-xs">
            OUR SERVICES
          </span>

          <h2 className="mt-4 text-2xl font-bold text-[#015D67] sm:text-3xl md:text-4xl">
            আমাদের সেবাসমূহ
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#015D67] via-[#00ACB1] to-[#87E4DB] sm:w-28"></div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#4B7D83] sm:text-base">
            আধুনিক প্রযুক্তি, নির্ভরযোগ্য পরীক্ষা এবং রোগীকেন্দ্রিক সেবার
            মাধ্যমে আমরা প্রতিদিন আপনাদের জন্য নিশ্চিত করছি মানসম্মত
            স্বাস্থ্যসেবা।
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-[22px] border border-[#DDEBEC] bg-white shadow-[0_14px_35px_rgba(1,93,103,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(1,93,103,0.14)]"
            >
              {/* image area */}
              <div className="relative h-[150px] overflow-hidden bg-[#EAF6F4] sm:h-[185px] lg:h-[210px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#015D67]/55 via-[#015D67]/15 to-transparent"></div>

                {/* image glow */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#015D67]/30 to-transparent"></div>

                {/* title */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-[2px]">
                    <h3 className="text-center text-sm font-semibold leading-5 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:text-base">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* bottom area */}
              <div className="flex items-center justify-between gap-2 border-t border-[#EAF0F1] bg-[#F9FCFC] px-3 py-3 sm:px-4 sm:py-4">
                <p className="text-[11px] font-semibold text-[#1F6C75] sm:text-sm">
                  বিস্তারিত দেখুন
                </p>

                <button className="inline-flex h-9 min-w-[64px] items-center justify-center rounded-full border border-[#C9DCDD] bg-white px-3 text-[11px] font-semibold text-[#015D67] shadow-sm transition duration-300 hover:border-[#015D67] hover:bg-[#015D67] hover:text-white sm:h-10 sm:px-4 sm:text-xs">
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
