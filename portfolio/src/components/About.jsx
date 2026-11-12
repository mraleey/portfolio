import { about } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function About() {
  return (
    <Reveal as="section" id="about" className="scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Production systems for energy, AI, and mobile."
          subtitle="Data & AI Engineer at LUMS Energy Institute / enfo.ai, previously at Solution Experts."
        />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.7fr)] lg:items-start">
          <div className="glass max-w-3xl space-y-4 rounded-3xl p-6 text-sm leading-7 text-[#d4d4d4] md:p-8 md:text-base">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="flex flex-wrap content-start gap-2 lg:justify-end">
            {about.focus.map((item) => (
              <li
                key={item}
                className="glass rounded-full px-3 py-1.5 text-xs font-medium text-white/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
