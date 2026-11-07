import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Briefcase, MapPin, Clock } from "lucide-react";
import { Button } from "../components/ui/button";

const Careers = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number | null) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const roles = [
        {
            id: "1",
            title: "Expert Frontend Engineer (UX/UI focused)",
            department: "Engineering",
            type: "Full-time",
            location: "Hybrid (Nepal)",
            overview:
                "Build exceptionally fast, pixel-perfect, and accessible user interfaces for our proprietary custom software systems and client portals. You will collaborate closely with UI designers and backend engineers to translate complex workflows into smooth user experiences.",
            responsibilities: [
                "Develop responsive web applications, UX/UI designs.",
                "Optimize complex frontend applications for maximum speed, scalability, and clean bundle sizes.",
                "Implement robust state management and seamless REST/GraphQL API integrations.",
                "Ensure accessible, semantic HTML/JSX complying with WCAG standards.",
            ],
            isOpen: false,
        },
        {
            id: "2",
            title: "Senior Full-Stack Engineer (.NET focused)",
            department: "Engineering",
            type: "Full-time",
            location: "Hybrid (Nepal)",
            overview:
                "Lead the architecture and end-to-end development of proprietary, client-facing web applications. You will turn complex operational bottlenecks into lightweight, clean, and completely customized software systems.",
            responsibilities: [
                "Design and implement scalable web applications using .NET technologies.",
                "Collaborate with cross-functional teams to define project requirements and technical solutions.",
                "Conduct code reviews and provide technical mentorship to junior developers.",
                "Optimize application performance to ensure high availability and sub-second load times.",
            ],
            isOpen: false,
        },
        {
            id: "3",
            title: "B2B Account Executive / IT Solutions Consultant",
            department: "Sales & Growth",
            type: "Full-time",
            location: "Hybrid (Nepal)",
            overview:
                "Identify and consult with businesses facing operational friction, positioning QRCoders' custom software and website capabilities as the definitive solution.",
            responsibilities: [
                "Source and qualify high-value inbound and outbound enterprise project opportunities.",
                "Analyze complex business inefficiencies and pitch bespoke engineering proposals.",
                "Oversee client relationships from initial discovery consultation to final contract execution.",
            ],
            isOpen: false,
        },
        {
            id: "4",
            title: "DevOps & Cloud Infrastructure Specialist",
            department: "Engineering",
            type: "Contract / Full-time",
            location: "Remote (Global)",
            overview:
                "Own the deployment, infrastructure optimization, and absolute security architecture of our clients' custom software platforms and web portals.",
            responsibilities: [
                "Architect high-availability, fault-tolerant hosting environments on AWS or Google Cloud Platform.",
                "Set up robust CI/CD pipelines, automated backup systems, and global edge-caching configurations.",
                "Monitor real-time system performance to guarantee maximum uptime and microsecond response speeds.",
                "Implement tight zero-trust security measures to protect highly sensitive enterprise client data.",
            ],
            isOpen: false,
        },
    ];

    return (
        <main className="mx-auto max-w-4xl px-6 py-40 text-gray-300">
            <p className="eyebrow text-sm font-semibold tracking-widest text-primary">
                Careers at QRCoders
            </p>

            <h1 className="h-section mt-3">
                Explore our opportunities and find your perfect role.
            </h1>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                We construct bulletproof custom systems. Join a team focused on
                high-availability backend design, sleek UX, and true technical
                excellence.
            </p>

            <section className="mt-12 space-y-4">
                {roles.map((role, idx) => {
                    const isCurrentOpen = openIndex === idx;
                    return (
                        <div
                            key={role.id}
                            className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                                isCurrentOpen
                                    ? "border-primary/50 bg-accent shadow-lg shadow-accent/5"
                                    : "border-accent-800 bg-accent hover:border-accent-700 hover:bg-accent/90"
                            }`}
                        >
                            <button
                                onClick={() => toggleAccordion(idx)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                aria-expanded={isCurrentOpen}
                            >
                                <div className="space-y-2.5 pr-4">
                                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-primary">
                                        {role.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-3 text-xs text-gray-300 font-medium">
                                        <span className="flex items-center gap-1">
                                            <Briefcase className="w-3.5 h-3.5 text-gray-300" />{" "}
                                            {role.department}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5 text-gray-300" />{" "}
                                            {role.type}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-3.5 h-3.5 text-gray-300" />{" "}
                                            {role.location}
                                        </span>
                                    </div>
                                </div>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-300 shrink-0 transition-transform duration-300 ${
                                        isCurrentOpen
                                            ? "rotate-180 text-primary"
                                            : ""
                                    }`}
                                />
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${
                                    isCurrentOpen
                                        ? "max-h-[1000px] border-t border-accent-800/60"
                                        : "max-h-0 pointer-events-none"
                                }`}
                            >
                                <div className="p-6 space-y-6 text-sm text-gray-300 leading-relaxed">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                                            Role Overview
                                        </h4>
                                        <p className="text-gray-300">
                                            {role.overview}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                                            Key Responsibilities
                                        </h4>
                                        <ul className="space-y-2 list-none pl-0">
                                            {role.responsibilities.map(
                                                (resp, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-2.5 text-gray-300"
                                                    >
                                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                                                        <span>• {resp}</span>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                        <div className="pt-5 flex items-center justify-between">
                                            {role.isOpen ? (
                                                <Button className="outline hover:bg-accent-tint/90 text-white font-semibold transition-all px-6">
                                                    <Link
                                                        to={`mailto:qrcoders.info@://gmail.com`}
                                                    >
                                                        Apply Now
                                                    </Link>
                                                </Button>
                                            ) : (
                                                <div className="flex items-center gap-2 text-xs font-semibold text-accent-tint/80 border border-accent-tint/60 rounded-lg px-3 py-2 select-none w-fit">
                                                    Application Closed
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <article className="rounded-xl border border-accent-800 bg-accent p-6 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                        <div>
                            <h3 className="text-lg font-bold text-white">
                                Open Application
                            </h3>
                            <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                                Don’t see a specific opening that matches your
                                role? We always want to connect with standout
                                talent across software engineering, UX
                                architecture, and technical product management.
                            </p>
                            <Link
                                to="mailto:qrcoders.info@gmail.com"
                                className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-white underline decoration-2 underline-offset-4 hover:text-white/70 transition-colors"
                            >
                                Submit your resume & portfolio to our team
                            </Link>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default Careers;
