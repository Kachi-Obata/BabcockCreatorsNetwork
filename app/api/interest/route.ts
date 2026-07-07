import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function syncToBrevo(full_name: string, email: string, event_id: string) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return;

  await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      attributes: { FIRSTNAME: full_name.split(" ")[0], LASTNAME: full_name.split(" ").slice(1).join(" ") },
      listIds: [2],
      updateEnabled: true,
      extAttributes: { EVENT_INTEREST: event_id },
    }),
  }).catch(() => {});
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { full_name, email, whatsapp, event_id } = body;

  if (!full_name || !email || !whatsapp || !event_id) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const { error } = await supabase.from("interest_submissions").insert({
    full_name: full_name.trim(),
    email: email.trim().toLowerCase(),
    whatsapp: whatsapp.trim(),
    event_id,
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json({ error: "Failed to save. Please try again." }, { status: 500 });
  }

  await syncToBrevo(full_name.trim(), email.trim().toLowerCase(), event_id);

  return NextResponse.json({ ok: true });
}
