import { useMemo, useState } from "react";
import { formatNPR } from "../lib/utils";

const Services = [
    {
        id: "web-dev",
        name: "Website Development",
        description:
            "Corporate sites, dynamic landing pages, portals, and custom portfolios.",
        minPrice: 10000,
        maxPrice: 25000,
    },
    {
        id: "ecommerce",
        name: "E-Commerce Solution",
        description:
            "Online stores, multi-vendor marketplaces, payment gateways (eSewa, Khalti), and inventory dashboards.",
        minPrice: 50000,
        maxPrice: 800000,
    },
    {
        id: "mobile-app",
        name: "Mobile App Development",
        description:
            "High-performance Android and iOS apps tailored for local or global delivery scaling.",
        minPrice: 150000,
        maxPrice: 250000,
    },
    {
        id: "custom-software",
        name: "Custom Software & ERP",
        description:
            "Tailored enterprise architectures built directly around custom localized workflows.",
        minPrice: 200000,
        maxPrice: 450000,
    },
    {
        id: "ui-ux",
        name: "UI/UX Design",
        description:
            "Seamless interactive prototypes, low/high fidelity wireframing, and interactive branding mockups.",
        minPrice: 15000,
        maxPrice: 50000,
    },
    {
        id: "seo",
        name: "SEO",
        description:
            "Local optimization algorithms, targeted local performance funnels, and organic growth tracking.",
        minPrice: 20000,
        maxPrice: 50000,
    },
];

const Packages = [
    {
        id: "basic",
        name: "Basic / MVP",
        rate: 1.0,
        description: "Standard layout, core features, minimal revisions",
    },
    {
        id: "standard",
        name: "Standard / Medium",
        rate: 1.4,
        description: "Custom dashboards, API integrations, mid-tier scaling",
    },
    {
        id: "enterprise",
        name: "Enterprise / Complex",
        rate: 2.0,
        description:
            "High security, custom logic layers, multi-tenant databases",
    },
];

const PriceCalculator = () => {
    const [selectedServices, setSelectedServices] = useState<any>([]);
    const [packages, setPackages] = useState<any>();
    const [isUrgent, setIsUrgent] = useState(false);

    const handleService = (e: any) => {
        const service = Services.filter((s) => s.id === e.target.value);
        setSelectedServices(service);
    };

    const handlePackage = (e: any) => {
        const pack = Packages.filter((p) => p.id === e.target.value);
        setPackages(pack);
    };

    const handleUrgent = (e: any) => {
        setIsUrgent(e.target.checked);
    };

    const costEstimation = useMemo(() => {
        if (selectedServices.length === 0) {
            return { min: 0, max: 0 };
        }

        let baseMin = 0;
        let baseMax = 0;

        baseMin = selectedServices[0].minPrice;
        baseMax = selectedServices[0].maxPrice;

        const computeRate = packages ? packages[0].rate : 1.0;
        const urgent = isUrgent ? 1.25 : 1.0;

        return {
            min: Math.round(baseMin * computeRate * urgent),
            max: Math.round(baseMax * computeRate * urgent),
        };
    }, [selectedServices, packages, isUrgent]);

    return (
        <main className="mx-auto max-w-3xl px-5 py-36 bg-[url('/bg-pricing.svg')] bg-cover bg-center w-full">
            <div className="mb-10 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Estimate your cost
                </p>
                <h2 className="mt-3 text-2xl font-bold text-white md:text-4xl">
                    Get a quick estimation
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
                <div>
                    <label
                        htmlFor="services"
                        className="block mb-2.5 text-xl font-medium"
                    >
                        Select a service.
                    </label>
                    <select
                        id="services"
                        className="block w-full px-3 py-2.5 bg-black border border-secondary text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                        onChange={handleService}
                    >
                        <option>Select a service</option>
                        {Services.map((ser) => (
                            <option key={ser.id} value={ser.id}>
                                {ser.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="packages"
                        className="block mb-2.5 text-xl font-medium"
                    >
                        Select a package.
                    </label>
                    <select
                        id="packag"
                        className="block w-full px-3 py-2.5 bg-black border border-secondary text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                        onChange={handlePackage}
                    >
                        {Packages.map((pkg) => (
                            <option key={pkg.id} value={pkg.id}>
                                {pkg.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center">
                    <label
                        htmlFor="urgent"
                        className="select-none ms-2 text-sm font-medium ml-2"
                    >
                        Is Urgent?
                    </label>
                    <input
                        id="urgent"
                        type="checkbox"
                        onChange={handleUrgent}
                        className="w-4 h-4 ml-2 border border-secondary rounded-xs bg-secondary focus:ring-secondary"
                    />
                </div>
                {selectedServices?.length > 0 && (
                    <p className="font-bold">
                        Estimated Cost:{" "}
                        <span className="italic text-secondary">
                            {formatNPR(costEstimation.min)} -{" "}
                            {formatNPR(costEstimation.max)}
                        </span>
                    </p>
                )}
            </div>
            <a
                href="/quote"
                className="mt-8 block rounded-full border border-primary bg-primary/60 px-12 py-3 text-center text-sm font-medium text-white hover:bg-primary/70 hover:ring-1 hover:ring-primary/70"
            >
                Get a Quote
            </a>
        </main>
    );
};

export default PriceCalculator;
