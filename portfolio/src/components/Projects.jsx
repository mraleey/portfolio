import { useEffect, useRef, useState } from "react";
import { projects } from "../data.js";
import { IconArrow, IconChevron } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Projects() {
  const scrollerRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return undefined;

    const update = () => {
      setCanLeft(el.scrollLeft > 8);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  function scrollByDir(direction) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction * Math.max(el.clientWidth * 0.8, 300),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  return (
    <Reveal as="section" id="projects" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="Energy telemetry, EV platforms, field operations, and published mobile apps."
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <button
          type="button"
          aria-label="Previous projects"
          onClick={() => scrollByDir(-1)}
          className={`absolute left-3 top-[42%] z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/75 text-white ring-1 ring-white/15 transition hover:bg-[#E50914] md:grid ${
            canLeft ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <IconChevron direction="left" />
        </button>
        <button
          type="button"
          aria-label="Next projects"
          onClick={() => scrollByDir(1)}
          className={`absolute right-3 top-[42%] z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/75 text-white ring-1 ring-white/15 transition hover:bg-[#E50914] md:grid ${
            canRight ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <IconChevron direction="right" />
        </button>

        <div
          ref={scrollerRef}
          role="region"
          aria-label="Project cards"
          tabIndex={0}
          className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overscroll-x-contain scroll-smooth px-4 pt-2 pb-4 md:px-8"
        >
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-card sheen group flex w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl transition duration-500 hover:z-10 hover:-translate-y-1.5 hover:scale-[1.02] focus-visible:scale-[1.02] sm:w-[340px]"
            >
              <div
                className="relative flex aspect-video items-center justify-center overflow-hidden"
                style={{ backgroundColor: project.poster }}
              >
                <img
                  src={project.image}
                  alt=""
                  decoding="async"
                  className="h-auto max-h-[78%] w-auto max-w-[78%] object-contain transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#E50914] transition duration-300 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E50914]">{project.kicker}</p>
                <h3 className="mt-2 text-lg font-bold leading-snug text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#cfcfcf]">{project.description}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[11px] text-[#ececec]">
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-white">
                  {project.linkLabel}
                  <IconArrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
