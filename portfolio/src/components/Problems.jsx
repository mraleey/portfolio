import { projects } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Problems() {
  return (
    <Reveal as="section" id="problems" className="scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Problems"
          title="Problems solved"
          subtitle="The operational problem on each project, and the system I shipped to fix it."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="glass glass-card sheen flex flex-col rounded-3xl p-5 transition duration-500 hover:-translate-y-1.5 md:p-6"
            >
              <p className="text-xs font-semibold tracking-[0.22em] text-[#E50914]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-1 text-sm text-[#b3b3b3]">{project.kicker}</p>

              <div className="mt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E50914]">Problem</p>
                <p className="mt-2 text-sm leading-relaxed text-white">{project.problem}</p>
              </div>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b3b3b3]">Solution</p>
                <p className="mt-2 text-sm leading-relaxed text-[#d6d6d6]">{project.solution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
