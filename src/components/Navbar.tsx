import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#career", label: "Careers" },
    { href: "#contact", label: "Contact" },
];

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <header className="my-3 sticky">
            <nav className="bg-white rounded-full mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-10">
                <a href="/" className="flex items-center gap-1">
                    <span
                        className={`font-serif text-2xl font-bold tracking-tight}`}
                    >
                        <img src="/qrc-logo.png" alt="QRC Logo" className="h-8 w-auto" />
                    </span>
                </a>

                <ul className="hidden items-center gap-9 md:flex">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href}
                                className="text-sm font-bold text-primary/80 hover:text-primary/90"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <a href="#" className="hidden rounded-full hover:bg-primary/50 bg-primary px-5 py-2.5 text-sm font-bold transition hover:brightness-95 md:inline-block"
                >
                    Request a Quote
                </a>

                <button
                    aria-label="Open menu"
                    onClick={() => setOpen(true)}
                    className="md:hidden text-primary"
                >
                    <Menu />
                </button>
            </nav>

            {open && (
                <div className="mobile-menu fixed inset-0 z-60 flex flex-col bg-black text-white">
                    <div className="flex items-center justify-between px-6 py-4">
                        <img src="/qrc-logo.png" alt="QRC Logo" className="h-10 w-auto" />
                        <button aria-label="Close menu" onClick={() => setOpen(false)}>
                            <X />
                        </button>
                    </div>
                    <ul className="flex flex-1 flex-col items-center justify-center gap-8">
                        {links.map((l) => (
                            <li key={l.href}>
                                <a
                                    onClick={() => setOpen(false)}
                                    href={l.href}
                                    className="font-serif text-3xl"
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                        <a onClick={() => setOpen(false)}
                            href="#"
                            className="rounded-full hover:bg-primary/50 bg-primary px-5 py-2.5 text-sm font-bold transition hover:brightness-95 md:inline-block"
                        >
                            Request a Quote
                        </a>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Navbar