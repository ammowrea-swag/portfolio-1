
const SITE = {
  name: 'Ashley Mowreader',
  title: 'Data Journalist',
  role: 'Data nerd & reporter',
  location: 'Brooklyn, NY',
  availability: 'Available for freelance',
  bio: 'Experienced reporter, designer and coder specializing in data-driven journalism. Interested in plants, dogs, the PNW and always RedBull.',
  ticker: [
    'Data journalism',
    'Visual storytelling',
    'Python & D3.js',
    'Svelte & web development',
    'Investigative reporting',
  ],
  social: [
    { label: 'Twitter',  url: 'http://twitter.com/amowreader' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ashley-mowreader' },
    { label: 'GitHub',   url: 'https://github.com/amowreader' },
  ],
};

const PAGES = [
  { id: 'home',         label: 'Home' },
  { id: 'resume',       label: 'Résumé' },
  { id: 'data',         label: 'Data' },
  { id: 'interactives', label: 'Interactives' },
  { id: 'design',       label: 'Design' },
  { id: 'writing',      label: 'Writing' },
];

const HOME_CARDS = [
  { page: 'data',         title: 'Data viz',      desc: 'Charts, graphics and maps created in Illustrator, Flourish and Datawrapper' },
  { page: 'interactives', title: 'Interactives',  desc: 'Interactive news stories using custom coding' },
  { page: 'design',       title: 'Design',        desc: 'Graphic design for social media, new stories and personal fun' },
  { page: 'writing',      title: 'Writing',       desc: 'Reporting on higher education, air cargo and supply chain, among other things' },
];

const RESUME = {
  contact: [
    { label: 'Location', value: 'New York, NY' },
    { label: 'Web',      value: 'amowreader.com', url: 'https://www.amowreader.com'},
    { label: 'Twitter',  value: '@amowreader', url: 'https://www.x.com/amowreader' },
  ],
  education: [
    { degree: 'M.A. Journalism',   school: 'Craig Newmark Graduate School of Journalism at CUNY', meta: 'Expected 2026 · 4.0 GPA' },
    { degree: 'B.A. Journalism',   school: 'Pepperdine University',    meta: '2022 · 3.9 GPA' },
  ],
  skills: [
    'Data visualization (Adobe Illustrator, D3.js, Datawrapper, Flourish, QGIS)',
    'Python (pandas, Jupyter Notebook)',
    'HTML, CSS & JavaScript',
    'Graphic design & layout',
    'News writing & editing',
    'UX and web design'
  ],
  experience: [
    {
      date: 'Jun 2025 — Aug 2025',
      location: 'New York, NY',
      title: 'Data Visualization Intern',
      org: 'NBCUniversal News Group',
      desc: 'Incoming data visualization intern, tasked with building charts, maps and data visualizations upon request and on deadline, as well as pitching, researching and developing visuals based on the news.',
    },
        {
      date: 'Dec 2025 — Present',
      location: 'Remote',
      title: 'Freelance Writer',
      org: 'Education Writers Association, Inside Higher Ed',
      desc: 'Provided freelance writing and speaking engagements on higher education and student success topics, including a long-form solutions feature on Black male attainment in higher education and barriers to completion, funded by the Education Writers Association.',
    },
    {
      date: 'Jan 2023 — Dec 2025',
      location: 'Washington, D.C.',
      title: 'Student Success Reporter',
      org: 'Inside Higher Ed',
      desc: 'Reported daily short-form articles to run in a weekly newsletter on institutional-led interventions that promote college degree attainment in the U.S. with a focus on students’ academics, health and careers. Designed multimedia art, infographics and other data visualization using Excel, Datawrapper, Flourish and Canva to enhance digital storytelling and engage audiences online.',
    },
    {
      date: 'May 2022 — Jan 2023',
      location: 'Washington, D.C.',
      title: 'Associate Editor',
      org: 'Royal Media, Air Cargo World',
      desc: 'Reported, edited and published daily news stories and monthly magazine articles related to aviation operations nd airfreight stakeholders for Air Cargo World’s 10,000 industry subscribers.Created and maintained databases for industry benchmarking including jet fuel, airfreight capacity and key shipping lanes using Excel. Wrote regular data analysis and created graphics using Flourish.',
    },

  ],
  awards: ['Pinnacle College Media Awards winner',
    'Associated Collegiate Press Reporter of the Year finalist',
    'SoCal Journalism Award finalist',
    'Education Writers Association Fellowship — 21st Class',
    'Society of Professional Journalists Mark of Excellence Award finalist',
  ],
};

const DATA_PROJECTS = [
  { tag: 'Chart', title: 'Lorem ipsum dolor sit amet consectetur adipiscing',      desc: 'Quisque vehicula nunc in augue molestie, ut scelerisque erat interdum.',           year: '2025', thumb: thumbBars },
  { tag: 'Map',   title: 'Nullam fringilla tortor id sapien fermentum lacinia',     desc: 'At lobortis tortor lacinia. Phasellus condimentum diam ac libero venenatis.',     year: '2024', thumb: thumbMap },
  { tag: 'Chart', title: 'Phasellus condimentum diam ac libero venenatis pretium',  desc: 'Maecenas hendrerit nunc at urna sodales, vel finibus lectus.',                    year: '2024', thumb: thumbLine },
  { tag: 'Table', title: 'Maecenas hendrerit nunc urna sodales finibus lectus',     desc: 'Integer tincidunt eros vel sem venenatis fermentum. Quisque vehicula.',           year: '2023', thumb: thumbGrid },
  { tag: 'Map',   title: 'Integer tincidunt eros vel sem venenatis fermentum',      desc: 'Ut scelerisque erat interdum. Nullam fringilla tortor id sapien lorem.',          year: '2023', thumb: thumbDots },
  { tag: 'Chart', title: 'Vestibulum ante ipsum primis in faucibus orci luctus',    desc: 'Dolor sit amet, consectetur adipiscing elit quisque vehicula nunc.',              year: '2022', thumb: thumbBars },
];

const INTERACTIVES_PROJECTS = [
  { tag: 'Scrollytelling', title: 'Lorem ipsum dolor sit amet consectetur elit venenatis',  desc: 'Quisque vehicula nunc in augue molestie, ut scelerisque erat interdum.',  year: '2025', thumb: thumbInteractive },
  { tag: 'Explorer',       title: 'Nullam fringilla tortor id sapien fermentum lobortis',   desc: 'At lobortis tortor lacinia. Phasellus condimentum diam ac libero.',      year: '2024', thumb: thumbInteractive },
  { tag: 'Tool',           title: 'Phasellus condimentum diam libero venenatis pretium',    desc: 'Maecenas hendrerit nunc at urna sodales, vel finibus lectus ullamcorper.',year: '2024', thumb: thumbInteractive },
  { tag: 'Scrollytelling', title: 'Maecenas hendrerit nunc urna sodales lectus integer',    desc: 'Integer tincidunt eros vel sem venenatis fermentum. Quisque vehicula.',  year: '2023', thumb: thumbInteractive },
];

const DESIGN_PROJECTS = [
  { tag: 'Infographic',  title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',  desc: 'Quisque vehicula nunc in augue molestie, ut scelerisque erat interdum.',  year: '2025', thumb: thumbLayout },
  { tag: 'Page design',  title: 'Nullam fringilla tortor id sapien fermentum lobortis',    desc: 'At lobortis tortor lacinia. Phasellus condimentum diam ac libero.',      year: '2024', thumb: thumbLayout },
  { tag: 'Print layout', title: 'Phasellus condimentum diam libero venenatis pretium',     desc: 'Maecenas hendrerit nunc at urna sodales, vel finibus lectus.',            year: '2024', thumb: thumbLayout },
  { tag: 'Infographic',  title: 'Maecenas hendrerit nunc at urna sodales finibus lectus',  desc: 'Integer tincidunt eros vel sem venenatis fermentum. Quisque vehicula.',  year: '2023', thumb: thumbLayout },
  { tag: 'Social media', title: 'Integer tincidunt eros vel sem venenatis fermentum nunc', desc: 'Ut scelerisque erat interdum. Nullam fringilla tortor id sapien.',       year: '2023', thumb: thumbLayout },
  { tag: 'Page design',  title: 'Vestibulum ante ipsum primis faucibus orci luctus',       desc: 'Dolor sit amet, consectetur adipiscing elit quisque vehicula nunc.',     year: '2022', thumb: thumbLayout },
];

const ARTICLES = [
  { month: 'Mar', year: '2025', pub: 'Lorem Daily',  headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque vehicula',       dek: 'Nullam fringilla tortor id sapien fermentum, at lobortis tortor lacinia. Phasellus condimentum diam ac libero venenatis.', url: 'https://example.com' },
  { month: 'Jan', year: '2025', pub: 'Ipsum Post',   headline: 'Phasellus condimentum diam ac libero venenatis in pretium augue dignissim',       dek: 'Maecenas hendrerit nunc at urna sodales, vel finibus lectus ullamcorper. Integer tincidunt eros vel.', url: 'https://example.com' },
  { month: 'Nov', year: '2024', pub: 'Lorem Daily',  headline: 'Maecenas hendrerit nunc at urna sodales vel finibus lectus ullamcorper',          dek: 'Ut scelerisque erat interdum. Nullam fringilla tortor id sapien fermentum, at lobortis tortor lacinia.', url: 'https://example.com' },
  { month: 'Sep', year: '2024', pub: 'Dolor Review', headline: 'Integer tincidunt eros vel sem venenatis fermentum quisque vehicula nunc',         dek: 'Phasellus condimentum diam ac libero venenatis, in pretium augue dignissim maecenas hendrerit nunc.', url: 'https://example.com' },
  { month: 'Jun', year: '2024', pub: 'Amet Times',   headline: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',        dek: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula nunc in augue molestie.', url: 'https://example.com' },
  { month: 'Feb', year: '2024', pub: 'Ipsum Post',   headline: 'Ut scelerisque erat interdum nullam fringilla tortor sapien fermentum lobortis',   dek: 'At lobortis tortor lacinia. Phasellus condimentum diam ac libero venenatis, in pretium augue dignissim.', url: 'https://example.com' },
  { month: 'Oct', year: '2023', pub: 'Lorem Daily',  headline: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore',    dek: 'Maecenas hendrerit nunc at urna sodales, vel finibus lectus ullamcorper. Integer tincidunt eros vel sem.', url: 'https://example.com' },
];

/* ─────────────────────────────────────────
   SVG THUMBNAIL GENERATORS
───────────────────────────────────────── */

function thumbBars() {
  const heights = [40, 65, 30, 80, 55, 90, 45, 70];
  const rects = heights.map((h, i) =>
    `<rect x="${6 + i * 11}" y="${100 - h}" width="8" height="${h}" fill="#a2cffe" opacity="${(0.4 + i * 0.07).toFixed(2)}"/>`
  ).join('');
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">${rects}</svg>`;
}

function thumbLine() {
  const pts = [[5,70],[15,55],[25,60],[35,35],[50,45],[60,20],[75,30],[90,15]].map(p => p.join(',')).join(' ');
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <polyline points="${pts}" fill="none" stroke="#a2cffe" stroke-width="2.5"/>
    <polyline points="${pts}" fill="none" stroke="#a2cffe" stroke-width="0.5" stroke-dasharray="3 3" opacity="0.4"/>
  </svg>`;
}

function thumbDots() {
  const dots = [[20,60],[35,40],[50,55],[60,25],[75,45],[85,30],[45,70],[30,80]];
  const circles = dots.map(d => `<circle cx="${d[0]}" cy="${d[1]}" r="4" fill="#a2cffe" opacity="0.7"/>`).join('');
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">${circles}</svg>`;
}

function thumbMap() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <path d="M10,30 L25,20 L40,35 L60,25 L80,40 L90,30" stroke="#a2cffe" fill="none" stroke-width="1"/>
    <path d="M15,50 L35,45 L55,55 L75,48 L88,58" stroke="#a2cffe" fill="none" stroke-width="1" opacity="0.6"/>
    <path d="M20,70 L45,65 L65,72 L82,68" stroke="#a2cffe" fill="none" stroke-width="1" opacity="0.4"/>
    <circle cx="40" cy="35" r="3" fill="#a2cffe"/>
    <circle cx="60" cy="25" r="3" fill="#a2cffe" opacity="0.7"/>
    <circle cx="55" cy="55" r="2.5" fill="#a2cffe" opacity="0.5"/>
  </svg>`;
}

function thumbInteractive() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <rect x="10" y="10" width="80" height="12" rx="2" fill="#a2cffe" opacity="0.2"/>
    <rect x="10" y="10" width="55" height="12" rx="2" fill="#a2cffe" opacity="0.6"/>
    <rect x="10" y="30" width="80" height="12" rx="2" fill="#a2cffe" opacity="0.2"/>
    <rect x="10" y="30" width="30" height="12" rx="2" fill="#a2cffe" opacity="0.6"/>
    <rect x="10" y="50" width="80" height="12" rx="2" fill="#a2cffe" opacity="0.2"/>
    <rect x="10" y="50" width="70" height="12" rx="2" fill="#a2cffe" opacity="0.6"/>
    <circle cx="70" cy="78" r="14" fill="#a2cffe" opacity="0.15" stroke="#a2cffe" stroke-width="1.5"/>
    <line x1="64" y1="78" x2="76" y2="78" stroke="#a2cffe" stroke-width="2"/>
    <line x1="70" y1="72" x2="70" y2="84" stroke="#a2cffe" stroke-width="2"/>
  </svg>`;
}

function thumbGrid() {
  const rects = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 4; c++) {
      const op = (0.15 + Math.random() * 0.6).toFixed(2);
      rects.push(`<rect x="${c * 24 + 2}" y="${r * 30 + 5}" width="20" height="24" fill="#a2cffe" opacity="${op}"/>`);
    }
  }
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">${rects.join('')}</svg>`;
}

function thumbLayout() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <rect x="5" y="5" width="90" height="20" fill="#0f1923" opacity="0.8"/>
    <rect x="5" y="30" width="55" height="40" fill="#a2cffe" opacity="0.25"/>
    <rect x="65" y="30" width="30" height="40" fill="#a2cffe" opacity="0.4"/>
    <rect x="5" y="75" width="90" height="8" fill="#0f1923" opacity="0.15"/>
    <line x1="5" y1="85" x2="60" y2="85" stroke="#a2cffe" stroke-width="1"/>
  </svg>`;
}

/* ─────────────────────────────────────────
   RENDER HELPERS
───────────────────────────────────────── */

function footerHTML() {
  const links = SITE.social.map(s => `<li><a href="${s.url}">${s.label}</a></li>`).join('');
  return `
    <footer>
      <span class="footer-name">${SITE.name}</span>
      <ul class="footer-links">${links}</ul>
      <span class="footer-copy">&copy; ${new Date().getFullYear()}</span>
    </footer>`;
}

function renderNav() {
  const logo = document.getElementById('nav-logo');
  logo.textContent = SITE.name;

  const list = document.getElementById('nav-list');
  list.innerHTML = PAGES.map(p => `
    <li>
      <button id="nav-${p.id}" onclick="showPage('${p.id}')"${p.id === 'home' ? ' class="active"' : ''}>
        ${p.label}
      </button>
    </li>`).join('');
}

function renderHome() {
  const tickerItems = [...SITE.ticker, ...SITE.ticker]
    .map(t => `<span>${t}</span><span class="ticker-dot">·</span>`)
    .join('');

  const cards = HOME_CARDS.map(c => `
    <div class="home-card" onclick="showPage('${c.page}')">
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
    </div>`).join('');

  document.getElementById('page-home').innerHTML = `
    <div class="hero">
      <div class="hero-left">
        <p class="hero-eyebrow">${SITE.role}</p>
        <h1 class="hero-name">${SITE.name.split(' ')[0]}<br><em>${SITE.name.split(' ').slice(1).join(' ')}.</em></h1>
        <p class="hero-bio">${SITE.bio}</p>
        <div class="hero-cta-group">
          <button class="btn-primary" onclick="showPage('data')">View my work</button>
          <button class="btn-ghost" onclick="showPage('resume')">Résumé</button>
        </div>
      </div>
      <div class="hero-meta">
        <p class="hero-footer-note">${SITE.location}</p>
        <p class="hero-footer-note" style="margin-top:0.4rem">${SITE.availability}</p>
      </div>
    </div>
    <div class="ticker-strip">
      <div class="ticker-inner">${tickerItems}</div>
    </div>
    <div class="home-section">
      <div class="section-rule"><h2>What I do</h2></div>
      <div class="home-cards-grid">${cards}</div>
    </div>
    ${footerHTML()}`;
}

function renderResume() {
  const contactHTML = RESUME.contact.map(c =>
    `<p><strong>${c.label}</strong><br>${c.value}</p>`
  ).join('');

  const eduHTML = RESUME.education.map(e => `
    <div class="edu-item">
      <p class="edu-degree">${e.degree}</p>
      <p class="edu-school">${e.school}</p>
      <p class="edu-meta">${e.meta}</p>
    </div>`).join('');

  const skillsHTML = RESUME.skills.map(s => `<li>${s}</li>`).join('');

  const expHTML = RESUME.experience.map(e => `
    <div class="exp-item">
      <div class="exp-meta">
        <span class="exp-date">${e.date}</span>
        <span>${e.location}</span>
      </div>
      <p class="exp-title">${e.title}</p>
      <p class="exp-org">${e.org}</p>
      <p class="exp-desc">${e.desc}</p>
    </div>`).join('');

  const awardsHTML = RESUME.awards.join(' &nbsp;·&nbsp; ');

  document.getElementById('page-resume').innerHTML = `
    <div class="page-header">
      <p class="page-header-eyebrow">Curriculum vitae</p>
      <h1>Résumé</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula nunc in augue.</p>
    </div>
    <div class="resume-body">
      <aside class="resume-sidebar">
        <div style="margin-bottom:2.5rem">
          <p class="resume-section-label">Contact</p>
          <div class="resume-contact">${contactHTML}</div>
        </div>
        <div style="margin-bottom:2.5rem">
          <p class="resume-section-label">Education</p>
          ${eduHTML}
        </div>
        <div>
          <p class="resume-section-label">Skills</p>
          <ul class="skill-list">${skillsHTML}</ul>
        </div>
      </aside>
      <main class="resume-main">
        <p class="resume-section-label" style="margin-bottom:1.75rem">Experience</p>
        ${expHTML}
        <p class="resume-section-label" style="margin-bottom:1.75rem;margin-top:1rem">Awards &amp; recognition</p>
        <div class="exp-item">
          <p class="exp-desc" style="line-height:2.2">${awardsHTML}</p>
        </div>
      </main>
    </div>
    ${footerHTML()}`;
}

function renderWorkGrid(pageId, projects, headerTitle, headerEm, headerDesc, hasFilter) {
  const filterTags = hasFilter
    ? ['All', ...new Set(projects.map(p => p.tag))]
    : [];

  const filterBarHTML = hasFilter
    ? `<div class="filter-bar" id="${pageId}-filters">
        ${filterTags.map((t, i) =>
          `<button class="filter-btn${i === 0 ? ' active' : ''}" data-tag="${t}">${t}</button>`
        ).join('')}
       </div>`
    : '';

  const cardsHTML = projects.map(p => `
    <div class="work-card">
      <div class="work-thumb">
        <div class="work-thumb-pattern">${p.thumb()}</div>
      </div>
      <div class="work-card-body">
        <p class="work-card-tag">${p.tag}</p>
        <p class="work-card-title">${p.title}</p>
        <p class="work-card-desc">${p.desc}</p>
        <div class="work-card-footer">
          <span>${p.year}</span>
          <span>View project →</span>
        </div>
      </div>
    </div>`).join('');

  document.getElementById(`page-${pageId}`).innerHTML = `
    <div class="page-header">
      <p class="page-header-eyebrow">Portfolio</p>
      <h1>${headerTitle} <em>${headerEm}</em></h1>
      <p>${headerDesc}</p>
    </div>
    <div class="work-grid-container">
      ${filterBarHTML}
      <div class="work-grid" id="${pageId}-grid">${cardsHTML}</div>
    </div>
    ${footerHTML()}`;

  if (hasFilter) {
    document.getElementById(`${pageId}-filters`).addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      document.querySelectorAll(`#${pageId}-filters .filter-btn`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tag = btn.dataset.tag;
      const filtered = tag === 'All' ? projects : projects.filter(p => p.tag === tag);
      document.getElementById(`${pageId}-grid`).innerHTML = filtered.map(p => `
        <div class="work-card">
          <div class="work-thumb"><div class="work-thumb-pattern">${p.thumb()}</div></div>
          <div class="work-card-body">
            <p class="work-card-tag">${p.tag}</p>
            <p class="work-card-title">${p.title}</p>
            <p class="work-card-desc">${p.desc}</p>
            <div class="work-card-footer"><span>${p.year}</span><span>View project →</span></div>
          </div>
        </div>`).join('');
    });
  }
}

function renderWriting() {
  const items = ARTICLES.map(a => `
    <a href="${a.url}" target="_blank" class="article-link">
      <div class="article-item">
        <div class="article-date-col">
          <span class="article-date-month">${a.month}</span>
          <span class="article-date-year">${a.year}</span>
        </div>
        <div>
          <p class="article-pub">${a.pub}</p>
          <p class="article-headline">${a.headline}</p>
          <p class="article-dek">${a.dek}</p>
        </div>
      </div>
    </a>`).join('');

  document.getElementById('page-writing').innerHTML = `
    <div class="page-header">
      <p class="page-header-eyebrow">Portfolio</p>
      <h1>Writing &amp; <em>reporting</em></h1>
      <p>Published articles, investigations, and data-driven stories across beat topics.</p>
    </div>
    <div class="writing-container">
      <div id="writing-list">${items}</div>
    </div>
    ${footerHTML()}`;
}

/* ─────────────────────────────────────────
   NAVIGATION
───────────────────────────────────────── */

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.getElementById('nav-' + id).classList.add('active');
  window.scrollTo(0, 0);
}

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */

document.title = SITE.title;
renderNav();
renderHome();
renderResume();
renderWorkGrid('data',         DATA_PROJECTS,         'Data',         'visualizations', 'Charts, maps, and visual stories built with code.', true);
renderWorkGrid('interactives', INTERACTIVES_PROJECTS, 'Interactive',  'projects',       'Scroll-driven stories, explorable graphics, and reader-driven tools.', false);
renderWorkGrid('design',       DESIGN_PROJECTS,       'Design',       'elements',       'Print layouts, infographics, and visual identity work for editorial contexts.', false);
renderWriting();
