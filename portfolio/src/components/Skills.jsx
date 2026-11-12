import { skillGroups } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Skills() {
  return (
    <Reveal as="section" id="skills" className="scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Toolkit"
          subtitle="AI systems, data platforms, mobile products, and the infrastructure that ships them."
        />
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="glass glass-card sheen flex w-[82%] shrink-0 snap-start flex-col rounded-3xl p-5 transition duration-500 hover:-translate-y-1.5 sm:w-[320px] lg:w-auto"
            >
              <h3 className="text-base font-semibold text-white">{group.title}</h3>
              <span className="mt-3 h-0.5 w-10 bg-[#E50914]" aria-hidden="true" />
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[11px] leading-4 text-[#e4e4e4]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
