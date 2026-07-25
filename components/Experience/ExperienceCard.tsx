"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconCalendar, IconMapPin } from "@tabler/icons-react";

type Experience = {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  logo: string;
  cover: string;
  technologies: string[];
  description: string;
};

type ExperienceCardProps = {
  experience: Experience;
  reverse?: boolean;
};

export default function ExperienceCard({
  experience,
  reverse = false,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: reverse ? 80 : -80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Timeline Dot */}
      <div className="absolute left-5 top-1/2 z-20 h-5 w-5 -translate-y-1/2 rounded-full border-4 border-slate-950 bg-cyan-400 md:left-1/2 md:-translate-x-1/2" />

      <div
        className={`flex flex-col items-center gap-10 md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Card */}
        <div className="ml-14 w-full md:ml-0 md:w-[46%]">
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30">
            {/* Header */}
            <div className="flex items-center gap-5">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white">
                <Image
                  src={experience.logo}
                  alt={experience.company}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  {experience.position}
                </h3>

                <p className="mt-1 text-lg font-semibold text-cyan-400">
                  {experience.company}
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <IconCalendar size={18} />
                <span>{experience.duration}</span>
              </div>

              <div className="flex items-center gap-2">
                <IconMapPin size={18} />
                <span>{experience.location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 leading-8 text-slate-300">
              {experience.description}
            </p>

            {/* Technologies */}
            <div className="mt-8 flex flex-wrap gap-3">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 transition-all duration-300 group-hover:border-cyan-400/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.35 }}
          className="hidden w-full md:block md:w-[46%]"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <Image
              src={experience.cover}
              alt={experience.company}
              width={900}
              height={600}
              className="h-[360px] w-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}