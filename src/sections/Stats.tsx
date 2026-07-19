import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: 3, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "On-time Delivery" },
  { value: 5, suffix: "★", label: "Client Rating" },
  { value: 48, suffix: "hr", label: "Avg. Turnaround" },
];

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section
      id="hero"
      className="relative h-70 flex items-center justify-center overflow-hidden py-6 "
      style={{ backgroundColor: "#09090B" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center py-8 px-4 border-r border-b md:border-b-0 last:border-r-0"
              style={{ borderColor: "#27272A" }}
            >
              <span
                className="text-4xl md:text-5xl font-heading font-bold mb-2"
                style={{ color: "#FAFAFA" }}
              >
                <CountUp value={stat.value} suffix={stat.suffix} />
              </span>
              <span
                className="text-xs uppercase tracking-widest text-center"
                style={{ color: "#52525B" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
