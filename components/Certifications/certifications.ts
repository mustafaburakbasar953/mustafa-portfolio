export type Certification = {
  id: number;
  title: string;
  issuer: string;
  category: string;
  logo: string;
  url: string;
};

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Machine Learning with Python",
    issuer: "BTK Academy",
    category: "AI",
    logo: "/certifications/logos/btk.png",
    url: "#",
  },
  {
    id: 2,
    title: "STM32 Embedded Software Development",
    issuer: "BTK Academy",
    category: "Embedded",
    logo: "/certifications/logos/btk.png",
    url: "#",
  },
  {
    id: 3,
    title: "Artificial Intelligence Training",
    issuer: "İş Bankası",
    category: "AI",
    logo: "/certifications/logos/isbank.png",
    url: "#",
  },
  {
    id: 4,
    title: "Photovoltaic Power Systems",
    issuer: "IEEE Ege University Student Branch",
    category: "Energy",
    logo: "/certifications/logos/ieee.png",
    url: "#",
  },
];