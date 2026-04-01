import React, { useEffect, useRef, useState } from "react";

const FormSection = () => {
  const [userType, setUserType] = useState("patient");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 },
    );

    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  const inputClass =
    "h-12 w-full rounded-2xl border border-[#D7E7E8] bg-white px-4 text-sm text-[#0B4B53] shadow-sm outline-none transition duration-300 placeholder:text-[#7C9EA3] focus:border-[#87E4DB] focus:ring-4 focus:ring-[#87E4DB]/20";

  const selectClass =
    "h-12 w-full rounded-2xl border border-[#D7E7E8] bg-white px-4 text-sm text-[#0B4B53] shadow-sm outline-none transition duration-300 focus:border-[#87E4DB] focus:ring-4 focus:ring-[#87E4DB]/20";

  const sectionClass =
    "rounded-[24px] border border-[#E7F0F1] bg-white/90 p-4 shadow-[0_10px_30px_rgba(1,93,103,0.04)] sm:p-5 lg:p-6";

  const sectionTitleClass =
    "mb-4 text-base font-bold text-[#015D67] sm:text-lg";

  const checkboxCard =
    "flex min-h-[56px] cursor-pointer items-center gap-3 rounded-2xl border border-[#D7E7E8] bg-white px-4 py-3 text-sm font-medium text-[#0B4B53] transition hover:border-[#87E4DB] hover:bg-[#F8FDFC]";

  const userTypeOptions = [
    {
      id: "patient",
      title: "Patient",
      desc: "সিরিয়াল, চিকিৎসা ও টেস্টের জন্য",
    },
    {
      id: "general",
      title: "General User",
      desc: "সাধারণ যোগাযোগ ও inquiry",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`relative overflow-hidden rounded-[30px] border border-white/50 bg-gradient-to-br from-[#F6FBFB] via-[#EDF8F6] to-[#E2F4F2] p-4 shadow-[0_20px_60px_rgba(1,93,103,0.10)] transition-all duration-1000 sm:p-6 lg:p-8 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="pointer-events-none absolute -left-10 top-0 h-36 w-36 rounded-full bg-[#87E4DB]/20 blur-3xl"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#00ACB1]/10 blur-3xl"></div>
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-[#CAF0C1]/20 blur-3xl"></div>

          <div className="relative z-10">
            <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
              <span className="inline-flex rounded-full border border-[#87E4DB]/40 bg-white/80 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#1F6C75] shadow-sm backdrop-blur-md sm:text-xs">
                APPOINTMENT & INQUIRY FORM
              </span>

              <h2 className="mt-4 text-2xl font-bold leading-tight text-[#015D67] sm:text-3xl lg:text-4xl">
                সিরিয়াল ও যোগাযোগ ফর্ম
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#4A8087] sm:text-base">
                আপনার প্রয়োজন অনুযায়ী Patient অথবা General Inquiry নির্বাচন
                করুন। পরিষ্কার ও সহজভাবে তথ্য পূরণ করে আমাদের সাথে যুক্ত হোন।
              </p>
            </div>

            <div className="rounded-[28px] border border-white/50 bg-white/70 p-4 shadow-[0_16px_40px_rgba(1,93,103,0.08)] backdrop-blur-xl sm:p-5 lg:p-8">
              {/* user type selection */}
              <div className="mb-6 rounded-[24px] border border-[#E4EFF0] bg-white/80 p-4 shadow-sm sm:mb-8 sm:p-5">
                <div className="mb-4 flex flex-col gap-1">
                  <h3 className="text-base font-bold text-[#015D67] sm:text-lg">
                    ব্যবহারকারীর ধরন নির্বাচন করুন
                  </h3>
                  <p className="text-xs leading-6 text-[#5C8A90] sm:text-sm">
                    ফর্ম পূরণের আগে নিচের যেকোনো একটি অপশন নির্বাচন করুন
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {userTypeOptions.map((option) => {
                    const isActive = userType === option.id;

                    return (
                      <label
                        key={option.id}
                        className={`group relative flex cursor-pointer items-start gap-3 rounded-[20px] border px-3 py-3 transition-all duration-300 sm:px-4 sm:py-4 ${
                          isActive
                            ? "border-[#87E4DB] bg-gradient-to-br from-[#F3FCFA] to-[#E8F7F5] shadow-[0_12px_24px_rgba(1,93,103,0.08)] ring-2 ring-[#87E4DB]/25"
                            : "border-[#D7E7E8] bg-white hover:border-[#87E4DB]/60 hover:bg-[#FCFEFE]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="userType"
                          value={option.id}
                          checked={isActive}
                          onChange={() => setUserType(option.id)}
                          className="sr-only"
                        />

                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-[22px] sm:w-[22px] ${
                            isActive
                              ? "border-[#00ACB1] bg-white"
                              : "border-[#BFD4D7] bg-white"
                          }`}
                        >
                          <span
                            className={`rounded-full bg-[#00ACB1] transition-all duration-300 ${
                              isActive ? "h-2.5 w-2.5 sm:h-3 sm:w-3" : "h-0 w-0"
                            }`}
                          ></span>
                        </span>

                        <div className="min-w-0">
                          <h4
                            className={`text-[13px] font-bold leading-5 sm:text-sm ${
                              isActive ? "text-[#015D67]" : "text-[#1B5F67]"
                            }`}
                          >
                            {option.title}
                          </h4>
                          <p className="mt-1 text-[10.5px] leading-4 text-[#5C8A90] sm:text-xs sm:leading-5">
                            {option.desc}
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              <form className="space-y-6 lg:space-y-7">
                {userType === "patient" ? (
                  <>
                    <div className={sectionClass}>
                      <h3 className={sectionTitleClass}>
                        Patient Basic Information
                      </h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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

                    <div className={sectionClass}>
                      <h3 className={sectionTitleClass}>
                        Appointment / Serial Information
                      </h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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

                    <div className={sectionClass}>
                      <h3 className={sectionTitleClass}>Medical Information</h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        <input
                          type="text"
                          placeholder="Problem / Symptoms"
                          className={inputClass}
                        />
                        <input
                          type="text"
                          placeholder="Medical History"
                          className={inputClass}
                        />
                        <input
                          type="text"
                          placeholder="Current Medication"
                          className={inputClass}
                        />
                        <input
                          type="text"
                          placeholder="Allergies"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className={sectionClass}>
                      <h3 className={sectionTitleClass}>
                        Diagnostic / Test Section
                      </h3>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                        {[
                          "MRI",
                          "CT Scan",
                          "X-Ray",
                          "ECG",
                          "Ultrasound",
                          "Blood Test / Pathology",
                        ].map((item) => (
                          <label key={item} className={checkboxCard}>
                            <input
                              type="checkbox"
                              className="h-4 w-4 shrink-0 accent-[#00ACB1]"
                            />
                            <span>{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className={sectionClass}>
                      <h3 className={sectionTitleClass}>Address Information</h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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

                    <div className={sectionClass}>
                      <h3 className={sectionTitleClass}>Emergency Contact</h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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

                    <div className={sectionClass}>
                      <h3 className={sectionTitleClass}>
                        Payment Information (Optional)
                      </h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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

                    <div className={sectionClass}>
                      <h3 className={sectionTitleClass}>Extra Options</h3>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                        {[
                          "Online Consultation",
                          "Home Service",
                          "Report Delivery Method",
                        ].map((item) => (
                          <label key={item} className={checkboxCard}>
                            <input
                              type="checkbox"
                              className="h-4 w-4 shrink-0 accent-[#00ACB1]"
                            />
                            <span>{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className={sectionClass}>
                      <h3 className={sectionTitleClass}>Consent Section</h3>
                      <div className="space-y-3">
                        <label className="flex items-start gap-3 rounded-2xl border border-[#D7E7E8] bg-[#FCFEFE] px-4 py-3 text-sm text-[#4A8087]">
                          <input
                            type="checkbox"
                            className="mt-1 h-4 w-4 shrink-0 accent-[#00ACB1]"
                          />
                          <span>
                            আমি নিশ্চিত করছি যে প্রদত্ত তথ্য সঠিক ও সম্পূর্ণ।
                          </span>
                        </label>

                        <label className="flex items-start gap-3 rounded-2xl border border-[#D7E7E8] bg-[#FCFEFE] px-4 py-3 text-sm text-[#4A8087]">
                          <input
                            type="checkbox"
                            className="mt-1 h-4 w-4 shrink-0 accent-[#00ACB1]"
                          />
                          <span>আমি Privacy Policy ও Terms গ্রহণ করছি।</span>
                        </label>
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-[#87E4DB]/35 bg-gradient-to-r from-[#F7FCFC] via-white to-[#EDF9F7] p-5 shadow-sm">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-2xl">
                          <h3 className="text-lg font-bold text-[#015D67]">
                            আপনার সিরিয়াল অনুরোধ জমা দিন
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-[#4A8087]">
                            সমস্ত তথ্য পূরণ করে “সিরিয়াল নিশ্চিত করুন” বাটনে
                            ক্লিক করুন।
                          </p>
                        </div>

                        <button
                          type="submit"
                          className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#00ACB1] px-8 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(0,172,177,0.24)] transition duration-300 hover:bg-[#015D67] sm:w-auto"
                        >
                          সিরিয়াল নিশ্চিত করুন
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={sectionClass}>
                      <h3 className={sectionTitleClass}>
                        General Inquiry Information
                      </h3>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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

                        <input
                          type="text"
                          placeholder="Message / Inquiry"
                          className="sm:col-span-2 xl:col-span-3 h-12 w-full rounded-2xl border border-[#D7E7E8] bg-white px-4 text-sm text-[#0B4B53] shadow-sm outline-none transition duration-300 placeholder:text-[#7C9EA3] focus:border-[#87E4DB] focus:ring-4 focus:ring-[#87E4DB]/20"
                        />
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-[#87E4DB]/35 bg-gradient-to-r from-[#F7FCFC] via-white to-[#EDF9F7] p-5 shadow-sm">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-2xl">
                          <h3 className="text-lg font-bold text-[#015D67]">
                            আপনার বার্তা পাঠান
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-[#4A8087]">
                            প্রয়োজনীয় তথ্য পূরণ করে inquiry পাঠিয়ে দিন।
                          </p>
                        </div>

                        <button
                          type="submit"
                          className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#00ACB1] px-8 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(0,172,177,0.24)] transition duration-300 hover:bg-[#015D67] sm:w-auto"
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
      </div>
    </section>
  );
};

export default FormSection;
