import React from "react";

const About = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#F7FBFC] via-[#F9FCFC] to-[#EEF7F7] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      {/* background glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-52 w-52 rounded-full bg-[#87E4DB]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[#00ACB1]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#015D67]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* top hero */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* text */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex rounded-full border border-[#87E4DB]/50 bg-white px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-[#1F6C75] shadow-sm sm:text-xs">
              ABOUT OUR HOSPITAL
            </span>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-[#015D67] sm:text-4xl lg:text-5xl">
              আমাদের সম্পর্কে
            </h1>

            <p className="mt-5 text-sm leading-7 text-[#4B7D83] sm:text-base sm:leading-8">
              আমরা বিশ্বাস করি, একটি হাসপাতাল শুধু চিকিৎসা দেওয়ার জায়গা নয় — এটি
              এমন একটি নির্ভরতার স্থান, যেখানে একজন মানুষ আশ্বাস, যত্ন,
              নিরাপত্তা এবং আন্তরিক সেবা খুঁজে পায়। সেই বিশ্বাস থেকেই আমাদের
              হাসপাতালের যাত্রা। আধুনিক চিকিৎসা প্রযুক্তি, অভিজ্ঞ ডাক্তার,
              প্রশিক্ষিত স্টাফ এবং রোগীবান্ধব পরিবেশের সমন্বয়ে আমরা প্রতিটি
              রোগীর জন্য সর্বোচ্চ মানের সেবা নিশ্চিত করার চেষ্টা করি।
            </p>

            <p className="mt-4 text-sm leading-7 text-[#5A868C] sm:text-base sm:leading-8">
              আমাদের লক্ষ্য শুধুমাত্র রোগ নির্ণয় বা চিকিৎসা প্রদান নয়; বরং
              প্রতিটি রোগী ও তার পরিবারের পাশে আস্থা নিয়ে দাঁড়ানো। উন্নত
              ডায়াগনস্টিক সুবিধা, পরিচ্ছন্ন পরিবেশ, মানবিক আচরণ এবং সময়োপযোগী
              সেবার মাধ্যমে আমরা এমন একটি স্বাস্থ্যসেবা অভিজ্ঞতা গড়ে তুলতে চাই,
              যা হবে বিশ্বস্ত, সম্মানজনক এবং হৃদয়স্পর্শী।
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="rounded-[20px] border border-white/60 bg-white/85 p-4 shadow-[0_12px_30px_rgba(1,93,103,0.08)] backdrop-blur-xl">
                <h3 className="text-xl font-bold text-[#015D67] sm:text-2xl">
                  ২৪/৭
                </h3>
                <p className="mt-1 text-[11px] text-[#4B7D83] sm:text-sm">
                  জরুরি সহায়তা
                </p>
              </div>

              <div className="rounded-[20px] border border-white/60 bg-white/85 p-4 shadow-[0_12px_30px_rgba(1,93,103,0.08)] backdrop-blur-xl">
                <h3 className="text-xl font-bold text-[#015D67] sm:text-2xl">
                  আধুনিক
                </h3>
                <p className="mt-1 text-[11px] text-[#4B7D83] sm:text-sm">
                  ডায়াগনস্টিক সেবা
                </p>
              </div>

              <div className="rounded-[20px] border border-white/60 bg-white/85 p-4 shadow-[0_12px_30px_rgba(1,93,103,0.08)] backdrop-blur-xl col-span-2 sm:col-span-1">
                <h3 className="text-xl font-bold text-[#015D67] sm:text-2xl">
                  বিশ্বস্ত
                </h3>
                <p className="mt-1 text-[11px] text-[#4B7D83] sm:text-sm">
                  রোগীসেবা পরিবেশ
                </p>
              </div>
            </div>
          </div>

          {/* image */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-[28px] bg-white/40 blur-2xl" />
              <div className="absolute -bottom-6 -right-3 h-24 w-24 rounded-full bg-[#87E4DB]/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-[30px] border border-white/60 bg-white/60 shadow-[0_24px_60px_rgba(1,93,103,0.12)] backdrop-blur-xl">
                <img
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1400&auto=format&fit=crop"
                  alt="Hospital interior"
                  className="h-[260px] w-full object-cover object-center sm:h-[320px] lg:h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#062E34]/50 via-[#062E34]/10 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-[22px] border border-white/20 bg-white/12 p-4 backdrop-blur-md sm:p-5">
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    মানবিক সেবা, আধুনিক চিকিৎসা, নিরাপদ পরিবেশ
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-white/85 sm:text-sm">
                    রোগীর আস্থা এবং পরিবারের স্বস্তিকে সামনে রেখেই আমাদের
                    প্রতিটি সেবা পরিকল্পিত।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second section */}
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          <div className="rounded-[26px] border border-white/60 bg-white/85 p-6 shadow-[0_16px_40px_rgba(1,93,103,0.08)] backdrop-blur-xl">
            <h2 className="text-xl font-bold text-[#015D67] sm:text-2xl">
              আমাদের লক্ষ্য
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#4B7D83] sm:text-base">
              প্রতিটি রোগীকে সঠিক সময়ে, সঠিক চিকিৎসা এবং সর্বোচ্চ যত্নের মাধ্যমে
              মানসম্পন্ন স্বাস্থ্যসেবা প্রদান করা। আমরা চাই, চিকিৎসা গ্রহণের
              পুরো প্রক্রিয়া যেন রোগীর জন্য সহজ, নিরাপদ ও নিশ্চিন্ত হয়।
            </p>
          </div>

          <div className="rounded-[26px] border border-white/60 bg-white/85 p-6 shadow-[0_16px_40px_rgba(1,93,103,0.08)] backdrop-blur-xl">
            <h2 className="text-xl font-bold text-[#015D67] sm:text-2xl">
              আমাদের ভিশন
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#4B7D83] sm:text-base">
              আধুনিক প্রযুক্তি, বিশেষজ্ঞ চিকিৎসক এবং মানবিক ব্যবহারের সমন্বয়ে
              এমন একটি স্বাস্থ্যসেবা প্রতিষ্ঠান গড়ে তোলা, যা রোগীর প্রথম পছন্দ
              এবং দীর্ঘমেয়াদি আস্থার প্রতীক হয়ে উঠবে।
            </p>
          </div>

          <div className="rounded-[26px] border border-white/60 bg-white/85 p-6 shadow-[0_16px_40px_rgba(1,93,103,0.08)] backdrop-blur-xl">
            <h2 className="text-xl font-bold text-[#015D67] sm:text-2xl">
              আমাদের প্রতিশ্রুতি
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#4B7D83] sm:text-base">
              আমরা প্রতিশ্রুতি দিচ্ছি — রোগীর সম্মান, গোপনীয়তা, নিরাপত্তা এবং
              আন্তরিক সেবাকে সবসময় সর্বোচ্চ গুরুত্ব দেওয়া হবে। প্রতিটি সেবায়
              থাকবে পেশাদারিত্ব, স্বচ্ছতা এবং সহমর্মিতা।
            </p>
          </div>
        </div>

        {/* image + text section */}
        <div className="mt-14 grid items-center gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-[30px] border border-white/60 bg-white/60 shadow-[0_24px_60px_rgba(1,93,103,0.10)] backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1400&auto=format&fit=crop"
              alt="Doctors discussing treatment"
              className="h-[250px] w-full object-cover object-center sm:h-[320px] lg:h-[420px]"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#015D67] sm:text-3xl">
              কেন আমাদের নির্বাচন করবেন
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#4B7D83] sm:text-base sm:leading-8">
              আমাদের হাসপাতালে রোগীসেবা শুধু একটি দায়িত্ব নয়, এটি আমাদের
              অঙ্গীকার। অভিজ্ঞ ডাক্তারদের তত্ত্বাবধান, উন্নত যন্ত্রপাতি, দ্রুত
              রিপোর্টিং, পরিচ্ছন্ন ও আরামদায়ক পরিবেশ এবং সহানুভূতিশীল সাপোর্ট
              টিম — সবকিছু মিলিয়ে আমরা একটি পরিপূর্ণ healthcare experience
              দেওয়ার চেষ্টা করি।
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-[18px] border border-[#DDEBEC] bg-white/80 px-4 py-3 shadow-sm">
                <p className="text-sm font-semibold text-[#015D67]">
                  ✓ অভিজ্ঞ ও বিশেষজ্ঞ ডাক্তার
                </p>
              </div>

              <div className="rounded-[18px] border border-[#DDEBEC] bg-white/80 px-4 py-3 shadow-sm">
                <p className="text-sm font-semibold text-[#015D67]">
                  ✓ আধুনিক ডায়াগনস্টিক ও পরীক্ষার সুবিধা
                </p>
              </div>

              <div className="rounded-[18px] border border-[#DDEBEC] bg-white/80 px-4 py-3 shadow-sm">
                <p className="text-sm font-semibold text-[#015D67]">
                  ✓ পরিচ্ছন্ন, নিরাপদ ও রোগীবান্ধব পরিবেশ
                </p>
              </div>

              <div className="rounded-[18px] border border-[#DDEBEC] bg-white/80 px-4 py-3 shadow-sm">
                <p className="text-sm font-semibold text-[#015D67]">
                  ✓ আন্তরিক সেবা ও বিশ্বস্ত চিকিৎসা সহায়তা
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* bottom message */}
        <div className="mt-14 lg:mt-20">
          <div className="rounded-[30px] border border-white/60 bg-gradient-to-r from-white/80 via-[#F7FCFC] to-white/80 p-6 text-center shadow-[0_20px_50px_rgba(1,93,103,0.08)] backdrop-blur-xl sm:p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-[#015D67] sm:text-3xl">
              সুস্থতার পথে আপনার বিশ্বস্ত সঙ্গী
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#4B7D83] sm:text-base sm:leading-8">
              আমরা চাই, প্রতিটি রোগী আমাদের হাসপাতালে এসে শুধু চিকিৎসা নয়, পেয়ে
              যান স্বস্তি, বিশ্বাস এবং যত্নের একটি পূর্ণ অভিজ্ঞতা। আপনার
              সুস্বাস্থ্য, নিরাপত্তা এবং আস্থা — এটাই আমাদের সবচেয়ে বড়
              অনুপ্রেরণা।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
