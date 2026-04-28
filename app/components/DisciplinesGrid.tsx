"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOptions } from "../lib/animations";

const disciplines = [
  {
    name: "Photography",
    description: "Portraits, editorials, street & documentary",
    gradient: "linear-gradient(160deg, #1a3a6a, #0d2040)",
  },
  {
    name: "Film & Media",
    description: "Short films, documentaries, motion graphics",
    gradient: "linear-gradient(160deg, #3a1a4a, #200d30)",
  },
  {
    name: "Design",
    description: "Brand, UI/UX, print, illustration",
    gradient: "linear-gradient(160deg, #1a3a2a, #0d2018)",
  },
  {
    name: "Writing",
    description: "Fiction, copywriting, journalism, poetry",
    gradient: "linear-gradient(160deg, #3a2a1a, #201508)",
  },
  {
    name: "Music",
    description: "Production, performance, composition",
    gradient: "linear-gradient(160deg, #2a1a3a, #180d28)",
  },
  {
    name: "Visual Arts",
    description: "Painting, sculpture, mixed media, digital art",
    gradient: "linear-gradient(160deg, #1a2a3a, #0d1828)",
  },
  {
    name: "Technology",
    description: "Dev, AI, creative coding, product",
    gradient: "linear-gradient(160deg, #2a3a1a, #182008)",
  },
  {
    name: "Fashion",
    description: "Styling, textile, streetwear, accessories",
    gradient: "linear-gradient(160deg, #3a1a1a, #280d0d)",
  },
];

export default function DisciplinesGrid() {
  return (
    <section id="creatives" className="bg-[#1A1A1A] py-[120px] px-6 lg:px-10">
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
            The Creative Realms
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mb-4 text-white"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 900,
              letterSpacing: "-1px",
            }}
          >
            One Network. Every Creative Field.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white/50 text-[16px] max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            BCN is home to creators across every discipline. Whatever your craft,
            there&apos;s a place for you here.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {disciplines.map((d) => (
            <motion.div
              key={d.name}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="relative group rounded-[10px] p-8 min-h-[200px] flex flex-col justify-between overflow-hidden cursor-default"
              style={{ background: d.gradient }}
            >
              <div>
                <h3
                  className="text-white mb-2"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "22px",
                    fontWeight: 700,
                  }}
                >
                  {d.name}
                </h3>
                <p
                  className="text-white/50 text-[13px] leading-snug"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {d.description}
                </p>
              </div>
              <div className="absolute top-5 right-5 text-white/30 group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-xl leading-none">
                ↗
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
