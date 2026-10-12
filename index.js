const http = require("node:http");

const PORT = Number(process.env.PORT) || 3000;

const portfolio = {
  name: "Francis CJ Dayaday",
  shortName: "Francis CJ",
  role: "Aspiring Front-End Developer & UI/UX Designer",
  location: "Leganes, Iloilo, Philippines",
  introduction:
    "I’m a BSIT student who enjoys turning ideas into clean, useful interfaces. I’m learning by designing, building, and improving real projects one step at a time.",
  about:
    "I’m currently studying Bachelor of Science in Information Technology at Western Institute of Technology. I enjoy the mix of creativity and problem-solving in UI/UX and front-end development, and I like turning ideas from class into things people can actually use.",
  email: "cjdayaday@gmail.com",
  github: "https://github.com/Cjgwapo16",
  photo: "https://portfolio1-cjdayaday-porfolio.vercel.app/profile.png",
  education: [
    {
      period: "2024 — Present",
      title: "BS Information Technology",
      school: "Western Institute of Technology",
      detail: "Currently pursuing a Bachelor of Science in Information Technology.",
    },
    {
      period: "2024",
      title: "Senior High School",
      school: "Leganes National High School",
      detail: "Senior High School graduate.",
    },
    {
      period: "2022",
      title: "Junior High School",
      school: "Leganes National High School",
      detail: "Completed junior high school.",
    },
  ],
  skills: [
    { name: "HTML & CSS", level: 75 },
    { name: "JavaScript", level: 65 },
    { name: "Python & Java", level: 55 },
    { name: "React basics", level: 45 },
  ],
  tools: ["Figma", "Canva", "VS Code", "Git", "Wireframing", "Prototyping"],
  strengths: ["Problem solving", "Creativity", "Teamwork", "Adaptability", "Critical thinking"],
  projects: [
    {
      number: "01",
      type: "UI/UX design · Web app",
      title: "Kwill",
      description:
        "A farm management dashboard concept for tracking flock size, egg production, mortality, feed, sales, and expenses. Quick-add records and monthly trends help bring daily operations into one clear view.",
      stack: ["Figma", "JavaScript", "HTML", "CSS"],
      href: "https://kwill-alpha.vercel.app/",
      action: "View live project",
      visual: "kwill",
      badges: ["Team Project", "Academic"],
      role: "UI/UX Designer",
      timeline: "2026 Team Project",
      features: [
        "At-a-glance dashboard for flock, eggs, feed, sales, and profit",
        "One-tap Quick Add for daily farm records",
        "Date-range trend charts to compare production and costs",
      ],
    },
    {
      number: "02",
      type: "Practice project",
      title: "Awesome Todos",
      description:
        "A small task manager built to practice core CRUD actions: adding, checking off, and deleting tasks. A hands-on way to strengthen my JavaScript and responsive UI skills.",
      stack: ["HTML", "CSS", "JavaScript", "CRUD"],
      href: "https://awesometodos-497l.onrender.com/",
      action: "View live project",
      visual: "todos",
    },
    {
      number: "03",
      type: "School presentation",
      title: "Quickserv Iloilo",
      description:
        "A presentation project exploring a service concept for Iloilo, with a focus on clear visual communication and an easy-to-follow story.",
      stack: ["Google Slides", "Presentation", "Visual communication"],
      href: "https://docs.google.com/presentation/d/1vEGn5qi893pGUi6llOHpxeVpNrJEN9fhmCYxFYr9pqw/edit?slide=id.g278bb9d625c_0_43#slide=id.g278bb9d625c_0_43",
      action: "Open presentation",
      visual: "slides",
      image: "https://portfolio1-cjdayaday-porfolio.vercel.app/presentation-deck.png",
    },
  ],
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function safeHref(value) {
  const href = String(value);
  return /^(https?:\/\/|mailto:|#)/i.test(href) ? escapeHtml(href) : "#";
}

const initials = portfolio.shortName
  .split(/\s+/)
  .map((part) => part[0])
  .join("");

function renderProjectVisual(project) {
  if (project.visual === "kwill") {
    return `<div class="project-preview kwill-preview" aria-hidden="true">
      <div class="kwill-browser">
        <div class="kwill-browser-bar"><span></span><span></span><span></span><i>kwill-alpha.vercel.app/dashboard</i></div>
        <div class="kwill-app">
          <div class="kwill-sidebar"><b><span>●</span> Kwill</b><i>OVERVIEW</i><strong>Dashboard</strong><i>FARM RECORDS</i><span>Egg production</span><span>Flock</span><span>Feed & expenses</span></div>
          <div class="kwill-main"><div class="kwill-topline"><div><small>MONDAY, JUNE 16, 2025</small><b>Farm Overview</b></div><span>+ Add record</span></div>
            <div class="kwill-metrics"><div><small>EGGS TODAY</small><b>1,248</b><em>↑ 8.2%</em></div><div><small>FLOCK SIZE</small><b>1,560</b><em>Active hens</em></div><div><small>FEED USED</small><b>84 kg</b><em>This week</em></div><div><small>SALES</small><b>₱8,420</b><em>↑ 12.4%</em></div></div>
            <div class="kwill-chart"><div><b>Production trends</b><small>LAST 7 DAYS</small></div><div class="chart-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="chart-days"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div></div>
          </div>
        </div>
      </div>
    </div>`;
  }

  if (project.visual === "todos") {
    return `<div class="project-preview todo-preview" aria-hidden="true">
      <div class="preview-window">
        <div class="window-dots"><i></i><i></i><i></i></div>
        <div class="todo-heading">A little progress<br><span>goes a long way.</span></div>
        <div class="task-row"><b class="check">✓</b><span>Finish the layout</span><small>DONE</small></div>
        <div class="task-row"><b class="check">✓</b><span>Check the colors</span><small>DONE</small></div>
        <div class="task-row pending"><b></b><span>Build something new</span><small>NEXT</small></div>
      </div>
      <span class="preview-spark">✳</span>
    </div>`;
  }

  if (project.visual === "portfolio") {
    return `<div class="project-preview portfolio-preview" aria-hidden="true">
      <div class="portfolio-browser">
        <div class="browser-bar"><span></span><span></span><span></span><i>franciscj.dev</i></div>
        <div class="portfolio-screen">
          <span class="screen-kicker">BSIT STUDENT · CREATIVE BUILDER</span>
          <strong>Ideas into<br><em>interfaces.</em></strong>
          <span class="screen-button">EXPLORE MY WORK&nbsp; ↗</span>
          <div class="screen-orbit"></div>
        </div>
      </div>
    </div>`;
  }

  return `<div class="project-preview slides-preview" aria-hidden="true">
    <img src="${escapeHtml(project.image)}" alt="" loading="lazy">
    <span class="slides-label">QUICKSERV ILOILO <b>·</b> PRESENTATION</span>
  </div>`;
}

const projectMarkup = portfolio.projects
  .map((project) => {
    if (project.visual === "kwill") {
      return `
      <article class="project-card featured-project">
        <a class="project-art kwill featured-art" href="${safeHref(project.href)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(project.action)}: ${escapeHtml(project.title)}">
          ${renderProjectVisual(project)}
          <span class="preview-strip" aria-hidden="true"><i></i><i></i><i></i><b>01 / 03</b><span>←</span><span>→</span></span>
        </a>
        <div class="featured-copy">
          <p class="featured-count">${escapeHtml(project.number)} <span>/ 03</span></p>
          <h3>${escapeHtml(project.title)}</h3>
          <div class="featured-badges">${project.badges.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
          <p class="featured-description">${escapeHtml(project.description)}</p>
          <ul class="feature-list">${project.features.map((item) => `<li><span aria-hidden="true">✓</span>${escapeHtml(item)}</li>`).join("")}</ul>
          <dl class="project-meta"><div><dt>Role</dt><dd>${escapeHtml(project.role)}</dd></div><div><dt>Tools</dt><dd>${project.stack.map(escapeHtml).join(", ")}</dd></div><div><dt>Timeline</dt><dd>${escapeHtml(project.timeline)}</dd></div></dl>
          <div class="featured-tags">${project.stack.slice(1).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
          <div class="featured-actions"><a class="button" href="${safeHref(project.href)}" target="_blank" rel="noopener noreferrer">View screens <span aria-hidden="true">▧</span></a><a class="button button-secondary" href="${safeHref(project.href)}" target="_blank" rel="noopener noreferrer">Live site <span aria-hidden="true">↗</span></a></div>
        </div>
      </article>`;
    }

    return `
      <article class="project-card">
        <a class="project-art ${escapeHtml(project.visual)}" href="${safeHref(project.href)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(project.action)}: ${escapeHtml(project.title)}">
          <span class="project-number">${escapeHtml(project.number)} <i>—</i> ${escapeHtml(project.type)}</span>
          ${renderProjectVisual(project)}
          <span class="project-open" aria-hidden="true">↗</span>
        </a>
        <div class="project-copy">
          <div class="project-title-row">
            <div>
              <p class="eyebrow">${escapeHtml(project.type)}</p>
              <h3>${escapeHtml(project.title)}</h3>
            </div>
            <a class="round-link" href="${safeHref(project.href)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(project.action)}">↗</a>
          </div>
          <p class="project-description">${escapeHtml(project.description)}</p>
          <div class="tag-list">${project.stack.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
          <a class="project-link" href="${safeHref(project.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(project.action)} <span aria-hidden="true">↗</span></a>
        </div>
      </article>`;
  })
  .join("");

const skillMarkup = portfolio.skills
  .map(
    (skill) => `<div class="skill-item">
      <div class="skill-heading"><span>${escapeHtml(skill.name)}</span><span>${skill.level}%</span></div>
      <div class="skill-track" role="progressbar" aria-label="${escapeHtml(skill.name)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${skill.level}">
        <span style="--skill-level:${skill.level}%"></span>
      </div>
    </div>`,
  )
  .join("");

const educationMarkup = portfolio.education
  .map(
    (item) => `<article class="education-item">
      <span class="education-period">${escapeHtml(item.period)}</span>
      <div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.school)}</p><small>${escapeHtml(item.detail)}</small></div>
    </article>`,
  )
  .join("");

const toolMarkup = portfolio.tools.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("");
const strengthMarkup = portfolio.strengths.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("");

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#10141b">
  <meta name="description" content="${escapeHtml(portfolio.name)} — IT student exploring front-end development, UI/UX design, and creative technology.">
  <title>${escapeHtml(portfolio.name)} — Front-End Developer & UI/UX Designer</title>
  <link rel="preconnect" href="https://portfolio1-cjdayaday-porfolio.vercel.app">
  <style>
    :root {
      color-scheme: dark;
      --bg: #10141b;
      --surface: #171d27;
      --surface-soft: #1c2430;
      --ink: #f3f3ee;
      --muted: #a1a8b4;
      --faint: #697382;
      --line: rgba(229, 235, 245, .11);
      --blue: #8bb7ff;
      --gold: #e7bf78;
      --serif: Georgia, "Times New Roman", serif;
      --sans: "Segoe UI", Arial, sans-serif;
      --page-width: 1160px;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; scroll-padding-top: 88px; }
    body { margin: 0; background: var(--bg); color: var(--ink); font-family: var(--sans); -webkit-font-smoothing: antialiased; }
    body::before { position: fixed; inset: 0; z-index: -1; background: radial-gradient(ellipse at 78% 8%, rgba(61, 92, 139, .15), transparent 34%), radial-gradient(ellipse at 6% 44%, rgba(173, 132, 68, .07), transparent 28%); content: ""; pointer-events: none; }
    a { color: inherit; text-decoration: none; }
    button { color: inherit; font: inherit; }
    img { display: block; max-width: 100%; }
    .wrap { width: min(var(--page-width), calc(100% - 72px)); margin-inline: auto; }
    .site-header { position: sticky; top: 0; z-index: 10; border-bottom: 1px solid var(--line); background: rgba(16, 20, 27, .86); backdrop-filter: blur(18px); }
    .nav { min-height: 76px; display: flex; align-items: center; justify-content: space-between; }
    .brand { display: inline-flex; align-items: center; gap: 12px; font-size: 13px; font-weight: 750; letter-spacing: .12em; text-transform: uppercase; }
    .brand-mark { display: grid; width: 34px; height: 34px; place-items: center; border: 1px solid rgba(231, 191, 120, .55); border-radius: 50%; color: var(--gold); font-family: var(--serif); font-size: 13px; font-weight: 400; letter-spacing: -.05em; }
    .nav-right, .nav-links { display: flex; align-items: center; }
    .nav-right { gap: 31px; }
    .nav-links { gap: 30px; list-style: none; margin: 0; padding: 0; }
    .nav-links a { color: var(--muted); font-size: 12px; transition: color .2s ease; }
    .nav-links a:hover, .nav-links a:focus-visible { color: var(--ink); }
    .nav-links .nav-contact { padding: 11px 17px; border: 1px solid rgba(139, 183, 255, .35); border-radius: 999px; color: var(--blue); }
    .menu-toggle { display: none; padding: 8px; border: 0; background: none; cursor: pointer; font-size: 20px; }
    .hero { position: relative; display: grid; min-height: 690px; grid-template-columns: 1.08fr .92fr; align-items: center; gap: clamp(42px, 8vw, 105px); padding-block: 83px 112px; }
    .hero-copy { position: relative; z-index: 1; }
    .eyebrow { margin: 0 0 17px; color: var(--blue); font-size: 10px; font-weight: 750; letter-spacing: .17em; text-transform: uppercase; }
    .student-label { display: inline-flex; align-items: center; gap: 9px; margin-bottom: 24px; padding: 9px 13px; border: 1px solid rgba(139, 183, 255, .2); border-radius: 999px; background: rgba(139, 183, 255, .07); color: #c4d8fa; font-size: 11px; letter-spacing: .03em; }
    .student-label span { width: 7px; height: 7px; border-radius: 50%; background: var(--gold); box-shadow: 0 0 12px rgba(231, 191, 120, .65); }
    .hero h1 { max-width: 720px; margin: 0; font-family: var(--serif); font-size: clamp(56px, 7.6vw, 94px); font-weight: 400; letter-spacing: -.075em; line-height: .99; }
    .hero h1 em { color: var(--gold); font-weight: 400; }
    .hero-role { margin: 20px 0 0; color: var(--blue); font-size: clamp(14px, 1.7vw, 18px); font-weight: 650; letter-spacing: .025em; }
    .hero-description { max-width: 540px; margin: 22px 0 0; color: var(--muted); font-size: 14px; line-height: 1.85; }
    .hero-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 13px; margin-top: 30px; }
    .button { display: inline-flex; min-height: 47px; align-items: center; justify-content: center; gap: 11px; padding: 0 19px; border: 1px solid rgba(231, 191, 120, .72); border-radius: 999px; background: linear-gradient(110deg, #d8ad65, #edd099); color: #151923; font-size: 12px; font-weight: 700; transition: transform .2s ease, box-shadow .2s ease; }
    .button:hover { transform: translateY(-2px); box-shadow: 0 9px 28px rgba(231, 191, 120, .18); }
    .button-secondary { border-color: rgba(139, 183, 255, .46); background: transparent; color: var(--blue); }
    .button-secondary:hover { box-shadow: 0 9px 28px rgba(139, 183, 255, .12); }
    .hero-location { display: flex; align-items: center; gap: 8px; margin: 27px 0 0; color: var(--faint); font-size: 11px; }
    .hero-location svg { width: 14px; height: 14px; color: var(--gold); }
    .hero-visual { position: relative; display: grid; min-height: 465px; place-items: center; }
    .photo-halo { position: absolute; width: min(390px, 92%); aspect-ratio: 1; border: 1px solid rgba(139, 183, 255, .2); border-radius: 50%; box-shadow: 0 0 0 22px rgba(139, 183, 255, .025), 0 0 0 70px rgba(139, 183, 255, .018); }
    .photo-card { position: relative; width: min(310px, 76%); aspect-ratio: .79; overflow: hidden; border: 1px solid rgba(231, 191, 120, .35); border-radius: 155px 155px 10px 10px; background: linear-gradient(155deg, #344255, #202733 63%, #916f45); box-shadow: 0 28px 90px rgba(0, 0, 0, .34); }
    .photo-card::after { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 55%, rgba(10, 14, 20, .48)); content: ""; }
    .photo-card img { width: 100%; height: 100%; object-fit: cover; object-position: center 25%; }
    .photo-caption { position: absolute; z-index: 1; right: 0; bottom: 22px; left: 0; text-align: center; color: #f4f2ec; font-size: 10px; letter-spacing: .14em; text-transform: uppercase; }
    .floating-note { position: absolute; right: 2%; bottom: 44px; display: flex; align-items: center; gap: 10px; padding: 13px 16px; border: 1px solid var(--line); border-radius: 8px; background: rgba(23, 29, 39, .92); box-shadow: 0 12px 30px rgba(0, 0, 0, .22); color: var(--muted); font-size: 10px; }
    .floating-note strong { display: block; margin-bottom: 3px; color: var(--ink); font-size: 11px; }
    .floating-icon { display: grid; width: 30px; height: 30px; place-items: center; border-radius: 50%; background: rgba(139, 183, 255, .12); color: var(--blue); font-size: 15px; }
    .section { padding-block: 104px; }
    .section-top { display: flex; justify-content: space-between; align-items: end; gap: 30px; margin-bottom: 38px; }
    .section-top h2, .about-heading h2, .contact-panel h2 { margin: 0; font-family: var(--serif); font-weight: 400; letter-spacing: -.06em; line-height: 1.03; }
    .section-top h2 { font-size: clamp(42px, 5.3vw, 64px); }
    .section-top > p { max-width: 360px; margin: 0 0 4px; color: var(--muted); font-size: 12px; line-height: 1.8; }
    .work-section { border-top: 1px solid var(--line); }
    .project-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 48px 26px; }
    .project-card:first-child { grid-column: span 2; }
    .project-art { position: relative; display: grid; min-height: 310px; overflow: hidden; place-items: center; border: 1px solid rgba(255, 255, 255, .08); border-radius: 8px; isolation: isolate; transition: transform .28s ease, border-color .28s ease; }
    .project-card:first-child .project-art { min-height: 385px; }
    .project-art:hover { transform: translateY(-4px); border-color: rgba(139, 183, 255, .34); }
    .project-art.todos { background: radial-gradient(ellipse at 50% 100%, #313a43 0, #202936 42%, #1b2532 100%); }
    .project-art.portfolio { background: radial-gradient(ellipse at 15% 15%, #293b56, #192330 68%); }
    .project-art.slides { background: #292a33; }
    .project-art.kwill { background: radial-gradient(ellipse at 52% 40%, #263e67, #101d37 75%); }
    .project-number { position: absolute; z-index: 2; top: 19px; left: 21px; color: rgba(245, 245, 239, .68); font-size: 9px; letter-spacing: .13em; text-transform: uppercase; }
    .project-number i { padding-inline: 5px; color: var(--gold); font-style: normal; }
    .project-open { position: absolute; z-index: 3; top: 15px; right: 17px; display: grid; width: 32px; height: 32px; place-items: center; border: 1px solid rgba(255, 255, 255, .2); border-radius: 50%; background: rgba(16, 20, 27, .45); font-size: 15px; transition: background .2s ease, color .2s ease; }
    .project-art:hover .project-open { background: var(--gold); color: var(--bg); }
    .project-preview { position: relative; display: grid; width: min(76%, 560px); min-height: 235px; place-items: center; }
    .kwill-preview { width: min(88%, 690px); min-height: 290px; }
    .kwill-browser { width: 100%; overflow: hidden; border: 1px solid rgba(204, 221, 248, .26); border-radius: 12px; background: #f8fafc; box-shadow: 0 26px 65px rgba(0, 0, 0, .4); transform: perspective(1100px) rotateY(-5deg) rotateX(2deg); transition: transform .35s ease; }
    .project-art:hover .kwill-browser { transform: perspective(1100px) rotateY(0) rotateX(0) translateY(-2px); }
    .kwill-browser-bar { display: flex; height: 29px; align-items: center; gap: 5px; padding: 0 11px; background: #fff; }
    .kwill-browser-bar > span { width: 5px; height: 5px; border-radius: 50%; background: #8bb7ff; }
    .kwill-browser-bar i { margin: auto; color: #77849a; font-size: 7px; font-style: normal; }
    .kwill-app { display: grid; min-height: 242px; grid-template-columns: 23% 1fr; color: #1b2a43; background: #f5f7fb; font-family: var(--sans); text-align: left; }
    .kwill-sidebar { display: flex; flex-direction: column; gap: 9px; padding: 15px 12px; background: #fff; border-right: 1px solid #e8edf4; font-size: 7px; color: #68778d; }
    .kwill-sidebar b { margin-bottom: 14px; color: #18345f; font-size: 11px; }.kwill-sidebar b span { color: #64a4ff; font-size: 8px; }
    .kwill-sidebar i { margin-top: 5px; color: #9aa5b5; font-size: 5px; font-style: normal; letter-spacing: .12em; }.kwill-sidebar strong { padding: 7px; border-radius: 5px; background: #edf4ff; color: #3479da; font-size: 7px; }
    .kwill-main { padding: 14px 15px; }.kwill-topline { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }.kwill-topline div { display: grid; gap: 4px; }.kwill-topline small,.kwill-metrics small { color: #8a96a8; font-size: 5px; letter-spacing: .08em; }.kwill-topline b { font-size: 13px; }.kwill-topline > span { padding: 6px 8px; border-radius: 5px; background: #357fe5; color: white; font-size: 6px; }
    .kwill-metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 7px; }.kwill-metrics > div { display: grid; gap: 5px; padding: 9px 7px; border: 1px solid #e8edf4; border-radius: 6px; background: white; }.kwill-metrics b { font-size: 13px; letter-spacing: -.04em; }.kwill-metrics em { color: #39966a; font-size: 6px; font-style: normal; }
    .kwill-chart { margin-top: 10px; padding: 9px 10px 7px; border: 1px solid #e8edf4; border-radius: 6px; background: white; }.kwill-chart > div:first-child { display: flex; justify-content: space-between; }.kwill-chart > div:first-child b { font-size: 7px; }.kwill-chart > div:first-child small { color: #95a0af; font-size: 5px; }.chart-bars { display: flex; height: 52px; align-items: end; justify-content: space-around; margin-top: 5px; border-bottom: 1px solid #edf0f5; background: repeating-linear-gradient(to bottom, transparent 0 16px, #f0f3f7 17px 18px); }.chart-bars i { width: 3.5%; height: 55%; border-radius: 3px 3px 0 0; background: #76a9f2; }.chart-bars i:nth-child(3n),.chart-bars i:nth-child(7n) { height: 75%; background: #407fe0; }.chart-bars i:nth-child(4n) { height: 43%; }.chart-days { display: flex; justify-content: space-around; padding-top: 4px; color: #9aa5b4; font-size: 4px; }
    .todo-preview { width: min(72%, 570px); }
    .preview-window { width: 100%; padding: 18px 22px 20px; border: 1px solid rgba(240, 244, 248, .13); border-radius: 9px; background: linear-gradient(145deg, rgba(36, 46, 57, .97), rgba(25, 32, 42, .97)); box-shadow: 0 22px 55px rgba(0, 0, 0, .32); transform: rotate(-2deg); }
    .window-dots { display: flex; gap: 5px; margin-bottom: 16px; }
    .window-dots i { width: 6px; height: 6px; border-radius: 50%; background: #e08c82; }
    .window-dots i:nth-child(2) { background: #e6be74; }
    .window-dots i:nth-child(3) { background: #8bb7a0; }
    .todo-heading { margin-bottom: 12px; color: #f0f1ed; font-family: var(--serif); font-size: clamp(21px, 3vw, 31px); line-height: 1.06; }
    .todo-heading span { color: var(--gold); }
    .task-row { display: flex; min-height: 35px; align-items: center; gap: 9px; border-top: 1px solid rgba(255, 255, 255, .07); color: #d6d9dc; font-size: 9px; }
    .task-row .check, .task-row > b:not(.check) { display: grid; width: 14px; height: 14px; place-items: center; border: 1px solid #88b7a2; border-radius: 4px; color: #a9d6bd; font-size: 9px; }
    .task-row small { margin-left: auto; color: #92b7a4; font-size: 7px; letter-spacing: .1em; }
    .task-row.pending > b:not(.check) { border-color: #677283; }
    .task-row.pending small { color: #9ca8b9; }
    .preview-spark { position: absolute; top: -6px; right: -24px; color: var(--gold); font-size: 30px; }
    .portfolio-preview { width: min(75%, 580px); }
    .portfolio-browser { width: 100%; overflow: hidden; border: 1px solid rgba(255, 255, 255, .17); border-radius: 8px; background: #111722; box-shadow: 0 24px 55px rgba(0, 0, 0, .36); transform: rotate(1.5deg); }
    .browser-bar { display: flex; height: 28px; align-items: center; gap: 5px; padding: 0 10px; border-bottom: 1px solid rgba(255, 255, 255, .08); background: #1d2632; }
    .browser-bar > span { width: 5px; height: 5px; border-radius: 50%; background: #bd7773; }
    .browser-bar > span:nth-child(2) { background: #d0b071; }
    .browser-bar > span:nth-child(3) { background: #77a48d; }
    .browser-bar i { margin: auto; color: #818b99; font-size: 7px; font-style: normal; }
    .portfolio-screen { position: relative; min-height: 198px; overflow: hidden; padding: 25px 27px; background: radial-gradient(ellipse at 90% 70%, #273b59, transparent 45%), #131a25; }
    .screen-kicker { display: block; color: #a0bdf1; font-size: 6px; letter-spacing: .14em; }
    .portfolio-screen strong { position: relative; z-index: 1; display: block; margin-top: 15px; color: #f0eee8; font-family: var(--serif); font-size: clamp(23px, 3.4vw, 37px); font-weight: 400; letter-spacing: -.05em; line-height: .98; }
    .portfolio-screen strong em { color: var(--gold); font-weight: 400; }
    .screen-button { position: relative; z-index: 1; display: inline-block; margin-top: 14px; padding: 7px 9px; border: 1px solid rgba(139, 183, 255, .55); border-radius: 99px; color: #bdd3fa; font-size: 6px; letter-spacing: .08em; }
    .screen-orbit { position: absolute; top: 8px; right: 7%; width: 130px; height: 130px; border: 1px solid rgba(231, 191, 120, .18); border-radius: 50%; box-shadow: 0 0 0 17px rgba(139, 183, 255, .025), 0 0 0 36px rgba(139, 183, 255, .025); }
    .slides-preview { width: min(72%, 565px); overflow: hidden; border: 1px solid rgba(255, 255, 255, .2); border-radius: 7px; background: #171b25; box-shadow: 0 24px 55px rgba(0, 0, 0, .35); transform: rotate(-1.2deg); }
    .slides-preview img { width: 100%; max-height: 280px; aspect-ratio: 16 / 9; object-fit: cover; }
    .slides-label { position: absolute; right: 0; bottom: 0; left: 0; padding: 11px 13px; background: rgba(12, 16, 23, .85); color: #f3f1e9; font-size: 8px; letter-spacing: .13em; }
    .slides-label b { padding-inline: 5px; color: var(--gold); }
    .project-copy { padding: 19px 2px 0; }
    .project-title-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .project-copy .eyebrow { margin-bottom: 7px; font-size: 9px; }
    .project-copy h3 { margin: 0; font-family: var(--serif); font-size: 27px; font-weight: 400; letter-spacing: -.04em; }
    .round-link { display: grid; width: 37px; height: 37px; flex: 0 0 auto; place-items: center; border: 1px solid var(--line); border-radius: 50%; color: var(--blue); transition: background .2s ease, color .2s ease; }
    .round-link:hover { background: var(--blue); color: var(--bg); }
    .project-description { max-width: 620px; margin: 10px 0 15px; color: var(--muted); font-size: 12px; line-height: 1.8; }
    .tag-list { display: flex; flex-wrap: wrap; gap: 7px; }
    .tag-list span, .tag { padding: 7px 10px; border: 1px solid var(--line); border-radius: 999px; color: #bac2cd; font-size: 9px; }
    .project-link { display: inline-flex; align-items: center; gap: 8px; margin-top: 15px; color: var(--blue); font-size: 10px; font-weight: 650; }
    .project-link span { transition: transform .2s ease; }
    .project-link:hover span { transform: translate(3px, -3px); }
    .about-section { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: linear-gradient(110deg, rgba(28, 36, 48, .95), rgba(20, 27, 37, .9)); }
    .about-grid { display: grid; grid-template-columns: .83fr 1.17fr; gap: clamp(44px, 8vw, 100px); }
    .about-heading h2 { max-width: 450px; font-size: clamp(42px, 5vw, 59px); }
    .about-heading h2 em { color: var(--gold); font-weight: 400; }
    .about-copy > p { max-width: 650px; margin: 0; color: var(--muted); font-size: 13px; line-height: 1.9; }
    .facts { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px 25px; margin: 24px 0 30px; padding: 0; list-style: none; }
    .facts li { display: flex; flex-direction: column; gap: 4px; padding-bottom: 12px; border-bottom: 1px solid var(--line); }
    .facts span { color: var(--faint); font-size: 9px; letter-spacing: .1em; text-transform: uppercase; }
    .facts strong { color: #e5e8ec; font-size: 11px; font-weight: 550; }
    .subheading { margin: 0 0 16px; color: var(--ink); font-size: 11px; font-weight: 650; }
    .skills-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 15px 23px; }
    .skill-heading { display: flex; justify-content: space-between; margin-bottom: 7px; color: #d1d5dc; font-size: 10px; }
    .skill-heading span:last-child { color: var(--faint); font-variant-numeric: tabular-nums; }
    .skill-track { height: 4px; overflow: hidden; border-radius: 99px; background: rgba(255, 255, 255, .09); }
    .skill-track > span { display: block; width: var(--skill-level); height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--blue), var(--gold)); }
    .tool-row { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 20px; }
    .education-section { border-bottom: 1px solid var(--line); }
    .education-layout { display: grid; grid-template-columns: .8fr 1.2fr; gap: clamp(42px, 8vw, 100px); }
    .education-intro h2 { max-width: 410px; margin: 0; font-family: var(--serif); font-size: clamp(42px, 5vw, 60px); font-weight: 400; letter-spacing: -.06em; line-height: 1.04; }
    .education-intro > p:last-child { max-width: 350px; color: var(--muted); font-size: 12px; line-height: 1.8; }
    .education-list { border-top: 1px solid var(--line); }
    .education-item { display: grid; grid-template-columns: 130px 1fr; gap: 20px; padding: 21px 0; border-bottom: 1px solid var(--line); }
    .education-period { padding-top: 4px; color: var(--gold); font-size: 10px; letter-spacing: .06em; }
    .education-item h3 { margin: 0; font-family: var(--serif); font-size: 20px; font-weight: 400; }
    .education-item p { margin: 5px 0; color: #d0d4dc; font-size: 11px; }
    .education-item small { color: var(--faint); font-size: 10px; }
    .strengths { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 21px; }
    .contact-section { padding-block: 94px 85px; }
    .contact-panel { position: relative; overflow: hidden; padding: clamp(38px, 7vw, 72px); border: 1px solid rgba(139, 183, 255, .19); border-radius: 9px; background: radial-gradient(ellipse at 90% 5%, rgba(139, 183, 255, .13), transparent 38%), linear-gradient(120deg, #1c2635, #171d27 73%); }
    .contact-panel::after { position: absolute; top: -150px; right: -45px; width: 380px; height: 380px; border: 1px solid rgba(231, 191, 120, .16); border-radius: 50%; box-shadow: 0 0 0 35px rgba(231, 191, 120, .025), 0 0 0 75px rgba(139, 183, 255, .025); content: ""; }
    .contact-panel h2 { position: relative; z-index: 1; max-width: 650px; font-size: clamp(43px, 6.5vw, 72px); }
    .contact-panel h2 em { color: var(--gold); font-weight: 400; }
    .contact-panel > p:not(.eyebrow) { position: relative; z-index: 1; max-width: 480px; margin: 17px 0 24px; color: var(--muted); font-size: 12px; line-height: 1.8; }
    .contact-links { position: relative; z-index: 1; display: flex; align-items: center; flex-wrap: wrap; gap: 12px; }
    footer { border-top: 1px solid var(--line); }
    .footer-inner { display: flex; min-height: 82px; align-items: center; justify-content: space-between; gap: 20px; color: var(--faint); font-size: 10px; }
    .footer-brand { color: var(--ink); font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
    .footer-links { display: flex; gap: 20px; }
    .footer-links a:hover { color: var(--blue); }
    :focus-visible { outline: 2px solid var(--blue); outline-offset: 4px; }

    /* Sharpen the portfolio's hierarchy and give each project a clearer frame. */
    :root {
      --muted: #b3bbc7;
      --faint: #8792a1;
      --line: rgba(229, 235, 245, .14);
    }
    .site-header { background: rgba(16, 20, 27, .92); }
    .hero { min-height: 720px; }
    .hero h1 { max-width: 760px; font-size: clamp(58px, 7.2vw, 88px); }
    .hero-description { font-size: 15px; }
    .photo-card { border-radius: 180px 180px 12px 12px; }
    .section { padding-block: 116px; }
    .section-top { margin-bottom: 46px; }
    .project-grid { gap: 52px 28px; }
    .project-art { border-radius: 12px; box-shadow: 0 18px 45px rgba(0, 0, 0, .16); }
    .project-card:first-child .project-art { min-height: 410px; }
    .project-copy { padding: 21px 4px 0; }
    .project-description { font-size: 13px; }
    .tag-list span, .tag { background: rgba(255, 255, 255, .025); font-size: 10px; }
    .about-section { background: linear-gradient(115deg, rgba(31, 41, 54, .98), rgba(20, 27, 37, .96)); }
    .facts strong, .education-item p { font-size: 12px; }
    .about-copy > p, .education-intro > p:last-child,
    .contact-panel > p:not(.eyebrow) { font-size: 13px; }
    .skill-heading { font-size: 11px; }
    .contact-panel { border-radius: 14px; }
    .project-art:focus-visible, .round-link:focus-visible, .button:focus-visible { outline-offset: 5px; }
    .featured-project { display: grid; grid-column: 1 / -1; grid-template-columns: 1.18fr .82fr; align-items: center; gap: clamp(34px, 5vw, 64px); overflow: visible; padding: 12px 0 30px; border: 0; border-radius: 0; background: transparent; box-shadow: none; }
    .featured-project:hover { transform: none; box-shadow: none; }
    .featured-art, .featured-art:hover { min-height: 0 !important; display: block; overflow: visible; padding: 0; border: 0; border-radius: 15px; background: transparent !important; box-shadow: none; transform: none; }
    .featured-art:hover { border-color: transparent; }
    .featured-art .kwill-preview { width: 100%; min-height: 0; }
    .featured-art .kwill-browser { transform: none; border-color: rgba(255,255,255,.7); border-radius: 14px; box-shadow: 0 26px 70px rgba(0,0,0,.3); }
    .featured-art .kwill-app { min-height: 330px; }
    .featured-art .kwill-browser-bar { height: 38px; }
    .featured-art .kwill-browser-bar > span { width: 8px; height: 8px; }
    .featured-art .kwill-browser-bar i { font-size: 10px; }
    .featured-art .kwill-sidebar { gap: 12px; padding: 20px 16px; font-size: 9px; }
    .featured-art .kwill-sidebar b { font-size: 14px; }
    .featured-art .kwill-sidebar i { font-size: 7px; }
    .featured-art .kwill-sidebar strong { font-size: 9px; }
    .featured-art .kwill-main { padding: 20px; }
    .featured-art .kwill-topline small, .featured-art .kwill-metrics small { font-size: 8px; }
    .featured-art .kwill-topline b { font-size: 19px; }
    .featured-art .kwill-topline > span { font-size: 9px; }
    .featured-art .kwill-metrics { gap: 9px; }
    .featured-art .kwill-metrics > div { padding: 12px 9px; }
    .featured-art .kwill-metrics b { font-size: 16px; }
    .featured-art .kwill-metrics em { font-size: 8px; }
    .featured-art .kwill-chart { margin-top: 14px; padding: 13px; }
    .featured-art .kwill-chart > div:first-child b { font-size: 10px; }
    .featured-art .kwill-chart > div:first-child small { font-size: 7px; }
    .featured-art .chart-bars { height: 95px; }
    .featured-art .chart-days { font-size: 7px; }
    .preview-strip { display: flex; align-items: center; gap: 8px; padding: 12px 14px; border-radius: 0 0 14px 14px; background: #f6f7f8; color: #526078; }
    .preview-strip i { width: 45px; height: 32px; border: 1px solid #cbd4dd; border-radius: 5px; background: linear-gradient(180deg,#fff 25%,#e8eef2 25% 33%,#fff 33%); }
    .preview-strip i:first-child { border-color: #315b86; }
    .preview-strip b { margin-left: auto; font-size: 11px; }
    .preview-strip span { display: grid; width: 32px; height: 32px; place-items: center; border: 1px solid #d7dde6; border-radius: 50%; font-size: 16px; }
    .featured-copy { min-width: 0; }
    .featured-count { margin: 0 0 8px; color: var(--ink); font-size: 12px; font-weight: 800; }
    .featured-count span { color: var(--faint); }
    .featured-copy h3 { margin: 0; font-family: var(--sans); font-size: clamp(36px, 4vw, 48px); font-weight: 750; letter-spacing: -.055em; line-height: 1; }
    .featured-badges { display: flex; gap: 7px; margin-top: 13px; }
    .featured-badges span { padding: 7px 11px; border-radius: 99px; background: var(--blue); color: #102039; font-size: 10px; }
    .featured-badges span + span { background: #f0f2f5; color: #263142; }
    .featured-description { margin: 17px 0 13px; color: var(--muted); font-size: 13px; line-height: 1.7; }
    .feature-list { display: grid; gap: 9px; margin: 0; padding: 0; list-style: none; }
    .feature-list li { display: flex; align-items: flex-start; gap: 9px; color: var(--ink); font-size: 12px; line-height: 1.45; }
    .feature-list li span { display: grid; width: 17px; height: 17px; flex: 0 0 auto; place-items: center; border-radius: 50%; background: var(--blue); color: #102039; font-size: 11px; }
    .project-meta { margin: 18px 0 12px; border-top: 1px solid var(--line); }
    .project-meta div { display: grid; grid-template-columns: 80px 1fr; gap: 12px; padding: 9px 0; border-bottom: 1px solid var(--line); font-size: 11px; }
    .project-meta dt { color: var(--muted); }
    .project-meta dd { margin: 0; color: var(--ink); font-weight: 600; }
    .featured-tags { display: flex; flex-wrap: wrap; gap: 7px; }
    .featured-tags span { padding: 6px 9px; border: 1px solid rgba(139,183,255,.3); border-radius: 99px; color: var(--blue); font-size: 9px; }
    .featured-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 17px; }
    .featured-actions .button { min-height: 40px; padding-inline: 15px; font-size: 11px; }
    .featured-actions .button-secondary { border-color: rgba(243,243,238,.7); color: var(--ink); }
    @media (max-width: 760px) {
      .hero { min-height: auto; }
      .section { padding-block: 82px; }
      .project-card:first-child .project-art { min-height: 300px; }
      .featured-project { grid-template-columns: 1fr; gap: 30px; }
      .featured-art, .featured-art:hover { min-height: 0 !important; }
      .featured-art .kwill-app { min-height: 285px; }
      .featured-copy { max-width: 620px; }
    }
    @media (max-width: 760px) {
      .wrap { width: min(100% - 42px, var(--page-width)); }
      .nav { min-height: 68px; }
      .nav-right { gap: 10px; }
      .menu-toggle { display: inline-flex; }
      .nav-links { position: absolute; top: 67px; right: 0; left: 0; display: none; align-items: stretch; gap: 0; padding: 9px 21px 18px; border-bottom: 1px solid var(--line); background: #141922; }
      .nav-links.is-open { display: flex; flex-direction: column; }
      .nav-links li a { display: block; padding: 13px 0; }
      .nav-links .nav-contact { display: inline-block; margin-top: 6px; padding: 10px 14px; }
      .hero { min-height: auto; grid-template-columns: 1fr; gap: 24px; padding-block: 75px 72px; }
      .hero-copy { max-width: 650px; }
      .hero h1 { font-size: clamp(59px, 13vw, 88px); }
      .hero-visual { min-height: 390px; }
      .photo-halo { width: min(320px, 78%); }
      .photo-card { width: min(265px, 65%); }
      .floating-note { right: 1%; bottom: 25px; }
      .section { padding-block: 76px; }
      .section-top { align-items: start; flex-direction: column; gap: 14px; margin-bottom: 28px; }
      .project-grid { grid-template-columns: 1fr; gap: 37px; }
      .project-card:first-child { grid-column: auto; }
      .project-card:first-child .project-art, .project-art { min-height: 280px; }
      .project-preview { width: 78%; }
      .kwill-preview { width: 92%; min-height: 245px; }
      .todo-preview, .portfolio-preview, .slides-preview { width: 78%; }
      .about-grid, .education-layout { grid-template-columns: 1fr; gap: 35px; }
      .about-heading h2 { max-width: 560px; }
      .contact-section { padding-block: 70px; }
      .contact-panel::after { right: -240px; }
    }
    @media (max-width: 450px) {
      .wrap { width: min(100% - 36px, var(--page-width)); }
      .brand { font-size: 11px; }
      .hero { padding-top: 60px; }
      .hero h1 { font-size: clamp(54px, 15vw, 69px); }
      .hero-actions { align-items: stretch; flex-direction: column; }
      .hero-actions .button { width: 100%; }
      .hero-visual { min-height: 345px; }
      .photo-card { width: 67%; }
      .floating-note { right: 0; bottom: 15px; }
      .project-card:first-child .project-art, .project-art { min-height: 240px; }
      .featured-project { gap: 22px; }
      .featured-art, .featured-art:hover { min-height: 0 !important; }
      .featured-art .kwill-app { min-height: 205px; grid-template-columns: 20% 1fr; }
      .featured-art .kwill-sidebar { gap: 6px; padding: 10px 6px; }
      .featured-art .kwill-main { padding: 9px 7px; }
      .featured-art .kwill-metrics { gap: 4px; }
      .featured-art .kwill-metrics > div { padding: 6px 4px; }
      .featured-art .kwill-metrics b { font-size: 10px; }
      .featured-art .kwill-chart { margin-top: 6px; padding: 6px; }
      .featured-art .chart-bars { height: 35px; }
      .preview-strip i { width: 32px; height: 25px; }
      .preview-strip span { width: 27px; height: 27px; }
      .preview-window { padding: 15px 15px; }
      .portfolio-screen { min-height: 165px; padding: 21px; }
      .kwill-preview { width: 96%; min-height: 185px; }.kwill-app { min-height: 170px; grid-template-columns: 20% 1fr; }.kwill-sidebar { gap: 6px; padding: 10px 6px; }.kwill-main { padding: 9px 7px; }.kwill-metrics { gap: 4px; }.kwill-metrics > div { padding: 6px 4px; }.kwill-metrics b { font-size: 10px; }.kwill-chart { margin-top: 6px; padding: 6px; }.chart-bars { height: 35px; }
      .education-item { grid-template-columns: 93px 1fr; gap: 13px; }
      .facts, .skills-grid { grid-template-columns: 1fr; }
      .footer-inner { align-items: flex-start; flex-direction: column; justify-content: center; gap: 11px; padding-block: 19px; }
    }
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; }
    }
  </style>
</head>
<body>
  <header class="site-header">
    <nav class="nav wrap" aria-label="Main navigation">
      <a class="brand" href="#home" aria-label="${escapeHtml(portfolio.name)} home">
        <span class="brand-mark">${escapeHtml(initials)}</span><span>${escapeHtml(portfolio.shortName)}</span>
      </a>
      <div class="nav-right">
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a class="nav-contact" href="#contact">Let’s connect ↗</a></li>
        </ul>
        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">☰</button>
      </div>
    </nav>
  </header>
  <main>
    <section class="hero wrap" id="home">
      <div class="hero-copy">
        <span class="student-label"><span></span> BSIT STUDENT · CREATIVE BUILDER</span>
        <h1>Hello, I’m<br><em>${escapeHtml(portfolio.name)}.</em></h1>
        <p class="hero-role">${escapeHtml(portfolio.role)}</p>
        <p class="hero-description">${escapeHtml(portfolio.introduction)}</p>
        <div class="hero-actions">
          <a class="button" href="#contact">Contact me <span aria-hidden="true">↗</span></a>
          <a class="button button-secondary" href="#projects">Explore projects <span aria-hidden="true">↓</span></a>
        </div>
        <p class="hero-location">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="10" r="2.3" stroke="currentColor" stroke-width="1.6"/></svg>
          ${escapeHtml(portfolio.location)}
        </p>
      </div>
      <div class="hero-visual">
        <div class="photo-halo"></div>
        <div class="photo-card">
          <img src="${escapeHtml(portfolio.photo)}" alt="Portrait of ${escapeHtml(portfolio.name)}" fetchpriority="high">
          <span class="photo-caption">${escapeHtml(portfolio.shortName)} · Iloilo</span>
        </div>
        <div class="floating-note"><span class="floating-icon" aria-hidden="true">✳</span><span><strong>Curious by nature</strong>Always learning & building</span></div>
      </div>
    </section>

    <section class="section work-section" id="projects">
      <div class="wrap">
        <div class="section-top">
          <div><p class="eyebrow">SELECTED WORK · 2024—NOW</p><h2>Projects I’ve<br>put my heart into.</h2></div>
          <p>A growing collection of practice projects, personal experiments, and school work. Each one taught me something new.</p>
        </div>
        <div class="project-grid">${projectMarkup}</div>
      </div>
    </section>

    <section class="section about-section" id="about">
      <div class="wrap about-grid">
        <div class="about-heading">
          <p class="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Building skills.<br><em>Finding my flow.</em></h2>
        </div>
        <div class="about-copy">
          <p>${escapeHtml(portfolio.about)}</p>
          <ul class="facts">
            <li><span>Currently</span><strong>2nd year BSIT student</strong></li>
            <li><span>Based in</span><strong>${escapeHtml(portfolio.location)}</strong></li>
            <li><span>Focus</span><strong>UI/UX & front-end</strong></li>
            <li><span>Approach</span><strong>Simple, useful, thoughtful</strong></li>
          </ul>
          <p class="subheading" id="skills">Skills I’m growing</p>
          <div class="skills-grid">${skillMarkup}</div>
          <div class="tool-row" aria-label="Tools and methods">${toolMarkup}</div>
        </div>
      </div>
    </section>

    <section class="section education-section" id="education">
      <div class="wrap education-layout">
        <div class="education-intro">
          <p class="eyebrow">MY LEARNING JOURNEY</p>
          <h2>Curiosity is part of the curriculum.</h2>
          <p>My education gives me a foundation; every project is a chance to put it into practice.</p>
          <div class="strengths" aria-label="Strengths">${strengthMarkup}</div>
        </div>
        <div class="education-list">${educationMarkup}</div>
      </div>
    </section>

    <section class="contact-section wrap" id="contact">
      <div class="contact-panel">
        <p class="eyebrow">HAVE A PROJECT OR AN IDEA?</p>
        <h2>Let’s make something<br><em>worth sharing.</em></h2>
        <p>I’m always happy to connect, talk about design and code, or hear what you’re building. Drop me a message.</p>
        <div class="contact-links">
          <a class="button" href="mailto:${escapeHtml(portfolio.email)}">Email me <span aria-hidden="true">↗</span></a>
          <a class="button button-secondary" href="${safeHref(portfolio.github)}" target="_blank" rel="noopener noreferrer">Find me on GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="wrap footer-inner">
      <span class="footer-brand">${escapeHtml(portfolio.shortName)}</span>
      <span>Designed & built with care · © <span id="year"></span></span>
      <div class="footer-links"><a href="mailto:${escapeHtml(portfolio.email)}">${escapeHtml(portfolio.email)}</a><a href="${safeHref(portfolio.github)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
    </div>
  </footer>
  <script>
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        navigation.classList.remove("is-open");
      });
    });

    document.querySelector("#year").textContent = new Date().getFullYear();
  </script>
</body>
</html>`;

function handleRequest(request, response) {
  if (request.url === "/favicon.ico") {
    response.writeHead(204);
    response.end();
    return;
  }

  response.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  });
  response.end(html);
}

if (require.main === module) {
  http.createServer(handleRequest).listen(PORT, () => {
    console.log(`Portfolio is running at http://localhost:${PORT}`);
  });
}

module.exports = handleRequest;
