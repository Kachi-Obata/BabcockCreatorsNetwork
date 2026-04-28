"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOptions } from "../lib/animations";

const values = [
  {
    num: "01",
    title: "Creativity & Innovation",
    description: "Encouraging original thinking and problem-solving.",
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
    <section className="bg-white py-[120px] px-6 lg:px-10">
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
            What We Stand For
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-[#1A1A1A]"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(32px, 4vw, 40px)",
              fontWeight: 900,
              letterSpacing: "-1px",
            }}
          >
            Our Core Values
          </motion.h2>
        </motion.div>

        {/* Values grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((v) => (
            <motion.div
              key={v.num}
              variants={fadeUp}
              className="group border border-[#E8E4DE] rounded-xl p-7 hover:-translate-y-1 transition-transform duration-300 hover:shadow-sm"
            >
              <p
                className="text-[#003895] mb-3 tabular-nums"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "40px",
                  fontWeight: 900,
                  letterSpacing: "-1px",
                  lineHeight: 1,
                }}
              >
                {v.num}
              </p>
              <h3
                className="text-[#1A1A1A] font-semibold text-[16px] mb-2"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {v.title}
              </h3>
              <p
                className="text-[#666666] text-[13px] leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {v.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
