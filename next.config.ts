import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Long-term cache for video and images in /public
        source: "/:file(.*\\.(?:mp4|webm|png|jpg|jpeg|svg|ico|webp))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
