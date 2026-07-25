"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  IconCalendar,
  IconMapPin,
  IconSchool,
  IconBook,
} from "@tabler/icons-react";

const courses = [
  "Embedded Systems",
  "Artificial Intelligence",
  "Machine Learning",
  "Power Systems",
  "Control Systems",
  "Signals & Systems",
];

export default function EducationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid items-center gap-10 md:grid-cols-2"
    >
      {/* Card */}
      <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30">
        {/* Header */}
        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-cyan-500/10">
            <IconSchool size={34} className="text-cyan-400" />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">
              İzmir Demokrasi University
            </h3>

            <p className="mt-1 text-lg font-semibold text-cyan-400">
              B.Sc. Electrical & Electronics Engineering
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 flex flex-wrap gap-6 text-slate-400">
          <div className="flex items-center gap-2">
            <IconCalendar size={18} />
            <span>2022 – Expected 2027</span>
          </div>

          <div className="flex items-center gap-2">
            <IconMapPin size={18} />
            <span>İzmir, Türkiye</span>
          </div>
        </div>

        {/* GPA */}
        <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5">
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            CGPA
          </p>

          <h4 className="mt-2 text-4xl font-bold text-white">
            3.02 / 4.00
          </h4>
        </div>

        {/* Description */}
        <p className="mt-8 leading-8 text-slate-300">
          Studying Electrical and Electronics Engineering with a focus on
          embedded systems, artificial intelligence, autonomous systems,
          robotics, computer vision, and renewable energy technologies.
        </p>

        {/* Courses */}
        <div className="mt-10">
          <div className="mb-4 flex items-center gap-2">
            <IconBook size={20} className="text-cyan-400" />

            <h4 className="text-xl font-semibold text-white">
              Relevant Coursework
            </h4>
          </div>

          <div className="flex flex-wrap gap-3">
            {courses.map((course) => (
              <span
                key={course}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 transition duration-300 group-hover:border-cyan-400/40"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.35 }}
        className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
      >
        <Image
          src="/education/idu-campus.jpg"
          alt="Izmir Democracy University"
          width={900}
          height={700}
          className="h-[620px] w-full object-cover transition duration-700 hover:scale-105"
        />
      </motion.div>
    </motion.div>
  );
}