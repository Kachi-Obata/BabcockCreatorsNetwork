#!/usr/bin/env node
// Tripwire: warns if AGENTS.md/CLAUDE.md reappear in this repo.
//
// Context: Next.js 16.2+ has `create-next-app` auto-generate these files,
// pointing AI coding agents at docs bundled in node_modules/next/dist/docs/.
// That's a real, documented, intentional Vercel feature — not malware — but
// we deliberately don't want auto-written, unreviewed instruction files in
// this repo. See SECURITY.md for the full writeup.
//
// On Next.js 16.2.x (pinned here), `next dev` doesn't regenerate these files
// once removed. That changes at 16.3+, where `next dev` re-adds them if
// missing unless `agentRules: false` is set in next.config.ts. If this
// project upgrades past 16.2.x, add that config at the same time — this
// script is just a backstop in case that step gets missed.

import { readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const TRUSTED_INSTRUCTION_FILES = ["AGENTS.md", "CLAUDE.md", ".claude/CLAUDE.md"];
const SIGNATURE = "nextjs-agent-rules";

const hits = [];
for (const rel of TRUSTED_INSTRUCTION_FILES) {
  try {
    const content = readFileSync(join(ROOT, rel), "utf8");
    if (content.includes(SIGNATURE)) hits.push(rel);
  } catch {
    // doesn't exist — that's the expected state, nothing to do
  }
}

if (hits.length > 0) {
  console.warn("\n\x1b[43m\x1b[30m NOTICE \x1b[0m");
  console.warn(
    `Next.js's auto-generated agent-rules block is back in: ${hits.join(", ")}\n` +
      "This project intentionally removed it (see SECURITY.md) so it isn't silently\n" +
      "trusted without review. If you upgraded Next.js past 16.2.x, add\n" +
      "`agentRules: false` to next.config.ts, or delete the file again if this was\n" +
      "unintentional.\n"
  );
}

process.exit(0); // never block install/build
