import { Link } from "react-router-dom";

const HelpCenter = () => {
  const faqs = [
    {
      question: "How can I request a quote?",
      answer:
        "Visit our contact section, share your project details, and our team will get back to you with a tailored quote.",
    },
    {
      question: "What services do QR Coders provide?",
      answer:
        "We provide website development, custom software, UI/UX design, maintenance, and digital consulting services.",
    },
    {
      question: "How long does a project take?",
      answer:
        "The timeline depends on the project scope and requirements. We provide an estimated delivery timeline after reviewing your needs.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We can provide maintenance, updates, fixes, and technical support after your project is launched.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-gray-300">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        QR Coders Support
      </p>

      <h1 className="mt-3 text-4xl font-bold text-white">Help Center</h1>

      <p className="mt-4 max-w-2xl leading-7 text-gray-400">
        Find answers to common questions. If you need more help, our team is
        ready to assist you.
      </p>

      <section className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-xl border border-gray-800 bg-slate-900 p-5 open:border-primary/50"
          >
            <summary className="cursor-pointer font-semibold text-white">
              {faq.question}
            </summary>

            <p className="mt-4 leading-7 text-gray-400">{faq.answer}</p>
          </details>
        ))}
      </section>

      <section className="mt-12 rounded-2xl border border-primary/30 bg-slate-900 p-8 text-center">
        <h2 className="text-2xl font-semibold text-white">
          Still need help?
        </h2>

        <p className="mt-3 text-gray-400">
          Contact us and we will respond as soon as possible.
        </p>

        <Link
          to="/#contact"
          className="mt-6 inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:scale-105 hover:opacity-90"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
};

export default HelpCenter;