import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { posts } from "../data/newsletter";
import { CategoryTag } from "./PostBody";

export const metadata: Metadata = {
  title: "Newsletter — Babcock Creators Network",
  description:
    "Creator spotlights, BCN updates, and stories from the Babcock creative community.",
};

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

                  <Link href={`/newsletter/${post.slug}`}>
                    {post.coverImage && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full rounded-lg object-cover mb-8 transition-opacity duration-300 hover:opacity-90"
                        loading="lazy"
                      />
                    )}

                    <h2
                      className="leading-tight tracking-tight mb-4 transition-colors duration-200 hover:text-[#AE8C07]"
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
                  </Link>

                  <p
                    className="text-[15px] leading-relaxed mb-6"
                    style={{ color: "#666666", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/newsletter/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[1px] transition-all duration-200 hover:gap-3"
                    style={{ color: "#AE8C07", fontFamily: "var(--font-dm-sans)" }}
                  >
                    Read more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
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
