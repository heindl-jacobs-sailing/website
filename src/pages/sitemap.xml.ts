import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://heindl-jacobs-sailing.de';

  const staticPaths = [
    '',
    'aktuell/',
    'presse/',
    'road-to-gold/',
    'partner/',
    'kontakt/',
    'impressum/',
    'datenschutz/',
  ];

  const reports = await getCollection('reports');
  const reportPaths = reports.map((r) => `aktuell/${r.data.urlSlug}/`);

  const allPaths = [...staticPaths, ...reportPaths];

  const urlEntries = allPaths
    .map((path) => `  <url>\n    <loc>${base}/${path}</loc>\n  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
