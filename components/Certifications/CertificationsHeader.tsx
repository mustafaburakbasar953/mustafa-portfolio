"use client";

import { motion } from "framer-motion";

export default function CertificationsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Certifications
      </p>

      <h2 className="text-5xl font-bold text-white">
        Professional Certifications
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
        Certifications completed in artificial intelligence, embedded systems,
        renewable energy, robotics, software development, and defense technologies.
      </p>
    </motion.div>
  );
}