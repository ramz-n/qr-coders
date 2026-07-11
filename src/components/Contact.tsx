import { motion } from "framer-motion";
import { fadeUpVariant, defaultViewport } from "../utils/animations";

const Footer = () => {
    return (
        <div id="contact" className="mx-auto max-w-7xl py-20 md:px-8 my-20">
            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
            >
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                        Contact Us
                    </p>

                    <h2 className="mt-3 text-2xl font-bold text-white md:text-4xl">
                        Let's Start a Conversation
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-10">
                    <div className="md:py-4">
                        <h3 className="text-2xl font-bold text-gray-300 sm:text-3xl">
                            Get in touch
                        </h3>
                        <p className="mt-4 text-pretty text-gray-400">
                            Have a question or an idea you'd like to discuss? Reach out to us through any of the following channels.
                        </p>
                        <dl className="mt-6 space-y-3">
                            <div>
                                <dt className="sr-only">Phone number</dt>
                                <dd className="grid grid-cols-[24px_1fr] items-center gap-2 text-gray-400">
                                    <svg
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                        />
                                    </svg>
                                    <span className="font-medium">+977-XXXXXXXXXX</span>
                                </dd>
                            </div>
                            <div>
                                <dt className="sr-only">Email</dt>
                                <dd className="grid grid-cols-[24px_1fr] items-center gap-2 text-gray-400">
                                    <svg
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                        />
                                    </svg>
                                    <span className="font-medium">qrcoders.services@gmail.com</span>
                                </dd>
                            </div>
                            <div>
                                <dt className="sr-only">Location</dt>
                                <dd className="grid grid-cols-[24px_1fr] items-center gap-2 text-gray-400">
                                    <svg
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                        />
                                    </svg>
                                    <span className="font-medium">Kathmandu, Nepal</span>
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <form
                        action="#"
                        className="space-y-4 rounded-lg border border-primary/40 p-6"
                    >
                        <div>
                            <label
                                className="block text-sm font-medium text-primary/90"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                required
                                className="mt-1 w-full rounded-lg border-primary/30 p-2 border-2 focus:border-primary/60 focus:outline-none"
                                id="name"
                                type="text"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-primary/90"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                required
                                className="mt-1 w-full rounded-lg border-primary/30 p-2 border-2 focus:border-primary/60 focus:outline-none"
                                id="email"
                                type="email"
                                placeholder="Your email"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-primary/90"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                required
                                className="mt-1 w-full rounded-lg border-primary/30 p-2 border-2 focus:border-primary/60 focus:outline-none"
                                id="message"
                                rows={4}
                                placeholder="Your message"
                                defaultValue={""}
                            />
                        </div>
                        <button
                            className="block w-full rounded-lg border border-primary/60 bg-primary/60 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>

    )
}

export default Footer