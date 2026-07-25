"use client";

import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    id: 1,
    company: "Kalyon Energy",
    position: "SCADA Engineering Intern",
    duration: "Jul 2026 – Sep 2026",
    location: "Karapınar, Konya",
    logo: "/experience/kalyon.jpg",
    cover: "/experience/kalyon-cover.jpeg",
    technologies: [
      "SCADA",
      "PLC",
      "PV Systems",
      "TEİAŞ",
      "Monitoring",
    ],
    description:
      "Worked on monitoring and operation of one of Europe's largest photovoltaic power plants. Participated in SCADA monitoring, inverter analysis, fault detection, preventive maintenance, and TEİAŞ integration processes.",
  },

  {
    id: 2,
    company: "İnciraltı Teknofest Team",
    position: "Autonomous Navigation Developer",
    duration: "2025 – Present",
    location: "İzmir, Türkiye",
    logo: "/experience/inciraltı.png",
    cover: "/experience/ika-cover.png",
    technologies: [
      "YOLOv8",
      "Jetson Nano",
      "Pixhawk",
      "Python",
      "OpenCV",
      "MAVLink",
    ],
    description:
      "Developed autonomous navigation and computer vision algorithms for an unmanned ground vehicle. Integrated embedded systems, AI-based perception, and autonomous control modules for Teknofest competitions.",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-7xl">
      {/* Timeline */}
      <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-cyan-400/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-20">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}