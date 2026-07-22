import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import deprime from "../assets/deprime.png";
import orita from "../assets/orita.png";
import arcadia from "../assets/arcadia.png";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "De-Prime Barbers",
    category: "Landing Page",
    description:
      "A premium barbershop landing page built with React, TypeScript and Tailwind CSS. Black, white and gold palette with smooth animations.",
    image: deprime,
    url: "https://de-prime-barbers.vercel.app",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Oríta Fine Dining",
    category: "Multi-page Website",
    description:
      "A Nigerian/Continental fusion restaurant website with a full menu page, reservations form, and cinematic loading screen.",
    image: orita,
    url: "https://orita-fine-dining.vercel.app/",
    tags: ["React", "TypeScript", "Framer Motion"],
  },
  {
    id: 3,
    title: "Arcadia Homes",
    category: "Web Application",
    description:
      "A full-stack real estate platform with role-based access control, property listings, agent dashboard and authentication.",
    image: arcadia,
    url: "https://arcadia-homes-wvni.vercel.app/",
    tags: ["React", "TypeScript", "Supabase"],
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-24"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "#2563EB" }}
          >
            Our Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-4xl md:text-5xl font-heading font-bold"
              style={{ color: "#09090B" }}
            >
              Projects we're
              <br />
              proud of.
            </h2>
            <Link
              to="/work"
              className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all duration-300 w-fit"
              style={{ color: "#2563EB" }}
            >
              View Our Works
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
        {/* Projects */}
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-xl mb-6"
                style={{ border: "1px solid #E4E4E7" }}
              >
                {/* Browser bar */}
                <div
                  className="flex items-center gap-2 px-4 py-3 border-b"
                  style={{ backgroundColor: "#F4F4F5", borderColor: "#E4E4E7" }}
                >
                  <div className="flex gap-1.5">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: "#EF4444" }}
                    />
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: "#F59E0B" }}
                    />
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: "#22C55E" }}
                    />
                  </div>
                  <div
                    className="flex-1 mx-4 px-3 py-1 rounded text-xs text-center"
                    style={{ backgroundColor: "#E4E4E7", color: "#71717A" }}
                  >
                    {project.url.replace("https://", "")}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ArrowUpRight
                      className="w-4 h-4"
                      style={{ color: "#71717A" }}
                    />
                  </a>
                </div>

                {/* Screenshot */}
                <div className="overflow-hidden" style={{ maxHeight: "400px" }}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Clip reveal overlay */}
                <motion.div
                  initial={{ scaleY: 1 }}
                  whileInView={{ scaleY: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="absolute inset-0 origin-top"
                  style={{ backgroundColor: "#FAFAFA" }}
                />
              </div>

              {/* Info */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs uppercase tracking-widest px-2 py-1 rounded"
                      style={{ backgroundColor: "#EFF6FF", color: "#2563EB" }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-heading font-bold"
                    style={{ color: "#09090B" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed max-w-lg"
                    style={{ color: "#71717A" }}
                  >
                    {project.description}
                  </p>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border transition-all duration-300 hover:bg-accent hover:text-white hover:border-dark w-fit shrink-0"
                  style={{ borderColor: "#E4E4E7", color: "#09090B" }}
                >
                  View Live
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
