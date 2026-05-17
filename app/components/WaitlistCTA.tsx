"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOptions } from "../lib/animations";

// Replace with your Google Form URL once created
const REGISTRATION_FORM_URL = "https://forms.gle/BL2zJmTDnoG3wjG16";

const steps = [
  {
    number: "01",
    title: "Fill the Form",
    description: "Submit your details and creative profile via our registration form.",
  },
  {
    number: "02",
    title: "Pay ₦5,000",
    description: "Transfer your membership fee to the account details provided in the form.",
  },
  {
    number: "03",
    title: "Upload Receipt",
    description: "Attach your payment receipt in the form. We'll confirm your spot within 24 hours.",
  },
];

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

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-[#AE8C07] uppercase tracking-[4px] text-[12px] font-bold"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Membership 2025 / 2026
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
            className="mb-16 text-white/60 text-[17px] leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            BCN membership gives you access to a full creative ecosystem — collaborations,
            mentorship, resources, and real opportunities. Register below to secure your spot.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8"
            >
              <p
                className="text-[#AE8C07] text-[13px] font-bold mb-3 tracking-[2px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {step.number}
              </p>
              <p
                className="text-white font-bold text-[17px] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {step.title}
              </p>
              <p
                className="text-white/50 text-[14px] leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="flex flex-col items-center gap-4"
        >
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-[18px] rounded-full bg-[#AE8C07] text-[#1A1A1A] font-bold text-[16px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#AE8C07]/40"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Apply Now
          </a>
          <p
            className="text-white/35 text-[13px]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Membership is open to all Babcock University students.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
