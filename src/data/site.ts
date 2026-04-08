export const siteConfig = {
  name: "Mayank Sahu",
  shortName: "MS",
  title:
    "Mayank Sahu | Full-Stack Developer crafting fast, premium web products",
  description:
    "Portfolio of Mayank Sahu, a full-stack developer focused on polished interfaces, motion-rich experiences, and scalable web architecture.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mayanksahu.dev",
  role: "Full-Stack Developer",
  location: "Bhopal, India",
  email: "mayanksahu8179@gmail.com",
  resumeUrl: "#contact",
  socialLinks: {
    github: "https://github.com/Deadshot-45/",
    linkedin: "https://www.linkedin.com/in/mayank-sahu-ou",
  },
} as const;

export const navigationItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroHighlights = [
  "Motion-led interfaces",
  "Fast, accessible frontend systems",
  "Scalable TypeScript architecture",
] as const;

export const stats = [
  { value: "2+", label: "Years building production-ready apps" },
  { value: "12+", label: "Projects shipped across product and frontend work" },
  { value: "8+", label: "Core technologies used daily" },
] as const;

export const aboutBlurb = [
  "I design and build digital products that feel premium on first impression and reliable after extended use.",
  "My sweet spot is translating product goals into crisp interfaces, maintainable frontend systems, and experiences that stay fast even as complexity grows.",
];

export const skillGroups = [
  {
    title: "Frontend",
    description:
      "Interface systems tuned for clarity, motion, and performance.",
    items: [
      { name: "Next.js", level: 92 },
      { name: "React", level: 94 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 93 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    title: "Backend",
    description: "Practical API and data-layer work for full-stack delivery.",
    items: [
      { name: "Node.js", level: 82 },
      { name: "Express", level: 84 },
      { name: "REST APIs", level: 86 },
      { name: "MongoDB", level: 78 },
      { name: "SQL", level: 72 },
    ],
  },
  {
    title: "Tools",
    description:
      "Workflow tooling for shipping confidently and iterating quickly.",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 76 },
      { name: "Vercel", level: 85 },
      { name: "Postman", level: 82 },
      { name: "Performance Audits", level: 80 },
    ],
  },
] as const;

export const experiences = [
  {
    company: "LincPay",
    role: "React Developer Intern",
    from: "Dec 2025",
    to: undefined,
    location: "Bhopal, India",
    summary:
      "Building reusable interface components, resolving UI issues, and contributing to frontend quality across production flows.",
    bullets: [
      "Implemented reusable UI building blocks from design specs with TypeScript and React.",
      "Delivered minor features and bug fixes without disrupting existing flows.",
      "Contributed to documentation and test-friendly component patterns.",
    ],
  },
  {
    company: "TCIExpress Ltd",
    role: "Senior Supervisor IT",
    from: "Apr 2025",
    to: "Dec 2025",
    location: "Chennai, India",
    summary:
      "Owned operational stability for internal systems and improved reliability across day-to-day IT workflows.",
    bullets: [
      "Maintained high system availability through troubleshooting and device support.",
      "Improved workstation updates and baseline security processes for user teams.",
    ],
  },
  {
    company: "JSpiders",
    role: "MERN Stack Trainee",
    from: "Sep 2024",
    to: "Mar 2025",
    location: "Bengaluru, India",
    summary:
      "Strengthened full-stack fundamentals with hands-on delivery across frontend, backend, and architecture topics.",
    bullets: [
      "Built applications using MongoDB, Express, React, and Node.js.",
      "Sharpened modern JavaScript, semantic HTML, CSS, and API design skills.",
      "Focused on scalable structure, maintainability, and production-minded coding.",
    ],
  },
] as const;

export const assetBaseUrl =
  process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_API_URL || "";

export function getAssetUrl(path: string) {
  if (!assetBaseUrl) {
    return path.startsWith("/") ? path : `/${path}`;
  }

  const normalizedBase = assetBaseUrl.endsWith("/")
    ? assetBaseUrl.slice(0, -1)
    : assetBaseUrl;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBase}${normalizedPath}`;
}

export const projects = [
  {
    slug: "psych-up",
    title: "Psych-up",
    category: "Digital Healthcare",
    tagline:
      "A therapy platform tailored for modern, guided mental healthcare journeys.",
    description:
      "Psych-up brings therapist-led sessions, assessments, and personalized care paths into a cohesive digital experience designed for trust and clarity.",
    longDescription:
      "This product experience focused on making healthcare interactions feel intuitive and calm. I worked across interface polish, responsive behavior, and reusable patterns so the platform could scale while keeping a reassuring visual tone.",
    image: getAssetUrl("/psychup.png"),
    techStack: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    metrics: ["Healthcare UX", "Responsive design", "Reusable components"],
    liveUrl: "https://dev.psychup.health/",
    featured: true,
  },
  {
    slug: "vogue-vault",
    title: "Vogue Vault",
    category: "E-commerce",
    tagline:
      "A polished storefront focused on speed, conversion, and premium presentation.",
    description:
      "An e-commerce experience with strong visual merchandising, organized collections, and a modern retail browsing flow.",
    longDescription:
      "Vogue Vault was shaped around product clarity and browsing momentum. The interface balances editorial product presentation with practical shopping features so users can move from discovery to checkout smoothly.",
    image: getAssetUrl("/e-com.png"),
    techStack: ["Next.js", "Tailwind CSS", "Express.js"],
    metrics: ["Performance-first", "Collection layout", "Retail interactions"],
    liveUrl: "https://vault-vogue-lite.vercel.app/",
    featured: true,
  },
  // {
  //   slug: "nexus-ai",
  //   title: "Nexus AI",
  //   category: "AI Product",
  //   tagline: "A concept dashboard for AI-assisted workflows and decision support.",
  //   description:
  //     "A futuristic interface exploring AI-driven operations, analytics panels, and workspace productivity patterns.",
  //   longDescription:
  //     "This concept pushed visual hierarchy, dashboard composition, and interaction depth. It focused on creating a clean control center that still felt dynamic and forward-looking.",
  //   image: "/nexus-ai.png",
  //   techStack: ["Next.js", "TypeScript", "Framer Motion"],
  //   metrics: ["Dashboard UI", "Animated panels", "Data storytelling"],
  //   liveUrl: "",
  //   featured: false,
  // },
  // {
  //   slug: "crypto-flow",
  //   title: "Crypto Flow",
  //   category: "Fintech",
  //   tagline: "A crypto analytics concept with sharp data visualization and responsive motion.",
  //   description:
  //     "A finance-focused experience for tracking markets, portfolio movement, and key cryptocurrency metrics.",
  //   longDescription:
  //     "Crypto Flow explored how animation and visual rhythm can support comprehension in data-heavy experiences without becoming distracting.",
  //   image: "/cryptoflow.png",
  //   techStack: ["React", "Tailwind CSS", "Charts", "Motion"],
  //   metrics: ["Fintech UI", "Responsive cards", "Interactive states"],
  //   liveUrl: "",
  //   featured: false,
  // },
] as const;
