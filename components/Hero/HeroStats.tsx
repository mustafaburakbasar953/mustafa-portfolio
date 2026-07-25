"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "15+",
    label: "Projects",
  },
  {
    value: "20+",
    label: "Certificates",
  },
  {
    value: "2",
    label: "Internships",
  },
  {
    value: "3.02",
    label: "GPA",
  },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 mx-auto -mt-24 max-w-7xl px-6"
    >
      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
          >
            <h3 className="text-4xl font-bold text-cyan-400">
              {item.value}
            </h3>

            <p className="mt-2 text-slate-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}