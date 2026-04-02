import { layout } from '../components/layout'
export function HomePage(): string {
  const content = `
  <section class="gradient-hero min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
    <div class="absolute top-20 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-10 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
      <div class="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-purple-300 mb-8">
        <span class="pulse-dot w-2 h-2 bg-green-400 rounded-full inline-block"></span>
        Community is live and growing 💜
      </div>
      <h1 class="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
        You Don't Have to<br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400">Walk This Alone</span>
      </h1>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
        A safe space built for those navigating <strong class="text-white">mental health</strong> and <strong class="text-white">addiction recovery</strong>. Share your story, celebrate your wins, laugh through the hard stuff, and find your people.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <a href="/community" class="btn-primary text-white font-semibold px-8 py-4 rounded-full text-lg shadow-xl">
          <i class="fas fa-heart mr-2"></i> Join the Community
        </a>
        <a href="/about" class="btn-secondary text-white font-medium px-8 py-4 rounded-full text-lg">
          <i class="fas fa-play mr-2 text-purple-400"></i> Our Story
        </a>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        <div class="glass rounded-2xl p-4 card-hover"><div class="text-3xl font-bold text-purple-400">1K+</div><div class="text-sm text-gray-400 mt-1">Community Members</div></div>
        <div class="glass rounded-2xl p-4 card-hover"><div class="text-3xl font-bold text-green-400">365+</div><div class="text-sm text-gray-400 mt-1">Daily Affirmations</div></div>
        <div class="glass rounded-2xl p-4 card-hover"><div class="text-3xl font-bold text-blue-400">200+</div><div class="text-sm text-gray-400 mt-1">Stories Shared</div></div>
        <div class="glass rounded-2xl p-4 card-hover"><div class="text-3xl font-bold text-orange-400">100+</div><div class="text-sm text-gray-400 mt-1">Milestones Celebrated</div></div>
      </div>
    </div>
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 float-anim">
      <i class="fas fa-chevron-down text-purple-400 text-xl"></i>
    </div>
  </section>

  <section class="py-16 relative overflow-hidden">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="affirmation-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div class="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
        <div class="relative z-10">
          <div class="inline-flex items-center gap-2 bg-yellow-500/20 rounded-full px-4 py-1 text-yellow-300 text-sm font-medium mb-6">
            <i class="fas fa-sun"></i> Today's Affirmation
          </div>
          <p class="font-serif text-2xl md:text-3xl text-white font-medium leading-relaxed mb-6" id="dailyAffirmation">Loading...</p>
          <div class="flex items-center justify-center gap-4">
            <button onclick="newAffirmation()" class="btn-secondary text-white text-sm px-5 py-2 rounded-full"><i class="fas fa-random mr-2"></i> New One</button>
            <a href="/affirmations" class="btn-primary text-white text-sm px-5 py-2 rounded-full">See All <i class="fas fa-arrow-right ml-2"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 bg-gray-950/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Your Safe Haven</h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">Everything you need to heal, connect, and grow — all in one peaceful corner of the internet.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/community" class="glass rounded-2xl p-6 card-hover block group">
          <div class="w-14 h-14 rounded-2xl bg-purple-600/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><i class="fas fa-comments text-2xl text-purple-400"></i></div>
          <h3 class="font-serif text-xl font-bold text-white mb-3">Community Forum</h3>
          <p class="text-gray-400 text-sm leading-relaxed">A judgment-free zone to ask questions, give support, share wins and vent without shame. Real people, real talk.</p>
          <div class="mt-4 text-purple-400 text-sm font-medium">Join the conversation →</div>
        </a>
        <a href="/stories" class="glass rounded-2xl p-6 card-hover block group">
          <div class="w-14 h-14 rounded-2xl bg-blue-600/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><i class="fas fa-book-open text-2xl text-blue-400"></i></div>
          <h3 class="font-serif text-xl font-bold text-white mb-3">Your Stories</h3>
          <p class="text-gray-400 text-sm leading-relaxed">Your journey matters. Read stories from the community or share your own to inspire someone who needs it today.</p>
          <div class="mt-4 text-blue-400 text-sm font-medium">Read stories →</div>
        </a>
        <a href="/milestones" class="glass rounded-2xl p-6 card-hover block group">
          <div class="w-14 h-14 rounded-2xl bg-green-600/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><i class="fas fa-trophy text-2xl text-green-400"></i></div>
          <h3 class="font-serif text-xl font-bold text-white mb-3">Milestones</h3>
          <p class="text-gray-400 text-sm leading-relaxed">Every day sober, every therapy session, every morning you got out of bed — all of it deserves to be celebrated.</p>
          <div class="mt-4 text-green-400 text-sm font-medium">Celebrate wins →</div>
        </a>
        <a href="/affirmations" class="glass rounded-2xl p-6 card-hover block group">
          <div class="w-14 h-14 rounded-2xl bg-yellow-600/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><i class="fas fa-sun text-2xl text-yellow-400"></i></div>
          <h3 class="font-serif text-xl font-bold text-white mb-3">Daily Affirmations</h3>
          <p class="text-gray-400 text-sm leading-relaxed">Daily funny, honest, real-talk affirmations that don't feel fake. Because sometimes healing needs a little laughter too.</p>
          <div class="mt-4 text-yellow-400 text-sm font-medium">Get today's affirmation →</div>
        </a>
        <a href="/resources" class="glass rounded-2xl p-6 card-hover block group">
          <div class="w-14 h-14 rounded-2xl bg-red-600/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><i class="fas fa-hands-helping text-2xl text-red-400"></i></div>
          <h3 class="font-serif text-xl font-bold text-white mb-3">Resources</h3>
          <p class="text-gray-400 text-sm leading-relaxed">Hotlines, treatment finders, therapy apps, and more. Curated tools for every step of your journey.</p>
          <div class="mt-4 text-red-400 text-sm font-medium">Find support →</div>
        </a>
        <a href="/about" class="glass rounded-2xl p-6 card-hover block group">
          <div class="w-14 h-14 rounded-2xl bg-pink-600/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><i class="fas fa-heart text-2xl text-pink-400"></i></div>
          <h3 class="font-serif text-xl font-bold text-white mb-3">My Story</h3>
          <p class="text-gray-400 text-sm leading-relaxed">Why I started Finding Peace, what drives me, and the mission behind this community.</p>
          <div class="mt-4 text-pink-400 text-sm font-medium">Read my story →</div>
        </a>
      </div>
    </div>
  </section>

  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-12">
        <div><h2 class="font-serif text-4xl font-bold text-white mb-2">Community Stories</h2><p class="text-gray-400">Real people, real journeys, real hope.</p></div>
        <a href="/stories" class="btn-secondary text-white text-sm px-5 py-2 rounded-full hidden md:flex items-center gap-2">View All <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="glass rounded-2xl p-6 card-hover">
          <div class="flex items-center gap-3 mb-4"><div class="story-avatar bg-gradient-to-br from-purple-500 to-indigo-600">S</div><div><div class="font-semibold text-white">Sarah M.</div><div class="text-xs text-green-400">18 months sober 🎉</div></div></div>
          <p class="text-gray-300 text-sm leading-relaxed">"Three years ago I hit rock bottom. Today I'm 18 months sober. If you're struggling, please know there is light on the other side. 💙"</p>
          <div class="mt-4 pt-4 border-t border-white/10 flex items-center justify-between"><span class="text-xs text-gray-500">March 28, 2025</span><span class="text-red-400 text-sm"><i class="fas fa-heart mr-1"></i>47</span></div>
        </div>
        <div class="glass rounded-2xl p-6 card-hover">
          <div class="flex items-center gap-3 mb-4"><div class="story-avatar bg-gradient-to-br from-blue-500 to-cyan-600">J</div><div><div class="font-semibold text-white">Jake T.</div><div class="text-xs text-gray-400">Anxiety warrior</div></div></div>
          <p class="text-gray-300 text-sm leading-relaxed">"Through daily affirmations and this community, I've learned to take it one moment at a time. First concert in 4 years this week!"</p>
          <div class="mt-4 pt-4 border-t border-white/10 flex items-center justify-between"><span class="text-xs text-gray-500">March 25, 2025</span><span class="text-red-400 text-sm"><i class="fas fa-heart mr-1"></i>34</span></div>
        </div>
        <div class="glass rounded-2xl p-6 card-hover">
          <div class="flex items-center gap-3 mb-4"><div class="story-avatar bg-gradient-to-br from-pink-500 to-rose-600">M</div><div><div class="font-semibold text-white">Maria L.</div><div class="text-xs text-gray-400">6 months of therapy</div></div></div>
          <p class="text-gray-300 text-sm leading-relaxed">"The funny affirmations made me laugh when all I wanted to do was cry. Sometimes you just need someone to say you're still here and that matters."</p>
          <div class="mt-4 pt-4 border-t border-white/10 flex items-center justify-between"><span class="text-xs text-gray-500">March 20, 2025</span><span class="text-red-400 text-sm"><i class="fas fa-heart mr-1"></i>62</span></div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="glass rounded-3xl p-8 md:p-12 text-center border border-purple-500/20 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-indigo-900/20"></div>
        <div class="relative z-10">
          <div class="text-5xl mb-4">📱</div>
          <h2 class="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Daily Affirmations on TikTok</h2>
          <p class="text-gray-300 text-lg mb-8 max-w-xl mx-auto">Follow <strong class="text-purple-400">@FindingPeace</strong> for daily funny, honest, healing affirmations.</p>
          <a href="https://www.tiktok.com/@findingpeace" target="_blank" class="inline-flex items-center gap-3 tiktok-btn text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z"/></svg>
            Follow on TikTok
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="py-8 bg-red-950/30 border-y border-red-900/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        <div class="text-2xl">🆘</div>
        <div><div class="font-semibold text-red-300">Need immediate help?</div><div class="text-gray-400 text-sm">You matter. Please reach out.</div></div>
        <div class="flex flex-wrap items-center gap-4">
          <a href="tel:988" class="bg-red-600/30 border border-red-500/30 text-red-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-600/50 transition-colors">📞 Call or Text 988</a>
          <a href="sms:741741?body=HOME" class="bg-orange-600/30 border border-orange-500/30 text-orange-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600/50 transition-colors">💬 Text HOME to 741741</a>
          <a href="tel:18006624357" class="bg-blue-600/30 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600/50 transition-colors">💊 SAMHSA: 1-800-662-4357</a>
        </div>
      </div>
    </div>
  </section>

  <script>
    const affirmations = [
      "You survived 100% of your worst days. That's a pretty solid track record. ✨",
      "Recovery isn't linear. Some days you're thriving. Some days you just kept your socks on. Both count. 🧦",
      "You don't have to be grateful for the struggle. You just have to survive it. That's enough. 💙",
      "Today's goal: exist. That's it. You're already crushing it. 🎯",
      "Your healing doesn't have to look like anyone else's. 🌱",
      "It's okay if today was just about getting through today. Tomorrow is a whole new chance. ☀️",
      "You are not too broken to be fixed. You're too human to be perfect. And that's okay. 💜",
      "The version of you that is trying? That version is already incredible. 🔥",
      "Bad days don't erase good progress. They're just part of the whole messy beautiful picture. 🎨",
      "You reached out for help. That took guts. That was brave. That was strength. 💪",
      "If you're reading this, you made it to today. That's not nothing. That's everything. 🌟",
      "Recovery is not a destination. It's a million small choices. You already made one today. ✅"
    ];
    function newAffirmation() {
      const el = document.getElementById('dailyAffirmation');
      el.style.opacity = '0';
      setTimeout(() => {
        el.textContent = '"' + affirmations[Math.floor(Math.random() * affirmations.length)] + '"';
        el.style.transition = 'opacity 0.5s ease';
        el.style.opacity = '1';
      }, 300);
    }
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    document.getElementById('dailyAffirmation').textContent = '"' + affirmations[dayOfYear % affirmations.length] + '"';
  </script>
  `
  return layout('Home', content, 'home')
}
