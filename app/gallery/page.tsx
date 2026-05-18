"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

// ── Social icons ──────────────────────────────────────────────────────────────
const TikTokIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.15 8.15 0 004.77 1.52V7.03a4.85 4.85 0 01-1-.34z" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const GALLERY_SOCIALS = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@babcockcreators",
    Icon: TikTokIcon,
  },
  {
    label: "𝕏",
    href: "https://x.com/babcockcreators",
    Icon: XIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/babcockcreators",
    Icon: InstagramIcon,
  },
];

// ── Image sources ─────────────────────────────────────────────────────────────
// Group A: main event shoot (64 images)
const GROUP_A = [
  "babcock-creative-submit-11.jpg",
  "babcock-creative-submit-12.jpg",
  "babcock-creative-submit-120.jpg",
  "babcock-creative-submit-122.jpg",
  "babcock-creative-submit-124.jpg",
  "babcock-creative-submit-125.jpg",
  "babcock-creative-submit-127.jpg",
  "babcock-creative-submit-128.jpg",
  "babcock-creative-submit-129.jpg",
  "babcock-creative-submit-13.jpg",
  "babcock-creative-submit-132.jpg",
  "babcock-creative-submit-14.jpg",
  "babcock-creative-submit-15.jpg",
  "babcock-creative-submit-16.jpg",
  "babcock-creative-submit-19.jpg",
  "babcock-creative-submit-2.jpg",
  "babcock-creative-submit-21.jpg",
  "babcock-creative-submit-25.jpg",
  "babcock-creative-submit-26.jpg",
  "babcock-creative-submit-27.jpg",
  "babcock-creative-submit-29.jpg",
  "babcock-creative-submit-3.jpg",
  "babcock-creative-submit-32.jpg",
  "babcock-creative-submit-33.jpg",
  "babcock-creative-submit-35.jpg",
  "babcock-creative-submit-36.jpg",
  "babcock-creative-submit-37.jpg",
  "babcock-creative-submit-38.jpg",
  "babcock-creative-submit-4.jpg",
  "babcock-creative-submit-41.jpg",
  "babcock-creative-submit-43.jpg",
  "babcock-creative-submit-45.jpg",
  "babcock-creative-submit-47.jpg",
  "babcock-creative-submit-53.jpg",
  "babcock-creative-submit-54.jpg",
  "babcock-creative-submit-56.jpg",
  "babcock-creative-submit-59.jpg",
  "babcock-creative-submit-6.jpg",
  "babcock-creative-submit-61.jpg",
  "babcock-creative-submit-65.jpg",
  "babcock-creative-submit-67.jpg",
  "babcock-creative-submit-68.jpg",
  "babcock-creative-submit-69.jpg",
  "babcock-creative-submit-7.jpg",
  "babcock-creative-submit-70.jpg",
  "babcock-creative-submit-71.jpg",
  "babcock-creative-submit-74.jpg",
  "babcock-creative-submit-77.jpg",
  "babcock-creative-submit-8.jpg",
  "babcock-creative-submit-80.jpg",
  "babcock-creative-submit-81.jpg",
  "babcock-creative-submit-82.jpg",
  "babcock-creative-submit-83.jpg",
  "babcock-creative-submit-84.jpg",
  "babcock-creative-submit-85.jpg",
  "babcock-creative-submit-86.jpg",
  "babcock-creative-submit-87.jpg",
  "babcock-creative-submit-88.jpg",
  "babcock-creative-submit-89.jpg",
  "babcock-creative-submit-90.jpg",
  "babcock-creative-submit-91.jpg",
  "babcock-creative-submit-94.jpg",
  "babcock-creative-submit-97.jpg",
  "babcock-creative-submit.jpg",
];

// Group B: secondary shoot day (38 images)
const GROUP_B = [
  "img_3891.jpg",
  "img_3898.jpg",
  "img_3899.jpg",
  "img_3904.jpg",
  "img_3910.jpg",
  "img_3922.jpg",
  "img_3974.jpg",
  "img_3975.jpg",
  "img_3994.jpg",
  "img_3996.jpg",
  "img_4012.jpg",
  "img_4027.jpg",
  "img_4032.jpg",
  "img_4061.jpg",
  "img_4065.jpg",
  "img_4071.jpg",
  "img_4089.jpg",
  "img_4098.jpg",
  "img_4102.jpg",
  "img_4123.jpg",
  "img_4130.jpg",
  "img_4145.jpg",
  "img_4163.jpg",
  "img_4184.jpg",
  "img_4206.jpg",
  "img_4222.jpg",
  "img_4236.jpg",
  "img_4245.jpg",
  "img_4250.jpg",
  "img_4262.jpg",
  "img_4267.jpg",
  "img_4299.jpg",
  "img_4305.jpg",
  "img_4333.jpg",
  "img_4341.jpg",
  "img_4394.jpg",
  "img_4408.jpg",
  "img_4443.jpg",
];

// ── Seeded shuffle (deterministic but not alphabetical) ───────────────────────
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed >>> 0;
  for (let i = a.length - 1; i > 0; i--) {
    s = Math.imul(s ^ (s >>> 17), 0x45d9f3b) >>> 0;
    s = Math.imul(s ^ (s >>> 11), 0x7feb352d) >>> 0;
    s = (s ^ (s >>> 15)) >>> 0;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Interleave two arrays so neither clumps at one end
function interleave(a: string[], b: string[]): string[] {
  const out: string[] = [];
  let ai = 0;
  let bi = 0;
  while (ai < a.length || bi < b.length) {
    // ~2 from Group A for every 1 from Group B, matching the 64/38 ratio
    if (ai < a.length) out.push(a[ai++]);
    if (ai < a.length) out.push(a[ai++]);
    if (bi < b.length) out.push(b[bi++]);
  }
  return out;
}

const SHUFFLED_A = seededShuffle(GROUP_A, 42);
const SHUFFLED_B = seededShuffle(GROUP_B, 137);
const ALL_IMAGES = interleave(SHUFFLED_A, SHUFFLED_B); // 102 images, mixed

// Round-robin distribute into 4 columns
const COLUMNS: string[][] = ALL_IMAGES.reduce<string[][]>(
  (cols, img, i) => {
    cols[i % 4].push(img);
    return cols;
  },
  [[], [], [], []]
);

// Each column: speed (s) and scroll direction
const COL_CONFIG = [
  { duration: 68, direction: "up" as const },
  { duration: 50, direction: "down" as const },
  { duration: 62, direction: "up" as const },
  { duration: 44, direction: "down" as const },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  return (
    <main className="relative h-screen overflow-hidden bg-[#111111]">
      <Navbar />

      {/* Scrolling columns — full bleed */}
      <div className="absolute inset-0 flex gap-[5px] sm:gap-[7px]">
        {COLUMNS.map((images, i) => (
          <div
            key={i}
            className={`overflow-hidden ${i >= 2 ? "hidden md:block md:flex-1" : "flex-1"}`}
          >
            <ScrollingColumn
              images={images}
              duration={COL_CONFIG[i].duration}
              direction={COL_CONFIG[i].direction}
            />
          </div>
        ))}
      </div>

      {/* Top fade — covers navbar area and creates depth */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 pointer-events-none z-[500]"
        style={{
          height: "200px",
          background:
            "linear-gradient(to bottom, #111111 0%, #111111 35%, transparent 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 pointer-events-none z-[500]"
        style={{
          height: "140px",
          background:
            "linear-gradient(to top, #111111 0%, #111111 15%, transparent 100%)",
        }}
      />

      {/* Editorial title overlay */}
      <div className="absolute top-[76px] lg:top-[86px] left-6 lg:left-10 z-[600] pointer-events-none select-none">
        <p
          className="text-[#AE8C07] text-[11px] uppercase tracking-[4px] font-bold mb-2"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          BCN
        </p>
        <h1 style={{ lineHeight: 0.88, letterSpacing: "-0.04em" }}>
          <span
            className="block text-white"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(40px, 5.5vw, 82px)",
              fontWeight: 900,
            }}
          >
            Creative
          </span>
          <span
            className="block text-white"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(40px, 5.5vw, 82px)",
              fontWeight: 900,
              fontStyle: "italic",
            }}
          >
            Summit
          </span>
          <span
            className="block text-white/50"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(32px, 4.5vw, 68px)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              marginTop: "0.08em",
            }}
          >
            2026
          </span>
        </h1>
        <p
          className="mt-4 text-white/20 text-[11px] tracking-[1px]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {ALL_IMAGES.length} works
        </p>
      </div>

      {/* Social icon links — top right, balanced against the title */}
      <div className="absolute top-[76px] lg:top-[86px] right-6 lg:right-10 z-[600] flex items-center gap-3 sm:gap-4">
        {GALLERY_SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-[#AE8C07] text-white/70 hover:text-white transition-all duration-300 backdrop-blur-sm"
          >
            <s.Icon />
          </a>
        ))}
      </div>

      {/* Back link — bottom left */}
      <a
        href="/"
        className="absolute bottom-5 left-6 lg:left-10 z-[600] text-white/35 hover:text-white/80 transition-colors duration-300 text-[13px] flex items-center gap-2"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        <span>←</span>
        <span>Back to home</span>
      </a>
    </main>
  );
}

// ── ScrollingColumn ───────────────────────────────────────────────────────────
function ScrollingColumn({
  images,
  duration,
  direction,
}: {
  images: string[];
  duration: number;
  direction: "up" | "down";
}) {
  const [paused, setPaused] = useState(false);
  // Duplicate the list so translateY(-50%) lands exactly back at the start
  const doubled = [...images, ...images];

  return (
    <div
      className="h-full relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          animationName:
            direction === "up" ? "gallery-scroll-up" : "gallery-scroll-down",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: paused ? "paused" : "running",
          willChange: "transform",
        }}
      >
        {doubled.map((filename, idx) => (
          <div
            key={`${filename}-${idx}`}
            className="overflow-hidden rounded-[3px] sm:rounded-[5px]"
            style={{
              flexShrink: 0,
              // Dark placeholder so blank space looks intentional while images decode
              background: "#1e1e1e",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/gallery/${filename}`}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                transform: paused ? "scale(1.03)" : "scale(1)",
              }}
              // Never lazy-load inside a CSS-animated container —
              // the browser calculates visibility from the static DOM
              // position and ignores transforms, so lazy images never
              // trigger past the first few. Eager loads all in parallel.
              loading="eager"
              // Prioritise the first handful that are visually on-screen
              fetchPriority={idx < 8 ? "high" : "auto"}
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
