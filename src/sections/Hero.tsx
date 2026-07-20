import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const rotatingWords = [
  "restaurants.",
  "barbershops.",
  "real estate.",
  "startups.",
  "businesses.",
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#09090B" }}
    >
      {/* Cursor glow */}
      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none blur-3xl opacity-20"
        style={{
          backgroundColor: "#2563EB",
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
        animate={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
      {/* Blue glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#2563EB" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8 pt-24 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs uppercase tracking-widest"
          style={{
            borderColor: "rgba(37, 99, 235, 0.3)",
            backgroundColor: "rgba(37, 99, 235, 0.08)",
            color: "#60A5FA",
          }}
        >
          Designed for Business Growth.
        </motion.div>

        {/* Headline */}
        <div className="flex flex-col items-center gap-4">
          {/* Instead of y: "100%" use opacity + y */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
            style={{ color: "#FAFAFA" }}
          >
            Your Business,
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
            style={{ color: "#2563EB" }}
          >
            Elevated Online.
          </motion.h1>

          {/* Rotating words line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-3 text-3xl md:text-2xl font-heading"
            style={{ color: "#52525B" }}
          >
            <span>for</span>
            <div className="relative h-8   w-40 text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute"
                  style={{ color: "#FAFAFA" }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-base leading-relaxed max-w-xl"
          style={{ color: "#71717A" }}
        >
          We partner with ambitious businesses to create strategic digital
          experiences that inspire trust and drive measurable growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <motion.a
            href="https://wa.me/2348149798764?text=Hi%20Trilot%2C%20I%27d%20like%20to%20start%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium text-white text-center"
            style={{ backgroundColor: "#2563EB" }}
          >
            Start a Project →
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium border text-center"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              color: "#A1A1AA",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            View Our Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
