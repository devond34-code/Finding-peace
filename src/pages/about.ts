import { layout } from '../components/layout'

export function AboutPage(): string {
  const content = `
  <div class="pt-24 pb-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-pink-300 text-sm mb-6">
          <i class="fas fa-heart text-pink-400"></i> My Story & Mission
        </div>
        <h1 class="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
          Why <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Finding Peace</span>
        </h1>
      </div>

      <!-- Founder Card -->
      <div class="glass rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-pink-600/10 rounded-full blur-3xl"></div>

        <div class="relative z-10">
          <!-- Avatar/Logo -->
          <div class="flex justify-center mb-8">
            <div class="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-2xl ring-4 ring-purple-500/30">
              <i class="fas fa-dove text-white text-3xl"></i>
            </div>
          </div>

          <h2 class="font-serif text-3xl font-bold text-white text-center mb-2">Finding Peace</h2>
          <p class="text-purple-400 text-center mb-8 text-sm tracking-widest uppercase">Mental Health & Addiction Recovery Creator</p>

          <div class="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              <span class="font-serif text-2xl text-white italic">"</span>
              I started Finding Peace because I needed it first.
            </p>
            <p>
              Like a lot of people in this space, I didn't get here because things were going great. I got here because I had to find a way through the dark — and I found that laughter, community, and radical honesty were the things that actually helped when nothing else was working.
            </p>
            <p>
              The daily affirmations on TikTok started as something silly — a way to make myself laugh on bad days. But then people started messaging me saying <em class="text-white">"this is the first thing that actually made me feel seen."</em> That changed everything.
            </p>
            <p>
              Mental health and addiction recovery are serious. But they're also messy and weird and sometimes kind of funny in a dark way. I believe we can hold both truths — that this is hard AND that we can laugh, heal, connect, and find our way through.
            </p>
          </div>
        </div>
      </div>

      <!-- Mission -->
      <div class="mb-12">
        <h2 class="font-serif text-3xl font-bold text-white text-center mb-8">The Mission 🕊️</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div class="glass rounded-2xl p-6 text-center card-hover">
            <div class="text-4xl mb-4">🔐</div>
            <h3 class="font-serif text-lg font-bold text-white mb-3">Create Safety</h3>
            <p class="text-gray-400 text-sm leading-relaxed">Build a space where people can be honest about where they are without fear of judgment, shame, or unsolicited opinions.</p>
          </div>
          <div class="glass rounded-2xl p-6 text-center card-hover">
            <div class="text-4xl mb-4">🤝</div>
            <h3 class="font-serif text-lg font-bold text-white mb-3">Build Community</h3>
            <p class="text-gray-400 text-sm leading-relaxed">Connect people who get it — who've been through it, who are in it right now, who want to help others walk through it.</p>
          </div>
          <div class="glass rounded-2xl p-6 text-center card-hover">
            <div class="text-4xl mb-4">😂</div>
            <h3 class="font-serif text-lg font-bold text-white mb-3">Heal with Laughter</h3>
            <p class="text-gray-400 text-sm leading-relaxed">Because sometimes the most healing thing you can do is laugh at the absurdity of being human and still choosing to show up.</p>
          </div>
        </div>
      </div>

      <!-- Values -->
      <div class="glass rounded-2xl p-8 mb-12">
        <h2 class="font-serif text-2xl font-bold text-white mb-6">What We Believe 💜</h2>
        <div class="space-y-4">
          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-purple-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <i class="fas fa-check text-purple-400 text-xs"></i>
            </div>
            <div>
              <div class="text-white font-medium">Everyone deserves a safe space</div>
              <div class="text-gray-400 text-sm">Regardless of where you are in your journey, your stage of recovery, your background, or your story.</div>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-pink-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <i class="fas fa-check text-pink-400 text-xs"></i>
            </div>
            <div>
              <div class="text-white font-medium">Relapse is not failure</div>
              <div class="text-gray-400 text-sm">Recovery isn't linear. Setbacks are part of the story, not the end of it. You are always welcome back here.</div>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-blue-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <i class="fas fa-check text-blue-400 text-xs"></i>
            </div>
            <div>
              <div class="text-white font-medium">Humor is healing</div>
              <div class="text-gray-400 text-sm">Laughing doesn't mean you're not taking it seriously. Sometimes it means you're surviving it creatively.</div>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-green-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <i class="fas fa-check text-green-400 text-xs"></i>
            </div>
            <div>
              <div class="text-white font-medium">Every win matters</div>
              <div class="text-gray-400 text-sm">One day sober. One therapy session. Getting out of bed. We celebrate all of it because all of it matters.</div>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-yellow-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <i class="fas fa-check text-yellow-400 text-xs"></i>
            </div>
            <div>
              <div class="text-white font-medium">You are not alone</div>
              <div class="text-gray-400 text-sm">Whatever you're carrying, someone in this community has been there. And they want to walk with you.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Connect -->
      <div class="text-center">
        <h2 class="font-serif text-3xl font-bold text-white mb-4">Let's Connect 📱</h2>
        <p class="text-gray-400 mb-8 max-w-xl mx-auto">Follow along for daily affirmations, community updates, and real-talk content about mental health and recovery.</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://www.tiktok.com/@findingpeace" target="_blank" class="inline-flex items-center gap-3 tiktok-btn text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z"/></svg>
            Follow on TikTok
          </a>
          <a href="/community" class="btn-primary text-white font-semibold px-8 py-4 rounded-full text-lg shadow-xl">
            <i class="fas fa-heart mr-2"></i>Join the Community
          </a>
        </div>

        <!-- Disclaimer -->
        <div class="mt-12 glass rounded-2xl p-5 text-left border border-yellow-500/20">
          <div class="flex items-start gap-3">
            <i class="fas fa-info-circle text-yellow-400 mt-1"></i>
            <div>
              <div class="font-medium text-yellow-300 mb-1">Important Disclaimer</div>
              <p class="text-gray-400 text-sm leading-relaxed">Finding Peace is a community space created for connection and support. It is <strong class="text-white">not a substitute for professional medical advice, diagnosis, or treatment</strong>. If you are experiencing a mental health crisis or medical emergency, please call 988 or your local emergency services. The affirmations and community content here are meant to inspire and support — not to replace professional care.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
  return layout('About & Mission', content, 'about')
}
