import React, { useRef } from "react";

const quickContacts = [
  {
    id: 1,
    title: "কল করুন",
    number: "+8801XXXXXXXXX",
    sub: "সিরিয়াল, তথ্য ও জরুরি যোগাযোগের জন্য",
    href: "tel:+8801XXXXXXXXX",
    type: "call",
  },
  {
    id: 2,
    title: "হোয়াটসঅ্যাপে যোগাযোগ",
    number: "+8801XXXXXXXXX",
    sub: "মেসেজ দিয়ে দ্রুত যোগাযোগ করুন",
    href: "https://wa.me/8801XXXXXXXXX",
    type: "whatsapp",
  },
];

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
  const formRef = useRef(null);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#F8FCFC_0%,#F4FBFB_35%,#EEF8F8_100%)] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-[-60px] top-[-40px] h-52 w-52 rounded-full bg-[#87E4DB]/30 blur-3xl sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute right-[-70px] top-[15%] h-56 w-56 rounded-full bg-[#00ACB1]/15 blur-3xl sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute bottom-[-80px] left-[25%] h-56 w-56 rounded-full bg-[#015D67]/12 blur-3xl sm:h-72 sm:w-72" />

      <div className="mx-auto max-w-7xl">
        {/* hero */}
        <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
          {/* left content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center rounded-full border border-white/60 bg-white/55 px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-[#1F6C75] shadow-[0_8px_22px_rgba(1,93,103,0.08)] backdrop-blur-xl sm:text-xs">
              CONTACT & SUPPORT
            </div>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-[#015D67] sm:text-4xl lg:text-5xl">
              দ্রুত যোগাযোগ করুন
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4D7D83] sm:text-base sm:leading-8">
              সিরিয়াল, ডাক্তার চেম্বার, টেস্ট, রিপোর্ট কিংবা জরুরি প্রয়োজন —
              যেকোনো তথ্যের জন্য সহজেই আমাদের সাথে যোগাযোগ করতে পারেন। রোগী ও
              রোগীর পরিবারের সুবিধার কথা মাথায় রেখে আমরা দ্রুত যোগাযোগের
              ব্যবস্থা রেখেছি।
            </p>

            {/* quick action glass cards */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {quickContacts.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.type === "whatsapp" ? "_blank" : undefined}
                  rel={
                    item.type === "whatsapp" ? "noopener noreferrer" : undefined
                  }
                  className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/45 p-4 shadow-[0_18px_45px_rgba(1,93,103,0.10)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-[0_24px_55px_rgba(1,93,103,0.14)] sm:p-5"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35),rgba(255,255,255,0.08))]" />

                  <div className="relative">
                    <div className="flex items-start gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/60 bg-white/55 shadow-sm backdrop-blur-xl">
                        {item.type === "call" ? (
                          <img
                            src="/phone-call.png"
                            alt="Call"
                            className="h-5 w-5 object-contain"
                          />
                        ) : (
                          <img
                            src="/whatsapp.png"
                            alt="WhatsApp"
                            className="h-6 w-6 object-contain"
                          />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-[#1F6C75]">
                          {item.title}
                        </p>
                        <p className="mt-1 break-all text-lg font-bold text-[#015D67] sm:text-xl">
                          {item.number}
                        </p>
                        <p className="mt-2 text-xs leading-6 text-[#618A90] sm:text-sm">
                          {item.sub}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 inline-flex items-center rounded-full border border-[#CFE8EA] bg-white/70 px-4 py-2 text-xs font-semibold text-[#015D67] transition duration-300 group-hover:bg-white sm:text-sm">
                      {item.type === "call"
                        ? "এখনই কল করুন"
                        : "হোয়াটসঅ্যাপে মেসেজ দিন"}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* helper actions */}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleScrollToForm}
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#00ACB1] px-6 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(0,172,177,0.22)] transition duration-300 hover:bg-[#015D67] hover:shadow-[0_18px_32px_rgba(1,93,103,0.24)]"
              >
                ফর্মে যান
              </button>

              <a
                href="tel:+8801XXXXXXXXX"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/70 bg-white/50 px-6 text-sm font-semibold text-[#015D67] shadow-[0_10px_25px_rgba(1,93,103,0.08)] backdrop-blur-xl transition duration-300 hover:bg-white/70"
              >
                দ্রুত কল অপশন
              </a>
            </div>
          </div>

          {/* right visual card */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-white/35 blur-2xl" />
              <div className="absolute -bottom-6 right-0 h-28 w-28 rounded-full bg-[#87E4DB]/35 blur-2xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/40 shadow-[0_25px_70px_rgba(1,93,103,0.12)] backdrop-blur-2xl">
                <img
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1400&auto=format&fit=crop"
                  alt="Clinic support desk"
                  className="h-[260px] w-full object-cover object-center sm:h-[360px] lg:h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#062E34]/60 via-[#062E34]/15 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-[24px] border border-white/20 bg-white/10 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.10)] backdrop-blur-xl sm:p-5">
                  <p className="text-base font-semibold text-white sm:text-lg">
                    আপনার প্রয়োজনের সময় দ্রুত সহায়তা
                  </p>
                  <p className="mt-2 text-xs leading-6 text-white/85 sm:text-sm">
                    কল, হোয়াটসঅ্যাপ অথবা নিচের ফর্ম — যেভাবে সুবিধা হয়, সেভাবেই
                    যোগাযোগ করুন।
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-[11px] font-medium text-white sm:text-xs">
                      সিরিয়াল
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-[11px] font-medium text-white sm:text-xs">
                      ডাক্তার তথ্য
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-[11px] font-medium text-white sm:text-xs">
                      টেস্ট ও রিপোর্ট
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* info cards */}
        <div className="mt-12 sm:mt-14 lg:mt-16">
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
                className="rounded-[26px] border border-white/60 bg-white/55 p-5 shadow-[0_16px_40px_rgba(1,93,103,0.08)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/68 hover:shadow-[0_22px_50px_rgba(1,93,103,0.12)]"
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

        {/* form + support content */}
        <div
          ref={formRef}
          className="mt-12 grid gap-8 scroll-mt-28 lg:mt-16 lg:grid-cols-2 lg:gap-10"
        >
          {/* form */}
          <div className="rounded-[32px] border border-white/60 bg-white/55 p-5 shadow-[0_22px_55px_rgba(1,93,103,0.10)] backdrop-blur-2xl sm:p-7 lg:p-8">
            <div className="inline-flex rounded-full border border-white/70 bg-white/65 px-4 py-1.5 text-[11px] font-semibold tracking-[0.15em] text-[#1F6C75] sm:text-xs">
              SEND MESSAGE
            </div>

            <h2 className="mt-4 text-2xl font-bold text-[#015D67] sm:text-3xl">
              আমাদের লিখুন
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#4B7D83] sm:text-base">
              আপনার প্রশ্ন, মতামত বা প্রয়োজনীয় তথ্য জানাতে নিচের ফর্মটি পূরণ
              করুন।
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
                    className="h-12 w-full rounded-2xl border border-white/70 bg-white/70 px-4 text-sm text-[#12414D] outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition focus:border-[#00ACB1] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#015D67]">
                    মোবাইল নম্বর
                  </label>
                  <input
                    type="text"
                    placeholder="আপনার মোবাইল নম্বর"
                    className="h-12 w-full rounded-2xl border border-white/70 bg-white/70 px-4 text-sm text-[#12414D] outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition focus:border-[#00ACB1] focus:bg-white"
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
                  className="h-12 w-full rounded-2xl border border-white/70 bg-white/70 px-4 text-sm text-[#12414D] outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition focus:border-[#00ACB1] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#015D67]">
                  বিষয়
                </label>
                <input
                  type="text"
                  placeholder="কি বিষয়ে যোগাযোগ করতে চান"
                  className="h-12 w-full rounded-2xl border border-white/70 bg-white/70 px-4 text-sm text-[#12414D] outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition focus:border-[#00ACB1] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#015D67]">
                  বার্তা
                </label>
                <textarea
                  rows="5"
                  placeholder="আপনার বার্তা লিখুন..."
                  className="w-full rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-sm text-[#12414D] outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition focus:border-[#00ACB1] focus:bg-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#00ACB1] px-6 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(0,172,177,0.24)] transition duration-300 hover:bg-[#015D67] sm:w-auto sm:min-w-[190px]"
              >
                বার্তা পাঠান
              </button>
            </form>
          </div>

          {/* right support column */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[32px] border border-white/60 bg-white/45 shadow-[0_22px_55px_rgba(1,93,103,0.10)] backdrop-blur-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop"
                alt="Clinic communication"
                className="h-[240px] w-full object-cover object-center sm:h-[300px] lg:h-[330px]"
              />
            </div>

            <div className="rounded-[32px] border border-white/60 bg-white/55 p-6 shadow-[0_22px_55px_rgba(1,93,103,0.10)] backdrop-blur-2xl sm:p-7">
              <h2 className="text-2xl font-bold text-[#015D67] sm:text-3xl">
                কেন যোগাযোগ করবেন
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#4B7D83] sm:text-base sm:leading-8">
                ডাক্তার দেখানোর সময়, চেম্বার শিডিউল, টেস্ট সংক্রান্ত তথ্য,
                রিপোর্ট সংগ্রহ, সিরিয়াল এবং জরুরি সহায়তা — সবকিছুর জন্য আমাদের
                সাথে দ্রুত যোগাযোগ করতে পারবেন। আমরা সবসময় চেষ্টা করি রোগী যেন
                সহজ, স্পষ্ট ও সম্মানজনক সাপোর্ট পান।
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-[18px] border border-white/70 bg-white/70 px-4 py-3 shadow-sm">
                  <p className="text-sm font-semibold text-[#015D67]">
                    ✓ সিরিয়াল ও ডাক্তার সময় সম্পর্কে তথ্য
                  </p>
                </div>

                <div className="rounded-[18px] border border-white/70 bg-white/70 px-4 py-3 shadow-sm">
                  <p className="text-sm font-semibold text-[#015D67]">
                    ✓ হোয়াটসঅ্যাপে দ্রুত যোগাযোগের সুযোগ
                  </p>
                </div>

                <div className="rounded-[18px] border border-white/70 bg-white/70 px-4 py-3 shadow-sm">
                  <p className="text-sm font-semibold text-[#015D67]">
                    ✓ টেস্ট, রিপোর্ট ও অন্যান্য সেবার সহায়তা
                  </p>
                </div>

                <div className="rounded-[18px] border border-white/70 bg-white/70 px-4 py-3 shadow-sm">
                  <p className="text-sm font-semibold text-[#015D67]">
                    ✓ রোগীবান্ধব ও আন্তরিক সহযোগিতা
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+8801XXXXXXXXX"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#015D67] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(1,93,103,0.22)] transition duration-300 hover:bg-[#01434b]"
                >
                  কল করুন
                </a>

                <a
                  href="https://wa.me/8801XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/70 bg-white/70 px-5 text-sm font-semibold text-[#015D67] shadow-[0_10px_25px_rgba(1,93,103,0.08)] transition duration-300 hover:bg-white"
                >
                  <img
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    className="h-5 w-5 object-contain"
                  />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* bottom cta */}
        <div className="mt-12 lg:mt-16">
          <div className="rounded-[32px] border border-white/60 bg-white/50 p-6 text-center shadow-[0_22px_55px_rgba(1,93,103,0.10)] backdrop-blur-2xl sm:p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-[#015D67] sm:text-3xl">
              আপনার প্রয়োজনের মুহূর্তে আমরা আছি আপনার পাশে
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#4B7D83] sm:text-base sm:leading-8">
              দ্রুত যোগাযোগ, আন্তরিক সহায়তা এবং রোগীবান্ধব সেবা — এই তিনটিকেই
              আমরা সর্বোচ্চ গুরুত্ব দিই। যেকোনো প্রয়োজনে উপরের নম্বরে কল করুন
              অথবা ফর্ম পূরণ করে আমাদের জানান।
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="tel:+8801XXXXXXXXX"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#00ACB1] px-6 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(0,172,177,0.24)] transition duration-300 hover:bg-[#015D67]"
              >
                এখনই কল করুন
              </a>

              <button
                type="button"
                onClick={handleScrollToForm}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/70 bg-white/70 px-6 text-sm font-semibold text-[#015D67] shadow-[0_10px_25px_rgba(1,93,103,0.08)] backdrop-blur-xl transition duration-300 hover:bg-white"
              >
                ফর্মে যান
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
