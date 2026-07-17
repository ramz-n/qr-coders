const Map = () => {
    return (
        <div className="mx-auto text-center mt-30">
            <div className="py-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Our branches
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white md:text-4xl">
                    Our diverse team operates from different parts of world
                </h2>
            </div>
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg border border-primary/40">
                <img src="./branchmap.PNG" alt="branch map" loading="lazy" />
            </div>
        </div>
    )
}

export default Map