# Finding Peace 🌸

## Project Overview
- **Name**: Finding Peace — by Devon
- **Goal**: Mental health & addiction recovery community, landing page, and resource hub
- **Creator**: Devon, New Jersey — TikTok @findingpeace
- **Built With**: Hono + TypeScript + Tailwind CSS (CDN) + Cloudflare Pages

## ✅ Completed Features

### Pages
| Page | URL | Description |
|------|-----|-------------|
| 🏠 Home | `/` | Hero, affirmation rotator, community spotlight, TikTok CTA |
| 🌸 My Story | `/about` | Devon's full bio, mission, values, sticky sidebar |
| ✨ Affirmations | `/affirmations` | 30 affirmations, filterable by category, copy to share |
| 💬 Community | `/community` | Stories, Milestones, Ask for Feedback tabs |
| 🌿 Resources | `/resources` | 23+ curated resources, filterable, NJ-specific section |

### Features
- 📖 **Share Your Story** — form with name, milestone, story text
- 🏆 **Share Milestones** — celebrate wins big and small
- 💬 **Ask for Feedback** — advice, accountability, resources, venting
- ❤️ **Like System** — like stories and milestones
- ✨ **30 Daily Affirmations** — rotating, filterable, click to copy
- 🆘 **Crisis Bar** — sticky top bar with 988 and Crisis Text Line
- 📱 **Fully Responsive** — mobile hamburger menu, responsive grids
- 🎨 **Custom Design** — bohemian/earthy palette, Dancing Script + Playfair Display fonts
- 🌿 **NJ Resources** — local New Jersey mental health resources

### API Endpoints
- `GET /api/stories` — fetch all community stories
- `POST /api/stories` — submit a new story
- `POST /api/stories/:id/like` — like a story
- `GET /api/milestones` — fetch all milestones
- `POST /api/milestones` — submit a milestone
- `POST /api/milestones/:id/like` — like a milestone

## 🚀 Deployment Status

**Sandbox Preview**: https://3000-im3nyoy1w0lfcejlwj09b-cc2fbc16.sandbox.novita.ai *(temporary)*

**Cloudflare Pages**: ⏳ Pending — API token needs IP restriction removed

### To Deploy to Cloudflare Pages:
1. Go to **dash.cloudflare.com → My Profile → API Tokens**
2. Find your API token and click **Edit**
3. Remove or update the **IP Address Filtering** restriction
4. Save the token
5. Come back and run: `npx wrangler pages deploy dist --project-name finding-peace`

## Data Architecture
- **Storage**: In-memory (resets on restart) — ideal for MVP
- **Next Step**: Upgrade to Cloudflare D1 for persistent storage
- **Data Models**: Stories `{id, name, avatar, story, date, likes, milestone}`, Milestones `{id, name, avatar, milestone, description, date, likes}`

## User Guide
1. **Home** — Read Devon's intro, get a daily affirmation, see community highlights
2. **My Story** — Learn about Devon's mission and values  
3. **Affirmations** — Browse/filter 30 affirmations, click to copy & share
4. **Community** — Share your story, celebrate milestones, ask for support
5. **Resources** — Find crisis lines, therapy, recovery programs, NJ-local help

## Tech Stack
- **Framework**: Hono (TypeScript)
- **Deployment**: Cloudflare Pages (Wrangler)
- **Styling**: Custom CSS + Tailwind CDN + Google Fonts
- **Fonts**: Dancing Script, Playfair Display, Nunito
- **Icons**: Font Awesome 6.4

## Dev Commands
```bash
npm run build        # Build for production
npm run dev          # Local dev with Vite
pm2 start ecosystem.config.cjs   # Start via PM2 (sandbox)
```
