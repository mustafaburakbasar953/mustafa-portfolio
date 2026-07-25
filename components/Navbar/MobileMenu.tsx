"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
      >
        <IconMenu2 size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Arka plan */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Menü */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed right-0 top-0 z-50 flex h-screen w-72 flex-col border-l border-white/10 bg-[#030712]/95 p-6 backdrop-blur-xl"
            >
              <div className="mb-10 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Menu</h2>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-slate-300 hover:bg-white/10"
                >
                  <IconX size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg text-slate-300 transition hover:text-cyan-400"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-auto">
                <a
                  href="/CV.pdf"
                  className="flex w-full items-center justify-center rounded-xl bg-cyan-400 py-3 font-semibold text-slate-900 transition hover:bg-cyan-300"
                >
                  Download CV
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}