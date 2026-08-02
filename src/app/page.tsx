"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const EXPERIENCE = [
  {
    company: "BD Funnel Builder Limited",
    role: "Software QA Engineer",
    period: "April 2026 - Present",
    location: "Dhaka, Bangladesh",
    type: "Onsite",
    color: "var(--teal)",
    bg: "rgba(62,156,134,.12)",
    responsibilities: [
      "Designed and executed test cases and QA checklists for a web-based e-commerce platform.",
      "Performed Functional, Regression, Smoke, Sanity, and API Testing.",
      "Validated end-to-end workflows including Signup, Login, Shop Creation, Order Placement, and Delivery.",
      "Tested courier integrations, payment gateways, and order management workflows.",
      "Verified platform add-ons including SMS, Fake Order, Call Automation, and WooCommerce.",
      "Conducted Landing Page QA and validated GTM & Facebook Pixel events.",
      "Identified, documented, and tracked defects throughout the software development lifecycle.",
    ],
    techStack: ["Manual Testing", "Automation Testing", "API Testing", "REST API", "Playwright", "Postman", "MySQL", "GTM", "Facebook Pixel", "Git"],
  },
  {
    company: "Ravension.Com",
    role: "Software Engineer (AI)",
    period: "January 2026 – March 2026",
    location: "Dhaka, Bangladesh",
    type: "Contract",
    color: "var(--amber)",
    bg: "rgba(232,163,61,.12)",
    responsibilities: [
      "Developed and launched the company website.",
      "Conducted R&D on AI technologies and product innovation.",
      "Built REST APIs and backend services.",
      "Improved application performance and scalability.",
      "Collaborated on transforming product ideas into production-ready solutions.",
    ],
    techStack: ["Next.js", "React", "Node.js", "FastAPI", "REST API", "AI", "JavaScript"],
  },
  {
    company: "Somikoron IT Ltd.",
    role: "SQA & Support Engineer",
    period: "January 2025 – December 2025",
    location: "Dhaka, Bangladesh",
    type: "Onsite",
    color: "var(--coral)",
    bg: "rgba(217,105,79,.12)",
    responsibilities: [
      "Designed and executed 400+ test cases, test scenarios, and test plans.",
      "Performed Functional, Regression, Smoke, Exploratory, UI, and Mobile Testing.",
      "Managed the complete bug lifecycle with a 95%+ bug closure rate.",
      "Supported UAT sessions and collaborated with stakeholders.",
      "Tested ERP modules including CRM, HRM, PMS, Accounting, and Inventory.",
      "Worked closely with developers to reduce production defects and improve release quality.",
    ],
    techStack: ["Manual Testing", "Regression Testing", "Mobile Testing", "API Testing", "MySQL", "Postman", "Git"],
  },
];

const PROJECTS = [
  {
    title: "E-commerce Platform QA",
    category: "QA Testing Project",
    color: "var(--coral)",
    bg: "rgba(217,105,79,.12)",
    icon: (
      <>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </>
    ),
    description:
      "Performed end-to-end quality assurance for a web-based e-commerce platform, validating core business workflows, API integrations, courier services, payment systems, and platform add-ons to ensure a stable production release.",
    achievements: [
      "Designed and executed comprehensive test cases and QA checklists.",
      "Validated Signup, Login, Shop Creation, Orders, and Delivery workflows.",
      "Tested courier integration and payment gateway functionality.",
      "Verified GTM & Facebook Pixel tracking events.",
      "Managed the complete bug reporting and verification lifecycle.",
    ],
    techStack: ["Manual Testing", "Postman", "API Testing", "Regression Testing", "MySQL", "Jira"],
    links: [{ label: "Test Deliverables", href: "https://drive.google.com", type: "file" }],
  },
  {
    title: "ERP Software Testing",
    category: "Enterprise QA Project",
    color: "var(--amber)",
    bg: "rgba(232,163,61,.12)",
    icon: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 9h1M9 13h1M9 17h1M14 9h1M14 13h1M14 17h1" />
      </>
    ),
    description:
      "Conducted quality assurance for ERP modules including CRM, HRM, PMS, Accounting, and Inventory. Designed test cases, executed regression testing, and collaborated with developers to improve software quality.",
    achievements: [
      "Designed 400+ test cases and scenarios.",
      "Performed Functional, Regression, Smoke, UI, and Exploratory Testing.",
      "Supported UAT and release validation.",
      "Achieved a 95%+ bug closure rate.",
    ],
    techStack: ["ERP", "Manual Testing", "SQL", "Postman", "Regression Testing"],
    links: [
      { label: "Test Cases", href: "https://docs.google.com", type: "file" },
      { label: "Bug Reports", href: "https://docs.google.com", type: "bug" },
    ],
  },
  {
    title: "LifeOS – Growth Manager",
    category: "Mobile Application",
    color: "var(--teal)",
    bg: "rgba(62,156,134,.12)",
    icon: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </>
    ),
    description:
      "Validated a productivity and life management application featuring task management, health tracking, expense tracking, and goal planning.",
    achievements: [
      "Tested user authentication and navigation.",
      "Validated task and planner functionality.",
      "Reported UI and functional issues.",
      "Verified mobile responsiveness.",
    ],
    techStack: ["Manual Testing", "Mobile Testing", "UI Testing"],
    links: [{ label: "Live Demo", href: "https://drive.google.com", type: "live" }],
  },
  {
    title: "StoryFlow",
    category: "Web Application",
    color: "var(--coral)",
    bg: "rgba(217,105,79,.12)",
    icon: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </>
    ),
    description:
      "Tested a collaborative productivity platform for journaling, expense tracking, fitness, and project management.",
    achievements: ["Functional Testing", "UI Testing", "API Validation", "Bug Reporting"],
    techStack: ["React", "Next.js", "API Testing", "Manual Testing"],
    links: [
      { label: "Live Demo", href: "https://sf-app-bice.vercel.app", type: "live" },
      { label: "GitHub", href: "https://github.com/fer-doushasan", type: "github" },
    ],
  },
  {
    title: "Ravension Website",
    category: "Development & QA",
    color: "var(--amber)",
    bg: "rgba(232,163,61,.12)",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
      </>
    ),
    description:
      "Developed and validated the company website, ensuring responsive design, performance, and functionality across different devices and browsers.",
    achievements: ["Responsive UI Validation", "Cross-browser Testing", "Performance Verification", "Production Deployment"],
    techStack: ["Next.js", "React", "Node.js", "QA"],
    links: [{ label: "Live Website", href: "https://ravension.com", type: "live" }],
  },
];

const PROJECT_LINK_ICONS: Record<string, React.ReactNode> = {
  live: (
    <>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </>
  ),
  file: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </>
  ),
  bug: (
    <>
      <rect x="8" y="6" width="8" height="14" rx="4" />
      <path d="M19 7 20.5 5.5M5 7 3.5 5.5M12 6V4M8 12H4M20 12h-4M8.5 17 6 19.5M15.5 17 18 19.5" />
    </>
  ),
  github: (
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  ),
};

const CERTIFICATES = [
  {
    title: "SQA: Manual & Automated Testing",
    by: "Ostad",
    duration: "4 Months (Approx.)",
    date: "March 2026",
    color: "var(--teal)",
    bg: "rgba(62,156,134,.12)",
    icon: (
      <>
        <path d="M9 2v6.5L4 18a2 2 0 0 0 1.8 3h12.4a2 2 0 0 0 1.8-3l-5-9.5V2" />
        <path d="M6 2h12" />
      </>
    ),
    description:
      "Comprehensive Software Quality Assurance training covering manual testing, automation, API testing, databases, CI/CD, Agile methodologies, and modern QA tools.",
    skills: ["Manual Testing", "Selenium", "Playwright", "Postman", "TestNG", "JavaScript", "Git", "Jira", "SQL", "CI/CD"],
    platform: "Ostad",
  },
  {
    title: "Postman API Fundamentals",
    by: "Postman",
    duration: "Self-paced",
    date: "November 2025",
    color: "var(--amber)",
    bg: "rgba(232,163,61,.12)",
    icon: (
      <>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </>
    ),
    description:
      "Hands-on API testing course covering REST APIs, HTTP methods, authentication, request validation, scripting, and API testing best practices.",
    skills: ["REST API", "Postman", "GET/POST", "PATCH", "DELETE", "Authorization", "API Testing"],
    platform: "Postman Academy",
  },
  {
    title: "Python for Data Science, AI & Development",
    by: "Coursera",
    duration: "40+ Hours (Approx.)",
    date: "December 2024",
    color: "var(--coral)",
    bg: "rgba(217,105,79,.12)",
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
    description:
      "Built a strong foundation in Python programming, object-oriented programming, data structures, APIs, web scraping, and data analysis.",
    skills: ["Python", "OOP", "Pandas", "NumPy", "API Integration", "Jupyter Notebook"],
    platform: "Coursera",
  },
];

const LEARNING_SUMMARY = [
  {
    label: "Courses Completed",
    value: "3",
    icon: (
      <>
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
      </>
    ),
  },
  {
    label: "Learning Platforms",
    value: "3",
    icon: (
      <>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </>
    ),
  },
  {
    label: "QA & Development Skills",
    value: "30+",
    icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
  },
  {
    label: "Latest Certification",
    value: "2026",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Dhaka International University",
    location: "Dhaka, Bangladesh",
    color: "var(--teal)",
    bg: "rgba(62,156,134,.12)",
    overview:
      "Completed a Bachelor's degree in Computer Science & Engineering with a focus on software engineering, programming, databases, web technologies, and software testing. Built a strong foundation in software development, problem-solving, and quality assurance.",
    highlights: [

      "Completed multiple academic and personal software projects.",
      "Gained practical knowledge in Software Testing, Database Systems, and Web Development.",
      "Participated in team-based software development projects.",
    ],
    coursework: [
      "Software Engineering",
      "Software Testing",
      "Database Systems",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Web Technologies",
      "Object-Oriented Programming",
    ],
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    institution: "Shishukunja School & College",
    location: "Jhenaidah, Bangladesh",
    color: "var(--amber)",
    bg: "rgba(232,163,61,.12)",
    overview: "",
    highlights: [
      "Completed Higher Secondary education in the Science group.",
      "Built a strong foundation in Mathematics, Physics, ICT, and analytical thinking.",
    ],
    coursework: [],
  },
];

export default function Home() {
  const [openExp, setOpenExp] = useState<number | null>(0);
  const [openEdu, setOpenEdu] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState<string>("top");
  const isNavClickRef = useRef(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    isNavClickRef.current = true;
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = setTimeout(() => {
      isNavClickRef.current = false;
    }, 1000);
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const subject = (formData.get("subject") as string) || `Portfolio inquiry from ${name}`;
    const message = (formData.get("message") as string) || "";
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:ferdoushasan382@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const sectionIds = ["top", "about", "experience", "skills", "projects", "certificates", "education", "contact"];

    const handleScroll = () => {
      if (isNavClickRef.current) return;

      const scrollPosition = window.scrollY + 180;
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="grain"></div>

      {/* NAV */}
      <header
        className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-[#12181F]/80 border-b px-6 md:px-8"
        style={{ borderColor: "var(--line)" }}
      >
        <div className="max-w-5xl mx-auto h-16 flex items-center justify-between">
          <a
            href="#top"
            onClick={() => handleNavClick("top")}
            className="font-mono text-sm font-semibold tracking-tight w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:border-[#37424F]"
            style={{ color: "var(--amber)", background: "var(--bg-raised)", border: "1px solid var(--line)" }}
          >
            FH
          </a>
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs" style={{ color: "var(--ink-dim)" }}>
            {[
              { label: "Home", id: "top" },
              { label: "About", id: "about" },
              { label: "Experience", id: "experience" },
              { label: "Skills", id: "skills" },
              { label: "Projects", id: "projects" },
              { label: "Certificates", id: "certificates" },
              { label: "Education", id: "education" },
              { label: "Contact", id: "contact" },
            ].map(({ label, id }) =>
              activeSection === id ? (
                <a
                  key={id}
                  href={`#${id}`}
                  className="nav-link-active"
                  onClick={() => handleNavClick(id)}
                >
                  {label}
                </a>
              ) : (
                <a
                  key={id}
                  href={`#${id}`}
                  className="nav-link"
                  onClick={() => handleNavClick(id)}
                >
                  {label}
                </a>
              )
            )}
          </nav>
          <a href="#contact" className="tag tag-live font-mono">
            <span className="dot"></span> Available
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-40 pb-28 px-6 md:px-8 border-b" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_auto] gap-16 items-center">
          <div>
            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
              Ferdous Hasan
            </h1>
            <p className="font-display mt-3 text-xl md:text-2xl font-semibold" style={{ color: "var(--teal)" }}>
              Software Quality Assurance Engineer
            </p>
            <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed" style={{ color: "var(--ink-dim)" }}>
              Transforming complex software into reliable products through thorough testing, defect analysis, and collaborative quality assurance. Committed to delivering seamless digital experiences with precision and care.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="font-mono text-sm px-5 py-3 rounded-md inline-flex items-center gap-2"
                style={{ background: "var(--amber)", color: "#12181F" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Get In Touch
              </a>
              <a
                href="https://github.com/fer-doushasan"
                target="_blank"
                rel="noopener"
                className="font-mono text-sm px-5 py-3 rounded-md border transition-colors hover:border-[#37424F]"
                style={{ borderColor: "var(--line)", color: "var(--ink)" }}
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/fer-doushasan"
                target="_blank"
                rel="noopener"
                className="font-mono text-sm px-5 py-3 rounded-md border transition-colors hover:border-[#37424F]"
                style={{ borderColor: "var(--line)", color: "var(--ink)" }}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="relative mx-auto shrink-0" style={{ width: "260px", height: "260px" }}>
            <div
              className="relative w-full h-full rounded-full overflow-hidden"
              style={{ border: "1px solid var(--line)", background: "var(--bg-raised)" }}
            >
              <Image
                src="/Ferdous.jpeg"
                alt="Md. Ferdous Hasan"
                fill
                sizes="260px"
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute top-[5%] -right-17">
              <div className="card badge-float-1 px-3 py-2 font-mono text-xs shadow-lg">
                <div className="font-semibold" style={{ color: "var(--teal)" }}>1.7+ Years</div>
                <div style={{ color: "var(--ink-dim)" }}>QA Experience</div>
              </div>
            </div>

            <div className="absolute top-[55%] -left-22 -translate-y-1/2">
              <div className="card badge-float-2 px-3 py-2 font-mono text-xs shadow-lg">
                <div className="font-semibold" style={{ color: "var(--amber)" }}>98%</div>
                <div style={{ color: "var(--ink-dim)" }}>Accuracy Rate</div>
              </div>
            </div>

            <div className="absolute top-[65%] -right-32 -translate-y-1/2">
              <div className="card badge-float-3 px-3 py-2 font-mono text-xs shadow-lg whitespace-nowrap">
                <div className="font-semibold" style={{ color: "var(--coral)" }}>8+ Projects</div>
                <div style={{ color: "var(--ink-dim)" }}> Successfully Tested </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-8 py-24 border-b" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="fade-up">
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-semibold">About Me</h2>
              <div className="w-14 h-[3px] mx-auto mt-4 rounded-full" style={{ background: "var(--teal)" }}></div>
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                Passionate about delivering high-quality software through thorough testing, API validation,
                and continuous improvement. Dedicated to ensuring reliable, user-friendly applications by
                identifying issues before they reach production.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="card p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(62,156,134,.12)", color: "var(--teal)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-semibold font-display" style={{ color: "var(--teal)" }}>1.7+</div>
                  <div className="font-mono text-xs" style={{ color: "var(--ink-dim)" }}>Years Experience</div>
                </div>
              </div>

              <div className="card p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(232,163,61,.12)", color: "var(--amber)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-semibold font-display" style={{ color: "var(--amber)" }}>8+</div>
                  <div className="font-mono text-xs" style={{ color: "var(--ink-dim)" }}>Projects</div>
                </div>
              </div>

              <div className="card p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(217,105,79,.12)", color: "var(--coral)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="8" y="6" width="8" height="14" rx="4" />
                    <path d="M19 7 20.5 5.5M5 7 3.5 5.5M12 6V4M8 12H4M20 12h-4M8.5 17 6 19.5M15.5 17 18 19.5" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-semibold font-display" style={{ color: "var(--coral)" }}>600+</div>
                  <div className="font-mono text-xs" style={{ color: "var(--ink-dim)" }}>Test Cases Designed</div>
                </div>
              </div>

              <div className="card p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(62,156,134,.12)", color: "var(--teal)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-semibold font-display" style={{ color: "var(--teal)" }}>95%+</div>
                  <div className="font-mono text-xs" style={{ color: "var(--ink-dim)" }}>Bug Closure Rate</div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="card p-6 md:p-7">
                <h3 className="font-display text-xl font-semibold mb-4">Quality Assurance Professional</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                  I want to work where software testing, quality assurance, and development meet —
                  while continuing to sharpen my skills in AI and emerging technology. My focus is on
                  building high-quality, scalable, and reliable products through analytical thinking,
                  careful problem-solving, and a habit of continuous learning.
                </p>
              </div>

              <div className="card p-6 md:p-7">
                <h3 className="font-display text-xl font-semibold mb-4">Key Highlights</h3>
                <ul className="space-y-3 text-sm" style={{ color: "var(--ink-dim)" }}>
                  {[
                    "1.7+ years of professional Software Quality Assurance experience",
                    "Expertise in Manual, Exploratory, Functional, Regression, Smoke, Sanity, and API Testing",
                    "Experienced with Postman, Playwright, Selenium, JMeter, MySQL, Git, and GitHub",
                    "Strong knowledge of SDLC, STLC, Agile Scrum, and Defect Lifecycle",
                    "Validated e-commerce workflows including Orders, Payments, Courier Integration, GTM, and Facebook Pixel",
                    "Skilled in bug reporting, requirement analysis, and release validation",
                    "Passionate about continuous learning in Automation Testing and AI-assisted Quality Engineering",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" style={{ color: "var(--teal)" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 md:px-8 py-24 border-b" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="fade-up">
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-semibold">Professional Experience</h2>
              <div className="w-14 h-[3px] mx-auto mt-4 rounded-full" style={{ background: "var(--teal)" }}></div>
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                Building quality software through comprehensive testing, API validation, and collaboration
                across web, ERP, and AI-powered applications.
              </p>
            </div>

            <div className="mt-12 relative">
              <div
                className="absolute top-2 bottom-2 hidden sm:block"
                style={{ left: "15px", width: "1px", background: "var(--line)" }}
              ></div>

              <div className="space-y-4">
                {EXPERIENCE.map((job, i) => {
                const isOpen = openExp === i;
                const isCurrent = job.period.endsWith("Present");
                return (
                  <div key={job.company} className="relative sm:pl-10">
                    <div
                      className="hidden sm:flex absolute left-0 top-6 w-8 h-8 rounded-full items-center justify-center"
                      style={{ background: "var(--bg)" }}
                    >
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ background: isCurrent ? "var(--amber)" : isOpen ? job.color : "var(--ink-dim)" }}
                      ></span>
                    </div>

                    <div
                      className="card overflow-hidden transition-colors"
                      style={isOpen ? { borderColor: job.color } : undefined}
                    >
                    <button
                      type="button"
                      onClick={() => setOpenExp(isOpen ? null : i)}
                      className="w-full flex items-start gap-4 p-5 md:p-6 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: job.bg, color: job.color }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="14" rx="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg font-semibold" style={{ color: job.color }}>{job.company}</h3>
                        <p className="text-sm font-medium mt-0.5">{job.role}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 font-mono text-xs" style={{ color: "var(--ink-dim)" }}>
                          <span className="inline-flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="4" width="18" height="18" rx="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            {job.period}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            {job.location}
                          </span>
                          <span className="tag tag-pass">{job.type}</span>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 mt-2 transition-transform"
                        style={{ color: "var(--ink-dim)", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="px-5 md:px-6 pb-6 pl-[4.5rem] md:pl-[4.75rem]">
                        <h4 className="font-display text-sm font-semibold mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2 text-sm leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                          {job.responsibilities.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="shrink-0" style={{ color: job.color }}>•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <h4 className="font-display text-sm font-semibold mt-5 mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.techStack.map((tech) => (
                            <span key={tech} className="tag tag-neutral">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    </div>
                  </div>
                );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 md:px-8 py-24 border-b" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="fade-up">
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-semibold">Technical Skills</h2>
              <div className="w-14 h-[3px] mx-auto mt-4 rounded-full" style={{ background: "var(--teal)" }}></div>
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                Experienced in software quality assurance with expertise in manual testing, API validation,
                automation fundamentals, and modern web technologies.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: (
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08A3 3 0 0 1 3 13.5a3 3 0 0 1 .5-5.66A2.5 2.5 0 0 1 5.5 4a2.5 2.5 0 0 1 4-2ZM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08A3 3 0 0 0 21 13.5a3 3 0 0 0-.5-5.66A2.5 2.5 0 0 0 18.5 4a2.5 2.5 0 0 0-4-2Z" />
                  ),
                  color: "var(--coral)",
                  bg: "rgba(217,105,79,.12)",
                  title: "Manual Testing",
                  items: ["Functional Testing", "Regression Testing", "Smoke Testing", "Sanity Testing", "Exploratory Testing", "UI Testing", "UAT", "Cross-browser Testing"],
                },
                {
                  icon: <path d="M13 2 4.5 14.5H11L10 22l9-13h-6.5L13 2z" />,
                  color: "var(--amber)",
                  bg: "rgba(232,163,61,.12)",
                  title: "Automation Testing",
                  items: ["Selenium", "Playwright", "TestNG", "Newman", "Basic Automation Framework", "Web Automation"],
                },
                {
                  icon: (
                    <>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
                    </>
                  ),
                  color: "var(--teal)",
                  bg: "rgba(62,156,134,.12)",
                  title: "API Testing",
                  items: ["Postman", "REST API", "Swagger", "API Validation", "CRUD Testing", "API Authorization", "Response Validation"],
                },
                {
                  icon: (
                    <>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6M9 13h6M9 17h6" />
                    </>
                  ),
                  color: "var(--teal)",
                  bg: "rgba(62,156,134,.12)",
                  title: "Test Planning",
                  items: ["Test Case Design", "Test Scenarios", "Test Plans", "QA Checklist", "Bug Reporting", "Defect Lifecycle", "Requirement Analysis"],
                },
                {
                  icon: (
                    <>
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </>
                  ),
                  color: "var(--amber)",
                  bg: "rgba(232,163,61,.12)",
                  title: "Agile / Scrum",
                  items: ["Agile Scrum", "Sprint Planning", "Daily Stand-up", "Sprint Review", "Sprint Retrospective", "SDLC", "STLC"],
                },
                {
                  icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
                  color: "var(--coral)",
                  bg: "rgba(217,105,79,.12)",
                  title: "Tools",
                  items: ["Git", "GitHub", "JMeter", "Jira", "Trello", "TestRail", "Claude Code", "Cursor", "VS Code"],
                },
                {
                  icon: (
                    <>
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
                      <path d="M3 12a9 3 0 0 0 18 0" />
                    </>
                  ),
                  color: "var(--teal)",
                  bg: "rgba(62,156,134,.12)",
                  title: "Database Testing",
                  items: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "CRUD Operations", "Data Validation", "Query Testing"],
                },
                {
                  icon: <path d="m5 3 14 9-14 9V3z" />,
                  color: "var(--amber)",
                  bg: "rgba(232,163,61,.12)",
                  title: "Development",
                  items: ["Next.js", "React", "Node.js", "Express.js", "FastAPI", "REST API", "Tailwind CSS"],
                },
              ].map((cat) => (
                <div key={cat.title} className="card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: cat.bg, color: cat.color }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {cat.icon}
                      </svg>
                    </div>
                    <h3 className="font-display text-base font-semibold">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="tag tag-neutral">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <h3 className="font-display text-xl font-semibold mb-5">Programming Languages</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["JavaScript", "TypeScript", "Python", "SQL", "Dart", "HTML5", "CSS3"].map((lang) => (
                  <span key={lang} className="tag tag-pass">{lang}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-8 py-24 border-b" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="fade-up">
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-semibold">Featured Projects</h2>
              <div className="w-14 h-[3px] mx-auto mt-4 rounded-full" style={{ background: "var(--teal)" }}></div>
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                Showcasing quality assurance projects focused on manual testing, API validation, ERP systems,
                and modern web applications.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-5">
              {PROJECTS.map((project) => (
                <div key={project.title} className="card p-6 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: project.bg, color: project.color }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {project.icon}
                      </svg>
                    </div>
                    <span className="tag tag-neutral shrink-0">{project.category}</span>
                  </div>

                  <h3 className="font-display text-lg font-semibold mb-2">{project.title}</h3>

                  <h4 className="font-mono text-xs mb-1.5" style={{ color: project.color }}>Description</h4>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--ink-dim)" }}>
                    {project.description}
                  </p>

                  <h4 className="font-mono text-xs mb-2" style={{ color: project.color }}>Key Achievements</h4>
                  <ul className="space-y-1.5 text-sm leading-relaxed mb-4" style={{ color: "var(--ink-dim)" }}>
                    {project.achievements.map((item) => (
                      <li key={item} className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" style={{ color: project.color }}>
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-mono text-xs mb-2" style={{ color: project.color }}>Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tag tag-neutral">{tech}</span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex flex-wrap gap-2 border-t" style={{ borderColor: "var(--line)" }}>
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener"
                        className="tag tag-neutral hover:border-[#37424F] transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {PROJECT_LINK_ICONS[link.type]}
                        </svg>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="px-6 md:px-8 py-24 border-b" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="fade-up">
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-semibold">Professional Development</h2>
              <div className="w-14 h-[3px] mx-auto mt-4 rounded-full" style={{ background: "var(--teal)" }}></div>
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                Committed to continuous learning in Software Quality Assurance, API testing, automation,
                and modern software engineering practices.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {CERTIFICATES.map((cert) => (
                <div key={cert.title} className="card p-6 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: cert.bg, color: cert.color }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {cert.icon}
                      </svg>
                    </div>
                    <div className="text-right font-mono text-xs" style={{ color: "var(--ink-dim)" }}>
                      <div className="inline-flex items-center gap-1.5 justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {cert.duration}
                      </div>
                      <div className="mt-1">{cert.date}</div>
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-semibold leading-snug">{cert.title}</h3>
                  <p className="text-sm mt-1 mb-4" style={{ color: "var(--ink-dim)" }}>by {cert.by}</p>

                  <h4 className="font-mono text-xs mb-1.5" style={{ color: cert.color }}>Description</h4>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--ink-dim)" }}>{cert.description}</p>

                  <h4 className="font-mono text-xs mb-2" style={{ color: cert.color }}>Skills Covered</h4>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="tag tag-neutral">{skill}</span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex items-center justify-between gap-2 border-t" style={{ borderColor: "var(--line)" }}>
                    <span className="font-mono text-xs" style={{ color: "var(--ink-dim)" }}>{cert.platform}</span>
                    <span className="tag tag-neutral">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6" />
                      </svg>
                      Certificate
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
              {LEARNING_SUMMARY.map((stat) => (
                <div key={stat.label} className="card p-5 text-center">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3"
                    style={{ background: "rgba(62,156,134,.12)", color: "var(--teal)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {stat.icon}
                    </svg>
                  </div>
                  <div className="text-xl font-semibold font-display">{stat.value}</div>
                  <div className="font-mono text-xs mt-1" style={{ color: "var(--ink-dim)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="px-6 md:px-8 py-24 border-b" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="fade-up">
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-semibold">Education</h2>
              <div className="w-14 h-[3px] mx-auto mt-4 rounded-full" style={{ background: "var(--teal)" }}></div>
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                Strong academic foundation in Computer Science & Engineering, complemented by professional
                experience in Software Quality Assurance, API testing, and modern web technologies.
              </p>
            </div>

            <div className="mt-12 relative max-w-3xl mx-auto">
              <div
                className="absolute top-2 bottom-2 hidden sm:block"
                style={{ left: "15px", width: "1px", background: "var(--line)" }}
              ></div>

              <div className="space-y-4">
                {EDUCATION.map((edu, i) => {
                  const isOpen = openEdu === i;
                  return (
                    <div key={edu.degree} className="relative sm:pl-10">
                      <div
                        className="hidden sm:flex absolute left-0 top-6 w-8 h-8 rounded-full items-center justify-center"
                        style={{ background: "var(--bg)" }}
                      >
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ background: isOpen ? edu.color : "var(--ink-dim)" }}
                        ></span>
                      </div>

                      <div
                        className="card overflow-hidden transition-colors"
                        style={isOpen ? { borderColor: edu.color } : undefined}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenEdu(isOpen ? null : i)}
                          className="w-full flex items-start gap-4 p-5 md:p-6 text-left cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                            style={{ background: edu.bg, color: edu.color }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                              <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-display text-lg font-semibold leading-snug">{edu.degree}</h3>
                            <p className="text-sm font-medium mt-1" style={{ color: edu.color }}>{edu.institution}</p>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 font-mono text-xs" style={{ color: "var(--ink-dim)" }}>
                              <span className="inline-flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                  <circle cx="12" cy="10" r="3" />
                                </svg>
                                {edu.location}
                              </span>
                            </div>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="shrink-0 mt-2 transition-transform"
                            style={{ color: "var(--ink-dim)", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>

                        {isOpen && (
                          <div className="px-5 md:px-6 pb-6 sm:pl-[4.5rem] md:pl-[4.75rem]">
                            {edu.overview && (
                              <>
                                <h4 className="font-display text-sm font-semibold mb-2">Overview</h4>
                                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--ink-dim)" }}>{edu.overview}</p>
                              </>
                            )}

                            <h4 className="font-display text-sm font-semibold mb-3">
                              {edu.overview ? "Academic Highlights" : "Highlights"}
                            </h4>
                            <ul className="space-y-2 text-sm leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                              {edu.highlights.map((item) => (
                                <li key={item} className="flex gap-2">
                                  <span className="shrink-0" style={{ color: edu.color }}>•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>

                            {edu.coursework.length > 0 && (
                              <>
                                <h4 className="font-display text-sm font-semibold mt-5 mb-3">Relevant Coursework</h4>
                                <div className="flex flex-wrap gap-2">
                                  {edu.coursework.map((course) => (
                                    <span key={course} className="tag tag-neutral">{course}</span>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <span className="tag tag-live inline-flex mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.9 4.1L6 9l4.1 1.9L12 15l1.9-4.1L18 9l-4.1-1.9L12 3Z" />
                <path d="M5 3v4M3 5h4M19 17v4M17 19h4" />
              </svg>
              Available for opportunities
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">Let&apos;s Work Together</h2>
            <div className="w-14 h-[3px] mx-auto mt-4 rounded-full" style={{ background: "var(--teal)" }}></div>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "var(--ink-dim)" }}>
              I&apos;m always open to discussing Software Quality Assurance roles, freelance opportunities, and
              exciting projects. Feel free to reach out — I&apos;d love to connect!
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <a href="mailto:ferdoushasan382@gmail.com" className="card p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(217,105,79,.12)", color: "var(--coral)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-xs" style={{ color: "var(--ink-dim)" }}>Email</div>
                  <div className="text-sm font-medium truncate">ferdoushasan382@gmail.com</div>
                </div>
              </a>

              <a href="tel:+8801707657622" className="card p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(62,156,134,.12)", color: "var(--teal)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-xs" style={{ color: "var(--ink-dim)" }}>Phone</div>
                  <div className="text-sm font-medium">+880 1707-657622</div>
                </div>
              </a>

              <div className="card p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(232,163,61,.12)", color: "var(--amber)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-xs" style={{ color: "var(--ink-dim)" }}>Location</div>
                  <div className="text-sm font-medium">Shahjadpur, Gulshan, Dhaka, Bangladesh</div>
                </div>
              </div>

              <div className="card p-5">
                <h3 className="font-display text-base font-semibold mb-4 inline-flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--teal)" }}>
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
                  </svg>
                  Connect With Me
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://linkedin.com/in/fer-doushasan"
                    target="_blank"
                    rel="noopener"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:border-[#37424F]"
                    style={{ background: "rgba(62,156,134,.12)", color: "var(--teal)", border: "1px solid var(--line)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/fer-doushasan"
                    target="_blank"
                    rel="noopener"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:border-[#37424F]"
                    style={{ background: "rgba(140,153,168,.1)", color: "var(--ink)", border: "1px solid var(--line)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {PROJECT_LINK_ICONS.github}
                    </svg>
                  </a>
                  <a
                    href="mailto:ferdoushasan382@gmail.com"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:border-[#37424F]"
                    style={{ background: "rgba(217,105,79,.12)", color: "var(--coral)", border: "1px solid var(--line)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </a>
                  <a
                    href="/Ferdous_Hasan_CV.pdf"
                    download
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:border-[#37424F]"
                    style={{ background: "rgba(232,163,61,.12)", color: "var(--amber)", border: "1px solid var(--line)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="card p-5" style={{ background: "rgba(62,156,134,.06)", borderColor: "rgba(62,156,134,.35)" }}>
                <h3 className="font-display text-base font-semibold mb-3">Quick Response</h3>
                <ul className="space-y-2 text-sm" style={{ color: "var(--ink-dim)" }}>
                  {[
                    "Available for Full-time Opportunities",
                    "Open to Freelance Projects",
                    "Usually responds within 24 hours",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" style={{ color: "var(--teal)" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card p-6 md:p-7">
              <h3 className="font-display text-lg font-semibold mb-6 inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--teal)" }}>
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send a Message
              </h3>
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-md px-4 py-2.5 text-sm outline-none"
                      style={{ background: "var(--bg)", border: "1px solid var(--line)", color: "var(--ink)" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="w-full rounded-md px-4 py-2.5 text-sm outline-none"
                      style={{ background: "var(--bg)", border: "1px solid var(--line)", color: "var(--ink)" }}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Job opportunity, collaboration, project inquiry..."
                    className="w-full rounded-md px-4 py-2.5 text-sm outline-none"
                    style={{ background: "var(--bg)", border: "1px solid var(--line)", color: "var(--ink)" }}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full rounded-md px-4 py-2.5 text-sm outline-none resize-none"
                    style={{ background: "var(--bg)", border: "1px solid var(--line)", color: "var(--ink)" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-mono text-sm px-6 py-3 rounded-md inline-flex items-center justify-center gap-2"
                  style={{ background: "var(--teal)", color: "#12181F" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="divider px-6 md:px-8 py-8">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-between items-center font-mono text-xs" style={{ color: "var(--ink-dim)" }}>
          <span>© 2026 Md. Ferdous Hasan</span>

          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/fer-doushasan" target="_blank" rel="noopener" className="nav-link hover:text-[--ink] transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z" />
              </svg>
            </a>
            <a href="https://github.com/fer-doushasan" target="_blank" rel="noopener" className="nav-link hover:text-[--ink] transition-colors" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {PROJECT_LINK_ICONS.github}
              </svg>
            </a>
            <a href="mailto:ferdoushasan382@gmail.com" className="nav-link hover:text-[--ink] transition-colors" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a href="#top" className="nav-link" aria-label="Back to top">Back to top ↑</a>
          </div>

          <span>Dhaka, Bangladesh</span>
        </div>
      </footer>
    </>
  );
}
