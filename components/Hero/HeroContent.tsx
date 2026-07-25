"use client";

import { motion } from "framer-motion";
import { IconArrowRight, IconDownload } from "@tabler/icons-react";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-start">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        className="mb-4 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
      >
        👋 Welcome to my portfolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .2 }}
        className="text-5xl font-black leading-tight md:text-7xl"
      >
        Mustafa
        <br />
        Burak Başar
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .35 }}
        className="mt-6 text-2xl font-semibold text-cyan-400"
      >
        Electrical & Electronics Engineer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .5 }}
        className="mt-8 max-w-xl text-lg leading-8 text-slate-400"
      >
        I develop intelligent engineering solutions by combining
        Artificial Intelligence, Embedded Systems, Computer Vision and
        Energy Technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .7 }}
        className="mt-12 flex flex-wrap gap-4"
      >
        <a
          href="/CV.pdf"
          className="flex items-center gap-2 rounded-full bg-cyan-500 px-7 py-4 font-semibold text-slate-900 transition hover:scale-105 hover:bg-cyan-400"
        >
          <IconDownload size={20} />
          Download CV
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full border border-slate-700 px-7 py-4 transition hover:border-cyan-400 hover:text-cyan-400"
        >
          Contact Me
          <IconArrowRight size={20} />
        </a>
      </motion.div>

    </div>
  );
}