import { defineCollection, z } from 'astro:content';

const timeline = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(), // Anzeige-Text, z.B. "OKTOBER 2025" oder "2028 LOS ANGELES"
    order: z.number(), // absteigend sortiert, größere Zahl = weiter in der Zukunft
    title: z.string(),
    subtitle: z.string().optional(),
    highlight: z.boolean().default(false), // aktueller Punkt ("JETZT")
    future: z.boolean().default(false), // liegt noch in der Zukunft
    olympic: z.boolean().default(false), // Olympische Spiele -> Sonder-Badge
  }),
});

const sponsors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string(), // Pfad unter /public/images/sponsors/
    url: z.string().optional(),
    order: z.number().default(0),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: z.string(),
    order: z.number().default(0),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
  }),
});

const reports = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(), // 1 = neuester Bericht, aufsteigend sortiert nach Alter
    dateBadge: z.string(), // Kurzform fürs Grid, z.B. "Apr 2026"
    dateFull: z.string(), // Volle Form für den Artikel, z.B. "April 2026"
    title: z.string(),
    teaser: z.string(),
    image: z.string(), // Pfad unter /public/images/reports/
    urlSlug: z.string(),
  }),
});

export const collections = { timeline, sponsors, team, articles, reports };
