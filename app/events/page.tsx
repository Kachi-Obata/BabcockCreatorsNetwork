import type { Metadata } from "next";
import EventsContent from "./EventsContent";

export const metadata: Metadata = {
  title: "Events — Babcock Creators Network",
  description:
    "Past, present, and coming — every event BCN runs, joins, or builds.",
};

export default function EventsPage() {
  return <EventsContent />;
}
