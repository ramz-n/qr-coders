import { LightRays } from "../components/ui/light-rays"
import { MorphingText } from "../components/ui/morphing-text"

const Hero = () => {
    return (
        <section className="place-content-center h-screen" id='#hero'>
            <LightRays count={5} color="#08cfc5" speed={3} length="100vh" />

            <div className="mx-auto w-screen max-w-7xl px-4 py-16 gap-3 ">
                <div className="flex items-center justify-center flex-col h-100 gap-6">
                    <MorphingText texts={["Enterprises", "Startups", "Companies"]} />
                    <h1 className="text-2xl font-bold md:text-5xl inline">
                        QR Coders are there to help you.
                    </h1>
                    <p className="mt-4 text-white/50">
                        Together, we build technology that inspires growth, fuels innovation, and shapes the future.
                    </p>
                    <div className="mt-4 flex gap-4 sm:mt-6">
                        <a
                            className="inline-block rounded border px-5 py-3 font-medium hover:border-primary/90"
                            href="#"
                        >
                            Request a Quote
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero