import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showTech, setShowTech] = useState(false);
  const fullText = "trilot";
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Start typing after T mark draws (1.2s)
    const typingStart = setTimeout(() => {
      let i = 0;
      intervalRef.current = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1));
          i++;
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
          // Show "technologies" after typing done
          setTimeout(() => setShowTech(true), 400);
        }
      }, 120);
    }, 1800);

    // Progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    // Hide after 4.8s
    const hide = setTimeout(() => {
      setIsVisible(false);
    }, 4800);

    return () => {
      clearTimeout(typingStart);
      clearTimeout(hide);
      clearInterval(progressInterval);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center"
          style={{ backgroundColor: "#09090B" }}
        >
          {/* Content */}
          <div className="flex flex-col items-center gap-10">
            {/* T mark image */}
            <motion.div
              className="w-32 h-32 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img
                src={logo3}
                alt="Trilot Technologies"
                className="w-full h-full object-contain scale-250"
                draggable={false}
              />
            </motion.div>
            {/* Wordmark */}
            <div className="flex flex-col items-center gap-1">
              {/* Typed text */}
              <div className="flex items-center gap-1">
                <span
                  className="text-5xl font-heading font-bold tracking-tight"
                  style={{ color: "#FAFAFA", fontFamily: "Syne, sans-serif" }}
                >
                  {typedText}
                </span>
                {/* Blinking cursor */}
                {typedText.length < fullText.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="text-4xl font-bold"
                    style={{ color: "#2563EB" }}
                  >
                    |
                  </motion.span>
                )}
              </div>

              {/* Technologies */}
              <AnimatePresence>
                {showTech && (
                  <motion.span
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-xs uppercase tracking-[0.4em]"
                    style={{
                      color: "#71717A",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    technologies
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Tagline */}
            <AnimatePresence>
              {showTech && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="text-xs"
                  style={{
                    color: "#52525B", // was #3F3F46 — one step lighter, still clearly secondary
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  Designed for Business Growth.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Progress bar */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ backgroundColor: "#27272A" }}
          >
            <motion.div
              className="h-full"
              style={{
                backgroundColor: "#2563EB",
                width: `${progress}%`,
                transition: "width 0.05s linear",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
