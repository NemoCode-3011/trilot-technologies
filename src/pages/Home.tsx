import Hero from "../sections/Hero"
import Marquee from "../sections/MarqueeBar"
import Stats from "../sections/Stats"
import Services from "../sections/Services"
import Process from "../sections/Process"
import Portfolio from "../sections/Portfolio"
import Testimonials from "../sections/Testimonials"
import About from "../sections/About"
import CTA from "../sections/CTA"

const Home = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <main>
      <Hero onContactClick={onContactClick} />
      <Marquee />
      <Stats />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <About />
      <CTA onContactClick={onContactClick} />
    </main>
  )
}

export default Home