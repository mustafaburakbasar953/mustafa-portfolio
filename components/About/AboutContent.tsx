"use client";

import { motion } from "framer-motion";
import {
  IconTargetArrow,
  IconMapPin,
  IconLanguage,
  IconRocket,
} from "@tabler/icons-react";

export default function AboutContent() {
  return (
    <div className="grid items-center gap-20 lg:grid-cols-2">
      {/* Sol Taraf */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400">
          About Me
        </span>

        <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
          Engineering Beyond
          <span className="block text-cyan-400">Theory.</span>
        </h2>

        <div className="mt-6 h-1 w-24 rounded-full bg-cyan-400" />

        <p className="mt-8 text-lg leading-8 text-slate-400">
          I enjoy transforming engineering ideas into practical,
          real-world solutions. My interest lies in creating systems that
          combine software, electronics and intelligent algorithms into a
          single reliable product.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          Every project is an opportunity to learn something new,
          experiment with emerging technologies and build solutions that
          are not only functional, but also efficient, scalable and ready
          for real-world applications.
        </p>
      </motion.div>

      {/* Sağ Taraf */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid gap-5 sm:grid-cols-2">

          <InfoCard
            icon={<IconMapPin size={26} />}
            title="Location"
            text="Konya / Ankara, Türkiye"
          />

          <InfoCard
            icon={<IconLanguage size={26} />}
            title="Languages"
            text="Turkish (Native) · English (B2)"
          />

          <InfoCard
            icon={<IconTargetArrow size={26} />}
            title="Career Goal"
            text="AI, Embedded Systems and Defense Technologies"
          />

          <InfoCard
            icon={<IconRocket size={26} />}
            title="Mindset"
            text="Always learning, always building."
          />

        </div>
      </motion.div>
    </div>
  );
}

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function InfoCard({ icon, title, text }: InfoCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/5">
      <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-400 transition duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        {text}
      </p>
    </div>
  );
}