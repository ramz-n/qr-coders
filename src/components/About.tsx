import { motion } from "framer-motion"
import { fadeUpVariant, defaultViewport } from "../utils/animations"
import { Link } from "react-router-dom"

const About = () => {

    return (
        <section id='about' className="relative mt-40 md:py-20">
            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}

                className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                        <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                            <img
                                className=" rounded-xl object-cover"
                                src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=400"
                                alt="about Us image"
                            />
                        </div>
                        <img
                            className="sm:ml-0 ml-auto rounded-xl object-cover"
                            src="https://images.unsplash.com/photo-1595327656903-2f54e37ce09b?w=400"
                            alt="about Us image"
                        />
                    </div>
                    <div className="w-full flex-col justify-center lg:items-start items-center md:gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="w-full flex-col justify-start items-center gap-3 flex">
                                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                                    About us
                                </p>

                                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl text-center">
                                    Know little bit about QRCoders
                                </h2>
                                <p className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                                    We are a Nepal-based IT company dedicated to delivering innovative, reliable, and scalable digital solutions for businesses of all sizes. Our team of skilled developers, designers, and technology professionals is passionate about transforming ideas into high-quality software, websites, mobile applications, and digital platforms that drive growth and success.
                                </p>
                                <p className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                                    Our mission is to help organizations embrace digital transformation through innovative technology solutions, while our vision is to become one of Nepal's most trusted and respected IT companies, recognized for excellence, integrity, and innovation.
                                </p>
                                <p className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                                    Together, we build technology that inspires growth, fuels innovation, and shapes the future.                                </p>
                            </div>

                        </div>
                        <Link to="/quote"
                            className="mt-7 inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:scale-105 hover:opacity-90"
                        >
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>

    )
}

export default About