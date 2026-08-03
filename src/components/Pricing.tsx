import { Check } from "lucide-react"
import { m, LazyMotion, domAnimation } from "motion/react";
import { fadeUpVariant, defaultViewport } from "../utils/animations";

const pricing = [
    {
        "title": "Mobile App Development",
        "description": "We provide various app development solutions from MVP apps to complex enterprise apps.",
        "price": 'NPR 70,000 - NPR 200,000',
        "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
        "services": [
            "MVP App",
            "Cross-Platform App",
            "Enterprise App"
        ]
    },
    {
        "title": "Web Development",
        "description": "We offer various web solutions from basic websites to complex web applications",
        "price": 'NPR 25,000 - NPR 90,000',
        "image": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
        "services": [
            "Basic Website",
            "Business Website",
            "SaaS Application",
            "SPA Application",
            "Custom Web Application"
        ],
    },
    {
        "title": "SEO Services",
        "description": "We offer SEO services to help your website rank higher in search engine results and drive more traffic to your site.",
        "price": 'NPR 20,000 - NPR 40,000',
        "image": "https://images.unsplash.com/photo-1726066012699-1c843dad5fd8",
        "services": [
            "Foundation SEO",
            "Advanced SEO",
            "Premium SEO"
        ]
    }
]

const Pricing = () => {
    return (
        <section id="pricing" className="my-20 py-20">
            <LazyMotion features={domAnimation}>
                <m.div
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="fluid-container text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                        Our Pricing
                    </p>

                    <h2 className="mt-3 text-2xl font-bold text-white md:text-4xl">
                        We offer an afordable pricing plan for you.
                    </h2>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 items-center md:gap-8 py-10">
                        {pricing.map((item, idx) => (
                            <div key={idx} className="bg-[url()] rounded-2xl border border-primary/60 p-4 shadow-xs ring-1 ring-primary/60 sm:order-last sm:px-8 lg:p-12">
                                <div className="w-full h-52">
                                    <img className="h-full w-full rounded-t-2xl" src={item.image} alt="" loading="lazy" />
                                </div>
                                <div className="text-center">
                                    <h2 className="text-xl font-medium pt-5 text-white">
                                        {item.title}
                                        <span className="sr-only">{item.title}</span>
                                    </h2>
                                    <p className="mt-5 border-y border-primary/20 py-4 text-lg font-bold text-primary">

                                        {item.price}<br /> <span className="text-xs italic font-thin text-gray-500">(depending upon your project)</span>

                                    </p>
                                </div>
                                <ul className="mt-6 space-y-2">
                                    {item.services.map((itm, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                                                <Check size={14} strokeWidth={3} />
                                            </span>
                                            {itm}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="#"
                                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                                >
                                    Get a Quote
                                </a>
                            </div>
                        ))}
                    </div>
                </m.div>
            </LazyMotion>
        </section >
    )
}

export default Pricing