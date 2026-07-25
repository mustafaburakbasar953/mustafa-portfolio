"use client";

import { motion } from "framer-motion";
import {
  IconMail,
  IconMapPin,
  IconSchool,
  IconBriefcase,
} from "@tabler/icons-react";

const contactItems = [
  {
    icon: IconMail,
    title: "Email",
    value: "https://mail.google.com/mail/?view=cm&fs=1&to=mustafaburakbasar953@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=mustafaburakbasar953@gmail.com",
  },
  {
    icon: IconMapPin,
    title: "Location",
    value: "Konya, Türkiye",
  },
  {
    icon: IconSchool,
    title: "Education",
    value: "Electrical & Electronics Engineering Student",
    sub: "İzmir Democracy University",
  },
  {
    icon: IconBriefcase,
    title: "Available For",
    value: "Internship • Research • Collaboration",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(34,211,238,.15)]"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                <Icon size={26} />
              </div>

              <div className="flex-1">
                <h3 className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  {item.title}
                </h3>

                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block break-all text-lg font-semibold text-white transition-colors duration-300 hover:text-cyan-400"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-semibold text-white">
                    {item.value}
                  </p>
                )}

                {item.sub && (
                  <p className="mt-1 text-sm text-gray-400">
                    {item.sub}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}