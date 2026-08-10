"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WAITLIST_URL = "https://forms.gle/BL2zJmTDnoG3wjG16";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const userWantedSound = useRef(false);
  const [muted, setMuted] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);
  const [endFading, setEndFading] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [buttonCentered, setButtonCentered] = useState(false);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setMuted(newMuted);
    userWantedSound.current = !newMuted;
  };

  const handleEnded = () => {
    setEndFading(true);
    setTimeout(() => setVideoEnded(true), 1000);
  };

  // Autoplay; fade overlay text after 7s and send button to centre
  useEffect(() => {
    videoRef.current?.play().catch(() => {});
    const timer = setTimeout(() => {
      setOverlayVisible(false);
      setButtonCentered(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  // Mute when scrolled past hero
  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;
      const covered = window.scrollY > window.innerHeight * 0.3;
      if (covered) {
        if (!videoRef.current.muted) { videoRef.current.muted = true; setMuted(true); }
      } else {
        if (userWantedSound.current && videoRef.current.muted) { videoRef.current.muted = false; setMuted(false); }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="sticky top-0 z-[1] w-full h-screen overflow-hidden" id="hero">
      {/* Video */}
      <video
        ref={videoRef}
        src="/bcn_hero_video.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleEnded}
      />

      {/* Dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-black/30 z-10" />

      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/40 to-transparent z-10 pointer-events-none" />

      {/* End-of-video fade to black */}
      <AnimatePresence>
        {endFading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-black z-20"
          />
        )}
      </AnimatePresence>

      {/* End-of-video text */}
      <AnimatePresence>
        {videoEnded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-10"
          >
            <p
              className="text-white text-center"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 900,
                letterSpacing: "-1px",
                lineHeight: 1,
              }}
            >
              Innovate. Create. Imagine.
            </p>
            <motion.a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
              className="px-10 py-[18px] rounded-full bg-[#AE8C07] text-[#1A1A1A] font-bold text-[15px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#AE8C07]/40"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Apply Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay text — fades out after 7s. Button is NOT here. */}
      <div
        className={`absolute inset-0 z-[18] flex items-center transition-opacity duration-[1200ms] ease-in-out ${
          !overlayVisible || videoEnded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[620px]"
          >
            <p
              className="mb-5 text-[#AE8C07] uppercase tracking-[6px] text-[12px] font-semibold"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Babcock Creators Network
            </p>
            <h1
              className="text-white mb-6"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(42px, 6vw, 80px)",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-2px",
              }}
            >
              Where Talent Becomes{" "}
              <em style={{ fontStyle: "italic" }}>Legacy</em>
            </h1>
            <p
              className="text-white/70 leading-relaxed max-w-[480px]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(15px, 2vw, 18px)",
                lineHeight: 1.6,
              }}
            >
              A system, not just a community. Discover the creators shaping
              culture from Babcock University.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Apply Now button — lives outside the fading overlay, uses layoutId FLIP to animate position */}
      <AnimatePresence>
        {!videoEnded && !buttonCentered && (
          <div
            key="btn-left"
            className="absolute inset-0 z-[19] flex items-end pb-[30vh] pointer-events-none"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
              <motion.a
                layoutId="hero-cta-btn"
                href={WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-block whitespace-nowrap rounded-full font-semibold"
                animate={{
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  paddingInline: "32px",
                  paddingBlock: "16px",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  border: "1px solid rgba(255,255,255,0.8)",
                }}
              >
                Apply Now
              </motion.a>
            </div>
          </div>
        )}
        {!videoEnded && buttonCentered && (
          <div
            key="btn-center"
            className="absolute inset-0 z-[19] flex items-end justify-center pb-12 pointer-events-none"
          >
            <motion.a
              layoutId="hero-cta-btn"
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto inline-block whitespace-nowrap rounded-full font-semibold hover:bg-white/10"
              animate={{
                backgroundColor: "transparent",
                color: "#ffffff",
                paddingInline: "40px",
                paddingBlock: "18px",
                fontSize: "15px",
                fontWeight: 600,
              }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-dm-sans)",
                border: "1px solid rgba(255,255,255,0.8)",
              }}
            >
              Apply Now
            </motion.a>
          </div>
        )}
      </AnimatePresence>

      {/* Mute toggle */}
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-8 right-6 z-30 flex items-center justify-center w-11 h-11 rounded-full border border-white/20 bg-white/15 backdrop-blur-md transition-all duration-200 hover:bg-white/25"
      >
        {muted ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        )}
      </button>
    </section>
  );
}
