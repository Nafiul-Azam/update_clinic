import React from "react";

const contactInfo = [
  {
    id: 1,
    title: "ফোন নম্বর",
    value: "+8801XXXXXXXXX",
    sub: "সিরিয়াল, তথ্য ও জরুরি যোগাযোগের জন্য",
  },
  {
    id: 2,
    title: "ইমেইল",
    value: "info@updateclinic.com",
    sub: "যেকোনো প্রশ্ন বা সহযোগিতার জন্য",
  },
  {
    id: 3,
    title: "ঠিকানা",
    value: "জাহাজ কোম্পানি মোড়, রংপুর",
    sub: "সহজে খুঁজে পেতে স্পষ্ট লোকেশন",
  },
  {
    id: 4,
    title: "সেবা সময়",
    value: "প্রতিদিন সকাল ৮টা - রাত ১০টা",
    sub: "ডাক্তার চেম্বার ও সেবা সময় ভিন্ন হতে পারে",
  },
];

const Contact = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#F7FBFC] via-[#F9FCFC] to-[#EEF7F7] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute left-0 top-0 h-52 w-52 rounded-full bg-[#87E4DB]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[#00ACB1]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#015D67]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* hero */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <span className="inline-flex rounded-full border border-[#87E4DB]/50 bg-white px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-[#1F6C75] shadow-sm sm:text-xs">
              CONTACT US
            </span>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-[#015D67] sm:text-4xl lg:text-5xl">
              যোগাযোগ
            </h1>

            <p className="mt-5 text-sm leading-7 text-[#4B7D83] sm:text-base sm:leading-8">
              আমাদের হাসপাতালের সেবা, ডাক্তার চেম্বার, সিরিয়াল, টেস্ট, রিপোর্ট
              কিংবা যেকোনো প্রয়োজনীয় তথ্য জানতে আপনি খুব সহজেই আমাদের সাথে
              যোগাযোগ করতে পারেন। আমরা বিশ্বাস করি, দ্রুত ও আন্তরিক যোগাযোগ একটি
              ভালো স্বাস্থ্যসেবা অভিজ্ঞতার গুরুত্বপূর্ণ অংশ।
            </p>

            <p className="mt-4 text-sm leading-7 text-[#5A868C] sm:text-base sm:leading-8">
              রোগী এবং রোগীর পরিবারের সুবিধার কথা বিবেচনা করে আমরা ফোন, ইমেইল,
              সরাসরি ভিজিট এবং অনলাইন বার্তার মাধ্যমে যোগাযোগের সুযোগ রেখেছি।
              আপনার প্রশ্ন, প্রয়োজন বা উদ্বেগ আমরা গুরুত্ব সহকারে শুনতে এবং
              সহমর্মিতার সাথে সহায়তা করতে প্রস্তুত।
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="rounded-[20px] border border-white/60 bg-white/85 p-4 shadow-[0_12px_30px_rgba(1,93,103,0.08)] backdrop-blur-xl">
                <h3 className="text-xl font-bold text-[#015D67] sm:text-2xl">
                  সহজ
                </h3>
                <p className="mt-1 text-[11px] text-[#4B7D83] sm:text-sm">
                  যোগাযোগ ব্যবস্থা
                </p>
              </div>

              <div className="rounded-[20px] border border-white/60 bg-white/85 p-4 shadow-[0_12px_30px_rgba(1,93,103,0.08)] backdrop-blur-xl">
                <h3 className="text-xl font-bold text-[#015D67] sm:text-2xl">
                  দ্রুত
                </h3>
                <p className="mt-1 text-[11px] text-[#4B7D83] sm:text-sm">
                  সহায়তা ও তথ্য
                </p>
              </div>

              <div className="col-span-2 rounded-[20px] border border-white/60 bg-white/85 p-4 shadow-[0_12px_30px_rgba(1,93,103,0.08)] backdrop-blur-xl sm:col-span-1">
                <h3 className="text-xl font-bold text-[#015D67] sm:text-2xl">
                  বিশ্বস্ত
                </h3>
                <p className="mt-1 text-[11px] text-[#4B7D83] sm:text-sm">
                  রোগীবান্ধব সাপোর্ট
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
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1400&auto=format&fit=crop"
                  alt="Hospital contact desk"
                  className="h-[260px] w-full object-cover object-center sm:h-[320px] lg:h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#062E34]/55 via-[#062E34]/10 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-[22px] border border-white/20 bg-white/12 p-4 backdrop-blur-md sm:p-5">
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    আপনার প্রয়োজনের মুহূর্তে আমরা আছি আপনার পাশে
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-white/85 sm:text-sm">
                    সহজ যোগাযোগ, দ্রুত সহায়তা এবং রোগীবান্ধব সেবা — এটাই আমাদের
                    প্রতিশ্রুতি।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contact info cards */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-[#015D67] sm:text-3xl">
              যোগাযোগের তথ্য
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#4B7D83] sm:text-base">
              প্রয়োজনীয় তথ্য দ্রুত পেতে নিচের যেকোনো মাধ্যমে আমাদের সাথে যোগাযোগ
              করুন।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {contactInfo.map((item) => (
              <div
                key={item.id}
                className="rounded-[24px] border border-white/60 bg-white/85 p-5 shadow-[0_16px_40px_rgba(1,93,103,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(1,93,103,0.12)]"
              >
                <h3 className="text-lg font-bold text-[#015D67]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#1F6C75] sm:text-base">
                  {item.value}
                </p>
                <p className="mt-2 text-xs leading-6 text-[#6A8D92] sm:text-sm">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* form + map/info */}
        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-[30px] border border-white/60 bg-white/85 p-5 shadow-[0_20px_50px_rgba(1,93,103,0.08)] backdrop-blur-xl sm:p-7 lg:p-8">
            <h2 className="text-2xl font-bold text-[#015D67] sm:text-3xl">
              আমাদের লিখুন
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#4B7D83] sm:text-base">
              আপনার প্রশ্ন, মতামত বা প্রয়োজনীয় তথ্য আমাদের জানাতে নিচের ফর্মটি
              পূরণ করুন।
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#015D67]">
                    আপনার নাম
                  </label>
                  <input
                    type="text"
                    placeholder="পূর্ণ নাম লিখুন"
                    className="h-12 w-full rounded-2xl border border-[#D8EBED] bg-[#F9FCFC] px-4 text-sm text-[#12414D] outline-none transition focus:border-[#00ACB1] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#015D67]">
                    মোবাইল নম্বর
                  </label>
                  <input
                    type="text"
                    placeholder="আপনার মোবাইল নম্বর"
                    className="h-12 w-full rounded-2xl border border-[#D8EBED] bg-[#F9FCFC] px-4 text-sm text-[#12414D] outline-none transition focus:border-[#00ACB1] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#015D67]">
                  ইমেইল
                </label>
                <input
                  type="email"
                  placeholder="আপনার ইমেইল লিখুন"
                  className="h-12 w-full rounded-2xl border border-[#D8EBED] bg-[#F9FCFC] px-4 text-sm text-[#12414D] outline-none transition focus:border-[#00ACB1] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#015D67]">
                  বিষয়
                </label>
                <input
                  type="text"
                  placeholder="কি বিষয়ে যোগাযোগ করতে চান"
                  className="h-12 w-full rounded-2xl border border-[#D8EBED] bg-[#F9FCFC] px-4 text-sm text-[#12414D] outline-none transition focus:border-[#00ACB1] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#015D67]">
                  বার্তা
                </label>
                <textarea
                  rows="5"
                  placeholder="আপনার বার্তা লিখুন..."
                  className="w-full rounded-2xl border border-[#D8EBED] bg-[#F9FCFC] px-4 py-3 text-sm text-[#12414D] outline-none transition focus:border-[#00ACB1] focus:bg-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#00ACB1] px-6 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(0,172,177,0.24)] transition duration-300 hover:bg-[#015D67] sm:w-auto sm:min-w-[180px]"
              >
                বার্তা পাঠান
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[30px] border border-white/60 bg-white/70 shadow-[0_20px_50px_rgba(1,93,103,0.08)] backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1580281658629-47dd975251de?q=80&w=1400&auto=format&fit=crop"
                alt="Hospital reception"
                className="h-[240px] w-full object-cover object-center sm:h-[300px] lg:h-[340px]"
              />
            </div>

            <div className="rounded-[30px] border border-white/60 bg-white/85 p-6 shadow-[0_20px_50px_rgba(1,93,103,0.08)] backdrop-blur-xl sm:p-7">
              <h2 className="text-2xl font-bold text-[#015D67] sm:text-3xl">
                কেন যোগাযোগ করবেন
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#4B7D83] sm:text-base sm:leading-8">
                ডাক্তার দেখানোর সময়, চেম্বার শিডিউল, টেস্ট সম্পর্কিত তথ্য,
                রিপোর্ট সংগ্রহ, জরুরি সহায়তা অথবা হাসপাতালের সেবাসমূহ সম্পর্কে
                বিস্তারিত জানতে আপনি আমাদের সাথে যোগাযোগ করতে পারেন। আমাদের টিম
                সবসময় চেষ্টা করে যেন প্রতিটি রোগী দ্রুত, স্পষ্ট এবং সম্মানজনক
                সহায়তা পান।
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-[18px] border border-[#DDEBEC] bg-white/80 px-4 py-3 shadow-sm">
                  <p className="text-sm font-semibold text-[#015D67]">
                    ✓ সিরিয়াল ও ডাক্তার সময় সম্পর্কে তথ্য
                  </p>
                </div>

                <div className="rounded-[18px] border border-[#DDEBEC] bg-white/80 px-4 py-3 shadow-sm">
                  <p className="text-sm font-semibold text-[#015D67]">
                    ✓ টেস্ট, রিপোর্ট ও সেবাসমূহের সহায়তা
                  </p>
                </div>

                <div className="rounded-[18px] border border-[#DDEBEC] bg-white/80 px-4 py-3 shadow-sm">
                  <p className="text-sm font-semibold text-[#015D67]">
                    ✓ জরুরি প্রয়োজনে দ্রুত যোগাযোগ
                  </p>
                </div>

                <div className="rounded-[18px] border border-[#DDEBEC] bg-white/80 px-4 py-3 shadow-sm">
                  <p className="text-sm font-semibold text-[#015D67]">
                    ✓ রোগীবান্ধব ও আন্তরিক সহযোগিতা
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom CTA */}
        <div className="mt-14 lg:mt-20">
          <div className="rounded-[30px] border border-white/60 bg-gradient-to-r from-white/80 via-[#F7FCFC] to-white/80 p-6 text-center shadow-[0_20px_50px_rgba(1,93,103,0.08)] backdrop-blur-xl sm:p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-[#015D67] sm:text-3xl">
              আপনার সুস্থতার যাত্রায় আমরা আছি আপনার পাশে
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#4B7D83] sm:text-base sm:leading-8">
              প্রয়োজনের মুহূর্তে সঠিক তথ্য, সহজ যোগাযোগ এবং আন্তরিক সহায়তা — এই
              তিনটিকেই আমরা সর্বোচ্চ গুরুত্ব দিই। আপনার যেকোনো প্রশ্নে আমাদের
              সাথে যোগাযোগ করুন।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
