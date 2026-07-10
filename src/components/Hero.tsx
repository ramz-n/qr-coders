import { LightRays } from "../components/ui/light-rays"
import { MorphingText } from "../components/ui/morphing-text"

const Hero = () => {
    return (
        <section className="place-content-center h-screen" id='#hero'>
            <LightRays count={5} color="#9929EA" speed={3} length="100vh" />

            <div className="mx-auto w-screen h-screen max-w-7xl px-4 py-16 md:py-28 gap-3 ">
                <div className="flex items-center justify-center flex-col gap-6">
                    <MorphingText texts={["Enterprises", "Startups", "Companies"]} />
                    <h1 className="text-xl md:2xl text-center font-bold md:text-5xl inline">
                        We
                        <span className="text-primary "> QR Coders</span> are there to help you.
                    </h1>
                    <p className="mt-4 text-gray-400 text-center">
                        Together, we build technology that inspires growth, fuels innovation, and shapes the future.
                    </p>
                    <div className="mt-4 flex gap-4 sm:mt-6">
                        <a
                            className="inline-block rounded border px-5 py-3 font-medium hover:text-primary hover:border-primary/90"
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