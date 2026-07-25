"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { BadgeCheck, ExternalLink, X } from "lucide-react";
import { Certification } from "./types";

interface CertificationModalProps {
  certificate: Certification | null;
  open: boolean;
  onClose: () => void;
}

export default function CertificationModal({
  certificate,
  open,
  onClose,
}: CertificationModalProps) {
  return (
    <AnimatePresence>
      {open && certificate && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-xl p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{
              scale: 0.9,
              opacity: 0,
              y: 40,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
              y: 40,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              relative
              w-full
              max-w-6xl
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#030712]
            "
          >
            {/* Close */}

            <button
              onClick={onClose}
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-black/50
                text-white
                backdrop-blur-xl
                transition
                hover:bg-cyan-500/20
              "
            >
              <X size={20} />
            </button>

            {/* Certificate */}

            <div className="relative aspect-[1.414/1] w-full">

              <Image
                src={certificate.thumbnail}
                alt={certificate.title}
                fill
                className="object-contain"
              />

            </div>

            {/* Footer */}

            <div
              className="
                flex
                flex-col
                gap-6
                border-t
                border-white/10
                p-8
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              <div>

                <h2 className="text-3xl font-bold text-white">
                  {certificate.title}
                </h2>

                <p className="mt-2 text-gray-400">
                  {certificate.issuer}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">

                  {certificate.skills?.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-3
                        py-1
                        text-xs
                        text-gray-300
                      "
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex items-center gap-2 text-cyan-300">

                  <BadgeCheck size={18} />

                  Verified Certificate

                </div>

                <a
                  href={certificate.drive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-cyan-500
                    px-5
                    py-3
                    font-medium
                    text-black
                    transition
                    hover:scale-105
                  "
                >
                  Open

                  <ExternalLink size={18} />

                </a>

              </div>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}