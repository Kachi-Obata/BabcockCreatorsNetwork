# BCN Website — Temporary Landing Page PRD
## Context Document for Claude Code

**Version:** 1.0
**Date:** April 28, 2026
**Status:** Build immediately — this is a temporary holding page while we wait for full UI/UX from the designer.
**Priority:** Ship fast, but it must look impressive. Not a placeholder — a legitimate landing page.

---

## PROJECT CONTEXT

### What is BCN?
Babcock Creators Network (BCN) is a student-led creative and innovation association at Babcock University (a faith-based institution in Ilishan-Remo, Ogun State, Nigeria). BCN is NOT a casual club — it is a structured talent development system. The tagline is: **"A system, not just a community."**

BCN spans creative fields: Writing, Design, Film/Media, Photography, Music, Visual Arts, Technology, Fashion, and Entrepreneurship. It connects members to paid opportunities, real projects, brand partnerships, and BCN's own productions.

### What are we building?
A single-page temporary landing website for BCN that:
1. Looks genuinely impressive — not like a student project, not like a placeholder
2. Introduces BCN with real content (not lorem ipsum)
3. Funnels visitors toward joining the waitlist
4. Can be shipped today and used until the full site is designed and built

### What this is NOT:
- This is NOT the full BCN website (that has Vanguard spotlights, Realms, annotations, referral systems, etc.)
- This is NOT a brochure — it still needs to feel alive and intentional
- This is NOT something built in 2 hours that looks generic

---

## TECH STACK

Use whatever is already in the repo. If starting fresh, use:
- **Next.js** (App Router) with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- Deploy-ready for **Vercel**

If the repo already has a framework set up, use that framework. Adapt accordingly.

---

## ASSETS

The following assets will be in the project:
- `bcn_hero_video` — A 2-minute video file (mp4). This is the hero background video.
- `bcn_logo` — The BCN logo file (png/svg). Use this in the navbar and footer.

Check common locations: `/public/`, `/assets/`, `/src/assets/`, or project root. Use whichever path convention the repo follows.

---

## COLOR PALETTE

| Token | Hex | Usage |
|-------|-----|-------|
| `--blue` | `#003895` | Primary — headlines, CTAs, accents, nav active states |
| `--gold` | `#AE8C07` | Secondary — highlights, overlines, dividers, badges, hover accents |
| `--cream` | `#F5F0E8` | Background — page base for light sections |
| `--charcoal` | `#1A1A1A` | Dark background sections, body text on light backgrounds |
| `--offwhite` | `#FAF8F5` | Alternate light background |
| `--midgray` | `#666666` | Secondary text, captions, metadata |
| `--lightgray` | `#E8E4DE` | Borders, subtle dividers |

### Tailwind config extension:
```js
colors: {
  blue: { DEFAULT: '#003895', dark: '#002a70' },
  gold: { DEFAULT: '#AE8C07', light: '#d4aa20' },
  cream: '#F5F0E8',
  charcoal: '#1A1A1A',
  offwhite: '#FAF8F5',
  midgray: '#666666',
  lightgray: '#E8E4DE',
}
```

---

## TYPOGRAPHY

Use **two** fonts. Import from Google Fonts:
- **Display/Headlines:** `Playfair Display` (weights: 400, 700, 900, 400italic)
- **Body/UI:** `DM Sans` (weights: 300, 400, 500, 600, 700)

### Type scale:
| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Display (hero headline) | Playfair Display | 72–84px desktop / 40–48px mobile | 900 (Black) | Letter-spacing: -2px, line-height: 0.95 |
| H2 (section headings) | Playfair Display | 48–56px desktop / 32–36px mobile | 900 | Letter-spacing: -1px |
| H3 (sub-headings) | DM Sans | 24px | 600 | — |
| Body | DM Sans | 16px | 400 | Line-height: 1.6–1.7 |
| Caption/Meta | DM Sans | 13px | 500 | — |
| Overline (section labels) | DM Sans | 11–12px | 700 | Letter-spacing: 4px, uppercase, color: gold |
| Nav links | DM Sans | 14px | 500 | — |
| Button text | DM Sans | 14–15px | 600 | — |

---

## GLOBAL STYLES & EFFECTS

### Grain texture overlay
Apply a subtle noise/grain texture over the entire page for a tactile, non-digital feel. Use a CSS pseudo-element on `body` or a fixed overlay div with a fractal noise SVG filter at ~3–5% opacity. Pointer-events: none.

```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
}
```

### Smooth scrolling
Use `scroll-behavior: smooth` on `html`. If Lenis or Locomotive Scroll is feasible to add quickly, do it. If not, CSS smooth scroll is fine for the temporary site.

### Animations
Use Framer Motion (if React/Next.js) or CSS animations for:
- Fade-in-up on scroll for section content (use Intersection Observer or Framer Motion `whileInView`)
- Stagger children reveals (e.g., stats appearing one after another with 100ms delay)
- Hover lifts on cards (translateY -4px with subtle shadow)
- Smooth transitions on nav background opacity on scroll

---

## PAGE STRUCTURE — SECTION BY SECTION

The page is a single continuous scroll. Each section is documented below in exact order from top to bottom.

---

### SECTION 1: NAVIGATION BAR

**Behavior:** Fixed to top. Transparent on load (over the video), transitions to solid cream/white with subtle shadow once the user scrolls past the hero. Backdrop blur when solid.

**Layout:**
- Left: BCN logo (`bcn_logo` asset). Clicking it scrolls to top.
- Right: Navigation links + CTA button
- Nav links: `About`, `Benefits`, `Creatives`, `Join Waitlist`
  - These are anchor links that smooth-scroll to their respective sections on the page
  - On hover: color shifts to blue
- CTA button: "Join the Waitlist"
  - Style: pill-shaped (border-radius: 24px), background: `#003895` (blue), text: white, font-weight: 600
  - On click: opens `https://bit.ly/BCNWaitlist` in a new tab (`target="_blank"`, `rel="noopener noreferrer"`)
  - On hover: slight lift (translateY -1px), box-shadow increases

**Mobile:** Hamburger menu icon on the right. Opens a full-screen overlay menu with the same links stacked vertically, centered. Close button (X) in top-right corner. Overlay background: charcoal with slight opacity.

---

### SECTION 2: HERO — VIDEO BACKGROUND

**This is the most important section. Get it right.**

**Layout:** Full viewport height (`100vh`), full width. The video covers the entire section as a background.

**Video behavior:**
1. The video file is `bcn_hero_video` (mp4, approximately 2 minutes long).
2. On page load, the video starts playing **automatically**.
3. The video is **muted by default** — this is critical so it doesn't jump-scare visitors.
4. There is an **unmute/mute toggle button** visible in the bottom-right corner of the hero section.
   - Icon: a speaker icon (muted = speaker with X, unmuted = speaker with waves)
   - Style: semi-transparent white background (rgba(255,255,255,0.15)), backdrop-blur, rounded, subtle border
   - On click: toggles mute/unmute on the video element
5. The video plays inline (not fullscreen). Use `playsinline` attribute for mobile.
6. The video should have a dark overlay on top (linear-gradient from rgba(0,0,0,0.5) on the left to rgba(0,0,0,0.3) on the right) so text is readable over any video frame.
7. Video attributes: `autoPlay`, `muted` (default), `playsInline`, `loop={false}` — the video plays once, it does NOT loop.
8. `preload="auto"` to start loading immediately.
9. On mobile, if the video is too heavy, consider showing a poster frame (first frame or a provided image) with a play button. But attempt autoplay first — most mobile browsers allow muted autoplay.

**Overlay content (on top of video + dark gradient):**
- Top-left area, vertically centered in the hero:
  - Overline: `BABCOCK CREATORS NETWORK` — font: DM Sans, 12px, weight 700, color: gold (#AE8C07), letter-spacing: 6px, uppercase
  - Headline: `Where Talent Becomes Legacy` — font: Playfair Display, 80px desktop / 42px mobile, weight 900, color: white, line-height: 0.95, letter-spacing: -2px. The word "Legacy" should be in italic (`font-style: italic`).
  - Subtext: `A system, not just a community. Discover the creators shaping culture from Babcock University.` — font: DM Sans, 18px desktop / 15px mobile, color: rgba(255,255,255,0.7), line-height: 1.6, max-width: 480px
  - Two CTA buttons side by side:
    - Primary: `Explore Below` — pill button, background: gold (#AE8C07), text: charcoal, font-weight: 600, padding: 16px 32px. On click: smooth scrolls to the About section.
    - Secondary: `Join the Waitlist` — pill button, transparent background, 1.5px solid white border, text: white, font-weight: 600. On click: opens `https://bit.ly/BCNWaitlist` in new tab.

**End-of-video behavior:**
When the video ends (use the `onEnded` event on the `<video>` element):
1. Fade the video to black (or a very dark overlay fading in over 1 second).
2. After the fade, display the text **"Innovate. Create. Imagine."** centered on screen.
   - The three words appear **together on one line** (not one by one).
   - They fade in simultaneously (opacity 0 → 1 over ~1.5 seconds, with a slight scale from 0.95 → 1).
   - Font: Playfair Display, 64px desktop / 36px mobile, weight 900, color: white, letter-spacing: -1px.
   - The text remains visible until the user scrolls away.
3. The hero section content (headline, buttons, etc.) should still be visible alongside or below this text, or the end-screen replaces the video area. Choose whichever feels cleaner — but the end-screen should feel intentional, not broken.

**Scroll indicator:**
At the bottom-center of the hero, show a subtle scroll indicator:
- Text: `SCROLL TO DISCOVER` — 11px, DM Sans, weight 500, letter-spacing: 2px, color: rgba(255,255,255,0.5)
- Below it: a thin vertical line (1px wide, 40px tall) with a gradient from white to transparent, gently pulsing/bouncing animation

---

### SECTION 3: ABOUT BCN

**id:** `about`

**Background:** Cream (`#F5F0E8`)

**Layout:** Two columns on desktop (text left, infographic/visual right). Single column stacked on mobile.

**Left column content:**
- Overline: `ABOUT BCN` — gold, 12px, weight 700, letter-spacing 4px, uppercase
- Headline: `A System, Not Just a Community` — Playfair Display, 48px, weight 900, charcoal
- Body paragraphs (DM Sans, 16px, midgray, line-height 1.7):

> Babcock Creators Network is a structured talent development platform for student creatives at Babcock University. We don't just gather creatives — we build systems that discover, develop, connect, and empower them.

> BCN spans writing, design, film, photography, music, visual arts, technology, and beyond. We connect our members to real projects, paid opportunities, industry mentorship, and platforms to monetize their skills.

> From talent to income — BCN creates the pathway.

**Right column — Infographic/Visual:**
Create a visually appealing infographic-style element. This should NOT be an image — build it with code. Options (pick whichever looks best):

**Option A — The BCN Pipeline Visual:**
A vertical flow diagram showing BCN's talent pipeline:
```
DISCOVER → DEVELOP → CONNECT → EMPOWER
```
Each step is a card/node with an icon and a one-liner:
- Discover: "We find raw creative talent across campus"
- Develop: "Workshops, bootcamps, masterclasses, mentorship"
- Connect: "Industry opportunities, partnerships, collaborations"
- Empower: "Real projects, paid gigs, portfolio development"

Style: Cards connected by thin gold lines/arrows. Blue icons. Clean, modern, minimal.

**Option B — Stats/Numbers Grid:**
A 2x2 grid of impressive stats:
- `8+` Creative Disciplines
- `12` Executive Leaders
- `Workshops` Bootcamps & Masterclasses
- `Real` Industry Connections

Style these as large bold numbers (Playfair Display, blue) with small labels below (DM Sans, midgray).

**Build both if possible — use Option A as the primary visual and Option B as a stats strip below.**

---

### SECTION 4: CREATIVE DISCIPLINES

**id:** `creatives`

**Background:** Charcoal (`#1A1A1A`)

**Purpose:** Show the breadth of BCN's creative ecosystem.

**Layout:**
- Overline: `THE CREATIVE REALMS` — gold, 12px, weight 700, letter-spacing 4px
- Headline: `One Network. Every Creative Field.` — Playfair Display, 48px, white
- Subtext: `BCN is home to creators across every discipline. Whatever your craft, there's a place for you here.` — DM Sans, 16px, rgba(255,255,255,0.5)

**Grid:** 4 columns on desktop, 2 on tablet, 1 on mobile. Each card:
- Background: subtle gradient unique to each discipline (see below)
- Border-radius: 10px
- Padding: 32px 24px
- Min-height: 200px
- Content: discipline name (Playfair Display, 22px, white, bold) + short description (DM Sans, 13px, rgba(255,255,255,0.5))
- Top-right corner: arrow icon (`↗`) that shifts on hover
- Hover: translateY(-4px), shadow increase

**Disciplines and their gradient backgrounds:**
1. **Photography** — `linear-gradient(160deg, #1a3a6a, #0d2040)` — "Portraits, editorials, street & documentary"
2. **Film & Media** — `linear-gradient(160deg, #3a1a4a, #200d30)` — "Short films, documentaries, motion graphics"
3. **Design** — `linear-gradient(160deg, #1a3a2a, #0d2018)` — "Brand, UI/UX, print, illustration"
4. **Writing** — `linear-gradient(160deg, #3a2a1a, #201508)` — "Fiction, copywriting, journalism, poetry"
5. **Music** — `linear-gradient(160deg, #2a1a3a, #180d28)` — "Production, performance, composition"
6. **Visual Arts** — `linear-gradient(160deg, #1a2a3a, #0d1828)` — "Painting, sculpture, mixed media, digital art"
7. **Technology** — `linear-gradient(160deg, #2a3a1a, #182008)` — "Dev, AI, creative coding, product"
8. **Fashion** — `linear-gradient(160deg, #3a1a1a, #280d0d)` — "Styling, textile, streetwear, accessories"

---

### SECTION 5: MEMBERSHIP BENEFITS

**id:** `benefits`

**Background:** Cream (`#F5F0E8`)

**Layout:**
- Overline: `WHY JOIN BCN` — gold
- Headline: `What You Get` — Playfair Display, 48px, charcoal
- Subtext: `BCN isn't just a title on your bio. It's an operating system for your creative career.` — DM Sans, 16px, midgray

**Benefits grid:** 3 columns desktop, 1 column mobile. Each benefit card:
- White background, 1px lightgray border, border-radius 10px
- Left accent bar: 4px wide, gold, on the left edge of the card
- Padding: 28px
- Title: DM Sans, 18px, weight 600, blue
- Description: DM Sans, 14px, midgray, line-height 1.6
- Hover: lift + shadow

**Benefits content (6 cards):**

1. **Skill Development**
   "Access workshops, bootcamps, masterclasses, and mentorship programs designed to sharpen your craft — no matter your level."

2. **Real Industry Exposure**
   "Connect with industry professionals, attend networking events, and get your work in front of people who matter."

3. **Paid Opportunities**
   "BCN connects you to real projects, freelance gigs, brand partnerships, and paid creative work — turning your talent into income."

4. **Portfolio Building**
   "Collaborate on BCN productions, showcase your work on our platforms, and build a portfolio that stands out to employers and clients."

5. **Community & Collaboration**
   "Join a curated network of ambitious creatives. Find collaborators, get constructive feedback, and grow alongside people who push you."

6. **Recognition & Platform**
   "Get spotlighted on BCN channels, featured in our creator showcases, and recognized for the quality of your work."

---

### SECTION 6: BCN VALUES

**Background:** White (`#FFFFFF`)

**Layout:** Horizontal scrolling row or a responsive grid (3 columns desktop, 2 tablet, 1 mobile).

- Overline: `WHAT WE STAND FOR` — gold
- Headline: `Our Core Values` — Playfair Display, 40px, charcoal

**Values (6 items):**
Each value is a minimal card: large number or icon at top (blue), title (DM Sans, 16px, semi-bold, charcoal), description (DM Sans, 13px, midgray).

1. **Creativity & Innovation** — "Encouraging original thinking and problem-solving."
2. **Excellence** — "Upholding high standards in skills, conduct, and output."
3. **Collaboration** — "Promoting teamwork, mentorship, and shared growth."
4. **Integrity** — "Practicing ethical content creation and accountability."
5. **Service & Impact** — "Using creativity to solve problems and uplift communities."
6. **Respect** — "Aligning with Babcock University's philosophy and values."

---

### SECTION 7: JOIN THE WAITLIST CTA

**id:** `join`

**Background:** Blue (`#003895`) with a subtle radial gradient glow (gold at ~15% opacity, positioned at 30% 50%).

**Layout:** Centered text, single column.

- Overline: `JOIN THE NETWORK` — gold
- Headline: `Your talent deserves a system behind it.` — Playfair Display, 48px desktop / 32px mobile, white
- Subtext: `BCN is where creativity meets opportunity. From talent to income — we create the pathway. Register. Connect. Create. Grow.` — DM Sans, 17px, rgba(255,255,255,0.6)
- **CTA Button:** `Join the Waitlist` — pill button, background: gold, text: charcoal, font-weight: 700, padding: 18px 40px, font-size: 16px.
  - On click: opens `https://bit.ly/BCNWaitlist` in a new tab
  - On hover: lift + gold glow shadow
- Below button: small text: `Be among the first to join Babcock's premier creative network.` — 13px, rgba(255,255,255,0.35)

---

### SECTION 8: FOOTER

**Background:** Charcoal (`#1A1A1A`)

**Layout:** 4-column grid on desktop (brand column wider), stacked on mobile.

**Column 1 — Brand:**
- BCN logo (use `bcn_logo` asset, sized reasonably) or text "BCN" in white, 20px, weight 700, letter-spacing 2px
- Below: `Babcock Creators Network. A system, not just a community. Discovering, developing, and empowering the next generation of creators.` — DM Sans, 14px, #666, line-height 1.6, max-width 280px

**Column 2 — Explore:**
- Heading: `EXPLORE` — gold, 12px, weight 700, letter-spacing 2px, uppercase
- Links (14px, #888, hover → white):
  - About BCN → scrolls to #about
  - Benefits → scrolls to #benefits
  - Creative Realms → scrolls to #creatives

**Column 3 — Connect:**
- Heading: `CONNECT` — gold
- Links (14px, #888, hover → white):
  - Join the Waitlist → opens `https://bit.ly/BCNWaitlist` in new tab

**Column 4 — Socials:**
- Heading: `FOLLOW US` — gold
- Social links with icons + handles. Each opens in new tab:
  - TikTok: `@babcockcreators` → `https://www.tiktok.com/@babcockcreators`
  - X (Twitter): `@babcockcreators` → `https://x.com/babcockcreators`
  - Instagram: `@babcockcreators` → `https://www.instagram.com/babcockcreators`
- Use simple SVG icons for each platform or use `lucide-react` icons if available.

**Footer bottom:**
- Thin border-top (1px, #333)
- Padding-top: 24px
- Flex row, space-between:
  - Left: `© 2026 Babcock Creators Network. All rights reserved.` — 12px, #555
  - Right: `Babcock University, Ilishan-Remo, Ogun State` — 12px, #555

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Width | Notes |
|-----------|-------|-------|
| Mobile | < 768px | Single column everything. Hamburger nav. Reduced font sizes. |
| Tablet | 768–1024px | 2-column grids. Slightly reduced fonts. |
| Desktop | > 1024px | Full layout as described. |

Hero headline: 80px desktop → 56px tablet → 42px mobile.
Section padding: `120px 80px` desktop → `80px 40px` tablet → `60px 20px` mobile.

---

## ANIMATION SPECIFICATIONS

### Scroll-triggered reveals (every section):
- Elements fade in from below: `opacity: 0, y: 30` → `opacity: 1, y: 0`
- Duration: 0.6s, easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)
- Trigger: when element enters viewport (threshold: 0.2)
- Stagger children by 100ms where applicable (e.g., benefit cards, discipline cards, stats)

### Nav scroll behavior:
- On scroll past 100px: nav background transitions from transparent → cream with backdrop-blur(20px) and a bottom border appears
- Transition: 0.3s ease

### Card hovers:
- translateY(-4px), box-shadow transition
- Duration: 0.3s

### Video end-screen:
- Video overlay fades to black: opacity 0 → 1 over 1s
- "Innovate. Create. Imagine." fades in: opacity 0 → 1 over 1.5s, with scale 0.95 → 1
- Use CSS transitions or Framer Motion `AnimatePresence`

---

## SOCIAL LINKS REFERENCE

| Platform | Handle | URL |
|----------|--------|-----|
| TikTok | @babcockcreators | https://www.tiktok.com/@babcockcreators |
| X (Twitter) | @babcockcreators | https://x.com/babcockcreators |
| Instagram | @babcockcreators | https://www.instagram.com/babcockcreators |

---

## WAITLIST LINK

Every "Join the Waitlist" or "Join BCN" button/link across the entire site points to:
```
https://bit.ly/BCNWaitlist
```
Opens in a **new tab** (`target="_blank"`, `rel="noopener noreferrer"`).

---

## SEO & META

```html
<title>Babcock Creators Network — A System, Not Just a Community</title>
<meta name="description" content="BCN is a structured talent development platform for student creatives at Babcock University. Build skills, gain exposure, monetize your creativity, and develop real career pathways.">
<meta property="og:title" content="Babcock Creators Network">
<meta property="og:description" content="Where talent becomes legacy. Join the premier creative network at Babcock University.">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

Favicon: Use the BCN logo or crop from `bcn_logo`.

---

## PERFORMANCE REQUIREMENTS

- Lighthouse score target: 80+ on all categories
- Video should NOT block initial render. Lazy-load or defer if needed.
- Use `next/font` for font loading if Next.js (prevents FOUT/FOIT).
- Images/assets: compress aggressively. Use WebP where possible.
- All animations should respect `prefers-reduced-motion: reduce`.

---

## WHAT NOT TO DO

Read this list carefully. These are explicit anti-patterns:

- **NO generic stock images** — if you need placeholder images, use solid color blocks with subtle gradients, never stock photos
- **NO lorem ipsum** — all text content is provided above, use it verbatim
- **NO "Welcome to BCN"** — the hero headline is "Where Talent Becomes Legacy", not a welcome message
- **NO walls of text** — every section should breathe with generous whitespace
- **NO floating card designs** — cards should feel grounded, not hovering in space with excessive shadows
- **NO purple gradients** — stick to the defined color palette strictly
- **NO Inter, Roboto, Arial, or system fonts** — use Playfair Display and DM Sans only
- **NO clutter** — if a section feels overcrowded, remove elements. Luxury restraint.
- **NO broken mobile layouts** — test at 375px width minimum
- **NO autoplay audio** — video must start muted, always
- **NO janky animations** — if an animation stutters, remove it. Smooth or nothing.

---

## FILE STRUCTURE SUGGESTION

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles, grain texture, CSS variables
├── components/
│   ├── Navbar.tsx           # Fixed nav with scroll behavior
│   ├── HeroVideo.tsx        # Video hero with mute toggle + end screen
│   ├── AboutSection.tsx     # About BCN + infographic
│   ├── DisciplinesGrid.tsx  # Creative realms grid
│   ├── BenefitsSection.tsx  # Membership benefits
│   ├── ValuesSection.tsx    # Core values
│   ├── WaitlistCTA.tsx      # Blue CTA section
│   └── Footer.tsx           # Footer with socials
├── lib/
│   └── animations.ts        # Shared animation variants for Framer Motion
public/
├── bcn_hero_video.mp4       # Hero background video
└── bcn_logo.png (or .svg)   # BCN logo
```

Adapt to whatever structure the repo already uses. This is a suggestion, not a mandate.

---

## FINAL NOTES

- The grain texture overlay is applied globally on the body. It should be subtle — 3-5% opacity. If it's distracting, reduce it.
- Every "Join" CTA goes to the same URL: `https://bit.ly/BCNWaitlist`
- The page should feel closer to `nowness.com` or `instrument.com` than to any Nigerian university website.
- When in doubt about a design choice, choose restraint over decoration.
- This page represents BCN's brand. If it doesn't look impressive, it fails.
