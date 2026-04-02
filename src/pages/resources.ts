import { Layout } from '../components/layout'
export function ResourcesPage(): string {
  return Layout('Resources', `
<section class="band-teal py-16 px-4 text-center relative overflow-hidden">
  <div class="peace-deco absolute top-6 left-8 text-7xl">&#127807;</div>
  <div class="peace-deco absolute bottom-4 right-8 text-6xl">&#128218;</div>
  <div class="max-w-3xl mx-auto">
    <div class="tag-pill mb-4">&#127807; Resources</div>
    <h1 class="font-display text-5xl md:text-6xl font-bold text-gray-800 mb-4">Help Is Here.</h1>
    <p class="text-gray-600 text-xl max-w-2xl mx-auto">Curated resources for mental health and addiction recovery. Knowing where to go is the first step. &#128153;</p>
  </div>
</section>

<section class="py-6 px-4" style="background:linear-gradient(135deg,#e05a5a,#c03030);">
  <div class="max-w-4xl mx-auto text-center text-white">
    <p class="font-bold text-lg">&#128314; If you are in crisis right now:</p>
    <div class="flex flex-wrap gap-4 justify-center mt-3 text-sm font-bold">
      <a href="tel:988" class="bg-white text-red-600 px-5 py-2 rounded-full hover:bg-red-50 transition-colors">&#128222; Call or Text 988</a>
      <a href="sms:741741?body=HOME" class="bg-white text-red-600 px-5 py-2 rounded-full hover:bg-red-50 transition-colors">&#128172; Text HOME to 741741</a>
      <a href="tel:911" class="bg-white text-red-600 px-5 py-2 rounded-full hover:bg-red-50 transition-colors">&#128680; Call 911</a>
    </div>
  </div>
</section>

<section class="py-16 px-4 bg-white">
  <div class="max-w-6xl mx-auto">
    <div class="max-w-lg mx-auto mb-8">
      <div class="relative"><input type="text" id="resource-search" class="peace-input pl-10" placeholder="Search resources..." oninput="searchResources(this.value)"/><span class="absolute left-3 top-3.5 text-gray-400">&#128269;</span></div>
    </div>
    <div class="flex flex-wrap gap-2 justify-center mb-10">
      <button onclick="showCat('crisis')" class="res-cat-btn active" data-cat="crisis">&#128314; Crisis</button>
      <button onclick="showCat('recovery')" class="res-cat-btn" data-cat="recovery">&#127807; Recovery</button>
      <button onclick="showCat('mental')" class="res-cat-btn" data-cat="mental">&#129504; Mental Health</button>
      <button onclick="showCat('therapy')" class="res-cat-btn" data-cat="therapy">&#128172; Find Therapy</button>
      <button onclick="showCat('apps')" class="res-cat-btn" data-cat="apps">&#128241; Apps &amp; Tools</button>
      <button onclick="showCat('books')" class="res-cat-btn" data-cat="books">&#128218; Books</button>
      <button onclick="showCat('community')" class="res-cat-btn" data-cat="community">&#129306; Online Community</button>
    </div>
    <div id="resource-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></div>
  </div>
</section>

<section class="py-16 px-4 band-sage">
  <div class="max-w-2xl mx-auto text-center">
    <div class="tag-pill mb-4">&#128161; Know a Resource?</div>
    <h2 class="font-display text-3xl font-bold text-gray-800 mb-4">Suggest a Resource</h2>
    <p class="text-gray-600 mb-8">Has something helped you? Share it so it can help someone else.</p>
    <div class="peace-card p-8 text-left">
      <div class="grid grid-cols-1 gap-4">
        <div><label class="block text-sm font-bold text-gray-700 mb-2">Resource Name</label><input type="text" id="suggest-name" class="peace-input" placeholder="e.g. SMART Recovery"/></div>
        <div><label class="block text-sm font-bold text-gray-700 mb-2">URL (optional)</label><input type="url" id="suggest-url" class="peace-input" placeholder="https://..."/></div>
        <div><label class="block text-sm font-bold text-gray-700 mb-2">Why it helped you</label><textarea id="suggest-why" class="peace-input" rows="3" placeholder="Tell us how this resource made a difference..."></textarea></div>
        <button onclick="submitSuggestion()" class="btn-sage py-3">&#127807; Submit Suggestion</button>
      </div>
    </div>
  </div>
</section>

<style>
.res-cat-btn { padding:.5rem 1.2rem; border-radius:9999px; border:2px solid #c0eae4; background:white; color:#1f7971; font-size:.85rem; font-weight:700; cursor:pointer; transition:background .2s; font-family:'Nunito',sans-serif; }
.res-cat-btn.active, .res-cat-btn:hover { background:#4fbdb3; color:white; border-color:#4fbdb3; }
</style>

<script>
const resources = [
  { cat:"crisis", icon:"&#128222;", name:"988 Suicide &amp; Crisis Lifeline", desc:"Call or text 988. Free, confidential crisis support 24/7.", url:"https://988lifeline.org", tag:"Free 24/7 Call/Text", tc:"#e05a5a", bg:"#fff5f5" },
  { cat:"crisis", icon:"&#128172;", name:"Crisis Text Line", desc:"Text HOME to 741741. Free 24/7 crisis counseling via text.", url:"https://www.crisistextline.org", tag:"Free 24/7 Text", tc:"#e05a5a", bg:"#fff5f5" },
  { cat:"crisis", icon:"&#127973;", name:"SAMHSA Helpline", desc:"1-800-662-4357. Free confidential treatment referrals 24/7.", url:"https://www.samhsa.gov/find-help/national-helpline", tag:"Free 24/7 Phone", tc:"#e05a5a", bg:"#fff5f5" },
  { cat:"crisis", icon:"&#127760;", name:"NAMI Helpline", desc:"1-800-950-6264. National Alliance on Mental Illness helpline.", url:"https://www.nami.org/help", tag:"Free Phone &amp; Chat", tc:"#e05a5a", bg:"#fff5f5" },
  { cat:"recovery", icon:"&#127807;", name:"Alcoholics Anonymous (AA)", desc:"12-step program for alcohol use disorder. Find local and online meetings.", url:"https://www.aa.org", tag:"Free In-Person &amp; Online", tc:"#4e7d54", bg:"#f0f5ef" },
  { cat:"recovery", icon:"&#127807;", name:"Narcotics Anonymous (NA)", desc:"12-step program for drug addiction. Global network of meetings.", url:"https://na.org", tag:"Free In-Person &amp; Online", tc:"#4e7d54", bg:"#f0f5ef" },
  { cat:"recovery", icon:"&#128300;", name:"SMART Recovery", desc:"Science-based alternative to 12-step. Tools and meetings for self-empowered recovery.", url:"https://www.smartrecovery.org", tag:"Free Evidence-Based", tc:"#4e7d54", bg:"#f0f5ef" },
  { cat:"recovery", icon:"&#127968;", name:"Substance Abuse Treatment Locator", desc:"Find local treatment centers and support groups. SAMHSA tool.", url:"https://findtreatment.gov", tag:"Free Treatment Finder", tc:"#4e7d54", bg:"#f0f5ef" },
  { cat:"mental", icon:"&#129504;", name:"NAMI — Mental Health Info", desc:"Comprehensive information on mental health conditions and treatments.", url:"https://www.nami.org", tag:"Free Educational", tc:"#5e3d88", bg:"#f3eef8" },
  { cat:"mental", icon:"&#128532;", name:"Anxiety &amp; Depression Association", desc:"Resources, therapist finder, and self-help tools for anxiety and depression.", url:"https://adaa.org", tag:"Free Self-Help Tools", tc:"#5e3d88", bg:"#f3eef8" },
  { cat:"mental", icon:"&#128153;", name:"MentalHealth.gov", desc:"US government mental health resource hub with emergency resources.", url:"https://www.mentalhealth.gov", tag:"Free Government Resource", tc:"#5e3d88", bg:"#f3eef8" },
  { cat:"therapy", icon:"&#128269;", name:"Psychology Today Therapist Finder", desc:"Search by location, specialty, insurance and more.", url:"https://www.psychologytoday.com/us/therapists", tag:"Free to Search", tc:"#1f7971", bg:"#e8f7f5" },
  { cat:"therapy", icon:"&#128187;", name:"Open Path Collective", desc:"Affordable therapy $30-$80/session for those without insurance.", url:"https://openpathcollective.org", tag:"Low-Cost Sliding Scale", tc:"#1f7971", bg:"#e8f7f5" },
  { cat:"therapy", icon:"&#128241;", name:"BetterHelp", desc:"Online therapy with licensed counselors via app, phone, or video.", url:"https://www.betterhelp.com", tag:"Online Paid (aid available)", tc:"#1f7971", bg:"#e8f7f5" },
  { cat:"apps", icon:"&#128241;", name:"Sober Grid", desc:"Social network and tracking app for people in recovery.", url:"https://sobergrid.com", tag:"Free App iOS &amp; Android", tc:"#c68d00", bg:"#fef9e7" },
  { cat:"apps", icon:"&#129488;", name:"Headspace", desc:"Guided meditation and mindfulness. Excellent for anxiety management.", url:"https://www.headspace.com", tag:"Free Trial Paid App", tc:"#c68d00", bg:"#fef9e7" },
  { cat:"apps", icon:"&#127754;", name:"Calm", desc:"Sleep, meditation, and relaxation app for anxiety and stress.", url:"https://www.calm.com", tag:"Free Trial Paid App", tc:"#c68d00", bg:"#fef9e7" },
  { cat:"apps", icon:"&#128202;", name:"I Am Sober", desc:"Sobriety counter and daily pledge app. Track milestones.", url:"https://iamsober.com", tag:"Free Milestone Tracker", tc:"#c68d00", bg:"#fef9e7" },
  { cat:"books", icon:"&#128218;", name:"In the Realm of Hungry Ghosts", desc:"By Gabor Mate. A compassionate exploration of addiction.", url:"https://www.amazon.com/Realm-Hungry-Ghosts-Encounters-Addiction/dp/1556439261", tag:"Book Addiction Science", tc:"#b55a2d", bg:"#fdf3ec" },
  { cat:"books", icon:"&#128216;", name:"The Body Keeps the Score", desc:"By Bessel van der Kolk. How trauma affects the body and the path to healing.", url:"https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748", tag:"Book Trauma &amp; Healing", tc:"#b55a2d", bg:"#fdf3ec" },
  { cat:"books", icon:"&#128215;", name:"This Naked Mind", desc:"By Annie Grace. A refreshing approach to questioning your relationship with alcohol.", url:"https://www.amazon.com/This-Naked-Mind-Alcohol-Unconscious/dp/0525537740", tag:"Book Alcohol Recovery", tc:"#b55a2d", bg:"#fdf3ec" },
  { cat:"community", icon:"&#129309;", name:"r/stopdrinking", desc:"Reddit's supportive community for reducing or stopping alcohol. 500K+ members, zero judgment.", url:"https://www.reddit.com/r/stopdrinking/", tag:"Free Online Community", tc:"#2ea097", bg:"#e8f7f5" },
  { cat:"community", icon:"&#128172;", name:"r/mentalhealth", desc:"Reddit community for mental health support. Compassionate and supportive space.", url:"https://www.reddit.com/r/mentalhealth/", tag:"Free Online Community", tc:"#2ea097", bg:"#e8f7f5" },
  { cat:"community", icon:"&#127757;", name:"In the Rooms", desc:"Free online recovery meetings. 100+ meetings daily for addiction and mental health.", url:"https://www.intherooms.com", tag:"Free Virtual Meetings", tc:"#2ea097", bg:"#e8f7f5" },
];
let currentCat = 'crisis', searchTerm = '';
function getFiltered() { return resources.filter(r => { const mc = currentCat === 'all' || r.cat === currentCat; const ms = !searchTerm || r.name.toLowerCase().includes(searchTerm) || r.desc.toLowerCase().includes(searchTerm); return mc && ms; }); }
function renderResources() {
  const grid = document.getElementById('resource-grid');
  const filtered = getFiltered();
  if (!filtered.length) { grid.innerHTML = '<div class="col-span-3 text-center py-12 text-gray-500">No resources found. Try a different search.</div>'; return; }
  grid.innerHTML = filtered.map(r =>
    '<div class="peace-card p-6" style="background:' + r.bg + ';"><div class="text-4xl mb-3">' + r.icon + '</div><h3 class="font-bold text-gray-800 text-lg mb-2">' + r.name + '</h3><p class="text-gray-600 text-sm leading-relaxed mb-4">' + r.desc + '</p><div class="flex items-center justify-between flex-wrap gap-2"><span class="text-xs font-bold px-3 py-1 rounded-full text-white" style="background:' + r.tc + ';">' + r.tag + '</span><a href="' + r.url + '" target="_blank" rel="noopener noreferrer" class="text-sm font-bold hover:underline" style="color:' + r.tc + ';">Visit &#8594;</a></div></div>'
  ).join('');
}
function showCat(cat) {
  currentCat = cat;
  document.querySelectorAll('.res-cat-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-cat="' + cat + '"]').classList.add('active');
  renderResources();
}
function searchResources(val) { searchTerm = val.toLowerCase(); if (val) currentCat = 'all'; renderResources(); }
function submitSuggestion() {
  const name = document.getElementById('suggest-name').value.trim();
  if (!name) { showToast('Please enter a resource name'); return; }
  document.getElementById('suggest-name').value = ''; document.getElementById('suggest-url').value = ''; document.getElementById('suggest-why').value = '';
  showToast('Thank you for your suggestion! We will review it soon.');
}
renderResources();
</script>
`, '/resources')
}
