import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import WhyChooseUs from "./components/WhyChooseUs"

function App() {

  return (
    <div className='min-h-screen container mx-auto px-2'>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Testimonials />
    </div>
  )
}

export default App
