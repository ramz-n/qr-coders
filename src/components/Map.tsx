const Map = () => {
    return (
        <div className="mx-auto text-center mt-30">
            <div className="py-10">
                <p className="eyebrow text-sm font-semibold tracking-widest text-primary">
                    Our branches
                </p>

                <h2 className="h-section mt-3">
                    Our diverse team operates from different parts of world
                </h2>
            </div>
            <div className="relative w-full overflow-hidden rounded-lg border border-primary/40 h-100">
                <img src="./branchmap.PNG" alt="branch map" loading="lazy" className="w-full h-full object-fill" />
            </div>
        </div>
    )
}

export default Map