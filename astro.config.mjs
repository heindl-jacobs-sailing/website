import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://heindl-jacobs-sailing.github.io',
  // GitHub Pages liefert dieses Projekt unter /website/ aus (Repo-Name ist "website").
  // WICHTIG: Sobald die eigene Domain (heindl-jacobs-sailing.de) per DNS auf GitHub Pages
  // zeigt, muss "base" auf '/' geändert werden, da die Seite dann unter der Domain-Wurzel liegt.
  base: '/website/',
});
