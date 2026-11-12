// Site content. Update copy, links, and project cards here.

export const profile = {
  name: "Ali Haidar",
  title: "Data & AI Engineer | Mobile & Full-Stack Developer",
  tagline:
    "Building production-ready AI systems, real-time IoT platforms, and cross-platform applications.",
  location: "DHA, Lahore, Pakistan",
  phone: "+92 307 0705205",
  phoneHref: "tel:+923070705205",
  email: "mraleeyrajput@gmail.com",
  emailHref: "mailto:mraleeyrajput@gmail.com",
  linkedin: "https://linkedin.com/in/ali-haidar-057b13230",
  linkedinLabel: "ali-haidar",
  github: "https://github.com/mraleey",
  githubLabel: "mraleey",
  portrait: "/images/ali.jpg",
};

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#problems", label: "Problems" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I am a Data & AI Engineer at LUMS Energy Institute / enfo.ai in Lahore. I build production systems for energy monitoring, smart meters, EV charging, and solar telemetry — Flutter apps on the Play Store and App Store, React analytics dashboards, and FastAPI services.",
    "Those platforms run on PostgreSQL time-series, Redis, WebSockets, MQTT, and ETL/ELT pipelines that ingest and process IoT data. I also design Agentic AI workflows, RAG pipelines, and LLM chatbots, and I apply time-series forecasting and anomaly detection to solar and telemetry data.",
    "Before this role I was a Mobile Application and Full Stack Developer at Solution Experts, shipping Flutter and React Native apps plus PHP/MySQL web platforms, ERP/CRM systems, Firebase, and JazzCash and EasyPaisa payments.",
  ],
  focus: [
    "Agentic AI",
    "LLMs",
    "RAG",
    "FastAPI",
    "Flutter",
    "React",
    "ETL/ELT",
    "Anomaly detection",
    "Time-series",
  ],
};

export const experience = [
  {
    id: "lums",
    index: "01",
    role: "Data & AI Engineer",
    company: "LUMS Energy Institute / enfo.ai",
    location: "Lahore, Pakistan",
    dates: "July 2025 – Present",
    current: true,
    bullets: [
      "Developed and deployed cross-platform Flutter mobile applications for energy monitoring, smart meters, EV charging, and battery systems to the Google Play Store and Apple App Store.",
      "Built real-time analytics dashboards using React.js, TypeScript, and JavaScript with Python backends for telemetry visualization, monitoring, anomaly detection, and AI-powered reporting.",
      "Designed and implemented high-throughput asynchronous backend services with FastAPI, PostgreSQL (time-series), Redis, REST APIs, WebSockets, and MQTT, including ETL/ELT pipelines for IoT data ingestion and processing.",
      "Managed Linux VPS infrastructure, started projects from scratch, and handled end-to-end production deployment, configuration, and releases using Git, GitHub, and CI/CD pipelines.",
      "Built production Agentic AI workflows, multi-agent systems, RAG pipelines, LLM-based chatbots, and time-series forecasting models with anomaly detection on solar and telemetry data.",
    ],
  },
  {
    id: "solution-experts",
    index: "02",
    role: "Mobile Application and Full Stack Developer",
    company: "Solution Experts",
    location: "Lahore, Pakistan",
    dates: "Sept 2023 – Dec 2025",
    current: false,
    bullets: [
      "Designed, developed, and deployed cross-platform Flutter and React Native mobile applications to the Google Play Store and Apple App Store with Firebase Authentication, Cloud Firestore, and local data caching.",
      "Built and maintained PHP-based web applications, dynamic websites, and ERP/CRM systems using MySQL, RESTful APIs, and responsive frontend development.",
      "Integrated Firebase Cloud Messaging for push notifications and implemented JazzCash and EasyPaisa payment gateway integrations for mobile and web transactions.",
      "Integrated Google Cloud Platform services, including Google Calendar API for automated scheduling and live location management with GPS-based tracking and geofencing.",
      "Managed Git/GitHub repositories, branching strategies, CI/CD pipelines, and end-to-end production releases across web and mobile platforms.",
    ],
  },
];

export const education = {
  school: "University of Gujrat",
  degree: "BS in Computer Science",
  detail: "Specialization in Data Science",
  dates: "2019 – 2023",
};

export const skillGroups = [
  {
    title: "AI & Generative AI",
    items: [
      "Agentic AI",
      "Multi-Agent Systems",
      "LLMs",
      "LangGraph",
      "LangChain",
      "RAG Pipelines",
      "Prompt Engineering",
      "Time-Series Forecasting (ARIMA/SARIMA, LSTM, Prophet)",
      "Anomaly Detection",
    ],
  },
  {
    title: "Backend & Data Engineering",
    items: [
      "Python",
      "FastAPI",
      "PHP",
      "Asynchronous Programming",
      "RESTful APIs",
      "WebSockets",
      "MQTT",
      "ETL/ELT Pipelines",
      "Real-Time Data Processing",
      "Big Data Handling",
      "PostgreSQL (Time-Series)",
      "Redis",
      "MySQL",
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Flutter",
      "React Native",
      "Dart",
      "State Management (GetX)",
      "Responsive UI",
      "Cross-Platform Development",
    ],
  },
  {
    title: "Cloud, DevOps & Integrations",
    items: [
      "Linux",
      "Docker",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "VPS Deployment",
      "Firebase",
      "GCP",
      "Google Calendar API",
      "JazzCash",
      "EasyPaisa",
      "App Store & Play Store Publishing",
    ],
  },
];

export const projects = [
  {
    title: "CM Punjab Monitoring Platform",
    kicker: "IoT Solar Telemetry & Analytics",
    description:
      "A government-scale IoT telemetry platform built for Punjab's solar initiative to onboard hardware, provision smart meters, and ingest real-time generation metrics via MQTT and WebSockets. Ingests high-frequency device streams into PostgreSQL and executes predictive solar forecasting and anomaly detection using ARIMA/SARIMA, Prophet, and LSTM models.",
    tags: [
      "Flutter",
      "Dart",
      "MQTT",
      "WebSockets",
      "PostgreSQL (Time-Series)",
      "Python",
      "ARIMA/SARIMA",
      "Prophet",
      "LSTM",
      "IoT",
    ],
    problem:
      "Punjab’s solar rollout needed hardware onboarded, smart meters provisioned, and generation watched as it happened. The meters also pushed high-frequency streams that had to be stored, forecast, and checked for abnormal output.",
    solution:
      "I built a telemetry platform that provisions the devices, ingests their streams over MQTT and WebSockets into PostgreSQL time-series, and runs ARIMA/SARIMA, Prophet, and LSTM models for solar forecasting and anomaly detection.",
    href: "https://enfosolarmonitoring.com/",
    linkLabel: "Visit site",
    image: "/images/cm_logo.jpg",
    poster: "#f4f7f2",
  },
  {
    title: "Neubolt",
    kicker: "Connected IoT Telemetry & EV Battery-Swap",
    description:
      "A commercial IoT network engineered for electric vehicles and multi-bay Battery Swap Stations (BSS) to track real-time battery energy consumption and swap assignments. Integrates a station management .NET desktop application with a low-latency Flutter mobile app and an asynchronous PostgreSQL telemetry pipeline.",
    tags: [
      "Flutter",
      "Dart",
      ".NET (Desktop)",
      "FastAPI",
      "WebSockets",
      "PostgreSQL (Time-Series)",
      "Message Queues",
      "IoT Telemetry",
    ],
    problem:
      "Swap stations and vehicles needed a live record of battery energy use and which pack was assigned to which bay, shared between the station desk and the mobile app.",
    solution:
      "I connected a .NET station management app and a low-latency Flutter app to an asynchronous PostgreSQL telemetry pipeline, with message queues and WebSockets keeping consumption and swap assignments current.",
    href: "https://neubolt.com/",
    linkLabel: "Visit site",
    image: "/images/neubolt.png",
    poster: "#0c0c0c",
  },
  {
    title: "BijliPoint",
    kicker: "Utility Analytics & EV Charging",
    description:
      "A production EV charging platform that allows users to locate stations, control charging sessions, and manage connectivity across four online/offline hardware states. Features real-time command dispatching over WebSockets, energy consumption analytics in PostgreSQL, and integrated JazzCash and EasyPaisa mobile payment gateways.",
    tags: [
      "Flutter",
      "FastAPI",
      "WebSockets",
      "PostgreSQL",
      "JazzCash API",
      "EasyPaisa API",
      "RESTful APIs",
      "Energy Analytics",
    ],
    problem:
      "Drivers needed to find a charger, control a session, and pay, while each charger could sit in one of four online or offline states and the operator needed that session’s energy use.",
    solution:
      "I shipped a Flutter app on FastAPI that sends charger commands over WebSockets, stores energy analytics in PostgreSQL, and collects payment through JazzCash and EasyPaisa.",
    href: "https://play.google.com/apps/internaltest/4700013595902659655",
    linkLabel: "Play test",
    image: "/images/bijli_point.png",
    poster: "#050505",
  },
  {
    title: "Enviz",
    kicker: "Cross-Platform Mobile & Data Visualization",
    description:
      "A published mobile data visualization platform featuring custom memory-optimized charting pipelines designed to render high-throughput streaming telemetry. Embeds an Agentic AI model that parses natural language queries to source telemetry data, generate analytical insights, and visualize trends dynamically.",
    tags: [
      "Flutter",
      "Dart",
      "Agentic AI",
      "LLMs",
      "Natural Language Querying",
      "Data Visualization",
      "Custom Charting",
      "Google Play",
    ],
    problem:
      "A phone could not chart high-throughput telemetry without running out of memory, and pulling one trend meant searching the stream by hand.",
    solution:
      "I built memory-optimized charting pipelines for the live stream, and an Agentic AI model that reads a plain-language question, fetches the matching telemetry, and draws the trend.",
    href: "https://play.google.com/store/apps/details?id=com.enfo.highcharts_demo&pcampaignid=web_share",
    linkLabel: "Google Play",
    image: "/images/enviz_logo.png",
    poster: "#0e3d38",
  },
  {
    title: "Advance Pest Control",
    kicker: "Mobile Task Scheduling & Field Dispatch",
    description:
      "A commercial field service management app developed in Flutter and Kotlin that coordinates technician dispatch and pest control job scheduling. Employs an Agentic AI workflow to intelligently parse task details and technician availability, automatically synchronizing assignments directly into Google Calendar.",
    tags: [
      "Flutter",
      "Kotlin",
      "Agentic AI",
      "Google Calendar API",
      "Android",
      "RESTful APIs",
      "Google Play",
    ],
    problem:
      "Dispatchers had to read each job, match a technician’s availability, and then type the visit into a calendar as a separate step.",
    solution:
      "I built a Flutter and Kotlin field app whose Agentic AI workflow reads the task and the technician’s availability, then writes the assignment directly into Google Calendar.",
    href: "https://play.google.com/store/apps/details?id=com.solexp.apc_system&pcampaignid=web_share",
    linkLabel: "Google Play",
    image: "/images/apc_logo.png",
    poster: "#f7f7f7",
  },
  {
    title: "Multinet Attendance System",
    kicker: "Geolocation & Geofencing Management",
    description:
      "An enterprise employee attendance tracking application built with Flutter for iOS and Android utilizing real-time GPS tracking. Implements strict perimeter geofencing to ensure attendance can only be validated within verified physical company premises.",
    tags: [
      "Flutter",
      "Dart",
      "Geolocation",
      "Geofencing",
      "SQLite",
      "RESTful APIs",
      "Android",
      "iOS",
    ],
    problem:
      "A check-in from anywhere did not prove the employee was inside the company’s premises.",
    solution:
      "I built a Flutter app for iOS and Android that reads GPS and accepts attendance only inside a geofence around verified premises, storing records in SQLite and syncing them through REST APIs.",
    href: "https://www.multynet.com.pk/",
    linkLabel: "Visit site",
    image: "/images/multynet.png",
    poster: "#f5f5f5",
  },
];
