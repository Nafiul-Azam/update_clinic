import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 sm:p-12">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 border-b pb-4 md:text-4xl">
          Privacy Policy
        </h1>

        {/* Last Updated */}
        <p className="mt-4 text-gray-500 text-sm text-center">
          Last Updated: April 1, 2026
        </p>

        {/* Intro */}
        <p className="mt-6 text-gray-700 text-justify leading-relaxed">
          Welcome to our clinic’s website. Your privacy is important to us. This
          Privacy Policy explains how we collect, use, and protect your personal
          information when you use our website and services.
        </p>

        {/* Sections */}
        <div className="mt-8 space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. Information We Collect
            </h2>
            <p className="text-justify leading-relaxed">
              We may collect personal information such as your name, phone
              number, email address, and any other details you provide through
              contact forms, appointment requests, or service inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-justify leading-relaxed">
              Your information is used to provide services, respond to
              inquiries, improve user experience, and communicate important
              updates related to our clinic or website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Data Protection
            </h2>
            <p className="text-justify leading-relaxed">
              We take reasonable measures to protect your personal information
              from unauthorized access, misuse, or disclosure, in compliance
              with applicable privacy laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              4. Third-Party Services
            </h2>
            <p className="text-justify leading-relaxed">
              Our website may use third-party tools or services for analytics,
              maps, communication, or booking support. These services may have
              their own privacy policies, which we encourage you to review.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              5. Contact Us
            </h2>
            <p className="text-justify leading-relaxed">
              If you have any questions about this Privacy Policy, please reach
              out through our official contact information provided on the
              website.
            </p>
          </section>
        </div>

        {/* Footer */}
        <p className="mt-10 text-gray-500 text-sm text-center border-t pt-4">
          By using our website and services, you acknowledge that you have read,
          understood, and agreed to this Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
