import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import logoLight from "../assets/trilot dark mode 3.png"
import { IoIosMail } from "react-icons/io"
import { FaLocationDot } from "react-icons/fa6"

const Footer = () => {
  const links = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer style={{ backgroundColor: "#09090B", borderTop: "1px solid #27272A" }}>

      {/* Main footer */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-6">
            <img src={logoLight} alt="Trilot Technologies" className="h-24 w-50 scale-150 " />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#52525B" }}>
              Designed for Business Growth. Strategic websites and digital experiences that help businesses grow.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="transition-colors hover:text-white" style={{ color: "#52525B" }}>
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="transition-colors hover:text-white" style={{ color: "#52525B" }}>
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="transition-colors hover:text-white" style={{ color: "#52525B" }}>
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2 — Links */}
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest" style={{ color: "#3F3F46" }}>
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.name}>
                  
                    <a href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#71717A" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest" style={{ color: "#3F3F46" }}>
              Get In Touch
            </p>
            <div className="flex flex-col gap-3">
              
               <a href="mailto:hello@trilot.tech"
                className="text-sm transition-colors hover:text-white flex items-center gap-3"
                style={{ color: "#71717A" }}
              >
                <IoIosMail className="scale-150"/> hello@trilot.tech
              </a>
              
                < a href="https://wa.me/2348149798764"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors hover:text-white flex gap-3 items-center"
                style={{ color: "#71717A" }}
              >
               <FaWhatsapp className="scale-150"/> WhatsApp
              </a>
              <p className="text-sm flex gap-3 items-center" style={{ color: "#71717A" }}>
                <FaLocationDot className="scale-150"/> Lagos, Nigeria
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #27272A" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#3F3F46" }}>
            © {new Date().getFullYear()} Trilot Technologies. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#3F3F46" }}>
            Designed for Business Growth.
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer