import { layout } from '../components/layout'

export function StoriesPage(): string {
  return layout('Stories', `

<!-- ── HERO ── -->
<section class="band-sage py-16 px-4 text-center relative overflow-hidden">
  <div class="peace-deco absolute top-6 left-8 text-7xl">📖</div>
  <div class="peace-deco absolute bottom-4 right-8 text-6xl">💙</div>
  <div class="max-w-3xl mx-auto">
    <div class="tag-pill mb-4">📖 Community Stories</div>
    <h1 class="font-display text-5xl md:text-6xl font-bold text-gray-800 mb-4">Real People.</h1>
    <h2 class="font-script text-5xl mb-4" style="color:#6a9e6f;">Real Recovery.</h2>
    <p class="text-gray-600 text-xl max-w-xl mx-auto">
      Your story is powerful. Sharing it might be the thing that saves someone else. 💙
    </p>
  </div>
</section>

<!-- ── SHARE YOUR STORY ── -->
<section class="py-16 px-4 bg-white">
  <div class="max-w-4xl mx-auto">
    <div class="peace-card p-8" style="background: linear-gradient(135deg, #fdf3ec, #fef9e7);">
      <div class="text-center mb-6">
        <div class="text-4xl mb-3">✍️</div>
        <h2 class="font-display text-3xl font-bold text-gray-800 mb-2">Share Your Story</h2>
        <p class="text-gray-600">Anonymous is always an option. Your story is yours to tell on your terms.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Your name (or Anonymous)</label>
          <input type="text" id="story-name" class="peace-input" placeholder="e.g. Jamie or Anonymous 🌸"/>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Your milestone (optional)</label>
          <input type="text" id="story-milestone" class="peace-input" placeholder="e.g. 6 months sober, started therapy..."/>
        </div>
        <div class="md:col-span-2">
          <label class="block text-sm font-bold text-gray-700 mb-2">Tell your story 💙</label>
          <textarea id="story-text" class="peace-input" rows="6" placeholder="Share whatever feels right. There is no wrong way to tell your story."></textarea>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Category</label>
          <select id="story-cat" class="peace-input">
            <option value="recovery">🌱 Addiction Recovery</option>
            <option value="mental-health">🧠 Mental Health</option>
            <option value="milestone">🎉 Milestone Reached</option>
            <option value="gratitude">🌻 Gratitude</option>
            <option value="struggle">💪 Current Struggle</option>
            <option value="other">💬 Other</option>
          </select>
        </div>
        <div class="flex items-end">
          <button onclick="submitStory()" class="btn-primary w-full py-3">📖 Share My Story</button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── STORIES FEED ── -->
<section class="py-16 px-4 band-clay">
  <div class="max-w-5xl mx-auto">
    <div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
      <div>
        <h2 class="font-display text-3xl font-bold text-gray-800">Community Stories</h2>
        <p class="text-gray-600" id="story-count">6 stories shared</p>
      </div>
      <div class="flex gap-2 flex-wrap">
        <button onclick="filterStories('all')" class="filter-btn active" data-f="all">All</button>
        <button onclick="filterStories('recovery')" class="filter-btn" data-f="recovery">🌱 Recovery</button>
        <button onclick="filterStories('mental-health')" class="filter-btn" data-f="mental-health">🧠 Mental Health</button>
        <button onclick="filterStories('milestone')" class="filter-btn" data-f="milestone">🎉 Milestone</button>
        <button onclick="filterStories('struggle')" class="filter-btn" data-f="struggle">💪 Struggle</button>
      </div>
    </div>
    <div id="stories-grid" class="space-y-6"></div>
    <div class="text-center mt-10" id="load-more-stories">
      <button onclick="loadMoreStories()" class="btn-sage px-8 py-3">Load More Stories →</button>
    </div>
  </div>
</section>

<style>
.filter-btn { padding:.4rem 1rem; border-radius:9999px; border:2px solid #d5e8d0; background:white; color:#4e7d54; font-size:.82rem; font-weight:700; cursor:pointer; transition:background .2s; font-family:'Nunito',sans-serif; }
.filter-btn.active, .filter-btn:hover { background:#8ab88e; color:white; border-color:#8ab88e; }
</style>

<script>
const stories = [
  { id:1, name:"Sarah M.", avatar:"S", avatarColor:"#fdedb3", avatarText:"#c68d00", story:"Three years ago I hit rock bottom. I lost my job, my apartment, and most of my friends. Today I am 18 months sober and just got my dream job as a social worker. Finding Peace helped me realize I was not alone. If you are struggling, please know there is light on the other side. 💙", date:"March 28, 2025", likes:47, milestone:"18 months sober", cat:"recovery" },
  { id:2, name:"Jake T.", avatar:"J", avatarColor:"#d5e8d0", avatarText:"#4e7d54", story:"Anxiety used to rule my life completely. Some days I could not leave my house. Through daily affirmations and connecting with this community, I have learned to take it one moment at a time. This week I went to a concert. First one in 4 years. I cried the whole way home — happy tears.", date:"March 25, 2025", likes:34, milestone:"First concert in 4 years", cat:"mental-health" },
  { id:3, name:"Maria L.", avatar:"M", avatarColor:"#ddd0ed", avatarText:"#5e3d88", story:"I found Finding Peace during my darkest hour — 3am, could not stop crying. The funny affirmations made me laugh when all I wanted to do was cry. I have been in therapy for 6 months now and I am starting to recognize my own patterns.", date:"March 20, 2025", likes:62, milestone:"6 months of therapy", cat:"mental-health" },
  { id:4, name:"Devon W.", avatar:"D", avatarColor:"#c0eae4", avatarText:"#1f7971", story:"Recovery from opioids is the hardest thing I have ever done. I relapsed twice before I got my current stretch of clean time. What I want people to know is: relapse does not mean failure. It means you are human. Get back up.", date:"March 15, 2025", likes:88, milestone:"8 months clean after relapse", cat:"recovery" },
  { id:5, name:"Anonymous", avatar:"A", avatarColor:"#f9dbc5", avatarText:"#b55a2d", story:"I am not ready to share my full story yet. But I am here. Reading these stories every day gives me hope that it gets better. That is enough for now. Thank you for this community.", date:"March 10, 2025", likes:103, milestone:"", cat:"mental-health" },
  { id:6, name:"River C.", avatar:"R", avatarColor:"#fef9e7", avatarText:"#c68d00", story:"I never thought I would post something like this. I was the together one in my friend group. Turns out I was also secretly struggling with alcohol for years. Coming out about my recovery was terrifying. The response I got was overwhelming love.", date:"March 5, 2025", likes:71, milestone:"1 year sober", cat:"recovery" },
];
let filter = 'all';
let visibleCount = 4;
function getFiltered() { return filter === 'all' ? stories : stories.filter(s => s.cat === filter); }
const catLabels = { recovery:'🌱 Recovery', 'mental-health':'🧠 Mental Health', milestone:'🎉 Milestone', gratitude:'🌻 Gratitude', struggle:'💪 Struggle', other:'💬 Story' };
function renderStories() {
  const filtered = getFiltered();
  const toShow = filtered.slice(0, visibleCount);
  document.getElementById('story-count').textContent = filtered.length + ' stories shared';
  document.getElementById('stories-grid').innerHTML = toShow.map(s => '<div class="peace-card p-7"><div class="flex items-start gap-4 mb-4"><div class="avatar-circle" style="background:' + s.avatarColor + '; color:' + s.avatarText + ';">' + s.avatar + '</div><div class="flex-1"><div class="flex items-center justify-between flex-wrap gap-2"><div><div class="font-bold text-gray-800">' + s.name + '</div><div class="text-xs text-gray-400">' + s.date + '</div></div><div class="flex gap-2 flex-wrap">' + (s.milestone ? '<span class="tag-pill">' + s.milestone + '</span>' : '') + '<span class="tag-pill" style="background:#d5e8d0; color:#4e7d54;">' + (catLabels[s.cat] || '💬') + '</span></div></div></div></div><p class="text-gray-700 leading-relaxed mb-4">' + s.story + '</p><div class="flex items-center gap-3"><button class="like-btn' + (s.liked ? ' liked' : '') + '" onclick="likeStory(' + s.id + ', this)">❤️ ' + s.likes + '</button><span class="text-xs text-gray-400">Thank you for sharing 💙</span></div></div>').join('');
  document.getElementById('load-more-stories').style.display = filtered.length > visibleCount ? 'block' : 'none';
}
function filterStories(f) {
  filter = f; visibleCount = 4;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-f="' + f + '"]').classList.add('active');
  renderStories();
}
function loadMoreStories() { visibleCount += 3; renderStories(); }
function likeStory(id, btn) {
  const s = stories.find(s => s.id === id);
  if (s && !s.liked) { s.likes++; s.liked = true; renderStories(); showToast('❤️ Sending love!'); }
}
function submitStory() {
  const name = document.getElementById('story-name').value.trim() || 'Anonymous';
  const text = document.getElementById('story-text').value.trim();
  const milestone = document.getElementById('story-milestone').value.trim();
  const cat = document.getElementById('story-cat').value;
  if (!text) { showToast('Please write your story first 💙'); return; }
  const combos = [{color:'#fdedb3',textColor:'#c68d00'},{color:'#d5e8d0',textColor:'#4e7d54'},{color:'#ddd0ed',textColor:'#5e3d88'}];
  const c = combos[Math.floor(Math.random() * combos.length)];
  stories.unshift({ id:stories.length+1, name, avatar:name[0].toUpperCase(), avatarColor:c.color, avatarText:c.textColor, story:text, date:new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'}), likes:0, milestone, cat, liked:false });
  document.getElementById('story-name').value = '';
  document.getElementById('story-text').value = '';
  document.getElementById('story-milestone').value = '';
  renderStories();
  showToast('📖 Your story has been shared. Thank you for your courage. 💙');
}
renderStories();
</script>
`, '/stories')
}
