import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const values = [
  {
    title: "Clarity",
    description:
      "We ask the right questions, listen carefully, and make sure we understand exactly what you need before we build anything.",
  },
  {
    title: "Excellence",
    description:
      "We don't ship work we're not proud of. Every project we deliver is built to the highest standard — no shortcuts, no compromises.",
  },
  {
    title: "Reliability",
    description:
      "We say what we'll do and we do what we said. Deadlines are commitments, not suggestions.",
  },
  {
    title: "Partnership",
    description:
      "We're not interested in one-off projects. We want to understand your business, grow with you, and be the team you call first.",
  },
];

const About = () => {
  return (
    <section
      id="about"
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
            Who We Are
          </p>
          <h2
            className="text-4xl md:text-5xl font-heading font-bold max-w-2xl"
            style={{ color: "#09090B" }}
          >
            A small team that delivers big results.
          </h2>
        </motion.div>

        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p
              className="text-base leading-relaxed"
              style={{ color: "#71717A" }}
            >
              Trilot Technologies is a digital technology company based in
              Lagos, Nigeria. We partner with ambitious businesses to create
              strategic digital solutions that inspire trust, improve
              operations, and drive sustainable growth.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#71717A" }}
            >
              We work with a simple philosophy — understand the business first,
              build the solution second. Every decision we make is anchored in
              what will actually move the needle for your business, not what
              looks impressive in a portfolio.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3 w-fit"
              style={{ color: "#2563EB" }}
            >
              Work with us
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {[
              { value: "Lagos, Nigeria", label: "Based in" },
              { value: "2024", label: "Founded" },
              { value: "Nigeria & Beyond", label: "Clients We Serve" },
              { value: "3+ Live Projects", label: "Deployed" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between py-4 border-b"
                style={{ borderColor: "#E4E4E7" }}
              >
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "#A1A1AA" }}
                >
                  {item.label}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "#09090B" }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p
            className="text-xs uppercase tracking-widest mb-8"
            style={{ color: "#A1A1AA" }}
          >
            Our Values
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3 p-6 rounded-xl"
                style={{
                  backgroundColor: "#F4F4F5",
                  border: "1px solid #E4E4E7",
                }}
              >
                <h3
                  className="text-base font-heading font-semibold"
                  style={{ color: "#09090B" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#71717A" }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
