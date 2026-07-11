import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import WhyChooseUs from "./components/WhyChooseUs"
import Pricing from "./components/Pricing"
import RequestQuote from "./components/RequestQuote"
import SmoothScrolling from "./components/SmoothScrolling"

function App() {

  return (
    <SmoothScrolling>
      <div className='min-h-screen container mx-auto px-5'>
        <Navbar />
        <Hero />
        <About />
        <WhyChooseUs />
        <RequestQuote />
        <Services />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </SmoothScrolling>
  )
}

export default App
