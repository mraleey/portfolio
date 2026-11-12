function Svg({ className = "h-5 w-5", children, ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconMenu(props) {
  return (
    <Svg {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function IconClose(props) {
  return (
    <Svg {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  );
}

export function IconMail(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </Svg>
  );
}

export function IconPhone(props) {
  return (
    <Svg {...props}>
      <path d="M8.5 5.5 6.8 3.8a1.5 1.5 0 0 0-2.1 0L3.4 5.1A2 2 0 0 0 3 6.6c.4 3.2 2.2 7.2 5.7 10.7s7.5 5.3 10.7 5.7a2 2 0 0 0 1.5-.4l1.3-1.3a1.5 1.5 0 0 0 0-2.1l-1.7-1.7a1.5 1.5 0 0 0-2.1 0l-.8.8a12 12 0 0 1-5.4-5.4l.8-.8a1.5 1.5 0 0 0 0-2.1Z" />
    </Svg>
  );
}

export function IconLinkedin(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10.5V17M8 7.5v.01M12 17v-4a2 2 0 0 1 4 0v4" />
    </Svg>
  );
}

export function IconGithub(props) {
  return (
    <Svg {...props}>
      <path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.2a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-6A4.6 4.6 0 0 0 18.5 6 4.3 4.3 0 0 0 18.4 3S17.3 2.7 15 4.2a12.3 12.3 0 0 0-6 0C6.7 2.7 5.6 3 5.6 3A4.3 4.3 0 0 0 5.5 6 4.6 4.6 0 0 0 4.3 9.6c0 4.7 2.8 5.7 5.5 6a2.8 2.8 0 0 0-.8 2.2V21" />
    </Svg>
  );
}

export function IconPin(props) {
  return (
    <Svg {...props}>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </Svg>
  );
}

export function IconArrow(props) {
  return (
    <Svg {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  );
}

export function IconChevron({ direction = "left", ...props }) {
  return (
    <Svg {...props}>
      {direction === "left" ? <path d="m14.5 6-6 6 6 6" /> : <path d="m9.5 6 6 6-6 6" />}
    </Svg>
  );
}
