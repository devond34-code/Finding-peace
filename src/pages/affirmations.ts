import { Layout } from '../components/layout'
export function AffirmationsPage(): string {
  return Layout('Daily Affirmations', `
<section class="band-gold py-16 px-4 text-center relative overflow-hidden">
  <div class="peace-deco absolute top-4 left-8 text-7xl">&#10024;</div>
  <div class="peace-deco absolute bottom-4 right-8 text-6xl">&#127800;</div>
  <div class="max-w-3xl mx-auto">
    <div class="tag-pill mb-4">&#10024; Daily Affirmations</div>
    <h1 class="font-display text-5xl md:text-6xl font-bold text-gray-800 mb-4">Funny. Honest. Healing.</h1>
    <p class="text-gray-600 text-xl max-w-xl mx-auto">Because sometimes you need a laugh AND a truth bomb at the same time. &#128514;&#128153;</p>
  </div>
</section>

<section class="py-20 px-4 bg-white">
  <div class="max-w-2xl mx-auto text-center">
    <div class="tag-pill mb-6">&#127922; Affirmation Generator</div>
    <h2 class="font-display text-3xl font-bold text-gray-800 mb-8">Today's Affirmation</h2>
    <div id="aff-card" class="peace-card p-10 mb-8 cursor-pointer relative" onclick="getNewAffirmation()" style="background:linear-gradient(135deg,#fef9e7,#f0f5ef);">
      <div class="absolute top-4 right-4 text-xs text-gray-400 font-bold uppercase tracking-widest">Click to refresh</div>
      <div id="aff-emoji" class="text-7xl mb-6">&#127800;</div>
      <p id="aff-text" class="font-display text-2xl md:text-3xl italic text-gray-800 leading-relaxed mb-6">"I am doing the best I can, and my best is more than enough."</p>
      <div id="aff-category" class="tag-pill">&#127807; Self-Compassion</div>
    </div>
    <div class="flex flex-wrap gap-3 justify-center mb-8">
      <button onclick="getNewAffirmation()" class="btn-primary">&#10024; New Affirmation</button>
      <button onclick="shareAffirmation()" class="btn-sage">&#128228; Share This</button>
      <button onclick="copyAffirmation()" class="btn-dusty">&#128203; Copy</button>
    </div>
    <div class="flex flex-wrap gap-2 justify-center">
      <span class="text-sm text-gray-500 self-center mr-2">Filter by:</span>
      <button onclick="filterAffirmations('all')" class="filter-btn active" data-cat="all">All</button>
      <button onclick="filterAffirmations('recovery')" class="filter-btn" data-cat="recovery">&#127807; Recovery</button>
      <button onclick="filterAffirmations('funny')" class="filter-btn" data-cat="funny">&#128514; Funny</button>
      <button onclick="filterAffirmations('anxiety')" class="filter-btn" data-cat="anxiety">&#129504; Anxiety</button>
      <button onclick="filterAffirmations('self-love')" class="filter-btn" data-cat="self-love">&#128153; Self-Love</button>
    </div>
  </div>
</section>

<section class="py-20 px-4 band-clay">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <div class="tag-pill mb-3">&#129531; Affirmation Wall</div>
      <h2 class="font-display text-4xl font-bold text-gray-800 mb-3">All Affirmations</h2>
      <p class="text-gray-600">Save your favorites, share them, screenshot them. They're yours. &#128153;</p>
    </div>
    <div id="aff-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
  </div>
</section>

<section class="py-20 px-4 band-sage">
  <div class="max-w-2xl mx-auto text-center">
    <div class="tag-pill mb-4">&#128221; Community Affirmations</div>
    <h2 class="font-display text-3xl font-bold text-gray-800 mb-4">Write Your Own</h2>
    <p class="text-gray-600 mb-8">Have an affirmation that got you through? Share it with the community.</p>
    <div class="peace-card p-8 text-left">
      <div class="mb-5"><label class="block text-sm font-bold text-gray-700 mb-2">Your Affirmation</label><textarea id="custom-aff" class="peace-input" rows="3" placeholder="e.g. I survived yesterday so I can try again today"></textarea></div>
      <div class="mb-5"><label class="block text-sm font-bold text-gray-700 mb-2">Category</label><select id="custom-cat" class="peace-input"><option value="recovery">&#127807; Recovery</option><option value="funny">&#128514; Funny</option><option value="anxiety">&#129504; Anxiety</option><option value="self-love">&#128153; Self-Love</option></select></div>
      <button onclick="submitAffirmation()" class="btn-primary w-full py-3">&#128153; Add to the Wall</button>
    </div>
  </div>
</section>

<section class="py-16 px-4 text-center" style="background:linear-gradient(135deg,#1a1a2e,#16213e);">
  <div class="max-w-xl mx-auto text-white">
    <p class="text-gray-400 mb-3 uppercase tracking-widest text-sm font-bold">Want more?</p>
    <h2 class="font-display text-3xl font-bold mb-4">New Affirmations Daily on TikTok</h2>
    <p class="text-gray-400 mb-6">Follow along for video affirmations that hit different.</p>
    <a href="https://www.tiktok.com/@findingpeace" target="_blank" class="tiktok-btn text-base px-8 py-3"><i class="fab fa-tiktok"></i> @FindingPeace on TikTok</a>
  </div>
</section>

<style>
.filter-btn { padding:.4rem 1rem; border-radius:9999px; border:2px solid #fdedb3; background:white; color:#c68d00; font-size:.82rem; font-weight:700; cursor:pointer; transition:background .2s; font-family:'Nunito',sans-serif; }
.filter-btn.active, .filter-btn:hover { background:#f5c430; color:#7a5c00; border-color:#f5c430; }
</style>

<script>
const allAffs = [
  { text:"I am doing the best I can, and my best is more than enough.", emoji:"&#127800;", cat:"self-love" },
  { text:"Recovery is not linear, and neither is my Wi-Fi, but here we are, still connected.", emoji:"&#128514;", cat:"funny" },
  { text:"I chose myself today. That is the whole win.", emoji:"&#128170;", cat:"self-love" },
  { text:"My healing does not have an expiration date.", emoji:"&#9203;", cat:"recovery" },
  { text:"Bad days do not cancel good futures.", emoji:"&#127749;", cat:"anxiety" },
  { text:"I am allowed to be a work in progress AND still love myself.", emoji:"&#128736;", cat:"self-love" },
  { text:"I did not survive this far to only survive this far.", emoji:"&#128293;", cat:"recovery" },
  { text:"Today I will be gentle with myself like I would be with someone I love.", emoji:"&#128153;", cat:"self-love" },
  { text:"My story is not over. The best plot twist is yet to come.", emoji:"&#128218;", cat:"recovery" },
  { text:"Asking for help is a superpower, not a weakness.", emoji:"&#129464;", cat:"recovery" },
  { text:"I am worthy of peace. Full stop. No asterisks.", emoji:"&#9774;", cat:"self-love" },
  { text:"Some days just getting out of bed IS the victory. Crown, please.", emoji:"&#128514;", cat:"funny" },
  { text:"My anxiety lied to me again. Plot twist: I survived anyway.", emoji:"&#128548;", cat:"anxiety" },
  { text:"I am not my worst day. I am every good choice I have ever made too.", emoji:"&#9878;", cat:"recovery" },
  { text:"Sobriety looks good on me. So does pajamas. Both valid.", emoji:"&#128514;", cat:"funny" },
  { text:"I release what I cannot control. Mostly. I am working on it.", emoji:"&#127880;", cat:"anxiety" },
  { text:"The version of me fighting to heal is the most courageous person I know.", emoji:"&#129409;", cat:"recovery" },
  { text:"I do not need to earn rest. I just need to rest.", emoji:"&#127769;", cat:"anxiety" },
  { text:"My brain is doing its best with limited data and a lot of old trauma. Valid.", emoji:"&#129504;", cat:"funny" },
  { text:"One day, one hour, one minute at a time. Today, I choose one more minute.", emoji:"&#9201;", cat:"recovery" },
  { text:"I am healing even when it does not feel like it. Especially then.", emoji:"&#127807;", cat:"recovery" },
  { text:"I am allowed to change my mind, my path, and my whole life.", emoji:"&#129419;", cat:"self-love" },
  { text:"My past is a chapter, not the whole book.", emoji:"&#128218;", cat:"self-love" },
];
const catNames = { all:'All', recovery:'&#127807; Recovery', funny:'&#128514; Funny', anxiety:'&#129504; Anxiety', 'self-love':'&#128153; Self-Love' };
let currentFilter = 'all';
let currentIndex = 0;

function getFiltered() { return currentFilter === 'all' ? allAffs : allAffs.filter(a => a.cat === currentFilter); }

function getNewAffirmation() {
  const filtered = getFiltered();
  let next = Math.floor(Math.random() * filtered.length);
  while (next === currentIndex && filtered.length > 1) next = Math.floor(Math.random() * filtered.length);
  currentIndex = next;
  const a = filtered[next];
  const card = document.getElementById('aff-card');
  card.style.opacity = '0';
  setTimeout(() => {
    document.getElementById('aff-emoji').innerHTML = a.emoji;
    document.getElementById('aff-text').textContent = '"' + a.text + '"';
    document.getElementById('aff-category').innerHTML = catNames[a.cat];
    card.style.opacity = '1'; card.style.transition = 'opacity 0.4s';
  }, 300);
}

function filterAffirmations(cat) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-cat="' + cat + '"]').classList.add('active');
  getNewAffirmation(); renderGrid();
}

function shareAffirmation() {
  const text = document.getElementById('aff-text').textContent;
  if (navigator.share) navigator.share({ text: text + ' — Finding Peace' });
  else { copyAffirmation(); showToast('Affirmation copied! Ready to share.'); }
}

function copyAffirmation() {
  const text = document.getElementById('aff-text').textContent + ' — Finding Peace';
  navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard!'));
}

function submitAffirmation() {
  const text = document.getElementById('custom-aff').value.trim();
  const cat = document.getElementById('custom-cat').value;
  if (!text) { showToast('Please write your affirmation first'); return; }
  const emojis = { recovery:'&#127807;', funny:'&#128514;', anxiety:'&#129504;', 'self-love':'&#128153;' };
  allAffs.unshift({ text, emoji: emojis[cat], cat });
  document.getElementById('custom-aff').value = '';
  renderGrid();
  showToast('Your affirmation was added to the wall! Thank you!');
}

function renderGrid() {
  const grid = document.getElementById('aff-grid');
  const filtered = getFiltered();
  const colors = [
    { bg:'#fef9e7', border:'#f5c430' }, { bg:'#f0f5ef', border:'#8ab88e' },
    { bg:'#f3eef8', border:'#a07fc8' }, { bg:'#e8f7f5', border:'#4fbdb3' },
    { bg:'#fdf3ec', border:'#e8924d' },
  ];
  grid.innerHTML = filtered.map((a, i) => {
    const c = colors[i % colors.length];
    const idx = allAffs.indexOf(a);
    return '<div class="peace-card p-6 cursor-pointer" style="background:' + c.bg + '; border-left:4px solid ' + c.border + ';" onclick="setAffirmation(' + idx + ')">' +
      '<div class="text-3xl mb-3">' + a.emoji + '</div>' +
      '<p class="font-display italic text-gray-700 text-base leading-relaxed mb-3">"' + a.text + '"</p>' +
      '<div class="flex items-center justify-between">' +
      '<span class="tag-pill text-xs">' + catNames[a.cat] + '</span>' +
      '</div></div>';
  }).join('');
}

function setAffirmation(idx) {
  currentIndex = idx;
  const a = allAffs[idx];
  document.getElementById('aff-emoji').innerHTML = a.emoji;
  document.getElementById('aff-text').textContent = '"' + a.text + '"';
  document.getElementById('aff-category').innerHTML = catNames[a.cat];
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

renderGrid();
</script>
`, '/affirmations')
}
