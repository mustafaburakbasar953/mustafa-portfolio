"use client";

import SkillCard from "./SkillCard";

import {
  IconBrain,
  IconCpu,
  IconCode,
  IconBolt,
} from "@tabler/icons-react";

export default function SkillsGrid() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <SkillCard
        icon={<IconBrain size={32} stroke={1.8} />}
        title="Artificial Intelligence"
        description="Designing intelligent systems with machine learning, deep learning, and computer vision to solve real-world engineering problems."
        skills={[
          "PyTorch",
          "TensorFlow",
          "Scikit-Learn",
          "OpenCV",
          "YOLOv8",
          "Computer Vision",
          "Deep Learning",
        ]}
      />

      <SkillCard
        icon={<IconCpu size={32} stroke={1.8} />}
        title="Embedded Systems"
        description="Developing reliable embedded solutions by integrating hardware, firmware, and communication protocols."
        skills={[
          "STM32",
          "ESP32",
          "Arduino",
          "Raspberry Pi",
          "Pixhawk",
          "Embedded C",
          "UART",
          "SPI",
          "I2C",
        ]}
      />

      <SkillCard
        icon={<IconCode size={32} stroke={1.8} />}
        title="Software & Tools"
        description="Building scalable applications using modern programming languages, development tools, and engineering software."
        skills={[
          "Python",
          "C/C++",
          "Git",
          "GitHub",
          "Linux",
          "MATLAB",
          "SolidWorks",
          "AutoCAD",
        ]}
      />

      <SkillCard
        icon={<IconBolt size={32} stroke={1.8} />}
        title="Energy Systems"
        description="Working with renewable energy technologies, monitoring systems, and power engineering applications."
        skills={[
          "SCADA",
          "PV Systems",
          "Power Systems",
          "Energy Monitoring",
          "Solar Energy",
        ]}
      />
    </div>
  );
}