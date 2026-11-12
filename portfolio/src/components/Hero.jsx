import { motion, useReducedMotion } from "framer-motion";
import { profile } from "../data.js";
import { fadeUp, stagger } from "../motion.js";

const meta = [
  { href: profile.phoneHref, label: profile.phone },
  { href: profile.emailHref, label: profile.email },
  { href: profile.linkedin, label: "LinkedIn", external: true },
  { href: profile.github, label: "GitHub", external: true },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden bg-[#141414]">
      <div className="pointer-events-none relative h-[46svh] min-h-[260px] md:absolute md:inset-y-0 md:right-0 md:h-full md:w-[62%]" aria-hidden="true">
        <img
          src={profile.portrait}
          alt=""
          fetchPriority="high"
          className="portrait-drift h-full w-full object-cover object-[center_12%] md:saturate-[.88]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/15 to-black/40 md:bg-[linear-gradient(to_right,#141414_0%,rgba(20,20,20,0.82)_16%,rgba(20,20,20,0.28)_34%,rgba(20,20,20,0)_52%)]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#141414] to-transparent md:h-32" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl px-4 py-8 md:min-h-[100svh] md:items-center md:px-8 md:py-24">
      <motion.div
        className="glass flex w-full max-w-2xl flex-col rounded-3xl px-5 py-6 sm:px-8 sm:py-8"
        initial={reduce ? false : "hidden"}
        animate="show"
        variants={stagger}
      >
        <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E50914]">
          Portfolio
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-4 max-w-[12ch] text-[2.8rem] font-extrabold leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
        >
          Ali Haidar
        </motion.h1>
        <motion.div variants={fadeUp} className="mt-5 h-1 w-16 bg-[#E50914]" />
        <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base font-medium text-white sm:text-lg">
          {profile.title}
        </motion.p>
        <motion.p variants={fadeUp} className="mt-3 max-w-xl text-sm leading-relaxed text-[#d2d2d2] sm:text-base">
          {profile.tagline}
        </motion.p>
        <motion.p variants={fadeUp} className="mt-6 flex max-w-2xl flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm text-[#c8c8c8]">
          {meta.map((item, index) => (
            <span key={item.label} className="inline-flex items-center gap-2.5">
              {index > 0 ? (
                <span aria-hidden="true" className="text-white/30">
                  ·
                </span>
              ) : null}
              <a
                href={item.href}
                className="transition hover:text-white"
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.label}
              </a>
            </span>
          ))}
          <span aria-hidden="true" className="text-white/30">
            ·
          </span>
          <span>{profile.location}</span>
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="btn-primary rounded-md px-5 py-3 text-sm font-semibold text-white"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="btn-glass rounded-md border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/15"
          >
            Contact
          </a>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}
