import About from "../components/About";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Map from "../components/Map";
import Contact from "../components/Contact";
import Process from "../components/Process";
import Technologies from "../components/Technologies";
import Works from "../components/Works";

const Home = () => {
    return (
        <>
            <Hero />
            <Technologies />
            <Services />
            <Process />
            <Works />
            <Pricing />
            <About />
            <Testimonials />
            <Map />
            <Contact />
        </>
    );
};

export default Home;
