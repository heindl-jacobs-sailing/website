import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://heindl-jacobs-sailing.de',
  // Läuft jetzt unter der eigenen Domain (Domain-Wurzel), kein Unterordner mehr nötig.
  base: '/',
});
