"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  eventId: string;
  redirectUrl: string;
}

type Step = "idle" | "open" | "submitting" | "done";

export default function InterestForm({ eventId, redirectUrl }: Props) {
  const [step, setStep] = useState<Step>("idle");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [error, setError] = useState("");

  const open = () => setStep("open");

  const submit = async () => {
    if (!fullName.trim() || !email.trim() || !whatsapp.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setStep("submitting");

    const res = await fetch("/api/interest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ full_name: fullName, email, whatsapp, event_id: eventId }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Something went wrong. Try again.");
      setStep("open");
      return;
    }

    setStep("done");
    setTimeout(() => {
      window.open(redirectUrl, "_blank", "noopener,noreferrer");
    }, 1200);
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#333] text-[#F5F0E8] text-[13px] py-2.5 outline-none placeholder:text-[#444] transition-colors duration-200 focus:border-[#AE8C07]";

  return (
    <div className="flex flex-col gap-3 items-start w-full">
      <button
        onClick={open}
        className="px-4 py-2 text-[12px] font-bold rounded transition-opacity duration-200 hover:opacity-90"
        style={{
          background: "#AE8C07",
          color: "#1A1A1A",
          fontFamily: "var(--font-dm-sans)",
        }}
      >
        Secure Your Spot →
      </button>

      <AnimatePresence>
        {(step === "open" || step === "submitting") && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden w-full"
          >
            <div className="flex flex-col gap-4 pt-1 pb-2">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full name"
                className={inputClass}
                style={{ fontFamily: "var(--font-dm-sans)" }}
                disabled={step === "submitting"}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className={inputClass}
                style={{ fontFamily: "var(--font-dm-sans)" }}
                disabled={step === "submitting"}
              />
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="WhatsApp number (e.g. +234 800 000 0000)"
                className={inputClass}
                style={{ fontFamily: "var(--font-dm-sans)" }}
                disabled={step === "submitting"}
              />

              {error && (
                <p className="text-[11px] text-red-400" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {error}
                </p>
              )}

              <button
                onClick={submit}
                disabled={step === "submitting"}
                className="self-start px-4 py-2 text-[12px] font-bold rounded transition-opacity duration-200 disabled:opacity-50"
                style={{
                  background: "#AE8C07",
                  color: "#1A1A1A",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {step === "submitting" ? "Saving..." : "Secure My Spot →"}
              </button>

              <p className="text-[11px]" style={{ color: "#444", fontFamily: "var(--font-dm-sans)" }}>
                We&apos;ll record your interest, then take you to the FrameXpo registration page.
              </p>
            </div>
          </motion.div>
        )}

        {step === "done" && (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-1"
          >
            <p className="text-[13px] text-[#4ade80]" style={{ fontFamily: "var(--font-dm-sans)" }}>
              You&apos;re on the list. Taking you to FrameXpo now...
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
