"use client";

import SkillsHeader from "./SkillsHeader";
import SkillsGrid from "./SkillsGrid";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <SkillsHeader />

      <div className="mt-20">
        <SkillsGrid />
      </div>
    </section>
  );
}