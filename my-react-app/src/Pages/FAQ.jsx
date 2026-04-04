import React from "react";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 sm:p-12">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 border-b pb-4">
          Frequently Asked Questions (FAQ)
        </h1>

        {/* Intro */}
        <p className="mt-6 text-gray-700 text-justify leading-relaxed">
          Here you will find answers to some of the most common questions about
          our clinic, services, and policies. If you don’t see your question
          here, please feel free to contact us directly.
        </p>

        {/* FAQ Items */}
        <div className="mt-8 space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. How can I book an appointment?
            </h2>
            <p className="text-justify leading-relaxed">
              You can book an appointment through our website’s booking form or
              by calling our reception desk. We recommend scheduling in advance
              to ensure availability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. What should I bring to my first visit?
            </h2>
            <p className="text-justify leading-relaxed">
              Please bring a valid ID, any medical records relevant to your
              condition, and a list of current medications. This helps our
              doctors provide the best possible care.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Do you accept insurance?
            </h2>
            <p className="text-justify leading-relaxed">
              Yes, we accept most major insurance providers. Please check with
              our staff to confirm if your insurance plan is covered.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              4. How do you protect patient confidentiality?
            </h2>
            <p className="text-justify leading-relaxed">
              All patient information is handled in strict compliance with
              privacy laws. We use secure systems to ensure your data remains
              confidential and protected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              5. What payment methods are available?
            </h2>
            <p className="text-justify leading-relaxed">
              We accept cash, debit/credit cards, and approved digital payment
              platforms. Payment is required at the time of service unless
              otherwise arranged.
            </p>
          </section>
        </div>

        {/* Footer */}
        <p className="mt-10 text-gray-500 text-sm text-center border-t pt-4">
          Still have questions? Reach out to our support team for assistance.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
