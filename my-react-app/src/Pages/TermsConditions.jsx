import React from "react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 sm:p-12">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 border-b pb-4">
          Terms & Conditions
        </h1>

        {/* Intro */}
        <p className="mt-6 text-gray-600 text-justify leading-relaxed">
          Welcome to our clinic. By accessing and using our services, you agree
          to comply with the following Terms & Conditions. Please read them
          carefully to understand your rights and responsibilities.
        </p>

        {/* Sections */}
        <div className="mt-8 space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. Patient Responsibility
            </h2>
            <p className="text-justify leading-relaxed">
              Patients are expected to provide accurate medical history and
              personal information. Any misinformation may affect the quality of
              care provided.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. Appointment Policy
            </h2>
            <p className="text-justify leading-relaxed">
              Appointments must be scheduled in advance. Cancellations should be
              made at least 24 hours prior to the appointment time to avoid
              penalties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Confidentiality
            </h2>
            <p className="text-justify leading-relaxed">
              All patient records and medical information are kept strictly
              confidential in accordance with applicable privacy laws. We will
              not disclose your information without consent, except as required
              by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              4. Payment Terms
            </h2>
            <p className="text-justify leading-relaxed">
              Fees for consultations, treatments, and procedures must be settled
              promptly. Accepted payment methods include cash, card, and
              approved digital transactions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              5. Limitation of Liability
            </h2>
            <p className="text-justify leading-relaxed">
              While our clinic strives to provide the highest standard of care,
              we are not liable for outcomes beyond reasonable medical practice
              or unforeseen circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              6. Amendments
            </h2>
            <p className="text-justify leading-relaxed">
              These Terms & Conditions may be updated periodically. Continued
              use of our services after changes indicates acceptance of the
              revised terms.
            </p>
          </section>
        </div>

        {/* Footer */}
        <p className="mt-10 text-gray-500 text-sm text-center border-t pt-4">
          By continuing to use our services, you acknowledge that you have read,
          understood, and agreed to these Terms & Conditions.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
