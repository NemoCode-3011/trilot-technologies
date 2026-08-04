import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const headline = ["We Build Digital", "Experiences That", "Convert."];

const Hero = ({ onContactClick }: { onContactClick: () => void }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 5000);
    return () => clearTimeout(timer)
    setMounted(true);
    console.log(mounted);
  }, [mounted]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ backgroundColor: "#09090B" }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-75 blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: "#2563EB" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center gap-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 px-4 py-2 rounded-full border mt-10"
          style={{
            borderColor: "#27272A",
            backgroundColor: "rgba(255,255,255,0.02)",
          }}
        >
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: "#F59E0B", fontSize: "11px" }}>
                ★
              </span>
            ))}
          </div>
          <span className="text-xs" style={{ color: "#52525B" }}>
            Trusted by businesses across Nigeria
          </span>
        </motion.div>
        <div className="flex flex-col items-center gap-0">
          {headline.map((line, i) => (
            <div key={line} className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={mounted ? { y: 0 } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.2 + i * 0.12,
                  ease: "easeOut",
                }}
                className="font-heading font-bold leading-[0.95] tracking-tight"
                style={{
                  fontSize: "clamp(52px, 8.5vw, 130px)",
                  color: i === headline.length - 1 ? "#2563EB" : "#FAFAFA",
                }}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-base md:text-lg leading-relaxed max-w-xl"
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
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.button
            onClick={onContactClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 rounded-full text-sm font-medium text-white cursor-pointer"
            style={{ backgroundColor: "#2563EB" }}
          >
            Start a Project →
          </motion.button>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/work"
              className="px-8 py-3.5 rounded-full text-sm font-medium border block"
              style={{
                borderColor: "#27272A",
                color: "#A1A1AA",
                backgroundColor: "transparent",
              }}
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8"
          style={{ backgroundColor: "#27272A" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
