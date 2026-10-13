import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="mx-auto w-full max-w-6xl px-5 my-32 py-24 md:py-32 flex items-center justify-center flex-col">
            <p className="eyebrow">404</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                We couldn&rsquo;t find that page
            </h1>
            <p className="lede mt-4">
                The link may be old or mistyped. Try the homepage, or tell us
                what you were looking for.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/" className="btn-primary rounded-full hover:bg-primary/50 bg-primary px-5 py-2.5 text-sm font-bold transition hover:brightness-95 md:inline-block">Back to homepage</Link>
                <Link to="/#contact" className="btn-secondary rounded-full hover:bg-primary/50 bg-primary px-5 py-2.5 text-sm font-bold transition hover:brightness-95 md:inline-block">
                    Contact us
                </Link>
            </div>
        </div>
    );
}
