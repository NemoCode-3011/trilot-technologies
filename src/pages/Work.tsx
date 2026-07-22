import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import deprime from "../assets/deprime.png"
import orita from "../assets/orita.png"
import arcadia from "../assets/arcadia.png"

const projects = [
  {
    id: 1,
    slug: "de-prime",
    title: "De-Prime Barbers",
    category: "Landing Page",
    year: "2025",
    description: "A premium barbershop landing page that elevated an already established brand's digital presence — built to attract new clients and reflect the quality of their service.",
    image: deprime,
    url: "https://de-prime-barbers.vercel.app",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    slug: "orita",
    title: "Oríta Fine Dining",
    category: "Multi-page Website",
    year: "2025",
    description: "A full multi-page website for a fictional Nigerian/Continental fusion restaurant — complete with a full menu, reservations system, and a cinematic brand experience.",
    image: orita,
    url: "https://orita.vercel.app",
    tags: ["React", "TypeScript", "Motion", "React Router"],
  },
  {
    id: 3,
    slug: "arcadia",
    title: "Arcadia Homes",
    category: "Web Application",
    year: "2025",
    description: "A full-stack real estate platform with role-based access control, property listings, agent dashboard, and Supabase authentication — built for scale.",
    image: arcadia,
    url: "https://arcadia-homes-wvni.vercel.app",
    tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
  },
]

const Work = () => {
  return (
    <div style={{ backgroundColor: "#09090B", minHeight: "100vh" }}>

      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-40 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: "#2563EB" }}
          >
            Our Work
          </p>
          <h1
            className="text-5xl md:text-7xl font-heading font-bold"
            style={{ color: "#FAFAFA" }}
          >
            Projects we're
            <br />
            proud of.
          </h1>
          <p
            className="text-base max-w-xl leading-relaxed mt-4"
            style={{ color: "#71717A" }}
          >
            Every project we take on is built with the same standard — understand the business, solve the problem, deliver results. Here's a selection of our work.
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #27272A" }} />

      {/* Projects list */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16">
        <div className="flex flex-col gap-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/work/${project.slug}`}
                className="group grid grid-cols-1 md:grid-cols-2 gap-8 py-16 border-b items-center"
                style={{ borderColor: "#27272A" }}
              >
                {/* Left — info */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ backgroundColor: "#18181B", color: "#71717A", border: "1px solid #27272A" }}
                    >
                      {project.category}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "#3F3F46" }}
                    >
                      {project.year}
                    </span>
                  </div>
                  <h2
                    className="text-3xl md:text-4xl font-heading font-bold transition-colors duration-300 group-hover:text-accent"
                    style={{ color: "#FAFAFA" }}
                  >
                    {project.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#71717A" }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{ backgroundColor: "#18181B", color: "#52525B", border: "1px solid #27272A" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3 w-fit"
                    style={{ color: "#2563EB" }}
                  >
                    View Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Right — image */}
                <div
                  className="relative overflow-hidden rounded-xl"
                  style={{ border: "1px solid #27272A" }}
                >
                  {/* Browser bar */}
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
                      className="flex-1 mx-4 px-3 py-1 rounded text-xs text-center truncate"
                      style={{ backgroundColor: "#27272A", color: "#52525B" }}
                    >
                      {project.url.replace("https://", "")}
                    </div>
                  </div>
                  {/* Screenshot */}
                  <div className="overflow-hidden" style={{ maxHeight: "280px" }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className="max-w-5xl mx-auto px-6 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ borderTop: "1px solid #27272A" }}
      >
        <div>
          <h3
            className="text-2xl font-heading font-bold mb-2"
            style={{ color: "#FAFAFA" }}
          >
            Ready to be next?
          </h3>
          <p className="text-sm" style={{ color: "#71717A" }}>
            Let's build something you're proud of.
          </p>
        </div>
        
          < a href="https://wa.me/2348149798764?text=Hi%20Trilot%2C%20I%27d%20like%20to%20start%20a%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white shrink-0"
          style={{ backgroundColor: "#2563EB" }}
        >
          Start a Project →
        </a>
      </div>

    </div>
  )
}

export default Work