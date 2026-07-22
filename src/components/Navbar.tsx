import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import logoLight from "../assets/trilot dark mode2.png";
import logoDark from "../assets/T-bg-image.png";

const links = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
];

const Navbar = ({ onContactClick }: { onContactClick: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6"
      >
        <div
          className={`flex items-center justify-between gap-8 px-6 py-3 rounded-full border transition-all duration-500 w-full max-w-3xl ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl border-border shadow-lg shadow-black/5"
              : "bg-dark/60 backdrop-blur-xl border-white/10"
          }`}
        >
          {/* Logo */}
          <a href="#" className="shrink-0">
            <img
              src={scrolled ? logoDark : logoLight}
              alt="Trilot Technologies"
              className="h-13 w-auto"
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm transition-colors duration-300 hover:text-accent ${
                    scrolled ? "text-text-muted" : "text-white/70"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              onClick={onContactClick}
              href="#contact"
              className={`hidden md:block text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-accent text-white hover:bg-accent-dark"
                  : "bg-white text-dark hover:bg-white/90"
              }`}
            >
              Get Started
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden transition-colors ${
                scrolled ? "text-text-primary" : "text-white"
              }`}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-6 right-6 bg-white/90 backdrop-blur-xl border border-border rounded-2xl shadow-xl p-4 flex flex-col gap-2"
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-text-muted hover:text-accent text-sm px-4 py-2 rounded-xl hover:bg-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-accent text-white text-sm px-4 py-2 rounded-xl text-center hover:bg-accent-dark transition-colors mt-2"
              >
                Get Started
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Navbar;
