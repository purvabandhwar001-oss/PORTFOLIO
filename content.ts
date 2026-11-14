import type { MarginaliaPortfolioTemplateProps } from "@/components/ui/marginalia-portfolio-template"

/* ======================================================================
   EDIT THIS FILE to change anything on the site.
   ====================================================================== */

// 1. LINKS — paste your URLs between the quotes. Empty ones are hidden automatically,
//    so there are never any dead links on the live site.
//    Google Drive: right-click folder → Share → General access → "Anyone with the link" (Viewer).
export const LINKS = {
  linkedin: "https://www.linkedin.com/in/purva-bandhwar-278898413/",
  github: "", // e.g. "https://github.com/your-username"
  cv: "", // Drive link to your CV (this is what the QR code opens; falls back to LinkedIn)
  drive: {
    accounting: "", // Drive folder: SMIL accounting cycle (Excel + presentation)
    ethnography: "", // Drive folder: Vanishing Canvas (report + documentary)
    aiAgent: "", // Drive folder: AI agent client brief
  },
}

// 2. PHOTOS — put your photo at public/portrait.jpg and change the next line to "portrait.jpg".
const BASE = import.meta.env.BASE_URL
const PORTRAIT = BASE + "portrait.svg"

const U = "https://images.unsplash.com/photo-"
const opt = (href: string) => (href ? { href } : {})

export const content: MarginaliaPortfolioTemplateProps = {
  name: "Purva Bandhwar",
  role: "BBA (Hons.) Student",
  year: "2026",
  location: "Bengaluru, India",
  title: "Portfolio",
  docLabel: "Curriculum Vitae",
  portrait: PORTRAIT,
  traits: ["analytical thinker", "creative strategist", "curious", "leader", "detail-oriented"],
  greeting: "Hello.",
  bio: "I am a BBA (Hons.) student at TAPMI Bengaluru combining *analytical rigour with creative execution*. From conducting field ethnography on AI's impact on traditional art to deconstructing executive rhetoric and modeling complex corporate accounting cycles, I thrive at the intersection of [business management, human behavior, and technology]. Outside the classroom, I express my passion for visual communication through fashion design and video editing.",

  educationIntro: "Bridging foundational learning with hands-on business and behavioral analysis.",
  education: [
    { title: "BBA (Hons.) — 1st Year", place: "TAPMI Bengaluru", period: "2026 – Present", circled: true },
    { title: "Higher Secondary (Class XII)", place: "Indore Public School, Jhabua" },
  ],
  cvUrl: LINKS.cv || LINKS.linkedin,
  cvNote: LINKS.cv ? "scan for my CV" : "scan for my LinkedIn",
  languages: [
    { name: "English", level: "fluent / professional", value: 0.9 },
    { name: "Hindi", level: "native", value: 1 },
  ],

  tools: [
    { name: "Excel", mark: "Xl", bg: "#1d6f42", fg: "#ffffff", note: "pivot tables, financial modeling, relationship mapping" },
    { name: "Power BI", mark: "BI", bg: "#f2c811", fg: "#1b1b1b", note: "data visualization & dashboards" },
    { name: "CapCut", mark: "Cc", bg: "#111111", fg: "#ffffff", note: "timeline editing & audio synchronization" },
  ],
  toolNote: "hover a tool",
  skillsIntro: "Where business analysis meets field research, AI thinking and visual storytelling.",
  skills: [
    "Financial Accounting & Modeling",
    "Qualitative Research & Field Ethnography",
    "Rhetorical Analysis & Leadership Communication",
    "AI Agent Design & RAG/MCP Architecture",
    "Fashion Design & Outfit Styling",
    "Video Editing & Visual Storytelling",
    "Team Leadership & Project Management",
  ],
  books: [
    { title: "Thinking in Systems", color: "#2f3b52" },
    { title: "Language, Rhetoric & Literature", color: "#7d84ef" },
  ],
  booksNote: "on my desk right now",

  projectsNote: "three case studies, three ways of thinking",
  projects: [
    {
      name: "SMIL Accounting Cycle",
      tagline: "Full-scale financial simulation of an automotive giant.",
      kind: "Financial Analysis & Accounting · Excel & Presentation",
      year: "2026",
      summary: "Simulated the complete standalone accounting cycle for Samvardhana Motherson International Ltd. (Nifty 100), a ₹4.48 Lakh Million automotive giant. Modeled *30 complex transactions* — from operational cash flows and $93.6M raw material imports to ₹8,000M subsidiary dividend inflows — constructing the unadjusted trial balance, 13 year-end accrual adjustments, P&L, and balance sheet in absolute equilibrium.",
      challenge: "Reconciling global forex volatility and multi-billion holding company dividends without double-entry errors.",
      note: "80%+ of SMIL's assets sit in its subsidiaries",
      stats: [
        { value: 4.64, decimals: 2, suffix: "L Cr", label: "₹ closing balance sheet equilibrium" },
        { value: 1.3, decimals: 2, suffix: "x", label: "current ratio / liquid cover" },
        { value: 11.4, decimals: 1, suffix: "%", label: "effective tax rate (dividend exemption)" },
      ],
      images: [U + "1554224155-6726b3ff858f", U + "1551288049-bebda4e38f71", U + "1460925895917-afdab827c52f"],
      screens: ["stats", "cover", "detail"],
      accent: "#4f56d8",
      tag: "FY 2025–26",
      ...opt(LINKS.drive.accounting),
    },
    {
      name: "The Vanishing Canvas",
      tagline: "Technological disruption across street caricature artisans.",
      kind: "Qualitative Research · Applied Ethnography & Documentary",
      year: "2026",
      summary: "Conducted field research across Church Street and Galleria Mall to examine how AI image generators and mobile filters affect street portrait artists. Contrast-analyzed artist communication styles, economic vulnerabilities, and consumer behavior — proving that [physical presence and tactile memory] retain distinct value over automated digital speed.",
      challenge: "Bridging positionality and language barriers while capturing authentic field notes in public corridors.",
      note: "co-produced a 5-minute documentary",
      stats: [
        { value: 2, label: "comparative field sites examined" },
        { value: 100, suffix: "%", label: "consent & ethical compliance" },
      ],
      images: [U + "1513364776144-60967b0f800f", U + "1460661419201-fd4cecdf8a8b", U + "1541961017774-22349e4a1262"],
      screens: ["feed", "cover", "detail"],
      accent: "#c2556b",
      tag: "DIR course",
      ...opt(LINKS.drive.ethnography),
    },
    {
      name: "AI Agent Client Brief",
      tagline: "Autonomous GenAI agent for local Kirana stores.",
      kind: "AI Systems Architecture · Product Strategy & RAG/MCP",
      year: "2026",
      summary: "Architected an agentic AI solution for local Kirana store owners (the Ramesh case study), bridging them to quick-commerce demand. Designed a system using [RAG for stock/sales lookups] and [MCP for automated WhatsApp poster generation], paired with a 5-act film storyboard and human-in-the-loop safeguards to eliminate hallucinated pricing.",
      challenge: "Designing zero-jargon automation for users with minimal technical literacy.",
      note: "client brief, risk evaluation & responsible-AI framework",
      images: [U + "1677442136019-21780ecad995", U + "1531746790731-6c087fecd65a", U + "1555949963-ff9fe0c870eb"],
      screens: ["detail", "feed", "cover"],
      accent: "#2f8f83",
      tag: "TLM course",
      ...opt(LINKS.drive.aiAgent),
    },
  ],

  factsNote: "beyond the spreadsheets",
  facts: [
    { doodle: "pencil", text: "Fashion design & outfit styling are how I think visually" },
    { doodle: "camera", text: "I edit stories together — timelines, voiceover, sync" },
    { doodle: "book", text: "Field notes on Church Street, one portrait at a time" },
  ],

  thanks: "Thank You",
  email: "purvabandhar001@gmail.com",
  links: [
    { label: "LinkedIn", href: LINKS.linkedin },
    { label: "GitHub", href: LINKS.github },
    { label: "Accounting Cycle (Drive)", href: LINKS.drive.accounting },
    { label: "Vanishing Canvas (Drive)", href: LINKS.drive.ethnography },
    { label: "AI Agent Brief (Drive)", href: LINKS.drive.aiAgent },
  ].filter((l) => l.href),
  letter: "I believe that effective management requires both analytical rigor and creative empathy — whether that means parsing financial statements or understanding human experiences on the field.\n\nI am always open to discussing new ideas, business strategy, or creative collaborations. Let's connect!",

  colors: { paper: "#ecebe7", night: "#2b2b2e", ink: "#242426", pen: "#7d84ef" },
}
