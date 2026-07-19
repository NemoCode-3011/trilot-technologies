import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

const CTA = () => {
  return (
    <section
      id="contact"
      className="py-32"
      style={{ backgroundColor: "#09090B" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-8"
        >
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: "#2563EB" }}
          >
            Let's Work Together
          </p>
          <h2
            className="text-4xl md:text-6xl font-heading font-bold max-w-3xl leading-tight"
            style={{ color: "#FAFAFA" }}
          >
            Ready to elevate your business online?
          </h2>
          <p
            className="text-base max-w-lg leading-relaxed"
            style={{ color: "#71717A" }}
          >
            Tell us about your project and we'll get back to you within 24 hours. No commitment, no pressure — just an honest conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.a
              href="mailto:hello@trilot.tech"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-white transition-all duration-300"
              style={{ backgroundColor: "#2563EB" }}
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://wa.me/2348149798764"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium border transition-all duration-300"
              style={{
                borderColor: "#27272A",
                color: "#A1A1AA",
                backgroundColor: "transparent"
              }}
            >
              WhatsApp Us
            </motion.a>
          </div>

          <p
            className="text-xs"
            style={{ color: "#3F3F46" }}
          >
            We typically respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA