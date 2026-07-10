import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import WhyChooseUs from "./components/WhyChooseUs"

function App() {

  return (
    <div className='min-h-screen container mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />

    </div>
  )
}

export default App
