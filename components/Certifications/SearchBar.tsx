"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <Search
        size={20}
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          text-gray-400
          pointer-events-none
        "
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search certificates..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-14
          w-full
          rounded-2xl

          border
          border-white/10

          bg-white/5

          pl-14
          pr-14

          text-white
          placeholder:text-gray-500

          backdrop-blur-xl

          outline-none

          transition-all
          duration-300

          focus:border-cyan-400/40
          focus:bg-white/[0.08]
          focus:shadow-[0_0_30px_rgba(34,211,238,.15)]
        "
      />

      {/* Clear Button */}
      <AnimatePresence>
        {value && (
          <motion.button
            type="button"
            onClick={() => onChange("")}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2

              flex
              h-8
              w-8
              items-center
              justify-center

              rounded-full

              bg-white/10
              text-gray-300

              transition-colors
              hover:bg-cyan-500/20
              hover:text-cyan-300
            "
          >
            <X size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}