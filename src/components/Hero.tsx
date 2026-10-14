import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="py-8 antialiased md:py-16 h-screen">
            <div className="mx-auto mt-20 grid max-w-screen px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
                <div className="content-center justify-self-start md:col-span-7 md:text-start">
                    <h1 className="mb-4 text-4xl font-semibold semibold leading-none tracking-tight text-zinc-900 md:text-5xl">
                        Building <span className="text-accent">high-ROI</span>{" "}
                        software, from vision to{" "}
                        <span className="text-accent">value</span>.
                    </h1>
                    <p className="mb-4 max-w-2xl text-gray-500 dark:text-gray-400 md:mb-12 md:text-lg lg:mb-5 lg:text-xl">
                        QRCoders is a software development company that builds
                        business software & web solutions that deliver real
                        value. From conception to launch, we help businesses of all sizes.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Link
                            to="/quote"
                            className="rounded-full btn-primary px-5 py-2.5 text-sm font-bold transition hover:brightness-95 md:inline-block"
                        >
                            Request a Quote
                        </Link>
                        <Link
                            to="/price-calculator"
                            className="rounded-full btn-secondary px-5 py-2.5 text-sm font-bold transition hover:brightness-95 md:inline-block"
                        >
                            Estimate your cost
                        </Link>
                    </div>

                    <p className="mt-4 text-sm text-zinc-600">
                        Prefer to chat?{" "}
                        <a
                            className="link"
                            href="https://wa.me/9779744700704?text=Hello%20QR%20Coders%2C%20I%27m%20interested%20in%20your%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Message us on WhatsApp
                        </a>
                    </p>
                </div>
                <div className="hidden md:col-span-5 md:mt-0 md:flex">
                    <img className="dark:hidden" src="/hero.svg" alt="hero" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
