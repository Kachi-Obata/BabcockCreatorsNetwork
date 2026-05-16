"use client";

import { motion } from "framer-motion";
import { viewportOptions } from "../lib/animations";

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
    description: "Aligning with Babcock University's philosophy and values.",
  },
];

export default function ValuesSection() {
  return (
    <section
      className="relative bg-[#F5F0E8] overflow-hidden pt-24 pb-28"
    >
      {/* Label — pinned top-left */}
      <p
        className="absolute top-10 left-6 lg:left-10 text-[#AE8C07] uppercase tracking-[4px] text-[11px] font-bold"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        Our Principles
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
          className="text-[#555555] text-[16px] leading-[1.8]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Six principles that guide how we work, create, and show up —
          for each other and for the world.
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
            color: "#C4BFB7",
            lineHeight: 0.9,
            letterSpacing: "-4px",
            whiteSpace: "nowrap",
          }}
        >
          What We
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="pl-6 lg:pl-10 text-center md:text-left"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(96px, 17vw, 240px)",
            fontWeight: 900,
            color: "#C4BFB7",
            lineHeight: 0.9,
            letterSpacing: "-4px",
            fontStyle: "italic",
            marginTop: "0.12em",
            whiteSpace: "nowrap",
          }}
        >
          Stand For.
        </motion.p>
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
