"use client";

import { motion } from "framer-motion";

export default function ExperienceHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-20 text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Experience
      </p>

      <h2 className="text-4xl font-bold text-white md:text-5xl">
        Professional Journey
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
        My professional experiences in renewable energy,
        autonomous systems, embedded software, and
        artificial intelligence.
      </p>
    </motion.div>
  );
}