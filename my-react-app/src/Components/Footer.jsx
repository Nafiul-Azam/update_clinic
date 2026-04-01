import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/30 bg-gradient-to-br from-[#EAF7F5] via-[#F7FBFB] to-[#E2F4F2] px-4 pb-5 pt-10 sm:px-6 lg:px-8 lg:pt-12">
      <div className="pointer-events-none absolute -left-12 top-0 h-36 w-36 rounded-full bg-[#87E4DB]/20 blur-3xl"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#00ACB1]/10 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-[#CAF0C1]/20 blur-3xl"></div>

      <div className="mx-auto max-w-7xl">
        <div className="rounded-[28px] border border-white/40 bg-white/65 p-4 shadow-[0_18px_50px_rgba(1,93,103,0.10)] backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            {/* brand */}
            <div className="lg:col-span-4">
              <div className="flex justify-center lg:justify-start">
                <img
                  src="/update.png"
                  alt="Update Clinic Logo"
                  className="h-14 w-auto object-contain sm:h-16 lg:h-[72px]"
                />
              </div>

              <p className="mt-5 max-w-md text-center text-sm leading-7 text-[#47878E] sm:text-[15px] lg:text-left">
                আধুনিক চিকিৎসা প্রযুক্তি, নির্ভুল রিপোর্ট এবং রোগীকেন্দ্রিক
                আন্তরিক সেবার সমন্বয়ে Update Clinic প্রতিনিয়ত বিশ্বস্ত
                স্বাস্থ্যসেবা পৌঁছে দিতে কাজ করছে। উন্নত ডায়াগনস্টিক সুবিধা,
                অভিজ্ঞ ডাক্তার এবং মানসম্মত পরিবেশের মাধ্যমে আমরা রোগীদের আস্থা
                অর্জনে প্রতিশ্রুতিবদ্ধ।
              </p>

              <div className="mt-6 rounded-[22px] border border-[#DDEBEC] bg-white/70 p-4 shadow-sm sm:p-5">
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
                    className="h-11 w-full rounded-full border border-[#D5E4E6] bg-white px-4 text-sm text-[#015D67] outline-none transition duration-300 placeholder:text-[#7AA2A7] focus:border-[#87E4DB] focus:ring-4 focus:ring-[#87E4DB]/20"
                  />
                  <button className="inline-flex h-11 items-center justify-center rounded-full bg-[#00ACB1] px-5 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(0,172,177,0.22)] transition duration-300 hover:bg-[#015D67]">
                    সাবস্ক্রাইব
                  </button>
                </div>
              </div>
            </div>

            {/* links area */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
                <div>
                  <h3 className="text-[15px] font-bold text-[#015D67] sm:text-base">
                    Quick Links
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-[13px] text-[#47878E] sm:text-sm">
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
                </div>

                <div>
                  <h3 className="text-[15px] font-bold text-[#015D67] sm:text-base">
                    প্রয়োজনীয় পেজ
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-[13px] text-[#47878E] sm:text-sm">
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

                <div>
                  <h3 className="text-[15px] font-bold text-[#015D67] sm:text-base">
                    সেবাসমূহ
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-[13px] text-[#47878E] sm:text-sm">
                    <li>MRI</li>
                    <li>CT Scan</li>
                    <li>X-Ray</li>
                    <li>ECG</li>
                    <li>Ultrasound</li>
                    <li>Pathology</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[15px] font-bold text-[#015D67] sm:text-base">
                    সময়সূচি
                  </h3>
                  <div className="mt-4 space-y-2.5 text-[13px] leading-6 text-[#47878E] sm:text-sm">
                    <p>শনিবার – বৃহস্পতিবার</p>
                    <p>সকাল ৮টা – রাত ১০টা</p>
                    <p>শুক্রবার: জরুরি সেবা চালু</p>
                    <p>২৪/৭ সহায়তা উপলব্ধ</p>
                  </div>
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <h3 className="text-[15px] font-bold text-[#015D67] sm:text-base">
                    যোগাযোগের তথ্য
                  </h3>

                  <div className="mt-4 space-y-2.5 text-[13px] leading-6 text-[#47878E] sm:text-sm">
                    <p>
                      <span className="font-semibold text-[#015D67]">
                        সিরিয়ালের জন্য:
                      </span>{" "}
                      +8801XXXXXXXXX
                    </p>

                    <p>
                      <span className="font-semibold text-[#015D67]">
                        ইমেইল:
                      </span>{" "}
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
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <h3 className="text-[15px] font-bold text-[#015D67] sm:text-base">
                    সামাজিক যোগাযোগ
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <a
                      href="#"
                      className="rounded-full border border-[#D5E4E6] bg-white px-3.5 py-2 text-[12px] font-medium text-[#015D67] transition hover:border-[#87E4DB] hover:bg-[#F7FCFC]"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="rounded-full border border-[#D5E4E6] bg-white px-3.5 py-2 text-[12px] font-medium text-[#015D67] transition hover:border-[#87E4DB] hover:bg-[#F7FCFC]"
                    >
                      YouTube
                    </a>
                    <a
                      href="#"
                      className="rounded-full border border-[#D5E4E6] bg-white px-3.5 py-2 text-[12px] font-medium text-[#015D67] transition hover:border-[#87E4DB] hover:bg-[#F7FCFC]"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="rounded-full border border-[#D5E4E6] bg-white px-3.5 py-2 text-[12px] font-medium text-[#015D67] transition hover:border-[#87E4DB] hover:bg-[#F7FCFC]"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-[#D8E7E8] pt-4 sm:mt-10 sm:pt-5">
            <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-[#47878E] sm:text-sm md:flex-row md:text-left">
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
