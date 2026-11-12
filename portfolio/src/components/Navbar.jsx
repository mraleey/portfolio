import { useEffect, useState } from "react";
import { nav, profile } from "../data.js";
import { IconClose, IconMenu } from "./Icons.jsx";

function itemClass(active, id, mobile = false) {
  const on = active === id;
  if (mobile) {
    return `border-b border-white/10 py-4 text-2xl font-semibold tracking-tight ${on ? "text-white" : "text-[#d4d4d4]"}`;
  }
  return `relative text-sm font-medium transition-colors ${on ? "text-white" : "text-[#d4d4d4] hover:text-white"} after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-[#E50914] after:transition-transform after:duration-200 ${on ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const marker = window.scrollY + 96;
      let current = "home";
      for (const item of nav) {
        const id = item.href.slice(1);
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] border-t-[3px] border-[#E50914] transition-all duration-500 ${
          solid
            ? "border-b border-b-white/10 bg-[#141414]/55 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "bg-gradient-to-b from-black/70 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          <a href="#home" className="flex items-center gap-2.5 text-[15px] font-extrabold tracking-[0.16em] text-white">
            <span className="h-5 w-1 bg-[#E50914]" aria-hidden="true" />
            {profile.name.toUpperCase()}
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const id = item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={itemClass(active, id)}
                  aria-current={active === id ? "true" : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </header>

      {open ? (
        <nav
          id="mobile-nav"
          className="fixed inset-0 z-50 bg-[#141414]/80 px-6 pt-24 backdrop-blur-2xl lg:hidden"
          aria-label="Mobile"
        >
          {nav.map((item) => {
            const id = item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`block ${itemClass(active, id, true)}`}
                aria-current={active === id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      ) : null}
    </>
  );
}
