"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Benefits", href: "#benefits" },
  { label: "Creatives", href: "#creatives" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
];

const WAITLIST_URL = "https://forms.gle/BL2zJmTDnoG3wjG16";

interface NavbarProps {
  /** Force the "scrolled" colour scheme regardless of scroll position.
   *  Use on pages that never actually scroll (e.g. the gallery). */
  forceDark?: boolean;
  /** Extra link injected before the main nav items (e.g. a back-to-home link). */
  backLink?: { label: string; href: string };
}

export default function Navbar({ forceDark = false, backLink }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // isDark drives all colour decisions — true when scrolled OR when the
  // page forces the dark treatment (gallery, etc.)
  const isDark = scrolled || forceDark;

  useEffect(() => {
    if (forceDark) return; // gallery is overflow-hidden, scrollY never changes
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceDark]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    // Full-page navigation for route links
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Section doesn't exist on this page — navigate home with the anchor
      window.location.href = `/${href}`;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[10000] transition-all duration-500 ${
          isDark
            ? "bg-[#F5F0E8]/95 backdrop-blur-[20px] shadow-sm border-b border-[#E8E4DE]"
            : "bg-transparent"
        }`}
        style={{
          paddingTop: "env(safe-area-inset-top, 0px)",
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[64px] lg:h-[72px]">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#top")}
            className="flex items-center gap-2 focus:outline-none"
            aria-label="Scroll to top"
          >
            <Image
              src="/bcn_logo1.png"
              alt="BCN Logo"
              width={418}
              height={163}
              className="object-contain h-[40px] lg:h-[50px] w-auto"
              priority
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Optional back link (e.g. "Index" on the gallery page) */}
            {backLink && (
              <button
                onClick={() => handleNavClick(backLink.href)}
                className={`font-[family-name:var(--font-dm-sans)] text-[14px] font-medium transition-colors duration-200 ${
                  isDark
                    ? "text-[#1A1A1A] hover:text-[#003895]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {backLink.label}
              </button>
            )}
            {navLinks.map((link) => {
              const isActive = link.href.startsWith("/") && pathname === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-[family-name:var(--font-dm-sans)] text-[14px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#003895]"
                      : isDark
                      ? "text-[#1A1A1A] hover:text-[#003895]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 rounded-full bg-[#003895] text-white font-[family-name:var(--font-dm-sans)] text-[14px] font-semibold transition-all duration-200 hover:-translate-y-px hover:shadow-lg hover:shadow-[#003895]/30"
            >
              Apply Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Open menu"
          >
            <span className={`block w-6 h-0.5 transition-colors duration-200 ${isDark ? "bg-[#1A1A1A]" : "bg-white"}`} />
            <span className={`block w-6 h-0.5 transition-colors duration-200 ${isDark ? "bg-[#1A1A1A]" : "bg-white"}`} />
            <span className={`block w-4 h-0.5 transition-colors duration-200 ${isDark ? "bg-[#1A1A1A]" : "bg-white"}`} />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[20000] bg-[#1A1A1A]/96 backdrop-blur-sm flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl leading-none focus:outline-none"
              aria-label="Close menu"
            >
              ×
            </button>
            <nav className="flex flex-col items-center gap-8">
              {/* Back link at top of mobile overlay */}
              {backLink && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0 }}
                  onClick={() => handleNavClick(backLink.href)}
                  className="font-[family-name:var(--font-playfair)] text-3xl text-white hover:text-[#AE8C07] transition-colors duration-200"
                >
                  {backLink.label}
                </motion.button>
              )}
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (backLink ? i + 1 : i) * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-[family-name:var(--font-playfair)] text-3xl text-white hover:text-[#AE8C07] transition-colors duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                href={WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-4 px-8 py-3 rounded-full bg-[#003895] text-white font-[family-name:var(--font-dm-sans)] text-[15px] font-semibold"
              >
                Apply Now
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
