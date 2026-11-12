import { profile } from "../data.js";
import { IconGithub, IconLinkedin, IconMail, IconPhone, IconPin } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: profile.emailHref,
    icon: IconMail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    icon: IconPhone,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    icon: IconLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
    icon: IconGithub,
    external: true,
  },
];

export default function Contact() {
  return (
    <Reveal as="section" id="contact" className="scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk."
          subtitle="Data, AI, and product work. Email is the most direct path."
        />
        <p className="mb-6 inline-flex items-center gap-2 text-sm text-[#d0d0d0]">
          <IconPin className="h-4 w-4 text-[#E50914]" />
          {profile.location}
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.label}
                href={channel.href}
                className="glass glass-card sheen group flex items-center gap-4 rounded-2xl p-5 transition duration-500 hover:-translate-y-1"
                {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#E50914] text-white">
                  <Icon />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b3b3b3]">
                    {channel.label}
                  </span>
                  <span className="mt-1 block truncate text-sm font-medium text-white sm:text-base">{channel.value}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
