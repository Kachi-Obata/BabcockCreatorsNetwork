"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Signal the hero video to start, then begin fading out
      window.dispatchEvent(new Event("bcn:loadingdone"));
      setVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          // z-[99999] sits above the grain texture overlay (z-9999) and everything else
          className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center gap-10"
        >
          <Image
            src="/bcn_logo.png"
            alt="Babcock Creators Network"
            width={280}
            height={280}
            className="object-contain"
            priority
          />

          <div
            className="w-10 h-10 rounded-full border-[3px] border-[#E8E4DE] border-t-[#003895] animate-spin"
            aria-label="Loading"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
