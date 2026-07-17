import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SmoothScrolling from "./components/SmoothScrolling";
import TermsAndConditions from "./pages/TermsAndConditions";
import HelpCenter from "./pages/HelpCenter";
import Quote from "./pages/Quote";
import Home from "./pages/Home";
import { HelmetProvider } from 'react-helmet-async';

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

function App() {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;