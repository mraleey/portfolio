import { education } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Education() {
  return (
    <Reveal as="section" id="education" className="scroll-mt-24 px-4 py-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Education" title="University of Gujrat" />
        <article className="glass glass-card sheen flex flex-col gap-4 rounded-3xl p-5 transition duration-500 hover:-translate-y-1 sm:flex-row sm:items-center sm:justify-between md:p-6">
          <div>
            <h3 className="text-lg font-semibold text-white">{education.degree}</h3>
            <p className="mt-1 text-sm text-[#d0d0d0]">{education.detail}</p>
            <p className="mt-1 text-sm text-[#b3b3b3]">{education.school}</p>
          </div>
          <p className="text-sm font-semibold tracking-wide text-[#ffb4b4]">{education.dates}</p>
        </article>
      </div>
    </Reveal>
  );
}
