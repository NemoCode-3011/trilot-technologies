import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus, Minus } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "A professionally built website that represents your business with credibility, attracts the right customers, and works hard for your growth — 24/7.",

  },
  {
    id: 2,
    title: "Landing Pages",
    description: "High-converting landing pages designed to turn visitors into leads and leads into customers. Built fast, built to perform.",

  },
  {
    id: 3,
    title: "Visual Identity",
    description: "A cohesive visual direction — colors, typography, and design language — that gives your brand a distinct identity people remember and trust.",
  },
  {
    id: 4,
    title: "SEO & Performance",
    description: "We optimize your website to load fast, rank higher on Google, and stay easy to find — so your business gets discovered by the people looking for it.",
  
  },
  {
    id: 5,
    title: "Maintenance & Support",
    description: "From deployment to hosting to redesigns — we stay in your corner after launch, keeping your digital presence running smoothly as your business grows.",

  },
]

const Services = () => {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <section
      id="services"
      className="py-20"
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
            What We Do
          </p>
          <h2
            className="text-4xl md:text-5xl font-heading font-bold"
            style={{ color: "#09090B" }}
          >
            Services built around
            <br />
            your business goals.
          </h2>
        </motion.div>

        {/* Accordion */}
        <div
          className="flex flex-col"
          style={{ borderTop: "1px solid #E4E4E7" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              style={{ borderBottom: "1px solid #E4E4E7" }}
            >
              {/* Row */}
              <button
                onClick={() => setActiveId(activeId === service.id ? null : service.id)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <div className="flex items-center gap-6">
                  <span
                    className="text-xs font-mono hidden sm:block"
                    style={{ color: "#A1A1AA" }}
                  >
                    0{service.id}
                  </span>
                  <span
                    className="text-lg md:text-xl font-heading font-semibold transition-colors duration-300 group-hover:text-accent"
                    style={{ color: activeId === service.id ? "#2563EB" : "#09090B" }}
                  >
                    {service.title}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: activeId === service.id ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ color: activeId === service.id ? "#2563EB" : "#A1A1AA" }}
                >
                  <Plus className="w-5 h-5" />
                </motion.div>
              </button>

              {/* Expanded content */}
              <AnimatePresence>
                {activeId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-0 sm:pl-12 flex flex-col gap-4">
                      <p
                        className="text-base leading-relaxed max-w-2xl"
                        style={{ color: "#71717A" }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services