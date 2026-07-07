export default function EventsLoading() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="pt-[calc(72px+80px)] pb-20 px-6 md:px-20">
        <div className="h-3 w-16 bg-white/[0.06] rounded mb-6 animate-pulse" />
        <div className="h-14 w-64 bg-white/[0.06] rounded mb-4 animate-pulse" />
        <div className="h-4 w-80 bg-white/[0.04] rounded animate-pulse" />
      </div>
      <div className="border-t border-b border-[#222] px-6 md:px-20 py-4 flex gap-8">
        {["ALL", "UPCOMING", "PAST"].map((t) => (
          <div key={t} className="h-3 w-14 bg-white/[0.05] rounded animate-pulse" />
        ))}
      </div>
      <div className="px-6 md:px-20 py-20 space-y-0 border-t border-[#222]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border-b border-[#222] py-12 flex gap-12">
            <div className="flex flex-col gap-3 w-40 shrink-0">
              <div className="h-4 w-24 bg-white/[0.06] rounded animate-pulse" />
              <div className="h-5 w-20 bg-white/[0.04] rounded-full animate-pulse" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="h-7 w-56 bg-white/[0.06] rounded animate-pulse" />
              <div className="h-4 w-40 bg-white/[0.04] rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
