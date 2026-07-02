"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { alumni, BCNAlumnus } from "../data/alumni";

const WAITLIST_URL = "https://forms.gle/BL2zJmTDnoG3wjG16";

// Gradient placeholder for alumni without photos
function PhotoPlaceholder({ field }: { field: string }) {
  const gradient =
    field === "MUSIC"
      ? "linear-gradient(160deg, #1a0a2e 0%, #0d0d1a 60%, #0a0620 100%)"
      : "linear-gradient(160deg, #1a1a2e 0%, #0d0d1a 60%, #0a0a1a 100%)";
  return (
    <div
      className="w-full h-full"
      style={{ background: gradient }}
      aria-hidden="true"
    />
  );
}

function AlumniProfile({ alumnus }: { alumnus: BCNAlumnus }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
      {/* Left: portrait */}
      <div className="relative h-[55vw] max-h-[600px] lg:h-full overflow-hidden">
        {alumnus.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={alumnus.photo}
            alt={alumnus.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <PhotoPlaceholder field={alumnus.field} />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1A1A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />

        {/* Stamp */}
        <div className="absolute top-8 left-8 flex flex-col gap-1">
          <span
            className="uppercase tracking-[3px] text-[10px] font-bold"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#AE8C07" }}
          >
            Babcock Alumni
          </span>
          <span
            className="uppercase tracking-[2px] text-[9px]"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#555555" }}
          >
            {alumnus.field}
          </span>
        </div>
      </div>

      {/* Right: editorial copy */}
      <div
        className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-20 border-l"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        {/* Field badge + handle */}
        <div className="flex items-center gap-3 mb-8">
          <span
            className="px-3 py-1.5 text-[11px] tracking-[2px] uppercase rounded"
            style={{
              border: "1px solid #333333",
              color: "#AE8C07",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            {alumnus.field}
          </span>
          {alumnus.realName && (
            <span
              className="text-[13px]"
              style={{ fontFamily: "var(--font-dm-sans)", color: "#555555" }}
            >
              {alumnus.realName}
            </span>
          )}
        </div>

        {/* Headline */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 leading-tight tracking-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(26px, 3vw, 40px)",
            fontWeight: 900,
            color: "#F5F0E8",
            letterSpacing: "-1px",
          }}
        >
          {alumnus.title}
        </motion.h3>

        {/* Blockquote */}
        {alumnus.quote && (
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="pl-5 mb-8"
            style={{ borderLeft: "2px solid #AE8C07" }}
          >
            <p
              className="italic leading-relaxed"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "16px",
                color: "#888888",
              }}
            >
              &ldquo;{alumnus.quote}&rdquo;
            </p>
          </motion.blockquote>
        )}

        {/* Bio paragraphs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 mb-8"
        >
          {alumnus.bio.map((para, i) => (
            <p
              key={i}
              className="leading-[1.75]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                color: "#888888",
              }}
            >
              {para}
            </p>
          ))}
        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {alumnus.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-[11px] tracking-[1px] uppercase"
              style={{
                border: "1px solid #333333",
                color: "#555555",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* External link */}
        {alumnus.externalUrl && (
          <a
            href={alumnus.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-semibold transition-colors duration-200 hover:text-[#003895]"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#003895" }}
          >
            Learn more ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function AlumniContent() {
  const [activeIdx, setActiveIdx] = useState(0);
  const alumnus = alumni[activeIdx];

  const prev = () => setActiveIdx((i) => (i - 1 + alumni.length) % alumni.length);
  const next = () => setActiveIdx((i) => (i + 1) % alumni.length);

  // Unique fields for category tabs
  const fields = Array.from(new Set(alumni.map((a) => a.field)));

  return (
    <>
      <Navbar forceDark />
      <main className="min-h-screen bg-[#1A1A1A]">
        {/* Section 1: Page header */}
        <section className="bg-[#1A1A1A] pt-[calc(72px+80px)] pb-16 px-6 md:px-20">
          <p
            className="mb-5 uppercase tracking-[4px] text-[12px] font-bold"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#AE8C07" }}
          >
            Babcock Alumni
          </p>
          <h1
            className="leading-none tracking-tight mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 900,
              color: "#F5F0E8",
              letterSpacing: "-2px",
            }}
          >
            The ones who came <em>before.</em>
          </h1>
          <p
            className="max-w-[520px]"
            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "16px", color: "#666666", lineHeight: 1.6 }}
          >
            Notable Babcock University alumni who went on to shape creative culture. This is where they started.
          </p>
        </section>

        {/* Section 2: Alumni profiles (Vanguard-style) */}
        <div
          className="border-t border-b"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {/* Tab bar */}
          <div
            className="border-b overflow-x-auto"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div className="flex">
              {alumni.map((a, i) => (
                <button
                  key={a.id}
                  onClick={() => setActiveIdx(i)}
                  className="relative flex-shrink-0 flex items-center gap-3 px-6 py-5 text-left transition-all duration-300 border-r"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <span
                    className="text-[9px] tracking-[0.2em] uppercase"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: i === activeIdx ? "#AE8C07" : "rgba(255,255,255,0.3)",
                    }}
                  >
                    {a.field}
                  </span>
                  <span
                    className="text-sm transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: i === activeIdx ? "#F5F0E8" : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {a.name}
                  </span>
                  {i === activeIdx && (
                    <motion.div
                      layoutId="alumniActiveTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#AE8C07]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Profile panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={alumnus.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <AlumniProfile alumnus={alumnus} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div
            className="border-t px-8 lg:px-16 py-6 flex items-center justify-between"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <button
              onClick={prev}
              className="text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 transition-colors duration-300 hover:text-[#F5F0E8]"
              style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.3)" }}
            >
              ← Previous
            </button>
            <div className="flex items-center gap-2">
              {alumni.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="transition-all duration-300"
                >
                  <span
                    className="block rounded-full transition-all duration-300"
                    style={{
                      width: i === activeIdx ? "24px" : "6px",
                      height: "6px",
                      backgroundColor: i === activeIdx ? "#AE8C07" : "rgba(255,255,255,0.15)",
                    }}
                  />
                </button>
              ))}
            </div>
            <button
              onClick={next}
              className="text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 transition-colors duration-300 hover:text-[#F5F0E8]"
              style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.3)" }}
            >
              Next →
            </button>
          </div>
        </div>

        {/* Section 3: Closing statement */}
        <section
          className="bg-[#1A1A1A] py-28 px-6 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="italic mb-4 mx-auto leading-tight"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 400,
              color: "#F5F0E8",
              maxWidth: "640px",
            }}
          >
            &ldquo;The talent was always here.&rdquo;
          </p>
          <p
            className="mb-10"
            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "13px", color: "#555555" }}
          >
            — BCN
          </p>
          <p
            className="mb-10 mx-auto"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              color: "#666666",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            Babcock Creators Network exists to make sure the next generation of names on this page gets there with a system behind them.
          </p>
          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full text-[13px] font-bold tracking-[2px] uppercase transition-opacity duration-200 hover:opacity-90"
            style={{
              background: "#AE8C07",
              color: "#1A1A1A",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Join the Waitlist ↗
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
