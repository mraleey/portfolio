export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-6 max-w-2xl md:mb-8">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#E50914]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm leading-relaxed text-[#b3b3b3] md:text-base">{subtitle}</p> : null}
    </div>
  );
}
