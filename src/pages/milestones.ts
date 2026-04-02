import { layout } from '../components/layout'

export function MilestonesPage(): string {
  return layout('Milestones', `

<!-- ── HERO ── -->
<section class="band-gold py-16 px-4 text-center relative overflow-hidden">
  <div class="peace-deco absolute top-4 left-8 text-7xl">🎉</div>
  <div class="peace-deco absolute bottom-4 right-8 text-6xl">🏆</div>
  <div class="max-w-3xl mx-auto">
    <div class="tag-pill mb-4">🎉 Milestones</div>
    <h1 class="font-display text-5xl md:text-6xl font-bold text-gray-800 mb-4">Every Win Counts.</h1>
    <h2 class="font-script text-4xl mb-4" style="color:#d4713f;">No Matter How Small.</h2>
    <p class="text-gray-600 text-xl max-w-2xl mx-auto">
      Got out of bed today? Win. One week sober? WIN. Five years? LEGENDARY. We celebrate ALL of it here. 🌟
    </p>
  </div>
</section>

<!-- ── MILESTONE COUNTER ── -->
<section class="py-12 px-4 bg-white">
  <div class="max-w-4xl mx-auto">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="peace-card p-5 text-center" style="background: linear-gradient(135deg, #fef9e7, #fdedb3);">
        <div class="font-display font-bold text-4xl" style="color:#d4713f;">🥇</div>
        <div class="font-display font-bold text-3xl text-gray-800 mt-1" id="count-1yr">47</div>
        <div class="text-xs text-gray-500">1+ Year Milestones</div>
      </div>
      <div class="peace-card p-5 text-center" style="background: linear-gradient(135deg, #f0f5ef, #d5e8d0);">
        <div class="font-display font-bold text-4xl">🌱</div>
        <div class="font-display font-bold text-3xl text-gray-800 mt-1">128</div>
        <div class="text-xs text-gray-500">30–90 Day Milestones</div>
      </div>
      <div class="peace-card p-5 text-center" style="background: linear-gradient(135deg, #f3eef8, #ddd0ed);">
        <div class="font-display font-bold text-4xl">🧠</div>
        <div class="font-display font-bold text-3xl text-gray-800 mt-1">93</div>
        <div class="text-xs text-gray-500">Mental Health Wins</div>
      </div>
      <div class="peace-card p-5 text-center" style="background: linear-gradient(135deg, #e8f7f5, #c0eae4);">
        <div class="font-display font-bold text-4xl">💙</div>
        <div class="font-display font-bold text-3xl text-gray-800 mt-1">300+</div>
        <div class="text-xs text-gray-500">All-Time Milestones</div>
      </div>
    </div>
  </div>
</section>

<!-- ── SUBMIT MILESTONE ── -->
<section class="py-16 px-4 band-clay">
  <div class="max-w-4xl mx-auto">
    <div class="peace-card p-8" style="background: linear-gradient(135deg, #fdf8f0, #fef9e7);">
      <div class="text-center mb-6">
        <div class="text-5xl mb-3">🎊</div>
        <h2 class="font-display text-3xl font-bold text-gray-800 mb-2">Share Your Milestone!</h2>
        <p class="text-gray-600">Tell us your win. Big or small — it all counts. We will cheer louder than you expect.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Your name</label>
          <input type="text" id="ms-name" class="peace-input" placeholder="Anonymous is okay! 🌸"/>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Your milestone 🏆</label>
          <input type="text" id="ms-milestone" class="peace-input" placeholder="e.g. 90 Days Sober, Started Therapy..."/>
        </div>
        <div class="md:col-span-2">
          <label class="block text-sm font-bold text-gray-700 mb-2">Tell us about it (optional)</label>
          <textarea id="ms-desc" class="peace-input" rows="3" placeholder="How does it feel? What got you here? What's next?"></textarea>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Category</label>
          <select id="ms-cat" class="peace-input">
            <option value="sobriety">🌱 Sobriety / Substances</option>
            <option value="mental-health">🧠 Mental Health</option>
            <option value="therapy">💬 Therapy / Treatment</option>
            <option value="daily">⭐ Daily Life Win</option>
            <option value="relationship">💞 Relationships</option>
            <option value="work">💼 Work / School</option>
            <option value="other">🌟 Other Achievement</option>
          </select>
        </div>
        <div class="flex items-end">
          <button onclick="submitMilestone()" class="btn-sage w-full py-3">
            🎉 Celebrate My Milestone!
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── MILESTONE FEED ── -->
<section class="py-16 px-4 bg-white">
  <div class="max-w-5xl mx-auto">
    <div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
      <h2 class="font-display text-3xl font-bold text-gray-800">Community Milestones 🎊</h2>
      <div class="flex gap-2 flex-wrap">
        <button onclick="filterMS('all')" class="filter-btn active" data-f="all">All</button>
        <button onclick="filterMS('sobriety')" class="filter-btn" data-f="sobriety">🌱 Sobriety</button>
        <button onclick="filterMS('mental-health')" class="filter-btn" data-f="mental-health">🧠 Mental Health</button>
        <button onclick="filterMS('daily')" class="filter-btn" data-f="daily">⭐ Daily Wins</button>
        <button onclick="filterMS('therapy')" class="filter-btn" data-f="therapy">💬 Therapy</button>
      </div>
    </div>

    <div id="ms-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <!-- Dynamic -->
    </div>
  </div>
</section>

<!-- ── SOBRIETY TRACKER ── -->
<section class="py-20 px-4 band-dusty">
  <div class="max-w-3xl mx-auto text-center">
    <div class="tag-pill mb-4">⏱️ Sobriety Tracker</div>
    <h2 class="font-display text-4xl font-bold text-gray-800 mb-4">Track Your Clean Time</h2>
    <p class="text-gray-600 mb-8">Enter your sober date and watch your days add up. Every single one matters.</p>

    <div class="peace-card p-8">
      <div class="mb-5">
        <label class="block text-sm font-bold text-gray-700 mb-2">Your clean/sober date:</label>
        <input type="date" id="sober-date" class="peace-input text-center" style="max-width: 240px; margin: 0 auto;"/>
      </div>
      <button onclick="calculateSobriety()" class="btn-primary px-8 py-3 mb-6">Calculate Days 🌱</button>

      <div id="sober-result" class="hidden">
        <div class="progress-bar mb-6" style="height:12px; border-radius:6px;"></div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div id="sober-days" class="font-display font-bold text-4xl" style="color:#d4713f;">0</div>
            <div class="text-sm text-gray-500">Days</div>
          </div>
          <div>
            <div id="sober-weeks" class="font-display font-bold text-4xl" style="color:#6a9e6f;">0</div>
            <div class="text-sm text-gray-500">Weeks</div>
          </div>
          <div>
            <div id="sober-months" class="font-display font-bold text-4xl" style="color:#a07fc8;">0</div>
            <div class="text-sm text-gray-500">Months</div>
          </div>
          <div>
            <div id="sober-hours" class="font-display font-bold text-4xl" style="color:#2ea097;">0</div>
            <div class="text-sm text-gray-500">Hours</div>
          </div>
        </div>
        <div id="sober-message" class="mt-6 font-display italic text-xl text-gray-700 p-4 rounded-xl" style="background: linear-gradient(135deg, #f0f5ef, #d5e8d0);">
        </div>
        <button onclick="shareTrackerMilestone()" class="btn-sage mt-4 px-8 py-2">
          🎉 Share This Milestone!
        </button>
      </div>
    </div>
  </div>
</section>

<style>
.filter-btn {
  padding: .4rem 1rem;
  border-radius: 9999px;
  border: 2px solid #d5e8d0;
  background: white;
  color: #4e7d54;
  font-size: .82rem;
  font-weight: 700;
  cursor: pointer;
  transition: background .2s;
  font-family: 'Nunito', sans-serif;
}
.filter-btn.active, .filter-btn:hover {
  background: #8ab88e;
  color: white;
  border-color: #8ab88e;
}
.ms-card {
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(168,120,80,.1);
  transition: transform .25s;
  position: relative;
  overflow: hidden;
}
.ms-card:hover { transform: translateY(-4px); }
</style>

<script>
const milestones = [
  { id:1, name:"Alex R.", avatar:"A", milestone:"1 Year Sober 🎉", desc:"One full year! I never thought I'd say that. I remember thinking 30 days was impossible. Now here I am.", date:"April 1, 2025", likes:89, cat:"sobriety", color:"#fdedb3", textColor:"#c68d00", bg:"linear-gradient(135deg,#fef9e7,#fdedb3)" },
  { id:2, name:"Devon K.", avatar:"D", milestone:"First Week of No Social Media 📱", desc:"Digital detox complete. My anxiety dropped SO much. Turns out the apps were feeding my anxiety more than anything.", date:"March 30, 2025", likes:23, cat:"mental-health", color:"#ddd0ed", textColor:"#5e3d88", bg:"linear-gradient(135deg,#f3eef8,#ddd0ed)" },
  { id:3, name:"Priya S.", avatar:"P", milestone:"90 Days Clean 💪", desc:"90 days. One day at a time. Still here. Still breathing. Still fighting.", date:"March 27, 2025", likes:71, cat:"sobriety", color:"#d5e8d0", textColor:"#4e7d54", bg:"linear-gradient(135deg,#f0f5ef,#d5e8d0)" },
  { id:4, name:"Chris B.", avatar:"C", milestone:"Started Therapy 🧠", desc:"Finally asked for help. It took a long time to get here but I did it. Braver than I thought.", date:"March 22, 2025", likes:55, cat:"therapy", color:"#c0eae4", textColor:"#1f7971", bg:"linear-gradient(135deg,#e8f7f5,#c0eae4)" },
  { id:5, name:"Sam O.", avatar:"S", milestone:"Got Out of Bed 5 Days in a Row ⭐", desc:"Sounds small. It wasn't. Depression makes this genuinely heroic. I'm proud of myself.", date:"March 20, 2025", likes:144, cat:"daily", color:"#f9dbc5", textColor:"#b55a2d", bg:"linear-gradient(135deg,#fdf3ec,#f9dbc5)" },
  { id:6, name:"Jordan P.", avatar:"J", milestone:"First Sober Holiday Season 🎄", desc:"Made it through Christmas and New Year's sober for the first time in 8 years. Cried happy tears on January 2nd.", date:"March 15, 2025", likes:98, cat:"sobriety", color:"#fdedb3", textColor:"#c68d00", bg:"linear-gradient(135deg,#fef9e7,#fdedb3)" },
];

let msFilter = 'all';

function getFiltered() {
  return msFilter === 'all' ? milestones : milestones.filter(m => m.cat === msFilter);
}

function renderMilestones() {
  const grid = document.getElementById('ms-grid');
  grid.innerHTML = getFiltered().map(m => \`
    <div class="ms-card" style="background:\${m.bg}; border: 1px solid \${m.color};">
      <div class="flex items-center gap-3 mb-3">
        <div class="avatar-circle" style="background:\${m.color}; color:\${m.textColor};">\${m.avatar}</div>
        <div>
          <div class="font-bold text-gray-800">\${m.name}</div>
          <div class="text-xs text-gray-400">\${m.date}</div>
        </div>
      </div>
      <h3 class="font-bold text-gray-800 text-lg mb-2">\${m.milestone}</h3>
      \${m.desc ? \`<p class="text-gray-600 text-sm leading-relaxed mb-4">\${m.desc}</p>\` : ''}
      <button class="like-btn \${m.liked ? 'liked' : ''}" onclick="likeMilestone(\${m.id}, this)">
        🎉 Celebrate! \${m.likes}
      </button>
    </div>
  \`).join('');
}

function filterMS(f) {
  msFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-f="' + f + '"]').classList.add('active');
  renderMilestones();
}

function likeMilestone(id, btn) {
  const m = milestones.find(m => m.id === id);
  if (m && !m.liked) { m.likes++; m.liked = true; renderMilestones(); showToast('🎉 Celebrating with them!'); }
}

function submitMilestone() {
  const name = document.getElementById('ms-name').value.trim() || 'Anonymous';
  const milestone = document.getElementById('ms-milestone').value.trim();
  const desc = document.getElementById('ms-desc').value.trim();
  const cat = document.getElementById('ms-cat').value;
  if (!milestone) { showToast('Tell us your milestone! 🎉'); return; }

  const combos = [
    {color:'#fdedb3',textColor:'#c68d00',bg:'linear-gradient(135deg,#fef9e7,#fdedb3)'},
    {color:'#d5e8d0',textColor:'#4e7d54',bg:'linear-gradient(135deg,#f0f5ef,#d5e8d0)'},
    {color:'#ddd0ed',textColor:'#5e3d88',bg:'linear-gradient(135deg,#f3eef8,#ddd0ed)'},
    {color:'#c0eae4',textColor:'#1f7971',bg:'linear-gradient(135deg,#e8f7f5,#c0eae4)'},
    {color:'#f9dbc5',textColor:'#b55a2d',bg:'linear-gradient(135deg,#fdf3ec,#f9dbc5)'},
  ];
  const c = combos[Math.floor(Math.random() * combos.length)];

  milestones.unshift({
    id: milestones.length + 1, name, avatar: name[0].toUpperCase(),
    milestone, desc, cat, ...c,
    date: new Date().toLocaleDateString('en-US', {year:'numeric', month:'long', day:'numeric'}),
    likes: 0, liked: false
  });

  document.getElementById('ms-name').value = '';
  document.getElementById('ms-milestone').value = '';
  document.getElementById('ms-desc').value = '';
  renderMilestones();
  window.scrollTo({ top: document.getElementById('ms-grid').offsetTop - 100, behavior: 'smooth' });
  showToast('🎊 Milestone shared! The community is celebrating with you! 🎉');
}

// Sobriety Calculator
function calculateSobriety() {
  const dateVal = document.getElementById('sober-date').value;
  if (!dateVal) { showToast('Please pick your date 💙'); return; }
  const start = new Date(dateVal);
  const now = new Date();
  if (start > now) { showToast('That date is in the future! 🌱'); return; }
  const diff = now - start;
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor(diff / (1000*60*60));
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30.44);

  document.getElementById('sober-days').textContent = days.toLocaleString();
  document.getElementById('sober-hours').textContent = hours.toLocaleString();
  document.getElementById('sober-weeks').textContent = weeks.toLocaleString();
  document.getElementById('sober-months').textContent = months.toLocaleString();

  let msg = '';
  if (days < 1) msg = "You just started. That first step is everything. 🌱";
  else if (days < 7) msg = "Your first week. Every hour is a victory. Keep going. 💙";
  else if (days < 30) msg = "You're building momentum. One day at a time. 🌿";
  else if (days < 90) msg = days + " days of choosing yourself. That is remarkable. 💪";
  else if (days < 365) msg = "Over " + months + " months. You are an inspiration. 🌟";
  else msg = "Over " + Math.floor(days/365) + " year(s). You absolute legend. 🏆 Crown. Now.";

  document.getElementById('sober-message').textContent = '"' + msg + '"';
  document.getElementById('sober-result').classList.remove('hidden');
}

function shareTrackerMilestone() {
  const days = document.getElementById('sober-days').textContent;
  const text = days + ' days of choosing peace. 🌱 — Finding Peace Community';
  if (navigator.share) {
    navigator.share({ text });
  } else {
    navigator.clipboard.writeText(text).then(() => showToast('📋 Milestone copied! Share it! 🎉'));
  }
}

renderMilestones();
</script>
`, '/milestones')
}
