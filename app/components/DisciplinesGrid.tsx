"use client";

import { motion } from "framer-motion";
import { viewportOptions } from "../lib/animations";
import { FountainPenIcon } from "./CreativeIcons";

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
      {/* Fountain pen icon — peeks in from the right edge */}
      <div
        className="absolute pointer-events-none select-none hidden md:block"
        style={{ right: "-18px", top: "145px", transform: "rotate(-16deg)", zIndex: 0 }}
      >
        <FountainPenIcon />
      </div>

      {/* Label */}
      <p
        className="px-6 lg:px-10 text-[#AE8C07] uppercase tracking-[4px] text-[11px] font-bold mb-16"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        The Creative Realms
      </p>

      {/* Giant ghost type + body copy — instrument.com style */}
      <div className="relative px-6 lg:px-10">
        {/* Body copy — top-left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[380px] lg:max-w-[340px] mb-10 lg:mb-0 lg:absolute lg:top-0 lg:left-10 lg:z-10"
        >
          <p
            className="text-white/50 text-[15px] lg:text-[16px] leading-[1.8]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Whatever your craft, there&apos;s a place here. BCN is home to
            creators across every discipline — united by ambition, separated
            only by medium.
          </p>
        </motion.div>

        {/* Giant type block */}
        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(72px, 15vw, 200px)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.1)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              paddingLeft: "clamp(30%, 38vw, 45%)",
            }}
          >
            Every
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(72px, 15vw, 200px)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.1)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              paddingLeft: "clamp(10%, 15vw, 20%)",
              marginTop: "-0.05em",
            }}
          >
            Creative
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(72px, 15vw, 200px)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.1)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              paddingLeft: "clamp(22%, 30vw, 38%)",
              marginTop: "-0.05em",
            }}
          >
            Field.
          </motion.p>
        </div>

        {/* Body copy — bottom-left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[380px] lg:max-w-[340px] mt-12 lg:mt-16"
        >
          <p
            className="text-white/40 text-[15px] lg:text-[16px] leading-[1.8]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            From photography to technology, music to fashion —
            BCN provides the structure, resources, and community
            to grow your creative career.
          </p>
        </motion.div>
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
