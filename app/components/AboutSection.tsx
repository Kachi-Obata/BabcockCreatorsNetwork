"use client";

import { motion } from "framer-motion";
import { viewportOptions } from "../lib/animations";
import { CameraIcon, HeadphonesIcon } from "./CreativeIcons";

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
      className="relative z-[2] bg-[#F5F0E8] overflow-hidden pt-24 pb-28"
    >
      {/* Camera icon — peeks in from the right edge */}
      <div
        className="absolute pointer-events-none select-none"
        style={{ right: "-58px", top: "180px", transform: "rotate(14deg)", zIndex: 0 }}
      >
        <CameraIcon />
      </div>

      {/* Headphones icon — peeks in from the left edge */}
      <div
        className="absolute pointer-events-none select-none"
        style={{ left: "-48px", bottom: "160px", transform: "rotate(-11deg)", zIndex: 0 }}
      >
        <HeadphonesIcon />
      </div>

      {/* Label — pinned top-left of the section */}
      <p
        className="px-6 lg:px-10 text-[#AE8C07] uppercase tracking-[4px] text-[11px] font-bold mb-16"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        What We Are
      </p>

      {/* Giant ghost type + body copy — instrument.com style */}
      <div className="relative px-6 lg:px-10">
        {/* Body copy — positioned in the top-left negative space */}
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
            BCN is a structured talent development platform for student
            creatives at Babcock University — not just a network, but a system
            that discovers, develops, connects, and empowers.
          </p>
        </motion.div>

        {/* Giant type block — mobile: 3 clean lines, desktop: staggered */}

        {/* ===== MOBILE VERSION (< md) ===== */}
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
              color: "#D0CBC3",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              paddingLeft: "8%",
            }}
          >
            A System,
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "18vw",
              fontWeight: 300,
              color: "#D0CBC3",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              marginTop: "-0.02em",
            }}
          >
            Not Just a
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "16vw",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#D0CBC3",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              paddingLeft: "8%",
              marginTop: "-0.02em",
            }}
          >
            Community.
          </motion.p>
        </div>

        {/* ===== DESKTOP VERSION (>= md) ===== */}
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
              color: "#D0CBC3",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              paddingLeft: "clamp(30%, 35vw, 40%)",
            }}
          >
            A System,
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(72px, 15vw, 200px)",
              fontWeight: 300,
              color: "#D0CBC3",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              marginTop: "-0.05em",
            }}
          >
            Not Just
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
              color: "#D0CBC3",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              paddingLeft: "clamp(15%, 20vw, 28%)",
              marginTop: "-0.05em",
            }}
          >
            a Community.
          </motion.p>
        </div>

        {/* Second body copy — positioned at bottom-left below the type */}
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
            From workshops and mentorship to paid opportunities
            and industry connections — BCN creates the pathway
            from raw talent to real income.
          </p>
        </motion.div>
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
