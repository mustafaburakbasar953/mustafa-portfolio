"use client";

import { motion } from "framer-motion";

export default function HeroScroll() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-3 text-slate-400">
        <span className="text-xs uppercase tracking-[0.35em]">
          Scroll
        </span>

        <div className="flex h-14 w-8 justify-center rounded-full border border-slate-600">
          <motion.div
            animate={{
              y: [4, 22, 4],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
            }}
            className="mt-2 h-3 w-3 rounded-full bg-cyan-400"
          />
        </div>
      </div>
    </motion.div>
  );
}