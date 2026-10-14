import type { ReactNode } from "react";

export const wrap = "mx-auto w-full max-w-6xl px-5 sm:px-8";
export const ICON = {
    size: 20,
    weight: "regular",
    "aria-hidden": true,
} as const;

export function Section({
    id,
    tone = "white",
    children,
}: {
    id?: string;
    tone?: "white" | "tint";
    children: ReactNode;
}) {
    return (
        <section
            id={id}
            className={`relative py-16 md:py-24 ${tone === "white" ? "bg-white" : "bg-zinc-50"}`}
        >
            <img
                src="/wave-bg.svg"
                alt="wave background"
                className="absolute top-0 md:-top-10 w-full rotate-180"
            />

            <div className={wrap}>{children}</div>

            <img
                src="/wave-bg1.svg"
                alt="wave background"
                className="absolute -bottom-11 md:-bottom-25 w-full rotate-180 -z-10"
            />
        </section>
    );
}

export function Split({
    eyebrow,
    title,
    children,
}: {
    eyebrow: string;
    title: string;
    intro?: ReactNode;
    children: ReactNode;
}) {
    return (
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start relative">
                <p className="eyebrow">{eyebrow}</p>
                <h2 className="h-section mt-3">{title}</h2>
                <img src="/about1.svg" className="absolute h-100 hidden md:block" />
            </div>
            <div>{children}</div>
        </div>
    );
}
