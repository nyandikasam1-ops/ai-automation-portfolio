import { useEffect, useState } from "react";
import { portfolio } from "./data/portfolio";

const iconShapes = {
  arrowDown: <><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></>,
  arrowDownRight: <><path d="M7 7 17 17" /><path d="M17 7v10H7" /></>,
  arrowRight: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  arrowUpRight: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  circle: <circle cx="12" cy="12" r="9" />,
  command: <><path d="M9 6a3 3 0 1 1-3 3V6h3Z" /><path d="M15 6h3v3a3 3 0 1 1-3-3Z" /><path d="M6 15v3h3a3 3 0 1 0-3-3Z" /><path d="M18 15a3 3 0 1 1-3 3v-3h3Z" /><path d="M9 12h6" /><path d="M12 9v6" /></>,
  gitBranch: <><circle cx="6" cy="3" r="2" /><circle cx="6" cy="21" r="2" /><circle cx="18" cy="6" r="2" /><path d="M6 5v14" /><path d="M18 8a6 6 0 0 1-6 6H6" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  menu: <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>,
  mousePointer: <><path d="m5 3 14 11-7 1-4 6L5 3Z" /><path d="m13 15 5 5" /></>,
  shieldCheck: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
  workflow: <><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M6 9v3a3 3 0 0 0 3 3h6" /><path d="M12 9h6V6" /><circle cx="18" cy="6" r="1" /></>,
  x: <><path d="m18 6-12 12" /><path d="m6 6 12 12" /></>,
} as const;

function Icon({
  name,
  size = 16,
  className,
}: {
  name: keyof typeof iconShapes;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
    >
      {iconShapes[name]}
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Samson Nyandika Orina — home">
        <span className="wordmark-mark">S<span>.</span></span>
        <span className="wordmark-name">Samson Nyandika Orina</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <Icon name="x" size={20} /> : <Icon name="menu" size={20} />}
      </button>
      <nav
        className={`primary-navigation${menuOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        {portfolio.navigation.map((item) => (
          <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
          Let&apos;s talk <Icon name="arrowUpRight" size={14} />
        </a>
      </nav>
    </header>
  );
}

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span>{index}</span>{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        <p className="section-description">{description}</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="availability"><span aria-hidden="true" /> Open to thoughtful remote opportunities</p>
        <p className="eyebrow hero-eyebrow">AI quality · workflow automation · data</p>
        <h1 id="hero-title">Make the work<br />clear. <span>Make it repeatable.</span></h1>
        <p className="hero-summary">{portfolio.summary}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore selected work <Icon name="arrowDownRight" size={17} /></a>
          <a className="button button-secondary" href={`mailto:${portfolio.email}?subject=Portfolio%20enquiry`}>
            <Icon name="mail" size={16} /> Get in touch
          </a>
        </div>
        <div className="hero-caption">
          <span>Based in Kenya</span><span className="caption-dot" aria-hidden="true">·</span><span>Working remotely</span>
        </div>
      </div>
      <div className="hero-visual" aria-label="Illustration of a reviewed, multi-step workflow">
        <div className="visual-topline"><span>WORKFLOW / 001</span><span>REVIEWED BY DESIGN</span></div>
        <div className="flow-map">
          <div className="flow-node flow-source">
            <span className="node-icon"><Icon name="command" size={17} /></span>
            <span><strong>Clear input</strong><small>Task + context</small></span>
            <span className="node-index">01</span>
          </div>
          <span className="flow-connector" aria-hidden="true" />
          <div className="flow-node flow-process">
            <span className="node-icon"><Icon name="workflow" size={17} /></span>
            <span><strong>Focused process</strong><small>Tools + checkpoints</small></span>
            <span className="node-index">02</span>
          </div>
          <span className="flow-connector" aria-hidden="true" />
          <div className="flow-node flow-review">
            <span className="node-icon"><Icon name="shieldCheck" size={17} /></span>
            <span><strong>Human review</strong><small>Verify before use</small></span>
            <Icon name="check" className="review-check" size={16} />
          </div>
        </div>
        <div className="visual-footer"><span><Icon name="circle" size={7} /> BUILT FOR CLARITY</span><span>INPUT <Icon name="arrowRight" size={12} /> OUTPUT</span></div>
        <div className="visual-index" aria-hidden="true">SN / 01</div>
      </div>
      <a className="scroll-cue" href="#about"><span>Scroll to explore</span><Icon name="arrowDown" size={15} /></a>
    </section>
  );
}

function About() {
  return (
    <section className="section-shell content-section about-section" id="about">
      <SectionHeading
        index="01"
        eyebrow="A little about me"
        title="Careful thinking, practical systems."
        description="My work combines quality-minded AI evaluation with an interest in building workflows that people can actually trust."
      />
      <div className="about-grid">
        <p className="about-lead">I’m Samson—a remote AI quality assurance and workflow professional based in Kenya.</p>
        <div className="about-detail">
          <p>My experience includes reviewing model outputs, verifying structured data and documenting issues so teams can act on them. I’m also interested in how scripting, browser tools and integrations can make repeatable work less manual.</p>
          <p>My approach is straightforward: understand the task, make the steps explicit, check the result, and leave a useful record. Automation is most valuable when it supports good judgment—not when it hides uncertainty.</p>
          <a className="text-link" href="#experience">More about my background <Icon name="arrowRight" size={15} /></a>
        </div>
      </div>
      <div className="principle-strip">
        <div><span className="principle-number">01</span><strong>Understand first</strong><span>Good automation starts with the actual task.</span></div>
        <div><span className="principle-number">02</span><strong>Keep it checkable</strong><span>Clear steps make outcomes easier to review.</span></div>
        <div><span className="principle-number">03</span><strong>Leave room for people</strong><span>Human judgment stays in the workflow.</span></div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-shell content-section skills-section" id="skills">
      <SectionHeading
        index="02"
        eyebrow="Capabilities"
        title="Tools serve the process."
        description="A selection of methods and tools listed across my professional materials—grouped by the work they support."
      />
      <div className="skills-grid">
        {portfolio.skills.map((skill, index) => (
          <article className="skill-card" key={skill.title}>
            <span className="skill-index">0{index + 1} / CAPABILITY</span>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <ul className="tag-list">
              {skill.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof portfolio.projects)[number] }) {
  return (
    <article className="project-card">
      <div className="project-topline"><span>SELECTED WORK / {project.number}</span><span className="project-status"><span aria-hidden="true" />{project.status}</span></div>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="tag-list">
        {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      <details className="project-details">
        <summary>How it works <Icon name="chevronDown" size={15} /></summary>
        <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
      </details>
    </article>
  );
}

function Work() {
  return (
    <section className="section-shell content-section work-section" id="work">
      <SectionHeading
        index="03"
        eyebrow="Selected work"
        title="Specific work. Honest status."
        description="A mix of professional practice, a working portfolio build and one clearly labelled workflow concept."
      />
      <div className="projects-grid">
        {portfolio.projects.map((project) => <ProjectCard key={project.number} project={project} />)}
      </div>
      <p className="work-note"><Icon name="mousePointer" size={15} /> Open each project for its approach and current scope.</p>
    </section>
  );
}

function Automation() {
  return (
    <section className="section-shell content-section automation-section" id="automation">
      <SectionHeading
        index="04"
        eyebrow="Automation, thoughtfully"
        title="A good workflow has an exit ramp."
        description="A conceptual pattern for turning a research or drafting task into something reviewable. This is a design illustration—not a deployed integration."
      />
      <div className="automation-layout">
        <div className="automation-flow">
          <div className="automation-step"><span className="step-count">01</span><div><h3>Define the brief</h3><p>Set the audience, objective, source material and constraints.</p></div><Icon name="command" size={18} /></div>
          <div className="automation-step"><span className="step-count">02</span><div><h3>Gather &amp; organise</h3><p>Collect relevant information and keep its source traceable.</p></div><Icon name="workflow" size={18} /></div>
          <div className="automation-step"><span className="step-count">03</span><div><h3>Draft with assistance</h3><p>Use a model or template to prepare a first pass—not a final answer.</p></div><Icon name="gitBranch" size={18} /></div>
          <div className="automation-step"><span className="step-count">04</span><div><h3>Verify &amp; approve</h3><p>Check claims, tone and completeness. A person decides what is ready.</p></div><Icon name="shieldCheck" size={18} /></div>
        </div>
        <aside className="automation-aside">
          <p className="eyebrow"><span>DESIGN PRINCIPLE</span></p>
          <blockquote>“Automate the repeatable steps. Make the uncertain steps visible.”</blockquote>
          <div className="automation-meta"><span>Input</span><strong>Brief + source material</strong></div>
          <div className="automation-meta"><span>Output</span><strong>Draft + review notes</strong></div>
          <div className="automation-meta"><span>Exception</span><strong>Pause and ask a person</strong></div>
          <p className="concept-label"><Icon name="circle" size={7} /> Proposed workflow · not deployed</p>
        </aside>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section-shell content-section experience-section" id="experience">
      <SectionHeading
        index="05"
        eyebrow="Experience & learning"
        title="A foundation in quality."
        description="Experience and education are presented conservatively; the dates shown follow the detailed CV entries."
      />
      <div className="experience-layout">
        <div className="timeline">
          {portfolio.experience.map((item) => (
            <article className="timeline-item" key={item.title}>
              <span className="timeline-marker" aria-hidden="true" />
              <div className="timeline-period">{item.period}<span>{item.context}</span></div>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
            </article>
          ))}
        </div>
        <aside className="education-card">
          <p className="eyebrow"><span>EDUCATION &amp; CREDENTIALS</span></p>
          {portfolio.education.map((item) => (
            <div className="education-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
            </div>
          ))}
          <p className="education-note">Credential names are transcribed from the supplied CVs; certificate links were not provided.</p>
        </aside>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-shell content-section contact-section" id="contact">
      <div className="contact-card">
        <div>
          <p className="eyebrow"><span>06 / CONTACT</span></p>
          <h2>Have a thoughtful<br />problem to solve?</h2>
          <p className="contact-copy">I’m open to conversations about AI quality, workflow operations and practical automation.</p>
        </div>
        <a className="contact-email" href={`mailto:${portfolio.email}?subject=Portfolio%20enquiry`}>
          <span><Icon name="mail" size={17} /> Email me</span>
          <strong>{portfolio.email}</strong>
          <Icon name="arrowUpRight" size={20} />
        </a>
      </div>
      <p className="contact-disclosure">This link opens your email app; no information is submitted or stored by this site.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer section-shell">
      <a className="wordmark footer-wordmark" href="#home">
        <span className="wordmark-mark">S<span>.</span></span>
        <span className="wordmark-name">Samson Nyandika Orina</span>
      </a>
      <span className="footer-note">AI quality · careful automation · Kenya</span>
      <a className="back-to-top" href="#home">Back to top <Icon name="arrowUpRight" size={14} /></a>
      <span className="copyright">© {new Date().getFullYear()} Samson Nyandika Orina</span>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Automation />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
