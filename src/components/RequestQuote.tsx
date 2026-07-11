const RequestQuote = () => {
  return (
    <section className="mx-20 my-30 max-w-7xl px-6">
      <div className="rounded-2xl border border-primary/30 px-6 py-12 text-center shadow-lg md:px-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Let’s work together
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Have a project in mind?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
          Tell us about your idea and receive a tailored quote for your website,
          application, or digital solution.
        </p>

        <a
          href="#contact"
          className="mt-7 inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:scale-105 hover:opacity-90"
        >
          Request a Quote
        </a>
      </div>
    </section>
  );
};

export default RequestQuote;