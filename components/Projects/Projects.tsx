"use client";

import ProjectsHeader from "./ProjectsHeader";
import ProjectsGrid from "./ProjectsGrid";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      <ProjectsHeader />

      <div className="mt-20">
        <ProjectsGrid />
      </div>
    </section>
  );
}