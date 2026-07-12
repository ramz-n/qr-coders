import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RequestQuote from "./components/RequestQuote";
import Services from "./components/Services";
import SmoothScrolling from "./components/SmoothScrolling";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import HelpCenter from "./pages/HelpCenter";
import Map from "./components/Map";
import Quote from "./pages/Quote";

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (hash) {
        const sectionId = hash.substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
          const navbarOffset = 100;
          const position =
            section.getBoundingClientRect().top +
            window.scrollY -
            navbarOffset;

          window.scrollTo({
            top: position,
            behavior: "smooth",
          });

          return;
        }
      }

      // Normal page navigation: go to top.
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 100);

    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

const Home = () => {
  return (
    <>
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

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />

      <SmoothScrolling>
        <div className="container mx-auto min-h-screen px-5">
          

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>

          <Footer />
        </div>
      </SmoothScrolling>
    </BrowserRouter>
  );
}

export default App;