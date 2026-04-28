"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOptions } from "../lib/animations";

const WAITLIST_URL = "https://bit.ly/BCNWaitlist";

export default function WaitlistCTA() {
  return (
    <section
      id="join"
      className="relative py-[120px] px-6 lg:px-10 overflow-hidden"
      style={{ background: "#003895" }}
    >
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(174,140,7,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
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
            Join the Network
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mb-6 text-white"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 900,
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}
          >
            Your talent deserves<br />a system behind it.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-10 text-white/60 text-[17px] leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            BCN is where creativity meets opportunity. From talent to income —
            we create the pathway. Register. Connect. Create. Grow.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-[18px] rounded-full bg-[#AE8C07] text-[#1A1A1A] font-bold text-[16px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#AE8C07]/40"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Join the Waitlist
            </a>
            <p
              className="text-white/35 text-[13px]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Be among the first to join Babcock&apos;s premier creative network.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
