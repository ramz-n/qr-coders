const TermsAndConditions = () => {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-gray-300">
        
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        QR Coders
      </p>

      <h1 className="mt-3 text-4xl font-bold text-white">
        Terms and Conditions
      </h1>

      <p className="mt-4 text-sm text-gray-400">
        Last updated: July 11, 2026
      </p>

      <div className="mt-10 space-y-10 leading-7">
        <section>
          <h2 className="text-2xl font-semibold text-white">1. Acceptance</h2>
          <p className="mt-3">
            By accessing or using the QR Coders website and services, you agree
            to these Terms and Conditions. If you do not agree, please do not
            use our website or services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">2. Services</h2>
          <p className="mt-3">
            QR Coders provides web development, software development, design,
            consulting, and related digital services. The exact scope, timeline,
            and cost of a project will be agreed upon separately in writing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">3. Payments</h2>
          <p className="mt-3">
            Project payment terms, deposits, and invoices will be stated in the
            applicable project proposal or agreement. Work may be paused if a
            payment is overdue.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            4. Intellectual Property
          </h2>
          <p className="mt-3">
            Once all agreed payments are completed, project deliverables will be
            transferred to the client as defined in the project agreement. QR
            Coders may retain ownership of its existing tools, code libraries,
            and reusable materials.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            5. Client Responsibilities
          </h2>
          <p className="mt-3">
            Clients are responsible for providing accurate content, feedback,
            approvals, and required access in a timely manner. Delays in these
            items may affect the project timeline.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            6. Limitation of Liability
          </h2>
          <p className="mt-3">
            QR Coders is not liable for indirect, incidental, or consequential
            losses arising from the use of our website or services, to the
            extent permitted by applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">7. Changes</h2>
          <p className="mt-3">
            We may update these Terms and Conditions from time to time. Updates
            will be posted on this page with a revised last updated date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">8. Contact</h2>
          <p className="mt-3">
            For questions about these terms, email us at{" "}
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

export default TermsAndConditions;