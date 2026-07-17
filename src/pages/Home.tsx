import About from "../components/About";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import RequestQuote from "../components/RequestQuote";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import Map from "../components/Map"
import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>QRCoders | Software Company</title>
                <meta name="description" content="Affordable high quality software solution, websites, web applications in Narayangarh, Chitwan" />
                <link rel="canonical" href="https://qrcoders.site" />

                <meta property="og:title" content="Home | QRCoders" />
                <meta property="og:description" content="Get an affordable and high quality application, websites in Narayangarh, Chitwan" />
                <meta property="og:url" content="https://qrcoders.site" />
                <meta property="og:type" content="website" />
            </Helmet>
            <Hero />
            <About />
            <WhyChooseUs />
            <RequestQuote />
            <Services />
            <Pricing />
            <Testimonials />
            <Map />
            <Contact />
        </>
    );
};

export default Home