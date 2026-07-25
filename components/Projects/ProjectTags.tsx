"use client";

import { motion } from "framer-motion";

type ProjectTagsProps = {
  tags: string[];
};

export default function ProjectTags({
  tags,
}: ProjectTagsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag, index) => (
        <motion.span
          key={tag}
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.05,
            duration: 0.3,
          }}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-4
            py-2
            text-sm
            font-medium
            text-slate-300
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-cyan-400/40
            hover:bg-cyan-400/10
            hover:text-white
          "
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
}