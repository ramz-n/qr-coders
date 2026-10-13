import {
    BinocularsIcon,
    CalculatorIcon,
    DesktopTowerIcon,
    RocketLaunchIcon,
} from "@phosphor-icons/react";

export const PROCESS = [
    {
        title: "Discovery call",
        text: "You describe the problem. We ask about your users, workflow and budget.",
        icon: BinocularsIcon,
    },
    {
        title: "Scope and quote",
        text: "You receive a written scope, technical roadmap, timeline and price.",
        icon: CalculatorIcon,
    },
    {
        title: "Build and review",
        text: "We build in stages and ask for your feedback and approvals along the way.",
        icon: DesktopTowerIcon,
    },
    {
        title: "Launch and support",
        text: "We deploy to cloud hosting and offer maintenance packages afterwards.",
        icon: RocketLaunchIcon,
    },
];

const Process = () => {
    return (
        <section
            id="process"
            className="py-20 relative bg-[url('/meteor-bg.svg')] bg-cover bg-center"
        >
            <p className="eyebrow">Process</p>
            <h2 className="h-section mt-3 max-w-[28ch]">
                From first call to launch, in four steps
            </h2>
            <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {PROCESS.map((p, i) => (
                    <li
                        key={p.title}
                        className="border-t-2 border-zinc-900 pt-4"
                    >
                        <p className="text-xl font-medium tabular-nums text-accent">
                            0{i + 1}
                        </p>
                        <h3 className="mt-2 font-semibold text-zinc-900 flex gap-1 items-center">
                            <p.icon
                                size={40}
                                className="bg-accent-strong text-white rounded-full p-1"
                            />{" "}
                            <span>{p.title}</span>
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                            {p.text}
                        </p>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default Process;
