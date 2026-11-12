import { experience } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Experience() {
  return (
    <Reveal as="section" id="experience" className="scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Roles"
          subtitle="Energy telemetry and AI at enfo.ai, and shipped mobile and web products at Solution Experts."
        />
        <div className="space-y-5">
          {experience.map((job) => (
            <article
              key={job.id}
              className="glass glass-card sheen rounded-3xl p-5 transition duration-500 hover:-translate-y-1.5 md:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
                <div className="lg:w-72 lg:shrink-0">
                  <p className="text-xs font-semibold tracking-[0.22em] text-[#E50914]">{job.index}</p>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-white md:text-2xl">{job.role}</h3>
                  <p className="mt-2 text-sm font-medium text-white">{job.company}</p>
                  <p className="mt-1 text-sm text-[#b3b3b3]">{job.location}</p>
                  <p className="mt-4 inline-flex rounded bg-[#E50914]/15 px-2.5 py-1 text-xs font-semibold text-[#ffb4b4]">
                    {job.dates}
                  </p>
                </div>
                <ul className="space-y-3">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-[#d6d6d6]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E50914]" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
