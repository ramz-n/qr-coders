import { Star } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const testimonialData = [
    {
        name: "Raj Sharma",
        occupation: "Business Owner",
        title: "Outstanding Service and Professionalism",
        description: "The team delivered our website exactly as we envisioned. They were responsive, professional, and completed the project on time. We highly recommend their services."
    },
    {
        name: "Anita Koirala",
        occupation: "Reliable Technology Partner",
        title: "Outstanding Service and Professionalism",
        description: "We partnered with them for a custom management system, and the results exceeded our expectations. Their technical expertise and attention to detail made the entire process smooth and efficient."
    },
    {
        name: "Suman Thapa",
        occupation: "Startup Founder",
        title: "High-Quality Web Development",
        description: "They transformed our ideas into a beautiful, fast, and user-friendly website. Their creativity and commitment to quality truly set them apart."
    },
    {
        name: "Bikash Gurung",
        occupation: "CEO",
        title: "Highly Recommended",
        description: "From planning to deployment, every step was handled professionally. Their team understands business needs and delivers technology solutions that create real value."
    }
]

const Testimonials = () => {
    const autoplayOptions = { delay: 3000, stopOnInteraction: false };

    const [emblaRef] = useEmblaCarousel(
        { loop: true, align: 'center' },
        [Autoplay(autoplayOptions)]
    );

    return (
        <section id="#testimony" className="my-10">
            <h2 className="text-primary text-4xl font-bold leading-normal text-center">
                Testimonial
            </h2>
            <p className='text-gray-300 text-center'>
                We value the trust our clients place in us and are committed to delivering exceptional digital solutions. Their success is our greatest achievement, and their feedback motivates us to continue providing high-quality IT services.
            </p>

            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {testimonialData.map((item, idx) => (
                        <div key={idx} className="embla__slide border-primary/50 border-solid border-2 flex justify-between flex-col rounded-xl p-6 transition-all duration-500">
                            <div className="flex flex-col gap-2">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((idx) => <Star key={idx} color="#FF5FCF" />)}
                                </div>
                                <h5>{item.title}</h5>
                                <p className="text-base text-gray-400 leading-6  transition-all duration-500 pb-8">
                                    {item.description}
                                </p>
                            </div>
                            <div className="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                                <h5 className="font-medium transition-all duration-500  mb-1">
                                    {item.name}
                                </h5>
                                <span className="text-sm leading-4 text-gray-500">{item.occupation}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Testimonials