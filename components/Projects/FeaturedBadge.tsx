"use client";

import { motion } from "framer-motion";
import { IconSparkles } from "@tabler/icons-react";

type FeaturedBadgeProps = {
  text?: string;
};

export default function FeaturedBadge({
  text = "Featured Project",
}: FeaturedBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35 }}
      whileHover={{
        scale: 1.05,
      }}
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-400/10
        px-4
        py-2
        backdrop-blur-md
      "
    >
      <motion.div
        animate={{
          rotate: [0, 12, -12, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <IconSparkles
          size={16}
          className="text-cyan-400"
        />
      </motion.div>

      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-400">
        {text}
      </span>
    </motion.div>
  );
}