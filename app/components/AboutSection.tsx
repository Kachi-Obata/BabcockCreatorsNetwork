"use client";

import { motion } from "framer-motion";
import { viewportOptions } from "../lib/animations";

const pipeline = [
  { num: "01", step: "Discover", desc: "Raw talent found across campus" },
  { num: "02", step: "Develop", desc: "Workshops, bootcamps, mentorship" },
  { num: "03", step: "Connect", desc: "Industry, partnerships, paid gigs" },
  { num: "04", step: "Empower", desc: "Real projects, portfolio, platform" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#F5F0E8] overflow-hidden pt-24 pb-28"
    >
      {/* Label — pinned top-left of the section */}
      <p
        className="absolute top-10 left-6 lg:left-10 text-[#AE8C07] uppercase tracking-[4px] text-[11px] font-bold"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        What We Are
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
          BCN is a structured talent development platform for student
          creatives at Babcock University — not just a network, but a system
          that discovers, develops, connects, and empowers.
        </p>
      </motion.div>

      {/* Giant ghost type — bleeds off screen edges */}
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
          A System,
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
            color: "#C4BFB7",
            lineHeight: 0.9,
            letterSpacing: "-4px",
            marginTop: "0.12em",
            whiteSpace: "nowrap",
          }}
        >
          Not Just
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
            color: "#C4BFB7",
            lineHeight: 0.9,
            letterSpacing: "-4px",
            fontStyle: "italic",
            marginTop: "0.12em",
            whiteSpace: "nowrap",
          }}
        >
          a Community.
        </motion.p>
      </div>

      {/* Pipeline strip */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mx-6 lg:mx-10 mt-20 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#DDD9D2] border border-[#DDD9D2] rounded-2xl overflow-hidden"
      >
        {pipeline.map((item) => (
          <div key={item.num} className="bg-[#EDE9E1] p-8 lg:p-10">
            <p
              className="text-[#AE8C07] text-[11px] font-bold tracking-[2px] mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {item.num}
            </p>
            <p
              className="text-[#1A1A1A] font-bold text-[22px] mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {item.step}
            </p>
            <p
              className="text-[#888888] text-[13px] leading-snug"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
