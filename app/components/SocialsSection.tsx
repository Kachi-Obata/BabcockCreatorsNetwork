"use client";

import { motion } from "framer-motion";
import { viewportOptions } from "../lib/animations";

const TikTokIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.15 8.15 0 004.77 1.52V7.03a4.85 4.85 0 01-1-.34z" />
  </svg>
);

const XIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const socials = [
  {
    name: "TikTok",
    handle: "@babcockcreators",
    href: "https://www.tiktok.com/@babcockcreators",
    Icon: TikTokIcon,
  },
  {
    name: "X (Twitter)",
    handle: "@babcockcreators",
    href: "https://x.com/babcockcreators",
    Icon: XIcon,
  },
  {
    name: "Instagram",
    handle: "@babcockcreators",
    href: "https://www.instagram.com/babcockcreators",
    Icon: InstagramIcon,
  },
];

export default function SocialsSection() {
  return (
    <section className="bg-[#111111] px-6 lg:px-10 pt-20 pb-2 overflow-hidden">
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-[#AE8C07] text-[11px] uppercase tracking-[4px] font-bold mb-14"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        Find Us Online
      </motion.p>

      {/* Social rows */}
      <div className="border-t border-white/10">
        {socials.map((s, i) => (
          <motion.a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between py-8 lg:py-10 border-b border-white/10 group cursor-pointer"
          >
            {/* Left: icon + platform name */}
            <div className="flex items-center gap-5 lg:gap-8 min-w-0">
              <span className="text-white/25 group-hover:text-[#AE8C07] transition-colors duration-300 shrink-0">
                <s.Icon />
              </span>
              <span
                className="text-white group-hover:text-[#AE8C07] transition-colors duration-300 leading-none"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(38px, 6.5vw, 96px)",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.name}
              </span>
            </div>

            {/* Right: handle + arrow */}
            <div className="flex items-center gap-4 lg:gap-8 shrink-0 ml-4">
              <span
                className="hidden sm:block text-white/30 group-hover:text-white/60 transition-colors duration-300 text-[14px] lg:text-[16px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {s.handle}
              </span>
              <span
                className="text-white/20 group-hover:text-[#AE8C07] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ fontSize: "clamp(22px, 3vw, 36px)", lineHeight: 1, display: "block" }}
              >
                ↗
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
