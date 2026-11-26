import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const iconsMap = {
  file: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  chart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  eye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
  database: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>`,
  book: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
  news: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12a2 2 0 0 0 2 2z"></path><path d="M12 12H3"></path><path d="M16 6H3"></path><path d="M12 18H3"></path></svg>`,
};

const actionIcons = {
  iframe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>`,
  link: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getSheetIdFromAppJs() {
  const appJsPath = path.join(rootDir, 'app.js');
  const appJsContent = fs.readFileSync(appJsPath, 'utf8');
  const match = appJsContent.match(/const\s+DEFAULT_SHEET_ID\s*=\s*['"]([^'"]+)['"]/);
  if (!match) {
    throw new Error('DEFAULT_SHEET_ID tidak ditemukan di app.js');
  }
  return match[1];
}

async function fetchAppsFromSheet(sheetId) {
  const gvizUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;
  const response = await fetch(gvizUrl);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} saat mengambil Google Sheets`);
  }

  const text = await response.text();
  const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);/);
  if (!match) {
    throw new Error('Format respons Google Sheets tidak valid');
  }

  const json = JSON.parse(match[1]);
  if (json.status === 'error') {
    throw new Error(json.errors?.[0]?.detailed_message || 'Gagal mengambil data sheet');
  }

  const rows = json.table?.rows || [];
  const apps = rows
    .map((row, idx) => {
      if (!row || !row.c) return null;
      const getCell = (colIdx) =>
        row.c[colIdx] && row.c[colIdx].v !== null && row.c[colIdx].v !== undefined
          ? row.c[colIdx].v
          : '';

      return {
        id: String(getCell(0) || `app_${idx}`).trim(),
        name: String(getCell(1) || 'Tanpa Nama').trim(),
        description: String(getCell(2) || '').trim(),
        url: String(getCell(3) || '#').trim(),
        category: String(getCell(4) || 'informasi').toLowerCase().trim(),
        status: String(getCell(5) || 'stabil').toLowerCase().trim(),
        launchMode: String(getCell(6) || 'iframe').toLowerCase().trim(),
        iconKey: String(getCell(7) || 'file').toLowerCase().trim(),
      };
    })
    .filter((app) => app !== null);

  if (
    apps.length > 0 &&
    (apps[0].id.toLowerCase() === 'id' || apps[0].name.toLowerCase() === 'nama')
  ) {
    apps.shift();
  }

  if (apps.length === 0) {
    throw new Error('Spreadsheet kosong, sinkronisasi dibatalkan.');
  }

  return apps;
}

function renderAppCard(app) {
  const hasUrl = app.url && app.url !== '#';
  const targetAttrs = hasUrl ? ' target="_blank" rel="noopener noreferrer"' : '';

  let badgeClass = 'badge-stable';
  let badgeText = 'Stabil';
  if (app.status === 'pengembangan') {
    badgeClass = 'badge-dev';
    badgeText = 'Pengembangan';
  } else if (app.status === 'admin') {
    badgeClass = 'badge-admin';
    badgeText = 'Admin';
  }

  const isIframe = app.launchMode === 'iframe';
  const actionText = isIframe ? 'Buka Layanan' : 'Buka Link';
  const actionIcon = isIframe ? actionIcons.iframe : actionIcons.link;
  const iconSvg = iconsMap[app.iconKey] || iconsMap.file;

  return [
    `        <!-- ${escapeHtml(app.name)} Card -->`,
    `        <a href="${escapeHtml(app.url || '#')}"${targetAttrs} class="app-card" data-id="${escapeHtml(app.id)}">`,
    `          <div class="app-card-top">`,
    `            <div class="app-card-meta">`,
    `              <div class="app-icon-wrapper">`,
    `                ${iconSvg}`,
    `              </div>`,
    `              <span class="badge ${badgeClass}">${badgeText}</span>`,
    `            </div>`,
    `            <div class="app-info">`,
    `              <h3>${escapeHtml(app.name)}</h3>`,
    `              <p>${escapeHtml(app.description)}</p>`,
    `            </div>`,
    `          </div>`,
    `          <div class="app-card-bottom">`,
    `            <span class="app-category">${escapeHtml(app.category)}</span>`,
    `            <span class="action-indicator">`,
    `              <span>${actionText}</span>`,
    `              ${actionIcon}`,
    `            </span>`,
    `          </div>`,
    `        </a>`,
  ].join('\n');
}

function formatIndonesianList(names) {
  if (names.length === 0) return '';
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} dan ${names[1]}`;
  return `${names.slice(0, -1).join(', ')}, dan ${names[names.length - 1]}`;
}

function updateIndexHtml(apps) {
  const indexPath = path.join(rootDir, 'index.html');
  const original = fs.readFileSync(indexPath, 'utf8');
  let updated = original;

  const appNames = apps.map((a) => a.name).filter(Boolean);
  const descriptionContent = `Portal Layanan Mandiri dan Aplikasi Internal Bagian Organisasi Setda Kab. Muaro Jambi. Akses aplikasi ${formatIndonesianList(appNames)}.`;

  const baseKeywords = [
    'portal bagor',
    'bagian organisasi muaro jambi',
    'tpp muaro jambi',
    'aplikasi internal',
  ];
  const allKeywords = Array.from(
    new Set([...appNames.map((n) => n.toLowerCase()), ...baseKeywords])
  );
  const keywordsContent = allKeywords.join(', ');

  updated = updated.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${escapeHtml(descriptionContent)}">`
  );
  updated = updated.replace(
    /<meta name="keywords" content="[^"]*">/,
    `<meta name="keywords" content="${escapeHtml(keywordsContent)}">`
  );

  const cardsHtml = apps.map(renderAppCard).join('\n\n');
  const gridPattern = /(<div class="app-grid" id="appGrid">)[\s\S]*?(\n      <\/div>\n    <\/section>)/;
  if (!gridPattern.test(updated)) {
    throw new Error('Container #appGrid tidak ditemukan di index.html');
  }
  updated = updated.replace(gridPattern, `$1\n${cardsHtml}$2`);

  if (updated !== original) {
    fs.writeFileSync(indexPath, updated, 'utf8');
    return true;
  }
  return false;
}

function updateSitemapXml() {
  const sitemapPath = path.join(rootDir, 'sitemap.xml');
  const original = fs.readFileSync(sitemapPath, 'utf8');
  const today = new Date().toISOString().slice(0, 10);
  const updated = original.replace(
    /<lastmod>[^<]*<\/lastmod>/,
    `<lastmod>${today}</lastmod>`
  );
  if (updated !== original) {
    fs.writeFileSync(sitemapPath, updated, 'utf8');
  }
}

async function main() {
  const sheetId = getSheetIdFromAppJs();
  const apps = await fetchAppsFromSheet(sheetId);
  const changed = updateIndexHtml(apps);
  if (changed) {
    updateSitemapXml();
    console.log(`Sinkronisasi selesai: ${apps.length} aplikasi diperbarui di index.html & sitemap.xml.`);
  } else {
    console.log(`Tidak ada perubahan (${apps.length} aplikasi sudah sinkron).`);
  }
}

main().catch((err) => {
  console.error('Error sinkronisasi Google Sheets:', err);
  process.exit(1);
});
