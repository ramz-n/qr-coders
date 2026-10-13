const Footer = () => {
    return (
        <div id="contact" className="mx-auto my-20">
            <div className="py-20 grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
                <div>
                    <p className="eyebrow">Contact</p>
                    <h2 className="h-section mt-3">
                        Tell us about your project
                    </h2>
                    <p className="lede mt-4">
                        Share what you need and we will reply with next steps.
                        For a detailed price, use the quote form.
                    </p>
                    <dl className="mt-6 space-y-3">
                        <div>
                            <dt className="sr-only">Phone number</dt>
                            <dd className="grid grid-cols-[24px_1fr] items-center gap-2 text-zinc-700">
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
                                <span className="font-medium">
                                    +977-9744700704
                                </span>
                            </dd>
                        </div>
                        <div>
                            <dt className="sr-only">Email</dt>
                            <dd className="grid grid-cols-[24px_1fr] items-center gap-2 text-zinc-700">
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
                                <span className="font-medium">
                                    qrcoders.info@gmail.com
                                </span>
                            </dd>
                        </div>
                        <div>
                            <dt className="sr-only">Location</dt>
                            <dd className="grid grid-cols-[24px_1fr] items-center gap-2 text-zinc-700">
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
                                <span className="font-medium">
                                    Narayangarh, Nepal
                                </span>
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
                    <form
                        action="#"
                        className="space-y-4 rounded-lg p-6"
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
                                className="mt-1 w-full rounded-lg border-zinc-300 p-2 border-2 focus:border-primary/60 focus:outline-none"
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
                                className="mt-1 w-full rounded-lg border-zinc-300 p-2 border-2 focus:border-primary/60 focus:outline-none"
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
                                className="mt-1 w-full rounded-lg border-zinc-300 p-2 border-2 focus:border-primary/60 focus:outline-none"
                                id="message"
                                rows={4}
                                placeholder="Your message"
                                defaultValue={""}
                            />
                        </div>
                        <button
                            className="btn-primary block w-full rounded-lg border border-primary/60 bg-primary/60 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;
