import LoadingScreen from "./components/LoadingScreen"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Stats from "./sections/Stats"
import Services from "./sections/Services"
import Process from "./sections/Process"
import Portfolio from "./sections/Portfolio"
import Testimonials from "./sections/Testimonials"
import About from "./sections/About"
import CTA from "./sections/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App