"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    featured: true,
    title: "Autonomous Unmanned Ground Vehicle",
    category: "Autonomous Systems",
    year: "2026",
    image: "/projects/ugv.png",
    description:
      "Developed an autonomous unmanned ground vehicle for the Teknofest competition by integrating computer vision, embedded systems, and autonomous navigation technologies.",
    tags: [
      "YOLOv8",
      "Jetson Nano",
      "Pixhawk",
      "Python",
      "OpenCV",
      "MAVLink",
    ],
    projectUrl:
      "https://drive.google.com/drive/folders/1XN74BpW_JHlGeBHHAjnsa1KRsZjHb8yL?usp=drive_link",
  },

  {
    id: 2,
    featured: false,
    title: "Multi-Label Lung Disease Detection",
    category: "Artificial Intelligence",
    year: "2025",
    image: "/projects/chestxray.png",
    description:
      "Deep learning application for detecting multiple thoracic diseases from chest X-ray images using DenseNet121 and PyTorch.",
    tags: [
      "PyTorch",
      "DenseNet121",
      "Medical AI",
      "OpenCV",
      "Python",
    ],
    projectUrl:
      "https://drive.google.com/drive/folders/1bvRoQr2KSAZzuBiwBYp_Vxz-bRrNM7iq?usp=drive_link",
  },

  {
    id: 3,
    featured: false,
    title: "Istanbul Public Transportation Optimization",
    category: "Machine Learning",
    year: "2025",
    image: "/projects/kmeans.png",
    description:
      "Optimized Istanbul public transportation using K-Means clustering and data-driven analysis.",
    tags: [
      "Python",
      "K-Means",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
    ],
    projectUrl:
      "https://drive.google.com/drive/folders/1qgH3eOFVwBnMqmRkrRxsmROZR4eDyKMS?usp=drive_link",
  },

  {
    id: 4,
    featured: false,
    title: "Hand Gesture Mouse Control",
    category: "Computer Vision",
    year: "2025",
    image: "/projects/gesture.png",
    description:
      "Real-time mouse control system using computer vision and MediaPipe hand tracking.",
    tags: [
      "Python",
      "MediaPipe",
      "OpenCV",
      "Computer Vision",
    ],
    projectUrl:
      "https://drive.google.com/drive/folders/1CzI-65oAxGSQ1WZAhlNI8TrEOhtXY6Ct?usp=drive_link",
  },

  {
    id: 5,
    featured: false,
    title: "4-Axis Robotic Arm",
    category: "Robotics",
    year: "2024",
    image: "/projects/robotarm.png",
    description:
      "Designed and developed a four-axis robotic arm with embedded control and automation capabilities.",
    tags: [
      "Arduino",
      "Embedded C",
      "Servo Motors",
      "Automation",
    ],
    projectUrl:
      "https://drive.google.com/drive/folders/1hIVZQK4ZHUtZl66RN5_GD77Bto5BXsga?usp=drive_link",
  },

  {
    id: 6,
    featured: false,
    title: "Autonomous Drone Platform",
    category: "UAV Systems",
    year: "2025",
    image: "/projects/drone.png",
    description:
      "Autonomous drone platform developed for agricultural monitoring and wildfire detection.",
    tags: [
      "Pixhawk",
      "Drone",
      "MAVSDK",
      "Telemetry",
      "Python",
    ],
    projectUrl:
      "https://drive.google.com/drive/folders/1bffrN4Kjr4Lstb6JxG8Rh57YZ5PnuPQJ?usp=drive_link",
  },

  {
    id: 7,
    featured: false,
    title: "Image Restoration with U-Net",
    category: "Deep Learning",
    year: "2025",
    image: "/projects/unet.png",
    description:
      "Image restoration using a U-Net architecture to remove noise and improve image quality.",
    tags: [
      "U-Net",
      "PyTorch",
      "Image Processing",
      "Deep Learning",
      "Python",
    ],
    projectUrl:
      "https://drive.google.com/drive/folders/1pC17Cpb6rPxWhOU0seoQreaN3uhUNVEr?usp=drive_link",
  },
];

export default function ProjectsGrid() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <div className="space-y-10">
      {featuredProject && (
        <ProjectCard project={featuredProject} />
      )}

      <div className="grid gap-8 md:grid-cols-2">
        {otherProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}