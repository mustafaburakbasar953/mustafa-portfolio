"use client";

import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconMail,
  IconArrowUpRight,
} from "@tabler/icons-react";

const socialLinks = [
  {
    title: "GitHub",
    subtitle: "Open Source Projects",
    href: "https://github.com/mustafaburakbasar953",
    icon: IconBrandGithub,
  },
  {
    title: "LinkedIn",
    subtitle: "Professional Profile",
    href: "https://www.linkedin.com/in/mustafa-burak-ba%C5%9Far",
    icon: IconBrandLinkedin,
  },
  {
    
    title: "Resume",
    subtitle: "Download CV",
    href: "/CV.pdf",
    icon: IconFileCv,
  },
  {
    title: "Email",
    subtitle: "Get In Touch",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=mustafaburakbasar953@gmail.com", // kendi mailini yaz
    icon: IconMail,
  },
];

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20"
    >
      <h3 className="mb-8 text-center text-2xl font-bold text-white">
        Connect With Me
      </h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {socialLinks.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(34,211,238,.15)]"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-400">
                  <Icon size={28} />
                </div>

                <IconArrowUpRight
                  size={20}
                  className="text-gray-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-400"
                />
              </div>

              <h4 className="mt-6 text-xl font-semibold text-white">
                {item.title}
              </h4>

              <p className="mt-2 text-gray-400">
                {item.subtitle}
              </p>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}