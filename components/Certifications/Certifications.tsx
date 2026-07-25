"use client";

import { useMemo, useState } from "react";

import { certifications } from "./data";
import { Category } from "./types";

import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import FeaturedCertificates from "./FeaturedCertificates";
import CertificationsGrid from "./CertificationsGrid";

export default function Certifications() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<Category | "All">("All");

  const filteredCertificates = useMemo(() => {
    return certifications.filter((certificate) => {
      const matchesSearch =
        certificate.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        certificate.issuer
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        certificate.skills?.some((skill) =>
          skill.toLowerCase().includes(search.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" ||
        certificate.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <section
      id="certifications"
      className="relative py-32"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
          absolute
          left-1/2
          top-0

          h-[550px]
          w-[550px]

          -translate-x-1/2

          rounded-full

          bg-cyan-500/10

          blur-[160px]
        "
        />

      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-16 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Certifications
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Professional Certificates
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Continuous learning is an essential part of my engineering journey.
            These certifications represent my progress in Artificial Intelligence,
            Embedded Systems, Aerospace, Energy Technologies and Software Development.
          </p>

        </div>

        {/* Featured */}

        <FeaturedCertificates
          certificates={certifications}
        />

        {/* Search + Filter */}

        <div className="mt-20 space-y-8">

          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <CategoryFilter
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

        </div>

        {/* Grid */}

        <div className="mt-14">

          <CertificationsGrid
            certifications={filteredCertificates}
            search=""
            selectedCategory="All"
          />

        </div>

      </div>
    </section>
  );
}