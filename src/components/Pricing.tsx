import { Check } from "lucide-react"

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
        <section id="pricing" className="my-30 py-20">
            <div className="fluid-container">
                <h2 className="text-primary text-4xl font-bold leading-normal text-center">
                    Our Pricing
                </h2>
                <p className='text-gray-300 text-center'>
                    We offer an afordable pricing plan for you.
                </p>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 items-center md:gap-8 py-10">
                    {pricing.map((item, idx) => (
                        <div key={idx} className="bg-[url()] rounded-2xl border border-primary/60 p-6 shadow-xs ring-1 ring-primary/60 sm:order-last sm:px-8 lg:p-12">
                            <div className="w-full h-50">
                                <img src={item.image} alt="" loading="lazy" />
                            </div>
                            <div className="text-center">
                                <h2 className="text-lg font-medium text-gray-300">
                                    {item.title}
                                    <span className="sr-only">{item.title}</span>
                                </h2>
                                <p className="mt-2 sm:mt-4">
                                    <strong className="font-bold text-gray-500">
                                        {item.price}
                                    </strong>
                                </p>
                            </div>
                            <ul className="mt-6 space-y-2">
                                {item.services.map((itm, idx) => (
                                    <li key={idx} className="flex gap-2 text-gray-500">
                                        <Check />
                                        <span className="text-gray-500"> {itm}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#"
                                className="mt-8 block rounded-full border border-primary bg-primary/60 px-12 py-3 text-center text-sm font-medium text-white hover:bg-primary/70 hover:ring-1 hover:ring-primary/70"
                            >
                                Get a Quote
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Pricing