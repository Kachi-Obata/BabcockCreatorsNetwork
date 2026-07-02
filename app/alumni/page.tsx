import type { Metadata } from "next";
import AlumniContent from "./AlumniContent";

export const metadata: Metadata = {
  title: "Alumni — Babcock Creators Network",
  robots: { index: false, follow: false },
};

export default function AlumniPage() {
  return <AlumniContent />;
}
