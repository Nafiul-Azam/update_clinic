import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          Privacy Policy
        </h1>

        <p className="mb-4 text-gray-600">Last Updated: April 1, 2026</p>

        <p className="mb-6 text-base leading-7 text-gray-700">
          Welcome to our website. Your privacy is important to us. This Privacy
          Policy explains how we collect, use, and protect your personal
          information when you use our website and services.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">
              1. Information We Collect
            </h2>
            <p className="text-base leading-7 text-gray-700">
              We may collect personal information such as your name, phone
              number, email address, and any other details you provide through
              contact forms, appointment requests, or service inquiries.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">
              2. How We Use Your Information
            </h2>
            <p className="text-base leading-7 text-gray-700">
              We use your information to provide services, respond to inquiries,
              improve user experience, and communicate important updates related
              to our website or services.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">
              3. Data Protection
            </h2>
            <p className="text-base leading-7 text-gray-700">
              We take reasonable measures to protect your personal information
              from unauthorized access, misuse, or disclosure.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">
              4. Third-Party Services
            </h2>
            <p className="text-base leading-7 text-gray-700">
              Our website may use third-party tools or services for analytics,
              maps, communication, or booking support. These services may have
              their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">
              5. Contact Us
            </h2>
            <p className="text-base leading-7 text-gray-700">
              If you have any questions about this Privacy Policy, please
              contact us through our official contact information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
