// To add a new event, add an entry to this array. No other files need to change.

export type EventStatus = "upcoming" | "ongoing" | "past";
export type EventType = "bcn-hosted" | "co-hosted" | "external";

export interface BCNEvent {
  id: string;
  title: string;
  tagline: string;
  description: string;
  date: string;
  dateISO: string;
  time?: string;
  venue: string;
  type: EventType;
  status: EventStatus;
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

export const events: BCNEvent[] = [
  {
    id: "ai-biv-summit-2026",
    title: "AI & BIV Summit 2026",
    tagline: "Where technology met creative ambition.",
    description:
      "A full-day summit bringing together Babcock's brightest creative and tech minds to explore the intersection of artificial intelligence and creative practice. Panels, demos, live experiments, and conversations that mattered.",
    date: "April 21–22, 2026",
    dateISO: "2026-04-21",
    venue: "Babcock University, Main Campus",
    type: "co-hosted",
    status: "past",
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
    status: "past",
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
    tagline: "The academy is coming to campus.",
    description:
      "FrameXpo brings its Academy program to Babcock — a hands-on creative experience for photographers, filmmakers, and visual storytellers. BCN members who express interest will be directed to the FrameXpo Academy registration page to secure their spot.",
    date: "July 5, 2026",
    dateISO: "2026-07-05",
    time: "Sunday",
    venue: "Babcock University",
    type: "co-hosted",
    status: "upcoming",
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
    status: "upcoming",
    disciplines: ["Photography", "Design", "Writing", "Film"],
  },
];
