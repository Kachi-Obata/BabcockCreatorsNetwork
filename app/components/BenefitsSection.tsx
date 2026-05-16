"use client";

import { motion } from "framer-motion";
import { viewportOptions } from "../lib/animations";

const benefits = [
  {
    title: "Skill Development",
    description:
      "Workshops, bootcamps, masterclasses, and mentorship programs designed to sharpen your craft — no matter your level.",
  },
  {
    title: "Real Industry Exposure",
    description:
      "Connect with industry professionals, attend networking events, and get your work in front of people who matter.",
  },
  {
    title: "Paid Opportunities",
    description:
      "Real projects, freelance gigs, brand partnerships, and paid creative work — turning your talent directly into income.",
  },
  {
    title: "Portfolio Building",
    description:
      "Collaborate on BCN productions, showcase on our platforms, and build a body of work that stands out.",
  },
  {
    title: "Community & Collaboration",
    description:
      "A curated network of ambitious creatives. Find collaborators, get feedback, and grow with people who push you.",
  },
  {
    title: "Recognition & Platform",
    description:
      "Get spotlighted on BCN channels, featured in creator showcases, and recognized for the quality of your work.",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative bg-white overflow-hidden pt-24 pb-28"
    >
      {/* Label — pinned top-left */}
      <p
        className="absolute top-10 left-6 lg:left-10 text-[#AE8C07] uppercase tracking-[4px] text-[11px] font-bold"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        Why Join
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
          BCN isn&apos;t just a title on your bio. It&apos;s an operating
          system for your creative career — from raw skill to real income.
        </p>
      </motion.div>

      {/* Giant ghost type */}
      <div className="overflow-hidden">
        <motion.p
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="pl-6 lg:pl-10 text-center md:text-left"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(96px, 17vw, 240px)",
            fontWeight: 900,
            color: "#D8D3CD",
            lineHeight: 0.9,
            letterSpacing: "-4px",
            whiteSpace: "nowrap",
          }}
        >
          Turn Talent
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="pr-6 lg:pr-10 text-center md:text-right"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(96px, 17vw, 240px)",
            fontWeight: 900,
            color: "#D8D3CD",
            lineHeight: 0.9,
            letterSpacing: "-4px",
            fontStyle: "italic",
            marginTop: "0.12em",
            whiteSpace: "nowrap",
          }}
        >
          Into Income.
        </motion.p>
      </div>

      {/* Benefits — manifesto list */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mx-6 lg:mx-10 mt-20 divide-y divide-[#E8E4DE] border-t border-[#E8E4DE]"
      >
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
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
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="text-[#1A1A1A] font-semibold text-[18px] group-hover:text-[#003895] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {b.title}
              </h3>
            </div>
            <p
              className="text-[#666666] text-[15px] leading-[1.75]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {b.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
