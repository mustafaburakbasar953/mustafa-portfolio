"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative flex items-center justify-center"
    >
      {/* Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Dönen halka */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="absolute h-[360px] w-[360px] rounded-full border border-cyan-400/40 border-dashed"
      />

      {/* Fotoğraf */}
      <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full border-4 border-cyan-400/40 bg-slate-900 shadow-[0_0_60px_rgba(34,211,238,0.35)]">
        <Image
          src="/profile.jpg"
          alt="Mustafa Burak Başar"
          fill
          priority
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}