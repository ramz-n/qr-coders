import { GearIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="my-8 antialiased md:py-16 h-screen">
            <div className="mx-auto mt-20 grid max-w-screen px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
                <div className="relative content-center justify-self-start md:col-span-7 md:text-start">
                    <div className="absolute right-0 top-10 md:hidden">
                        <GearIcon
                            size={110}
                            className="animate-spin text-accent/10 m-0"
                        />
                        <GearIcon
                            size={80}
                            className="animate-spin text-accent/10 -m-10"
                        />
                    </div>
                    <h1 className="mb-4 text-4xl font-semibold semibold leading-none tracking-tight text-zinc-900 md:text-5xl">
                        Building <span className="text-accent">high-ROI</span>{" "}
                        software, from vision to{" "}
                        <span className="text-accent">value</span>.
                    </h1>
                    <p className="mb-4 max-w-2xl text-gray-500 md:mb-12 md:text-lg lg:mb-5 lg:text-xl">
                        QRCoders is a software development company that builds
                        business software & web solutions that deliver real
                        value. From conception to launch, we help businesses of
                        all sizes.
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
                </div>
                <div className="hidden md:col-span-5 md:mt-0 md:flex">
                    <img
                        className=""
                        src="/hero.svg"
                        alt="hero"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
