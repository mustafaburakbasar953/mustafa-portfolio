"use client";

import { AnimatePresence, motion } from "framer-motion";
import CertificationCard from "./CertificationCard";
import { Certification, Category } from "./types";

interface CertificationsGridProps {
  certifications: Certification[];
  search: string;
  selectedCategory: Category | "All";
}

export default function CertificationsGrid({
  certifications,
  search,
  selectedCategory,
}: CertificationsGridProps) {
  const filteredCertificates = certifications.filter((certificate) => {
    const matchesSearch =
      certificate.title.toLowerCase().includes(search.toLowerCase()) ||
      certificate.issuer.toLowerCase().includes(search.toLowerCase()) ||
      certificate.skills?.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" ||
      certificate.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (filteredCertificates.length === 0) {
    return (
      <div className="flex h-72 items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/5">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white">
            No certificates found
          </h3>
          <p className="mt-2 text-gray-400">
            Try changing your search or category filter.
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      layout
      className="
        grid
        gap-8
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      <AnimatePresence mode="popLayout">
        {filteredCertificates.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            layout
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: -20,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.05,
            }}
          >
            <CertificationCard certification={certificate} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}