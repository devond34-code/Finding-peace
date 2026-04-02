import { Layout } from '../components/layout'
export function HomePage(): string {
  return Layout('Welcome Home', `
<section class="hero-gradient mandala-bg relative overflow-hidden min-h-screen flex items-center">
  <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div class="sunburst w-96 h-96" style="width:600px;height:600px;"></div>
  </div>
  <div class="peace-deco absolute top-10 left-8 text-6xl font-bold">&#9774;</div>
  <div class="peace-deco absolute bottom-16 right-12 text-5xl font-bold">&#9774;</div>
  <div class="max-w-6xl mx-auto px-4 py-24 relative z-10">
    <div class="flex flex-col lg:flex-row items-center gap-12">
      <div class="flex-1 text-center lg:text-left">
        <div class="tag-pill mb-4">&#10024; Mental Health &amp; Addiction Recovery</div>
        <h1 class="font-script text-6xl md:text-8xl mb-4" style="color:#d4713f; line-height:1.1;">Finding Peace</h1>
        <p class="font-display text-xl md:text-2xl text-gray-600 mb-2 italic">"You don't have to be okay to be worthy of love."</p>
        <p class="text-gray-600 text-lg leading-relaxed max-w-xl mb-8">A safe haven for mental health warriors &amp; recovery champions. Daily funny affirmations, real stories, community support, and the resources you actually need. &#127807;</p>
        <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
          <a href="/community" class="btn-primary text-base px-6 py-3">&#128172; Join the Community</a>
          <a href="/affirmations" class="btn-sage text-base px-6 py-3">&#10024; Today's Affirmation</a>
          <a href="https://www.tiktok.com/@findingpeace" target="_blank" class="tiktok-btn text-base px-6 py-3"><i class="fab fa-tiktok"></i> Follow on TikTok</a>
        </div>
        <div class="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
          <div class="text-center"><div class="font-display font-bold text-3xl" style="color:#d4713f;">10K+</div><div class="text-sm text-gray-500">Community Members</div></div>
          <div class="text-center"><div class="font-display font-bold text-3xl" style="color:#6a9e6f;">365</div><div class="text-sm text-gray-500">Daily Affirmations</div></div>
          <div class="text-center"><div class="font-display font-bold text-3xl" style="color:#a07fc8;">500+</div><div class="text-sm text-gray-500">Stories Shared</div></div>
          <div class="text-center"><div class="font-display font-bold text-3xl" style="color:#2ea097;">&#8734;</div><div class="text-sm text-gray-500">Love &amp; Support</div></div>
        </div>
      </div>
      <div class="flex-shrink-0">
        <div class="float-anim">
          <img src="https://www.genspark.ai/api/files/s/yYh5D2hy" alt="Finding Peace" class="w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-2xl"/>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-6 px-4" style="background: linear-gradient(135deg, #d4713f, #e8924d, #f5c430);">
  <div class="max-w-4xl mx-auto text-center text-white">
    <p class="text-sm font-bold uppercase tracking-widest mb-1 opacity-80">&#10024; Today's Affirmation</p>
    <p id="hero-affirmation" class="font-display text-xl md:text-2xl italic font-bold">"I am doing the best I can, and my best is more than enough."</p>
    <button onclick="newHeroAff()" class="mt-2 text-sm underline opacity-75 hover:opacity-100 transition-opacity bg-transparent border-none cursor-pointer text-white">Get another one &#8594;</button>
  </div>
</section>

<section class="py-20 px-4 band-clay">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-14">
      <div class="tag-pill mb-3">&#127800; Our Mission</div>
      <h2 class="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Is Finding Peace?</h2>
      <p class="text-gray-600 text-lg max-w-2xl mx-auto">We believe healing should feel human — messy, funny, honest, and full of hope.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="peace-card p-8 text-center">
        <div class="text-5xl mb-4">&#128514;&#128153;</div>
        <h3 class="font-display font-bold text-xl text-gray-800 mb-3">Funny Affirmations</h3>
        <p class="text-gray-600 leading-relaxed">Daily TikTok affirmations that make you smile AND feel seen. Because sometimes the best medicine is a laugh combined with a truth.</p>
        <a href="/affirmations" class="btn-primary mt-4 text-sm">See Today's &#8594;</a>
      </div>
      <div class="peace-card p-8 text-center">
        <div class="text-5xl mb-4">&#128172;&#129306;</div>
        <h3 class="font-display font-bold text-xl text-gray-800 mb-3">Real Community</h3>
        <p class="text-gray-600 leading-relaxed">Connect with real people walking similar paths. Share your story, ask for feedback, celebrate wins, and find your tribe.</p>
        <a href="/community" class="btn-sage mt-4 text-sm">Join Us &#8594;</a>
      </div>
      <div class="peace-card p-8 text-center">
        <div class="text-5xl mb-4">&#127807;&#128218;</div>
        <h3 class="font-display font-bold text-xl text-gray-800 mb-3">Trusted Resources</h3>
        <p class="text-gray-600 leading-relaxed">Hotlines, therapy directories, meeting finders, apps, books — everything you need when you are ready to reach out.</p>
        <a href="/resources" class="btn-dusty mt-4 text-sm">Explore &#8594;</a>
      </div>
    </div>
  </div>
</section>

<section class="py-20 px-4 bg-white">
  <div class="max-w-6xl mx-auto">
    <div class="flex flex-col md:flex-row items-center gap-12">
      <div class="flex-shrink-0 text-center">
        <img src="https://www.genspark.ai/api/files/s/SIGm46tR" alt="Finding Peace" class="w-56 h-56 object-contain mx-auto float-anim"/>
      </div>
      <div class="flex-1">
        <div class="tag-pill mb-3">&#127803; My Story</div>
        <h2 class="font-display text-4xl font-bold text-gray-800 mb-4">Hi, I'm the voice behind Finding Peace</h2>
        <p class="text-gray-600 leading-relaxed text-lg mb-4">I've walked through addiction, anxiety, and some of the darkest corners of my mind — and I'm still here. Not perfectly healed, but healing. Every single day.</p>
        <p class="text-gray-600 leading-relaxed mb-6">I started making funny affirmations on TikTok because I needed them myself. What I didn't expect was that thousands of people needed them too. This community is my heart.</p>
        <a href="/about" class="btn-primary">Read My Full Story &#8594;</a>
      </div>
    </div>
  </div>
</section>

<section class="py-20 px-4 band-sage">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <div class="tag-pill mb-3">&#128218; Community Stories</div>
      <h2 class="font-display text-4xl font-bold text-gray-800 mb-3">Real People. Real Recovery.</h2>
      <p class="text-gray-600 text-lg">Because hearing someone else's story can save your life.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="peace-card p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="avatar-circle" style="background:#fdedb3; color:#c68d00;">S</div>
          <div><div class="font-bold text-gray-800">Sarah M.</div><div class="tag-pill">18 months sober</div></div>
        </div>
        <p class="text-gray-600 text-sm leading-relaxed">"Three years ago I hit rock bottom. Today I'm 18 months sober and just got my dream job. Finding Peace helped me realize I wasn't alone. &#128153;"</p>
      </div>
      <div class="peace-card p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="avatar-circle" style="background:#d5e8d0; color:#4e7d54;">J</div>
          <div><div class="font-bold text-gray-800">Jake T.</div><div class="tag-pill">First concert in 4 years</div></div>
        </div>
        <p class="text-gray-600 text-sm leading-relaxed">"Anxiety used to rule my life. Through daily affirmations and this community, I've learned to take it one moment at a time."</p>
      </div>
      <div class="peace-card p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="avatar-circle" style="background:#ddd0ed; color:#5e3d88;">M</div>
          <div><div class="font-bold text-gray-800">Maria L.</div><div class="tag-pill">6 months of therapy</div></div>
        </div>
        <p class="text-gray-600 text-sm leading-relaxed">"The funny affirmations made me laugh when all I wanted to do was cry. Sometimes you just need someone to say you're still here and that matters."</p>
      </div>
    </div>
    <div class="text-center"><a href="/stories" class="btn-primary text-base px-8 py-3">Read More Stories &#8594;</a></div>
  </div>
</section>

<section class="py-20 px-4 band-dusty">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <div class="tag-pill mb-3">&#127881; Milestones</div>
      <h2 class="font-display text-4xl font-bold text-gray-800 mb-3">Every Win Counts</h2>
      <p class="text-gray-600 text-lg">Big or small — celebrate it here. We're cheering for you.</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div class="peace-card p-5 text-center"><div class="text-3xl mb-2">&#127959;</div><div class="font-bold text-gray-800 text-sm">Alex R.</div><div class="text-xs font-bold mt-1" style="color:#d4713f;">1 Year Sober &#127881;</div><div class="text-xs text-gray-500 mt-1">89 &#10084;&#65039;</div></div>
      <div class="peace-card p-5 text-center"><div class="text-3xl mb-2">&#128170;</div><div class="font-bold text-gray-800 text-sm">Priya S.</div><div class="text-xs font-bold mt-1" style="color:#6a9e6f;">90 Days Clean</div><div class="text-xs text-gray-500 mt-1">71 &#10084;&#65039;</div></div>
      <div class="peace-card p-5 text-center"><div class="text-3xl mb-2">&#129504;</div><div class="font-bold text-gray-800 text-sm">Chris B.</div><div class="text-xs font-bold mt-1" style="color:#a07fc8;">Started Therapy</div><div class="text-xs text-gray-500 mt-1">55 &#10084;&#65039;</div></div>
      <div class="peace-card p-5 text-center"><div class="text-3xl mb-2">&#128241;</div><div class="font-bold text-gray-800 text-sm">Devon K.</div><div class="text-xs font-bold mt-1" style="color:#2ea097;">Digital Detox Week</div><div class="text-xs text-gray-500 mt-1">23 &#10084;&#65039;</div></div>
    </div>
    <div class="text-center"><a href="/milestones" class="btn-sage text-base px-8 py-3">Share Your Milestone &#8594;</a></div>
  </div>
</section>

<section class="py-20 px-4" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%);">
  <div class="max-w-4xl mx-auto text-center text-white">
    <div class="text-6xl mb-4">&#128241;</div>
    <h2 class="font-display text-4xl md:text-5xl font-bold mb-4">Daily Funny Affirmations</h2>
    <p class="text-gray-300 text-lg mb-8 max-w-xl mx-auto">Every day I drop a new affirmation on TikTok that'll make you laugh, cry, or both. Because healing doesn't have to be so serious all the time. &#128514;&#128153;</p>
    <a href="https://www.tiktok.com/@findingpeace" target="_blank" class="tiktok-btn text-lg px-8 py-4 pulse-glow"><i class="fab fa-tiktok text-xl"></i> Follow @FindingPeace on TikTok</a>
    <p class="text-gray-500 text-sm mt-4">Join 10K+ people finding peace one laugh at a time</p>
  </div>
</section>

<section class="py-20 px-4 band-teal">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <div class="tag-pill mb-3">&#128314; Crisis Support</div>
      <h2 class="font-display text-4xl font-bold text-gray-800 mb-3">You Are Never Alone</h2>
      <p class="text-gray-600 text-lg">If you need help right now — these resources are here for you.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="peace-card p-6 border-l-4" style="border-color:#e8924d;"><div class="text-3xl mb-3">&#128222;</div><h3 class="font-bold text-gray-800 mb-2">988 Lifeline</h3><p class="text-gray-600 text-sm mb-3">Call or text 988. Available 24/7. Free &amp; confidential.</p><a href="https://988lifeline.org" target="_blank" class="font-bold text-sm hover:underline" style="color:#d4713f;">988lifeline.org &#8594;</a></div>
      <div class="peace-card p-6 border-l-4" style="border-color:#8ab88e;"><div class="text-3xl mb-3">&#128172;</div><h3 class="font-bold text-gray-800 mb-2">Crisis Text Line</h3><p class="text-gray-600 text-sm mb-3">Text HOME to 741741. Free 24/7 text support.</p><a href="https://www.crisistextline.org" target="_blank" class="font-bold text-sm hover:underline" style="color:#6a9e6f;">crisistextline.org &#8594;</a></div>
      <div class="peace-card p-6 border-l-4" style="border-color:#a07fc8;"><div class="text-3xl mb-3">&#127973;</div><h3 class="font-bold text-gray-800 mb-2">SAMHSA Helpline</h3><p class="text-gray-600 text-sm mb-3">1-800-662-4357. Free treatment referrals.</p><a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" class="font-bold text-sm hover:underline" style="color:#a07fc8;">samhsa.gov &#8594;</a></div>
    </div>
    <div class="text-center"><a href="/resources" class="btn-primary text-base px-8 py-3">All Resources &#8594;</a></div>
  </div>
</section>

<script>
const affs = [
  "I am doing the best I can, and my best is more than enough.",
  "Recovery isn't linear, and neither is my Wi-Fi, but here we are. Still connected.",
  "I chose myself today. That's the whole win.",
  "My healing doesn't have an expiration date.",
  "Bad days don't cancel good futures.",
  "I didn't survive this far to only survive this far.",
  "Asking for help is a superpower, not a weakness.",
  "Some days just getting out of bed IS the victory. Crown, please.",
  "My story isn't over. The best plot twist is yet to come.",
  "I am worthy of peace. Full stop.",
];
let hi = 0;
function newHeroAff() {
  let ni = Math.floor(Math.random() * affs.length);
  while (ni === hi && affs.length > 1) ni = Math.floor(Math.random() * affs.length);
  hi = ni;
  const el = document.getElementById('hero-affirmation');
  el.style.opacity = '0';
  setTimeout(() => { el.textContent = '"' + affs[ni] + '"'; el.style.opacity = '1'; el.style.transition = 'opacity 0.5s'; }, 300);
}
</script>
`, '/')
}
