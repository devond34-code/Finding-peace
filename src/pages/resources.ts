import { layout } from '../components/layout'

export function ResourcesPage(): string {
  const content = `
  <div class="pt-24 pb-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-red-300 text-sm mb-6">
          <i class="fas fa-hands-helping text-red-400"></i> Help & Resources
        </div>
        <h1 class="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
          You're Not <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Alone</span>
        </h1>
        <p class="text-gray-400 text-xl max-w-2xl mx-auto">Real resources. Real help. Whether you need a hotline right now or a place to start — we've got you covered.</p>
      </div>

      <!-- URGENT: Crisis Section -->
      <div class="bg-red-950/40 border border-red-500/40 rounded-2xl p-6 mb-10">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-10 h-10 bg-red-600/40 rounded-full flex items-center justify-center">
            <i class="fas fa-phone-alt text-red-400"></i>
          </div>
          <div>
            <h2 class="font-serif text-xl font-bold text-red-300">🆘 Crisis Support — Right Now</h2>
            <p class="text-gray-400 text-sm">If you or someone you know is in crisis, please reach out immediately.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href="tel:988" class="bg-red-900/30 border border-red-500/30 rounded-xl p-4 hover:bg-red-900/50 transition-colors text-center">
            <div class="text-2xl mb-2">📞</div>
            <div class="font-bold text-white">988 Suicide & Crisis Lifeline</div>
            <div class="text-red-300 font-mono text-lg mt-1">Call or Text: 988</div>
            <div class="text-gray-400 text-xs mt-2">Available 24/7</div>
          </a>
          <a href="sms:741741?body=HOME" class="bg-orange-900/30 border border-orange-500/30 rounded-xl p-4 hover:bg-orange-900/50 transition-colors text-center">
            <div class="text-2xl mb-2">💬</div>
            <div class="font-bold text-white">Crisis Text Line</div>
            <div class="text-orange-300 font-mono text-lg mt-1">Text HOME to 741741</div>
            <div class="text-gray-400 text-xs mt-2">Free, 24/7 support</div>
          </a>
          <a href="tel:18006624357" class="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4 hover:bg-blue-900/50 transition-colors text-center">
            <div class="text-2xl mb-2">💊</div>
            <div class="font-bold text-white">SAMHSA Helpline</div>
            <div class="text-blue-300 font-mono text-lg mt-1">1-800-662-4357</div>
            <div class="text-gray-400 text-xs mt-2">Substance use & mental health</div>
          </a>
        </div>
      </div>

      <!-- Category Filters -->
      <div class="flex flex-wrap items-center gap-3 mb-8">
        <button onclick="filterResources('all')" class="res-filter bg-purple-600/30 border border-purple-500/50 text-purple-300 px-5 py-2 rounded-full text-sm font-medium transition-all" data-cat="all">All Resources</button>
        <button onclick="filterResources('recovery')" class="res-filter glass border border-white/10 text-gray-300 px-5 py-2 rounded-full text-sm font-medium transition-all" data-cat="recovery">💊 Recovery</button>
        <button onclick="filterResources('mental')" class="res-filter glass border border-white/10 text-gray-300 px-5 py-2 rounded-full text-sm font-medium transition-all" data-cat="mental">🧠 Mental Health</button>
        <button onclick="filterResources('therapy')" class="res-filter glass border border-white/10 text-gray-300 px-5 py-2 rounded-full text-sm font-medium transition-all" data-cat="therapy">🛋️ Find Therapy</button>
        <button onclick="filterResources('apps')" class="res-filter glass border border-white/10 text-gray-300 px-5 py-2 rounded-full text-sm font-medium transition-all" data-cat="apps">📱 Apps</button>
        <button onclick="filterResources('education')" class="res-filter glass border border-white/10 text-gray-300 px-5 py-2 rounded-full text-sm font-medium transition-all" data-cat="education">📚 Education</button>
      </div>

      <!-- Resources Grid -->
      <div id="resourcesGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <!-- Populated by JS -->
      </div>
    </div>
  </div>

  <script>
    const resources = [
      {
        cat: "recovery", icon: "💊", color: "text-green-400", borderColor: "border-green-500/30",
        title: "AA — Alcoholics Anonymous",
        desc: "The original 12-step recovery program. Find local meetings, online meetings, and a worldwide community of support.",
        link: "https://www.aa.org", linkText: "Find a Meeting", badge: "Free"
      },
      {
        cat: "recovery", icon: "🔄", color: "text-teal-400", borderColor: "border-teal-500/30",
        title: "NA — Narcotics Anonymous",
        desc: "For those recovering from drug addiction. Worldwide fellowship with in-person and online meeting options.",
        link: "https://www.na.org", linkText: "Find Support", badge: "Free"
      },
      {
        cat: "recovery", icon: "🏥", color: "text-blue-400", borderColor: "border-blue-500/30",
        title: "SAMHSA Treatment Locator",
        desc: "Find local treatment facilities, support groups, and community-based organizations for addiction recovery.",
        link: "https://findtreatment.gov", linkText: "Find Treatment", badge: "Free"
      },
      {
        cat: "recovery", icon: "🌟", color: "text-yellow-400", borderColor: "border-yellow-500/30",
        title: "SMART Recovery",
        desc: "Science-based alternative to 12-step programs. Self-management and recovery training using CBT techniques.",
        link: "https://www.smartrecovery.org", linkText: "Start Free", badge: "Free"
      },
      {
        cat: "mental", icon: "🧠", color: "text-purple-400", borderColor: "border-purple-500/30",
        title: "NAMI — National Alliance on Mental Illness",
        desc: "America's largest mental health organization. Education, advocacy, helpline, and local support groups.",
        link: "https://www.nami.org", linkText: "Explore NAMI", badge: "Free"
      },
      {
        cat: "mental", icon: "💙", color: "text-blue-400", borderColor: "border-blue-500/30",
        title: "Mental Health America",
        desc: "Free mental health screening tools, resources, and educational materials for anyone seeking help.",
        link: "https://www.mhanational.org", linkText: "Get Screened", badge: "Free"
      },
      {
        cat: "therapy", icon: "🛋️", color: "text-pink-400", borderColor: "border-pink-500/30",
        title: "Psychology Today Therapist Finder",
        desc: "Find licensed therapists in your area. Filter by issue, insurance, cost, and availability.",
        link: "https://www.psychologytoday.com/us/therapists", linkText: "Find a Therapist", badge: "Filtered"
      },
      {
        cat: "therapy", icon: "💻", color: "text-indigo-400", borderColor: "border-indigo-500/30",
        title: "Open Path Collective",
        desc: "Affordable in-person and online therapy for those who need it most. Sessions from $30-$80.",
        link: "https://openpathcollective.org", linkText: "Affordable Therapy", badge: "$30-80"
      },
      {
        cat: "therapy", icon: "🏳️", color: "text-rainbow-400", borderColor: "border-yellow-500/30",
        title: "LGBTQ+ Affirming Therapists",
        desc: "Find affirming therapists who specialize in LGBTQ+ mental health, addiction, and recovery support.",
        link: "https://www.therapistwithoutwalls.com", linkText: "Find Support", badge: "Inclusive"
      },
      {
        cat: "apps", icon: "📱", color: "text-cyan-400", borderColor: "border-cyan-500/30",
        title: "Sober Grid",
        desc: "Social sobriety app to connect with others in recovery. Track your sober time and get live support.",
        link: "https://sobergrid.com", linkText: "Download Free", badge: "Free App"
      },
      {
        cat: "apps", icon: "🧘", color: "text-green-400", borderColor: "border-green-500/30",
        title: "Insight Timer",
        desc: "Free meditation and mindfulness app. Thousands of guided meditations for anxiety, sleep, and healing.",
        link: "https://insighttimer.com", linkText: "Get the App", badge: "Free App"
      },
      {
        cat: "apps", icon: "📓", color: "text-orange-400", borderColor: "border-orange-500/30",
        title: "Woebot",
        desc: "AI-powered mental health chatbot using CBT techniques. Available anytime for support between therapy sessions.",
        link: "https://woebothealth.com", linkText: "Try Woebot", badge: "Free"
      },
      {
        cat: "apps", icon: "🌊", color: "text-blue-400", borderColor: "border-blue-500/30",
        title: "Calm",
        desc: "Meditation, sleep stories, and breathing exercises designed to reduce anxiety and improve mental wellness.",
        link: "https://www.calm.com", linkText: "Start Calm", badge: "Freemium"
      },
      {
        cat: "education", icon: "📖", color: "text-yellow-400", borderColor: "border-yellow-500/30",
        title: "The Big Book (AA)",
        desc: "Alcoholics Anonymous foundational text available free online. Over 80 years of lived recovery wisdom.",
        link: "https://www.aa.org/the-big-book", linkText: "Read Free", badge: "Free"
      },
      {
        cat: "education", icon: "🎧", color: "text-purple-400", borderColor: "border-purple-500/30",
        title: "Recovery Elevator Podcast",
        desc: "Real stories from real people in recovery. Honest, funny, and deeply human conversations about sobriety.",
        link: "https://recoveryelevator.com", linkText: "Listen Free", badge: "Free"
      }
    ];

    let currentFilter = 'all';

    function filterResources(cat) {
      currentFilter = cat;
      document.querySelectorAll('.res-filter').forEach(btn => {
        if (btn.dataset.cat === cat) {
          btn.className = 'res-filter bg-purple-600/30 border border-purple-500/50 text-purple-300 px-5 py-2 rounded-full text-sm font-medium transition-all';
        } else {
          btn.className = 'res-filter glass border border-white/10 text-gray-300 px-5 py-2 rounded-full text-sm font-medium transition-all';
        }
        btn.setAttribute('data-cat', btn.dataset.cat);
      });
      renderResources();
    }

    function renderResources() {
      const grid = document.getElementById('resourcesGrid');
      const filtered = currentFilter === 'all' ? resources : resources.filter(r => r.cat === currentFilter);
      grid.innerHTML = filtered.map(r => \`
        <div class="resource-card rounded-2xl p-6 \${r.borderColor}">
          <div class="flex items-start justify-between mb-4">
            <div class="text-3xl">\${r.icon}</div>
            <span class="text-xs \${r.color} bg-white/5 px-2 py-1 rounded-full font-medium">\${r.badge}</span>
          </div>
          <h3 class="font-serif text-lg font-bold text-white mb-2">\${r.title}</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">\${r.desc}</p>
          <a href="\${r.link}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 \${r.color} text-sm font-medium hover:opacity-80 transition-opacity">
            \${r.linkText} <i class="fas fa-external-link-alt text-xs"></i>
          </a>
        </div>
      \`).join('');
    }

    // Re-assign data-cat attributes after re-render for filter buttons
    document.querySelectorAll('.res-filter').forEach(btn => {
      const match = btn.getAttribute('onclick').match(/'([^']+)'/);
      if (match) btn.dataset.cat = match[1];
    });

    renderResources();
  </script>
  `
  return layout('Resources', content, 'resources')
}
