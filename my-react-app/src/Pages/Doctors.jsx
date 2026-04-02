import React from "react";

const doctors = [
  {
    id: 1,
    name: "ডা. সাদিয়া রহমান",
    degree: "MBBS, FCPS (Cardiology)",
    specialty: "হৃদরোগ বিশেষজ্ঞ",
    schedule: "শনি, সোম, বুধ • বিকাল ৪টা - রাত ৮টা",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "ডা. মাহমুদুল করিম",
    degree: "MBBS, MD (Medicine)",
    specialty: "মেডিসিন বিশেষজ্ঞ",
    schedule: "রবি, মঙ্গল, বৃহস্পতি • সকাল ১০টা - দুপুর ১টা",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "ডা. নুসরাত জাহান",
    degree: "MBBS, FCPS (Gynecology)",
    specialty: "গাইনি বিশেষজ্ঞ",
    schedule: "শনি, মঙ্গল, শুক্রবার • বিকাল ৩টা - সন্ধ্যা ৭টা",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "ডা. আরিফ হোসেন",
    degree: "MBBS, MS (Orthopedics)",
    specialty: "অর্থোপেডিক বিশেষজ্ঞ",
    schedule: "সোম, বুধ, শুক্র • বিকাল ৫টা - রাত ৯টা",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "ডা. ফাহিম আহমেদ",
    degree: "MBBS, DMRD",
    specialty: "রেডিওলজি বিশেষজ্ঞ",
    schedule: "প্রতিদিন • সকাল ৯টা - বিকাল ৫টা",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "ডা. রুবাইয়া সুলতানা",
    degree: "MBBS, MCPS (Child Health)",
    specialty: "শিশু রোগ বিশেষজ্ঞ",
    schedule: "রবি, মঙ্গল, বৃহস্পতি • বিকাল ৪টা - রাত ৮টা",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1200&auto=format&fit=crop",
  },
];

const Doctors = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#F7FBFC] via-[#F9FCFC] to-[#EEF7F7] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute left-0 top-0 h-52 w-52 rounded-full bg-[#87E4DB]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[#00ACB1]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#015D67]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <span className="inline-flex rounded-full border border-[#87E4DB]/50 bg-white px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-[#1F6C75] shadow-sm sm:text-xs">
              OUR DOCTORS
            </span>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-[#015D67] sm:text-4xl lg:text-5xl">
              ডাক্তারবৃন্দ
            </h1>

            <p className="mt-5 text-sm leading-7 text-[#4B7D83] sm:text-base sm:leading-8">
              আমাদের হাসপাতালের প্রতিটি ডাক্তার শুধু পেশাগত দক্ষতায় নয়, মানবিক
              আচরণ, রোগীর প্রতি আন্তরিকতা এবং দায়িত্বশীল সেবার জন্যও বিশেষভাবে
              পরিচিত। আমরা এমন একটি চিকিৎসক দল গড়ে তুলেছি, যারা আধুনিক চিকিৎসা
              জ্ঞান, অভিজ্ঞতা এবং যত্নশীল মনোভাবের মাধ্যমে প্রতিটি রোগীর পাশে
              আস্থা নিয়ে দাঁড়ান।
            </p>

            <p className="mt-4 text-sm leading-7 text-[#5A868C] sm:text-base sm:leading-8">
              হৃদরোগ, মেডিসিন, গাইনি, শিশু, অর্থোপেডিক থেকে শুরু করে বিভিন্ন
              বিশেষজ্ঞ সেবায় আমাদের অভিজ্ঞ ডাক্তারবৃন্দ নিয়মিত পরামর্শ প্রদান
              করেন। রোগ নির্ণয় থেকে শুরু করে চিকিৎসার প্রতিটি ধাপে আমরা রোগীর
              জন্য নির্ভরযোগ্য, নিরাপদ এবং সম্মানজনক অভিজ্ঞতা নিশ্চিত করতে
              প্রতিশ্রুতিবদ্ধ।
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="rounded-[20px] border border-white/60 bg-white/85 p-4 shadow-[0_12px_30px_rgba(1,93,103,0.08)] backdrop-blur-xl">
                <h3 className="text-xl font-bold text-[#015D67] sm:text-2xl">
                  বিশেষজ্ঞ
                </h3>
                <p className="mt-1 text-[11px] text-[#4B7D83] sm:text-sm">
                  অভিজ্ঞ ডাক্তার টিম
                </p>
              </div>

              <div className="rounded-[20px] border border-white/60 bg-white/85 p-4 shadow-[0_12px_30px_rgba(1,93,103,0.08)] backdrop-blur-xl">
                <h3 className="text-xl font-bold text-[#015D67] sm:text-2xl">
                  বিশ্বস্ত
                </h3>
                <p className="mt-1 text-[11px] text-[#4B7D83] sm:text-sm">
                  রোগীসেবা ও পরামর্শ
                </p>
              </div>

              <div className="col-span-2 rounded-[20px] border border-white/60 bg-white/85 p-4 shadow-[0_12px_30px_rgba(1,93,103,0.08)] backdrop-blur-xl sm:col-span-1">
                <h3 className="text-xl font-bold text-[#015D67] sm:text-2xl">
                  নিয়মিত
                </h3>
                <p className="mt-1 text-[11px] text-[#4B7D83] sm:text-sm">
                  চেম্বার ও ফলোআপ সেবা
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-[28px] bg-white/40 blur-2xl" />
              <div className="absolute -bottom-6 -right-3 h-24 w-24 rounded-full bg-[#87E4DB]/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-[30px] border border-white/60 bg-white/60 shadow-[0_24px_60px_rgba(1,93,103,0.12)] backdrop-blur-xl">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1400&auto=format&fit=crop"
                  alt="Doctor team"
                  className="h-[260px] w-full object-cover object-center sm:h-[320px] lg:h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#062E34]/50 via-[#062E34]/10 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-[22px] border border-white/20 bg-white/12 p-4 backdrop-blur-md sm:p-5">
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    দক্ষতা, আন্তরিকতা ও আস্থার সমন্বয়ে আমাদের চিকিৎসক দল
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-white/85 sm:text-sm">
                    রোগীর সুস্থতাকে সর্বোচ্চ গুরুত্ব দিয়ে প্রতিটি পরামর্শ ও সেবা
                    প্রদান করা হয়।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Intro section */}
        <div className="mt-14 rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_20px_50px_rgba(1,93,103,0.08)] backdrop-blur-xl sm:p-8 lg:mt-20 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <div>
              <h2 className="text-xl font-bold text-[#015D67] sm:text-2xl">
                আমাদের চিকিৎসক দল
              </h2>
            </div>

            <div className="lg:col-span-2">
              <p className="text-sm leading-7 text-[#4B7D83] sm:text-base sm:leading-8">
                প্রতিটি বিভাগে রোগীর চাহিদা অনুযায়ী বিশেষজ্ঞ চিকিৎসক উপস্থিত
                থাকেন। চিকিৎসার মান উন্নত রাখা, রোগীর সাথে পরিষ্কারভাবে কথা বলা,
                এবং প্রয়োজনীয় ফলোআপ নিশ্চিত করার মাধ্যমে আমাদের ডাক্তারবৃন্দ
                একটি উন্নত healthcare experience তৈরি করেন।
              </p>
            </div>
          </div>
        </div>

        {/* Doctor cards */}
        <div className="mt-10 sm:mt-12 lg:mt-14">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-[#015D67] sm:text-3xl">
              বিশেষজ্ঞ ডাক্তারবৃন্দ
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#4B7D83] sm:text-base">
              অভিজ্ঞতা, দক্ষতা এবং মানবিক সেবার সমন্বয়ে আমাদের চিকিৎসক টিম
              প্রতিদিন রোগীদের সেবায় নিয়োজিত।
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="group overflow-hidden rounded-[28px] border border-white/60 bg-white/90 shadow-[0_16px_40px_rgba(1,93,103,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(1,93,103,0.14)]"
              >
                <div className="relative h-[260px] overflow-hidden sm:h-[280px]">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062E34]/70 via-[#062E34]/15 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-white backdrop-blur-sm sm:text-[11px]">
                      SPECIALIST DOCTOR
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-[#015D67] sm:text-xl">
                    {doctor.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#1F6C75] sm:text-[15px]">
                    {doctor.specialty}
                  </p>

                  <p className="mt-1 text-xs leading-6 text-[#6A8D92] sm:text-sm">
                    {doctor.degree}
                  </p>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-[18px] bg-[#F7FBFB] px-4 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6F9AA0]">
                        চেম্বার সময়
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#015D67]">
                        {doctor.schedule}
                      </p>
                    </div>

                    <div className="rounded-[18px] bg-[#F7FBFB] px-4 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6F9AA0]">
                        সেবা
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#015D67]">
                        রোগ নির্ণয়, পরামর্শ, চিকিৎসা পরিকল্পনা ও ফলোআপ
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                    <button className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-[#D7E7E8] bg-white px-4 text-sm font-semibold text-[#015D67] transition duration-300 hover:border-[#015D67] hover:bg-[#015D67] hover:text-white">
                      বিস্তারিত দেখুন
                    </button>

                    <button className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-[#00ACB1] px-4 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(0,172,177,0.24)] transition duration-300 hover:bg-[#015D67]">
                      অ্যাপয়েন্টমেন্ট
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-14 grid items-center gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-[30px] border border-white/60 bg-white/60 shadow-[0_24px_60px_rgba(1,93,103,0.10)] backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1400&auto=format&fit=crop"
              alt="Doctor with patient"
              className="h-[250px] w-full object-cover object-center sm:h-[320px] lg:h-[420px]"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#015D67] sm:text-3xl">
              রোগীর আস্থাই আমাদের সবচেয়ে বড় শক্তি
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#4B7D83] sm:text-base sm:leading-8">
              একজন রোগীর কাছে একজন ডাক্তার শুধু চিকিৎসক নন, তিনি একজন
              পরামর্শদাতা, একজন সহায়ক এবং অনেক সময় একজন আশ্বাসদাতা। সেই কারণেই
              আমাদের ডাক্তারবৃন্দ প্রতিটি রোগীর কথা মনোযোগ দিয়ে শোনেন, প্রয়োজন
              বুঝে পরামর্শ দেন এবং সর্বোচ্চ যত্নের সাথে চিকিৎসা নিশ্চিত করেন।
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-[18px] border border-[#DDEBEC] bg-white/80 px-4 py-3 shadow-sm">
                <p className="text-sm font-semibold text-[#015D67]">
                  ✓ অভিজ্ঞ ও দক্ষ বিশেষজ্ঞ চিকিৎসক
                </p>
              </div>

              <div className="rounded-[18px] border border-[#DDEBEC] bg-white/80 px-4 py-3 shadow-sm">
                <p className="text-sm font-semibold text-[#015D67]">
                  ✓ রোগীবান্ধব ও সম্মানজনক পরামর্শ সেবা
                </p>
              </div>

              <div className="rounded-[18px] border border-[#DDEBEC] bg-white/80 px-4 py-3 shadow-sm">
                <p className="text-sm font-semibold text-[#015D67]">
                  ✓ সময়মতো চেম্বার, চিকিৎসা ও ফলোআপ
                </p>
              </div>

              <div className="rounded-[18px] border border-[#DDEBEC] bg-white/80 px-4 py-3 shadow-sm">
                <p className="text-sm font-semibold text-[#015D67]">
                  ✓ বিশ্বাস, যত্ন ও মানসম্মত স্বাস্থ্যসেবা
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
