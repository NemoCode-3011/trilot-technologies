import { motion } from "motion/react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import arcadia from "../../assets/arcadia.png";

const Arcadia = () => {
  return (
    <div style={{ backgroundColor: "#09090B", minHeight: "100vh" }}>
      {/* Back button */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-32 pb-8">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
          style={{ color: "#71717A" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <span
              className="text-xs uppercase tracking-widest px-3 py-1 rounded-full"
              style={{
                backgroundColor: "#18181B",
                color: "#71717A",
                border: "1px solid #27272A",
              }}
            >
              Web Application
            </span>
            <span className="text-xs" style={{ color: "#3F3F46" }}>
              2025
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-heading font-bold"
            style={{ color: "#FAFAFA" }}
          >
            Arcadia Homes
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "#71717A" }}
          >
            A full-stack real estate web application with role-based access
            control, property listings, agent dashboard and authentication.
          </p>

          <a
            href="https://arcadia-homes-wvni.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium w-fit"
            style={{ color: "#2563EB" }}
          >
            View Live Site
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Main image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-5xl mx-auto px-6 md:px-8 mb-24"
      >
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: "1px solid #27272A" }}
        >
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ backgroundColor: "#18181B", borderColor: "#27272A" }}
          >
            <div className="flex gap-1.5">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "#EF4444" }}
              />
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "#F59E0B" }}
              />
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "#22C55E" }}
              />
            </div>
            <div
              className="flex-1 mx-4 px-3 py-1 rounded text-xs text-center"
              style={{ backgroundColor: "#27272A", color: "#52525B" }}
            >
              arcadia-homes-wvni.vercel.app
            </div>
          </div>
          <img
            src={arcadia}
            alt="Arcadia Homes"
            className="w-full object-cover object-top"
          />
        </div>
      </motion.div>

      {/* Case study content */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Left — main content */}
          <div className="md:col-span-2 flex flex-col gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h2
                className="text-2xl font-heading font-bold"
                style={{ color: "#FAFAFA" }}
              >
                Overview
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#71717A" }}
              >
                Arcadia Homes is a full-stack real estate platform built as a
                portfolio project to demonstrate Trilot's capability beyond
                landing pages — into web applications with real backend
                functionality.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#71717A" }}
              >
                The platform serves two types of users — public visitors
                browsing property listings, and authenticated agents managing
                their listings through a protected dashboard.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h2
                className="text-2xl font-heading font-bold"
                style={{ color: "#FAFAFA" }}
              >
                The Challenge
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#71717A" }}
              >
                The core challenge was building a role-based access system that
                felt seamless — public users should never see the admin
                dashboard, and agents should only see their own data.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#71717A" }}
              >
                At the same time, the public-facing side needed to feel like a
                premium real estate brand — not a generic CRUD application.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h2
                className="text-2xl font-heading font-bold"
                style={{ color: "#FAFAFA" }}
              >
                The Solution
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#71717A" }}
              >
                We handled the full frontend architecture — React Router for
                protected routing, localStorage for session management, and a
                clean role-based UI that separates the public listings
                experience from the agent dashboard entirely. Unauthenticated
                users attempting to access protected routes are redirected
                automatically.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#71717A" }}
              >
                The backend is being developed separately by a dedicated backend
                engineer. The frontend is built API-ready — all data fetching is
                abstracted into service functions that will connect seamlessly
                to the live API once deployed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h2
                className="text-2xl font-heading font-bold"
                style={{ color: "#FAFAFA" }}
              >
                Key Features
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  "Role-based access control (Super Admin and Agent roles)",
                  "API-ready architecture with abstracted service functions",
                  "Protected routing with automatic redirect for unauthenticated users",
                  "Public property listings with filtering",
                  "Property detail pages with agent contact form",
                  "Agent dashboard for managing listings",
                  "Fully responsive across all screen sizes",
                  "Deployed to Vercel with environment variable management",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 py-3 border-b"
                    style={{ borderColor: "#27272A" }}
                  >
                    <span style={{ color: "#2563EB" }}>✦</span>
                    <span className="text-sm" style={{ color: "#A1A1AA" }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — sidebar */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 p-6 rounded-xl sticky top-32"
              style={{
                backgroundColor: "#18181B",
                border: "1px solid #27272A",
              }}
            >
              <h3
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: "#52525B" }}
              >
                Project Details
              </h3>
              {[
                { label: "Client", value: "Portfolio Project" },
                { label: "Type", value: "Web Application" },
                { label: "Year", value: "2025" },
                { label: "Timeline", value: "4 Weeks" },
                {
                  label: "Stack",
                  value: "React, TypeScript, Tailwind CSS, React Router, ExpressJS, PostgresSQL",
                },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "#3F3F46" }}
                  >
                    {item.label}
                  </span>
                  <span className="text-sm" style={{ color: "#A1A1AA" }}>
                    {item.value}
                  </span>
                </div>
              ))}

              <a
                href="https://arcadia-homes-wvni.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-white mt-2"
                style={{ backgroundColor: "#2563EB" }}
              >
                View Live Site
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to work */}
      <div style={{ borderTop: "1px solid #27272A" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-2"
              style={{ color: "#3F3F46" }}
            >
              All Projects
            </p>
            <h3
              className="text-2xl font-heading font-bold"
              style={{ color: "#FAFAFA" }}
            >
              View All Our Work
            </h3>
          </div>
          <Link
            to="/work"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border transition-all duration-300 hover:bg-white hover:text-dark"
            style={{ borderColor: "#27272A", color: "#A1A1AA" }}
          >
            Back to Work
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Arcadia;
