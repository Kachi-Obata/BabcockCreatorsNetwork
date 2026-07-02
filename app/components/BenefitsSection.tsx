"use client";

import { motion } from "framer-motion";
import { viewportOptions } from "../lib/animations";
import { ClapperboardIcon, PaletteIcon } from "./CreativeIcons";

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
      className="relative z-[4] bg-white overflow-hidden pt-24 pb-28"
    >
      {/* Clapperboard icon — peeks in from the left edge */}
      <div
        className="absolute pointer-events-none select-none"
        style={{ left: "-52px", top: "190px", transform: "rotate(-9deg)", zIndex: 0 }}
      >
        <ClapperboardIcon />
      </div>

      {/* Palette icon — peeks in from the right edge */}
      <div
        className="absolute pointer-events-none select-none"
        style={{ right: "-52px", bottom: "155px", transform: "rotate(11deg)", zIndex: 0 }}
      >
        <PaletteIcon />
      </div>

      {/* Label */}
      <p
        className="px-6 lg:px-10 text-[#AE8C07] uppercase tracking-[4px] text-[11px] font-bold mb-16"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        Why Join
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
            BCN isn&apos;t just a title on your bio. It&apos;s an operating
            system for your creative career — from raw skill to real income.
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
              color: "#D8D3CD",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              paddingLeft: "clamp(35%, 42vw, 50%)",
            }}
          >
            Turn
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
              color: "#D8D3CD",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              paddingLeft: "clamp(8%, 12vw, 16%)",
              marginTop: "-0.05em",
            }}
          >
            Talent Into
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
              color: "#D8D3CD",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              paddingLeft: "clamp(20%, 28vw, 34%)",
              marginTop: "-0.05em",
            }}
          >
            Income.
          </motion.p>
        </div>

        {/* Body copy — bottom-left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[380px] lg:max-w-[340px] mt-12 lg:mt-16 lg:ml-auto"
        >
          <p
            className="text-[#555555] text-[15px] lg:text-[16px] leading-[1.8]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Access real projects, mentorship, and paid opportunities
            that transform your creative skills into a sustainable career.
          </p>
        </motion.div>
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
