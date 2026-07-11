import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <Contact />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <SmoothScrolling>
        <div className="min-h-screen container mx-auto px-5">
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