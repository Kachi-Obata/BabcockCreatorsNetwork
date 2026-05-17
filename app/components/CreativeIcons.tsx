import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
};

// ── Camera (Orange) ───────────────────────────────────────────────────────────
export function CameraIcon({ className, style }: IconProps) {
  return (
    <svg
      width="148"
      height="116"
      viewBox="0 0 148 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {/* Body */}
      <rect x="8" y="30" width="132" height="82" rx="13" fill="#F97316" />
      {/* Body bottom shade strip */}
      <path
        d="M8 96 Q8 112 21 112 L127 112 Q140 112 140 96 Z"
        fill="#C2410C"
        opacity="0.3"
      />
      {/* Viewfinder bump */}
      <rect x="50" y="12" width="48" height="22" rx="7" fill="#EA580C" />
      {/* Flash housing */}
      <rect x="12" y="12" width="26" height="18" rx="5" fill="#FB923C" />
      <rect x="16" y="16" width="18" height="10" rx="3" fill="white" opacity="0.55" />
      {/* Shutter button */}
      <circle cx="117" cy="46" r="9" fill="#FB923C" />
      <circle cx="117" cy="46" r="5.5" fill="white" opacity="0.45" />
      {/* Lens outer ring */}
      <circle cx="74" cy="72" r="30" fill="#C2410C" />
      {/* Lens barrel */}
      <circle cx="74" cy="72" r="23" fill="#1C1917" />
      {/* Lens glass */}
      <circle cx="74" cy="72" r="16" fill="#0C0A09" />
      {/* Lens blue tint (camera glass look) */}
      <circle cx="74" cy="72" r="16" fill="#2563EB" opacity="0.1" />
      {/* Lens main reflection */}
      <circle cx="64" cy="62" r="5.5" fill="white" opacity="0.2" />
      {/* Lens small reflection */}
      <circle cx="79" cy="76" r="2" fill="white" opacity="0.1" />
      {/* Strap lug left */}
      <rect x="8" y="42" width="5" height="14" rx="2.5" fill="#C2410C" />
      {/* Strap lug right */}
      <rect x="135" y="42" width="5" height="14" rx="2.5" fill="#C2410C" />
    </svg>
  );
}

// ── Headphones (Violet) ────────────────────────────────────────────────────────
export function HeadphonesIcon({ className, style }: IconProps) {
  return (
    <svg
      width="118"
      height="146"
      viewBox="0 0 118 146"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {/* Band shadow */}
      <path
        d="M14 80 C14 26 104 26 104 80"
        stroke="#4C1D95"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      {/* Band main */}
      <path
        d="M14 80 C14 26 104 26 104 80"
        stroke="#7C3AED"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Band highlight sheen */}
      <path
        d="M14 80 C14 26 104 26 104 80"
        stroke="#A78BFA"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
      {/* Left cup outer */}
      <rect x="2" y="68" width="30" height="50" rx="15" fill="#5B21B6" />
      {/* Left cup face */}
      <rect x="4" y="70" width="26" height="46" rx="13" fill="#7C3AED" />
      {/* Left cushion */}
      <rect x="8" y="76" width="18" height="34" rx="9" fill="#5B21B6" />
      {/* Left cushion highlight */}
      <rect x="10" y="79" width="9" height="10" rx="4.5" fill="#A78BFA" opacity="0.35" />
      {/* Right cup outer */}
      <rect x="86" y="68" width="30" height="50" rx="15" fill="#5B21B6" />
      {/* Right cup face */}
      <rect x="88" y="70" width="26" height="46" rx="13" fill="#7C3AED" />
      {/* Right cushion */}
      <rect x="92" y="76" width="18" height="34" rx="9" fill="#5B21B6" />
      {/* Right cushion highlight */}
      <rect x="99" y="79" width="9" height="10" rx="4.5" fill="#A78BFA" opacity="0.35" />
      {/* Cable */}
      <line
        x1="59"
        y1="120"
        x2="59"
        y2="143"
        stroke="#5B21B6"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Jack plug */}
      <rect x="56" y="140" width="6" height="6" rx="3" fill="#4C1D95" />
    </svg>
  );
}

// ── Clapperboard (Cyan) ────────────────────────────────────────────────────────
export function ClapperboardIcon({ className, style }: IconProps) {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {/* Board body */}
      <rect x="4" y="38" width="120" height="86" rx="8" fill="#0891B2" />
      {/* Board bottom shade */}
      <path
        d="M4 98 Q4 124 12 124 L116 124 Q124 124 124 98 Z"
        fill="#0E7490"
        opacity="0.4"
      />
      {/* Text line rows */}
      <rect x="16" y="56" width="52" height="3.5" rx="1.75" fill="white" opacity="0.4" />
      <rect x="16" y="68" width="72" height="3.5" rx="1.75" fill="white" opacity="0.4" />
      <rect x="16" y="80" width="44" height="3.5" rx="1.75" fill="white" opacity="0.35" />
      <rect x="16" y="92" width="62" height="3.5" rx="1.75" fill="white" opacity="0.35" />
      <rect x="16" y="104" width="36" height="3.5" rx="1.75" fill="white" opacity="0.25" />
      {/* Clapper arm */}
      <rect x="4" y="8" width="120" height="34" rx="7" fill="#06B6D4" />
      {/* Stripe clip */}
      <clipPath id="clap-stripes">
        <rect x="4" y="8" width="120" height="34" rx="7" />
      </clipPath>
      <g clipPath="url(#clap-stripes)">
        <path d="M4 8 L30 8 L4 42 Z" fill="#164E63" />
        <path d="M30 8 L56 8 L30 42 L4 42 Z" fill="#06B6D4" />
        <path d="M56 8 L82 8 L56 42 L30 42 Z" fill="#164E63" />
        <path d="M82 8 L108 8 L82 42 L56 42 Z" fill="#06B6D4" />
        <path d="M108 8 L124 8 L124 22 L82 42 Z" fill="#164E63" />
      </g>
      {/* Hinge housing */}
      <rect x="7" y="4" width="18" height="18" rx="4" fill="#0E7490" />
      {/* Hinge pin */}
      <circle cx="16" cy="13" r="6" fill="#0891B2" />
      <circle cx="16" cy="13" r="3" fill="#67E8F9" />
    </svg>
  );
}

// ── Paint Palette (Pink) ───────────────────────────────────────────────────────
export function PaletteIcon({ className, style }: IconProps) {
  return (
    <svg
      width="128"
      height="124"
      viewBox="0 0 128 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {/* Palette body — kidney/bean shape */}
      <path
        d="M66 6 C100 6 124 30 121 62 C118 88 104 110 80 117 C62 122 44 116 34 104 C20 90 18 72 26 58 C32 47 24 33 30 20 C36 9 52 6 66 6 Z"
        fill="#EC4899"
      />
      {/* Top-right highlight edge */}
      <path
        d="M66 6 C100 6 124 30 121 62"
        stroke="#F9A8D4"
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />
      {/* Subtle inner shadow */}
      <path
        d="M66 6 C100 6 124 30 121 62 C118 88 104 110 80 117 C62 122 44 116 34 104 C20 90 18 72 26 58 C32 47 24 33 30 20 C36 9 52 6 66 6 Z"
        fill="#9D174D"
        opacity="0.1"
      />
      {/* Thumb hole — recessed (darker, not a cutout) */}
      <ellipse cx="42" cy="50" rx="14" ry="18" fill="#BE185D" />
      <ellipse cx="42" cy="50" rx="10" ry="14" fill="#9D174D" />
      {/* Paint blobs */}
      <circle cx="78" cy="22" r="11" fill="#FBBF24" />
      <circle cx="106" cy="44" r="10" fill="#34D399" />
      <circle cx="110" cy="72" r="11" fill="#60A5FA" />
      <circle cx="97" cy="98" r="10" fill="#A78BFA" />
      <circle cx="70" cy="112" r="9" fill="#F97316" />
      {/* Blob highlights */}
      <circle cx="74" cy="18" r="3.5" fill="white" opacity="0.42" />
      <circle cx="102" cy="40" r="3" fill="white" opacity="0.42" />
      <circle cx="106" cy="68" r="3.5" fill="white" opacity="0.42" />
      <circle cx="93" cy="94" r="3" fill="white" opacity="0.42" />
      <circle cx="66" cy="108" r="2.5" fill="white" opacity="0.38" />
    </svg>
  );
}

// ── Fountain Pen (Lime) ────────────────────────────────────────────────────────
export function FountainPenIcon({ className, style }: IconProps) {
  return (
    <svg
      width="54"
      height="164"
      viewBox="0 0 54 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {/* Cap dome top */}
      <rect x="12" y="4" width="30" height="10" rx="5" fill="#A3E635" />
      {/* Cap body */}
      <rect x="12" y="11" width="30" height="54" rx="4" fill="#84CC16" />
      {/* Cap left shade */}
      <rect x="12" y="11" width="10" height="54" rx="4" fill="#65A30D" opacity="0.22" />
      {/* Cap right highlight */}
      <rect x="33" y="15" width="5" height="22" rx="2.5" fill="white" opacity="0.1" />
      {/* Clip */}
      <rect x="37" y="7" width="6" height="55" rx="3" fill="#65A30D" />
      <circle cx="40" cy="62" r="5.5" fill="#4D7C0F" />
      {/* Cap ferrule */}
      <rect x="10" y="61" width="34" height="7" rx="3" fill="#4D7C0F" />
      {/* Body */}
      <rect x="12" y="66" width="30" height="58" rx="4" fill="#A3E635" />
      {/* Body left shade */}
      <rect x="12" y="66" width="10" height="58" rx="4" fill="#84CC16" opacity="0.22" />
      {/* Body highlight */}
      <rect x="33" y="70" width="5" height="24" rx="2.5" fill="white" opacity="0.1" />
      {/* Body-grip ring */}
      <rect x="10" y="119" width="34" height="5" rx="2.5" fill="#4D7C0F" />
      {/* Grip section */}
      <rect x="11" y="122" width="32" height="18" rx="3" fill="#65A30D" />
      {/* Grip grooves */}
      <line x1="11" y1="128" x2="43" y2="128" stroke="#4D7C0F" strokeWidth="1.5" opacity="0.5" />
      <line x1="11" y1="133" x2="43" y2="133" stroke="#4D7C0F" strokeWidth="1.5" opacity="0.5" />
      {/* Nib outer triangle */}
      <path d="M12 138 L27 160 L42 138 Z" fill="#BEF264" />
      {/* Nib face */}
      <path d="M16 138 L27 160 L38 138 Z" fill="#A3E635" />
      {/* Nib slit */}
      <line
        x1="27"
        y1="146"
        x2="27"
        y2="160"
        stroke="#4D7C0F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Nib tip */}
      <circle cx="27" cy="160" r="2.5" fill="#4D7C0F" />
    </svg>
  );
}

// ── Microphone (Coral Red) ─────────────────────────────────────────────────────
export function MicrophoneIcon({ className, style }: IconProps) {
  return (
    <svg
      width="70"
      height="165"
      viewBox="0 0 70 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <defs>
        <clipPath id="mic-head">
          <ellipse cx="35" cy="57" rx="28" ry="40" />
        </clipPath>
      </defs>
      {/* Capsule head */}
      <ellipse cx="35" cy="57" rx="28" ry="40" fill="#EF4444" />
      {/* Grille mesh lines (clipped to head) */}
      <g clipPath="url(#mic-head)">
        <line x1="0" y1="28" x2="70" y2="28" stroke="#B91C1C" strokeWidth="1.5" opacity="0.4" />
        <line x1="0" y1="40" x2="70" y2="40" stroke="#B91C1C" strokeWidth="1.5" opacity="0.4" />
        <line x1="0" y1="52" x2="70" y2="52" stroke="#B91C1C" strokeWidth="1.5" opacity="0.4" />
        <line x1="0" y1="64" x2="70" y2="64" stroke="#B91C1C" strokeWidth="1.5" opacity="0.4" />
        <line x1="0" y1="76" x2="70" y2="76" stroke="#B91C1C" strokeWidth="1.5" opacity="0.4" />
        <line x1="0" y1="88" x2="70" y2="88" stroke="#B91C1C" strokeWidth="1.5" opacity="0.4" />
        <line x1="18" y1="17" x2="18" y2="97" stroke="#B91C1C" strokeWidth="1" opacity="0.22" />
        <line x1="35" y1="17" x2="35" y2="97" stroke="#B91C1C" strokeWidth="1" opacity="0.22" />
        <line x1="52" y1="17" x2="52" y2="97" stroke="#B91C1C" strokeWidth="1" opacity="0.22" />
      </g>
      {/* Head highlight sheen */}
      <ellipse cx="25" cy="38" rx="8" ry="12" fill="white" opacity="0.15" />
      {/* Collar ring */}
      <rect x="16" y="94" width="38" height="9" rx="4.5" fill="#B91C1C" />
      {/* Handle body */}
      <rect x="22" y="101" width="26" height="54" rx="6" fill="#F87171" />
      {/* Handle left shade */}
      <rect x="22" y="101" width="9" height="54" rx="6" fill="#EF4444" opacity="0.28" />
      {/* Grip bands */}
      <rect x="20" y="114" width="30" height="4" rx="2" fill="#EF4444" />
      <rect x="20" y="124" width="30" height="4" rx="2" fill="#EF4444" />
      <rect x="20" y="134" width="30" height="4" rx="2" fill="#EF4444" />
      {/* Bottom cap */}
      <rect x="22" y="150" width="26" height="8" rx="4" fill="#B91C1C" />
      {/* Cable stub */}
      <path
        d="M35 157 Q33 162 35 165"
        stroke="#7F1D1D"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// ── Vinyl Record (Indigo) ──────────────────────────────────────────────────────
export function VinylRecordIcon({ className, style }: IconProps) {
  return (
    <svg
      width="130"
      height="130"
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {/* Outer disc */}
      <circle cx="65" cy="65" r="62" fill="#6366F1" />
      {/* Edge sheen */}
      <circle cx="65" cy="65" r="62" stroke="#818CF8" strokeWidth="2" fill="none" opacity="0.5" />
      {/* Groove rings */}
      <circle cx="65" cy="65" r="56" stroke="#4F46E5" strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="65" cy="65" r="50" stroke="#4F46E5" strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="65" cy="65" r="44" stroke="#4F46E5" strokeWidth="1" fill="none" opacity="0.45" />
      <circle cx="65" cy="65" r="38" stroke="#4F46E5" strokeWidth="1" fill="none" opacity="0.45" />
      <circle cx="65" cy="65" r="32" stroke="#4F46E5" strokeWidth="1" fill="none" opacity="0.4" />
      {/* Label circle outer */}
      <circle cx="65" cy="65" r="26" fill="#312E81" />
      {/* Label face */}
      <circle cx="65" cy="65" r="22" fill="#4338CA" />
      {/* Label text simulation */}
      <rect x="50" y="58" width="30" height="3" rx="1.5" fill="#818CF8" opacity="0.55" />
      <rect x="54" y="65" width="22" height="3" rx="1.5" fill="#818CF8" opacity="0.45" />
      <rect x="57" y="72" width="16" height="3" rx="1.5" fill="#818CF8" opacity="0.35" />
      {/* Center spindle hole */}
      <circle cx="65" cy="65" r="5" fill="#1E1B4B" />
      {/* Light sheen on disc surface */}
      <ellipse
        cx="44"
        cy="40"
        rx="10"
        ry="6"
        fill="white"
        opacity="0.07"
        transform="rotate(-25 44 40)"
      />
    </svg>
  );
}

// ── Pencil (Amber) ─────────────────────────────────────────────────────────────
export function PencilIcon({ className, style }: IconProps) {
  return (
    <svg
      width="60"
      height="166"
      viewBox="0 0 60 166"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {/* Eraser (rose-pink) */}
      <rect x="14" y="4" width="32" height="19" rx="5" fill="#FDA4AF" />
      <rect x="18" y="7" width="12" height="8" rx="4" fill="white" opacity="0.3" />
      {/* Metal ferrule */}
      <rect x="12" y="21" width="36" height="11" rx="2" fill="#94A3B8" />
      <rect x="12" y="21" width="36" height="5" rx="2" fill="#CBD5E1" opacity="0.65" />
      <line x1="12" y1="27" x2="48" y2="27" stroke="#64748B" strokeWidth="1" opacity="0.4" />
      {/* Body — three shaded faces for hexagonal feel */}
      <rect x="16" y="30" width="28" height="107" fill="#FBBF24" />
      <rect x="16" y="30" width="10" height="107" fill="#D97706" opacity="0.25" />
      <rect x="34" y="30" width="10" height="107" fill="#92400E" opacity="0.16" />
      {/* Edge lines */}
      <line x1="26" y1="30" x2="26" y2="137" stroke="#D97706" strokeWidth="0.75" opacity="0.35" />
      <line x1="34" y1="30" x2="34" y2="137" stroke="#92400E" strokeWidth="0.75" opacity="0.25" />
      {/* Body label text simulation */}
      <rect x="21" y="66" width="18" height="2.5" rx="1.25" fill="#D97706" opacity="0.35" />
      <rect x="21" y="74" width="13" height="2.5" rx="1.25" fill="#D97706" opacity="0.28" />
      {/* Wooden taper */}
      <path d="M16 137 L30 161 L44 137 Z" fill="#D4A574" />
      <path d="M16 137 L30 161 L24 137 Z" fill="#B8845A" opacity="0.55" />
      {/* Graphite tip */}
      <path d="M25 151 L30 161 L35 151 Z" fill="#374151" />
      <circle cx="30" cy="161" r="2.5" fill="#111827" />
    </svg>
  );
}

// ── Studio Speaker (Gold/Amber) ────────────────────────────────────────────────
export function SpeakerIcon({ className, style }: IconProps) {
  return (
    <svg
      width="105"
      height="136"
      viewBox="0 0 105 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {/* Cabinet body */}
      <rect x="5" y="5" width="95" height="126" rx="10" fill="#D97706" />
      {/* Cabinet top face highlight */}
      <rect x="5" y="5" width="95" height="28" rx="10" fill="#FBBF24" opacity="0.35" />
      {/* Cabinet left shade */}
      <rect x="5" y="5" width="22" height="126" rx="10" fill="#92400E" opacity="0.2" />
      {/* Cabinet bottom shade */}
      <rect x="5" y="108" width="95" height="23" rx="10" fill="#92400E" opacity="0.35" />
      {/* Grille area inset */}
      <rect x="12" y="14" width="81" height="108" rx="6" fill="#1C1917" opacity="0.35" />
      {/* Tweeter (small, top) */}
      <circle cx="52" cy="34" r="14" fill="#111827" />
      <circle cx="52" cy="34" r="10" fill="#1C1917" />
      <circle cx="52" cy="34" r="5" fill="#D97706" />
      <circle cx="52" cy="34" r="2" fill="#FBBF24" />
      {/* Tweeter surround dots */}
      <circle cx="52" cy="21" r="1.5" fill="#D97706" opacity="0.5" />
      <circle cx="52" cy="47" r="1.5" fill="#D97706" opacity="0.5" />
      <circle cx="39" cy="34" r="1.5" fill="#D97706" opacity="0.5" />
      <circle cx="65" cy="34" r="1.5" fill="#D97706" opacity="0.5" />
      {/* Woofer (large, main) */}
      <circle cx="52" cy="88" r="36" fill="#0C0A09" />
      <circle cx="52" cy="88" r="30" fill="#111827" />
      <circle cx="52" cy="88" r="22" fill="#1C1917" />
      <circle cx="52" cy="88" r="14" fill="#292524" />
      {/* Dust cap */}
      <circle cx="52" cy="88" r="7" fill="#D97706" />
      <circle cx="52" cy="88" r="3" fill="#FBBF24" opacity="0.7" />
      {/* Surround ring highlight */}
      <circle cx="52" cy="88" r="36" stroke="#D97706" strokeWidth="1" fill="none" opacity="0.3" />
      {/* Cabinet base strip */}
      <rect x="16" y="122" width="73" height="3" rx="1.5" fill="#92400E" opacity="0.5" />
    </svg>
  );
}

// ── Spray Can (Rose) ───────────────────────────────────────────────────────────
export function SprayCanIcon({ className, style }: IconProps) {
  return (
    <svg
      width="72"
      height="168"
      viewBox="0 0 72 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {/* Cap */}
      <rect x="20" y="5" width="32" height="23" rx="11" fill="#9F1239" />
      <rect x="25" y="8" width="12" height="9" rx="4.5" fill="white" opacity="0.15" />
      {/* Actuator nozzle button */}
      <rect x="31" y="2" width="14" height="9" rx="4.5" fill="#BE123C" />
      <rect x="34" y="3" width="8" height="5" rx="2.5" fill="#FB7185" opacity="0.6" />
      {/* Spray particles */}
      <circle cx="54" cy="8" r="2.5" fill="#FB7185" opacity="0.55" />
      <circle cx="61" cy="5" r="1.8" fill="#FB7185" opacity="0.45" />
      <circle cx="57" cy="2" r="1.2" fill="#FB7185" opacity="0.35" />
      <circle cx="64" cy="10" r="1.5" fill="#FB7185" opacity="0.3" />
      {/* Neck */}
      <rect x="18" y="25" width="36" height="8" rx="4" fill="#9F1239" />
      {/* Can body */}
      <rect x="14" y="31" width="44" height="114" rx="9" fill="#FB7185" />
      {/* Body left shade */}
      <rect x="14" y="31" width="14" height="114" rx="9" fill="#F43F5E" opacity="0.28" />
      {/* Body right shade */}
      <rect x="44" y="31" width="14" height="114" rx="9" fill="#9F1239" opacity="0.15" />
      {/* Body highlight stripe */}
      <rect x="20" y="38" width="7" height="46" rx="3.5" fill="white" opacity="0.1" />
      {/* Label area */}
      <rect x="16" y="68" width="40" height="52" rx="4" fill="#E11D48" opacity="0.2" />
      {/* Label text lines */}
      <rect x="20" y="76" width="32" height="3" rx="1.5" fill="white" opacity="0.38" />
      <rect x="20" y="85" width="24" height="3" rx="1.5" fill="white" opacity="0.3" />
      <rect x="20" y="94" width="28" height="3" rx="1.5" fill="white" opacity="0.3" />
      <rect x="20" y="103" width="18" height="3" rx="1.5" fill="white" opacity="0.24" />
      {/* Bottom crimp */}
      <rect x="14" y="138" width="44" height="6" rx="2" fill="#9F1239" opacity="0.45" />
      {/* Bottom dome */}
      <rect x="16" y="142" width="40" height="10" rx="7" fill="#BE123C" />
    </svg>
  );
}
