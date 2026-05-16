"use client";

import { motion } from "framer-motion";
import { viewportOptions } from "../lib/animations";

const disciplines = [
  { name: "Photography", desc: "Portraits, editorials, street & documentary" },
  { name: "Film & Media", desc: "Short films, documentaries, motion graphics" },
  { name: "Design", desc: "Brand, UI/UX, print, illustration" },
  { name: "Writing", desc: "Fiction, copywriting, journalism, poetry" },
  { name: "Music", desc: "Production, performance, composition" },
  { name: "Visual Arts", desc: "Painting, sculpture, mixed media, digital art" },
  { name: "Technology", desc: "Dev, AI, creative coding, product" },
  { name: "Fashion", desc: "Styling, textile, streetwear, accessories" },
];

export default function DisciplinesGrid() {
  return (
    <section
      id="creatives"
      className="relative bg-[#1A1A1A] overflow-hidden pt-24 pb-28"
    >
      {/* Label — pinned top-left */}
      <p
        className="absolute top-10 left-6 lg:left-10 text-[#AE8C07] uppercase tracking-[4px] text-[11px] font-bold"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        The Creative Realms
      </p>

      {/* Body copy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="px-6 lg:px-10 mt-10 mb-20 max-w-[460px]"
      >
        <p
          className="text-white/50 text-[16px] leading-[1.8]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Whatever your craft, there&apos;s a place here. BCN is home to
          creators across every discipline — united by ambition, separated
          only by medium.
        </p>
      </motion.div>

      {/* Giant ghost type */}
      <div className="overflow-hidden">
        <motion.p
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="pr-6 lg:pr-10 text-center md:text-right"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(96px, 17vw, 240px)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.08)",
            lineHeight: 0.9,
            letterSpacing: "-4px",
            whiteSpace: "nowrap",
          }}
        >
          Every
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="pl-6 lg:pl-10 text-center md:text-left"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(96px, 17vw, 240px)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.08)",
            lineHeight: 0.9,
            letterSpacing: "-4px",
            marginTop: "0.12em",
            whiteSpace: "nowrap",
          }}
        >
          Creative
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="pr-6 lg:pr-10 text-center md:text-right"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(96px, 17vw, 240px)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.08)",
            lineHeight: 0.9,
            letterSpacing: "-4px",
            fontStyle: "italic",
            marginTop: "0.12em",
            whiteSpace: "nowrap",
          }}
        >
          Field.
        </motion.p>
      </div>

      {/* Disciplines grid */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mx-6 lg:mx-10 mt-20 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10 border border-white/10 rounded-2xl overflow-hidden"
      >
        {disciplines.map((d) => (
          <div
            key={d.name}
            className="p-7 lg:p-9 hover:bg-white/[0.03] transition-colors duration-300"
          >
            <h3
              className="text-white text-[19px] font-bold mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {d.name}
            </h3>
            <p
              className="text-white/35 text-[12px] leading-snug"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {d.desc}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
