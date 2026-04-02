export const navLinks = [
  { href: '/', label: '🏠 Home' },
  { href: '/about', label: '🌸 My Story' },
  { href: '/affirmations', label: '✨ Affirmations' },
  { href: '/community', label: '💬 Community' },
  { href: '/stories', label: '📖 Stories' },
  { href: '/milestones', label: '🎉 Milestones' },
  { href: '/resources', label: '🌿 Resources' },
]

export function Layout(title: string, body: string, activePath: string = '/'): string {
  const nav = navLinks.map(l =>
    `<a href="${l.href}" class="nav-link px-3 py-1.5 rounded-full text-sm text-gray-600 ${activePath === l.href ? 'active bg-orange-50 text-orange-500 font-bold' : ''}">${l.label}</a>`
  ).join('')
  const mobileNav = navLinks.map(l =>
    `<a href="${l.href}" class="block py-2 px-3 rounded-lg text-gray-600 nav-link ${activePath === l.href ? 'active bg-orange-50 text-orange-500 font-bold' : ''}">${l.label}</a>`
  ).join('')
  const footerLinks = navLinks.map(l =>
    `<li><a href="${l.href}" class="hover:text-orange-300 transition-colors">${l.label}</a></li>`
  ).join('')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title} | Finding Peace</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Nunito:wght@300;400;600;700;800&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: 'Nunito', sans-serif; background-color: #fdf8f0; color: #3d2b1f; }
    .font-display { font-family: 'Playfair Display', serif; }
    .font-script  { font-family: 'Dancing Script', cursive; }
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #f0f5ef; }
    ::-webkit-scrollbar-thumb { background: #b2d0a8; border-radius: 4px; }
    .nav-link { transition: color .2s, background .2s; }
    .nav-link:hover { color: #e8924d; }
    #mobile-menu { display: none; }
    #mobile-menu.open { display: block; }
    .mandala-bg {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Ccircle cx='150' cy='150' r='130' fill='none' stroke='%23e8924d' stroke-width='0.5' stroke-dasharray='4,8' opacity='0.15'/%3E%3Ccircle cx='150' cy='150' r='100' fill='none' stroke='%238ab88e' stroke-width='0.5' opacity='0.15'/%3E%3Ccircle cx='150' cy='150' r='70' fill='none' stroke='%23a07fc8' stroke-width='0.5' stroke-dasharray='2,6' opacity='0.15'/%3E%3C/svg%3E");
      background-repeat: repeat;
      background-size: 300px 300px;
    }
    .peace-card { background: white; border-radius: 1.5rem; box-shadow: 0 4px 24px rgba(168,120,80,0.10); transition: transform .25s, box-shadow .25s; }
    .peace-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(168,120,80,0.18); }
    .btn-primary { background: linear-gradient(135deg, #e8924d, #d4713f); color: white; border-radius: 9999px; padding: .6rem 1.6rem; font-weight: 700; transition: opacity .2s, transform .2s; display: inline-block; cursor: pointer; border: none; text-decoration: none; }
    .btn-primary:hover { opacity: .9; transform: scale(1.03); }
    .btn-sage { background: linear-gradient(135deg, #8ab88e, #6a9e6f); color: white; border-radius: 9999px; padding: .6rem 1.6rem; font-weight: 700; transition: opacity .2s, transform .2s; display: inline-block; cursor: pointer; border: none; text-decoration: none; }
    .btn-sage:hover { opacity: .9; transform: scale(1.03); }
    .btn-dusty { background: linear-gradient(135deg, #c0a8de, #a07fc8); color: white; border-radius: 9999px; padding: .6rem 1.6rem; font-weight: 700; transition: opacity .2s, transform .2s; display: inline-block; cursor: pointer; border: none; text-decoration: none; }
    .btn-dusty:hover { opacity: .9; transform: scale(1.03); }
    .hero-gradient { background: linear-gradient(135deg, #fdf3ec 0%, #f0f5ef 40%, #f3eef8 70%, #e8f7f5 100%); }
    .band-sage   { background: linear-gradient(135deg, #f0f5ef, #d5e8d0); }
    .band-clay   { background: linear-gradient(135deg, #fdf3ec, #f9dbc5); }
    .band-dusty  { background: linear-gradient(135deg, #f3eef8, #ddd0ed); }
    .band-teal   { background: linear-gradient(135deg, #e8f7f5, #c0eae4); }
    .band-gold   { background: linear-gradient(135deg, #fef9e7, #fdedb3); }
    @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
    .float-anim { animation: float 5s ease-in-out infinite; }
    @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 0 0 rgba(232,146,77,0.4); } 50% { box-shadow: 0 0 0 12px rgba(232,146,77,0); } }
    .pulse-glow { animation: pulse-glow 2.5s ease-in-out infinite; }
    .tag-pill { background: #fdedb3; color: #c68d00; border-radius: 9999px; padding: .2rem .8rem; font-size: .75rem; font-weight: 700; display: inline-block; }
    .peace-input { width: 100%; border: 2px solid #d5e8d0; border-radius: .75rem; padding: .65rem 1rem; background: #fdf8f0; color: #3d2b1f; font-family: 'Nunito', sans-serif; transition: border-color .2s; outline: none; }
    .peace-input:focus { border-color: #8ab88e; box-shadow: 0 0 0 3px rgba(138,184,142,.2); }
    .avatar-circle { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.25rem; flex-shrink: 0; }
    .like-btn { background: none; border: 2px solid #f9dbc5; border-radius: 9999px; padding: .3rem .9rem; cursor: pointer; transition: background .2s; font-size: .85rem; font-weight: 700; color: #d4713f; font-family: 'Nunito', sans-serif; }
    .like-btn:hover, .like-btn.liked { background: #f9dbc5; }
    .peace-deco { opacity: 0.07; pointer-events: none; user-select: none; }
    .sunburst { background: conic-gradient(#fdedb3 0deg, transparent 10deg, #fdedb3 20deg, transparent 30deg, #fdedb3 40deg, transparent 50deg, #fdedb3 60deg, transparent 70deg, #fdedb3 80deg, transparent 90deg, #fdedb3 100deg, transparent 110deg, #fdedb3 120deg, transparent 130deg, #fdedb3 140deg, transparent 150deg, #fdedb3 160deg, transparent 170deg, #fdedb3 180deg, transparent 190deg, #fdedb3 200deg, transparent 210deg, #fdedb3 220deg, transparent 230deg, #fdedb3 240deg, transparent 250deg, #fdedb3 260deg, transparent 270deg, #fdedb3 280deg, transparent 290deg, #fdedb3 300deg, transparent 310deg, #fdedb3 320deg, transparent 330deg, #fdedb3 340deg, transparent 350deg, #fdedb3 360deg); border-radius: 50%; opacity: 0.4; }
    .progress-bar { height: 8px; border-radius: 4px; background: linear-gradient(90deg, #8ab88e, #e8924d, #a07fc8); }
    .tiktok-btn { background: linear-gradient(135deg, #010101, #2a2a2a); color: white; border-radius: 9999px; padding: .65rem 1.6rem; font-weight: 700; display: inline-flex; align-items: center; gap: .5rem; transition: opacity .2s, transform .2s; text-decoration: none; }
    .tiktok-btn:hover { opacity: .85; transform: scale(1.03); }
    .toast { position: fixed; bottom: 2rem; right: 2rem; background: linear-gradient(135deg, #6a9e6f, #4e7d54); color: white; border-radius: 1rem; padding: 1rem 1.5rem; font-weight: 700; box-shadow: 0 8px 24px rgba(78,125,84,.4); z-index: 2000; transform: translateY(100px); opacity: 0; transition: transform .4s, opacity .4s; }
    .toast.show { transform: translateY(0); opacity: 1; }
    /* CSS variables for community page */
    :root {
      --gold: #c8923a; --teal: #4a9b8e; --sage: #6a9e6f; --lavender: #a07fc8; --rose: #e07a8e;
      --orange: #e8924d; --cream: #fdf8f0; --dark: #3d2b1f; --muted: #7a6a5a; --border: #e0d5c8;
    }
    /* Layout helpers */
    .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
    .section { padding: 5rem 1.5rem; }
    /* Card component */
    .card { background: white; border-radius: 1.25rem; box-shadow: 0 4px 24px rgba(168,120,80,0.10); transition: transform .25s, box-shadow .25s; }
    .card:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(168,120,80,0.16); }
    /* Section title */
    .section-title { font-family: 'Playfair Display', serif; font-size: 2.2rem; font-weight: 700; color: #3d2b1f; line-height: 1.3; }
    .section-title span { color: #d4713f; }
    /* Tags */
    .tag { display: inline-flex; align-items: center; gap: .3rem; border-radius: 9999px; padding: .25rem .85rem; font-size: .78rem; font-weight: 700; }
    .tag-gold { background: #fdedb3; color: #c68d00; }
    .tag-teal { background: #d0f0eb; color: #2a7d72; }
    .tag-sage { background: #d5e8d0; color: #4a7a4e; }
    .tag-rose { background: #fde8ec; color: #c0425a; }
    .tag-lavender { background: #ede0f8; color: #6b3fa8; }
    .tag-orange { background: #fde8d5; color: #b35018; }
    /* Buttons */
    .btn { display: inline-flex; align-items: center; gap: .5rem; border-radius: 9999px; padding: .6rem 1.4rem; font-weight: 700; cursor: pointer; border: none; font-family: 'Nunito', sans-serif; font-size: .9rem; transition: opacity .2s, transform .2s; }
    .btn:hover { opacity: .9; transform: scale(1.02); }
    .btn-primary { background: linear-gradient(135deg, #e8924d, #d4713f); color: white; }
    .btn-teal { background: linear-gradient(135deg, #4a9b8e, #2a7d72); color: white; }
    .btn-sage { background: linear-gradient(135deg, #8ab88e, #6a9e6f); color: white; }
    /* Forms */
    .form-group { margin-bottom: 1rem; }
    .form-label { display: block; font-weight: 700; font-size: .85rem; color: #3d2b1f; margin-bottom: .4rem; }
    .form-input, .form-textarea, .form-select { width: 100%; border: 2px solid #e0d5c8; border-radius: .75rem; padding: .65rem 1rem; background: #fdf8f0; color: #3d2b1f; font-family: 'Nunito', sans-serif; font-size: .9rem; transition: border-color .2s; outline: none; box-sizing: border-box; }
    .form-input:focus, .form-textarea:focus, .form-select:focus { border-color: #8ab88e; box-shadow: 0 0 0 3px rgba(138,184,142,.2); }
    .form-textarea { min-height: 100px; resize: vertical; }
    /* Avatars */
    .avatar { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0; }
    .avatar-gold { background: #fdedb3; color: #c68d00; }
    .avatar-teal { background: #d0f0eb; color: #2a7d72; }
    .avatar-rose { background: #fde8ec; color: #c0425a; }
    .avatar-sage { background: #d5e8d0; color: #4a7a4e; }
    .avatar-lavender { background: #ede0f8; color: #6b3fa8; }
    .avatar-orange { background: #fde8d5; color: #b35018; }
    /* Modal */
    .modal-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,.5); z-index: 1000; align-items: center; justify-content: center; padding: 1rem; }
    .modal-overlay.open { display: flex; }
    .modal { background: white; border-radius: 1.5rem; padding: 2rem; max-width: 520px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; }
    .modal h3 { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: #3d2b1f; margin-bottom: .3rem; }
    .modal .sub { color: #7a6a5a; font-size: .9rem; margin-bottom: 1.5rem; }
    .modal-close { position: absolute; top: 1rem; right: 1rem; background: #f0ece8; border: none; border-radius: 50%; width: 32px; height: 32px; cursor: pointer; font-size: 1rem; display: flex; align-items: center; justify-content: center; }
    /* Blob decoration */
    .blob { position: absolute; border-radius: 50%; opacity: .15; filter: blur(60px); pointer-events: none; }
  </style>
</head>
<body>

<nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
  <div class="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
    <a href="/" class="flex items-center gap-2">
      <img src="https://www.genspark.ai/api/files/s/Gzabg75Z" alt="Finding Peace" class="h-10 w-10 object-contain rounded-full"/>
      <span class="font-script text-2xl" style="color:#d4713f;">Finding Peace</span>
    </a>
    <div class="hidden md:flex items-center gap-1">${nav}</div>
    <div class="flex items-center gap-3">
      <a href="https://www.tiktok.com/@findingpeace" target="_blank" class="tiktok-btn text-sm hidden sm:flex">
        <i class="fab fa-tiktok"></i> Follow
      </a>
      <button class="md:hidden p-2 rounded-lg text-gray-600 hover:bg-green-50" onclick="document.getElementById('mobile-menu').classList.toggle('open')">
        <i class="fas fa-bars text-xl"></i>
      </button>
    </div>
  </div>
  <div id="mobile-menu" class="md:hidden bg-white border-t px-4 py-3">
    ${mobileNav}
    <a href="https://www.tiktok.com/@findingpeace" target="_blank" class="tiktok-btn mt-3 w-full justify-center">
      <i class="fab fa-tiktok"></i> Follow on TikTok
    </a>
  </div>
</nav>

${body}

<footer class="bg-gray-800 text-gray-300 pt-12 pb-6">
  <div class="max-w-6xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div>
        <div class="flex items-center gap-2 mb-3">
          <img src="https://www.genspark.ai/api/files/s/Gzabg75Z" alt="Finding Peace" class="h-10 w-10 object-contain rounded-full"/>
          <span class="font-script text-2xl" style="color:#e8924d;">Finding Peace</span>
        </div>
        <p class="text-sm text-gray-400 leading-relaxed">A safe haven for mental health & addiction recovery. You are not alone. One day at a time. 🌸</p>
        <div class="flex gap-3 mt-4">
          <a href="https://www.tiktok.com/@findingpeace" target="_blank" class="w-9 h-9 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"><i class="fab fa-tiktok text-sm"></i></a>
          <a href="#" class="w-9 h-9 bg-gray-700 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors"><i class="fab fa-instagram text-sm"></i></a>
          <a href="#" class="w-9 h-9 bg-gray-700 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors"><i class="fab fa-youtube text-sm"></i></a>
        </div>
      </div>
      <div>
        <h4 class="font-bold text-white mb-3">Explore</h4>
        <ul class="space-y-2 text-sm">${footerLinks}</ul>
      </div>
      <div>
        <h4 class="font-bold text-white mb-3">Crisis Resources</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="https://988lifeline.org" target="_blank" class="hover:text-green-300 transition-colors">📞 988 Suicide & Crisis Lifeline</a></li>
          <li><a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" class="hover:text-green-300 transition-colors">📞 SAMHSA: 1-800-662-4357</a></li>
          <li><a href="https://www.crisistextline.org" target="_blank" class="hover:text-green-300 transition-colors">💬 Crisis Text: Text HOME to 741741</a></li>
          <li><a href="https://www.aa.org" target="_blank" class="hover:text-green-300 transition-colors">🌿 Alcoholics Anonymous</a></li>
          <li><a href="https://na.org" target="_blank" class="hover:text-green-300 transition-colors">🌿 Narcotics Anonymous</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
      <p>Made with 💙 for the Finding Peace community | This site is a support resource, not a medical provider.</p>
      <p class="mt-1">If you are in immediate danger, call <strong class="text-white">911</strong>. For mental health crisis, call or text <strong class="text-white">988</strong>.</p>
    </div>
  </div>
</footer>

<div id="toast" class="toast"></div>
<script>
function showToast(msg, type) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.background = (type === 'error')
    ? 'linear-gradient(135deg,#c05050,#9b2c2c)'
    : 'linear-gradient(135deg,#6a9e6f,#4e7d54)';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}
function openModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open')); });
document.querySelectorAll('.modal-overlay').forEach(o => o.addEventListener('click', e => { if (e.target === o) { o.classList.remove('open'); document.body.style.overflow = ''; } }));
</script>
</body>
</html>`
}
