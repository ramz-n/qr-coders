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

function App() {

  return (
    <div className='min-h-screen container mx-auto px-5 scroll-smooth'>
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
  )
}

export default App
