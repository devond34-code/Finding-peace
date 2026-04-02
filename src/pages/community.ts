import { layout } from '../components/layout'

export function CommunityPage(): string {
  return layout('Community', `

<!-- ── HERO ── -->
<section class="band-dusty py-16 px-4 text-center relative overflow-hidden">
  <div class="peace-deco absolute top-6 left-6 text-7xl">🫂</div>
  <div class="peace-deco absolute bottom-4 right-8 text-6xl">💬</div>
  <div class="max-w-3xl mx-auto">
    <div class="tag-pill mb-4">💬 Community</div>
    <h1 class="font-display text-5xl md:text-6xl font-bold text-gray-800 mb-4">Your Safe Haven</h1>
    <p class="text-gray-600 text-xl max-w-2xl mx-auto">
      A judgment-free zone where you can talk, share, ask, and be heard. You belong here. 🌸
    </p>
  </div>
</section>

<!-- ── COMMUNITY GUIDELINES ── -->
<section class="py-10 px-4 bg-white border-b border-sage-100">
  <div class="max-w-4xl mx-auto">
    <div class="peace-card p-6" style="background: linear-gradient(135deg, #fef9e7, #f0f5ef);">
      <div class="flex items-start gap-4">
        <div class="text-4xl flex-shrink-0">🕊️</div>
        <div>
          <h3 class="font-bold text-gray-800 mb-2">Community Guidelines</h3>
          <div class="flex flex-wrap gap-3 text-sm text-gray-600">
            <span>✅ Be kind & supportive</span>
            <span>✅ No judgment, ever</span>
            <span>✅ Share freely, listen openly</span>
            <span>✅ Celebrate each other's wins</span>
            <span>❌ No unsolicited advice</span>
            <span>❌ No shaming or stigma</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── TABS ── -->
<section class="py-16 px-4 bg-white">
  <div class="max-w-5xl mx-auto">

    <!-- Tab nav -->
    <div class="flex gap-2 mb-8 flex-wrap">
      <button onclick="switchTab('share')" class="tab-btn active" data-tab="share">📝 Share Something</button>
      <button onclick="switchTab('feedback')" class="tab-btn" data-tab="feedback">💭 Ask for Feedback</button>
      <button onclick="switchTab('checkin')" class="tab-btn" data-tab="checkin">🌡️ Daily Check-In</button>
      <button onclick="switchTab('gratitude')" class="tab-btn" data-tab="gratitude">🌻 Gratitude Wall</button>
    </div>

    <!-- Share Tab -->
    <div id="tab-share" class="tab-content">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="font-display font-bold text-2xl text-gray-800 mb-4">What's on your mind?</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">This is your space. Vent, celebrate, reflect — no filter needed.</p>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Your name (or stay anonymous)</label>
              <input type="text" id="share-name" class="peace-input" placeholder="e.g. Jamie or Anonymous 🌸"/>
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">What's going on? 💙</label>
              <textarea id="share-text" class="peace-input" rows="5" placeholder="Share anything — a win, a struggle, a thought, a question..."></textarea>
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Feeling</label>
              <div class="flex flex-wrap gap-2">
                <button onclick="selectMood(this)" class="mood-btn" data-mood="😊 Grateful">😊 Grateful</button>
                <button onclick="selectMood(this)" class="mood-btn" data-mood="💪 Strong">💪 Strong</button>
                <button onclick="selectMood(this)" class="mood-btn" data-mood="😔 Struggling">😔 Struggling</button>
                <button onclick="selectMood(this)" class="mood-btn" data-mood="😤 Frustrated">😤 Frustrated</button>
                <button onclick="selectMood(this)" class="mood-btn" data-mood="🌟 Hopeful">🌟 Hopeful</button>
                <button onclick="selectMood(this)" class="mood-btn" data-mood="😴 Exhausted">😴 Exhausted</button>
              </div>
              <input type="hidden" id="share-mood" value=""/>
            </div>
            <button onclick="submitShare()" class="btn-primary w-full py-3">
              💙 Post to Community
            </button>
          </div>
        </div>
        <div>
          <h3 class="font-display font-bold text-xl text-gray-800 mb-4">Recent Posts</h3>
          <div id="community-feed" class="space-y-4 max-h-96 overflow-y-auto pr-2">
            <!-- Dynamic -->
          </div>
        </div>
      </div>
    </div>

    <!-- Feedback Tab -->
    <div id="tab-feedback" class="tab-content hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="font-display font-bold text-2xl text-gray-800 mb-4">Ask the Community</h3>
          <p class="text-gray-600 mb-6">Whether you need advice, a different perspective, or just someone to hear you — ask away.</p>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Your name</label>
              <input type="text" id="fb-name" class="peace-input" placeholder="Anonymous is okay 🌸"/>
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Your question or situation</label>
              <textarea id="fb-text" class="peace-input" rows="4" placeholder="e.g. 'I've been sober 3 months and I'm starting to feel complacent. Has anyone felt this way?'"></textarea>
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">What kind of support do you need?</label>
              <select id="fb-type" class="peace-input">
                <option value="advice">💡 Advice & suggestions</option>
                <option value="listen">👂 Just to be heard</option>
                <option value="experience">🎯 Similar experiences</option>
                <option value="resources">📚 Resources & info</option>
              </select>
            </div>
            <button onclick="submitFeedback()" class="btn-dusty w-full py-3">
              💭 Post Question
            </button>
          </div>
        </div>
        <div>
          <h3 class="font-display font-bold text-xl text-gray-800 mb-4">Recent Questions</h3>
          <div id="feedback-feed" class="space-y-4 max-h-96 overflow-y-auto pr-2">
          </div>
        </div>
      </div>
    </div>

    <!-- Check-In Tab -->
    <div id="tab-checkin" class="tab-content hidden">
      <div class="max-w-2xl mx-auto text-center">
        <h3 class="font-display font-bold text-2xl text-gray-800 mb-2">How are you today?</h3>
        <p class="text-gray-600 mb-8">A quick daily check-in. No pressure — just be honest with yourself.</p>

        <div class="peace-card p-8 mb-8">
          <p class="font-bold text-gray-700 mb-4">On a scale of 1–10, how are you feeling right now?</p>
          <div class="flex items-center gap-3 mb-6">
            <span class="text-sm text-gray-400">😔 1</span>
            <input type="range" id="mood-slider" min="1" max="10" value="5" class="flex-1 accent-clay-500" oninput="updateMoodLabel(this.value)"/>
            <span class="text-sm text-gray-400">10 🌟</span>
          </div>
          <div id="mood-label" class="font-display text-3xl font-bold mb-2" style="color:#e8924d;">5 — Hanging in there</div>
          <div id="mood-response" class="text-gray-600 italic text-sm">That's okay. Every day counts.</div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-8 text-left">
          <div class="peace-card p-5">
            <p class="font-bold text-sm text-gray-700 mb-2">One thing I'm grateful for today:</p>
            <input type="text" id="ci-grateful" class="peace-input text-sm" placeholder="Even something tiny counts..."/>
          </div>
          <div class="peace-card p-5">
            <p class="font-bold text-sm text-gray-700 mb-2">One intention I'm setting:</p>
            <input type="text" id="ci-intention" class="peace-input text-sm" placeholder="e.g. Be gentle with myself"/>
          </div>
        </div>

        <button onclick="submitCheckin()" class="btn-primary px-10 py-3">
          ✅ Complete Check-In
        </button>

        <!-- Streak -->
        <div class="mt-8 peace-card p-5" style="background: linear-gradient(135deg, #fef9e7, #fdedb3);">
          <div class="text-4xl mb-2">🔥</div>
          <p class="font-bold text-gray-800">Check-In Streak</p>
          <div id="streak-count" class="font-script text-4xl mt-1" style="color:#e8924d;">1 Day</div>
          <p class="text-sm text-gray-500 mt-1">Keep showing up. It matters.</p>
        </div>
      </div>
    </div>

    <!-- Gratitude Tab -->
    <div id="tab-gratitude" class="tab-content hidden">
      <div class="max-w-xl mx-auto text-center mb-10">
        <h3 class="font-display font-bold text-2xl text-gray-800 mb-2">Community Gratitude Wall 🌻</h3>
        <p class="text-gray-600">Share something you're grateful for today. Watch it bloom on our wall.</p>
      </div>

      <div class="max-w-xl mx-auto mb-8">
        <div class="peace-card p-6 flex gap-3">
          <input type="text" id="grat-text" class="peace-input" placeholder="I'm grateful for... 🌸"/>
          <button onclick="submitGratitude()" class="btn-sage flex-shrink-0">Add 🌻</button>
        </div>
      </div>

      <div id="gratitude-wall" class="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
        <!-- Dynamic -->
      </div>
    </div>
  </div>
</section>

<style>
.tab-btn {
  padding: .6rem 1.2rem;
  border-radius: 9999px;
  border: 2px solid #d5e8d0;
  background: white;
  color: #4e7d54;
  font-weight: 700;
  font-size: .9rem;
  cursor: pointer;
  transition: background .2s, color .2s;
  font-family: 'Nunito', sans-serif;
}
.tab-btn.active, .tab-btn:hover {
  background: #8ab88e;
  color: white;
  border-color: #8ab88e;
}
.mood-btn {
  padding: .35rem .85rem;
  border-radius: 9999px;
  border: 2px solid #d5e8d0;
  background: white;
  font-size: .82rem;
  font-weight: 600;
  cursor: pointer;
  transition: background .2s, border-color .2s;
  font-family: 'Nunito', sans-serif;
}
.mood-btn.selected {
  background: #d5e8d0;
  border-color: #8ab88e;
}
.community-post {
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 2px 12px rgba(0,0,0,.07);
}
.grat-pill {
  background: linear-gradient(135deg, #fef9e7, #fdedb3);
  border: 1px solid #f5c430;
  border-radius: 9999px;
  padding: .5rem 1.2rem;
  font-size: .88rem;
  font-weight: 600;
  color: #7a5c00;
  animation: popIn .4s ease;
}
@keyframes popIn {
  0% { transform: scale(0); opacity: 0; }
  70% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}
</style>

<script>
// ── TABS ──
function switchTab(tab) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.remove('hidden');
  document.querySelector('[data-tab="' + tab + '"]').classList.add('active');
}

// ── MOOD SELECT ──
function selectMood(btn) {
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('share-mood').value = btn.dataset.mood;
}

// ── COMMUNITY FEED ──
const posts = [
  { name: "Taylor R.", mood: "💪 Strong", text: "Day 60 today. I didn't think I'd make it this far. Thank you for this space. 💙", time: "2h ago" },
  { name: "Anonymous", mood: "😔 Struggling", text: "Really hard week. Work, relationships, old habits calling. Just need to say that out loud somewhere safe.", time: "4h ago" },
  { name: "Morgan K.", mood: "🌟 Hopeful", text: "Had my first therapy session today. Cried the whole time but also felt SO heard. Highly recommend.", time: "6h ago" },
];

function renderPosts() {
  const feed = document.getElementById('community-feed');
  feed.innerHTML = posts.map(p => \`
    <div class="community-post">
      <div class="flex items-center gap-2 mb-2">
        <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" style="background:#ddd0ed; color:#5e3d88;">\${p.name[0]}</div>
        <div>
          <div class="font-bold text-sm text-gray-800">\${p.name}</div>
          <div class="text-xs text-gray-400">\${p.time}</div>
        </div>
        <span class="ml-auto text-xs font-bold px-2 py-1 rounded-full" style="background:#f3eef8; color:#5e3d88;">\${p.mood}</span>
      </div>
      <p class="text-gray-600 text-sm leading-relaxed">\${p.text}</p>
    </div>
  \`).join('');
}

function submitShare() {
  const name = document.getElementById('share-name').value.trim() || 'Anonymous';
  const text = document.getElementById('share-text').value.trim();
  const mood = document.getElementById('share-mood').value || '💙 Present';
  if (!text) { showToast('Share something first 💙'); return; }
  posts.unshift({ name, mood, text, time: 'Just now' });
  renderPosts();
  document.getElementById('share-name').value = '';
  document.getElementById('share-text').value = '';
  document.getElementById('share-mood').value = '';
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
  showToast('💙 Your post has been shared. Thank you for being here.');
}

// ── FEEDBACK FEED ──
const feedbackPosts = [
  { name: "Alex S.", type: "experience", text: "Anyone else feel weird on weekends during early recovery? Like the structure disappears and I don't know what to do with myself.", time: "1h ago" },
  { name: "Sam W.", type: "advice", text: "How do you tell your family about your recovery without making it a whole thing? I want to be honest but also not make every dinner a therapy session.", time: "5h ago" },
];

function renderFeedback() {
  const feed = document.getElementById('feedback-feed');
  const typeLabels = { advice: '💡 Seeking advice', listen: '👂 Need to vent', experience: '🎯 Anyone relate?', resources: '📚 Need info' };
  feed.innerHTML = feedbackPosts.map(p => \`
    <div class="community-post">
      <div class="flex items-center gap-2 mb-2">
        <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" style="background:#c0eae4; color:#1f7971;">\${p.name[0]}</div>
        <div>
          <div class="font-bold text-sm text-gray-800">\${p.name}</div>
          <div class="text-xs text-gray-400">\${p.time}</div>
        </div>
        <span class="ml-auto text-xs font-bold px-2 py-1 rounded-full" style="background:#e8f7f5; color:#1f7971;">\${typeLabels[p.type] || '💬'}</span>
      </div>
      <p class="text-gray-600 text-sm leading-relaxed">\${p.text}</p>
    </div>
  \`).join('');
}

function submitFeedback() {
  const name = document.getElementById('fb-name').value.trim() || 'Anonymous';
  const text = document.getElementById('fb-text').value.trim();
  const type = document.getElementById('fb-type').value;
  if (!text) { showToast('Write your question first 💙'); return; }
  feedbackPosts.unshift({ name, text, type, time: 'Just now' });
  renderFeedback();
  document.getElementById('fb-name').value = '';
  document.getElementById('fb-text').value = '';
  showToast('💭 Your question was posted. You\'re not alone. 💙');
}

// ── CHECK-IN ──
const moodMap = {
  1: '1 — Really rough', 2: '2 — Really rough', 3: '3 — Pretty hard',
  4: '4 — Hard day', 5: '5 — Hanging in there', 6: '6 — Okay-ish',
  7: '7 — Pretty good', 8: '8 — Good day!', 9: '9 — Really good!', 10: '10 — Amazing! 🌟'
};
const moodResponses = {
  1: "You\'re still here. That\'s everything. 💙", 2: "You\'re still here. That\'s everything. 💙",
  3: "Hard days are part of the journey. You\'re not failing.", 4: "You showed up today. That counts.",
  5: "That\'s okay. Every day counts.", 6: "Better than nothing! Keep going.",
  7: "Nice! You\'re doing great.", 8: "Look at you! Keep riding that wave. 🌊",
  9: "That\'s beautiful. Soak it in. ✨", 10: "YES! Celebrate this day! 🎉"
};

function updateMoodLabel(val) {
  document.getElementById('mood-label').textContent = moodMap[val];
  document.getElementById('mood-response').textContent = moodResponses[val];
  const colors = ['','#e05a5a','#e05a5a','#e8924d','#e8924d','#e8a800','#e8a800','#6a9e6f','#6a9e6f','#2ea097','#2ea097'];
  document.getElementById('mood-label').style.color = colors[val];
}

let streak = parseInt(localStorage.getItem('checkin-streak') || '0');
function submitCheckin() {
  streak++;
  localStorage.setItem('checkin-streak', streak);
  document.getElementById('streak-count').textContent = streak + (streak === 1 ? ' Day' : ' Days');
  showToast('✅ Check-in complete! You showed up today. 💙');
}

// ── GRATITUDE ──
const gratitudes = ['My morning coffee ☕', 'My dog\'s face 🐶', 'Making it to day 30 🌱', 'A kind text from a friend 💙', 'The sun today ☀️'];

function renderGratitude() {
  document.getElementById('gratitude-wall').innerHTML = gratitudes.map(g =>
    \`<div class="grat-pill">🌻 \${g}</div>\`
  ).join('');
}

function submitGratitude() {
  const text = document.getElementById('grat-text').value.trim();
  if (!text) return;
  gratitudes.unshift(text);
  renderGratitude();
  document.getElementById('grat-text').value = '';
  showToast('🌻 Added to the gratitude wall!');
}

// Init
renderPosts();
renderFeedback();
renderGratitude();
streak = parseInt(localStorage.getItem('checkin-streak') || '1');
document.getElementById('streak-count').textContent = streak + (streak === 1 ? ' Day' : ' Days');
</script>
`, '/community')
}
