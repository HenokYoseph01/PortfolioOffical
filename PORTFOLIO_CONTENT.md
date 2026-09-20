# Portfolio layout and copy

Drafted 2026-09-18 from the verified inventory in PORTFOLIO_PLAN.md. Copy is proposed for review; project behavior has not been runtime-tested. Personal background, availability, contact information and outcomes must be supplied before publication.

## Desktop composition

1120px maximum content width. Midnight background #080F20, pale text #E8EDF5, muted text #AAB8D0, blue panels #101C34. Use a bold sans-serif heading face and a monospace face for numbering and metadata. Body text starts at 18px with comfortable line spacing. No full-screen introduction: work should begin near the initial fold.

```text
HENOK YOSEPH                 Work   Capabilities   About   Contact
────────────────────────────────────────────────────────────────
HEY, I’M HENOK.

Some ideas won’t
leave me alone.
So I build them.

A word worth remembering. A game with friends.
A task that should do itself. I turn everyday ideas
into apps, websites, and bots.

[ See what I’ve built ↗ ]         GitHub ↗

────────────────────────────────────────────────────────────────
01 / SELECTED WORK                             A few things I’ve built

┌────────────────────────────────┬──────────────────────────────┐
│                                │ 01  WORDBUCKET               │
│ Authentic app screenshots      │ Keep the words you discover. │
│ capture / collection / review  │ Summary + stack              │
│                                │ Explore project ↗  Source ↗  │
└────────────────────────────────┴──────────────────────────────┘

┌──────────────────────────────┐ ┌──────────────────────────────┐
│ ClearPath preview            │ │ Chilluno preview             │
│ Summary + stack + links      │ │ Summary + stack + links      │
└──────────────────────────────┘ └──────────────────────────────┘

┌────────────────────────────────┬──────────────────────────────┐
│ ProjectHub conversation        │ Project updates, delivered.  │
│ and compact workflow diagram   │ Summary + stack + links      │
└────────────────────────────────┴──────────────────────────────┘

02 / MORE THINGS I’VE BUILT
Chill Anime Vinyl   [preview]   Web / Music             Source ↗
Gym Landing         [preview]   Web / Local business    Source ↗
YouTube → Telegram              Automation              Source ↗
Channel Sub Manager             Automation              Source ↗

03 / CAPABILITIES
Mobile applications  | Web interfaces
Backend & automation | Data & platform integrations

04 / ABOUT
Short first-person introduction and personal interests.

┌──────────────────────────────────────────────────────────────┐
│ Pale-blue panel: Have something in mind?                     │
│ Let’s talk about what you want to build.    Contact links ↗  │
└──────────────────────────────────────────────────────────────┘
HENOK YOSEPH                                         GitHub ↗
```

The larger WordBucket entry establishes depth. Two adjacent product previews add variety, followed by an automation feature. Supporting projects use compact rows so all eight remain discoverable. Chill Anime Vinyl gets a small authentic preview even in the supporting section because its player is visually distinctive.

## Hero copy

Eyebrow: HEY, I’M HENOK.

Headline: Some ideas won’t leave me alone. So I build them.

Body: A word worth remembering. A game with friends. A task that should do itself. I turn everyday ideas into apps, websites, and bots.

Primary action: See what I’ve built → #work

Secondary action: GitHub → https://github.com/HenokYoseph01

Use Henok Yoseph as the working display name based on repository authorship. Confirm preferred presentation before publication.

Hero treatment: set the first sentence in large pale text, with “So I build them.” on its own line in a pale-blue rectangular highlight with midnight-blue lettering and a small hard offset shadow. Let line breaks adapt to the viewport. Keep the introduction and project links visible without a typing effect or rotating headline.

The three examples in the body connect directly to WordBucket, Chilluno and the automation projects. They provide the hook with specific evidence and can be understated inline links to those entries. The first-person headline is proposed voice for the owner to review, not a biographical claim about the origin of every project.

## Featured project copy

### 01 — WordBucket

**Keep the words you discover.**

A vocabulary companion that lets you capture unfamiliar words while reading, save their meanings, and return to them through recall-based reviews.

Badges: Flutter · Dart · Riverpod · SQLite

Engineering detail: Android text-selection and share actions connect to a local vocabulary database, with reminders and a home-screen widget supporting continued practice.

Preview: real screenshots of Bucketify, the saved-word collection and a review. Use two or three readable crops rather than tiny full-device renders.

Source: https://github.com/HenokYoseph01/word-bucket

Case-study outline:
1. Why switching away from reading makes word lookup disruptive.
2. Capture → definition → save → review, illustrated with the actual app.
3. Local persistence through Drift/SQLite and state orchestration through Riverpod.
4. Android integration boundaries: share/text-selection, Quick Settings and widgets.
5. What works today, current platform scope and lessons from testing. Add outcomes only with evidence.

### 02 — ClearPath

**A little structure for everyday reflection.**

A local-first wellness companion with guided CBT exercises, journaling, and a learning library, designed around keeping personal reflections on the device.

Badges: React Native · Expo · TypeScript · SQLite

Engineering detail: Device-local storage and Zustand state support structured reflection flows across the application.

Preview: a home screen and a journal or training flow, using sample content without personal entries.

Source: https://github.com/HenokYoseph01/clearpath

Case-study outline: the intended self-help workflow; organizing guided exercises; local persistence; navigation and state decisions; accessibility and interaction considerations. Present the app as a wellness tool and avoid claims of clinical efficacy.

### 03 — Chilluno

**A round of UNO, wherever your friends are.**

A playful browser game with private rooms and online multiplayer, built around a shared game session.

Badges: React · TypeScript · Node.js · WebSockets

Engineering detail: A WebSocket server manages rooms and game communication. Source and documentation provide topics for discussing session cleanup, rate limits and connection handling.

Preview: a short recording of two clients joining a private room and taking turns. Validate this flow before presenting it as a working demo.

Source: https://github.com/HenokYoseph01/chilluno

Candidate demo from repository metadata: https://chillno.vercel.app — verify frontend and server together before publishing the link.

Case-study outline: creating/joining a room; representing game state; client/server communication; invalid actions and disconnects; deployment requirements. Do not label the server authoritative until the game-state ownership has been specifically reviewed.

### 04 — ProjectHub Bot

**Project updates, delivered to your Telegram.**

A Telegram bot that collects tagged project posts from registered channels and delivers them to subscribers, with archived posts available when someone joins.

Badges: TypeScript · Cloudflare Workers · D1 · Telegram API

Engineering detail: Telegram webhooks trigger a Worker, with D1 retaining project posts and subscription data.

Preview: a genuine, anonymized subscription conversation paired with a simple channel → webhook → storage → subscriber diagram. Synthetic examples, if used, must be clearly labeled as illustrations.

Source: https://github.com/HenokYoseph01/projecthub-bot

Case-study outline: project discovery problem; channel registration and subscription; webhook processing; archives; current fanout limitations. Keep the scale claims modest: the README describes direct fanout and recommends queues for larger audiences.

## Supporting project copy

| Project | Card description | Display badges | Source |
|---|---|---|---|
| Chill Anime Vinyl | Explore anime openings and endings through a vinyl-inspired music player. | React · TypeScript · Express · REST APIs | https://github.com/HenokYoseph01/Chill-Anime-Vinyl |
| Gym Landing | A responsive landing page for a local gym, with motion and an interactive location map. | React · Tailwind CSS · Framer Motion · Leaflet | https://github.com/HenokYoseph01/gym-landing |
| YouTube → Telegram | A notification bot built to help my parents keep up with a favorite YouTube program. | Node.js · Express · Telegram API | https://github.com/HenokYoseph01/yt-tg-notification-bot |
| Channel Sub Manager | Daily subscriber-count reports and streak tracking for Telegram channels. | Node.js · Express · node-cron | https://github.com/HenokYoseph01/Channel-Sub-Manager |

Descriptions derive from the prior repository review. Verify the map is actually used before finalizing Gym Landing copy; its manifest alone establishes the dependency. Confirm the first-person family anecdote with the owner before publication. Store complete stack information in project data, but keep visible badges selective.

## Capability copy

Section introduction: Different tools for different kinds of problems. Here’s where I’ve used them.

| Group | Description | Technology labels | Evidence links |
|---|---|---|---|
| Mobile applications | Vocabulary tools and reflection workflows, with local data and platform integrations. | Flutter, Dart, React Native, Expo | WordBucket, ClearPath |
| Web interfaces | Interactive games, music discovery, and responsive business websites. | React, TypeScript, Tailwind CSS, Vite | Chilluno, Chill Anime Vinyl, Gym Landing |
| Backend & automation | Bots, webhooks, scheduled reports, and real-time communication. | Node.js, Express, Cloudflare Workers, WebSockets | ProjectHub, Chilluno, notification and subscriber bots |
| Data & platform integrations | Local persistence, serverless storage, external APIs, and Android integrations. | SQLite, Drift, Drizzle, D1, REST APIs | WordBucket, ClearPath, ProjectHub, Chill Anime Vinyl |

Each evidence label navigates to the corresponding project. Avoid skill percentages, repeated scrolling logo strips, and unsupported expertise claims.

## About and contact draft

About, pending personal review:

“I’m Henok. I enjoy building things with a clear purpose—from saving a word without breaking the reading flow to bringing project updates into Telegram. My work spans mobile apps, web interfaces, and the services that connect them.”

Add one genuinely personal sentence supplied by the owner. Location, education, employment history, years of experience and availability are not inferred.

Contact headline: Have something in mind?

Contact sentence: Let’s talk about what you want to build.

Use a real email address or supplied professional contact destination. GitHub is the only confirmed personal profile. Until another destination exists, use a direct GitHub link rather than a nonfunctional contact form. Resume and LinkedIn are omitted until provided.

## Responsive and interaction specification

- Desktop: 1120px content, 32px side padding, 24px project gaps. Hero heading approximately 80px; section headings 40px. Use fluid sizing rather than hard line breaks that overflow.
- Tablet: paired project cards can remain side by side only while previews and descriptions remain readable; otherwise stack.
- Mobile: 20px side padding, hero around 44px, all project entries in one column. Put imagery before project descriptions. Header keeps the name, Work and Contact; remaining sections are reachable through normal scrolling.
- Use 44px minimum action targets and visible focus indicators. Links must describe the destination; do not rely on arrow icons alone.
- Give project images explicit dimensions and useful alt text. Load below-fold images lazily. Videos have poster images, controls and no automatic audio.
- Hover changes may lift a button by 2px or adjust its border; keyboard focus receives equivalent feedback. Honor reduced motion and make all information available without hover.
- Supporting rows use separate named links, not a clickable container with nested links. Keep case studies navigable with browser back/forward behavior.

## Content readiness

Ready for implementation: page hierarchy, eight-project inventory, verified primary stacks, source links, palette, draft summaries and capability mapping.

Still needed for publication: preferred name/title, personal biography approval, contact destination, genuine screenshots or recordings, live-demo checks, and any resume or measurable outcomes the owner wants included.
