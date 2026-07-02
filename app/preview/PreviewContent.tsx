"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WAITLIST_URL = "https://forms.gle/BL2zJmTDnoG3wjG16";

// ── Grain texture ─────────────────────────────────────────────────────────────
const grainUrl = `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

// ── Section header (reused across sections) ───────────────────────────────────
function SectionHeader({
  overline,
  headline,
  italic,
  sub,
}: {
  overline: string;
  headline: string;
  italic: string;
  sub?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
      <div>
        <p
          className="uppercase tracking-[4px] text-[10px] font-bold mb-4"
          style={{ fontFamily: "var(--font-dm-sans)", color: "#AE8C07" }}
        >
          {overline}
        </p>
        <h2
          className="leading-[0.95] tracking-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.5rem,5vw,4.5rem)",
            fontWeight: 700,
            color: "#F5F0E8",
          }}
        >
          {headline}
          <br />
          <span style={{ fontStyle: "italic", fontWeight: 400, color: "rgba(244,229,195,0.6)" }}>
            {italic}
          </span>
        </h2>
      </div>
      {sub && (
        <p
          className="max-w-xs leading-relaxed text-sm"
          style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.5)" }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

// ── 1. Live Activity Ticker ───────────────────────────────────────────────────
const tickerItems = [
  { text: "BCN Creative Summit 2026 recap now live" },
  { text: "featured in The Vanguard [PHOTOGRAPHY]" },
  { text: "12 creators joined BCN today" },
  { text: "AI & BIV Summit 2026 gallery published" },
  { text: "Workshop Series — dates dropping soon" },
  { text: "BCN now accepting applications for 2026/27" },
  { text: "New discipline unlocked: Visual Arts" },
];
const doubled = [...tickerItems, ...tickerItems];

function LiveTicker() {
  return (
    <div
      className="relative border-y py-4 overflow-hidden"
      style={{ background: "#111111", borderColor: "rgba(174,140,7,0.15)" }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 z-10 flex items-center px-6 pr-12"
        style={{ background: "linear-gradient(to right, #111111 60%, transparent)" }}
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#AE8C07] opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#AE8C07]" />
          </span>
          <span
            className="text-[9px] tracking-[0.25em] uppercase whitespace-nowrap"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#AE8C07" }}
          >
            Live
          </span>
        </div>
      </div>
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10"
        style={{ background: "linear-gradient(to left, #111111, transparent)" }}
      />
      <div className="ml-28 overflow-hidden">
        <motion.div
          className="flex items-center gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((item, i) => (
            <span
              key={i}
              className="shrink-0 text-sm flex items-center gap-6"
              style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.7)" }}
            >
              <span>● LIVE — {item.text}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// ── 2. Hero — Rotating Card Stack ─────────────────────────────────────────────
const heroCards = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1740741704995-6be628ee8610?w=400&q=80",
    name: "Amara J.",
    discipline: "Photography",
    label: "New Series",
    color: "#7c9cbf",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1693645325820-03c4be5b7031?w=400&q=80",
    name: "David K.",
    discipline: "Film",
    label: "Just Uploaded",
    color: "#c1440e",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1765445665873-b8dc9a67b66c?w=400&q=80",
    name: "Kemi A.",
    discipline: "Design",
    label: "Trending",
    color: "#AE8C07",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1649910855313-8cb8e2e6af9d?w=400&q=80",
    name: "Seun B.",
    discipline: "Music",
    label: "New Track",
    color: "#8b5cf6",
  },
];

const cardPositions = [
  { top: "0px", left: "0px", width: "300px", height: "400px" },
  { top: "60px", left: "200px", width: "220px", height: "300px" },
  { top: "300px", left: "20px", width: "240px", height: "280px" },
  { top: "280px", left: "260px", width: "200px", height: "260px" },
];

function PreviewHero() {
  const [activeCard, setActiveCard] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveCard((p) => (p + 1) % heroCards.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#0a0e1a" }}
    >
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-10"
        style={{ backgroundImage: grainUrl, backgroundSize: "250px" }}
      />
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.22, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, #1e3a8a 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, #AE8C07 0%, transparent 65%)" }}
        />
      </div>

      <div className="relative z-20 flex-1 flex flex-col">
        <div className="h-28" />
        <div
          className="max-w-[1400px] mx-auto px-8 lg:px-16 w-full flex-1 flex flex-col lg:flex-row items-center gap-16 pb-16"
        >
          {/* Left: headline */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-px bg-[#AE8C07]" />
              <span
                className="text-[10px] tracking-[0.35em] uppercase"
                style={{ fontFamily: "var(--font-dm-sans)", color: "#AE8C07" }}
              >
                Babcock Creators Network
              </span>
            </motion.div>

            <h1 className="leading-[0.9] tracking-tight mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="block"
                style={{ fontSize: "clamp(3.5rem,8vw,7.5rem)", fontWeight: 300, fontStyle: "italic", color: "rgba(244,229,195,0.9)" }}
              >
                Something
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
                className="block"
                style={{ fontSize: "clamp(3.5rem,8vw,7.5rem)", fontWeight: 700, color: "#F5F0E8" }}
              >
                is building
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block"
                style={{
                  fontSize: "clamp(3.5rem,8vw,7.5rem)",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #AE8C07 0%, #F5F0E8 45%, #AE8C07 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                here.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="leading-relaxed max-w-md mb-10"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "1.05rem",
                color: "rgba(232,229,223,0.55)",
              }}
            >
              A premium creative ecosystem for writers, designers, filmmakers, musicians, and photographers who are serious about their craft.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.88 }}
              className="flex items-center gap-5 flex-wrap"
            >
              <a
                href={WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-medium transition-opacity duration-300 hover:opacity-90"
                style={{
                  background: "#AE8C07",
                  color: "#1A1A1A",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Claim Your Space ↗
              </a>
              <a
                href="/gallery"
                className="text-[11px] tracking-[0.2em] uppercase flex items-center gap-1.5 transition-colors duration-300"
                style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.55)" }}
              >
                Explore the Work ↗
              </a>
            </motion.div>
          </div>

          {/* Right: rotating card stack */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[520px] hidden lg:block"
          >
            {/* Live indicator */}
            <div className="absolute -top-4 right-0 flex items-center gap-2 z-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.5)" }}
              >
                Live Activity
              </span>
            </div>

            <div className="relative h-[580px]">
              {heroCards.map((card, i) => {
                const pos = cardPositions[i];
                const isActive = i === activeCard;
                return (
                  <motion.div
                    key={card.id}
                    animate={{
                      scale: isActive ? 1.03 : 1,
                      zIndex: isActive ? 10 : 4 - i,
                      boxShadow: isActive
                        ? `0 20px 60px ${card.color}40`
                        : "0 4px 20px rgba(0,0,0,0.4)",
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute overflow-hidden cursor-pointer"
                    style={{ top: pos.top, left: pos.left, width: pos.width, height: pos.height }}
                    onClick={() => setActiveCard(i)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(10,14,26,0.9) 0%, transparent 60%)" }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-2 text-[9px] tracking-[0.2em] uppercase"
                        style={{
                          background: `${card.color}25`,
                          color: card.color,
                          border: `1px solid ${card.color}40`,
                        }}
                      >
                        <span
                          className="w-1 h-1 rounded-full animate-pulse"
                          style={{ background: card.color }}
                        />
                        {card.label}
                      </div>
                      <p
                        className="text-sm font-medium"
                        style={{ fontFamily: "var(--font-dm-sans)", color: "#F5F0E8" }}
                      >
                        {card.name}
                      </p>
                      <p
                        className="text-[10px] tracking-[0.15em] uppercase mt-0.5"
                        style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.5)" }}
                      >
                        {card.discipline}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2 justify-center mt-4">
              {heroCards.map((_, i) => (
                <button key={i} onClick={() => setActiveCard(i)} className="transition-all duration-300">
                  <span
                    className="block rounded-full transition-all duration-300"
                    style={{
                      width: i === activeCard ? "20px" : "6px",
                      height: "6px",
                      background: i === activeCard ? "#AE8C07" : "rgba(232,229,223,0.2)",
                    }}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── 3. The Vanguard ───────────────────────────────────────────────────────────
const vanguardCreators = [
  {
    id: 1,
    name: "Amara Johnson",
    handle: "@amara.j",
    discipline: "Photography",
    accentColor: "#7c9cbf",
    image: "https://images.unsplash.com/photo-1740741704995-6be628ee8610?w=800&q=80",
    headline: "The eye that turns streets into scripture.",
    quote: "I don't shoot what I see. I shoot what I feel is about to happen.",
    bio: "Amara Johnson doesn't just take photographs — she negotiates with light. At 21, her series 'Lagos, Unfiltered' has made the rounds in private galleries across three continents, not because she sought the spotlight, but because the work refused to be ignored.\n\nGrowing up in the chaos of Lagos, she developed what she calls 'a politics of noticing' — the discipline to slow down in a world that moves too fast, to find the profound in the peripheral.\n\nShe's the kind of creative who makes you question why you ever stopped paying attention.",
    tags: ["Street portraits", "Documentary", "Fine art prints"],
  },
  {
    id: 2,
    name: "David Kolade",
    handle: "@dkolade.film",
    discipline: "Film",
    accentColor: "#c1440e",
    image: "https://images.unsplash.com/photo-1656051180834-4f0857458b83?w=800&q=80",
    headline: "Directing films that feel like memories you never had.",
    quote: "Cinema is the art of making time feel different.",
    bio: "David Kolade writes, directs, and edits — not because he can't find collaborators, but because he believes in the singular vision. His debut short 'Meridian' screened at Cannes Short Film Corner at 20 years old.\n\nHis aesthetic sits somewhere between NOWNESS and Tarkovsky — contemplative, textured, deeply African without performing it.\n\nCurrently in pre-production on a full-length feature set in Port Harcourt, David represents exactly what BCN is built for: serious craft in unserious conditions.",
    tags: ["Short films", "Music videos", "Documentary"],
  },
  {
    id: 3,
    name: "Kemi Adeyemi",
    handle: "@kemi.creates",
    discipline: "Design",
    accentColor: "#AE8C07",
    image: "https://images.unsplash.com/photo-1688372296394-f8c21c15ed65?w=800&q=80",
    headline: "Building brand languages that actually mean something.",
    quote: "Good design is a refusal to add what doesn't belong.",
    bio: "Kemi Adeyemi is the designer everyone wants but few can afford. Her work is typographic, intentional, and brutally precise. She's built brand identities for seven startups, three NGOs, and one political campaign — all before graduation.\n\nWhat separates Kemi from her peers isn't technical skill (though that's obvious), it's restraint. She knows exactly what to leave out.\n\nIn a world drowning in visual noise, Kemi is a radical act of clarity.",
    tags: ["Brand identity", "Editorial design", "Type design"],
  },
  {
    id: 4,
    name: "Seun Bankole",
    handle: "@seun.wav",
    discipline: "Music",
    accentColor: "#8b5cf6",
    image: "https://images.unsplash.com/photo-1716569355086-6caed45f6855?w=800&q=80",
    headline: "Making sounds that exist between genres and continents.",
    quote: "I make music for the space between where you are and where you want to be.",
    bio: "Seun Bankole produces music that sounds like a conversation between Lagos and Berlin — afro-fusion meets ambient electronica, with a compositional sensibility that belongs to neither world entirely.\n\nHis debut EP 'Urban Frequencies' accumulated 500K streams without a single push or PR campaign. Just word of mouth, because good music travels.\n\nHe builds every sound from scratch, sampling nothing, using everything.",
    tags: ["EP production", "Scoring", "Sound design"],
  },
  {
    id: 5,
    name: "Chiamaka Eze",
    handle: "@chiamaka.writes",
    discipline: "Writing",
    accentColor: "#4ade80",
    image: "https://images.unsplash.com/photo-1704286572919-6c86d11e5409?w=800&q=80",
    headline: "Writing that sits with you long after the last sentence.",
    quote: "Writing is not communication. It's communion.",
    bio: "Chiamaka Eze writes essays the way painters paint — with texture, deliberate silence, and an acute awareness of what the page can hold. Her long-form piece 'The Weight of August' is considered required reading in certain circles.\n\nShe's currently working on a debut novel. No announcement. No deal. Just the work.\n\nIn a landscape of think-pieces and trend-chasing, Chiamaka is playing a different game entirely.",
    tags: ["Long-form essays", "Fiction", "Literary criticism"],
  },
];

function PreviewVanguard() {
  const [active, setActive] = useState(0);
  const creator = vanguardCreators[active];

  return (
    <section className="relative overflow-hidden" style={{ background: "#0c1018" }}>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: grainUrl, backgroundSize: "250px" }}
      />

      {/* Section header */}
      <div className="relative z-10 border-b" style={{ borderColor: "rgba(232,229,223,0.1)" }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16">
          <p
            className="text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#AE8C07" }}
          >
            The Vanguard — Vol. I
          </p>
          <h2
            className="leading-[0.95] tracking-tight"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2.5rem,5vw,4.5rem)",
              fontWeight: 700,
              color: "#F5F0E8",
            }}
          >
            Five creatives
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "rgba(244,229,195,0.6)" }}>
              rewriting the standard.
            </span>
          </h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="relative z-10 border-b" style={{ borderColor: "rgba(232,229,223,0.1)" }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="flex overflow-x-auto">
            {vanguardCreators.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                className="relative flex-shrink-0 flex items-center gap-3 px-6 py-5 text-left border-r"
                style={{ borderColor: "rgba(232,229,223,0.1)" }}
              >
                <span
                  className="text-[9px] tracking-[0.2em] uppercase"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: i === active ? c.accentColor : "rgba(232,229,223,0.35)",
                  }}
                >
                  {c.discipline}
                </span>
                <span
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: i === active ? "#F5F0E8" : "rgba(248,245,235,0.45)",
                  }}
                >
                  {c.name.split(" ")[0]}
                </span>
                {i === active && (
                  <motion.div
                    layoutId="pvActiveTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: c.accentColor }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Profile */}
      <AnimatePresence mode="wait">
        <motion.div
          key={creator.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
        >
          <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[80vh]">
              {/* Left: portrait */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-[50vh] lg:h-full overflow-hidden">
                  <motion.img
                    key={creator.image}
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,16,24,0.8) 0%, transparent 60%)" }} />
                  {/* Stamp */}
                  <div className="absolute top-8 left-8">
                    <span
                      className="text-[9px] tracking-[0.35em] uppercase block"
                      style={{ fontFamily: "var(--font-dm-sans)", color: creator.accentColor }}
                    >
                      BCN Vanguard
                    </span>
                    <span
                      className="text-[9px] tracking-[0.2em] uppercase block"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.4)" }}
                    >
                      {creator.discipline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: copy */}
              <div
                className="lg:col-span-7 flex flex-col justify-center px-0 lg:px-16 py-16 lg:py-24 border-l"
                style={{ borderColor: "rgba(232,229,223,0.1)" }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span
                    className="text-[9px] tracking-[0.3em] uppercase px-3 py-1.5 border"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: creator.accentColor,
                      borderColor: `${creator.accentColor}40`,
                      background: `${creator.accentColor}10`,
                    }}
                  >
                    {creator.discipline}
                  </span>
                  <span
                    className="text-[10px] tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.3)" }}
                  >
                    {creator.handle}
                  </span>
                </div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="leading-[1.15] tracking-tight mb-10"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(1.75rem,3vw,2.75rem)",
                    fontWeight: 400,
                    color: "#F5F0E8",
                  }}
                >
                  {creator.headline}
                </motion.h3>

                <motion.blockquote
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="pl-6 mb-10 border-l-2"
                  style={{ borderColor: creator.accentColor }}
                >
                  <p
                    className="text-lg italic leading-relaxed"
                    style={{ fontFamily: "var(--font-playfair)", color: "rgba(232,229,223,0.7)", fontWeight: 400 }}
                  >
                    &ldquo;{creator.quote}&rdquo;
                  </p>
                </motion.blockquote>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4 mb-10"
                >
                  {creator.bio.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="leading-relaxed"
                      style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.95rem", color: "rgba(232,229,223,0.6)" }}
                    >
                      {para}
                    </p>
                  ))}
                </motion.div>

                <div className="flex flex-wrap gap-3">
                  {creator.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] tracking-[0.15em] uppercase px-4 py-2 border"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        borderColor: "rgba(232,229,223,0.15)",
                        color: "rgba(232,229,223,0.5)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Nav */}
      <div className="relative z-10 border-t" style={{ borderColor: "rgba(232,229,223,0.1)" }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-6 flex items-center justify-between">
          <button
            onClick={() => setActive((p) => (p - 1 + vanguardCreators.length) % vanguardCreators.length)}
            className="text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 transition-colors duration-300 hover:text-[#F5F0E8]"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.4)" }}
          >
            ← Previous
          </button>
          <div className="flex items-center gap-2">
            {vanguardCreators.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}>
                <span
                  className="block rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? "24px" : "6px",
                    height: "6px",
                    background: i === active ? vanguardCreators[active].accentColor : "rgba(232,229,223,0.15)",
                  }}
                />
              </button>
            ))}
          </div>
          <button
            onClick={() => setActive((p) => (p + 1) % vanguardCreators.length)}
            className="text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 transition-colors duration-300 hover:text-[#F5F0E8]"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.4)" }}
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}

// ── 4. The Realms ─────────────────────────────────────────────────────────────
const realms = [
  {
    id: "photography",
    label: "Photography",
    accent: "#4a9eff",
    tagline: "The decisive moment, captured.",
    description: "Documentary, portrait, fine art, street. Images that alter how you see everything after.",
    count: "Open",
    works: [
      { title: "Lagos, Unfiltered", creator: "Amara J." },
      { title: "Faces of Oshodi", creator: "Bola P." },
      { title: "Market Days", creator: "Titi F." },
    ],
  },
  {
    id: "design",
    label: "Design",
    accent: "#AE8C07",
    tagline: "Intentional. Precise. Consequential.",
    description: "Brand identity, UI/UX, typography, systems. Design that solves and seduces simultaneously.",
    count: "Open",
    works: [
      { title: "Brand Identity: Eko Labs", creator: "Kemi A." },
      { title: "Type Study 001", creator: "Biodun F." },
      { title: "UI System: NairaTrack", creator: "Segun R." },
    ],
  },
  {
    id: "film",
    label: "Film & Media",
    accent: "#ff6b6b",
    tagline: "Frames that remember things for you.",
    description: "Short film, documentary, music video, commercial. Moving images that refuse to move past you.",
    count: "Open",
    works: [
      { title: "Meridian (Short)", creator: "David K." },
      { title: "Lagos at 3AM", creator: "Toyin B." },
      { title: "What We Leave", creator: "Ifunanya N." },
    ],
  },
  {
    id: "writing",
    label: "Writing",
    accent: "#c8a96e",
    tagline: "Words that carry weight.",
    description: "Essays, fiction, poetry, long-form journalism. The writers who make you stop mid-scroll.",
    count: "Open",
    works: [
      { title: "The Weight of August", creator: "Chiamaka E." },
      { title: "On Becoming", creator: "Zara A." },
      { title: "Last Lagos Summer", creator: "Efe M." },
    ],
  },
  {
    id: "music",
    label: "Music",
    accent: "#9b59b6",
    tagline: "Sound as mother tongue.",
    description: "Original production, composition, songwriting. Music built from the inside out.",
    count: "Open",
    works: [
      { title: "Urban Frequencies EP", creator: "Seun B." },
      { title: "Monsoon Sounds", creator: "Akin O." },
      { title: "Breathing Room", creator: "Ese M." },
    ],
  },
  {
    id: "visual",
    label: "Visual Arts",
    accent: "#e07070",
    tagline: "Vision made tangible.",
    description: "Painting, sculpture, mixed media, illustration. Art that asks questions the artist refuses to answer.",
    count: "Open",
    works: [
      { title: "Motherland Series", creator: "Ngozi K." },
      { title: "Abstract Grief", creator: "Tolu A." },
      { title: "Bodies in Motion", creator: "Simi O." },
    ],
  },
  {
    id: "content",
    label: "Content Creation",
    accent: "#4ade80",
    tagline: "Stories for the scroll.",
    description: "Video essays, vlogs, short-form content, digital storytelling. Content that actually means something.",
    count: "Open",
    works: [
      { title: "Behind the Network", creator: "Tunde O." },
      { title: "Lagos Lens Series", creator: "Ada M." },
      { title: "Creative Process Docs", creator: "Yemi K." },
    ],
  },
  {
    id: "tech",
    label: "Technology",
    accent: "#38bdf8",
    tagline: "Code as creative medium.",
    description: "Product design, creative tech, interactive art. Where computation meets craft.",
    count: "Open",
    works: [
      { title: "AI Art Experiments", creator: "Emeka A." },
      { title: "BCN Web Platform", creator: "Kachi O." },
      { title: "Generative Identity", creator: "Fola T." },
    ],
  },
];

function PreviewRealms() {
  const [activeRealm, setActiveRealm] = useState(0);
  const realm = realms[activeRealm];

  return (
    <section className="relative overflow-hidden" style={{ background: "#0c1018" }}>
      <div className="border-b" style={{ borderColor: "rgba(232,229,223,0.1)" }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16">
          <SectionHeader
            overline="The Ecosystem"
            headline="Explore"
            italic="the realms."
            sub="Eight disciplines. One ecosystem. Discover the work across every creative dimension of BCN."
          />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
          {/* Left: selector */}
          <div className="lg:col-span-3 border-r py-12" style={{ borderColor: "rgba(232,229,223,0.1)" }}>
            <div className="space-y-1">
              {realms.map((r, i) => (
                <button
                  key={r.id}
                  onClick={() => setActiveRealm(i)}
                  className="w-full flex items-center gap-4 px-6 py-4 text-left relative transition-all duration-300"
                  style={{ background: i === activeRealm ? `${r.accent}08` : "transparent" }}
                >
                  {i === activeRealm && (
                    <motion.div
                      layoutId="realmBar"
                      className="absolute left-0 top-0 bottom-0 w-0.5"
                      style={{ background: r.accent }}
                    />
                  )}
                  <div>
                    <p
                      className="text-sm"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        color: i === activeRealm ? "#F5F0E8" : "rgba(248,245,235,0.4)",
                      }}
                    >
                      {r.label}
                    </p>
                    <p
                      className="text-[10px] tracking-[0.1em] mt-0.5"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.25)" }}
                    >
                      {r.count}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Center */}
          <AnimatePresence mode="wait">
            <motion.div
              key={realm.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-6 border-r"
              style={{ borderColor: "rgba(232,229,223,0.1)" }}
            >
              <div
                className="relative h-64 lg:h-[50%] flex items-center justify-center"
                style={{ background: `linear-gradient(160deg, ${realm.accent}15 0%, #0c1018 100%)` }}
              >
                <div
                  className="absolute top-8 left-8 px-4 py-2 text-[10px] tracking-[0.2em] uppercase"
                  style={{
                    background: `${realm.accent}20`,
                    border: `1px solid ${realm.accent}40`,
                    color: realm.accent,
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {realm.label}
                </div>
                <p
                  className="italic text-center px-8"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(1.5rem,2.5vw,2.25rem)",
                    color: "rgba(244,229,195,0.3)",
                  }}
                >
                  {realm.tagline}
                </p>
              </div>
              <div className="p-8 lg:p-12">
                <h3
                  className="leading-tight tracking-tight mb-4"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(1.5rem,2.5vw,2.25rem)",
                    fontWeight: 400,
                    color: "#F5F0E8",
                  }}
                >
                  {realm.tagline}
                </h3>
                <p
                  className="leading-relaxed mb-8 text-sm"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.55)" }}
                >
                  {realm.description}
                </p>
                <a
                  href={WAITLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-[0.2em] uppercase transition-colors duration-200"
                  style={{ fontFamily: "var(--font-dm-sans)", color: realm.accent }}
                >
                  Join to Enter {realm.label} ↗
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: works */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${realm.id}-works`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-3 py-12"
            >
              <p
                className="text-[9px] tracking-[0.3em] uppercase px-6 mb-6"
                style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.3)" }}
              >
                Top Works
              </p>
              <div className="divide-y" style={{ borderColor: "rgba(232,229,223,0.08)" }}>
                {realm.works.map((work, i) => (
                  <motion.div
                    key={work.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="px-6 py-5"
                  >
                    <p
                      className="text-sm mb-1"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(244,229,195,0.8)" }}
                    >
                      {work.title}
                    </p>
                    <p
                      className="text-[11px]"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.4)" }}
                    >
                      {work.creator}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ── 5. Featured Works ─────────────────────────────────────────────────────────
const featuredWorks = [
  { id: 1, image: "https://images.unsplash.com/photo-1769103638491-8aea188b7417?w=600&q=80", title: "Lagos, Unfiltered", creator: "Amara J.", discipline: "Photography", upvotes: 284 },
  { id: 2, image: "https://images.unsplash.com/photo-1765445665873-b8dc9a67b66c?w=600&q=80", title: "Eko Identity System", creator: "Kemi A.", discipline: "Design", upvotes: 192 },
  { id: 3, image: "https://images.unsplash.com/photo-1693645325820-03c4be5b7031?w=600&q=80", title: "Meridian (Short Film)", creator: "David K.", discipline: "Film", upvotes: 341 },
  { id: 4, image: "https://images.unsplash.com/photo-1768982417033-485fb6d729a5?w=600&q=80", title: "Motherland Series", creator: "Ngozi K.", discipline: "Visual Arts", upvotes: 218 },
  { id: 5, image: "https://images.unsplash.com/photo-1649910855313-8cb8e2e6af9d?w=600&q=80", title: "Urban Frequencies EP", creator: "Seun B.", discipline: "Music", upvotes: 429 },
  { id: 6, image: "https://images.unsplash.com/photo-1675830028194-02f405ff664b?w=600&q=80", title: "The Weight of August", creator: "Chiamaka E.", discipline: "Writing", upvotes: 167 },
];
const workDisciplines = ["All", "Photography", "Design", "Film", "Writing", "Visual Arts", "Music"];

function PreviewWorks() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [votes, setVotes] = useState<Record<number, { count: number; active: boolean }>>(
    Object.fromEntries(featuredWorks.map((w) => [w.id, { count: w.upvotes, active: false }]))
  );

  const filtered = activeFilter === "All"
    ? featuredWorks
    : featuredWorks.filter((w) => w.discipline === activeFilter);

  const handleVote = (id: number) => {
    setVotes((prev) => ({
      ...prev,
      [id]: { count: prev[id].active ? prev[id].count - 1 : prev[id].count + 1, active: !prev[id].active },
    }));
  };

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#0d1120" }}>
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: grainUrl, backgroundSize: "250px" }}
      />
      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16">
        <SectionHeader
          overline="Featured Works"
          headline="The work"
          italic="speaks for itself."
          sub="A live portfolio of what BCN creators are making right now."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {workDisciplines.map((d) => (
            <button
              key={d}
              onClick={() => setActiveFilter(d)}
              className="px-4 py-2 text-[11px] tracking-[0.15em] uppercase transition-all duration-200"
              style={{
                fontFamily: "var(--font-dm-sans)",
                background: activeFilter === d ? "#AE8C07" : "transparent",
                color: activeFilter === d ? "#1A1A1A" : "rgba(232,229,223,0.5)",
                border: `1px solid ${activeFilter === d ? "#AE8C07" : "rgba(232,229,223,0.12)"}`,
              }}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Work grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className="overflow-hidden border transition-all duration-300 hover:border-[rgba(232,229,223,0.2)]"
                style={{ background: "#12161f", borderColor: "rgba(232,229,223,0.08)" }}
              >
                <div className="relative h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(10,14,26,0.8) 0%, transparent 60%)" }}
                  />
                  <span
                    className="absolute top-3 left-3 text-[9px] tracking-[0.2em] uppercase px-2.5 py-1"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      background: "rgba(174,140,7,0.2)",
                      color: "#AE8C07",
                      border: "1px solid rgba(174,140,7,0.3)",
                    }}
                  >
                    {work.discipline}
                  </span>
                </div>
                <div className="p-5 flex items-start justify-between">
                  <div>
                    <h4
                      className="text-sm mb-0.5 group-hover:text-[#AE8C07] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "#F5F0E8" }}
                    >
                      {work.title}
                    </h4>
                    <p
                      className="text-[11px]"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.4)" }}
                    >
                      {work.creator}
                    </p>
                  </div>
                  <button
                    onClick={() => handleVote(work.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 transition-all duration-200"
                    style={{
                      border: `1px solid ${votes[work.id]?.active ? "rgba(174,140,7,0.5)" : "rgba(232,229,223,0.1)"}`,
                      color: votes[work.id]?.active ? "#AE8C07" : "rgba(232,229,223,0.4)",
                      background: votes[work.id]?.active ? "rgba(174,140,7,0.1)" : "transparent",
                    }}
                  >
                    <span className="text-[12px]">↑</span>
                    <span className="text-[10px] tabular-nums" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {votes[work.id]?.count ?? work.upvotes}
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 6. Community Engine ───────────────────────────────────────────────────────
const annotations = [
  {
    id: 1,
    author: "Tunde O.",
    initials: "TO",
    color: "#9b59b6",
    text: "The composition here is doing so much — the negative space in the upper third isn't empty, it's load-bearing. Everything below it earns its weight because of what you chose not to fill.",
    timestamp: "2h ago",
    upvotes: 47,
    replyCount: 3,
    area: { top: "8%", left: "5%", width: "60%", height: "35%" },
  },
  {
    id: 2,
    author: "Chioma E.",
    initials: "CE",
    color: "#AE8C07",
    text: "This is where the light breaks — literally the most important decision in the entire frame. Every other choice you made derives its meaning from this one. The way it bleeds into shadow is cinema.",
    timestamp: "4h ago",
    upvotes: 62,
    replyCount: 7,
    area: { top: "40%", left: "30%", width: "45%", height: "30%" },
  },
  {
    id: 3,
    author: "Seun B.",
    initials: "SB",
    color: "#4a9eff",
    text: "The grain isn't noise — it's texture with purpose. You've essentially created the visual equivalent of a vinyl record. The imperfection is the point.",
    timestamp: "6h ago",
    upvotes: 34,
    replyCount: 2,
    area: { top: "60%", left: "55%", width: "40%", height: "35%" },
  },
];

function PreviewCommunity() {
  const [activeAnn, setActiveAnn] = useState<number | null>(1);
  const [annVotes, setAnnVotes] = useState<Record<number, { count: number; active: boolean }>>(
    Object.fromEntries(annotations.map((a) => [a.id, { count: a.upvotes, active: false }]))
  );

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#0d1120" }}>
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: grainUrl, backgroundSize: "250px" }}
      />
      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16">
        <SectionHeader
          overline="Community Engine"
          headline="Critique,"
          italic="not commentary."
          sub="Annotate specific moments in a work. Build a culture of real creative critique."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Work */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden" style={{ background: "#12161f" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1740741704995-6be628ee8610?w=1080&q=80"
                alt="Annotated work"
                className="w-full h-full object-cover"
              />
              {annotations.map((ann) => {
                const isActive = activeAnn === ann.id;
                return (
                  <button
                    key={ann.id}
                    onClick={() => setActiveAnn(isActive ? null : ann.id)}
                    className="absolute transition-all duration-300"
                    style={{
                      top: ann.area.top,
                      left: ann.area.left,
                      width: ann.area.width,
                      height: ann.area.height,
                    }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background: isActive ? `${ann.color}20` : `${ann.color}08`,
                        border: `1px solid ${isActive ? `${ann.color}60` : `${ann.color}25`}`,
                      }}
                    />
                    <div
                      className="absolute -top-3 -right-3 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium text-white shadow-lg z-10"
                      style={{ background: ann.color, transform: isActive ? "scale(1.2)" : "scale(1)" }}
                    >
                      {annotations.indexOf(ann) + 1}
                    </div>
                  </button>
                );
              })}
              <div
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{ background: "linear-gradient(to top, rgba(10,14,26,0.9) 0%, transparent 100%)" }}
              >
                <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "#F5F0E8" }}>
                  Lagos, Unfiltered — No. 07
                </p>
                <p className="text-[11px] mt-0.5" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.5)" }}>
                  Amara Johnson · Photography
                </p>
              </div>
            </div>

            <button
              className="w-full mt-4 py-4 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                fontFamily: "var(--font-dm-sans)",
                border: "1px dashed rgba(232,229,223,0.15)",
                color: "rgba(232,229,223,0.35)",
              }}
            >
              Add your annotation
            </button>
          </div>

          {/* Annotations */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {annotations.map((ann) => {
              const vote = annVotes[ann.id];
              const isActive = activeAnn === ann.id;
              return (
                <motion.div
                  key={ann.id}
                  onClick={() => setActiveAnn(isActive ? null : ann.id)}
                  className="cursor-pointer border-l-[3px] pl-5 py-5 pr-5"
                  style={{
                    background: isActive ? `${ann.color}06` : "#12161f",
                    border: `1px solid ${isActive ? `${ann.color}40` : "rgba(232,229,223,0.06)"}`,
                    borderLeftColor: isActive ? ann.color : `${ann.color}40`,
                    borderLeftWidth: "3px",
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-medium text-white"
                        style={{ background: ann.color }}
                      >
                        {ann.initials}
                      </div>
                      <div>
                        <p className="text-[11px]" style={{ fontFamily: "var(--font-dm-sans)", color: "#F5F0E8" }}>
                          {ann.author}
                        </p>
                        <p className="text-[10px]" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.3)" }}>
                          {ann.timestamp}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); setAnnVotes((p) => ({ ...p, [ann.id]: { count: p[ann.id].active ? p[ann.id].count - 1 : p[ann.id].count + 1, active: !p[ann.id].active } })); }}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-[10px]"
                      style={{
                        border: `1px solid ${vote.active ? `${ann.color}50` : "rgba(232,229,223,0.1)"}`,
                        color: vote.active ? ann.color : "rgba(232,229,223,0.4)",
                        background: vote.active ? `${ann.color}10` : "transparent",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    >
                      ↑ {vote.count}
                    </button>
                  </div>
                  <p
                    className="leading-relaxed text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.65)" }}
                  >
                    {ann.text}
                  </p>
                </motion.div>
              );
            })}

            <div className="mt-2 p-5" style={{ border: "1px solid rgba(174,140,7,0.15)", background: "rgba(174,140,7,0.05)" }}>
              <p
                className="text-[10px] tracking-[0.15em] uppercase mb-2"
                style={{ fontFamily: "var(--font-dm-sans)", color: "#AE8C07" }}
              >
                Our annotation culture
              </p>
              <p
                className="text-[11px] leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.45)" }}
              >
                We don&apos;t do downvotes. We don&apos;t do roasting. BCN runs on genuine critique — the kind that makes people better. If you can&apos;t say why it works, you&apos;re not annotating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 7. Collaboration Finder ───────────────────────────────────────────────────
const matchedCreators = [
  { id: 1, name: "Chiamaka O.", skill: "Graphic Designer", match: "95", color: "#AE8C07", discipline: "Design" },
  { id: 2, name: "Emmanuel T.", skill: "Video Editor", match: "91", color: "#ff6b6b", discipline: "Film" },
  { id: 3, name: "Folake A.", skill: "Copywriter", match: "88", color: "#c8a96e", discipline: "Writing" },
  { id: 4, name: "Joshua K.", skill: "Music Producer", match: "84", color: "#9b59b6", discipline: "Music" },
];

function PreviewCollaboration() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#0d1120" }}>
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: grainUrl, backgroundSize: "250px" }}
      />
      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16">
        <SectionHeader
          overline="Collaborate"
          headline="Find who you"
          italic="were looking for."
          sub="Every great project started as two creatives finding each other. The ones you need are already here."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px mb-16" style={{ background: "rgba(232,229,223,0.08)" }}>
          <div className="p-10" style={{ background: "#0d1120" }}>
            <div className="flex items-start gap-5 mb-8">
              <div
                className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1"
                style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.25)" }}
              >
                <span style={{ color: "#3b82f6" }}>⌕</span>
              </div>
              <div>
                <h3
                  className="text-2xl tracking-tight mb-1"
                  style={{ fontFamily: "var(--font-playfair)", color: "#F5F0E8" }}
                >
                  I need a
                </h3>
                <p
                  className="text-[11px]"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.4)" }}
                >
                  Describe who you&apos;re looking for
                </p>
              </div>
            </div>
            <input
              type="text"
              placeholder="e.g., filmmaker who can shoot documentary-style"
              className="w-full bg-transparent text-sm py-4 outline-none transition-colors duration-300"
              style={{
                fontFamily: "var(--font-dm-sans)",
                borderBottom: "1px solid rgba(232,229,223,0.15)",
                color: "#F5F0E8",
              }}
            />
          </div>
          <div className="p-10" style={{ background: "#0d1120" }}>
            <div className="flex items-start gap-5 mb-8">
              <div
                className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1"
                style={{ background: "rgba(174,140,7,0.15)", border: "1px solid rgba(174,140,7,0.25)" }}
              >
                <span style={{ color: "#AE8C07" }}>+</span>
              </div>
              <div>
                <h3
                  className="text-2xl tracking-tight mb-1"
                  style={{ fontFamily: "var(--font-playfair)", color: "#F5F0E8" }}
                >
                  I offer
                </h3>
                <p
                  className="text-[11px]"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.4)" }}
                >
                  What you bring to a collaboration
                </p>
              </div>
            </div>
            <input
              type="text"
              placeholder="e.g., Brand identity design & type direction"
              className="w-full bg-transparent text-sm py-4 outline-none transition-colors duration-300"
              style={{
                fontFamily: "var(--font-dm-sans)",
                borderBottom: "1px solid rgba(232,229,223,0.15)",
                color: "#F5F0E8",
              }}
            />
          </div>
        </div>

        <p
          className="text-[9px] tracking-[0.3em] uppercase mb-8"
          style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.3)" }}
        >
          Top Matches
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {matchedCreators.map((creator, i) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
            >
              <div
                className="border transition-all duration-500 overflow-hidden"
                style={{
                  background: "#12161f",
                  borderColor: "rgba(232,229,223,0.08)",
                }}
              >
                <div
                  className="relative h-40 flex items-center justify-center"
                  style={{ background: `linear-gradient(160deg, ${creator.color}20 0%, #12161f 100%)` }}
                >
                  <span
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-playfair)", color: `${creator.color}60` }}
                  >
                    {creator.name[0]}
                  </span>
                  <div
                    className="absolute top-3 right-3 px-2.5 py-1 text-[10px] tracking-wider"
                    style={{
                      background: `${creator.color}20`,
                      border: `1px solid ${creator.color}40`,
                      color: creator.color,
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    {creator.match}% match
                  </div>
                </div>
                <div className="p-5">
                  <h4
                    className="text-sm mb-0.5 group-hover:text-[#AE8C07] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-dm-sans)", color: "#F5F0E8" }}
                  >
                    {creator.name}
                  </h4>
                  <p className="text-[11px] mb-3" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.4)" }}>
                    {creator.skill}
                  </p>
                  <span
                    className="text-[9px] tracking-[0.15em] uppercase px-2.5 py-1"
                    style={{
                      background: `${creator.color}10`,
                      color: creator.color,
                      border: `1px solid ${creator.color}25`,
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    {creator.discipline}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 8. Meet the Team ──────────────────────────────────────────────────────────
const team = [
  {
    id: 1,
    name: "Victor Oluwasola",
    role: "Executive President",
    roleTag: "The Visionary",
    color: "#AE8C07",
    building: "Building the infrastructure for creative culture at Babcock.",
    blurb: "The person who decided this community shouldn't just exist — it should matter. Victor runs BCN with the conviction of someone who knows exactly why this is necessary.",
    discipline: "Strategy · Culture · Systems",
  },
  {
    id: 2,
    name: "Vice President",
    role: "Vice President",
    roleTag: "The Architect",
    color: "#4a9eff",
    building: "Designing the systems that let a hundred creative visions coexist without chaos.",
    blurb: "The architect of BCN's internal structure. Where others see a student organisation, they see a framework for the most ambitious creative institution on campus.",
    discipline: "Structure · Planning · Vision",
  },
  {
    id: 3,
    name: "Olamide Fatunase",
    role: "Director of Programs",
    roleTag: "The Connector",
    color: "#4ade80",
    building: "Making BCN members feel like they've always been in the same room.",
    blurb: "Olamide manages the invisible — how people relate, how collaborations start, why someone who almost quit stays. She designs belonging.",
    discipline: "Programs · Events · Community",
  },
  {
    id: 4,
    name: "Kachi Obata",
    role: "Director of Protocol & Logistics",
    roleTag: "The Builder",
    color: "#9b59b6",
    building: "Building the platform and the processes that make all of this possible.",
    blurb: "Kachi refuses to let execution be an afterthought. Every event, platform, and system within BCN has been considered, argued over, and refined. Nothing without purpose.",
    discipline: "Logistics · Tech · Protocol",
  },
];

function PreviewTeam() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#0a0e1a" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(174,140,7,0.2), transparent)" }} />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: grainUrl, backgroundSize: "250px" }}
      />
      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16">
        <SectionHeader
          overline="The Movement"
          headline="The people"
          italic="building this."
          sub="Not a management team. Not a committee. People who care deeply about what creative culture could be."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(232,229,223,0.08)" }}>
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group"
              style={{ background: "#0a0e1a" }}
            >
              {/* Gradient portrait placeholder */}
              <div
                className="relative h-72 overflow-hidden"
                style={{ background: `linear-gradient(to bottom, ${member.color}15 0%, #0a0e1a 100%)` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-5xl font-bold opacity-20"
                    style={{ fontFamily: "var(--font-playfair)", color: member.color }}
                  >
                    {member.name[0]}
                  </span>
                </div>
                <div className="absolute top-5 left-5">
                  <span
                    className="text-[9px] tracking-[0.25em] uppercase px-3 py-1.5"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      background: `${member.color}20`,
                      color: member.color,
                      border: `1px solid ${member.color}40`,
                    }}
                  >
                    {member.roleTag}
                  </span>
                </div>
              </div>

              <div className="p-7 border-t" style={{ borderColor: "rgba(232,229,223,0.08)" }}>
                <div className="mb-5">
                  <h3
                    className="text-lg mb-1 tracking-tight"
                    style={{ fontFamily: "var(--font-playfair)", fontWeight: 600, color: "#F5F0E8" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-[10px] tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.4)" }}
                  >
                    {member.role}
                  </p>
                </div>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.55)" }}
                >
                  {member.blurb}
                </p>
                <div
                  className="px-4 py-3 mb-5 border-l-2"
                  style={{ borderColor: member.color }}
                >
                  <p
                    className="text-[9px] tracking-[0.2em] uppercase mb-1.5"
                    style={{ fontFamily: "var(--font-dm-sans)", color: member.color }}
                  >
                    Building
                  </p>
                  <p
                    className="text-[11px] leading-relaxed italic"
                    style={{ fontFamily: "var(--font-playfair)", color: "rgba(232,229,223,0.6)", fontSize: "0.9rem" }}
                  >
                    &ldquo;{member.building}&rdquo;
                  </p>
                </div>
                <p
                  className="text-[10px] tracking-wider"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.3)" }}
                >
                  {member.discipline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p
            className="italic max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.25rem,2vw,1.75rem)",
              color: "rgba(232,229,223,0.4)",
            }}
          >
            &ldquo;We&apos;re not building a club. We&apos;re building the infrastructure for creative culture at Babcock.&rdquo;
          </p>
          <p
            className="text-[10px] tracking-[0.2em] uppercase mt-4"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.25)" }}
          >
            — The BCN Team
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ── 9. Join Section ───────────────────────────────────────────────────────────
const joinDisciplines = ["Photography", "Design", "Film & Media", "Writing", "Music", "Visual Arts", "Technology", "Other"];

function PreviewJoin() {
  const [selectedDiscipline, setSelectedDiscipline] = useState("");

  return (
    <section className="relative overflow-hidden" style={{ background: "#060a14" }}>
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: grainUrl, backgroundSize: "250px" }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, #1e3a8a 0%, transparent 65%)" }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p
              className="text-[10px] tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: "var(--font-dm-sans)", color: "#AE8C07" }}
            >
              Join the Movement
            </p>
            <h2
              className="leading-[0.9] tracking-tight mb-8"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.75rem,5vw,5rem)",
                fontWeight: 700,
                color: "#F5F0E8",
              }}
            >
              You&apos;ve been
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "rgba(244,229,195,0.55)" }}>
                looking for this.
              </span>
            </h2>
            <p
              className="leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-dm-sans)", fontSize: "1rem", color: "rgba(232,229,223,0.55)" }}
            >
              BCN is the system that was missing. The serious ones are already here. The question is whether you&apos;re one of them.
            </p>

            {/* Perks */}
            {[
              { icon: "★", color: "#AE8C07", title: "Early Feature Priority", sub: "Your work gets seen first." },
              { icon: "⚡", color: "#4a9eff", title: "Exclusive Opportunities", sub: "First access to paid collaborations." },
              { icon: "🔒", color: "#9b59b6", title: "Private Event Access", sub: "Invite-only creative sessions." },
              { icon: "◈", color: "#4ade80", title: "Founder's Badge", sub: "You were here before it was obvious." },
            ].map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 mb-5"
              >
                <div
                  className="w-8 h-8 flex items-center justify-center text-sm flex-shrink-0"
                  style={{ background: `${perk.color}15`, border: `1px solid ${perk.color}30` }}
                >
                  <span style={{ color: perk.color }}>{perk.icon}</span>
                </div>
                <div>
                  <p className="text-sm mb-0.5" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(244,229,195,0.8)" }}>
                    {perk.title}
                  </p>
                  <p className="text-[11px]" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.4)" }}>
                    {perk.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div
              className="p-8 lg:p-12 backdrop-blur-sm"
              style={{ border: "1px solid rgba(232,229,223,0.1)", background: "rgba(10,14,26,0.6)" }}
            >
              <h3
                className="text-2xl tracking-tight mb-2"
                style={{ fontFamily: "var(--font-playfair)", color: "#F5F0E8" }}
              >
                Apply to join BCN
              </h3>
              <p
                className="text-sm mb-10"
                style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.45)" }}
              >
                Not a registration form. An introduction.
              </p>

              <div className="space-y-8">
                <div>
                  <label
                    className="block text-[10px] tracking-[0.2em] uppercase mb-3"
                    style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.4)" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="What do people call you?"
                    className="w-full bg-transparent text-sm py-3 outline-none transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      borderBottom: "1px solid rgba(232,229,223,0.15)",
                      color: "#F5F0E8",
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-[10px] tracking-[0.2em] uppercase mb-3"
                    style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.4)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Where we reach you"
                    className="w-full bg-transparent text-sm py-3 outline-none transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      borderBottom: "1px solid rgba(232,229,223,0.15)",
                      color: "#F5F0E8",
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-[10px] tracking-[0.2em] uppercase mb-3"
                    style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.4)" }}
                  >
                    Your Discipline
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {joinDisciplines.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setSelectedDiscipline(d)}
                        className="px-4 py-2 text-[10px] tracking-[0.15em] uppercase transition-all duration-200"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          background: selectedDiscipline === d ? "#AE8C07" : "transparent",
                          color: selectedDiscipline === d ? "#1A1A1A" : "rgba(232,229,223,0.4)",
                          border: `1px solid ${selectedDiscipline === d ? "#AE8C07" : "rgba(232,229,223,0.12)"}`,
                        }}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <a
                  href={WAITLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-5 text-[11px] tracking-[0.25em] uppercase font-medium transition-colors duration-300 hover:bg-[#F5F0E8]"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    background: "#AE8C07",
                    color: "#1A1A1A",
                    display: "flex",
                  }}
                >
                  Claim My Space in BCN ↗
                </a>
                <p
                  className="text-[10px] text-center leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(232,229,223,0.25)" }}
                >
                  Applications reviewed within 48 hours. We read every single one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function PreviewContent() {
  return (
    <>
      {/* Preview banner */}
      <div
        className="fixed top-0 left-0 right-0 z-[99999] flex items-center justify-center h-9 text-center"
        style={{ background: "#1a0a00", fontFamily: "var(--font-dm-sans)" }}
      >
        <p className="text-[12px]" style={{ color: "#AE8C07" }}>
          🔒 Preview only — not public. This page is a work in progress.
        </p>
      </div>

      <div style={{ paddingTop: "36px" }}>
        <Navbar forceDark />
        <main>
          <LiveTicker />
          <PreviewHero />
          <PreviewVanguard />
          <PreviewRealms />
          <PreviewWorks />
          <PreviewCommunity />
          <PreviewCollaboration />
          <PreviewTeam />
          <PreviewJoin />
        </main>
        <Footer />
      </div>
    </>
  );
}
