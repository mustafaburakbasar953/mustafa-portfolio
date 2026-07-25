"use client";

import { motion } from "framer-motion";
import {
  IconBrain,
  IconCpu,
  IconBolt,
  IconSchool,
} from "@tabler/icons-react";

const cards = [
  {
    icon: IconSchool,
    title: "Education",
    description:
      "Electrical & Electronics Engineering (100% English)",
    footer: "İzmir Democracy University",
  },
  {
    icon: IconBrain,
    title: "Artificial Intelligence",
    description:
      "Computer Vision • Deep Learning • Machine Learning",
    footer: "PyTorch • TensorFlow • OpenCV",
  },
  {
    icon: IconCpu,
    title: "Embedded Systems",
    description:
      "STM32 • ESP32 • Raspberry Pi • Pixhawk",
    footer: "Embedded C • Sensor Integration",
  },
  {
    icon: IconBolt,
    title: "Renewable Energy",
    description:
      "SCADA • PV Systems • Power Systems",
    footer: "Energy Monitoring & Automation",
  },
];

export default function AboutCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
            }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-400/20">
              <Icon size={30} />
            </div>

            <h3 className="text-xl font-bold text-white">
              {card.title}
            </h3>

            <p className="mt-4 min-h-[72px] text-sm leading-7 text-slate-400">
              {card.description}
            </p>

            <div className="mt-6 border-t border-white/10 pt-4 text-sm font-medium text-cyan-300">
              {card.footer}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}