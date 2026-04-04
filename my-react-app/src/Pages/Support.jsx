import React from "react";

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 sm:p-12">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 border-b pb-4">
          Support
        </h1>

        {/* Intro */}
        <p className="mt-6 text-gray-700 text-justify leading-relaxed">
          Our support team is here to assist you with any questions, concerns,
          or issues you may encounter while using our clinic’s services. Please
          review the information below to find the best way to reach us.
        </p>

        {/* Support Sections */}
        <div className="mt-8 space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. General Inquiries
            </h2>
            <p className="text-justify leading-relaxed">
              For general questions about our clinic, services, or policies,
              please contact our reception desk during working hours or send us
              an email through our official contact form.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. Appointment Assistance
            </h2>
            <p className="text-justify leading-relaxed">
              If you need help booking, rescheduling, or canceling an
              appointment, our support staff will guide you through the process
              and ensure your request is handled promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Technical Support
            </h2>
            <p className="text-justify leading-relaxed">
              For issues related to our website, online booking system, or
              patient portal, please reach out to our technical support team.
              They will work to resolve your issue as quickly as possible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              4. Feedback & Complaints
            </h2>
            <p className="text-justify leading-relaxed">
              We value your feedback. If you have suggestions or complaints,
              please share them with us. Your input helps us improve our
              services and provide better care.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              5. Emergency Support
            </h2>
            <p className="text-justify leading-relaxed">
              In case of a medical emergency, please call your local emergency
              number immediately. Our support team is not a substitute for
              emergency medical services.
            </p>
          </section>
        </div>

        {/* Footer */}
        <p className="mt-10 text-gray-500 text-sm text-center border-t pt-4">
          For further assistance, please contact our support team through the
          official channels listed on our website.
        </p>
      </div>
    </div>
  );
};

export default Support;
