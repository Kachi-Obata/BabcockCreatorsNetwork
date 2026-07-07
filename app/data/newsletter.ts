// To publish a new post, add an entry to this array.
// Most recent first. No other files need to change.

export interface NewsletterPost {
  slug: string;
  title: string;
  date: string;
  dateISO: string;
  category: string;
  excerpt: string;
  body: string;
  author?: string;
}

export const posts: NewsletterPost[] = [
  {
    slug: "bcn-pilot-session-recap",
    title: "The Pilot Session: What We Built, What We Learned",
    date: "July 2026",
    dateISO: "2026-07-01",
    category: "BCN Insider",
    author: "BCN Editorial",
    excerpt:
      "Six months in. Two major events. Dozens of creators. Here's an honest look at what the Babcock Creators Network's first session actually looked like — the wins, the gaps, and what comes next.",
    body: `The Babcock Creators Network launched quietly. No grand announcement, no campus-wide campaign. Just a group of students who believed that creative people at Babcock deserved a proper structure — and decided to build one.

Six months later, we've hosted two flagship events, produced over 150 photographs across those events, welcomed creators from eight disciplines, and started a conversation about what it means to take your craft seriously while still in school.

**What worked**

The BCN Creative Summit on March 29th was the first real proof of concept. Three hundred people showed up. Multi-discipline. Loud. It validated the idea that there was appetite for this kind of space on campus.

The AI & BIV Summit in April showed us something different — that BCN could be a credible collaborator for external organisations. Working alongside BIV gave our photography team a professional brief, a real venue, and a body of work they're proud of.

**What we're still figuring out**

Consistent content. A proper onboarding path for new members. A way to give every discipline — not just the visual ones — a stage. These are the things the next session will focus on.

**What's next**

FrameXpo Campus Storm in July. A workshop series launching in September. And a newsletter that actually ships.

If you're a creator at Babcock and you haven't found your way to BCN yet — now's the time.`,
  },
];
