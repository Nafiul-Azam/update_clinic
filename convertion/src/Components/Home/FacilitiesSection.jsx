import React, { useMemo, useState } from "react";

const facilities = [
  {
    id: 1,
    title: "MRI",
    desc: "নির্ভুল MRI পরীক্ষা ও রিপোর্ট সুবিধা",
    phone: "+8801XXXXXXXXX",
    image:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "CT Scan",
    desc: "উন্নত CT Scan সেবা",
    phone: "+8801XXXXXXXXX",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "প্যাথলজি",
    desc: "রক্ত ও অন্যান্য পরীক্ষা",
    phone: "+8801XXXXXXXXX",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "ECG",
    desc: "হার্ট পর্যবেক্ষণের দ্রুত সেবা",
    phone: "+8801XXXXXXXXX",
    image:
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "আল্ট্রাসনোগ্রাফি",
    desc: "বিশেষজ্ঞ তত্ত্বাবধানে সেবা",
    phone: "+8801XXXXXXXXX",
    image:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "এক্স-রে",
    desc: "দ্রুত ও নির্ভরযোগ্য X-Ray",
    phone: "+8801XXXXXXXXX",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "ডায়ালাইসিস",
    desc: "যত্নশীল ডায়ালাইসিস সুবিধা",
    phone: "+8801XXXXXXXXX",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "ইনডোর সেবা",
    desc: "আরামদায়ক কেবিন ও পর্যবেক্ষণ",
    phone: "+8801XXXXXXXXX",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "ডাক্তার পরামর্শ",
    desc: "অভিজ্ঞ ডাক্তারদের সেবা",
    phone: "+8801XXXXXXXXX",
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "জরুরি সহায়তা",
    desc: "২৪/৭ প্রয়োজনীয় সহযোগিতা",
    phone: "+8801XXXXXXXXX",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
  },
];

const doctors = [
  {
    id: 1,
    name: "ডা. সাদিয়া রহমান",
    degree: "MBBS, FCPS (Cardiology)",
    specialty: "হৃদরোগ বিশেষজ্ঞ",
    category: "হৃদরোগ",
    problem: "হার্ট, বুক ধড়ফড়, বুকে ব্যথা",
    days: "শনি, সোম, বুধ",
    time: "৪টা - ৮টা",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "ডা. মাহমুদুল করিম",
    degree: "MBBS, MD (Medicine)",
    specialty: "মেডিসিন বিশেষজ্ঞ",
    category: "মেডিসিন",
    problem: "জ্বর, প্রেসার, ডায়াবেটিস",
    days: "রবি, মঙ্গল, বৃহস্পতি",
    time: "১০টা - ১টা",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "ডা. নুসরাত জাহান",
    degree: "MBBS, FCPS (Gynecology)",
    specialty: "গাইনি বিশেষজ্ঞ",
    category: "গাইনি",
    problem: "মহিলা স্বাস্থ্য, গর্ভাবস্থা",
    days: "শনি, মঙ্গল, শুক্রবার",
    time: "৩টা - ৭টা",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "ডা. আরিফ হোসেন",
    degree: "MBBS, MS (Orthopedics)",
    specialty: "অর্থোপেডিক বিশেষজ্ঞ",
    category: "অর্থোপেডিক",
    problem: "হাড়, জয়েন্ট, কোমর ব্যথা",
    days: "সোম, বুধ, শুক্র",
    time: "৫টা - ৯টা",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "ডা. ফাহিম আহমেদ",
    degree: "MBBS, DMRD",
    specialty: "রেডিওলজি বিশেষজ্ঞ",
    category: "রেডিওলজি",
    problem: "MRI, CT, X-Ray রিপোর্ট",
    days: "প্রতিদিন",
    time: "৯টা - ৫টা",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "ডা. রুবাইয়া সুলতানা",
    degree: "MBBS, MCPS (Child Health)",
    specialty: "শিশু রোগ বিশেষজ্ঞ",
    category: "শিশু",
    problem: "শিশুদের জ্বর, কাশি, পুষ্টি",
    days: "রবি, মঙ্গল, বৃহস্পতি",
    time: "৪টা - ৮টা",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1200&auto=format&fit=crop",
  },
];

const filters = [
  "সব",
  "হৃদরোগ",
  "মেডিসিন",
  "গাইনি",
  "অর্থোপেডিক",
  "রেডিওলজি",
  "শিশু",
];

const FacilitiesSection = () => {
  const [activeFilter, setActiveFilter] = useState("সব");

  const filteredDoctors = useMemo(() => {
    if (activeFilter === "সব") return doctors;
    return doctors.filter((doctor) => doctor.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7FBFC] via-[#F8FAFC] to-[#EEF7F7] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="pointer-events-none absolute left-0 top-0 h-48 w-48 rounded-full bg-[#87E4DB]/20 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#00ACB1]/10 blur-3xl"></div>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#87E4DB]/50 bg-white px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-[#1F6C75] shadow-sm sm:text-xs">
            SERVICES & DOCTORS
          </span>

          <h2 className="mt-4 text-2xl font-bold text-[#015D67] sm:text-3xl md:text-4xl">
            সেবাসমূহ ও ডাক্তার তথ্য
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#4B7D83] sm:text-base">
            আমাদের ক্লিনিকে কোন কোন সেবা পাওয়া যায় এবং কোন সমস্যার জন্য কোন
            ডাক্তার বসেন — তা সহজে বুঝতে এখানে সুন্দরভাবে সাজানো হয়েছে।
          </p>
        </div>

        {/* services */}
        <div className="mt-10 sm:mt-12">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-[#015D67] sm:text-2xl">
                আমাদের সেবাসমূহ
              </h3>
              <p className="mt-1 text-sm text-[#47878E]">
                পরীক্ষা করার আগে সেবার ধরণ দেখে নিন
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
            {facilities.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-[22px] border border-[#DDEBEC] bg-white shadow-[0_12px_28px_rgba(1,93,103,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#87E4DB]/70 hover:shadow-[0_18px_38px_rgba(1,93,103,0.10)]"
              >
                <div className="relative h-[118px] overflow-hidden bg-[#EAF7F5] sm:h-[132px] lg:h-[145px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#015D67]/58 via-[#015D67]/12 to-transparent"></div>

                  <div className="absolute left-3 top-3">
                    <div className="rounded-full bg-white/88 px-2.5 py-1 text-[10px] font-semibold text-[#015D67] shadow-sm">
                      {item.title}
                    </div>
                  </div>

                  <div className="absolute right-3 top-3"></div>
                </div>

                <div className="p-3 sm:p-3.5">
                  <p className="line-clamp-2 text-[11px] leading-5 text-[#5A868C] sm:text-xs">
                    {item.desc}
                  </p>

                  <div className="mt-3 space-y-2">
                    <a
                      href={`tel:${item.phone}`}
                      className="inline-flex h-9 w-full items-center justify-center rounded-full bg-[#00ACB1] px-3 text-[11px] font-semibold text-white shadow-[0_10px_22px_rgba(0,172,177,0.22)] transition duration-300 hover:bg-[#015D67] sm:text-xs"
                    >
                      যোগাযোগ করুন
                    </a>

                    <p className="truncate text-center text-[10px] font-medium text-[#47878E] sm:text-[11px]">
                      {item.phone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* doctors */}
        <div className="mt-14 sm:mt-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#015D67] sm:text-2xl">
                কোন সমস্যার জন্য কোন ডাক্তার
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-[#47878E] sm:text-base">
                বাংলা ক্যাটাগরি সিলেক্ট করে আপনার প্রয়োজনের ডাক্তার খুঁজে নিন।
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-3.5 py-2 text-[11px] font-semibold transition-all duration-300 sm:px-4 sm:text-sm ${
                      isActive
                        ? "bg-[#015D67] text-white shadow-[0_10px_24px_rgba(1,93,103,0.20)]"
                        : "border border-[#D7E7E8] bg-white text-[#015D67] hover:border-[#87E4DB] hover:bg-[#F6FBFB]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="group overflow-hidden rounded-[22px] border border-[#DCEBEC] bg-white shadow-[0_14px_30px_rgba(1,93,103,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(1,93,103,0.11)]"
              >
                <div className="relative h-[126px] overflow-hidden bg-[#EAF7F5] sm:h-[150px] lg:h-[190px]">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#015D67]/60 via-[#015D67]/10 to-transparent"></div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm sm:text-[11px]">
                      {doctor.category}
                    </span>
                  </div>
                </div>

                <div className="p-3">
                  <h4 className="line-clamp-1 text-[12px] font-bold text-[#015D67] sm:text-[15px]">
                    {doctor.name}
                  </h4>

                  <p className="mt-1 text-[10.5px] font-medium text-[#1F6C75] sm:text-[12px]">
                    {doctor.specialty}
                  </p>

                  <p className="mt-1 line-clamp-1 text-[9.5px] text-[#6A8D92] sm:text-[10.5px]">
                    {doctor.degree}
                  </p>

                  <div className="mt-3 space-y-2">
                    <div className="rounded-2xl bg-[#F7FBFB] px-3 py-2.5">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.10em] text-[#6F9AA0]">
                        সমস্যার ধরন
                      </p>
                      <p className="mt-1 line-clamp-2 text-[10.5px] leading-5 text-[#015D67] sm:text-[11px]">
                        {doctor.problem}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-2xl bg-[#F7FBFB] px-3 py-2">
                        <p className="text-[9px] font-semibold text-[#6F9AA0]">
                          বিশেষজ্ঞ
                        </p>
                        <p className="mt-1 line-clamp-1 text-[10.5px] font-semibold text-[#015D67] sm:text-[11px]">
                          {doctor.category}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-[#F7FBFB] px-3 py-2">
                        <p className="text-[9px] font-semibold text-[#6F9AA0]">
                          সময়
                        </p>
                        <p className="mt-1 line-clamp-1 text-[10.5px] font-semibold text-[#015D67] sm:text-[11px]">
                          {doctor.time}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#F7FBFB] px-3 py-2">
                      <p className="text-[9px] font-semibold text-[#6F9AA0]">
                        বসেন
                      </p>
                      <p className="mt-1 line-clamp-1 text-[10.5px] font-semibold text-[#015D67] sm:text-[11px]">
                        {doctor.days}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                    <button className="inline-flex h-9 flex-1 items-center justify-center rounded-full border border-[#D7E7E8] bg-white px-2.5 py-2.5 text-[10.5px] font-semibold text-[#015D67] transition duration-300 hover:border-[#015D67] hover:bg-[#015D67] hover:text-white sm:text-[11px]">
                      বিস্তারিত
                    </button>

                    <button className="inline-flex h-9 flex-1 items-center justify-center rounded-full bg-[#00ACB1] px-2.5 py-2.5 text-[10.5px] font-semibold text-white shadow-[0_12px_24px_rgba(0,172,177,0.24)] transition duration-300 hover:bg-[#015D67] sm:text-[11px]">
                      অ্যাপয়েন্টমেন্ট
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
