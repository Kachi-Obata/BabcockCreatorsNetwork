// Shared rendering pieces for newsletter posts — used by both the listing
// page (/newsletter) and each post's own page (/newsletter/[slug]).

export function CategoryTag({ label }: { label: string }) {
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

export function PostBody({ body }: { body: string }) {
  const lines = body.split("\n\n").filter(Boolean);
  const imageRe = /^!\[([^\]]*)\]\(([^)]+)\)$/;

  return (
    <div className="mt-8 space-y-5">
      {lines.map((block, i) => {
        const imageMatch = block.match(imageRe);
        if (imageMatch) {
          const [, alt, src] = imageMatch;
          return (
            <figure key={i} className="!mt-8 !mb-8 -mx-6 md:mx-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="w-full md:rounded-lg object-cover"
                loading="lazy"
              />
            </figure>
          );
        }

        if (block.startsWith("**") && block.endsWith("**")) {
          return (
            <h4
              key={i}
              className="text-[15px] font-semibold !mt-10"
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
