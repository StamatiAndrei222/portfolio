import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import profilePhoto from "../new_photo.jpeg";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  featured?: boolean;
};

type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl: string;
  liveLabel?: string;
  isPrivateRepo?: boolean;
};

const technicalSkills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "SQL",
  "Databases",
  "REST APIs",
  "Object-oriented programming",
  "Software engineering",
  "Data analysis basics",
  "QA basics",
  "Git",
  "Postman",
  "Docker"
];

const softSkills = [
  "Teamwork",
  "Communication",
  "Adaptability",
  "Attention to detail",
  "Problem solving",
  "Time management"
];

const education = [
  {
    institution: "Technical University of Moldova",
    degree: "Bachelor Studies in Information Technology",
    period: "01 Sep 2022 - 26 May 2026",
    details:
      "Core areas: web application development, frontend and backend fundamentals, database design and management, software engineering principles, object-oriented programming, API development, relational databases, and full-stack application development."
  },
  {
    institution: "kood/Jõhvi",
    degree: "Selection Sprint - Intensive Programming Bootcamp",
    period: "01 Jun 2026 - 19 Jun 2026",
    details:
      "Three-week intensive bootcamp in Jõhvi, Estonia, focused on programming, algorithmic problem-solving, and peer-to-peer learning. Worked through individual and team coding challenges in an international, self-directed environment."
  },
  {
    institution: "ILTC",
    degree: "English Language Course (B2)",
    period: "01 Nov 2023 - 30 Apr 2024",
    details: "Focused on listening, reading, spoken production, and spoken interaction at B2 level."
  },
  {
    institution: "Nicolae Balcescu Theoretical High School",
    degree: "High School Diploma",
    period: "01 Sep 2019 - 30 Jun 2022",
    details: "Completed secondary education, building the analytical and organisational foundation for later technical studies."
  }
];

const experience: ExperienceItem[] = [
  {
    role: "Intern",
    company: "Moldcell",
    period: "17 Oct 2025 - 27 May 2026",
    featured: true,
    bullets: [
      "Gaining practical exposure to digital workflows, internal tools, and professional software practices.",
      "Strengthening fundamentals in SQL, data analysis, QA, documentation, and collaborative technical work.",
      "Working with mentors and colleagues to understand how technical decisions are applied in a real business environment."
    ]
  }
];

const projects: ProjectItem[] = [
  {
    title: "Library Management",
    description:
      "A school project for digitalizing the library process, focused on organizing books, handling records, and improving day-to-day workflow.",
    stack: ["Next.js", "TypeScript", "Database", "REST API"],
    githubUrl: "https://github.com/StamatiAndrei222/library-management",
    liveUrl: "https://library-management-woad-nine.vercel.app",
    liveLabel: "Live Demo",
    isPrivateRepo: true
  },
  {
    title: "Dayframe",
    description:
      "A productivity web app for planning and task organization, built to explore state management and clean UI patterns in Next.js.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "localStorage", "OpenAI integration / mock fallback"],
    githubUrl: "https://github.com/StamatiAndrei222/DayFrame",
    liveUrl: "https://day-frame-rose.vercel.app"
  },
  {
    title: "React E-commerce Project",
    description:
      "A frontend e-commerce app built with React and Vite, focused on reusable components, shopping flow, and clean portfolio-ready structure.",
    stack: ["React", "JavaScript/JSX", "Vite", "CSS"],
    githubUrl: "https://github.com/StamatiAndrei222/react-project",
    liveUrl: "https://react-project-cyan-one.vercel.app"
  },
  {
    title: "JavaScript Amazon Project",
    description:
      "A practice e-commerce project inspired by a marketplace structure, focused on DOM manipulation, shopping flow, and frontend logic.",
    stack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/StamatiAndrei222/javascript-amazon-project",
    liveUrl: "https://javascript-amazon-project-eight.vercel.app"
  }
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export default function Home() {
  return (
    <main className="pb-16 pt-6 md:pb-24 md:pt-8">
      <header className="section-wrap sticky top-4 z-20 mb-10">
        <div className="panel flex flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <p className="text-sm font-semibold tracking-tight">Andrei Stamati</p>
            <p className="text-xs text-muted">Junior Web Developer</p>
          </div>
          <nav className="flex w-full gap-2 overflow-x-auto text-sm text-muted md:w-auto md:overflow-visible">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full border border-line bg-white px-3 py-1.5 transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="section-wrap" id="hero">
        <div className="panel overflow-hidden p-8 md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_340px] md:gap-12 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div>
              <p className="pill mb-6">Junior Software Developer</p>
              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink md:text-5xl md:leading-tight">
                I build digital products with care, structure, and curiosity.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                I&apos;m Andrei Stamati, a junior developer focused on building useful digital products and growing across
                the full software lifecycle: frontend, backend, databases, APIs, QA, and clear technical collaboration.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-slate-50"
                >
                  Contact Me
                </a>
                <Link
                  href="/Andrei_Stamati_CV.pdf"
                  download
                  className="rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-slate-50"
                >
                  Download CV
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[200px] md:max-w-[220px]">
              <div className="panel overflow-hidden p-0">
                <Image
                  src={profilePhoto}
                  alt="Portrait of Andrei Stamati"
                  className="h-[270px] w-full object-cover object-[50%_18%] md:h-[300px]"
                  priority
                />
              </div>
            </div> 
          </div>
        </div>
      </section>

      <section className="section-wrap mt-20" id="about">
        <SectionHeading eyebrow="About" title="Software, systems, and useful products" />
        <div className="panel p-7 md:p-9">
          <p className="max-w-4xl text-sm leading-relaxed text-muted md:text-base">
            My background combines application development, relational databases, API design, object-oriented
            programming, software engineering principles, QA fundamentals, and data-oriented thinking. I enjoy turning
            requirements into working interfaces and structured systems, whether that means planning the data model,
            building the user flow, testing behavior, or improving the final user experience.
          </p>
        </div>
      </section>

      <section className="section-wrap mt-20" id="skills">
        <SectionHeading
          eyebrow="Skills"
          title="Technical foundation and collaborative work habits"
          description="A broad IT base with practical project experience and steady professional habits."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="panel p-7 md:p-8">
            <h3 className="text-lg font-semibold">Technical Areas</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span key={skill} className="rounded-full border border-line bg-white px-3 py-1.5 text-sm text-muted">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="panel p-7 md:p-8">
            <h3 className="text-lg font-semibold">Soft Skills</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span key={skill} className="rounded-full border border-line bg-white px-3 py-1.5 text-sm text-muted">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap mt-20" id="education">
        <SectionHeading eyebrow="Education" title="Academic and technical training" />
        <div className="space-y-4">
          {education.map((item) => (
            <article key={item.institution} className="panel p-7 md:p-8">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                <div>
                  <h3 className="text-lg font-semibold">{item.institution}</h3>
                  <p className="mt-1 text-sm text-muted">{item.degree}</p>
                </div>
                <p className="text-sm text-muted">{item.period}</p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap mt-20" id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="Practical industry exposure"
          description="Developing professional habits through hands-on work, mentorship, and technical training."
        />
        <div className="space-y-4">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.company}`}
              className={`panel p-7 md:p-8 ${item.featured ? "border-slate-300 shadow-soft" : ""}`}
            >
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                <div>
                  <h3 className="text-lg font-semibold">
                    {item.role} <span className="font-medium text-muted">- {item.company}</span>
                  </h3>
                </div>
                <p className="text-sm text-muted">{item.period}</p>
              </div>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted md:text-base">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap mt-20" id="projects">
        <SectionHeading
          eyebrow="Projects"
          title="Portfolio projects"
          description="Each project includes a live link so recruiters can view your work in real time."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="panel flex flex-col p-6">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-line bg-white px-3 py-1 text-xs text-muted">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-2">
                {project.isPrivateRepo ? (
                  <span
                    className="rounded-full border border-line bg-slate-100 px-4 py-2 text-sm font-medium text-muted"
                    title="This repository is private"
                  >
                    Private Repo
                  </span>
                ) : (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-slate-50"
                  >
                    GitHub
                  </a>
                )}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-slate-50"
                >
                  {project.liveLabel ?? "Live Demo"}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap mt-20" id="contact">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Open to junior web developer opportunities, freelance collaboration, and growth-focused teams."
        />
        <div className="panel p-7 md:p-9">
          <div className="grid gap-6 text-sm text-muted md:grid-cols-2 md:text-base">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Email</p>
              <a className="mt-2 block text-ink hover:underline" href="mailto:andreinustamati@gmail.com">
                andreinustamati@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Phone</p>
              <a className="mt-2 block text-ink hover:underline" href="tel:+37360838518">
                +373 60838518
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">GitHub</p>
              <a
                className="mt-2 block text-ink hover:underline"
                href="https://github.com/StamatiAndrei222"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/StamatiAndrei222
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">LinkedIn</p>
              <a
                className="mt-2 block text-ink hover:underline"
                href="https://www.linkedin.com/in/stamati-andrei-2448663bb/"
                target="_blank"
                rel="noreferrer"
              >
               https://www.linkedin.com/in/stamati-andrei-2448663bb/
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-wrap mt-12 border-t border-line pt-6 text-sm text-muted">
        <p>(c) {new Date().getFullYear()} Andrei Stamati</p>
      </footer>
    </main>
  );
}
