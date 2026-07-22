import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, ArrowRight } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    service: "",
    budget: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hi Trilot, I'd like to start a project.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0ABusiness: ${formData.business}%0AService: ${formData.service}%0ABudget: ${formData.budget}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/2348149798764?text=${message}`, "_blank")
    setSubmitted(true)
  }

  const inputClass = "w-full px-4 py-3 text-sm rounded-xl border outline-none transition-all duration-300 focus:border-accent"

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-60 backdrop-blur-sm"
            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-70 flex items-center justify-center p-4"
          >
            <div
              className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl p-8"
              style={{ backgroundColor: "#FAFAFA" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p
                    className="text-xs uppercase tracking-widest mb-2"
                    style={{ color: "#2563EB" }}
                  >
                    Let's Talk
                  </p>
                  <h2
                    className="text-2xl font-heading font-bold"
                    style={{ color: "#09090B" }}
                  >
                    Start a Project
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full transition-colors hover:bg-gray-100"
                  style={{ color: "#71717A" }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center text-center gap-4 py-8"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                    style={{ backgroundColor: "#EFF6FF" }}
                  >
                    ✓
                  </div>
                  <h3
                    className="text-xl font-heading font-bold"
                    style={{ color: "#09090B" }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#71717A" }}
                  >
                    We've opened WhatsApp with your details. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); onClose() }}
                    className="px-6 py-3 rounded-full text-sm font-medium text-white mt-2"
                    style={{ backgroundColor: "#2563EB" }}
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest" style={{ color: "#A1A1AA" }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className={inputClass}
                        style={{ borderColor: "#E4E4E7", backgroundColor: "#FFFFFF", color: "#09090B" }}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest" style={{ color: "#A1A1AA" }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className={inputClass}
                        style={{ borderColor: "#E4E4E7", backgroundColor: "#FFFFFF", color: "#09090B" }}
                      />
                    </div>
                  </div>

                  {/* Business */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest" style={{ color: "#A1A1AA" }}>
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Your business name"
                      className={inputClass}
                      style={{ borderColor: "#E4E4E7", backgroundColor: "#FFFFFF", color: "#09090B" }}
                    />
                  </div>

                  {/* Service */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest" style={{ color: "#A1A1AA" }}>
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      style={{ borderColor: "#E4E4E7", backgroundColor: "#FFFFFF", color: formData.service ? "#09090B" : "#A1A1AA" }}
                    >
                      <option value="">Select a service</option>
                      <option value="Web Design & Development">Web Design & Development</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="Visual Identity">Visual Identity</option>
                      <option value="SEO & Performance">SEO & Performance</option>
                      <option value="Maintenance & Support">Maintenance & Support</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest" style={{ color: "#A1A1AA" }}>
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ borderColor: "#E4E4E7", backgroundColor: "#FFFFFF", color: formData.budget ? "#09090B" : "#A1A1AA" }}
                    >
                      <option value="">Select budget range</option>
                      <option value="Under ₦100,000">Under ₦100,000</option>
                      <option value="₦100,000 - ₦300,000">₦100,000 - ₦300,000</option>
                      <option value="₦300,000 - ₦500,000">₦300,000 - ₦500,000</option>
                      <option value="₦500,000+">₦500,000+</option>
                      <option value="Let's discuss">Let's discuss</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest" style={{ color: "#A1A1AA" }}>
                      Tell us about your project
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe what you need..."
                      rows={4}
                      className={inputClass + " resize-none"}
                      style={{ borderColor: "#E4E4E7", backgroundColor: "#FFFFFF", color: "#09090B" }}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-sm font-medium text-white mt-2"
                    style={{ backgroundColor: "#2563EB" }}
                  >
                    Send via WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <p className="text-xs text-center" style={{ color: "#A1A1AA" }}>
                    This will open WhatsApp with your details pre-filled.
                  </p>

                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ContactModal