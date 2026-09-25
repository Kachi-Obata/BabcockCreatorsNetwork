import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: on Next.js 16.3+, add `agentRules: false` here — that's when
  // `next dev` starts auto-regenerating AGENTS.md/CLAUDE.md if missing.
  // We're on 16.2.4, which doesn't do that, so deleting the files is
  // sufficient for now. See SECURITY.md.

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
