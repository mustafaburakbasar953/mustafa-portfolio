"use client";

import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300 backdrop-blur-md">
        Contact
      </span>

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
        Let's Build Something{" "}
        <span className="text-cyan-400">Amazing</span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
        I'm always interested in discussing embedded systems, artificial
        intelligence, autonomous systems, renewable energy, and innovative
        engineering projects. Feel free to reach out for internships,
        collaborations, research opportunities, or just to say hello.
      </p>
    </motion.div>
  );
}