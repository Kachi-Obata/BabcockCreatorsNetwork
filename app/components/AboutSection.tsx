"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOptions } from "../lib/animations";

const pipeline = [
  {
    step: "Discover",
    description: "We find raw creative talent across campus",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003895" strokeWidth="2" strokeLinecap="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    step: "Develop",
    description: "Workshops, bootcamps, masterclasses, mentorship",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003895" strokeWidth="2" strokeLinecap="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    step: "Connect",
    description: "Industry opportunities, partnerships, collaborations",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003895" strokeWidth="2" strokeLinecap="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
  },
  {
    step: "Empower",
    description: "Real projects, paid gigs, portfolio development",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003895" strokeWidth="2" strokeLinecap="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

const stats = [
  { value: "8+", label: "Creative Disciplines" },
  { value: "12", label: "Executive Leaders" },
  { value: "Real", label: "Industry Connections" },
  { value: "100%", label: "Student-Led & Powered" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F5F0E8] py-[120px] px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-[#AE8C07] uppercase tracking-[4px] text-[12px] font-bold"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              About BCN
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mb-8 text-[#1A1A1A]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-1px",
              }}
            >
              A System, Not Just<br />a Community
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-[#666666] text-[16px] leading-[1.7]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <p>
                Babcock Creators Network is a structured talent development platform for student creatives at Babcock University. We don&apos;t just gather creatives — we build systems that discover, develop, connect, and empower them.
              </p>
              <p>
                BCN spans writing, design, film, photography, music, visual arts, technology, and beyond. We connect our members to real projects, paid opportunities, industry mentorship, and platforms to monetize their skills.
              </p>
              <p className="font-semibold text-[#1A1A1A]">
                From talent to income — BCN creates the pathway.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: pipeline + stats */}
          <div>
            {/* Pipeline */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="space-y-3 mb-10"
            >
              {pipeline.map((item, i) => (
                <motion.div key={item.step} variants={fadeUp}>
                  <div className="flex items-start gap-4 bg-white border border-[#E8E4DE] rounded-xl p-5 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#F5F0E8] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className="text-[#003895] font-semibold text-[15px] mb-0.5"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {item.step}
                      </p>
                      <p
                        className="text-[#666666] text-[13px] leading-snug"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                    {i < pipeline.length - 1 && (
                      <svg
                        className="ml-auto flex-shrink-0 text-[#AE8C07] self-center"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#AE8C07"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    )}
                  </div>
                  {i < pipeline.length - 1 && (
                    <div className="flex justify-center">
                      <div className="w-px h-3 bg-[#AE8C07]/30" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="bg-white border border-[#E8E4DE] rounded-xl p-5 text-center"
                >
                  <p
                    className="text-[#003895] mb-1"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "36px",
                      fontWeight: 900,
                      letterSpacing: "-1px",
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-[#666666] text-[12px]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
