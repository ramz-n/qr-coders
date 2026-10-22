import { SealCheckIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const pricing = [
    {
        title: "Mobile App Development",
        description:
            "We provide various app development solutions from MVP apps to complex enterprise apps.",
        image: "./mobile-apps.svg",
        services: ["MVP App", "Cross-Platform App", "Enterprise App"],
    },
    {
        title: "Web Development",
        description:
            "We offer various web solutions from basic websites to complex web applications",
        image: "./web_apps.svg",
        services: [
            "Basic Website",
            "Business Website",
            "SaaS Application",
            "SPA Application",
            "Custom Web Application",
        ],
    },
    {
        title: "SEO Services",
        description:
            "We offer SEO services to help your website rank higher in search engine results and drive more traffic to your site.",
        image: "./seo.svg",
        services: ["Foundation SEO", "Advanced SEO", "Premium SEO"],
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-20">
            <p className="eyebrow text-sm font-semibold tracking-widest text-primary text-center">
                Our Pricing
            </p>

            <h2 className="h-section mt-3 text-center">
                Affordable pricing that suits you
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 items-center md:gap-8 py-10">
                {pricing.map((item, idx) => (
                    <div
                        key={idx}
                        className={`rounded-2xl p-6 shadow-xs bg-white hover:-translate-y-1 hover:shadow-xl cursor-pointer
                            ${idx === 1 ? "border-accent/50 border-2" : ""}
                            `}
                    >
                        <div className="w-full h-50">
                            <img
                                className="h-full w-full"
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="mt-5 font-semibold text-zinc-900">
                                {item.title}
                                <span className="sr-only">{item.title}</span>
                            </h2>
                        </div>
                        <ul className="mt-6 space-y-2">
                            {item.services.map((itm, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center font-semibold text-sm md:text-lg gap-2 text-zinc-600"
                                >
                                    <SealCheckIcon className="h-5 w-5" />
                                    <span className="text-zinc-600">
                                        {" "}
                                        {itm}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to="/price-calculator"
                            className="btn-primary mt-8 block rounded-full border border-primary bg-primary/60 px-12 py-3 text-center text-sm font-medium text-white hover:bg-primary/70"
                        >
                            Estimate the cost
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
