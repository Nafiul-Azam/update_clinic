import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/30 bg-gradient-to-br from-[#EAF7F5] via-[#F5F9F9] to-[#DDF3F0] px-4 pb-6 pt-12 sm:px-6 lg:px-8">
      {/* Soft ambient background glow */}
      <div className="pointer-events-none absolute -left-12 top-0 h-40 w-40 rounded-full bg-[#87E4DB]/20 blur-3xl"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[#00ACB1]/10 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-[#CAF0C1]/20 blur-3xl"></div>

      <div className="mx-auto max-w-7xl">
        {/* Main footer card */}
        <div className="rounded-[30px] border border-white/40 bg-white/60 p-6 shadow-[0_18px_50px_rgba(1,93,103,0.10)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-5">
            {/* Brand intro */}
            <div className="xl:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#87E4DB]/20 text-lg font-bold text-[#015D67] shadow-sm">
                  U
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#015D67]">
                    Update Clinic
                  </h2>
                  <p className="text-sm font-medium text-[#1F6C75]">
                    Trusted care, modern service
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#47878E] sm:text-base">
                আধুনিক চিকিৎসা প্রযুক্তি, নির্ভুল রিপোর্ট এবং রোগীকেন্দ্রিক
                আন্তরিক সেবার সমন্বয়ে Update Clinic প্রতিনিয়ত বিশ্বস্ত
                স্বাস্থ্যসেবা পৌঁছে দিতে কাজ করছে। উন্নত ডায়াগনস্টিক সুবিধা,
                অভিজ্ঞ ডাক্তার এবং মানসম্মত পরিবেশের মাধ্যমে আমরা রোগীদের আস্থা
                অর্জনে প্রতিশ্রুতিবদ্ধ।
              </p>

              {/* Newsletter */}
              <div className="mt-6">
                <h3 className="text-base font-semibold text-[#015D67]">
                  আপডেট পেতে সাবস্ক্রাইব করুন
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#47878E]">
                  নতুন সেবা, অফার এবং গুরুত্বপূর্ণ আপডেট পেতে আপনার ইমেইল দিন।
                </p>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="আপনার ইমেইল লিখুন"
                    className="h-12 w-full rounded-full border border-[#D5E4E6] bg-white/80 px-5 text-sm text-[#015D67] outline-none transition duration-300 placeholder:text-[#7AA2A7] focus:border-[#87E4DB] focus:ring-4 focus:ring-[#87E4DB]/25"
                  />
                  <button className="inline-flex h-12 items-center justify-center rounded-full bg-[#00ACB1] px-6 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,172,177,0.25)] transition duration-300 hover:bg-[#015D67]">
                    সাবস্ক্রাইব
                  </button>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-lg font-bold text-[#015D67]">Quick Links</h3>
              <ul className="mt-5 space-y-3 text-sm text-[#47878E]">
                <li>
                  <a href="#" className="transition hover:text-[#015D67]">
                    হোম
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-[#015D67]">
                    আমাদের সম্পর্কে
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-[#015D67]">
                    সেবাসমূহ
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-[#015D67]">
                    ডাক্তারবৃন্দ
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="transition hover:text-[#015D67]"
                  >
                    গ্যালারি
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-[#015D67]">
                    যোগাযোগ
                  </a>
                </li>
              </ul>

              <h4 className="mt-7 text-base font-semibold text-[#015D67]">
                প্রয়োজনীয় পেজ
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-[#47878E]">
                <li>
                  <a href="#" className="transition hover:text-[#015D67]">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-[#015D67]">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-[#015D67]">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-[#015D67]">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-[#015D67]">সেবাসমূহ</h3>
              <ul className="mt-5 space-y-3 text-sm text-[#47878E]">
                <li>MRI</li>
                <li>CT Scan</li>
                <li>X-Ray</li>
                <li>ECG</li>
                <li>Ultrasound</li>
                <li>Pathology</li>
              </ul>

              <h4 className="mt-7 text-base font-semibold text-[#015D67]">
                সময়সূচি
              </h4>
              <div className="mt-4 space-y-3 text-sm text-[#47878E]">
                <p>শনিবার – বৃহস্পতিবার: সকাল ৮টা – রাত ১০টা</p>
                <p>শুক্রবার: জরুরি সেবা চালু</p>
                <p>জরুরি প্রয়োজনে ২৪/৭ সহায়তা</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold text-[#015D67]">
                যোগাযোগের তথ্য
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-7 text-[#47878E]">
                <p>
                  <span className="font-semibold text-[#015D67]">
                    সিরিয়ালের জন্য:
                  </span>{" "}
                  +8801XXXXXXXXX
                </p>

                <p>
                  <span className="font-semibold text-[#015D67]">ইমেইল:</span>{" "}
                  yourclinic@gmail.com
                </p>

                <p>
                  <span className="font-semibold text-[#015D67]">
                    রংপুর শাখা:
                  </span>{" "}
                  ধাপ, জেল রোড, রংপুর – ৫৫০৪
                </p>

                <p>
                  <span className="font-semibold text-[#015D67]">
                    কুড়িগ্রাম শাখা:
                  </span>{" "}
                  রাজারহাট, কুড়িগ্রাম, রংপুর
                </p>

                <p>
                  <a
                    href="#"
                    className="font-medium text-[#00ACB1] transition hover:text-[#015D67]"
                  >
                    Google Map দেখুন
                  </a>
                </p>
              </div>

              {/* Social links */}
              <div className="mt-7">
                <h4 className="text-base font-semibold text-[#015D67]">
                  সামাজিক যোগাযোগ
                </h4>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="rounded-full border border-[#D5E4E6] bg-white/70 px-4 py-2 text-sm font-medium text-[#015D67] transition hover:border-[#87E4DB] hover:bg-white"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="rounded-full border border-[#D5E4E6] bg-white/70 px-4 py-2 text-sm font-medium text-[#015D67] transition hover:border-[#87E4DB] hover:bg-white"
                  >
                    YouTube
                  </a>
                  <a
                    href="#"
                    className="rounded-full border border-[#D5E4E6] bg-white/70 px-4 py-2 text-sm font-medium text-[#015D67] transition hover:border-[#87E4DB] hover:bg-white"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="rounded-full border border-[#D5E4E6] bg-white/70 px-4 py-2 text-sm font-medium text-[#015D67] transition hover:border-[#87E4DB] hover:bg-white"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-10 border-t border-[#D5E4E6] pt-5">
            <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-[#47878E] md:flex-row md:text-left">
              <p>© 2026 Update Clinic. All Rights Reserved.</p>
              <p>
                Developed with care for better digital healthcare experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
