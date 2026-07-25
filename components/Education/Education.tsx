"use client";

import EducationHeader from "./EducationHeader";
import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <EducationHeader />

      <div className="mt-20">
        <EducationCard />
      </div>
    </section>
  );
}