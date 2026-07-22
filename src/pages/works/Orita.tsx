import { motion } from "motion/react"
import { ArrowUpRight, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import orita from "../../assets/orita.png"

const Orita = () => {
  return (
    <div style={{ backgroundColor: "#09090B", minHeight: "100vh" }}>

      {/* Back button */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-32 pb-8">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
          style={{ color: "#71717A" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <span
              className="text-xs uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: "#18181B", color: "#71717A", border: "1px solid #27272A" }}
            >
              Multi-page Website
            </span>
            <span className="text-xs" style={{ color: "#3F3F46" }}>2025</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-heading font-bold"
            style={{ color: "#FAFAFA" }}
          >
            Oríta Fine Dining
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "#71717A" }}
          >
            A cinematic multi-page website for a fictional Nigerian/Continental fusion restaurant — built as a portfolio showcase of premium web design and brand storytelling.
          </p>
          
           < a href="https://orita.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium w-fit"
            style={{ color: "#2563EB" }}
          >
            View Live Site
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Main image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-5xl mx-auto px-6 md:px-8 mb-24"
      >
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #27272A" }}>
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ backgroundColor: "#18181B", borderColor: "#27272A" }}
          >
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#EF4444" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#F59E0B" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#22C55E" }} />
            </div>
            <div
              className="flex-1 mx-4 px-3 py-1 rounded text-xs text-center"
              style={{ backgroundColor: "#27272A", color: "#52525B" }}
            >
              orita.vercel.app
            </div>
          </div>
          <img src={orita} alt="Oríta Fine Dining" className="w-full object-cover object-top" />
        </div>
      </motion.div>

      {/* Case study content */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Left — main content */}
          <div className="md:col-span-2 flex flex-col gap-16">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h2 className="text-2xl font-heading font-bold" style={{ color: "#FAFAFA" }}>Overview</h2>
              <p className="text-base leading-relaxed" style={{ color: "#71717A" }}>
                Oríta Fine Dining is a fictional restaurant concept created as a portfolio showcase piece for Trilot Technologies. The brief was self-imposed — build the most premium restaurant website possible, using it to demonstrate the full range of Trilot's design and development capabilities.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#71717A" }}>
                The name "Oríta" means crossroads in Yoruba — a perfect metaphor for the Nigerian/Continental fusion concept at the heart of the brand.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h2 className="text-2xl font-heading font-bold" style={{ color: "#FAFAFA" }}>The Challenge</h2>
              <p className="text-base leading-relaxed" style={{ color: "#71717A" }}>
                The challenge was building a brand with genuine cultural depth — not a surface-level "African aesthetic" but something rooted in Yoruba tradition and expressed through restraint and intentionality.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#71717A" }}>
                Every design decision had to answer one question: does this feel like a place where two culinary worlds meet with respect and elegance?
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h2 className="text-2xl font-heading font-bold" style={{ color: "#FAFAFA" }}>The Solution</h2>
              <p className="text-base leading-relaxed" style={{ color: "#71717A" }}>
                We designed a midnight blue and copper palette — distinctive, warm and premium without being clichéd. Italiana for headings brought dramatic elegance. DM Sans for body kept it readable and modern.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#71717A" }}>
                The site features a cinematic loading screen with a Yoruba crossroads animation, a full interactive menu with expandable soup accompaniment selectors, a reservations form with Google Maps integration, and a deeply written About page rooted in Yoruba cultural lore.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-2xl font-heading font-bold" style={{ color: "#FAFAFA" }}>Key Features</h2>
              <div className="flex flex-col gap-3">
                {[
                  "Cinematic loading screen with SVG crossroads animation",
                  "Full interactive menu with 5 tabs and expandable rows",
                  "Soup accompaniment selector (choose your swallow)",
                  "Reservations page with booking form and Google Maps",
                  "Deeply written About page with Yoruba cultural narrative",
                  "Drag-scroll atmospheric photo gallery",
                  "Framer Motion scroll-triggered animations throughout",
                  "Fully responsive across mobile, tablet and desktop",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 py-3 border-b"
                    style={{ borderColor: "#27272A" }}
                  >
                    <span style={{ color: "#2563EB" }}>✦</span>
                    <span className="text-sm" style={{ color: "#A1A1AA" }}>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right — sidebar */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 p-6 rounded-xl sticky top-32"
              style={{ backgroundColor: "#18181B", border: "1px solid #27272A" }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#52525B" }}>
                Project Details
              </h3>
              {[
                { label: "Client", value: "Portfolio Project" },
                { label: "Type", value: "Multi-page Website" },
                { label: "Year", value: "2025" },
                { label: "Timeline", value: "3 Weeks" },
                { label: "Stack", value: "React, TypeScript, Motion, React Router" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest" style={{ color: "#3F3F46" }}>{item.label}</span>
                  <span className="text-sm" style={{ color: "#A1A1AA" }}>{item.value}</span>
                </div>
              ))}
              
               <a href="https://orita.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-white mt-2"
                style={{ backgroundColor: "#2563EB" }}
              >
                View Live Site
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Next project */}
      <div style={{ borderTop: "1px solid #27272A" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#3F3F46" }}>Next Project</p>
            <h3 className="text-2xl font-heading font-bold" style={{ color: "#FAFAFA" }}>Arcadia Homes</h3>
          </div>
          <Link
            to="/work/arcadia"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border transition-all duration-300 hover:bg-white hover:text-dark"
            style={{ borderColor: "#27272A", color: "#A1A1AA" }}
          >
            View Case Study
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Orita