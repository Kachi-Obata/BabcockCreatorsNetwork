import Image from "next/image";

const WAITLIST_URL = "https://bit.ly/BCNWaitlist";

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
                src="/bcn_logo.png"
                alt="BCN Logo"
                width={48}
                height={48}
                className="object-contain invert brightness-200"
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
                  Join the Waitlist
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
    </footer>
  );
}
