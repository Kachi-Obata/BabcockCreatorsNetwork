"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let dismissed = false;

    const dismiss = () => {
      if (!dismissed) {
        dismissed = true;
        setVisible(false);
      }
    };

    // Hold for at least 1.2s so the logo doesn't flash, then listen for
    // the video canplay event. Hard fallback at 5s in case autoplay is
    // blocked or the video is slow to buffer.
    const minTimer = setTimeout(() => {
      window.addEventListener("bcn:videoready", dismiss, { once: true });
      const fallback = setTimeout(dismiss, 5000);
      return () => clearTimeout(fallback);
    }, 1200);

    return () => clearTimeout(minTimer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9998] bg-white flex flex-col items-center justify-center gap-10"
        >
          <Image
            src="/bcn_logo.png"
            alt="Babcock Creators Network"
            width={280}
            height={280}
            className="object-contain"
            priority
          />

          {/* Rolling circle spinner */}
          <div
            className="w-10 h-10 rounded-full border-[3px] border-[#E8E4DE] border-t-[#003895] animate-spin"
            aria-label="Loading"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
