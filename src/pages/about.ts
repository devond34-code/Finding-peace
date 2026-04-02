import { layout } from '../components/layout'

export function AboutPage(): string {
  return layout('My Story', `

<section class="band-clay py-20 px-4 relative overflow-hidden">
  <div class="peace-deco absolute top-8 right-8 text-8xl">🌸</div>
  <div class="peace-deco absolute bottom-8 left-8 text-6xl">☮</div>
  <div class="max-w-4xl mx-auto text-center">
    <div class="tag-pill mb-4">🌻 My Story</div>
    <h1 class="font-display text-5xl md:text-6xl font-bold text-gray-800 mb-4">The Voice Behind</h1>
    <h2 class="font-script text-5xl md:text-6xl mb-6" style="color:#d4713f;">Finding Peace</h2>
    <p class="text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto">Every great story starts in the dark. Mine is no different — and I am still writing it.</p>
  </div>
</section>

<section class="py-16 px-4 bg-white">
  <div class="max-w-3xl mx-auto">
    <div class="flex flex-col items-center mb-12">
      <div class="w-36 h-36 rounded-full float-anim mb-6 overflow-hidden flex items-center justify-center" style="background: linear-gradient(135deg, #fdedb3, #f9dbc5);">
        <img src="https://www.genspark.ai/api/files/s/Gzabg75Z" alt="Finding Peace" class="w-full h-full object-contain p-2"/>
      </div>
      <h3 class="font-display text-2xl font-bold text-gray-800">The Creator of Finding Peace</h3>
      <p class="text-gray-500">Mental Health Advocate · TikTok Creator · Survivor</p>
    </div>

    <div class="space-y-8 text-gray-700 leading-relaxed text-lg">
      <p>I was not always the person who made funny affirmations. There was a version of me who could not get out of bed, who did not see a future, who was deep in the grip of addiction and convinced that everyone would be better off without me around.</p>
      <blockquote class="border-l-4 pl-6 py-2 my-6 font-display italic text-xl text-gray-600" style="border-color:#d4713f;">"I used to think asking for help was admitting defeat. Now I know it is the bravest thing a person can do."</blockquote>
      <p>Recovery did not happen overnight. It was not a single moment or a single choice. It was thousands of small decisions — some days choosing to call a friend instead of picking up. Some days choosing to stay. Some days choosing to laugh instead of cry — or cry AND laugh, because honestly, that is allowed too.</p>
      <p>I started Finding Peace on TikTok almost by accident. I made a silly affirmation video for myself when I was having a bad week, posted it, and went to sleep. I woke up to thousands of comments from people saying this is exactly what I needed today. That was the moment I realized — I am not alone in this. And neither are you.</p>
      <blockquote class="border-l-4 pl-6 py-2 my-6 font-display italic text-xl text-gray-600" style="border-color:#8ab88e;">"I did not know I was building a community. I thought I was just talking to myself at 2am."</blockquote>
      <p>Mental health and addiction are not topics people talked about openly when I was growing up. There was shame. There were whispers. There were closed doors. I am here to open those doors wide open and make sure no one has to suffer in silence.</p>
      <p>I am not a therapist or a doctor. I am someone who has been through it, who is still going through it some days, and who refuses to pretend otherwise. What I offer is honesty, humor, and a hand to hold.</p>
      <p class="font-bold text-gray-800">This is Finding Peace. This is us. And you are so welcome here. 🌸</p>
    </div>
  </div>
</section>

<section class="py-20 px-4 band-sage">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-14">
      <div class="tag-pill mb-3">🕊 Our Mission</div>
      <h2 class="font-display text-4xl font-bold text-gray-800 mb-4">What We Stand For</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="peace-card p-7"><div class="text-4xl mb-4">🚫🩹</div><h3 class="font-bold text-gray-800 text-xl mb-3">No Shame. Ever.</h3><p class="text-gray-600 leading-relaxed">Addiction and mental illness are health challenges, not character flaws. We leave shame at the door.</p></div>
      <div class="peace-card p-7"><div class="text-4xl mb-4">😂💙</div><h3 class="font-bold text-gray-800 text-xl mb-3">Humor as Medicine</h3><p class="text-gray-600 leading-relaxed">Laughing about the hard stuff does not minimize it — it humanizes it. We keep it real AND funny.</p></div>
      <div class="peace-card p-7"><div class="text-4xl mb-4">🫂🌍</div><h3 class="font-bold text-gray-800 text-xl mb-3">Radical Inclusion</h3><p class="text-gray-600 leading-relaxed">Whatever your story, whatever your struggle — you belong here. Full stop. No judgment.</p></div>
      <div class="peace-card p-7"><div class="text-4xl mb-4">🌱✨</div><h3 class="font-bold text-gray-800 text-xl mb-3">Progress Over Perfection</h3><p class="text-gray-600 leading-relaxed">Recovery is not a straight line. We celebrate every step, stumble, and start-over.</p></div>
      <div class="peace-card p-7"><div class="text-4xl mb-4">📚🔑</div><h3 class="font-bold text-gray-800 text-xl mb-3">Access to Resources</h3><p class="text-gray-600 leading-relaxed">Knowledge is power. We make sure you know what help exists and how to reach it.</p></div>
      <div class="peace-card p-7"><div class="text-4xl mb-4">🎙️💬</div><h3 class="font-bold text-gray-800 text-xl mb-3">Amplify Your Voice</h3><p class="text-gray-600 leading-relaxed">Your story matters. Sharing it might be the thing that saves someone else's life.</p></div>
    </div>
  </div>
</section>

<section class="py-20 px-4 bg-white">
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-14">
      <div class="tag-pill mb-3">📅 The Journey</div>
      <h2 class="font-display text-4xl font-bold text-gray-800 mb-4">How Finding Peace Grew</h2>
    </div>
    <div class="relative">
      <div class="absolute left-6 top-0 bottom-0 w-0.5" style="background: linear-gradient(180deg, #e8924d, #8ab88e, #a07fc8);"></div>
      <div class="space-y-10 pl-16">
        <div class="relative"><div class="absolute -left-10 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style="background:#e8924d;">1</div><div class="tag-pill mb-1">The Beginning</div><h3 class="font-bold text-gray-800 text-xl mb-2">One Video Changed Everything</h3><p class="text-gray-600 leading-relaxed">Posted a funny affirmation for myself at 2am. Went viral. Realized I was not the only one who needed to hear it.</p></div>
        <div class="relative"><div class="absolute -left-10 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style="background:#8ab88e;">2</div><div class="tag-pill mb-1">Growing Community</div><h3 class="font-bold text-gray-800 text-xl mb-2">1,000 to 10,000 Followers</h3><p class="text-gray-600 leading-relaxed">The DMs started coming in. People sharing their stories and struggles. I realized this was bigger than me.</p></div>
        <div class="relative"><div class="absolute -left-10 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style="background:#a07fc8;">3</div><div class="tag-pill mb-1">Going Daily</div><h3 class="font-bold text-gray-800 text-xl mb-2">365 Days of Affirmations</h3><p class="text-gray-600 leading-relaxed">Committed to showing up every single day — because consistency is what recovery looks like.</p></div>
        <div class="relative"><div class="absolute -left-10 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style="background:#2ea097;">4</div><div class="tag-pill mb-1">Right Now</div><h3 class="font-bold text-gray-800 text-xl mb-2">Building This Community Space</h3><p class="text-gray-600 leading-relaxed">Launching this website — a permanent home for the Finding Peace community to share, connect, and find what they need.</p></div>
      </div>
    </div>
  </div>
</section>

<section class="py-16 px-4 band-gold text-center">
  <div class="max-w-2xl mx-auto">
    <div class="text-5xl mb-4">💙</div>
    <h2 class="font-display text-3xl font-bold text-gray-800 mb-4">Ready to Join the Community?</h2>
    <p class="text-gray-600 mb-8">Whether you are just starting your journey or years into it — there is a seat for you at this table.</p>
    <div class="flex flex-wrap gap-4 justify-center">
      <a href="/community" class="btn-primary text-base px-8 py-3">💬 Join Community</a>
      <a href="/stories" class="btn-sage text-base px-8 py-3">📖 Read Stories</a>
      <a href="/affirmations" class="btn-dusty text-base px-8 py-3">✨ Get Affirmations</a>
    </div>
  </div>
</section>

`, '/about')
}
