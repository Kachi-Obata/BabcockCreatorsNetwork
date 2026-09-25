import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { posts } from "../../data/newsletter";
import { CategoryTag, PostBody } from "../PostBody";
import ShareLink from "./ShareLink";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} — BCN Newsletter`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.dateISO,
      authors: post.author ? [post.author] : undefined,
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function NewsletterPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000");
  const postUrl = `${siteUrl}/newsletter/${post.slug}`;

  return (
    <>
      <Navbar forceDark />
      <main className="min-h-screen bg-[#1A1A1A]">
        <article className="pt-[calc(72px+80px)] pb-32 px-6 md:px-20">
          <div className="max-w-[720px] mx-auto">
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 mb-10 text-[13px] font-semibold uppercase tracking-[1px] transition-colors duration-200 hover:text-[#AE8C07]"
              style={{ color: "#888", fontFamily: "var(--font-dm-sans)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Newsletter
            </Link>

            <div className="flex items-center gap-3 mb-6">
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

            <h1
              className="leading-tight tracking-tight mb-8"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(30px, 5vw, 48px)",
                fontWeight: 800,
                color: "#F5F0E8",
                letterSpacing: "-1px",
              }}
            >
              {post.title}
            </h1>

            {post.coverImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full rounded-lg object-cover mb-4"
              />
            )}

            <PostBody body={post.body} />

            <div className="mt-16 pt-8 border-t border-[#222] flex items-center justify-between flex-wrap gap-4">
              <Link
                href="/newsletter"
                className="text-[13px] font-semibold uppercase tracking-[1px] transition-colors duration-200 hover:text-[#AE8C07]"
                style={{ color: "#888", fontFamily: "var(--font-dm-sans)" }}
              >
                ← More stories
              </Link>
              <ShareLink url={postUrl} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
