import { layout } from '../components/layout'

export function ResourcesPage(): string {
  return layout('Resources', `

<!-- ── HERO ── -->
<section class="band-teal py-16 px-4 text-center relative overflow-hidden">
  <div class="peace-deco absolute top-6 left-8 text-7xl">🌿</div>
  <div class="peace-deco absolute bottom-4 right-8 text-6xl">📚</div>
  <div class="max-w-3xl mx-auto">
    <div class="tag-pill mb-4">🌿 Resources</div>
    <h1 class="font-display text-5xl md:text-6xl font-bold text-gray-800 mb-4">Help Is Here.</h1>
    <p class="text-gray-600 text-xl max-w-2xl mx-auto">
      Curated resources for mental health and addiction recovery. Because knowing where to go is the first step. 💙
    </p>
  </div>
</section>

<!-- ── CRISIS BANNER ── -->
<section class="py-6 px-4" style="background: linear-gradient(135deg, #e05a5a, #c03030);">
  <div class="max-w-4xl mx-auto text-center text-white">
    <p class="font-bold text-lg">🆘 If you are in crisis right now:</p>
    <div class="flex flex-wrap gap-4 justify-center mt-3 text-sm font-bold">
      <a href="tel:988" class="bg-white text-red-600 px-5 py-2 rounded-full hover:bg-red-50 transition-colors">📞 Call or Text 988</a>
      <a href="sms:741741?body=HOME" class="bg-white text-red-600 px-5 py-2 rounded-full hover:bg-red-50 transition-colors">💬 Text HOME to 741741</a>
      <a href="tel:911" class="bg-white text-red-600 px-5 py-2 rounded-full hover:bg-red-50 transition-colors">🚨 Call 911</a>
    </div>
  </div>
</section>

<!-- ── RESOURCE TABS ── -->
<section class="py-16 px-4 bg-white">
  <div class="max-w-6xl mx-auto">

    <!-- Search -->
    <div class="max-w-lg mx-auto mb-8">
      <div class="relative">
        <input type="text" id="resource-search" class="peace-input pl-10" placeholder="Search resources..." oninput="searchResources(this.value)"/>
        <span class="absolute left-3 top-3.5 text-gray-400">🔍</span>
      </div>
    </div>

    <!-- Category Nav -->
    <div class="flex flex-wrap gap-2 justify-center mb-10">
      <button onclick="showCat('crisis')" class="res-cat-btn active" data-cat="crisis">🆘 Crisis</button>
      <button onclick="showCat('recovery')" class="res-cat-btn" data-cat="recovery">🌱 Recovery & Sobriety</button>
      <button onclick="showCat('mental')" class="res-cat-btn" data-cat="mental">🧠 Mental Health</button>
      <button onclick="showCat('therapy')" class="res-cat-btn" data-cat="therapy">💬 Find Therapy</button>
      <button onclick="showCat('apps')" class="res-cat-btn" data-cat="apps">📱 Apps & Tools</button>
      <button onclick="showCat('books')" class="res-cat-btn" data-cat="books">📚 Books & Reading</button>
      <button onclick="showCat('community')" class="res-cat-btn" data-cat="community">🫂 Online Community</button>
    </div>

    <div id="resource-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <!-- Dynamic -->
    </div>
  </div>
</section>

<!-- ── SUGGEST A RESOURCE ── -->
<section class="py-16 px-4 band-sage">
  <div class="max-w-2xl mx-auto text-center">
    <div class="tag-pill mb-4">💡 Know a Resource?</div>
    <h2 class="font-display text-3xl font-bold text-gray-800 mb-4">Suggest a Resource</h2>
    <p class="text-gray-600 mb-8">Has something helped you? Share it so it can help someone else.</p>

    <div class="peace-card p-8 text-left">
      <div class="grid grid-cols-1 gap-4">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Resource Name</label>
          <input type="text" id="suggest-name" class="peace-input" placeholder="e.g. SMART Recovery"/>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">URL (optional)</label>
          <input type="url" id="suggest-url" class="peace-input" placeholder="https://..."/>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Why it helped you</label>
          <textarea id="suggest-why" class="peace-input" rows="3" placeholder="Tell us how this resource made a difference..."></textarea>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Category</label>
          <select id="suggest-cat" class="peace-input">
            <option>Crisis Support</option>
            <option>Recovery & Sobriety</option>
            <option>Mental Health</option>
            <option>Find Therapy</option>
            <option>Apps & Tools</option>
            <option>Books</option>
            <option>Online Community</option>
          </select>
        </div>
        <button onclick="submitSuggestion()" class="btn-sage py-3">
          🌿 Submit Suggestion
        </button>
      </div>
    </div>
  </div>
</section>

<style>
.res-cat-btn {
  padding: .5rem 1.2rem;
  border-radius: 9999px;
  border: 2px solid #c0eae4;
  background: white;
  color: #1f7971;
  font-size: .85rem;
  font-weight: 700;
  cursor: pointer;
  transition: background .2s;
  font-family: 'Nunito', sans-serif;
}
.res-cat-btn.active, .res-cat-btn:hover {
  background: #4fbdb3;
  color: white;
  border-color: #4fbdb3;
}
.res-card {
  border-radius: 1.25rem;
  padding: 1.5rem;
  transition: transform .25s, box-shadow .25s;
  box-shadow: 0 3px 16px rgba(0,0,0,.08);
}
.res-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0,0,0,.13);
}
</style>

<script>
const resources = [
  // Crisis
  { cat:"crisis", icon:"📞", name:"988 Suicide & Crisis Lifeline", desc:"Call or text 988. Free, confidential crisis support 24/7. For anyone in mental or emotional distress.", url:"https://988lifeline.org", tag:"Free • 24/7 • Call/Text", tagColor:"#e05a5a", bg:"#fff5f5" },
  { cat:"crisis", icon:"💬", name:"Crisis Text Line", desc:"Text HOME to 741741. Free 24/7 crisis counseling via text message. Confidential and available now.", url:"https://www.crisistextline.org", tag:"Free • 24/7 • Text", tagColor:"#e05a5a", bg:"#fff5f5" },
  { cat:"crisis", icon:"🏥", name:"SAMHSA National Helpline", desc:"1-800-662-4357. Free, confidential treatment referrals and information service. 24/7.", url:"https://www.samhsa.gov/find-help/national-helpline", tag:"Free • 24/7 • Phone", tagColor:"#e05a5a", bg:"#fff5f5" },
  { cat:"crisis", icon:"🌐", name:"NAMI Helpline", desc:"1-800-950-6264. National Alliance on Mental Illness helpline. Mon–Fri, 10am–10pm ET.", url:"https://www.nami.org/help", tag:"Free • Phone & Chat", tagColor:"#e05a5a", bg:"#fff5f5" },
  // Recovery
  { cat:"recovery", icon:"🌿", name:"Alcoholics Anonymous (AA)", desc:"12-step program for alcohol use disorder. Find local meetings and online meetings worldwide.", url:"https://www.aa.org", tag:"Free • In-Person & Online", tagColor:"#4e7d54", bg:"#f0f5ef" },
  { cat:"recovery", icon:"🌱", name:"Narcotics Anonymous (NA)", desc:"12-step program for drug addiction. Global network of in-person and virtual recovery meetings.", url:"https://na.org", tag:"Free • In-Person & Online", tagColor:"#4e7d54", bg:"#f0f5ef" },
  { cat:"recovery", icon:"🔬", name:"SMART Recovery", desc:"Science-based alternative to 12-step programs. Tools and meetings for self-empowered recovery.", url:"https://www.smartrecovery.org", tag:"Free • Evidence-Based", tagColor:"#4e7d54", bg:"#f0f5ef" },
  { cat:"recovery", icon:"🏠", name:"Substance Abuse Treatment Locator", desc:"Find local treatment centers, support groups, and counselors in your area. SAMHSA tool.", url:"https://findtreatment.gov", tag:"Free • Treatment Finder", tagColor:"#4e7d54", bg:"#f0f5ef" },
  { cat:"recovery", icon:"💊", name:"Medication-Assisted Treatment Info", desc:"Learn about MAT options like Suboxone and methadone. Stigma-free, medically accurate info.", url:"https://www.samhsa.gov/medications-substance-use-disorders", tag:"Educational • Free", tagColor:"#4e7d54", bg:"#f0f5ef" },
  // Mental Health
  { cat:"mental", icon:"🧠", name:"NAMI — Mental Health Info", desc:"Comprehensive information on mental health conditions, treatments, and how to support loved ones.", url:"https://www.nami.org", tag:"Free • Educational", tagColor:"#5e3d88", bg:"#f3eef8" },
  { cat:"mental", icon:"😰", name:"Anxiety & Depression Association", desc:"Resources, therapist finder, and self-help tools specifically for anxiety and depression.", url:"https://adaa.org", tag:"Free • Self-Help Tools", tagColor:"#5e3d88", bg:"#f3eef8" },
  { cat:"mental", icon:"💙", name:"MentalHealth.gov", desc:"US government resource hub for mental health information, finding help, and emergency resources.", url:"https://www.mentalhealth.gov", tag:"Free • Government Resource", tagColor:"#5e3d88", bg:"#f3eef8" },
  // Therapy
  { cat:"therapy", icon:"🔍", name:"Psychology Today Therapist Finder", desc:"Search by location, specialty, insurance, and more. Find a therapist that fits your needs.", url:"https://www.psychologytoday.com/us/therapists", tag:"Free to Search", tagColor:"#1f7971", bg:"#e8f7f5" },
  { cat:"therapy", icon:"💻", name:"Open Path Collective", desc:"Affordable therapy ($30–$80/session) for those without insurance. Sliding scale options.", url:"https://openpathcollective.org", tag:"Low-Cost • Sliding Scale", tagColor:"#1f7971", bg:"#e8f7f5" },
  { cat:"therapy", icon:"📱", name:"BetterHelp", desc:"Online therapy with licensed counselors. Accessible from anywhere via app, phone, or video.", url:"https://www.betterhelp.com", tag:"Online • Paid (financial aid available)", tagColor:"#1f7971", bg:"#e8f7f5" },
  { cat:"therapy", icon:"🆓", name:"Community Mental Health Centers", desc:"Federally-funded centers offer services on a sliding fee scale. Find one near you.", url:"https://www.samhsa.gov/find-help/national-helpline", tag:"Free / Sliding Scale • In-Person", tagColor:"#1f7971", bg:"#e8f7f5" },
  // Apps
  { cat:"apps", icon:"📱", name:"Sober Grid", desc:"Social network and tracking app for people in recovery. Connect with others, track your days.", url:"https://sobergrid.com", tag:"Free App • iOS & Android", tagColor:"#c68d00", bg:"#fef9e7" },
  { cat:"apps", icon:"🧘", name:"Headspace", desc:"Guided meditation and mindfulness. Excellent for anxiety management and building calm routines.", url:"https://www.headspace.com", tag:"Free Trial • Paid App", tagColor:"#c68d00", bg:"#fef9e7" },
  { cat:"apps", icon:"📖", name:"Woebot", desc:"AI-powered mental health chatbot using CBT techniques. Immediate support available 24/7.", url:"https://woebothealth.com", tag:"Free • AI Support", tagColor:"#c68d00", bg:"#fef9e7" },
  { cat:"apps", icon:"🌊", name:"Calm", desc:"Sleep, meditation, and relaxation app. Helpful for anxiety, stress, and sleep issues.", url:"https://www.calm.com", tag:"Free Trial • Paid App", tagColor:"#c68d00", bg:"#fef9e7" },
  { cat:"apps", icon:"📊", name:"I Am Sober", desc:"Sobriety counter and daily pledge app. Track your milestones and connect with a community.", url:"https://iamsober.com", tag:"Free App • Milestone Tracker", tagColor:"#c68d00", bg:"#fef9e7" },
  // Books
  { cat:"books", icon:"📚", name:"In the Realm of Hungry Ghosts", desc:"By Gabor Maté. A compassionate exploration of addiction through the stories of deeply addicted people.", url:"https://www.amazon.com/Realm-Hungry-Ghosts-Encounters-Addiction/dp/1556439261", tag:"Book • Addiction Science", tagColor:"#b55a2d", bg:"#fdf3ec" },
  { cat:"books", icon:"📖", name:"Beautiful Boy", desc:"By David Sheff. A father's memoir of his son's addiction. Heartbreaking and hopeful. A must-read.", url:"https://www.amazon.com/Beautiful-Boy-Fathers-Journey-Addiction/dp/0547203888", tag:"Memoir • Addiction", tagColor:"#b55a2d", bg:"#fdf3ec" },
  { cat:"books", icon:"📗", name:"The Body Keeps the Score", desc:"By Bessel van der Kolk. How trauma affects the body and mind — and the path to healing.", url:"https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748", tag:"Book • Trauma & Healing", tagColor:"#b55a2d", bg:"#fdf3ec" },
  { cat:"books", icon:"📘", name:"This Naked Mind", desc:"By Annie Grace. A refreshing, non-judgmental approach to questioning your relationship with alcohol.", url:"https://www.amazon.com/This-Naked-Mind-Alcohol-Unconscious/dp/0525537740", tag:"Book • Alcohol Recovery", tagColor:"#b55a2d", bg:"#fdf3ec" },
  // Community
  { cat:"community", icon:"🤝", name:"r/stopdrinking", desc:"Reddit's supportive community for those reducing or stopping alcohol. 500K+ members, zero judgment.", url:"https://www.reddit.com/r/stopdrinking/", tag:"Free • Online Community", tagColor:"#2ea097", bg:"#e8f7f5" },
  { cat:"community", icon:"💬", name:"r/mentalhealth", desc:"Reddit community for mental health support and discussion. Compassionate and supportive space.", url:"https://www.reddit.com/r/mentalhealth/", tag:"Free • Online Community", tagColor:"#2ea097", bg:"#e8f7f5" },
  { cat:"community", icon:"🌍", name:"In the Rooms", desc:"Free online recovery meetings for addiction and mental health. 100+ meetings daily.", url:"https://www.intherooms.com", tag:"Free • Virtual Meetings", tagColor:"#2ea097", bg:"#e8f7f5" },
  { cat:"community", icon:"📱", name:"TikTok #MentalHealth Community", desc:"A growing community of creators sharing real mental health journeys — including Finding Peace! 💙", url:"https://www.tiktok.com/tag/mentalhealth", tag:"Free • Social Media", tagColor:"#2ea097", bg:"#e8f7f5" },
];

let currentCat = 'crisis';
let searchTerm = '';

function getFiltered() {
  return resources.filter(r => {
    const matchesCat = currentCat === 'all' || r.cat === currentCat;
    const matchesSearch = !searchTerm || r.name.toLowerCase().includes(searchTerm) || r.desc.toLowerCase().includes(searchTerm);
    return matchesCat && matchesSearch;
  });
}

function renderResources() {
  const grid = document.getElementById('resource-grid');
  const filtered = getFiltered();
  if (!filtered.length) {
    grid.innerHTML = '<div class="col-span-3 text-center py-12 text-gray-500">No resources found. Try a different search. 💙</div>';
    return;
  }
  grid.innerHTML = filtered.map(r => \`
    <div class="res-card" style="background:\${r.bg};">
      <div class="text-4xl mb-3">\${r.icon}</div>
      <h3 class="font-bold text-gray-800 text-lg mb-2">\${r.name}</h3>
      <p class="text-gray-600 text-sm leading-relaxed mb-4">\${r.desc}</p>
      <div class="flex items-center justify-between flex-wrap gap-2">
        <span class="text-xs font-bold px-3 py-1 rounded-full text-white" style="background:\${r.tagColor};">\${r.tag}</span>
        <a href="\${r.url}" target="_blank" rel="noopener noreferrer" class="text-sm font-bold hover:underline" style="color:\${r.tagColor};">
          Visit →
        </a>
      </div>
    </div>
  \`).join('');
}

function showCat(cat) {
  currentCat = cat;
  document.querySelectorAll('.res-cat-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-cat="' + cat + '"]').classList.add('active');
  renderResources();
}

function searchResources(val) {
  searchTerm = val.toLowerCase();
  if (val) currentCat = 'all';
  renderResources();
}

function submitSuggestion() {
  const name = document.getElementById('suggest-name').value.trim();
  if (!name) { showToast('Please enter a resource name 💙'); return; }
  document.getElementById('suggest-name').value = '';
  document.getElementById('suggest-url').value = '';
  document.getElementById('suggest-why').value = '';
  showToast('💙 Thank you for your suggestion! We\'ll review it soon.');
}

renderResources();
</script>
`, '/resources')
}
