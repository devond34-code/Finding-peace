import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { HomePage } from './pages/home'
import { CommunityPage } from './pages/community'
import { StoriesPage } from './pages/stories'
import { MilestonesPage } from './pages/milestones'
import { ResourcesPage } from './pages/resources'
import { AboutPage } from './pages/about'
import { AffirmationsPage } from './pages/affirmations'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))
app.use('/public/*', serveStatic({ root: './' }))
app.use('/api/*', cors())

app.get('/favicon.ico', (c) => {
  return c.redirect('/favicon.svg', 302)
})
app.get('/favicon.svg', (c) => {
  c.header('Content-Type', 'image/svg+xml')
  return c.body(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#7c3aed"/><text y=".9em" font-size="80" x="10">🕊️</text></svg>`)
})

// Pages
app.get('/', (c) => c.html(HomePage()))
app.get('/community', (c) => c.html(CommunityPage()))
app.get('/stories', (c) => c.html(StoriesPage()))
app.get('/milestones', (c) => c.html(MilestonesPage()))
app.get('/resources', (c) => c.html(ResourcesPage()))
app.get('/about', (c) => c.html(AboutPage()))
app.get('/affirmations', (c) => c.html(AffirmationsPage()))

// API routes for community features (in-memory for demo)
const stories: any[] = [
  {
    id: 1,
    name: "Sarah M.",
    avatar: "S",
    story: "Three years ago I hit rock bottom. Today I'm 18 months sober and just got my dream job. Finding Peace helped me realize I wasn't alone in this journey. If you're struggling, please know there is light on the other side. 💙",
    date: "March 28, 2025",
    likes: 47,
    milestone: "18 months sober"
  },
  {
    id: 2,
    name: "Jake T.",
    avatar: "J",
    story: "Anxiety used to rule my life. I couldn't leave my house some days. Through daily affirmations and connecting with this community, I've learned to take it one moment at a time. This week I went to a concert — first one in 4 years!",
    date: "March 25, 2025",
    likes: 34,
    milestone: "First concert in 4 years"
  },
  {
    id: 3,
    name: "Maria L.",
    avatar: "M",
    story: "I found Finding Peace during my darkest hour. The funny affirmations made me laugh when all I wanted to do was cry. Sometimes you just need someone to say 'hey, this is hard, but you're still here and that matters.'",
    date: "March 20, 2025",
    likes: 62,
    milestone: "6 months of therapy"
  }
]

const milestones: any[] = [
  { id: 1, name: "Alex R.", avatar: "A", milestone: "1 Year Sober 🎉", description: "One full year! Never thought I'd say that.", date: "April 1, 2025", likes: 89 },
  { id: 2, name: "Devon K.", avatar: "D", milestone: "First Week of No Social Media", description: "Digital detox complete. My anxiety dropped SO much.", date: "March 30, 2025", likes: 23 },
  { id: 3, name: "Priya S.", avatar: "P", milestone: "90 Days Clean 💪", description: "90 days. One day at a time. Still here.", date: "March 27, 2025", likes: 71 },
  { id: 4, name: "Chris B.", avatar: "C", milestone: "Started Therapy", description: "Finally asked for help. It took courage but I did it.", date: "March 22, 2025", likes: 55 }
]

app.get('/api/stories', (c) => c.json(stories))
app.post('/api/stories', async (c) => {
  const body = await c.req.json()
  const newStory = {
    id: stories.length + 1,
    name: body.name || "Anonymous",
    avatar: (body.name || "A")[0].toUpperCase(),
    story: body.story,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    likes: 0,
    milestone: body.milestone || ""
  }
  stories.unshift(newStory)
  return c.json(newStory, 201)
})

app.post('/api/stories/:id/like', async (c) => {
  const id = parseInt(c.req.param('id'))
  const story = stories.find(s => s.id === id)
  if (story) { story.likes++; return c.json({ likes: story.likes }) }
  return c.json({ error: 'Not found' }, 404)
})

app.get('/api/milestones', (c) => c.json(milestones))
app.post('/api/milestones', async (c) => {
  const body = await c.req.json()
  const newMilestone = {
    id: milestones.length + 1,
    name: body.name || "Anonymous",
    avatar: (body.name || "A")[0].toUpperCase(),
    milestone: body.milestone,
    description: body.description || "",
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    likes: 0
  }
  milestones.unshift(newMilestone)
  return c.json(newMilestone, 201)
})

app.post('/api/milestones/:id/like', async (c) => {
  const id = parseInt(c.req.param('id'))
  const milestone = milestones.find(m => m.id === id)
  if (milestone) { milestone.likes++; return c.json({ likes: milestone.likes }) }
  return c.json({ error: 'Not found' }, 404)
})

export default app
