import { motion } from "motion/react"
import { ArrowUpRight, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import deprime from "../../assets/dprimeimg.png"

const DePrime = () => {
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
              Landing Page
            </span>
            <span className="text-xs" style={{ color: "#3F3F46" }}>2025</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-heading font-bold"
            style={{ color: "#FAFAFA" }}
          >
            De-Prime Barbers
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "#71717A" }}
          >
            A premium barbershop landing page built to attract new clients and reflect the quality of an already established brand.
          </p>
          
            <a href="https://de-prime-barbers.vercel.app"
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
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: "1px solid #27272A" }}
        >
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
              de-prime-barbers.vercel.app
            </div>
          </div>
          <img
            src={deprime}
            alt="De-Prime Barbers"
            className="w-full object-cover object-top"
          />
        </div>
      </motion.div>

      {/* Case study content */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Left — main content */}
          <div className="md:col-span-2 flex flex-col gap-16">

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h2
                className="text-2xl font-heading font-bold"
                style={{ color: "#FAFAFA" }}
              >
                Overview
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#71717A" }}>
                De-Prime Barbers is an established barbershop in Kwara State, Nigeria. Despite having a loyal client base and a strong reputation, they had no digital presence — no website, no way for new customers to find them online.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#71717A" }}>
                Trilot was brought in to build a landing page that would represent the brand online, attract new clients, and reflect the premium quality of their service.
              </p>
            </motion.div>

            {/* The Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h2
                className="text-2xl font-heading font-bold"
                style={{ color: "#FAFAFA" }}
              >
                The Challenge
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#71717A" }}>
                The brief was clear — build something that looks premium without being intimidating. De-Prime serves everyday clients who should feel like the barbershop is accessible, not exclusive. The site needed to say "this place is quality" without saying "this place is expensive."
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#71717A" }}>
                The design had to work for both new visitors discovering De-Prime for the first time and returning clients looking to book.
              </p>
            </motion.div>

            {/* The Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h2
                className="text-2xl font-heading font-bold"
                style={{ color: "#FAFAFA" }}
              >
                The Solution
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#71717A" }}>
                We built a single-page landing site with a black, white and gold palette — premium but grounded. Playfair Display for headings gave it a classic barbershop feel while Inter kept the body text clean and modern.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#71717A" }}>
                The page features a hero section, about section, full services and pricing list, gallery, team profiles, and a direct WhatsApp booking CTA — everything a first-time visitor needs to go from discovery to booking in one scroll.
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h2
                className="text-2xl font-heading font-bold"
                style={{ color: "#FAFAFA" }}
              >
                Key Features
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  "Mobile-first responsive design",
                  "Full services and pricing section",
                  "Drag-scroll photo gallery",
                  "Team profiles with hover effects",
                  "WhatsApp booking integration",
                  "Scroll-triggered animations",
                  "Navbar with scroll-aware glassmorphism",
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
              <h3
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: "#52525B" }}
              >
                Project Details
              </h3>

              {[
                { label: "Client", value: "De-Prime Barbers" },
                { label: "Type", value: "Landing Page" },
                { label: "Year", value: "2025" },
                { label: "Timeline", value: "2 Weeks" },
                { label: "Stack", value: "React, TypeScript, Tailwind CSS" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest" style={{ color: "#3F3F46" }}>
                    {item.label}
                  </span>
                  <span className="text-sm" style={{ color: "#A1A1AA" }}>
                    {item.value}
                  </span>
                </div>
              ))}

              
                < a href="https://de-prime-barbers.vercel.app"
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
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#3F3F46" }}>
              Next Project
            </p>
            <h3 className="text-2xl font-heading font-bold" style={{ color: "#FAFAFA" }}>
              Oríta Fine Dining
            </h3>
          </div>
          <Link
            to="/work/orita"
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

export default DePrime