"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { Certification } from "./types";

interface FeaturedCertificatesProps {
  certificates: Certification[];
}

export default function FeaturedCertificates({
  certificates,
}: FeaturedCertificatesProps) {
  const featured = certificates.filter((item) => item.featured);

  return (
    <section className="space-y-8">
      <div>
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
          Featured
        </p>

        <h2 className="mt-2 text-4xl font-bold text-white">
          Highlighted Certifications
        </h2>

        <p className="mt-3 max-w-2xl text-gray-400">
          A selection of certifications that best represent my expertise in
          Artificial Intelligence, Embedded Systems, Aerospace and Energy.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {featured.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >
            <Link
              href={certificate.drive}
              target="_blank"
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
            >
              {/* Image */}

              <div className="relative h-[320px] overflow-hidden">

                <Image
                  src={certificate.thumbnail}
                  alt={certificate.title}
                  fill
                  className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                  "
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Badge */}

                <div
                  className="
                  absolute
                  left-6
                  top-6
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  px-4
                  py-2
                  text-sm
                  text-cyan-300
                  backdrop-blur-xl
                "
                >
                  Featured
                </div>
              </div>

              {/* Content */}

              <div className="space-y-5 p-7">

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      {certificate.title}
                    </h3>

                    <p className="mt-2 text-gray-400">
                      {certificate.issuer}
                    </p>

                  </div>

                  <ArrowUpRight
                    className="
                    text-cyan-300
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    "
                  />

                </div>

                <div className="flex flex-wrap gap-2">

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

                <div className="flex items-center justify-between border-t border-white/10 pt-5">

                  <div className="flex items-center gap-2">

                    <BadgeCheck
                      size={18}
                      className="text-cyan-400"
                    />

                    <span className="text-sm text-gray-300">
                      Verified Certificate
                    </span>

                  </div>

                  <span
                    className="
                    rounded-full
                    bg-cyan-400/10
                    px-4
                    py-2
                    text-sm
                    text-cyan-300
                  "
                  >
                    {certificate.category}
                  </span>

                </div>

              </div>

            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}