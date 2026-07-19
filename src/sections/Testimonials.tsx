import { motion } from "motion/react"

const testimonials = [
  {
    id: 1,
    quote: "Trilot delivered exactly what we needed — a website that actually represents our brand. Professional, fast, and they understood our vision from day one.",
    name: "Adewale A.",
    role: "Owner, De-Prime Barbers",
    rating: 5,
  },
  {
    id: 2,
    quote: "Working with Trilot was seamless. They took our idea for Oríta and turned it into something we're genuinely proud to show clients and partners.",
    name: "Chisom O.",
    role: "Founder, Oríta Fine Dining",
    rating: 5,
  },
  {
    id: 3,
    quote: "The Arcadia platform exceeded our expectations. Clean design, solid functionality, and they were always available when we had questions.",
    name: "Funmi A.",
    role: "CEO, Arcadia Homes",
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section
      id="testimonials"
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
            What Clients Say
          </p>
          <h2
            className="text-4xl md:text-5xl font-heading font-bold"
            style={{ color: "#FAFAFA" }}
          >
            Results speak
            <br />
            for themselves.
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 p-8 rounded-xl"
              style={{
                backgroundColor: "#18181B",
                border: "1px solid #27272A"
              }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={{ color: "#F59E0B" }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "#A1A1AA" }}
              >
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div
                className="flex flex-col gap-1 pt-4"
                style={{ borderTop: "1px solid #27272A" }}
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: "#FAFAFA" }}
                >
                  {testimonial.name}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "#52525B" }}
                >
                  {testimonial.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials