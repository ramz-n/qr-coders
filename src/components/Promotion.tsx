const Promotion = () => {
    return (
        <div className="">
            <div className="bg-accent">
                <div className="mx-auto py-3 px-3 md:px-8">
                    <div className="flex flex-col items-center justify-between lg:flex-row lg:justify-center">
                        <div className="flex flex-1 items-center lg:mr-3 lg:flex-none gap-1 md:gap-3">
                            <p className="text-center text-sm font-medium text-white">
                                🚀 Festival Offer. Get{" "}
                                <span className="font-extrabold">20%</span> on
                                all plans.
                            </p>
                            <a
                                target="_blank"
                                className="relative z-10 flex items-center justify-center rounded-md border bg-white px-3 md:px-4 py-1 text-sm font-medium text-accent shadow-sm hover:bg-accent hover:text-white cursor-pointer"
                                href="https://api.whatsapp.com/send/?phone=9779744700704&text=Namaste"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;
