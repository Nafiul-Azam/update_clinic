import React, { useEffect, useRef, useState } from "react";

const From = () => {
  const [userType, setUserType] = useState("patient");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 },
    );

    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  const inputClass =
    "h-12 w-full rounded-2xl border border-[#D5E4E6] bg-white/80 px-4 text-sm text-[#015D67] outline-none transition duration-300 placeholder:text-[#7AA2A7] focus:border-[#87E4DB] focus:ring-4 focus:ring-[#87E4DB]/25";

  const textareaClass =
    "w-full rounded-2xl border border-[#D5E4E6] bg-white/80 px-4 py-3 text-sm text-[#015D67] outline-none transition duration-300 placeholder:text-[#7AA2A7] focus:border-[#87E4DB] focus:ring-4 focus:ring-[#87E4DB]/25";

  const selectClass =
    "h-12 w-full rounded-2xl border border-[#D5E4E6] bg-white/80 px-4 text-sm text-[#015D67] outline-none transition duration-300 focus:border-[#87E4DB] focus:ring-4 focus:ring-[#87E4DB]/25";

  const sectionTitleClass = "mb-4 text-lg font-bold text-[#015D67] sm:text-xl";

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 pb-12 pt-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`relative overflow-hidden rounded-[32px] border border-white/40 bg-gradient-to-br from-[#F5F9F9] via-[#EAF7F5] to-[#DDF3F0] p-5 shadow-[0_18px_55px_rgba(1,93,103,0.10)] transition-all duration-1000 ease-out sm:p-6 md:p-8 lg:p-10 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-[#87E4DB]/25 blur-3xl"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[#00ACB1]/10 blur-3xl"></div>
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-[#CAF0C1]/20 blur-3xl"></div>

          {/* Header */}
          <div className="relative z-10 mb-8 text-center">
            <span className="inline-flex rounded-full border border-[#87E4DB]/40 bg-white/65 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#1F6C75] shadow-sm backdrop-blur-md sm:text-xs">
              APPOINTMENT & INQUIRY FORM
            </span>

            <h2 className="mt-4 text-2xl font-bold text-[#015D67] sm:text-3xl md:text-4xl">
              সিরিয়াল ও যোগাযোগ ফর্ম
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-[#47878E] sm:text-base">
              আপনার প্রয়োজন অনুযায়ী Patient অথবা General Inquiry mode নির্বাচন
              করুন। পরিষ্কার, সহজ এবং নির্ভরযোগ্যভাবে তথ্য পূরণ করে আমাদের সাথে
              যুক্ত হোন।
            </p>
          </div>

          {/* Main form card */}
          <div className="relative z-10 rounded-[28px] border border-white/45 bg-white/65 p-4 shadow-[0_14px_35px_rgba(1,93,103,0.08)] backdrop-blur-xl sm:p-6 lg:p-8">
            {/* User type switch */}
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-bold text-[#015D67]">
                ব্যবহারকারীর ধরন নির্বাচন করুন
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setUserType("patient")}
                  className={`rounded-[24px] border p-4 text-left transition-all duration-300 ${
                    userType === "patient"
                      ? "border-[#87E4DB] bg-[#EAF7F5] shadow-[0_12px_26px_rgba(1,93,103,0.10)] ring-4 ring-[#87E4DB]/20"
                      : "border-[#D5E4E6] bg-white/70 hover:border-[#87E4DB]/50 hover:bg-white"
                  }`}
                >
                  <h4 className="text-base font-bold text-[#015D67]">
                    Patient
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-[#47878E]">
                    সিরিয়াল, চিকিৎসা, টেস্ট এবং রোগী সংক্রান্ত পূর্ণ তথ্যের
                    জন্য।
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setUserType("general")}
                  className={`rounded-[24px] border p-4 text-left transition-all duration-300 ${
                    userType === "general"
                      ? "border-[#87E4DB] bg-[#EAF7F5] shadow-[0_12px_26px_rgba(1,93,103,0.10)] ring-4 ring-[#87E4DB]/20"
                      : "border-[#D5E4E6] bg-white/70 hover:border-[#87E4DB]/50 hover:bg-white"
                  }`}
                >
                  <h4 className="text-base font-bold text-[#015D67]">
                    General User / Inquiry
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-[#47878E]">
                    সাধারণ যোগাযোগ, সেবা সম্পর্কে জানতে বা inquiry করার জন্য।
                  </p>
                </button>
              </div>
            </div>

            <form className="space-y-8">
              {userType === "patient" ? (
                <>
                  {/* Patient Basic Information */}
                  <div className="rounded-[24px] border border-[#E4EFF0] bg-[#FDFEFE]/80 p-4 sm:p-5">
                    <h3 className={sectionTitleClass}>
                      Patient Basic Information
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className={inputClass}
                      />
                      <input
                        type="number"
                        placeholder="Age"
                        className={inputClass}
                      />
                      <select className={selectClass}>
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className={inputClass}
                      />
                      <input
                        type="email"
                        placeholder="Email (optional)"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Appointment / Serial Information */}
                  <div className="rounded-[24px] border border-[#E4EFF0] bg-[#FDFEFE]/80 p-4 sm:p-5">
                    <h3 className={sectionTitleClass}>
                      Appointment / Serial Information
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                      <select className={selectClass}>
                        <option>Select Doctor</option>
                        <option>ডা. সাদিয়া রহমান</option>
                        <option>ডা. করিম</option>
                        <option>ডা. নুসরাত জাহান</option>
                      </select>

                      <select className={selectClass}>
                        <option>Department</option>
                        <option>Medicine</option>
                        <option>Cardiology</option>
                        <option>Gynecology</option>
                        <option>Radiology</option>
                      </select>

                      <input type="date" className={inputClass} />
                      <select className={selectClass}>
                        <option>Time Slot</option>
                        <option>10:00 AM - 12:00 PM</option>
                        <option>12:00 PM - 03:00 PM</option>
                        <option>04:00 PM - 07:00 PM</option>
                        <option>07:00 PM - 10:00 PM</option>
                      </select>

                      <select className={selectClass}>
                        <option>Serial Type</option>
                        <option>New Patient</option>
                        <option>Follow-up</option>
                      </select>
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div className="rounded-[24px] border border-[#E4EFF0] bg-[#FDFEFE]/80 p-4 sm:p-5">
                    <h3 className={sectionTitleClass}>Medical Information</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <textarea
                        rows="4"
                        placeholder="Problem / Symptoms"
                        className={textareaClass}
                      ></textarea>
                      <textarea
                        rows="4"
                        placeholder="Medical History"
                        className={textareaClass}
                      ></textarea>
                      <textarea
                        rows="4"
                        placeholder="Current Medication"
                        className={textareaClass}
                      ></textarea>
                      <textarea
                        rows="4"
                        placeholder="Allergies"
                        className={textareaClass}
                      ></textarea>
                    </div>
                  </div>

                  {/* Diagnostic / Test Section */}
                  <div className="rounded-[24px] border border-[#E4EFF0] bg-[#FDFEFE]/80 p-4 sm:p-5">
                    <h3 className={sectionTitleClass}>
                      Diagnostic / Test Section
                    </h3>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
                      {[
                        "MRI",
                        "CT Scan",
                        "X-Ray",
                        "ECG",
                        "Ultrasound",
                        "Blood Test / Pathology",
                      ].map((item) => (
                        <label
                          key={item}
                          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#D5E4E6] bg-white/80 px-4 py-3 text-sm font-medium text-[#015D67] transition hover:border-[#87E4DB] hover:bg-[#F5F9F9]"
                        >
                          <input
                            type="checkbox"
                            className="h-4 w-4 accent-[#00ACB1]"
                          />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Address Information */}
                  <div className="rounded-[24px] border border-[#E4EFF0] bg-[#FDFEFE]/80 p-4 sm:p-5">
                    <h3 className={sectionTitleClass}>Address Information</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                      <input
                        type="text"
                        placeholder="Full Address"
                        className={inputClass}
                      />
                      <input
                        type="text"
                        placeholder="District"
                        className={inputClass}
                      />
                      <input
                        type="text"
                        placeholder="Upazila"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="rounded-[24px] border border-[#E4EFF0] bg-[#FDFEFE]/80 p-4 sm:p-5">
                    <h3 className={sectionTitleClass}>Emergency Contact</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                      <input
                        type="text"
                        placeholder="Emergency Contact Name"
                        className={inputClass}
                      />
                      <input
                        type="text"
                        placeholder="Relation"
                        className={inputClass}
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="rounded-[24px] border border-[#E4EFF0] bg-[#FDFEFE]/80 p-4 sm:p-5">
                    <h3 className={sectionTitleClass}>
                      Payment Information (Optional)
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                      <select className={selectClass}>
                        <option>Payment Method</option>
                        <option>bKash</option>
                        <option>Nagad</option>
                        <option>Cash</option>
                        <option>Card</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Transaction ID"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Extra Options */}
                  <div className="rounded-[24px] border border-[#E4EFF0] bg-[#FDFEFE]/80 p-4 sm:p-5">
                    <h3 className={sectionTitleClass}>Extra Options</h3>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      {[
                        "Online Consultation",
                        "Home Service",
                        "Report Delivery Method",
                      ].map((item) => (
                        <label
                          key={item}
                          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#D5E4E6] bg-white/80 px-4 py-3 text-sm font-medium text-[#015D67] transition hover:border-[#87E4DB] hover:bg-[#F5F9F9]"
                        >
                          <input
                            type="checkbox"
                            className="h-4 w-4 accent-[#00ACB1]"
                          />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="rounded-[24px] border border-[#E4EFF0] bg-[#FDFEFE]/80 p-4 sm:p-5">
                    <h3 className={sectionTitleClass}>Consent Section</h3>
                    <div className="space-y-4">
                      <label className="flex items-start gap-3 rounded-2xl border border-[#D5E4E6] bg-white/75 px-4 py-3 text-sm text-[#47878E]">
                        <input
                          type="checkbox"
                          className="mt-1 h-4 w-4 accent-[#00ACB1]"
                        />
                        <span>
                          আমি নিশ্চিত করছি যে প্রদত্ত তথ্য সঠিক ও সম্পূর্ণ।
                        </span>
                      </label>

                      <label className="flex items-start gap-3 rounded-2xl border border-[#D5E4E6] bg-white/75 px-4 py-3 text-sm text-[#47878E]">
                        <input
                          type="checkbox"
                          className="mt-1 h-4 w-4 accent-[#00ACB1]"
                        />
                        <span>আমি Privacy Policy ও Terms গ্রহণ করছি।</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="rounded-[24px] border border-[#87E4DB]/35 bg-gradient-to-r from-[#F5F9F9] via-white to-[#EAF7F5] p-5 shadow-sm">
                    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                      <div>
                        <h3 className="text-lg font-bold text-[#015D67]">
                          আপনার সিরিয়াল অনুরোধ জমা দিন
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-[#47878E]">
                          সমস্ত তথ্য পূরণ করে “সিরিয়াল নিশ্চিত করুন” বাটনে ক্লিক
                          করুন।
                        </p>
                      </div>

                      <button
                        type="submit"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-[#00ACB1] px-8 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(0,172,177,0.25)] transition duration-300 hover:bg-[#015D67]"
                      >
                        সিরিয়াল নিশ্চিত করুন
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* General User Form */}
                  <div className="rounded-[24px] border border-[#E4EFF0] bg-[#FDFEFE]/80 p-4 sm:p-5">
                    <h3 className={sectionTitleClass}>
                      General Inquiry Information
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className={inputClass}
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className={inputClass}
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className={inputClass}
                      />

                      <select className={selectClass}>
                        <option>Purpose of Contact</option>
                        <option>General Inquiry</option>
                        <option>Service Information</option>
                        <option>Doctor Information</option>
                        <option>Report Query</option>
                      </select>

                      <select className={selectClass}>
                        <option>Interested Service / Department</option>
                        <option>MRI</option>
                        <option>CT Scan</option>
                        <option>X-Ray</option>
                        <option>ECG</option>
                        <option>Ultrasound</option>
                        <option>Medicine</option>
                      </select>

                      <select className={selectClass}>
                        <option>Preferred Branch</option>
                        <option>রংপুর শাখা</option>
                        <option>কুড়িগ্রাম শাখা</option>
                      </select>
                    </div>

                    <div className="mt-4">
                      <textarea
                        rows="5"
                        placeholder="Message"
                        className={textareaClass}
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="rounded-[24px] border border-[#87E4DB]/35 bg-gradient-to-r from-[#F5F9F9] via-white to-[#EAF7F5] p-5 shadow-sm">
                    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                      <div>
                        <h3 className="text-lg font-bold text-[#015D67]">
                          আপনার বার্তা পাঠান
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-[#47878E]">
                          প্রয়োজনীয় তথ্য পূরণ করে inquiry পাঠিয়ে দিন।
                        </p>
                      </div>

                      <button
                        type="submit"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-[#00ACB1] px-8 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(0,172,177,0.25)] transition duration-300 hover:bg-[#015D67]"
                      >
                        Submit Inquiry
                      </button>
                    </div>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default From;
