export function layout(title: string, content: string, activePage: string = ''): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | Finding Peace</title>
  <meta name="description" content="Finding Peace – A safe haven for mental health & addiction recovery. Community, stories, milestones, and daily affirmations." />
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
  <style>
    body { font-family: 'Inter', sans-serif; }
    h1, h2, h3, .font-serif { font-family: 'Playfair Display', serif; }
    .gradient-hero { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #533483 100%); }
    .nav-link { transition: all 0.3s ease; }
    .nav-link:hover { color: #a78bfa; }
    .nav-link.active { color: #a78bfa; border-bottom: 2px solid #a78bfa; }
    .btn-primary { background: linear-gradient(135deg, #7c3aed, #4f46e5); transition: all 0.3s ease; }
    .btn-primary:hover { background: linear-gradient(135deg, #6d28d9, #4338ca); transform: translateY(-1px); box-shadow: 0 8px 25px rgba(124,58,237,0.4); }
    .btn-secondary { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); transition: all 0.3s ease; }
    .btn-secondary:hover { background: rgba(255,255,255,0.2); transform: translateY(-1px); }
    .card-hover { transition: all 0.3s ease; }
    .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(167,139,250,0.2); }
    .pulse-dot { animation: pulse 2s infinite; }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    .glass { background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); }
    .tiktok-btn { background: linear-gradient(135deg, #010101, #69C9D0); transition: all 0.3s ease; }
    .tiktok-btn:hover { background: linear-gradient(135deg, #EE1D52, #69C9D0); }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #1a1a2e; }
    ::-webkit-scrollbar-thumb { background: #7c3aed; border-radius: 3px; }
    .affirmation-card { background: linear-gradient(135deg, #1e1b4b, #312e81); border: 1px solid rgba(167,139,250,0.3); }
    .story-avatar { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.2rem; }
    .milestone-badge { background: linear-gradient(135deg, #059669, #065f46); }
    .resource-card { background: linear-gradient(135deg, rgba(30,27,75,0.8), rgba(49,46,129,0.4)); border: 1px solid rgba(167,139,250,0.2); transition: all 0.3s ease; }
    .resource-card:hover { border-color: rgba(167,139,250,0.6); transform: translateY(-2px); }
    @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
    .float-anim { animation: float 4s ease-in-out infinite; }
    .toast { position: fixed; bottom: 2rem; right: 2rem; padding: 1rem 1.5rem; border-radius: 0.75rem; background: linear-gradient(135deg, #059669, #065f46); color: white; z-index: 2000; transform: translateY(100px); opacity: 0; transition: all 0.4s ease; }
    .toast.show { transform: translateY(0); opacity: 1; }
  </style>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            peace: { 50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd', 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#5b21b6', 900: '#4c1d95' }
          }
        }
      }
    }
  </script>
</head>
<body class="bg-gray-950 text-white min-h-screen">

  <!-- Navigation -->
  <nav class="fixed top-0 w-full z-50 glass border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <a href="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <i class="fas fa-dove text-white text-sm"></i>
          </div>
          <div>
            <span class="font-serif text-lg font-bold text-white">Finding Peace</span>
            <div class="text-xs text-purple-400 -mt-1 tracking-widest uppercase">Mental Health & Recovery</div>
          </div>
        </a>

        <div class="hidden md:flex items-center gap-1">
          <a href="/" class="nav-link px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/5 ${activePage === 'home' ? 'text-purple-400' : ''}">Home</a>
          <a href="/affirmations" class="nav-link px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/5 ${activePage === 'affirmations' ? 'text-purple-400' : ''}"><i class="fas fa-sun mr-1 text-yellow-400"></i> Affirmations</a>
          <a href="/community" class="nav-link px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/5 ${activePage === 'community' ? 'text-purple-400' : ''}">Community</a>
          <a href="/stories" class="nav-link px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/5 ${activePage === 'stories' ? 'text-purple-400' : ''}">Stories</a>
          <a href="/milestones" class="nav-link px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/5 ${activePage === 'milestones' ? 'text-purple-400' : ''}">Milestones</a>
          <a href="/resources" class="nav-link px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/5 ${activePage === 'resources' ? 'text-purple-400' : ''}">Resources</a>
          <a href="/about" class="nav-link px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/5 ${activePage === 'about' ? 'text-purple-400' : ''}">About</a>
        </div>

        <div class="flex items-center gap-3">
          <a href="https://www.tiktok.com/@findingpeace" target="_blank" class="hidden sm:flex items-center gap-2 tiktok-btn text-white text-sm font-medium px-4 py-2 rounded-full transition-all hover:scale-105">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z"/></svg>
            TikTok
          </a>
          <button id="mobileMenuBtn" class="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </div>

    <div id="mobileMenu" class="hidden md:hidden border-t border-white/10 bg-gray-950/95">
      <div class="px-4 py-3 space-y-1">
        <a href="/" class="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white">🏠 Home</a>
        <a href="/affirmations" class="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white">☀️ Affirmations</a>
        <a href="/community" class="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white">💬 Community</a>
        <a href="/stories" class="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white">📖 Stories</a>
        <a href="/milestones" class="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white">🏆 Milestones</a>
        <a href="/resources" class="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white">📚 Resources</a>
        <a href="/about" class="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white">💜 About</a>
        <a href="https://www.tiktok.com/@findingpeace" target="_blank" class="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white">📱 TikTok</a>
      </div>
    </div>
  </nav>

  <main>${content}</main>

  <!-- Footer -->
  <footer class="bg-gray-950 border-t border-white/10 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
              <i class="fas fa-dove text-white text-sm"></i>
            </div>
            <span class="font-serif text-xl font-bold">Finding Peace</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed max-w-sm">A safe haven for mental health and addiction recovery. You are not alone. One day at a time.</p>
          <div class="flex items-center gap-4 mt-6">
            <a href="https://www.tiktok.com/@findingpeace" target="_blank" class="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-purple-600/30 transition-colors text-gray-400 hover:text-white">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-purple-600/30 transition-colors text-gray-400 hover:text-white">
              <i class="fab fa-instagram text-sm"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-purple-600/30 transition-colors text-gray-400 hover:text-white">
              <i class="fab fa-youtube text-sm"></i>
            </a>
          </div>
        </div>
        <div>
          <h4 class="font-semibold text-white mb-4">Explore</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="/affirmations" class="hover:text-purple-400 transition-colors">Daily Affirmations</a></li>
            <li><a href="/community" class="hover:text-purple-400 transition-colors">Community Forum</a></li>
            <li><a href="/stories" class="hover:text-purple-400 transition-colors">Share Your Story</a></li>
            <li><a href="/milestones" class="hover:text-purple-400 transition-colors">Celebrate Milestones</a></li>
            <li><a href="/resources" class="hover:text-purple-400 transition-colors">Resources</a></li>
            <li><a href="/about" class="hover:text-purple-400 transition-colors">About</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-white mb-4">Crisis Support</h4>
          <ul class="space-y-3 text-sm">
            <li><div class="text-red-400 font-semibold">🆘 Crisis Line</div><div class="text-gray-400">Call/Text: 988</div></li>
            <li><div class="text-orange-400 font-semibold">💊 SAMHSA Helpline</div><div class="text-gray-400">1-800-662-4357</div></li>
            <li><div class="text-blue-400 font-semibold">💬 Crisis Text</div><div class="text-gray-400">Text HOME to 741741</div></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-gray-500 text-sm">© 2025 Finding Peace. Made with 💜 for the community.</p>
        <p class="text-gray-600 text-xs">This site is not a substitute for professional medical advice. If you're in crisis, please call 988.</p>
      </div>
    </div>
  </footer>

  <div id="toast" class="toast"><i class="fas fa-check-circle mr-2"></i><span id="toastMessage">Success!</span></div>

  <script>
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.toggle('hidden');
    });
    function showToast(message, type) {
      const toast = document.getElementById('toast');
      document.getElementById('toastMessage').textContent = message;
      toast.style.background = type === 'info' ? 'linear-gradient(135deg, #7c3aed, #4f46e5)' : 'linear-gradient(135deg, #059669, #065f46)';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3500);
    }
    async function likeItem(type, id, btn) {
      try {
        const res = await fetch('/api/' + type + '/' + id + '/like', { method: 'POST' });
        const data = await res.json();
        if (data.likes !== undefined) {
          btn.querySelector('.like-count').textContent = data.likes;
          btn.classList.add('text-red-400');
          btn.classList.remove('text-gray-400');
        }
      } catch(e) {}
    }
  </script>
</body>
</html>`
}
