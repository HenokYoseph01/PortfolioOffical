# Personal portfolio plan

Prepared 2026-09-14. Planning only; no application scaffold created.

## Direction

A midnight-blue personal portfolio with generous negative space, clear project storytelling, and restrained brutalist details. Proposed hero hook: “Some ideas won’t leave me alone. So I build them.” Supporting copy connects vocabulary, games and automation to actual projects; full wording and treatment live in PORTFOLIO_CONTENT.md. Confirm personal biography, professional title, availability, and contact details before publishing.

Reference review included rendered desktop captures and page content/assets:
- https://www.robi.work/: compact personal introduction, immediately accessible social links, large project images with concise descriptions and technology labels. Borrow its project-first approach and personal voice.
- https://www.eyu.et/: light grid background, oversized bold headline, outlined controls with hard offset shadows, numbered sections, explicit stack and milestones. Borrow typography, numbering, and geometry; translate to blue.
- https://www.miheretab.space/: dark monochrome atmosphere, subtle grid/cross details, generous space, strong name treatment and contact actions. Borrow atmosphere and spacing. Its longer services/pricing/process content is less relevant to the proposed project-focused portfolio.

## Visual system

- Background: #080F20; elevated surface: #101C34; secondary surface: #172844.
- Primary text: #E8EDF5; secondary text: #AAB8D0; accent: #9AB8ED; decorative divider: #314568. Validate final contrast, including interactive borders, during implementation.
- Use a readable sans-serif for body and bold display headings; monospace for section numbers, categories, dates, and small labels. Final font choice pending.
- Centered content around 1120px, generous vertical spacing, thin rules, square or minimally rounded corners.
- Brutalist accents: oversized section numbers, 2px button borders, selective 4px hard shadows, one pale-blue inverted contact block. Keep these accents sparse.
- A faint grid confined to the hero; calm solid backgrounds elsewhere. Preserve original colors in project screenshots for accurate previews.
- Short hover/focus transitions and restrained entrance motion. Respect reduced motion and keep content visible without animation. Mobile uses a single column with persistent labels and keyboard-accessible actions.

## Page structure

1. Header: name/wordmark, Work, Capabilities, About, Contact; compact on mobile.
2. Hero: name, one clear sentence about useful mobile/web products and automation, View work and Get in touch. Optional resume link only once a real file exists. Keep the hero short enough that work begins near the first viewport.
3. Selected work: four substantial entries—WordBucket, ClearPath, Chilluno, ProjectHub. Each includes real imagery or a bot conversation preview, problem, contribution, one technically meaningful decision, 3–5 stack labels, and valid source/demo links.
4. More projects: Gym Landing, YouTube–Telegram Notification Bot, Channel Sub Manager, and Chill Anime Vinyl. Compact rows or two-column cards, with no filters needed for eight projects.
5. Capabilities: four evidence-linked groups: mobile applications, web interfaces, bots/backend automation, data/platform integration. Link each capability to projects that demonstrate it.
6. About: short personal background, interests and working approach; experience/education only when supplied. Genuine milestones can be added later.
7. Contact/footer: direct email and relevant social links, optional resume, concise invitation. Availability must be confirmed.

Dedicated /work/word-bucket, /work/clearpath, /work/chilluno and /work/projecthub-bot pages can hold deeper case studies: problem → role/scope → workflow → technical decisions → challenges → outcome → links. Publish only supported outcomes; use demonstrable behavior when usage metrics are unavailable.

## Project selection

| Project | Placement | Reason and preparation |
|---|---|---|
| WordBucket | Lead feature | Clear personal problem, capture-to-review workflow, local database, Android platform integrations. Show selected-text capture, word collection and review progress. |
| ClearPath | Feature | Demonstrates a coherent mobile wellness product, local data, journaling and structured flows. Present as a self-help companion; do not claim clinical outcomes. |
| ProjectHub Bot / TeleHub | Feature | Adds serverless backend breadth, Telegram webhooks, channel registration, subscriptions and archived posts. Illustrate the workflow with a real bot recording and small architecture diagram. |
| Gym Landing | Supporting visual project | Adds commercial website presentation and responsive UI. Promote to feature if the visual result or client story is especially strong. Replace the template README with project-specific documentation before linking prominently. |
| YouTube–Telegram Notification Bot | Supporting automation | Memorable personal use case: notifications for the owner's parents. Explain supported program/channel scope honestly and show a notification example. |
| Channel Sub Manager | Supporting automation | Focused subscriber reporting and streak tracking. Distinguish its purpose from ProjectHub rather than repeating generic bot copy. |
| Chilluno | Feature, subject to demo validation | Adds real-time multiplayer engineering and a playful visual experience. Show private-room creation and synchronized play across two clients. |
| Chill Anime Vinyl | Supporting visual project | Public source now verified. Anime opening/ending discovery with a vinyl-inspired player adds personality and full-stack API integration. Show search → selection → playback in a short recording; consider promoting if the live experience is especially polished. |

These are editorial recommendations from code/manifests, documentation and repository metadata, not a runtime quality audit. The portfolio should include all requested projects once verified, with unequal visual emphasis to avoid repeating similar bot stories.

Chilluno is now explicitly included in the user's selection. Local source confirms a WebSocket server and private-room handling; its README documents heartbeat cleanup, rate limiting and expiring sessions. These are useful case-study topics, subject to behavior verification. Learning exercises and course starter repositories are lower priority.

## Retained technology inventory

Source profile confirmed by the user's supplied repository links: https://github.com/HenokYoseph01. Local copies may differ from public default branches.

| Project | Technologies observed | Evidence and confidence |
|---|---|---|
| WordBucket | Flutter, Dart, Riverpod, Drift/SQLite, Dio, Workmanager, flutter_local_notifications, home_widget, SharedPreferences; Free Dictionary API and Datamuse described in README | ../wordbucket/pubspec.yaml, README.md and source tree. Manifest verified; features documented, not executed. |
| ClearPath | React Native, Expo, TypeScript, Expo Router, Zustand, SQLite, Drizzle ORM, NativeWind; Reanimated, Moti, Expo Notifications; Jest and React Native Testing Library | ../clearpath/package.json and README.md; Zustand store and database imports inspected. Tests declared, not run. |
| ProjectHub Bot / TeleHub | TypeScript, Cloudflare Workers, D1, Telegram Bot API, Wrangler | ../projecthub/telegram-project-bot/package.json, README.md, src tree; public package.json also retrieved. Webhook deployment documented, live deployment not verified. |
| Gym Landing | React, TypeScript, Vite, Tailwind CSS, Framer Motion, Leaflet, React Leaflet | https://github.com/HenokYoseph01/gym-landing/blob/main/package.json. Dependencies verified; demo https://addisfitness.vercel.app comes from repository metadata and was not audited. |
| YouTube–Telegram Notification Bot | JavaScript, Node.js, Express, Axios, node-telegram-bot-api, dotenv | https://github.com/HenokYoseph01/yt-tg-notification-bot/blob/master/package.json. Do not infer which YouTube feed/API or persistence method is used from this manifest. |
| Channel Sub Manager | JavaScript, Node.js, Express, Axios, node-cron, dotenv | https://github.com/HenokYoseph01/Channel-Sub-Manager/blob/master/package.json. Description indicates daily subscriber count/streak reporting. Storage and deployment behavior remain unverified. |
| Chilluno | React, TypeScript, Vite, Tailwind CSS, Framer Motion, Node.js, ws (WebSockets) | ../chilluno/package.json, README.md and server/src/index.ts. Private-room handling observed; application not run. |
| Chill Anime Vinyl | React 19, TypeScript, Vite, Tailwind CSS 4, Framer Motion, Axios, Lucide; Node.js, Express 5, CORS; AnimeThemes and Jikan APIs | Public main branch frontend/package.json, backend/package.json and backend/app.js inspected. README documents vinyl animation, debounced suggestions, playback cleanup and persistent themes. Runtime not tested. |

## Capability presentation

- Mobile: Flutter/Dart and React Native/Expo, demonstrated by WordBucket and ClearPath.
- Web interfaces: React/TypeScript, Tailwind, Vite and motion, demonstrated by Gym Landing, Chilluno and Chill Anime Vinyl.
- Backend/automation: JavaScript/Node.js, Express, TypeScript, Cloudflare Workers, Telegram integrations, scheduled tasks, demonstrated by the bot projects; real-time WebSocket communication demonstrated in Chilluno source.
- Data/platform integration: SQLite, Drift, Drizzle and D1; Android capture/widget integrations; webhooks and external APIs, tied to their respective projects.

Show concise technology labels with “Used in” project links. Avoid percentage proficiency bars. Keep minor utilities out of the main skills list. Do not claim expertise, production scale, test success or unverified technologies from dependency presence alone.

## Build-phase content model and next inputs

Store projects as structured data: slug, name, summary, category, role, status, dates, problem, contribution, technical decisions, outcome/evidence, technology labels, source URL, demo URL, screenshots, alt text, featured rank and verification notes. This supports consistent cards and case studies without duplicated content.

Before implementation: confirm biography, role, contact and availability; choose authentic screenshots; verify demos and release links; confirm personal contributions and measurable results where applicable. Recommended implementation shape is a static-first portfolio with data-driven project pages and minimal client JavaScript; choose the framework during implementation.

## User-confirmed repository URLs

- https://github.com/HenokYoseph01/word-bucket
- https://github.com/HenokYoseph01/chilluno
- https://github.com/HenokYoseph01/projecthub-bot
- https://github.com/HenokYoseph01/clearpath
- https://github.com/HenokYoseph01/gym-landing
- https://github.com/HenokYoseph01/Chill-Anime-Vinyl
- https://github.com/HenokYoseph01/yt-tg-notification-bot
- https://github.com/HenokYoseph01/Channel-Sub-Manager

## Chill Anime Vinyl follow-up

Public access confirmed on retry; review completed 2026-09-15. Earlier 404 status is resolved. Repository: https://github.com/HenokYoseph01/Chill-Anime-Vinyl. Metadata lists demo https://chill-anime-vinyl.vercel.app; live playback has not been tested.

Suggested card copy: “Explore anime openings and endings through a vinyl-inspired player.” Main badges: React, TypeScript, Tailwind CSS, Express, REST APIs. Case-study topics: debounced search (documented), title lookup fallback through Jikan (source verified), combining AnimeThemes media with Jikan artwork (source verified), playback cleanup and theme persistence (documented). No database dependency was found in the inspected manifests; do not add a database badge.
