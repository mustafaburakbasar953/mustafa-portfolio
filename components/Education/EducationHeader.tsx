"use client";

import { motion } from "framer-motion";

export default function EducationHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Education
      </p>

      <h2 className="text-5xl font-bold text-white">
        Academic Background
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
        My academic journey in Electrical and Electronics Engineering,
        focusing on embedded systems, artificial intelligence, robotics,
        and renewable energy technologies.
      </p>
    </motion.div>
  );
}