import { readFile, writeFile } from 'node:fs/promises';
import { siDart, siFlutter, siTypescript, siJavascript, siReact, siExpo, siNodedotjs, siExpress, siTailwindcss, siSqlite, siCloudflareworkers } from 'simple-icons';
const icons = { Dart: siDart, Flutter: siFlutter, TypeScript: siTypescript, JavaScript: siJavascript, React: siReact, 'React Native': siReact, Expo: siExpo, 'Node.js': siNodedotjs, Express: siExpress, 'Tailwind CSS': siTailwindcss, SQLite: siSqlite, 'Cloudflare Workers': siCloudflareworkers };
const file = new URL('../index.html', import.meta.url);
const html = await readFile(file, 'utf8');
let count = 0;
const updated = html.replace(/<span class="tool-icon" aria-hidden="true">[\s\S]*?<\/span><span>([^<]+)<\/span>/g, (match, name) => {
  const icon = icons[name];
  if (!icon) throw new Error(`Missing icon for ${name}`);
  count++;
  return `<span class="tool-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="${icon.path}" /></svg></span><span>${name}</span>`;
});
if (count !== 12) throw new Error(`Expected 12 tools, found ${count}`);
await writeFile(file, updated);
console.log(`Updated ${count} tool icons.`);
