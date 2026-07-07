// To add a new event, add an entry to this array. No other files need to change.
// Status is computed automatically from dateISO (and endDateISO for multi-day events).
// Set status: "ongoing" to manually override (e.g. for live events).

export type EventStatus = "upcoming" | "ongoing" | "past";
export type EventType = "bcn-hosted" | "co-hosted" | "external";

export interface BCNEvent {
  id: string;
  title: string;
  tagline: string;
  description: string;
  date: string;
  dateISO: string;
  endDateISO?: string;
  time?: string;
  venue: string;
  type: EventType;
  status?: "ongoing";
  disciplines?: string[];
  organizer?: string;
  organizerLogo?: string;
  giveaways?: string;
  externalRegistrationUrl?: string;
  galleryEventSlug?: string;
  coverImage?: string;
  highlights?: string[];
  attendeeCount?: number;
}

export function getEventStatus(event: BCNEvent): EventStatus {
  if (event.status === "ongoing") return "ongoing";
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const end = new Date(event.endDateISO ?? event.dateISO);
  end.setHours(0, 0, 0, 0);
  end.setDate(end.getDate() + 1);
  return today >= end ? "past" : "upcoming";
}

export const events: BCNEvent[] = [
  {
    id: "ai-biv-summit-2026",
    title: "AI & BIV Summit 2026",
    tagline: "Where technology met creative ambition.",
    description:
      "A full-day summit bringing together Babcock's brightest creative and tech minds to explore the intersection of artificial intelligence and creative practice. Panels, demos, live experiments, and conversations that mattered.",
    date: "April 21–22, 2026",
    dateISO: "2026-04-21",
    endDateISO: "2026-04-22",
    venue: "Babcock University, Main Campus",
    type: "co-hosted",
    disciplines: ["Technology", "Design", "Film", "Photography"],
    organizer: "BIV (Babcock Innovation Village)",
    galleryEventSlug: "ai-biv-summit-2026",
    highlights: [
      "53 photographs captured across the summit",
      "Cross-discipline panels on AI and creative work",
      "Live demos and collaborative sessions",
      "Full gallery available",
    ],
    attendeeCount: 200,
  },
  {
    id: "creative-summit-2026",
    title: "BCN Creative Summit 2026",
    tagline: "The room where it happened.",
    description:
      "BCN's flagship event of the pilot session. A showcase of creative work, panel discussions, networking, and the official public debut of the Babcock Creators Network to the university community.",
    date: "March 29, 2026",
    dateISO: "2026-03-29",
    venue: "Babcock University",
    type: "bcn-hosted",
    disciplines: ["Photography", "Design", "Writing", "Film", "Music"],
    galleryEventSlug: "creative-summit-2026",
    highlights: [
      "102 photographs from the event",
      "BCN's official public debut",
      "Multi-discipline creative showcase",
      "Full gallery available",
    ],
    attendeeCount: 300,
  },
  {
    id: "framexpo-campus-storm-2026",
    title: "FrameXpo Campus Storm",
    tagline: "The academy came to campus.",
    description:
      "FrameXpo brought its Academy program to Babcock — a hands-on creative experience for photographers, filmmakers, and visual storytellers.",
    date: "July 5, 2026",
    dateISO: "2026-07-05",
    time: "Sunday",
    venue: "Babcock University",
    type: "co-hosted",
    disciplines: ["Photography", "Film", "Visual Arts"],
    organizer: "FrameXpo",
    externalRegistrationUrl: "https://framexpo.co/academy/",
  },
  {
    id: "bcn-workshop-series-2026",
    title: "BCN Workshop Series",
    tagline: "Learn. Build. Ship.",
    description:
      "A recurring series of focused skill-building workshops across BCN's creative disciplines. Each session is led by a practitioner — no theory, just practice. Open to BCN members only.",
    date: "Coming Soon",
    dateISO: "2026-09-01",
    time: "TBA",
    venue: "BCN Studio, Main Campus",
    type: "bcn-hosted",
    disciplines: ["Photography", "Design", "Writing", "Film"],
  },
];
