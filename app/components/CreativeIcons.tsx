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
