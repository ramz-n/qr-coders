import { motion } from "framer-motion";
import { fadeUpVariant, defaultViewport } from "../utils/animations";

const Quote = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const subject = encodeURIComponent(
      `Quotation Request — ${formData.get("name")}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.get("name")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
Service: ${formData.get("service")}
Budget: ${formData.get("budget")}

Project details:
${formData.get("message")}`
    );

    window.location.href =
      `mailto:qrcoders.info@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="mx-auto my-20 max-w-2xl py-20 md:px-8">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Request a Quote
          </p>

          <h1 className="mt-3 text-2xl font-bold text-white md:text-4xl">
            Let&apos;s Build Something Great
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-lg border border-primary/40 p-6"
        >
          <div>
            <label
              htmlFor="quote-name"
              className="block text-sm font-medium text-primary/90"
            >
              Name
            </label>
            <input
              required
              id="quote-name"
              name="name"
              type="text"
              placeholder="Your name"
              className="mt-1 w-full rounded-lg border-2 border-primary/30 p-2 text-black focus:border-primary/60 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="quote-email"
              className="block text-sm font-medium text-primary/90"
            >
              Email
            </label>
            <input
              required
              id="quote-email"
              name="email"
              type="email"
              placeholder="Your email"
              className="mt-1 w-full rounded-lg border-2 border-primary/30 p-2 text-black focus:border-primary/60 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="quote-phone"
              className="block text-sm font-medium text-primary/90"
            >
              Phone Number
            </label>
            <input
              required
              id="quote-phone"
              name="phone"
              type="tel"
              placeholder="Your phone number"
              className="mt-1 w-full rounded-lg border-2 border-primary/30 p-2 text-black focus:border-primary/60 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="quote-service"
              className="block text-sm font-medium text-primary/90"
            >
              Service Needed
            </label>
            <select
              required
              id="quote-service"
              name="service"
              defaultValue=""
              className="mt-1 w-full rounded-lg border-2 border-primary/30 p-2 text-black focus:border-primary/60 focus:outline-none"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>Website Development</option>
              <option>Mobile App Development</option>
              <option>UI/UX Design</option>
              <option>Software Development</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="quote-budget"
              className="block text-sm font-medium text-primary/90"
            >
              Estimated Budget
            </label>
            <select
              id="quote-budget"
              name="budget"
              defaultValue=""
              className="mt-1 w-full rounded-lg border-2 border-primary/30 p-2 text-black focus:border-primary/60 focus:outline-none"
            >
              <option value="" disabled>
                Select a budget range
              </option>
              <option>Under Rs. 25,000</option>
              <option>Rs. 25,000 – Rs. 50,000</option>
              <option>Rs. 50,000 – Rs. 100,000</option>
              <option>Above Rs. 100,000</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="quote-message"
              className="block text-sm font-medium text-primary/90"
            >
              Project Details
            </label>
            <textarea
              required
              id="quote-message"
              name="message"
              rows={4}
              placeholder="Describe your project requirements..."
              className="mt-1 w-full rounded-lg border-2 border-primary/30 p-2 text-black focus:border-primary/60 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg border border-primary/60 bg-primary/60 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
          >
            Send Quotation Request
          </button>
        </form>
      </motion.div>
    </main>
  );
};

export default Quote;