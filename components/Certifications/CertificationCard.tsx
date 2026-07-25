"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import type { Certification } from "./types";

interface Props {
  certification: Certification;
}

export default function CertificationCard({
  certification,
}: Props) {
  const [flipped, setFlipped] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const touch =
      window.matchMedia("(hover: none)").matches ||
      "ontouchstart" in window;

    setIsTouchDevice(touch);
  }, []);

  const handleCardClick = () => {
    if (isTouchDevice) {
      setFlipped((prev) => !prev);
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (isTouchDevice && !flipped) {
      e.preventDefault();
      setFlipped(true);
    }
  };

  return (
    <div className="group relative h-[390px] sm:h-[430px] w-full [perspective:2000px]">
      <motion.div
        animate={{
          rotateY: flipped ? 180 : 0,
        }}
        whileHover={
          !isTouchDevice
            ? {
                rotateY: 180,
              }
            : undefined
        }
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={handleCardClick}
        className="relative h-full w-full cursor-pointer [transform-style:preserve-3d]"
      >
        {/* ================= FRONT ================= */}

        <div
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            [backface-visibility:hidden]
          "
        >
          {/* Glow */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-cyan-500/10
              via-transparent
              to-transparent
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          <div className="relative z-10 flex h-full flex-col p-7">
            {/* Logo */}

            <div className="relative h-16 w-16 rounded-xl border border-white/10 bg-white/5">
              <Image
                src={certification.logo}
                alt={certification.issuer}
                fill
                className="object-contain p-3"
              />
            </div>

            {/* Title */}

            <div className="mt-7">
              <h3 className="text-2xl font-bold leading-tight text-white">
                {certification.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {certification.issuer}
              </p>
            </div>

            {/* Category */}
                        <div className="mt-5">
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  px-3
                  py-1
                  text-sm
                  font-medium
                  text-cyan-300
                "
              >
                {certification.category}
              </span>
            </div>

            {/* Skills */}

            <div className="mt-6 flex flex-wrap gap-2">
              {certification.skills?.map((skill) => (
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
                    transition-colors
                    duration-300
                    hover:border-cyan-400/30
                    hover:text-cyan-300
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Footer */}

            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BadgeCheck
                  size={18}
                  className="text-cyan-400"
                />

                <span className="text-sm text-gray-300">
                  Verified Certificate
                </span>
              </div>

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:border-cyan-400/40
                  group-hover:bg-cyan-400/20
                "
              >
                <ExternalLink
                  size={18}
                  className="text-cyan-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= BACK ================= */}

        <Link
          href={certification.drive}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-3xl
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
          "
        >
          <Image
            src={certification.thumbnail}
            alt={certification.title}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/30
              to-transparent
            "
          />
                    {/* Glass Panel */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              border-t
              border-white/10
              bg-black/40
              backdrop-blur-xl
              p-5
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-white">
                  {certification.issuer}
                </h4>

                <div className="mt-2 flex items-center gap-2 text-sm text-gray-200">
                  <BadgeCheck
                    size={16}
                    className="text-cyan-400"
                  />

                  <span>Verified Certificate</span>
                </div>
              </div>

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:border-cyan-400/40
                  group-hover:bg-cyan-400/20
                "
              >
                <ExternalLink
                  size={22}
                  className="text-cyan-300"
                />
              </div>
            </div>

            <div className="mt-5">
              <div
                className="
                  rounded-xl
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  px-4
                  py-3
                  text-center
                  text-sm
                  font-medium
                  text-cyan-300
                "
              >
                {isTouchDevice
                  ? flipped
                    ? "Tap to open certificate"
                    : "Tap to flip card"
                  : "Hover to preview • Click to open"}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}