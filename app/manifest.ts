import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mustafa Burak Başar Portfolio",
    short_name: "Mustafa Portfolio",

    description:
      "Electrical & Electronics Engineering Portfolio",

    start_url: "/",

    display: "standalone",

    background_color: "#030712",

    theme_color: "#030712",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}