"use client";

import { motion } from "framer-motion";
import { Category } from "./types";

interface CategoryFilterProps {
  selected: Category | "All";
  onSelect: (category: Category | "All") => void;
}

const categories: (Category | "All")[] = [
  "All",
  "Artificial Intelligence",
  "Embedded Systems",
  "Aerospace",
  "Energy",
  "Software",
  "CAD & Design",
  "Industry",
];

export default function CategoryFilter({
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div
      className="
        flex
        flex-wrap
        gap-3
      "
    >
      {categories.map((category) => {
        const active = selected === category;

        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className="
              relative
              overflow-hidden
              rounded-full
              px-5
              py-2.5
              text-sm
              font-medium
              transition-colors
            "
          >
            {active && (
              <motion.div
                layoutId="activeCategory"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="
                  absolute
                  inset-0
                  rounded-full

                  border
                  border-cyan-400/30

                  bg-cyan-400/15

                  shadow-[0_0_20px_rgba(34,211,238,.18)]
                "
              />
            )}

            {!active && (
              <div
                className="
                  absolute
                  inset-0
                  rounded-full

                  border
                  border-white/10

                  bg-white/5

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:border-cyan-400/20
                  hover:bg-white/10
                "
              />
            )}

            <span
              className={`
                relative z-10 whitespace-nowrap transition-colors
                ${
                  active
                    ? "text-cyan-300"
                    : "text-gray-300 group-hover:text-white"
                }
              `}
            >
              {category}
            </span>
          </button>
        );
      })}
    </div>
  );
}