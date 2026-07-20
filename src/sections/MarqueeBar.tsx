import { motion } from "motion/react"

const items = [
  "Web Design", "Landing Pages", "Visual Identity",
  "SEO & Performance", "Maintenance & Support",
  "Web Design", "Landing Pages", "Visual Identity",
  "SEO & Performance", "Maintenance & Support",
]

const Marquee = () => {
  return (
    <div
      className="py-5 overflow-hidden border-y"
      style={{ backgroundColor: "#09090B", borderColor: "#27272A" }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-8 whitespace-nowrap"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-8"
          >
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "#52525B" }}
            >
              {item}
            </span>
            <span style={{ color: "#27272A" }}>✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee