
"use client";

import { motion } from "framer-motion";

export default function SkillsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      {/* Section Tag */}
      <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium tracking-wide text-cyan-400">
        Skills
      </span>

      {/* Title */}
      <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
        Technologies I Use
        <span className="block text-cyan-400">
          to Build Intelligent Systems
        </span>
      </h2>

      {/* Divider */}
      <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-cyan-400" />

      {/* Description */}
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
        From embedded software and artificial intelligence to renewable
        energy and modern development tools, these are the technologies
        I use to design reliable, scalable, and real-world engineering
        solutions.
      </p>
    </motion.div>
  );
}