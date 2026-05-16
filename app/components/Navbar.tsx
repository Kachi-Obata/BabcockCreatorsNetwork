"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Benefits", href: "#benefits" },
  { label: "Creatives", href: "#creatives" },
  { label: "Apply", href: "#join" },
];

const WAITLIST_URL = "https://forms.gle/BL2zJmTDnoG3wjG16";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-[20px] shadow-sm border-b border-[#E8E4DE]"
            : "bg-[#FAF8F5]"
        }`}
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
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-[family-name:var(--font-dm-sans)] text-[14px] font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-[#1A1A1A] hover:text-[#003895]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
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
            <span className={`block w-6 h-0.5 transition-colors duration-200 ${scrolled ? "bg-[#1A1A1A]" : "bg-white"}`} />
            <span className={`block w-6 h-0.5 transition-colors duration-200 ${scrolled ? "bg-[#1A1A1A]" : "bg-white"}`} />
            <span className={`block w-4 h-0.5 transition-colors duration-200 ${scrolled ? "bg-[#1A1A1A]" : "bg-white"}`} />
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
            className="fixed inset-0 z-[60] bg-[#1A1A1A]/96 backdrop-blur-sm flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl leading-none focus:outline-none"
              aria-label="Close menu"
            >
              ×
            </button>
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
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
