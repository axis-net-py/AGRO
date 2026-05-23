# Aurelius – Cultivando o Futuro

## Overview
Web app for agricultural management (seeds, grains, fleet, finances, etc.). Built with vanilla JS, Vite for bundling, and Supabase for backend sync.

## Development
```bash
npm install
npm run dev   # Vite dev server (http://localhost:5173)
```

## Environment Variables
Create a `.env` file (or copy `.env.example`) at the project root:
```
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```
The app reads these variables via `import.meta.env`. The `.env.example` file is provided for reference and should **not** be committed with real secrets.

## Build & Deploy
```bash
npm run build   # creates production bundle in ./dist
```
Deploy the `dist` folder to Vercel. The `vercel.json` includes SPA rewrite rules for proper routing.

## Supabase Sync
The app automatically syncs local data with Supabase when a connection is configured. Credentials are stored in `localStorage` after the first load.

## License
MIT