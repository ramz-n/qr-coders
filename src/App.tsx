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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Home = () => {
  useEffect(() => {
    const scrollToSection = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      // Wait until the home-page sections are in the DOM.
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    };
    scrollToSection();
    window.addEventListener("hashchange", scrollToSection);

    return () => window.removeEventListener("hashchange", scrollToSection);
  }, []);
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
      <ScrollToTop />

      <SmoothScrolling>
        <div className="container mx-auto min-h-screen px-5">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/help" element={<HelpCenter />} />
          </Routes>

          <Footer />
        </div>
      </SmoothScrolling>
    </BrowserRouter>
  );
}

export default App;