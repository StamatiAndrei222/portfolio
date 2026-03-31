import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

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
  githubUrl: string;
};

const technicalSkills = [
  "Next.js",
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "MySQL",
  "Prisma",
  "REST API",
  "Git",
  "GitHub",
  "Docker",
  "Postman"
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
    period: "01 Sep 2022 - 20 Mar 2026",
    details:
      "Relevant areas: web application development, frontend and backend fundamentals, database design and management, software engineering principles, object-oriented programming, API development, relational databases, and practical development of full-stack applications."
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
    details: "Completed secondary education with a strong interest in technology and practical learning."
  }
];

const experience: ExperienceItem[] = [
  {
    role: "Moldcell Academy Intern",
    company: "Moldcell",
    period: "17 Oct 2025 - Present",
    featured: true,
    bullets: [
      "Participating in a structured internship focused on practical exposure to digital technologies and professional workflows.",
      "Collaborating with mentors and professionals in a corporate environment.",
      "Attending training courses in SQL, Data Analysis, and QA while strengthening technical fundamentals.",
      "Developing teamwork, communication, and problem-solving skills through real-world tasks."
    ]
  },
  {
    role: "Event Assistant",
    company: "Mticket Group",
    period: "15 Sep 2022 - 28 Mar 2026",
    bullets: [
      "Assisted in coordinating event operations and guest flow in fast-paced environments.",
      "Communicated clearly with attendees and provided reliable on-site support.",
      "Worked effectively in teams and adapted quickly to changing situations."
    ]
  },
  {
    role: "Cashier",
    company: "S.R.L. Bis-concert international",
    period: "05 Jul 2024 - 19 Jan 2025",
    bullets: [
      "Processed customer payments accurately and responsibly with attention to detail.",
      "Provided professional service and clear communication with customers.",
      "Handled transactions efficiently under pressure in a dynamic environment."
    ]
  }
];

const projects: ProjectItem[] = [
  {
    title: "Dayframe",
    description:
      "A modern productivity web app focused on planning, task organization, focus execution, and AI-assisted suggestions.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "localStorage", "OpenAI integration / mock fallback"],
    githubUrl: "https://github.com/StamatiAndrei222/DayFrame"
    
  },
  {
    title: "React E-commerce Project",
    description:
      "A frontend e-commerce app built with React and Vite, focused on reusable components, shopping flow, and clean portfolio-ready structure.",
    stack: ["React", "JavaScript/JSX", "Vite", "CSS"],
    githubUrl: "https://github.com/StamatiAndrei222/react-project"
  },
  {
    title: "JavaScript Amazon Project",
    description:
      "A practice e-commerce project inspired by a marketplace structure, focused on DOM manipulation, shopping flow, and frontend logic.",
    stack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/StamatiAndrei222/javascript-amazon-project"
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
              <p className="pill mb-6">Junior Web Developer</p>
              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink md:text-5xl md:leading-tight">
                Building clean, practical web experiences with focus and consistency.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                I am Andrei Stamati, an early-career developer building my path in IT through hands-on learning,
                teamwork, and real projects. I am focused on web applications that are simple, useful, and
                well-structured.
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
                  href="/Andrei-Stamati-CV.pdf"
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
                  src="/IMG_7740.jpg"
                  alt="Portrait of Andrei Stamati"
                  width={900}
                  height={1400}
                  className="h-[270px] w-full object-cover object-[50%_20%] md:h-[300px]"
                  priority
                />
              </div>
            </div> 
          </div>
        </div>
      </section>

      <section className="section-wrap mt-20" id="about">
        <SectionHeading eyebrow="About" title="A responsible and motivated junior developer" />
        <div className="panel p-7 md:p-9">
          <p className="max-w-4xl text-sm leading-relaxed text-muted md:text-base">
            I am a motivated and responsible person with strong communication and teamwork skills, currently building my
            career in Information Technology. I adapt quickly, enjoy learning, and work seriously toward my goals. I am
            especially interested in web applications and practical digital products that solve real problems.
          </p>
        </div>
      </section>

      <section className="section-wrap mt-20" id="skills">
        <SectionHeading
          eyebrow="Skills"
          title="Technical foundation and professional soft skills"
          description="Balanced growth in modern web development and collaborative work habits."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="panel p-7 md:p-8">
            <h3 className="text-lg font-semibold">Technical Skills</h3>
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
            <div className="mt-8 border-t border-line pt-6 text-sm text-muted">
              <p>Languages</p>
              <p className="mt-2">Romanian - Native</p>
              <p>English - B2 (listening, reading, speaking), B1 writing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap mt-20" id="education">
        <SectionHeading eyebrow="Education" title="Academic and language training" />
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
          title="Practical experience with strong transferable skills"
          description="Moldcell Academy is the most relevant technical step, supported by client-facing and fast-paced team roles."
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
          description="These cards use placeholder links for GitHub and live demos, ready to be replaced with your real URLs."
        />
        <div className="grid gap-4 md:grid-cols-3">
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
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-slate-50"
                >
                  GitHub
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
