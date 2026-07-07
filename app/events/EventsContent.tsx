"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { events, BCNEvent } from "../data/events";
import InterestForm from "../components/InterestForm";

const WAITLIST_URL = "https://forms.gle/BL2zJmTDnoG3wjG16";

type Filter = "all" | "upcoming" | "past";

function sortEvents(evts: BCNEvent[]): BCNEvent[] {
  return [...evts].sort((a, b) => {
    const order = { upcoming: 0, ongoing: 1, past: 2 };
    if (a.status !== b.status) return order[a.status] - order[b.status];
    if (a.status === "past") return b.dateISO.localeCompare(a.dateISO);
    return a.dateISO.localeCompare(b.dateISO);
  });
}

function StatusBadge({ status }: { status: BCNEvent["status"] }) {
  if (status === "upcoming") {
    return (
      <span
        className="inline-block px-3 py-1 text-[10px] font-bold tracking-[2px] uppercase rounded-full"
        style={{
          background: "rgba(174,140,7,0.15)",
          color: "#AE8C07",
          border: "1px solid rgba(174,140,7,0.3)",
          fontFamily: "var(--font-dm-sans)",
        }}
      >
        Upcoming
      </span>
    );
  }
  if (status === "ongoing") {
    return (
      <span
        className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold tracking-[2px] uppercase rounded-full"
        style={{
          background: "rgba(74,222,128,0.1)",
          color: "#4ade80",
          border: "1px solid rgba(74,222,128,0.25)",
          fontFamily: "var(--font-dm-sans)",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
        Happening Now
      </span>
    );
  }
  return (
    <span
      className="inline-block px-3 py-1 text-[10px] font-bold tracking-[2px] uppercase rounded-full"
      style={{
        background: "rgba(255,255,255,0.05)",
        color: "#555555",
        border: "1px solid #333333",
        fontFamily: "var(--font-dm-sans)",
      }}
    >
      Past
    </span>
  );
}

function DisciplineTags({ disciplines }: { disciplines: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {disciplines.map((d) => (
        <span
          key={d}
          className="px-2.5 py-1 text-[11px] rounded"
          style={{
            color: "#555555",
            border: "1px solid #333333",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          {d}
        </span>
      ))}
    </div>
  );
}

function EventActions({ event }: { event: BCNEvent }) {
  const [emailOpen, setEmailOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Case 4: ongoing
  if (event.status === "ongoing") {
    return (
      <a
        href={event.externalRegistrationUrl || "#"}
        className="text-[#AE8C07] text-[13px] font-semibold animate-pulse"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        Happening Now →
      </a>
    );
  }

  // Case 3: past
  if (event.status === "past") {
    return (
      <div className="flex flex-col gap-3">
        {event.galleryEventSlug && (
          <Link
            href={`/gallery?event=${event.galleryEventSlug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold transition-colors duration-200 rounded"
            style={{
              border: "1px solid #333333",
              color: "#F5F0E8",
              fontFamily: "var(--font-dm-sans)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#AE8C07";
              (e.currentTarget as HTMLAnchorElement).style.color = "#AE8C07";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#333333";
              (e.currentTarget as HTMLAnchorElement).style.color = "#F5F0E8";
            }}
          >
            Catch Highlights ↗
          </Link>
        )}
        {event.highlights && (
          <details className="group">
            <summary
              className="cursor-pointer text-[13px] select-none"
              style={{ color: "#555555", fontFamily: "var(--font-dm-sans)" }}
            >
              Event highlights
            </summary>
            <ul className="mt-3 space-y-1.5 pl-3 border-l border-[#333]">
              {event.highlights.map((h, i) => (
                <li
                  key={i}
                  className="text-[12px] leading-relaxed"
                  style={{ color: "#666666", fontFamily: "var(--font-dm-sans)" }}
                >
                  {h}
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
    );
  }

  // Case 1: bcn-hosted + upcoming
  if (event.type === "bcn-hosted" && event.status === "upcoming") {
    return (
      <div className="flex flex-col gap-3 items-start">
        <button
          onClick={() => setEmailOpen((v) => !v)}
          className="px-4 py-2 text-[12px] font-semibold transition-all duration-200 rounded"
          style={{
            border: "1px solid #AE8C07",
            color: "#AE8C07",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          Register for Updates
        </button>

        <AnimatePresence>
          {emailOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden w-full"
            >
              {submitted ? (
                <p
                  className="text-[12px] text-[#4ade80] py-2"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  You&apos;re on the list.
                </p>
              ) : (
                <div className="flex gap-2 pt-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@babcock.edu.ng"
                    className="flex-1 bg-transparent border-b border-[#333] text-[#F5F0E8] text-[12px] py-2 outline-none placeholder:text-[#444] transition-colors duration-200 focus:border-[#AE8C07]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                  <button
                    onClick={() => email && setSubmitted(true)}
                    className="px-3 py-1.5 text-[11px] font-semibold bg-[#AE8C07] text-[#1A1A1A] rounded transition-opacity duration-200 hover:opacity-90"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Notify Me
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-[12px]" style={{ color: "#555555", fontFamily: "var(--font-dm-sans)" }}>
          BCN members only ·{" "}
          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#AE8C07] transition-colors duration-200"
            style={{ color: "#555555" }}
          >
            Join BCN to Attend ↗
          </a>
        </p>
      </div>
    );
  }

  // Case 2: co-hosted / external + upcoming
  if ((event.type === "co-hosted" || event.type === "external") && event.status === "upcoming") {
    if (!event.externalRegistrationUrl) {
      return (
        <button
          disabled
          className="px-4 py-2 text-[12px] font-semibold rounded opacity-40 cursor-not-allowed"
          style={{
            background: "#333333",
            color: "#666666",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          Registration Opening Soon
        </button>
      );
    }
    return (
      <InterestForm eventId={event.id} redirectUrl={event.externalRegistrationUrl} />
    );
  }

  return null;
}

// Desktop row
function EventRow({ event, index }: { event: BCNEvent; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="group border-b border-[#222222] transition-colors duration-300 hover:bg-white/[0.02]"
    >
      {/* Desktop layout */}
      <div className="hidden md:grid gap-12 py-12 items-start" style={{ gridTemplateColumns: "160px 1fr auto auto" }}>
        {/* Col 1: Date + badge */}
        <div className="flex flex-col gap-3">
          <p
            className="leading-tight"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "14px",
              fontWeight: 700,
              color: "#AE8C07",
              whiteSpace: "pre-line",
            }}
          >
            {event.date}
          </p>
          <StatusBadge status={event.status} />
        </div>

        {/* Col 2: Info */}
        <div>
          <h3
            className="leading-tight tracking-tight"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "28px",
              fontWeight: 700,
              color: "#F5F0E8",
              letterSpacing: "-0.5px",
            }}
          >
            {event.title}
          </h3>
          <p
            className="mt-1.5 italic"
            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "14px", color: "#666666" }}
          >
            {event.tagline}
          </p>
          {event.disciplines && <DisciplineTags disciplines={event.disciplines} />}
          {event.organizer && (
            <p
              className="mt-2 text-[13px]"
              style={{ fontFamily: "var(--font-dm-sans)", color: "#555555" }}
            >
              Co-hosted with {event.organizer}
            </p>
          )}
        </div>

        {/* Col 3: Venue/meta */}
        <div className="flex flex-col gap-2 text-right min-w-[160px]">
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "13px", color: "#666666" }}>
            {event.venue}
          </p>
          {event.attendeeCount && (
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "12px", color: "#444444" }}>
              ~{event.attendeeCount.toLocaleString()} attendees
            </p>
          )}
          {event.time && (
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "13px", color: "#555555" }}>
              {event.time}
            </p>
          )}
        </div>

        {/* Col 4: Actions */}
        <div className="min-w-[180px]">
          <EventActions event={event} />
        </div>
      </div>

      {/* Mobile card */}
      <div
        className="md:hidden mb-4 p-6 rounded-lg"
        style={{ background: "#111111", border: "1px solid #222222" }}
      >
        <div className="flex items-center justify-between mb-3">
          <StatusBadge status={event.status} />
          <p
            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "12px", color: "#AE8C07", fontWeight: 700 }}
          >
            {event.date}
          </p>
        </div>
        <h3
          className="mb-1 leading-tight"
          style={{ fontFamily: "var(--font-playfair)", fontSize: "22px", fontWeight: 700, color: "#F5F0E8" }}
        >
          {event.title}
        </h3>
        <p
          className="italic mb-3"
          style={{ fontFamily: "var(--font-dm-sans)", fontSize: "13px", color: "#666666" }}
        >
          {event.tagline}
        </p>
        <p
          className="mb-1 text-[12px]"
          style={{ fontFamily: "var(--font-dm-sans)", color: "#555555" }}
        >
          {event.venue}
        </p>
        {event.organizer && (
          <p className="text-[12px] mb-3" style={{ fontFamily: "var(--font-dm-sans)", color: "#555555" }}>
            Co-hosted with {event.organizer}
          </p>
        )}
        {event.disciplines && <DisciplineTags disciplines={event.disciplines} />}
        <div className="mt-5">
          <EventActions event={event} />
        </div>
      </div>
    </motion.div>
  );
}

export default function EventsContent() {
  const [filter, setFilter] = useState<Filter>("all");

  const sorted = sortEvents(events);
  const filtered = filter === "all" ? sorted : sorted.filter((e) => e.status === filter);

  const tabs: { key: Filter; label: string }[] = [
    { key: "all", label: "ALL" },
    { key: "upcoming", label: "UPCOMING" },
    { key: "past", label: "PAST" },
  ];

  return (
    <>
      <Navbar forceDark />
      <main className="min-h-screen bg-[#1A1A1A]">
        {/* Section 1: Page header */}
        <section className="bg-[#1A1A1A] pt-[calc(72px+80px)] pb-20 px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="mb-5 uppercase tracking-[4px] text-[12px] font-bold"
              style={{ fontFamily: "var(--font-dm-sans)", color: "#AE8C07" }}
            >
              Events
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
              What BCN is <em>up to.</em>
            </h1>
            <p
              className="max-w-[480px]"
              style={{ fontFamily: "var(--font-dm-sans)", fontSize: "16px", color: "#666666", lineHeight: 1.6 }}
            >
              Past, present, and coming — every event BCN runs, joins, or builds.
            </p>
          </motion.div>
        </section>

        {/* Section 2: Sticky filter tabs */}
        <div
          className="sticky z-50 border-b"
          style={{ top: "72px", background: "#1A1A1A", borderColor: "#333333" }}
        >
          <div className="px-6 md:px-20 flex gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className="relative py-4 mr-8 text-[13px] font-semibold tracking-[2px] uppercase transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: filter === tab.key ? "#F5F0E8" : "#666666",
                }}
              >
                {tab.label}
                {filter === tab.key && (
                  <motion.span
                    layoutId="filter-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#AE8C07]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Section 3: Event list */}
        <section className="px-6 md:px-20 py-20">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-24 text-center"
              >
                <p
                  className="text-[18px] mb-3"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "#444444" }}
                >
                  Nothing here yet.
                </p>
                <p
                  style={{ fontFamily: "var(--font-dm-sans)", fontSize: "14px", color: "#444444" }}
                >
                  Check back soon — BCN is always building something.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={filter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="border-t border-[#222222]">
                  {filtered.map((event, i) => (
                    <EventRow key={event.id} event={event} index={i} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>
      <Footer />
    </>
  );
}
