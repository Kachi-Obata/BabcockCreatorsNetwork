import type { Metadata } from "next";
import PreviewContent from "./PreviewContent";

export const metadata: Metadata = {
  title: "BCN Preview",
  robots: { index: false, follow: false },
};

export default function PreviewPage() {
  return <PreviewContent />;
}
