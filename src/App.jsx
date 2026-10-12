import { useState } from "react";
import { portfolio } from "./data.js";

function ProjectPreview({ project }) {
  if (project.visual === "kwill") {
    return (
      <div className="project-preview kwill-preview" aria-hidden="true">
        <div className="kwill-browser">
          <div className="kwill-browser-bar"><span /><span /><span /><i>kwill-alpha.vercel.app/dashboard</i></div>
          <div className="kwill-app">
            <div className="kwill-sidebar">
              <b><span>●</span> Kwill</b><i>OVERVIEW</i><strong>Dashboard</strong><i>FARM RECORDS</i>
              <span>Egg production</span><span>Flock</span><span>Feed &amp; expenses</span>
            </div>
            <div className="kwill-main">
              <div className="kwill-topline"><div><small>MONDAY, JUNE 16, 2025</small><b>Farm Overview</b></div><span>+ Add record</span></div>
              <div className="kwill-metrics">
                <div><small>EGGS TODAY</small><b>1,248</b><em>↑ 8.2%</em></div>
                <div><small>FLOCK SIZE</small><b>1,560</b><em>Active hens</em></div>
                <div><small>FEED USED</small><b>84 kg</b><em>This week</em></div>
                <div><small>SALES</small><b>₱8,420</b><em>↑ 12.4%</em></div>
              </div>
              <div className="kwill-chart">
                <div><b>Production trends</b><small>LAST 7 DAYS</small></div>
                <div className="chart-bars">{Array.from({ length: 14 }, (_, index) => <i key={index} />)}</div>
                <div className="chart-days"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "todos") {
    return (
      <div className="project-preview todo-preview" aria-hidden="true">
        <div className="preview-window">
          <div className="window-dots"><i /><i /><i /></div>
          <div className="todo-heading">A little progress<br /><span>goes a long way.</span></div>
          <div className="task-row"><b className="check">✓</b><span>Finish the layout</span><small>DONE</small></div>
          <div className="task-row"><b className="check">✓</b><span>Check the colors</span><small>DONE</small></div>
          <div className="task-row pending"><b /><span>Build something new</span><small>NEXT</small></div>
        </div>
        <span className="preview-spark">✳</span>
      </div>
    );
  }

  if (project.visual === "portfolio") {
    return (
      <div className="project-preview portfolio-preview" aria-hidden="true">
        <div className="portfolio-browser">
          <div className="browser-bar"><span /><span /><span /><i>franciscj.dev</i></div>
          <div className="portfolio-screen">
            <span className="screen-kicker">BSIT STUDENT · CREATIVE BUILDER</span>
            <strong>Ideas into<br /><em>interfaces.</em></strong>
            <span className="screen-button">EXPLORE MY WORK&nbsp; ↗</span>
            <div className="screen-orbit" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-preview slides-preview" aria-hidden="true">
      <img src={project.image} alt="" loading="lazy" />
      <span className="slides-label">QUICKSERV ILOILO <b>·</b> PRESENTATION</span>
    </div>
  );
}

function FeaturedProject({ project }) {
  return (
    <article className="project-card featured-project">
      <a className="project-art kwill featured-art" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.action}: ${project.title}`}>
        <ProjectPreview project={project} />
        <span className="preview-strip" aria-hidden="true"><i /><i /><i /><b>01 / 03</b><span>←</span><span>→</span></span>
      </a>
      <div className="featured-copy">
        <p className="featured-count">{project.number} <span>/ 03</span></p>
        <h3>{project.title}</h3>
        <div className="featured-badges">{project.badges.map((badge) => <span key={badge}>{badge}</span>)}</div>
        <p className="featured-description">{project.description}</p>
        <ul className="feature-list">{project.features.map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
        <dl className="project-meta">
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Tools</dt><dd>{project.stack.join(", ")}</dd></div>
          <div><dt>Timeline</dt><dd>{project.timeline}</dd></div>
        </dl>
        <div className="featured-tags">{project.stack.slice(1).map((item) => <span key={item}>{item}</span>)}</div>
        <div className="featured-actions">
          <a className="button" href={project.href} target="_blank" rel="noopener noreferrer">View screens <span aria-hidden="true">▧</span></a>
          <a className="button button-secondary" href={project.href} target="_blank" rel="noopener noreferrer">Live site <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a className={`project-art ${project.visual}`} href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.action}: ${project.title}`}>
        <span className="project-number">{project.number} <i>—</i> {project.type}</span>
        <ProjectPreview project={project} />
        <span className="project-open" aria-hidden="true">↗</span>
      </a>
      <div className="project-copy">
        <div className="project-title-row">
          <div><p className="eyebrow">{project.type}</p><h3>{project.title}</h3></div>
          <a className="round-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={project.action}>↗</a>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">{project.action} <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [["About", "about"], ["Skills", "skills"], ["Projects", "projects"]];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label={`${portfolio.name} home`}>
          <span className="brand-mark">FD</span><span>{portfolio.shortName}</span>
        </a>
        <div className="nav-right">
          <ul className={`nav-links${menuOpen ? " is-open" : ""}`}>
            {links.map(([label, target]) => <li key={target}><a href={`#${target}`} onClick={closeMenu}>{label}</a></li>)}
            <li><a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s connect ↗</a></li>
          </ul>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>☰</button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero wrap" id="home">
      <div className="hero-copy">
        <span className="student-label"><span /> BSIT STUDENT · CREATIVE BUILDER</span>
        <h1>Hello, I’m<br /><em>{portfolio.name}.</em></h1>
        <p className="hero-role">{portfolio.role}</p>
        <p className="hero-description">{portfolio.introduction}</p>
        <div className="hero-actions">
          <a className="button" href="#contact">Contact me <span aria-hidden="true">↗</span></a>
          <a className="button button-secondary" href="#projects">Explore projects <span aria-hidden="true">↓</span></a>
        </div>
        <p className="hero-location">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.6" /></svg>
          {portfolio.location}
        </p>
      </div>
      <div className="hero-visual">
        <div className="photo-halo" />
        <div className="photo-card"><img src={portfolio.photo} alt={`Portrait of ${portfolio.name}`} fetchPriority="high" /><span className="photo-caption">{portfolio.shortName} · Iloilo</span></div>
        <div className="floating-note"><span className="floating-icon" aria-hidden="true">✳</span><span><strong>Curious by nature</strong>Always learning &amp; building</span></div>
      </div>
    </section>
  );
}

function Projects() {
  const [featured, ...otherProjects] = portfolio.projects;
  return (
    <section className="section work-section" id="projects">
      <div className="wrap">
        <div className="section-top">
          <div><p className="eyebrow">SELECTED WORK · 2024—NOW</p><h2>Projects I’ve<br />put my heart into.</h2></div>
          <p>A growing collection of practice projects, personal experiments, and school work. Each one taught me something new.</p>
        </div>
        <div className="project-grid">
          {featured && <FeaturedProject project={featured} />}
          {otherProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="wrap about-grid">
        <div className="about-heading"><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Building skills.<br /><em>Finding my flow.</em></h2></div>
        <div className="about-copy">
          <p>{portfolio.about}</p>
          <ul className="facts">
            <li><span>Currently</span><strong>2nd year BSIT student</strong></li>
            <li><span>Based in</span><strong>{portfolio.location}</strong></li>
            <li><span>Focus</span><strong>UI/UX &amp; front-end</strong></li>
            <li><span>Approach</span><strong>Simple, useful, thoughtful</strong></li>
          </ul>
          <p className="subheading" id="skills">Skills I’m growing</p>
          <div className="skills-grid">
            {portfolio.skills.map((skill) => <div className="skill-item" key={skill.name}>
              <div className="skill-heading"><span>{skill.name}</span><span>{skill.level}%</span></div>
              <div className="skill-track" role="progressbar" aria-label={skill.name} aria-valuemin="0" aria-valuemax="100" aria-valuenow={skill.level}>
                <span style={{ "--skill-level": `${skill.level}%` }} />
              </div>
            </div>)}
          </div>
          <div className="tool-row" aria-label="Tools and methods">{portfolio.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="wrap education-layout">
        <div className="education-intro">
          <p className="eyebrow">MY LEARNING JOURNEY</p>
          <h2>Curiosity is part of the curriculum.</h2>
          <p>My education gives me a foundation; every project is a chance to put it into practice.</p>
          <div className="strengths" aria-label="Strengths">{portfolio.strengths.map((strength) => <span className="tag" key={strength}>{strength}</span>)}</div>
        </div>
        <div className="education-list">{portfolio.education.map((item) => <article className="education-item" key={item.title}>
          <span className="education-period">{item.period}</span>
          <div><h3>{item.title}</h3><p>{item.school}</p><small>{item.detail}</small></div>
        </article>)}</div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section wrap" id="contact">
      <div className="contact-panel">
        <p className="eyebrow">HAVE A PROJECT OR AN IDEA?</p>
        <h2>Let’s make something<br /><em>worth sharing.</em></h2>
        <p>I’m always happy to connect, talk about design and code, or hear what you’re building. Drop me a message.</p>
        <div className="contact-links">
          <a className="button" href={`mailto:${portfolio.email}`}>Email me <span aria-hidden="true">↗</span></a>
          <a className="button button-secondary" href={portfolio.github} target="_blank" rel="noopener noreferrer">Find me on GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <span className="footer-brand">{portfolio.shortName}</span>
        <span>Designed &amp; built with care · © {new Date().getFullYear()}</span>
        <div className="footer-links"><a href={`mailto:${portfolio.email}`}>{portfolio.email}</a><a href={portfolio.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
      </div>
    </footer>
  );
}

export default function App() {
  return <><Header /><main><Hero /><Projects /><About /><Education /><Contact /></main><Footer /></>;
}
