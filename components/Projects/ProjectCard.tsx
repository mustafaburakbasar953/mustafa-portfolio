"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import ProjectTags from "./ProjectTags";

interface Project {
  id: number;
  featured: boolean;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  projectUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.a
      href={project.projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Badges */}
        <div className="absolute left-5 top-5 flex gap-2">
          {project.featured && (
            <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-400 border border-cyan-400/30">
              ⭐ Featured
            </span>
          )}

          <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs text-slate-300 border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Year */}
        <span className="absolute bottom-5 right-5 rounded-full bg-slate-900/70 px-3 py-1 text-xs text-slate-300 border border-white/10">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
          {project.title}
        </h3>

        <p className="mt-4 text-slate-400 leading-7">
          {project.description}
        </p>

        <div className="mt-6">
          <ProjectTags tags={project.tags} />
        </div>

        <div className="mt-8 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 px-5 py-3 text-sm font-medium text-cyan-400 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-slate-950">
            Explore Project
            <IconArrowUpRight size={18} />
          </span>

          <IconArrowUpRight
            size={24}
            className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>
    </motion.a>
  );
}