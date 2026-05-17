"use client";

import { motion } from "framer-motion";
import { viewportOptions } from "../lib/animations";
import { VinylRecordIcon, PencilIcon } from "./CreativeIcons";

const values = [
  {
    num: "01",
    title: "Creativity & Innovation",
    description: "Encouraging original thinking and bold problem-solving.",
  },
  {
    num: "02",
    title: "Excellence",
    description: "Upholding high standards in skills, conduct, and output.",
  },
  {
    num: "03",
    title: "Collaboration",
    description: "Promoting teamwork, mentorship, and shared growth.",
  },
  {
    num: "04",
    title: "Integrity",
    description: "Practicing ethical content creation and accountability.",
  },
  {
    num: "05",
    title: "Service & Impact",
    description: "Using creativity to solve problems and uplift communities.",
  },
  {
    num: "06",
    title: "Respect",
    description: "Aligning with Babcock University\u2019s philosophy and values.",
  },
];

export default function ValuesSection() {
  return (
    <section
      className="relative bg-[#F5F0E8] overflow-hidden pt-24 pb-28"
    >
      {/* Vinyl record — peeks in from the left edge */}
      <div
        className="absolute pointer-events-none select-none"
        style={{ left: "-62px", top: "175px", transform: "rotate(-8deg)", zIndex: 0 }}
      >
        <VinylRecordIcon />
      </div>

      {/* Pencil — peeks in from the right edge */}
      <div
        className="absolute pointer-events-none select-none"
        style={{ right: "-20px", bottom: "170px", transform: "rotate(13deg)", zIndex: 0 }}
      >
        <PencilIcon />
      </div>

      {/* Label */}
      <p
        className="px-6 lg:px-10 text-[#AE8C07] uppercase tracking-[4px] text-[11px] font-bold mb-16"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        Our Principles
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
            className="text-[#555555] text-[15px] lg:text-[16px] leading-[1.8]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Six principles that guide how we work, create, and show up —
            for each other and for the world.
          </p>
        </motion.div>

        {/* Giant type block — mobile left-aligned, desktop staggered */}

        {/* ===== MOBILE (< md) ===== */}
        <div className="relative md:hidden">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "18vw",
              fontWeight: 400,
              color: "#C4BFB7",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            What We
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "18vw",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#C4BFB7",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              paddingLeft: "8%",
              marginTop: "-0.05em",
            }}
          >
            Stand For.
          </motion.p>
        </div>

        {/* ===== DESKTOP (>= md) ===== */}
        <div className="relative hidden md:block">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(72px, 15vw, 200px)",
              fontWeight: 400,
              color: "#C4BFB7",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              paddingLeft: "clamp(25%, 30vw, 38%)",
            }}
          >
            What We
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(72px, 15vw, 200px)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#C4BFB7",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              marginTop: "-0.05em",
            }}
          >
            Stand For.
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
            className="text-[#555555] text-[15px] lg:text-[16px] leading-[1.8]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            We believe that how you create matters as much as what
            you create. These values shape every project, every
            interaction, and every opportunity within BCN.
          </p>
        </motion.div>
      </div>

      {/* Values — manifesto list */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mx-6 lg:mx-10 mt-20 divide-y divide-[#DDD9D2] border-t border-[#DDD9D2]"
      >
        {values.map((v, i) => (
          <motion.div
            key={v.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-3 lg:gap-16 py-8 group"
          >
            <div className="flex items-start gap-5">
              <span
                className="text-[#AE8C07] text-[11px] font-bold tracking-[2px] pt-1 shrink-0"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {v.num}
              </span>
              <h3
                className="text-[#1A1A1A] font-semibold text-[18px] group-hover:text-[#003895] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {v.title}
              </h3>
            </div>
            <p
              className="text-[#666666] text-[15px] leading-[1.75]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {v.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
