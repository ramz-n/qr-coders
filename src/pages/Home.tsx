import About from "../components/About";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Map from "../components/Map";
import Contact from "../components/Contact";
import Process from "../components/Process";
import Technologies from "../components/Technologies";

const Home = () => {
    return (
        <>
            <Hero />
            <Technologies />
            <About />
            <Services />
            <Process />
            <Pricing />
            <Testimonials />
            <Map />
            <Contact />
        </>
    );
};

export default Home;
