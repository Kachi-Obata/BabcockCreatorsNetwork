import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Babcock Creators Network",
    short_name: "BCN",
    description: "A system, not just a community.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F0E8",
    theme_color: "#003895",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
