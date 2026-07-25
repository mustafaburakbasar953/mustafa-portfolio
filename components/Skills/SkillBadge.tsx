"use client";

import { motion } from "framer-motion";

type SkillBadgeProps = {
  name: string;
};

const badgeColors: Record<
  string,
  {
    border: string;
    text: string;
    bg: string;
  }
> = {
  // AI
  "PyTorch": {
    border: "border-red-400/30",
    text: "text-red-300",
    bg: "bg-red-400/10",
  },
  "TensorFlow": {
    border: "border-orange-400/30",
    text: "text-orange-300",
    bg: "bg-orange-400/10",
  },
  "OpenCV": {
    border: "border-sky-400/30",
    text: "text-sky-300",
    bg: "bg-sky-400/10",
  },
  "YOLOv8": {
    border: "border-violet-400/30",
    text: "text-violet-300",
    bg: "bg-violet-400/10",
  },
  "Scikit-Learn": {
    border: "border-amber-400/30",
    text: "text-amber-300",
    bg: "bg-amber-400/10",
  },

  // Languages
  "Python": {
    border: "border-yellow-400/30",
    text: "text-yellow-300",
    bg: "bg-yellow-400/10",
  },
  "C/C++": {
    border: "border-blue-400/30",
    text: "text-blue-300",
    bg: "bg-blue-400/10",
  },
  "Embedded C": {
    border: "border-blue-400/30",
    text: "text-blue-300",
    bg: "bg-blue-400/10",
  },

  // Embedded
  "STM32": {
    border: "border-emerald-400/30",
    text: "text-emerald-300",
    bg: "bg-emerald-400/10",
  },
  "ESP32": {
    border: "border-green-400/30",
    text: "text-green-300",
    bg: "bg-green-400/10",
  },
  "Arduino": {
    border: "border-teal-400/30",
    text: "text-teal-300",
    bg: "bg-teal-400/10",
  },
  "Raspberry Pi": {
    border: "border-pink-400/30",
    text: "text-pink-300",
    bg: "bg-pink-400/10",
  },
  "Pixhawk": {
    border: "border-cyan-400/30",
    text: "text-cyan-300",
    bg: "bg-cyan-400/10",
  },

  // Tools
  "Git": {
    border: "border-orange-500/30",
    text: "text-orange-300",
    bg: "bg-orange-500/10",
  },
  "GitHub": {
    border: "border-slate-400/30",
    text: "text-slate-300",
    bg: "bg-slate-400/10",
  },
  "Linux": {
    border: "border-yellow-500/30",
    text: "text-yellow-300",
    bg: "bg-yellow-500/10",
  },
  "MATLAB": {
    border: "border-blue-500/30",
    text: "text-blue-300",
    bg: "bg-blue-500/10",
  },
  "SolidWorks": {
    border: "border-red-500/30",
    text: "text-red-300",
    bg: "bg-red-500/10",
  },
  "AutoCAD": {
    border: "border-red-600/30",
    text: "text-red-300",
    bg: "bg-red-600/10",
  },

  // Energy
  "SCADA": {
    border: "border-lime-400/30",
    text: "text-lime-300",
    bg: "bg-lime-400/10",
  },
  "PV Systems": {
    border: "border-yellow-500/30",
    text: "text-yellow-300",
    bg: "bg-yellow-500/10",
  },
  "Power Systems": {
    border: "border-indigo-400/30",
    text: "text-indigo-300",
    bg: "bg-indigo-400/10",
  },
};

export default function SkillBadge({ name }: SkillBadgeProps) {
  const color = badgeColors[name] ?? {
    border: "border-white/10",
    text: "text-slate-300",
    bg: "bg-white/5",
  };

  return (
    <motion.span
      whileHover={{
        scale: 1.06,
        y: -2,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 20,
      }}
      className={`
        rounded-full
        border
        px-4
        py-2
        text-sm
        font-medium
        backdrop-blur-md
        transition-all
        duration-300
        ${color.border}
        ${color.text}
        ${color.bg}
      `}
    >
      {name}
    </motion.span>
  );
}