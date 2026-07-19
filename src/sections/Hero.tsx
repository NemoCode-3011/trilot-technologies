import { useState, useEffect } from "react";
import { motion } from "motion/react";

const headline = ["Your Business,", "Elevated Online."];

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#09090B" }}
    >
      {/* Blue glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#2563EB" }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6 pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs uppercase tracking-widest "
          style={{
            borderColor: "rgba(37, 99, 235, 0.3)",
            backgroundColor: "rgba(37, 99, 235, 0.08)",
            color: "#60A5FA",
          }}
        >
          Designed for Business Growth.
        </motion.div>

        {/* Headline */}
        <div className="flex flex-col items-center gap-2">
          {headline.map((line, i) => (
            <div key={line}>
              <motion.h1
                initial={{ y: "100%" }}
                animate={mounted ? { y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.15,
                  ease: "easeOut",
                }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
                style={{
                  color: i === headline.length - 1 ? "#2563EB" : "#FAFAFA",
                }}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base leading-relaxed max-w-xl"
          style={{ color: "#71717A" }}
        >
          We partner with ambitious businesses to create strategic digital
          experiences that inspire trust and drive measurable growth.
        </motion.p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <motion.a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium text-white text-center"
            style={{ backgroundColor: "#2563EB" }}
          >
            Start a Project →
          </motion.a>
          <motion.a
            href="#portfolio"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium border text-center"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              color: "#A1A1AA",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            View Our Work
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
