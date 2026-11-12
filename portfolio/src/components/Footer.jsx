import { profile } from "../data.js";
import { IconGithub, IconLinkedin, IconMail } from "./Icons.jsx";

const socials = [
  { href: profile.emailHref, label: "Email", icon: IconMail },
  { href: profile.linkedin, label: "LinkedIn", icon: IconLinkedin, external: true },
  { href: profile.github, label: "GitHub", icon: IconGithub, external: true },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-white/[0.03] px-4 py-8 backdrop-blur-xl md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold tracking-wide text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-[#b3b3b3]">{profile.title}</p>
        </div>
        <div className="flex items-center gap-3">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#E50914] hover:bg-[#E50914]"
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-7xl text-xs text-[#9a9a9a]">
        © {new Date().getFullYear()} {profile.name}. {profile.location}.
      </p>
    </footer>
  );
}
