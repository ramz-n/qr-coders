import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { SyntheticEvent } from "react";
import { fadeUpVariant, defaultViewport } from "../utils/animations";

const Quote = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const subject = encodeURIComponent(
      `Quotation Request - ${formData.get("name")}`
    );

    const body = encodeURIComponent(`Name: ${formData.get("name")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
Service: ${formData.get("service")}
Budget: ${formData.get("budget")}

Project details:
${formData.get("message")}`);

    window.location.href =
      `mailto:qrcoders.info@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    form.reset();
  };

  const inputClassName =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 hover:border-primary/40 focus:border-primary focus:bg-white/[0.07] focus:ring-4 focus:ring-primary/15";

  return (
    
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-32">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Request a Quote
          </p>

          <h1 className="mt-3 text-2xl font-bold text-white md:text-4xl">
            Let&apos;s Build Something Great
          </h1>
        </div>
      <motion.form
        onSubmit={handleSubmit}
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        viewport={defaultViewport}
        className="rounded-3xl border border-primary/30 bg-white/3 p-6 shadow-2xl shadow-black/30 backdrop-blur-sm md:p-10"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="quote-name"
              className="mb-2 block text-sm font-semibold text-primary"
            >
              Full Name <span className="text-white">*</span>
            </label>
            <input
              required
              id="quote-name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              className={inputClassName}
            />
          </div>

          <div>
            <label
              htmlFor="quote-email"
              className="mb-2 block text-sm font-semibold text-primary"
            >
              Email Address <span className="text-white">*</span>
            </label>
            <input
              required
              id="quote-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className={inputClassName}
            />
          </div>

          <div>
            <label
              htmlFor="quote-phone"
              className="mb-2 block text-sm font-semibold text-primary"
            >
              Phone Number <span className="text-white">*</span>
            </label>
            <input
              required
              id="quote-phone"
              name="phone"
              type="tel"
              placeholder="+977 98XXXXXXXX"
              className={inputClassName}
            />
          </div>

          <div>
            <label
              htmlFor="quote-service"
              className="mb-2 block text-sm font-semibold text-primary"
            >
              Service Needed <span className="text-white">*</span>
            </label>

            <div className="relative">
              <select
                required
                id="quote-service"
                name="service"
                defaultValue=""
                className={`${inputClassName} appearance-none pr-12`}
              >
                <option value="" disabled className="bg-[#111827]">
                  Choose a service
                </option>
                <option className="bg-[#111827]">Website Development</option>
                <option className="bg-[#111827]">Mobile App Development</option>
                <option className="bg-[#111827]">UI/UX Design</option>
                <option className="bg-[#111827]">Software Development</option>
                <option className="bg-[#111827]">Other</option>
              </select>

              <svg
                className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.1 1.02l-4.25 4.5a.75.75 0 0 1-1.1 0l-4.25-4.5a.75.75 0 0 1 .02-1.04Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="quote-budget"
              className="mb-2 block text-sm font-semibold text-primary"
            >
              Estimated Budget
            </label>

            <div className="relative">
              <select
                id="quote-budget"
                name="budget"
                defaultValue=""
                className={`${inputClassName} appearance-none pr-12`}
              >
                <option value="" disabled className="bg-[#111827]">
                  Choose your budget range
                </option>
                <option className="bg-[#111827]">Under Rs. 25,000</option>
                <option className="bg-[#111827]">
                  Rs. 25,000 - Rs. 50,000
                </option>
                <option className="bg-[#111827]">
                  Rs. 50,000 - Rs. 100,000
                </option>
                <option className="bg-[#111827]">Above Rs. 100,000</option>
              </select>

              <svg
                className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.1 1.02l-4.25 4.5a.75.75 0 0 1-1.1 0l-4.25-4.5a.75.75 0 0 1 .02-1.04Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="quote-message"
              className="mb-2 block text-sm font-semibold text-primary"
            >
              Project Details <span className="text-white">*</span>
            </label>
            <textarea
              required
              id="quote-message"
              name="message"
              rows={5}
              placeholder="Tell us about your project, goals, and requirements..."
              className={`${inputClassName} resize-none`}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-0.5 hover:bg-primary/85 hover:shadow-primary/40 focus:outline-none focus:ring-4 focus:ring-primary/30"
        >
          Send Quotation Request
        </button>

        {submitted && (
          <p className="mt-4 text-center text-sm font-medium text-primary">
            Your email application has been sent with your request.
          </p>
        )}
      </motion.form>
    </main>
  );
};

export default Quote;