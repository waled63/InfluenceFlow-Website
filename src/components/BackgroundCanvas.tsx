export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-30 bg-[#0A0A0B] overflow-hidden">
      {/* A clean, extremely subtle structural grid resembling top-tier agency design layouts */}
      <div className="absolute inset-0 grid grid-cols-12 opacity-[0.012]">
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} className="h-full border-r border-white" />
        ))}
      </div>
    </div>
  );
}

