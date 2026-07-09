import React from 'react'

const Hero = () => {
    return (
        <section className="place-content-center" id='#hero'>
            <div className="mx-auto w-screen max-w-7xl px-4 py-16 gap-3 bg-radial from-fuchsia-400/30 from-5% to-fuchsia-700/5 to-60%">
                <div className="flex items-center justify-center flex-col h-100 gap-6">
                    <h1 className="text-4xl font-bold sm:text-5xl">
                        We QR Coders for
                        <strong className="text-secondary"> modern </strong>
                        enterprise
                    </h1>
                    <p className="mt-4 text-base text-pretty text-primary/50 sm:text-lg/relaxed">
                        Together, we build technology that inspires growth, fuels innovation, and shapes the future.
                    </p>
                    <div className="mt-4 flex gap-4 sm:mt-6">
                        <a
                            className="inline-block rounded border px-5 py-3 font-medium hover:border-secondary hover:text-secondary"
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