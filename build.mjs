import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
const articles = JSON.parse(readFileSync(new URL('./articles.json', import.meta.url), 'utf8'));
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const cards = articles.map((a,i) => {
 if (!['gut','running','sleep'].includes(a.category) || !/^https:\/\//.test(a.url)) throw new Error('Invalid article');
 return `<article class="study ${a.category}" id="${escape(a.id)}" data-category="${a.category}"><div class="study-visual visual-${i}"><span class="study-index">0${i+1} / RESEARCH NOTE</span><span class="new-badge">NEW</span><div class="mini-art" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div><div class="visual-metric">${escape(a.metric)}<span>${escape(a.unit)}</span></div></div><div class="study-content"><div class="study-meta"><span class="category-tag">${escape(a.tag)}</span><span>${escape(a.type)}</span></div><h3>${escape(a.title)}</h3><p class="summary">${escape(a.summary)}</p><div class="study-date">${escape(a.dateLabel)}</div><details><summary>研究の背景と限界 <span>＋</span></summary><div class="details-body"><p>${escape(a.detail)}</p><h4>読み解くときの注意点</h4><p>${escape(a.limit)}</p></div></details><a class="source-link" href="${escape(a.url)}" target="_blank" rel="noopener noreferrer"><span><small>原著・公開資料</small>${escape(a.source)}</span><span aria-hidden="true">↗</span></a></div></article>`;
}).join('\n');
const template = readFileSync(new URL('./template.html', import.meta.url), 'utf8');
writeFileSync(new URL('./index.html', import.meta.url), template.replace('ARTICLES_PLACEHOLDER', cards));
console.log('Built ' + articles.length + ' research articles.');
mkdirSync(new URL('./dist/', import.meta.url), {recursive:true});
for (const file of ['index.html','styles.css','app.js','favicon.svg','archive-2026-08.html']) copyFileSync(new URL('./'+file, import.meta.url), new URL('./dist/'+file, import.meta.url));
