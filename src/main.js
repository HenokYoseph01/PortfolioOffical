const repo = 'https://github.com/HenokYoseph01/';
const projects = [
  { slug: 'word-bucket', website: 'https://wordbucket.vercel.app/', screenshots: [{file:'WordBucket2.jpg',label:'Home & word lookup'},{file:'WordBucket1.jpg',label:'Review progress'}], name: 'WordBucket', category: 'Mobile application', summary: 'Keep the words you discover.', description: 'A vocabulary companion that lets you capture unfamiliar words while reading, save their meanings, and return to them through recall-based reviews.', stack: ['Flutter', 'Dart', 'Riverpod', 'Drift / SQLite', 'Dio', 'Workmanager', 'Android widgets'], details: ['Selected-text and share actions bring words into the app without a separate dictionary search.', 'Drift and SQLite retain saved words and review history locally. Riverpod connects state and feature logic.', 'Review reminders and a home-screen widget help bring saved words back into everyday life.'], note: 'Android-first application. New dictionary lookups need an internet connection; saved words remain local.' },
  { slug: 'clearpath', website: 'https://clearpath-promo.vercel.app/', screenshots: [{file:'Clearpath6.jpg',label:'Home & daily check-in'},{file:'Clearpath4.jpg',label:'Daily training'},{file:'Clearpath5.jpg',label:'Guided reflection'},{file:'Clearpath3.jpg',label:'Journal'},{file:'Clearpath2.jpg',label:'Learning library'},{file:'Clearpath1.jpg',label:'Appearance & settings'},{file:'Clearpath7.jpg',label:'Welcome'}], name: 'ClearPath', category: 'Mobile application', summary: 'A little structure for everyday reflection.', description: 'A local-first wellness companion with guided CBT exercises, journaling, and a learning library, designed around keeping personal reflections on the device.', stack: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'Zustand', 'SQLite', 'Drizzle', 'NativeWind'], details: ['Structured reflection and daily training organize the experience into approachable steps.', 'Zustand manages application state, while SQLite supports local persistence.', 'The mobile interface brings journaling and learning resources into one place.'], note: 'A self-help wellness project, not a substitute for professional mental health care.' },
  { slug: 'chilluno', name: 'Chilluno', category: 'Real-time web application', summary: 'A round of UNO, wherever your friends are.', description: 'A playful browser game with private rooms and online multiplayer, built around shared game sessions.', stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'WebSockets'], details: ['Private-room codes let friends join the same game session.', 'A Node.js WebSocket server handles room communication and game messages.', 'Connection handling includes heartbeat cleanup, rate limits and expiring sessions.'], note: 'The screenshot shows the project interface. Online multiplayer requires the game server as well as the frontend.' },
  { slug: 'projecthub-bot', name: 'ProjectHub Bot', category: 'Serverless automation', summary: 'Project updates, delivered to your Telegram.', description: 'A Telegram bot that collects tagged project posts from registered channels and delivers them to subscribers, with archived posts available when someone joins.', stack: ['TypeScript', 'Cloudflare Workers', 'Cloudflare D1', 'Telegram Bot API', 'Wrangler'], details: ['Channel registration checks that the bot can access the channel as an administrator.', 'Telegram webhooks trigger a Worker, with D1 retaining project posts and subscription data.', 'New subscribers receive recent archived projects before receiving new posts.'], note: 'The current implementation sends notifications directly. Queued fanout is a possible next step for larger audiences.' },
  { slug: 'Chill-Anime-Vinyl', name: 'Chill Anime Vinyl', category: 'WEB / MUSIC', summary: 'Anime openings and endings, with a vinyl-inspired spin.', description: 'Explore anime openings and endings through a vinyl-inspired music player, with search suggestions and light, dark and system themes.', stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'Axios'], details: ['AnimeThemes supplies theme media, while Jikan supplies search results and artwork.', 'A title-lookup fallback helps connect an entered anime name with the media catalog.', 'Debounced suggestions and playback cleanup keep the search-to-listening flow focused.'], note: 'Media discovery and playback depend on the external APIs and their available catalog.' },
  { slug: 'gym-landing', name: 'Gym Landing', category: 'WEB / LOCAL BUSINESS', summary: 'A home on the web for a local gym.', description: 'A responsive landing-page project for a local gym, built with React and a focus on clear presentation.', stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Leaflet'], details: ['A focused website provides a place to introduce the gym and its offering.', 'React and TypeScript structure the interface; Tailwind handles styling.', 'The project’s tooling includes Framer Motion and Leaflet for motion and location features.'] },
  { slug: 'yt-tg-notification-bot', name: 'YouTube → Telegram', category: 'AUTOMATION', summary: 'Favorite programs. A notification away.', description: 'A notification bot that brings updates about a favorite YouTube program into Telegram.', stack: ['JavaScript', 'Node.js', 'Express', 'Axios', 'Telegram Bot API'], details: ['Moves program notifications into a messaging app people already use.', 'Uses node-telegram-bot-api for Telegram integration.', 'A focused automation project built around a specific everyday need.'], note: 'The original project targets a particular program; it is not presented as a universal subscription platform.' },
  { slug: 'Channel-Sub-Manager', name: 'Channel Sub Manager', category: 'AUTOMATION', summary: 'Channel growth, one daily report at a time.', description: 'Daily subscriber-count reports and streak tracking for Telegram channels.', stack: ['JavaScript', 'Node.js', 'Express', 'Axios', 'node-cron'], details: ['Surfaces subscriber counts in daily reports.', 'Tracks streaks associated with subscriber-count changes.', 'Uses node-cron for scheduling and Axios for API requests.'] },
];

document.querySelector('#more-projects').innerHTML = projects.slice(4).map((p, i) => `<a class="project-row" id="${p.slug}" href="#project/${p.slug}" aria-label="Explore ${p.name}"><span class="row-number">0${i + 5}</span><span><span class="row-title">${p.name}</span><span class="row-description">${p.summary}</span></span><span class="row-category">${p.category}</span><span class="row-arrow" aria-hidden="true">↗</span></a>`).join('');

const capabilities = [
  { icon: '▯', title: 'Mobile applications', copy: 'Vocabulary tools and reflection workflows, with local data and platform integrations.', tech: 'Flutter / Dart / React Native / Expo', projects: ['word-bucket', 'clearpath'] },
  { icon: '⌘', title: 'Web interfaces', copy: 'Interactive games, music discovery, and responsive websites made to be used.', tech: 'React / TypeScript / Tailwind CSS / Vite', projects: ['chilluno', 'Chill-Anime-Vinyl', 'gym-landing'] },
  { icon: '>_', title: 'Backend & automation', copy: 'Bots, webhooks, scheduled reports, and conversations between clients and servers.', tech: 'Node.js / Express / Workers / WebSockets', projects: ['projecthub-bot', 'chilluno'] },
  { icon: '⊞', title: 'Data & integrations', copy: 'Local persistence, serverless storage, external APIs, and the connections in between.', tech: 'SQLite / Drift / Drizzle / D1 / REST APIs', projects: ['word-bucket', 'clearpath', 'projecthub-bot'] },
];
document.querySelector('#capability-grid').innerHTML = capabilities.map(c => `<article class="capability"><div class="capability-icon" aria-hidden="true">${c.icon}</div><h3>${c.title}</h3><p>${c.copy}</p><div class="capability-tech">${c.tech}</div><div class="capability-evidence"><span>PUT TO WORK IN →</span>${c.projects.map(slug => `<a href="#project/${slug}">${projects.find(p => p.slug === slug).name}</a>`).join('<span aria-hidden="true">/</span>')}</div></article>`).join('');

const dialog = document.querySelector('#project-dialog');
let returnFocus = null;
let previousHash = '#work';
let openedFromPage = false;

function syncProject() {
  const slug = location.hash.startsWith('#project/') ? location.hash.slice(9) : null;
  const project = projects.find(p => p.slug === slug);
  if (!project) {
    if (dialog.open) dialog.close();
    return;
  }
  document.querySelector('#dialog-content').innerHTML = `<div class="dialog-category">${project.category.toUpperCase()}</div><h2 id="dialog-title">${project.name}</h2><p>${project.description}</p><div class="tags">${project.stack.map(t => `<span>${t}</span>`).join('')}</div>${project.screenshots ? `<h3>The app, in action</h3><div class="dialog-gallery" role="region" aria-label="${project.name} screenshots" tabindex="0">${project.screenshots.map(image => `<figure><a href="/images/${image.file}" target="_blank" rel="noopener noreferrer" aria-label="Open ${project.name}: ${image.label} screenshot full size"><img src="/images/${image.file}" alt="${project.name}: ${image.label}" width="576" height="1280" loading="lazy" /></a><figcaption>${image.label}</figcaption></figure>`).join('')}</div>` : ''}<h3>Inside the build</h3><ul>${project.details.map(d => `<li>${d}</li>`).join('')}</ul>${project.note ? `<p class="dialog-note">${project.note}</p>` : ''}<div class="dialog-links">${project.website ? `<a class="button button-primary" href="${project.website}" target="_blank" rel="noopener noreferrer">Visit project site <span aria-hidden="true">↗</span></a>` : ''}<a class="button button-primary" href="${repo}${project.slug}" target="_blank" rel="noopener noreferrer">Explore the source <span aria-hidden="true">↗</span></a></div>`;
  if (!dialog.open) {
    returnFocus = document.activeElement;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }
}

document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#project/"]');
  if (link) {
    previousHash = location.hash.startsWith('#project/') ? '#work' : location.hash;
    openedFromPage = true;
    // Reopen if a previously restored hash already matches the target.
    if (location.hash === link.hash) syncProject();
  }
});
function closeProject() {
  if (openedFromPage) {
    history.back();
    openedFromPage = false;
  } else {
    history.replaceState(null, '', `${location.pathname}${location.search}${previousHash}`);
    syncProject();
  }
}
document.querySelector('.close-dialog').addEventListener('click', closeProject);
dialog.addEventListener('cancel', event => { event.preventDefault(); closeProject(); });
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeProject();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (returnFocus instanceof HTMLElement && returnFocus !== document.body) returnFocus.focus({ preventScroll: true });
});
window.addEventListener('hashchange', syncProject);
syncProject();

// Use native horizontal scrolling so touch, trackpads and arrow keys work too.
const toolViewport = document.querySelector('.tool-viewport');
const toolList = document.querySelector('.tool-list');
const toolMotion = document.querySelector('#tool-motion');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const toolClone = toolList.cloneNode(true);
toolClone.setAttribute('aria-hidden', 'true');
toolClone.inert = true;
document.querySelector('.tool-track').append(toolClone);
let userPaused = false;
let hovering = false;
let frame = 0;
let lastTime = 0;
let position = 0;

function updateMotionButton() {
  toolMotion.setAttribute('aria-pressed', String(userPaused));
  toolMotion.setAttribute('aria-label', userPaused ? 'Resume tool carousel' : 'Pause tool carousel');
  toolMotion.querySelector('.motion-label').textContent = userPaused ? 'Resume' : 'Pause';
  toolMotion.querySelector('.motion-icon').textContent = userPaused ? '▶' : 'Ⅱ';
}
function animateTools(time) {
  if (lastTime && !userPaused && !hovering && !toolViewport.contains(document.activeElement) && !document.hidden && !dialog.open) {
    const width = toolList.getBoundingClientRect().width;
    position = (position + Math.min(time - lastTime, 50) * 0.027) % width;
    toolViewport.scrollLeft = position;
  } else {
    position = toolViewport.scrollLeft;
  }
  lastTime = time;
  frame = requestAnimationFrame(animateTools);
}
function syncToolMotion() {
  cancelAnimationFrame(frame);
  lastTime = 0;
  toolMotion.hidden = reducedMotion.matches;
  toolClone.hidden = reducedMotion.matches;
  if (reducedMotion.matches) {
    toolViewport.scrollLeft = 0;
    position = 0;
  } else frame = requestAnimationFrame(animateTools);
}
toolMotion.addEventListener('click', () => { userPaused = !userPaused; updateMotionButton(); });
// Only interacting with the moving content pauses it automatically.
// The motion button must not keep its own Resume action paused by focus/hover.
toolViewport.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') hovering = true; });
toolViewport.addEventListener('pointerleave', () => { hovering = false; });
function pauseForManualScroll() { userPaused = true; updateMotionButton(); }
toolViewport.addEventListener('pointerdown', pauseForManualScroll, { passive: true });
toolViewport.addEventListener('wheel', event => { if (Math.abs(event.deltaX) > 0) pauseForManualScroll(); }, { passive: true });
reducedMotion.addEventListener('change', syncToolMotion);
syncToolMotion();
