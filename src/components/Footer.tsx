import { Link } from "react-router-dom";

import {
    EnvelopeSimple,
    FacebookLogo,
    InstagramLogo,
    MapPin,
    Phone,
    TiktokLogo,
    WhatsappLogo,
} from "@phosphor-icons/react";

const company = [
    { label: "Home", to: "/" },
    { label: "About", to: "/#about" },
    { label: "Services", to: "/#services" },
    { label: "Pricing", to: "/#pricing" },
    { label: "Careers", to: "/careers" },
    { label: "Contact", to: "/#contact" },
];

const support = [
    { label: "Request a quote", to: "/quote" },
    { label: "Cost estimator", to: "/price-calculator" },
    { label: "Help centre", to: "/help" },
    { label: "Privacy policy", to: "/privacy" },
    { label: "Terms and conditions", to: "/terms" },
];

const social = [
    {
        label: "WhatsApp",
        href: "https://wa.me/9779744700704?text=Hello%20QR%20Coders%2C%20I%27m%20interested%20in%20your%20services",
        Icon: WhatsappLogo,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/people/QRCoders/61591664620751/",
        Icon: FacebookLogo,
    },
    {
        label: "Instagram",
        href: "https://instagram.com/qr.coders",
        Icon: InstagramLogo,
    },
    { label: "TikTok", href: "https://tiktok.com/@qrcoders", Icon: TiktokLogo },
];

export const ICON = {
    size: 20,
    weight: "regular",
    "aria-hidden": true,
} as const;

const Footer = () => {
    return (
        <footer className="bg-white relative">
            <img src="/wave.svg" alt="" className="w-full" />
            <div
                className={`mx-auto w-full max-w-6xl px-5 sm:px-8 grid gap-10 py-14 md:grid-cols-[minmax(0,2fr)_1fr_1fr]`}
            >
                <div>
                    <img
                        src="/qrc-logo.webp"
                        alt="QR Coders"
                        width={130}
                        height={50}
                        className="h-12.5 w-auto"
                        loading="lazy"
                    />
                    <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-zinc-600">
                        QRCoders is a software development company that builds
                        business software & web solutions, from conception to
                        launch.
                    </p>
                    <ul className="mt-5 space-y-2 text-sm text-zinc-700">
                        <li className="flex items-center gap-2.5">
                            <MapPin {...ICON} className="text-zinc-500" />
                            Narayangarh, Nepal
                        </li>
                        <li>
                            <a
                                className="relative z-50 flex items-center gap-2.5 hover:text-zinc-900"
                                href="tel:+9779744700704"
                            >
                                <Phone {...ICON} className="text-zinc-500" />
                                +977-9744700704
                            </a>
                        </li>
                        <li>
                            <a
                                className="relative z-50 flex items-center gap-2.5 hover:text-zinc-900"
                                href="mailto:qrcoders.info@gmail.com"
                            >
                                <EnvelopeSimple
                                    {...ICON}
                                    className="text-zinc-500"
                                />
                                qrcoders.info@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

                <nav aria-label="Company">
                    <h2 className="text-sm font-medium text-zinc-900">
                        Company
                    </h2>
                    <ul className="mt-4 space-y-2.5">
                        {company.map((l) => (
                            <li key={l.label}>
                                <Link
                                    to={l.to}
                                    className="relative z-50 text-sm text-zinc-600 transition-colors duration-150 hover:text-black"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav aria-label="Support and legal">
                    <h2 className="text-sm font-medium text-zinc-900">
                        Support
                    </h2>
                    <ul className="mt-4 space-y-2.5">
                        {support.map((l) => (
                            <li key={l.label}>
                                <Link
                                    target="_blank"
                                    to={l.to}
                                    className="relative z-50 text-sm text-zinc-600 transition-colors duration-150 hover:text-black"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="border-t border-zinc-200">
                <div
                    className={`mx-auto w-full max-w-6xl px-5 sm:px-8 flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between`}
                >
                    <p className="text-sm text-zinc-500">
                        &copy;{" "}
                        <span suppressHydrationWarning>
                            {new Date().getFullYear()}
                        </span>{" "}
                        QRCoders. All rights reserved.
                    </p>
                    <ul className="flex items-center gap-1">
                        {social.map(({ label, href, Icon }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="relative z-50 inline-flex size-10 items-center justify-center rounded-lg text-zinc-600 transition-colors duration-150 hover:bg-accent-tint hover:text-zinc-900"
                                >
                                    <Icon
                                        size={22}
                                        weight="regular"
                                        aria-hidden="true"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
