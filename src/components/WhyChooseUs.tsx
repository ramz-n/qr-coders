import { AwardIcon, ClipboardClockIcon, ComputerIcon, HandCoinsIcon, PhoneCallIcon, ShieldCheckIcon } from 'lucide-react'
import { ShineBorder } from "../components/ui/shine-border"
import { motion } from "framer-motion";
import { fadeUpVariant, defaultViewport } from "../utils/animations";

const features = [
    {
        icons: AwardIcon,
        title: "Experienced and skilled IT professionals",
        description: "Our team of skilled developers, designers, and IT specialists brings extensive industry knowledge and technical expertise to every project.",
    },
    {
        icons: ComputerIcon,
        title: "Tailor-made technology solutions",
        description: "We understand that every business is unique. That's why we create customized solutions designed to meet your specific goals and requirements.",
    },
    {
        icons: HandCoinsIcon,
        title: "Affordable and competitive pricing",
        description: "Our services are designed to deliver exceptional value with transparent, cost-effective pricing that fits your budget.",
    },
    {
        icons: PhoneCallIcon,
        title: "Transparent communication",
        description: "We believe in open and honest communication, keeping you informed throughout every stage of your project's lifecycle.",
    },
    {
        icons: ClipboardClockIcon,
        title: "Timely project delivery",
        description: "We follow efficient project management practices to ensure your project is completed on schedule without compromising quality.",
    },
    {
        icons: ShieldCheckIcon,
        title: "Commitment to quality and innovation",
        description: "We combine modern technologies, industry best practices, and innovative thinking to deliver secure, scalable, and future-ready digital solutions.",
    }
]

const WhyChooseUs = () => {
    return (
        <section id='whyus' className="my-24 py-20 relative">
            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                className=''>
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary text-center">
                        Why Choose Us
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl text-center">
                        Our dedication to our customers make us stand out.
                    </h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-10'>
                        {features.map((feature, idx) => (
                            <div key={idx} className='relative w-full overflow-hidden flex flex-col items-center justify-center gap-5 p-10'>
                                <ShineBorder shineColor={["#9929EA", "#FF5FCF"]} borderWidth={2} className='rounded-2xl' />
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 ">
                                    <feature.icons className="h-6 w-6 text-primary" />
                                </div>
                                <div className="mb-3 text-xl font-medium text-center">{feature.title}
                                    <p className="text-sm pt-4 text-center text-muted-foreground">{feature.description}</p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>

            </motion.div>
        </section>
    )
}

export default WhyChooseUs