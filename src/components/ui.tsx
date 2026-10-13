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
            className={`border-b border-zinc-200 py-16 md:py-24 ${tone === "white" ? "bg-white" : "bg-zinc-50"}`}
        >
            <div className={wrap}>{children}</div>
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
                <img src="/about1.svg" className="absolute h-100" />
            </div>
            <div>{children}</div>
        </div>
    );
}
