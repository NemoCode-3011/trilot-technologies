import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We start by understanding your business, your goals, and your target market. We make no assumptions — just the right questions to build a clear picture of what success looks like for you.",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description: "We translate strategy into design. You see exactly what we're building before we write a single line of code — so there are no surprises at the end.",
  },
  {
    number: "03",
    title: "Build & Develop",
    description: "We build your digital product with clean, modern code. Fast, responsive, and built to grow with your business — not just look good in a browser.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We deploy, test, and hand over a product you're proud of. And we don't disappear after launch — we stay in your corner as your business grows.",
  },
]

const Process = () => {
  return (
    <section
      id="process"
      className="py-24"
      style={{ backgroundColor: "#09090B" }}
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
            How We Work
          </p>
          <h2
            className="text-4xl md:text-5xl font-heading font-bold"
            style={{ color: "#FAFAFA" }}
          >
            A process built
            <br />
            for results.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12 py-10 border-b"
              style={{ borderColor: "#27272A" }}
            >
              {/* Number */}
              <div className="flex items-start gap-4 md:flex-col md:gap-0">
                <span
                  className="text-5xl md:text-7xl font-heading font-bold leading-none"
                  style={{ color: "#27272A" }}
                >
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 justify-center">
                <h3
                  className="text-xl md:text-2xl font-heading font-semibold"
                  style={{ color: "#FAFAFA" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-base leading-relaxed max-w-xl"
                  style={{ color: "#71717A" }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          
            < a href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:gap-3"
            style={{ color: "#2563EB" }}
          >
            Start your project today
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Process