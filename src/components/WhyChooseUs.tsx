import { AwardIcon, ClipboardClockIcon, ComputerIcon, HandCoinsIcon, PhoneCallIcon, ShieldCheckIcon } from 'lucide-react'
import { ShineBorder } from "../components/ui/shine-border"

const features = [
    {
        icons: AwardIcon,
        title: "Experienced and skilled IT professionals",
    },
    {
        icons: ComputerIcon,
        title: "Tailor-made technology solutions",
    },
    {
        icons: HandCoinsIcon,
        title: "Affordable and competitive pricing",
    },
    {
        icons: PhoneCallIcon,
        title: "Transparent communication",
    },
    {
        icons: ClipboardClockIcon,
        title: "Timely project delivery",
    },
    {
        icons: ShieldCheckIcon,
        title: "Commitment to quality and innovation",
    }
]

const WhyChooseUs = () => {
    return (
        <section id='#whyus' className="py-24 relative">
            <div className=''>
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <h2 className="text-primary text-4xl font-bold leading-normal text-center">
                        Why Choose Us
                    </h2>
                    <p className='text-gray-300 text-center'>
                        Our dedication to our customers make us stand out.
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-10'>
                        {features.map(feature => (
                            <div className='relative w-full overflow-hidden flex flex-col items-center justify-center gap-5 p-10'>
                                <ShineBorder shineColor={["#9929EA", "#FF5FCF"]} borderWidth={2} className='rounded-2xl' />
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 ">
                                    <feature.icons className="h-6 w-6 text-primary" />
                                </div>
                                <div className="mb-3 font-serif text-xl font-medium">{feature.title}</div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs