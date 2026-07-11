const PrivacyPolicy = () => {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-gray-300">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        QR Coders
      </p>

      <h1 className="mt-3 text-4xl font-bold text-white">Privacy Policy</h1>

      <p className="mt-4 text-sm text-gray-400">
        Last updated: July 11, 2026
      </p>

      <div className="mt-10 space-y-10 leading-7">
        <section>
          <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
          <p className="mt-3">
            QR Coders respects your privacy. This Privacy Policy explains how we
            collect, use, and protect information when you visit our website or
            contact us about our digital services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            2. Information We Collect
          </h2>
          <p className="mt-3">
            We may collect your name, email address, phone number, company name,
            project details, and any other information you provide through our
            contact or quote request forms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            3. How We Use Your Information
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Respond to your questions and quote requests.</li>
            <li>Provide and improve our services.</li>
            <li>Communicate about your project or ongoing work.</li>
            <li>Maintain website security and prevent misuse.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            4. Sharing Your Information
          </h2>
          <p className="mt-3">
            We do not sell your personal information. We may share information
            only with trusted service providers when necessary to operate our
            business, comply with legal requirements, or protect our rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">5. Cookies</h2>
          <p className="mt-3">
            Our website may use cookies or similar technologies to improve your
            browsing experience and understand website usage. You can manage
            cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            6. Data Security
          </h2>
          <p className="mt-3">
            We take reasonable technical and organizational measures to protect
            your information. However, no online system can be guaranteed to be
            completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            7. Your Rights
          </h2>
          <p className="mt-3">
            You may request access to, correction of, or deletion of your
            personal information by contacting us. We will respond in accordance
            with applicable laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            8. Contact Us
          </h2>
          <p className="mt-3">
            For privacy-related questions, contact QR Coders at{" "}
            <a
              href="mailto:hello@qrcoders.com"
              className="text-primary hover:underline"
            >
              qrcoders.info@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;