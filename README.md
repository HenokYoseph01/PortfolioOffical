# Henok Yoseph — Portfolio

A responsive midnight-blue portfolio with eight projects, an evidence-linked capability showcase, and accessible project-detail dialogs. Built with semantic HTML, CSS, JavaScript and Vite.

## Development

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` folder to a static host. Project-detail URLs use hashes and do not need server rewrites.

## Editing

- `index.html`: main layout, hero, featured cards, about and contact.
- `src/main.js`: project data, supporting cards, capabilities and detail dialogs.
- `src/style.css`: design tokens, layout, responsiveness and reduced-motion support.
- `public/images/chilluno.webp`: screenshot from the local Chilluno project.
- `PORTFOLIO_PLAN.md` and `PORTFOLIO_CONTENT.md`: research and content decisions.

WordBucket, ClearPath and Chilluno use actual project screenshots. The WordBucket and ClearPath detail dialogs include full screenshot galleries and links to their promotional sites. Styles load directly from the document head, independently of JavaScript. Google Fonts provides DM Sans and IBM Plex Mono; local system fonts serve as fallbacks. No analytics or backend is included.

Contact links include the supplied email, LinkedIn profile and telephone number. Confirm biography wording before publishing; no availability, client statistics, or employment history are invented.

Tool logos use [Simple Icons](https://simpleicons.org/) (CC0), embedded as inline SVGs with no runtime icon dependency. React Native shares the React logo. Run `node scripts/update-tool-icons.mjs` to refresh the markup from the installed icon package. Brand trademarks belong to their respective owners.
