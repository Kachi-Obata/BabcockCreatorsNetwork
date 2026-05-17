import Image from "next/image";

const WAITLIST_URL = "https://forms.gle/BL2zJmTDnoG3wjG16";

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.15 8.15 0 004.77 1.52V7.03a4.85 4.85 0 01-1-.34z"/>
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const socials = [
  {
    label: "@babcockcreators",
    href: "https://www.tiktok.com/@babcockcreators",
    Icon: TikTokIcon,
    platform: "TikTok",
  },
  {
    label: "@babcockcreators",
    href: "https://x.com/babcockcreators",
    Icon: XIcon,
    platform: "X (Twitter)",
  },
  {
    label: "@babcockcreators",
    href: "https://www.instagram.com/babcockcreators",
    Icon: InstagramIcon,
    platform: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] pt-16 pb-8 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/bcn_logo1.png"
                alt="BCN Logo"
                width={418}
                height={163}
                className="object-contain h-[60px] w-auto invert brightness-200"
              />
            </div>
            <p
              className="text-[#666666] text-[14px] leading-[1.6] max-w-[280px]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Babcock Creators Network. A system, not just a community.
              Discovering, developing, and empowering the next generation of
              creators.
            </p>
          </div>

          {/* Col 2: Explore */}
          <div>
            <p
              className="text-[#AE8C07] text-[12px] font-bold uppercase tracking-[2px] mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Explore
            </p>
            <ul className="space-y-3">
              {[
                { label: "About BCN", href: "#about" },
                { label: "Benefits", href: "#benefits" },
                { label: "Creative Realms", href: "#creatives" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#888888] text-[14px] hover:text-white transition-colors duration-200"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div>
            <p
              className="text-[#AE8C07] text-[12px] font-bold uppercase tracking-[2px] mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={WAITLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888888] text-[14px] hover:text-white transition-colors duration-200"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Socials */}
          <div>
            <p
              className="text-[#AE8C07] text-[12px] font-bold uppercase tracking-[2px] mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Follow Us
            </p>
            <ul className="space-y-4">
              {socials.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#888888] hover:text-white transition-colors duration-200 group"
                  >
                    <span className="text-[#666666] group-hover:text-[#AE8C07] transition-colors duration-200">
                      <s.Icon />
                    </span>
                    <span
                      className="text-[14px]"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {s.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#333333] pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p
            className="text-[#555555] text-[12px]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            © 2026 Babcock Creators Network. All rights reserved.
          </p>
          <p
            className="text-[#555555] text-[12px]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Babcock University, Ilishan-Remo, Ogun State
          </p>
        </div>
      </div>

      {/* Closing statement */}
      <div className="mt-16 overflow-hidden">
        {/* Chef hat icon */}
        <div className="flex justify-center mb-6">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Hat brim */}
            <rect x="14" y="42" width="36" height="6" rx="2" fill="white" opacity="0.25"/>
            {/* Brim detail line */}
            <rect x="14" y="46" width="36" height="2" rx="1" fill="white" opacity="0.15"/>
            {/* Left puff */}
            <circle cx="20" cy="30" r="11" fill="white" opacity="0.2"/>
            {/* Right puff */}
            <circle cx="44" cy="30" r="11" fill="white" opacity="0.2"/>
            {/* Centre tall puff */}
            <ellipse cx="32" cy="24" rx="12" ry="14" fill="white" opacity="0.3"/>
            {/* Overlap fill to merge the three puffs */}
            <rect x="14" y="34" width="36" height="10" fill="white" opacity="0.25"/>
            {/* Highlight on centre puff */}
            <ellipse cx="29" cy="20" rx="4" ry="5" fill="white" opacity="0.15"/>
          </svg>
        </div>

        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(72px, 16vw, 232px)",
            fontWeight: 900,
            color: "white",
            lineHeight: 0.88,
            letterSpacing: "-0.03em",
            paddingRight: "clamp(16px, 2.5vw, 40px)",
            textAlign: "right",
            whiteSpace: "nowrap",
          }}
        >
          Still
        </p>
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(72px, 16vw, 232px)",
            fontWeight: 900,
            color: "white",
            lineHeight: 0.88,
            letterSpacing: "-0.03em",
            paddingLeft: "clamp(16px, 2.5vw, 40px)",
            marginTop: "-0.04em",
            whiteSpace: "nowrap",
          }}
        >
          Cooking
        </p>
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(72px, 16vw, 232px)",
            fontWeight: 900,
            color: "white",
            lineHeight: 0.88,
            letterSpacing: "-0.03em",
            fontStyle: "italic",
            paddingRight: "clamp(16px, 2.5vw, 40px)",
            marginTop: "-0.04em",
            textAlign: "right",
            whiteSpace: "nowrap",
          }}
        >
          ......
        </p>
      </div>
    </footer>
  );
}
