import { DottedMap, type Marker } from "./ui/dotted-map";

const markers: Marker[] = [
    {
        lat: 27.7000,
        lng: 84.4200,
        size: 1.2,
    },
    {
        lat: 60.1695,
        lng: 24.9354,
        size: 1.2,
    },
]


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
                <DottedMap dotRadius={0.2} markers={markers} pulse dotColor="#5c2683" markerColor="#FF5FCF" />
            </div>
        </div>
    )
}

export default Map