"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import SkillBadge from "./SkillBadge";

type SkillCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  skills: string[];
};

export default function SkillCard({
  icon,
  title,
  description,
  skills,
}: SkillCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-cyan-400/10
          blur-3xl
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          z-10
          inline-flex
          rounded-2xl
          bg-cyan-400/10
          p-4
          text-cyan-400
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="relative z-10 mt-8 text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-4 leading-7 text-slate-400">
        {description}
      </p>

      {/* Divider */}
      <div className="relative z-10 my-8 h-px bg-white/10" />

      {/* Badges */}
      <div className="relative z-10 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>
    </motion.article>
  );
}