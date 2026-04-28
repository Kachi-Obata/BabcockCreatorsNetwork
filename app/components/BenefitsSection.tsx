"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOptions } from "../lib/animations";

const benefits = [
  {
    title: "Skill Development",
    description:
      "Access workshops, bootcamps, masterclasses, and mentorship programs designed to sharpen your craft — no matter your level.",
  },
  {
    title: "Real Industry Exposure",
    description:
      "Connect with industry professionals, attend networking events, and get your work in front of people who matter.",
  },
  {
    title: "Paid Opportunities",
    description:
      "BCN connects you to real projects, freelance gigs, brand partnerships, and paid creative work — turning your talent into income.",
  },
  {
    title: "Portfolio Building",
    description:
      "Collaborate on BCN productions, showcase your work on our platforms, and build a portfolio that stands out to employers and clients.",
  },
  {
    title: "Community & Collaboration",
    description:
      "Join a curated network of ambitious creatives. Find collaborators, get constructive feedback, and grow alongside people who push you.",
  },
  {
    title: "Recognition & Platform",
    description:
      "Get spotlighted on BCN channels, featured in our creator showcases, and recognized for the quality of your work.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="bg-[#F5F0E8] py-[120px] px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-[#AE8C07] uppercase tracking-[4px] text-[12px] font-bold"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Why Join BCN
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mb-4 text-[#1A1A1A]"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 900,
              letterSpacing: "-1px",
            }}
          >
            What You Get
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[#666666] text-[16px] max-w-lg leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            BCN isn&apos;t just a title on your bio. It&apos;s an operating system for your
            creative career.
          </motion.p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="relative bg-white border border-[#E8E4DE] rounded-[10px] p-7 overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Left gold accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#AE8C07] rounded-l-[10px]" />
              <h3
                className="text-[#003895] font-semibold text-[18px] mb-3"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {b.title}
              </h3>
              <p
                className="text-[#666666] text-[14px] leading-[1.65]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {b.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
