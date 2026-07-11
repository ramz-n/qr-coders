const About = () => {

    return (
        <section id='about' className="mt-10 relative py-20">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
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
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2 className="text-primary text-4xl font-bold leading-normal lg:text-start text-center">
                                    About us
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
                        <button className="px-3.5 py-2 bg-primary/70 hover:bg-primary/80 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex cursor-pointer">
                            <span className="px-1.5 text-white text-sm font-medium leading-6">
                                Keep in touch
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About