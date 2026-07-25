"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import type { Certification } from "./types";

interface Props {
  certification: Certification;
}

export default function CertificationCard({ certification }: Props) {
  return (
    <div className="group relative h-[430px] w-full [perspective:2000px]">

      <motion.div
        whileHover={{ rotateY: 180 }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >

        {/* ================= FRONT ================= */}

        <div
          className="
          absolute inset-0

          rounded-3xl
          border border-white/10

          bg-white/[0.04]
          backdrop-blur-xl

          overflow-hidden

          [backface-visibility:hidden]
        "
        >
          {/* Glow */}

          <div
            className="
            absolute
            inset-0

            opacity-0
            group-hover:opacity-100

            transition

            bg-gradient-to-br
            from-cyan-500/10
            via-transparent
            to-transparent
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

            <div className="mt-7">

              <h3 className="text-2xl font-bold leading-tight text-white">
                {certification.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {certification.issuer}
              </p>

            </div>

            <div className="mt-5">

              <span
                className="
                rounded-full

                border border-cyan-400/20

                bg-cyan-400/10

                px-3

                py-1

                text-sm

                text-cyan-300
              "
              >
                {certification.category}
              </span>

            </div>

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
                "
                >
                  {skill}
                </span>

              ))}

            </div>

            <div className="mt-auto flex items-center justify-between">

              <div className="flex items-center gap-2">

                <BadgeCheck
                  className="text-cyan-400"
                  size={18}
                />

                <span className="text-sm text-gray-300">
                  Verified Certificate
                </span>

              </div>

              <ExternalLink
                size={18}
                className="text-cyan-300"
              />

            </div>

          </div>
        </div>

        {/* ================= BACK ================= */}

        <Link
          href={certification.drive}
          target="_blank"
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

            via-black/20

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

            bg-black/30

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

                  Verified Certificate

                </div>

              </div>

              <ExternalLink
                className="text-cyan-300"
                size={22}
              />

            </div>

          </div>

        </Link>

      </motion.div>

    </div>
  );
}