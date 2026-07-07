import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { posts } from "../data/newsletter";

export const metadata: Metadata = {
  title: "Newsletter — Babcock Creators Network",
  description:
    "Creator spotlights, BCN updates, and stories from the Babcock creative community.",
};

function CategoryTag({ label }: { label: string }) {
  return (
    <span
      className="inline-block px-3 py-1 text-[10px] font-bold tracking-[2px] uppercase rounded-full"
      style={{
        background: "rgba(174,140,7,0.12)",
        color: "#AE8C07",
        border: "1px solid rgba(174,140,7,0.25)",
        fontFamily: "var(--font-dm-sans)",
      }}
    >
      {label}
    </span>
  );
}

function PostBody({ body }: { body: string }) {
  const lines = body.split("\n\n").filter(Boolean);
  return (
    <div className="mt-8 space-y-5">
      {lines.map((block, i) => {
        if (block.startsWith("**") && block.endsWith("**")) {
          return (
            <h4
              key={i}
              className="text-[15px] font-semibold"
              style={{ color: "#F5F0E8", fontFamily: "var(--font-dm-sans)" }}
            >
              {block.replace(/\*\*/g, "")}
            </h4>
          );
        }
        const parts = block.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p
            key={i}
            className="text-[15px] leading-[1.85]"
            style={{ color: "#888888", fontFamily: "var(--font-dm-sans)" }}
          >
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} style={{ color: "#CCCCCC", fontWeight: 600 }}>
                  {part.replace(/\*\*/g, "")}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        );
      })}
    </div>
  );
}

export default function NewsletterPage() {
  const sorted = [...posts].sort((a, b) => b.dateISO.localeCompare(a.dateISO));

  return (
    <>
      <Navbar forceDark />
      <main className="min-h-screen bg-[#1A1A1A]">
        {/* Header */}
        <section className="bg-[#1A1A1A] pt-[calc(72px+80px)] pb-20 px-6 md:px-20">
          <p
            className="mb-5 uppercase tracking-[4px] text-[12px] font-bold"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#AE8C07" }}
          >
            Newsletter
          </p>
          <h1
            className="leading-none tracking-tight mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 900,
              color: "#F5F0E8",
              letterSpacing: "-2px",
            }}
          >
            Stories from the <em>creative room.</em>
          </h1>
          <p
            className="max-w-[480px]"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "16px",
              color: "#666666",
              lineHeight: 1.6,
            }}
          >
            Creator spotlights, BCN updates, and dispatches from the Babcock creative community.
          </p>
        </section>

        {/* Posts */}
        <section className="px-6 md:px-20 pb-32 border-t border-[#222]">
          {sorted.length === 0 ? (
            <div className="py-24 text-center">
              <p
                className="text-[18px] mb-3"
                style={{ fontFamily: "var(--font-dm-sans)", color: "#444444" }}
              >
                First issue coming soon.
              </p>
            </div>
          ) : (
            <div className="max-w-[720px] space-y-0 divide-y divide-[#222]">
              {sorted.map((post) => (
                <article key={post.slug} className="py-16">
                  <div className="flex items-center gap-3 mb-5">
                    <CategoryTag label={post.category} />
                    <span
                      className="text-[12px]"
                      style={{ color: "#555", fontFamily: "var(--font-dm-sans)" }}
                    >
                      {post.date}
                    </span>
                    {post.author && (
                      <>
                        <span style={{ color: "#333" }}>·</span>
                        <span
                          className="text-[12px]"
                          style={{ color: "#555", fontFamily: "var(--font-dm-sans)" }}
                        >
                          {post.author}
                        </span>
                      </>
                    )}
                  </div>

                  <h2
                    className="leading-tight tracking-tight mb-4"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(24px, 4vw, 36px)",
                      fontWeight: 700,
                      color: "#F5F0E8",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {post.title}
                  </h2>

                  <p
                    className="text-[15px] leading-relaxed mb-2"
                    style={{ color: "#666666", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {post.excerpt}
                  </p>

                  <PostBody body={post.body} />
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
