import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()
app.use('/static/*', serveStatic({ root: './' }))
app.use('/api/*', cors())

// ─── SHARED STYLES & LAYOUT ─────────────────────────────────────────
const css = `
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
:root{
  --cream:#fdf6ec;--warm:#fffdf7;
  --gold:#c8923a;--gold-l:#e8b86d;--gold-p:#f5dfa8;
  --teal:#4a9b8e;--teal-l:#7abfb4;--teal-p:#d0eeea;
  --rose:#c97b84;--rose-p:#f2d5d8;
  --sage:#7a9e7e;--sage-l:#a8c5ab;--sage-p:#ddeedd;
  --lav:#9b8ec4;--lav-p:#e8e2f5;
  --orange:#d4784a;--orange-p:#fce8d8;
  --dark:#2c2418;--mid:#5c4a32;--muted:#8a7560;--border:#e8d9c0;
  --shadow:rgba(44,36,24,0.12)
}
body{font-family:'Nunito',sans-serif;background:var(--warm);color:var(--dark);min-height:100vh;
  background-image:radial-gradient(circle at 10% 20%,rgba(200,146,58,0.05) 0%,transparent 50%),radial-gradient(circle at 90% 80%,rgba(74,155,142,0.05) 0%,transparent 50%)}

/* NAV */
.navbar{position:sticky;top:0;z-index:1000;background:rgba(253,246,236,0.94);backdrop-filter:blur(14px);border-bottom:1.5px solid var(--border);padding:0 1.5rem;display:flex;align-items:center;justify-content:space-between;height:68px;box-shadow:0 2px 16px var(--shadow)}
.brand{display:flex;align-items:center;gap:.6rem;text-decoration:none}
.brand-logo{width:40px;height:40px;border-radius:50%;object-fit:cover;border:2px solid var(--gold-l)}
.brand-name{font-family:'Dancing Script',cursive;font-size:1.55rem;color:var(--gold);line-height:1}
.nav-links{display:flex;align-items:center;gap:.2rem}
.nav-link{font-family:'Nunito',sans-serif;font-weight:700;font-size:.86rem;color:var(--mid);text-decoration:none;padding:.4rem .9rem;border-radius:20px;transition:all .2s}
.nav-link:hover,.nav-link.active{color:var(--gold);background:rgba(200,146,58,.12)}
.nav-link.active{font-weight:800}
.nav-tik{display:flex;align-items:center;gap:.4rem;background:linear-gradient(135deg,#ff0050,#cc0040);color:#fff;text-decoration:none;padding:.45rem 1rem;border-radius:20px;font-size:.82rem;font-weight:800;box-shadow:0 2px 10px rgba(255,0,80,.25);transition:all .2s}
.nav-tik:hover{transform:translateY(-1px);box-shadow:0 4px 16px rgba(255,0,80,.35)}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:6px;background:none;border:none}
.hamburger span{display:block;width:22px;height:2px;background:var(--mid);border-radius:2px}
.mob-menu{display:none;position:fixed;top:68px;left:0;right:0;background:rgba(253,246,236,.98);backdrop-filter:blur(14px);border-bottom:1.5px solid var(--border);padding:1rem 1.5rem 1.5rem;z-index:999;flex-direction:column;gap:.3rem;box-shadow:0 8px 24px var(--shadow)}
.mob-menu.open{display:flex}
.mob-menu .nav-link{font-size:.95rem;padding:.65rem 1rem}
.mob-menu .nav-tik{justify-content:center;padding:.65rem 1rem;margin-top:.5rem}
@media(max-width:768px){.nav-links,.nav-tik{display:none}.hamburger{display:flex}}

/* CRISIS BAR */
.crisis{background:linear-gradient(135deg,#1a3a4a,#0d2b3a);color:#fff;text-align:center;padding:.55rem 1rem;font-size:.8rem;font-weight:700}
.crisis a{color:var(--teal-l);text-decoration:none;font-weight:800}

/* FOOTER */
.footer{background:var(--dark);color:rgba(253,246,236,.75);padding:3.5rem 1.5rem 1.5rem;margin-top:4rem}
.footer-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr;gap:3rem}
.footer-brand-name{font-family:'Dancing Script',cursive;font-size:2rem;color:var(--gold-l)}
.footer-tag{margin-top:.6rem;font-size:.86rem;line-height:1.6;color:rgba(253,246,236,.55)}
.footer-socials{display:flex;gap:.7rem;margin-top:1rem}
.fsoc{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:.9rem;transition:all .2s}
.fsoc:hover{transform:scale(1.15)}
.fsoc-tik{background:linear-gradient(135deg,#ff0050,#00f2ea);color:#fff}
.fsoc-ig{background:linear-gradient(135deg,#f09433,#bc1888);color:#fff}
.footer-col h4{font-family:'Playfair Display',serif;color:var(--gold-l);font-size:1rem;margin-bottom:.9rem}
.footer-col a{display:block;color:rgba(253,246,236,.6);text-decoration:none;font-size:.86rem;margin-bottom:.5rem;transition:color .2s}
.footer-col a:hover{color:var(--gold-l)}
.footer-bottom{max-width:1100px;margin:2rem auto 0;padding-top:1.3rem;border-top:1px solid rgba(255,255,255,.1);display:flex;justify-content:space-between;font-size:.78rem;color:rgba(253,246,236,.35);flex-wrap:wrap;gap:.5rem}
@media(max-width:768px){.footer-inner{grid-template-columns:1fr;gap:2rem}.footer-bottom{justify-content:center;text-align:center}}

/* UTILS */
.container{max-width:1100px;margin:0 auto;padding:0 1.5rem}
.section{padding:5rem 0}
.section-title{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,4vw,2.8rem);color:var(--dark);line-height:1.2;margin-bottom:.5rem}
.section-title span{color:var(--gold);font-style:italic}
.section-sub{font-size:1rem;color:var(--muted);line-height:1.65;max-width:560px}
.btn{display:inline-flex;align-items:center;gap:.5rem;padding:.7rem 1.7rem;border-radius:30px;font-family:'Nunito',sans-serif;font-weight:800;font-size:.92rem;text-decoration:none;border:none;cursor:pointer;transition:all .25s;letter-spacing:.01em}
.btn-primary{background:linear-gradient(135deg,var(--gold),var(--gold-l));color:#fff;box-shadow:0 4px 16px rgba(200,146,58,.35)}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 6px 22px rgba(200,146,58,.45)}
.btn-teal{background:linear-gradient(135deg,var(--teal),var(--teal-l));color:#fff;box-shadow:0 4px 14px rgba(74,155,142,.3)}
.btn-teal:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(74,155,142,.4)}
.btn-outline{background:transparent;color:var(--gold);border:2px solid var(--gold)}
.btn-outline:hover{background:rgba(200,146,58,.1);transform:translateY(-2px)}
.btn-ghost{background:rgba(255,255,255,.7);color:var(--mid);border:1.5px solid var(--border)}
.btn-ghost:hover{background:#fff;transform:translateY(-2px);box-shadow:0 4px 12px var(--shadow)}
.card{background:#fff;border-radius:20px;border:1.5px solid var(--border);box-shadow:0 4px 20px var(--shadow);transition:all .3s;overflow:hidden}
.card:hover{transform:translateY(-4px);box-shadow:0 10px 35px rgba(44,36,24,.15)}
.avatar{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.05rem;flex-shrink:0}
.av-gold{background:linear-gradient(135deg,var(--gold),var(--gold-l));color:#fff}
.av-teal{background:linear-gradient(135deg,var(--teal),var(--teal-l));color:#fff}
.av-rose{background:linear-gradient(135deg,var(--rose),#e8a4af);color:#fff}
.av-sage{background:linear-gradient(135deg,var(--sage),var(--sage-l));color:#fff}
.av-lav{background:linear-gradient(135deg,var(--lav),#b8acdc);color:#fff}
.av-or{background:linear-gradient(135deg,var(--orange),#e8976a);color:#fff}
.tag{display:inline-flex;align-items:center;gap:.3rem;padding:.28rem .8rem;border-radius:20px;font-size:.76rem;font-weight:800;letter-spacing:.02em}
.tag-gold{background:var(--gold-p);color:var(--mid)}
.tag-teal{background:var(--teal-p);color:var(--teal)}
.tag-rose{background:var(--rose-p);color:var(--rose)}
.tag-sage{background:var(--sage-p);color:var(--sage)}
.tag-lav{background:var(--lav-p);color:var(--lav)}
.like-btn{background:none;border:1.5px solid var(--border);border-radius:20px;padding:.32rem .85rem;display:inline-flex;align-items:center;gap:.4rem;font-size:.8rem;font-weight:800;color:var(--muted);cursor:pointer;transition:all .2s;font-family:'Nunito',sans-serif}
.like-btn:hover,.like-btn.liked{background:var(--rose-p);border-color:var(--rose);color:var(--rose)}
/* Forms */
.form-group{margin-bottom:1.1rem}
.form-label{display:block;font-size:.83rem;font-weight:800;color:var(--mid);margin-bottom:.38rem;letter-spacing:.02em}
.form-input,.form-textarea,.form-select{width:100%;padding:.72rem 1rem;border:1.5px solid var(--border);border-radius:12px;font-family:'Nunito',sans-serif;font-size:.92rem;color:var(--dark);background:#fff;transition:border-color .2s,box-shadow .2s;outline:none}
.form-input:focus,.form-textarea:focus,.form-select:focus{border-color:var(--gold);box-shadow:0 0 0 3px rgba(200,146,58,.15)}
.form-textarea{resize:vertical;min-height:108px}
/* Modal */
.modal-overlay{display:none;position:fixed;inset:0;background:rgba(44,36,24,.55);z-index:2000;align-items:center;justify-content:center;padding:1rem;backdrop-filter:blur(4px)}
.modal-overlay.open{display:flex}
.modal{background:var(--warm);border-radius:24px;padding:2.3rem;max-width:510px;width:100%;border:1.5px solid var(--border);box-shadow:0 20px 60px rgba(44,36,24,.25);position:relative;max-height:90vh;overflow-y:auto}
.modal-close{position:absolute;top:1.1rem;right:1.1rem;width:30px;height:30px;border-radius:50%;border:none;background:var(--border);color:var(--mid);font-size:.9rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s}
.modal-close:hover{background:var(--gold-p);color:var(--gold)}
.modal h3{font-family:'Playfair Display',serif;font-size:1.45rem;color:var(--dark);margin-bottom:.35rem}
.modal .sub{color:var(--muted);font-size:.88rem;margin-bottom:1.4rem}
/* Toast */
.toast{position:fixed;bottom:2rem;right:2rem;background:var(--dark);color:var(--cream);padding:.9rem 1.4rem;border-radius:14px;font-size:.88rem;font-weight:700;z-index:9999;transform:translateY(100px);opacity:0;transition:all .4s cubic-bezier(.34,1.56,.64,1);max-width:290px;box-shadow:0 8px 30px rgba(44,36,24,.3)}
.toast.show{transform:translateY(0);opacity:1}
.toast.s{border-left:4px solid var(--teal)}
.toast.e{border-left:4px solid var(--rose)}
/* Blob */
.blob{position:absolute;border-radius:50%;filter:blur(60px);opacity:.12;pointer-events:none;z-index:0}
/* Reveal */
.reveal{opacity:0;transform:translateY(28px);transition:opacity .65s ease,transform .65s ease}
.reveal.visible{opacity:1;transform:translateY(0)}
/* Aff/Res cards */
.aff-card,.res-card{background:#fff;border:1.5px solid var(--border);border-radius:18px;padding:1.7rem;transition:all .3s;cursor:pointer;position:relative;overflow:hidden}
.aff-card:hover,.res-card:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(44,36,24,.12)}
.aff-card.hidden,.res-card.hidden{display:none}
/* Filter btns */
.filter-btn{padding:.48rem 1.1rem;border-radius:20px;border:1.5px solid var(--border);background:#fff;color:var(--mid);font-family:'Nunito',sans-serif;font-weight:800;font-size:.83rem;cursor:pointer;transition:all .2s}
.filter-btn:hover{background:var(--gold-p);border-color:var(--gold-l)}
.filter-btn.active{background:var(--gold);border-color:var(--gold);color:#fff}
.filter-btn-teal.active{background:var(--sage);border-color:var(--sage);color:#fff}
/* Tab btns */
.tab-btn{padding:.55rem 1.2rem;border-radius:24px;border:none;background:none;font-family:'Nunito',sans-serif;font-weight:800;font-size:.86rem;color:var(--muted);cursor:pointer;transition:all .2s}
.tab-btn:hover{color:var(--gold)}
.tab-btn.active{background:var(--gold);color:#fff;box-shadow:0 3px 10px rgba(200,146,58,.3)}
`

const fonts = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Nunito:wght@300;400;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
`

const tiktokIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.86a8.19 8.19 0 004.79 1.52V6.91a4.85 4.85 0 01-1.02-.22z"/></svg>`

function nav(active: string) {
  const links = [
    ['/', 'Home'],
    ['/about', 'My Story'],
    ['/affirmations', 'Affirmations'],
    ['/community', 'Community'],
    ['/resources', 'Resources'],
  ]
  const items = links.map(([href, label]) =>
    `<a href="${href}" class="nav-link${active === href ? ' active' : ''}">${label}</a>`
  ).join('')
  return `
<div class="crisis">🆘 Crisis? Call or text <a href="tel:988">988</a> &nbsp;·&nbsp; Text HELLO to <a href="sms:741741">741741</a> &nbsp;·&nbsp; SAMHSA: <a href="tel:18006624357">1-800-662-4357</a></div>
<nav class="navbar">
  <a href="/" class="brand">
    <img src="https://www.genspark.ai/api/files/s/Gzabg75Z" alt="Finding Peace" class="brand-logo" onerror="this.style.display='none'">
    <span class="brand-name">Finding Peace</span>
  </a>
  <div class="nav-links">${items}</div>
  <a href="https://www.tiktok.com/@findingpeace" target="_blank" rel="noopener" class="nav-tik">${tiktokIcon} TikTok</a>
  <button class="hamburger" onclick="document.getElementById('mob').classList.toggle('open')" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mob-menu" id="mob">
  ${items}
  <a href="https://www.tiktok.com/@findingpeace" target="_blank" rel="noopener" class="nav-tik">${tiktokIcon} Follow on TikTok</a>
</div>`
}

function footer() {
  return `
<footer class="footer">
  <div class="footer-inner">
    <div>
      <div class="footer-brand-name">Finding Peace</div>
      <p class="footer-tag">Real talk on mental health &amp; addiction recovery.<br>No toxic positivity. Just truth, tools, and community.<br>Based in New Jersey 🌿</p>
      <div class="footer-socials">
        <a href="https://www.tiktok.com/@findingpeace" target="_blank" class="fsoc fsoc-tik">${tiktokIcon}</a>
        <a href="https://instagram.com" target="_blank" class="fsoc fsoc-ig"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Explore</h4>
      <a href="/">Home</a>
      <a href="/about">My Story</a>
      <a href="/affirmations">Daily Affirmations</a>
      <a href="/community">Community</a>
      <a href="/resources">Resources</a>
    </div>
    <div class="footer-col">
      <h4>Get Help Now</h4>
      <a href="tel:988">📞 988 Crisis Line</a>
      <a href="tel:18006624357">📞 SAMHSA Helpline</a>
      <a href="https://www.crisistextline.org" target="_blank">💬 Crisis Text Line</a>
      <a href="https://www.aa.org" target="_blank">🌿 AA Meetings</a>
      <a href="/resources">All Resources →</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Finding Peace with Devon · New Jersey</span>
    <span>Made with 💙 for the community · Not a substitute for professional care</span>
  </div>
</footer>`
}

function scripts() {
  return `
<div class="toast" id="toast"></div>
<script>
function showToast(msg,type='s'){
  const t=document.getElementById('toast');
  t.textContent=msg;t.className='toast '+type;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3500);
}
function openModal(id){document.getElementById(id).classList.add('open');document.body.style.overflow='hidden'}
function closeModal(id){document.getElementById(id).classList.remove('open');document.body.style.overflow=''}
document.addEventListener('click',e=>{
  const mob=document.getElementById('mob');
  if(mob&&mob.classList.contains('open')&&!mob.contains(e.target)&&!e.target.closest('.hamburger'))mob.classList.remove('open');
  if(e.target.classList.contains('modal-overlay'))closeModal(e.target.id);
});
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
</script>`
}

function page(title: string, active: string, body: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${title} | Finding Peace</title>
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌸</text></svg>">
${fonts}
<style>${css}</style>
</head>
<body>
${nav(active)}
${body}
${footer()}
${scripts()}
</body>
</html>`
}

// ─── DATA ────────────────────────────────────────────────────────────
const stories: any[] = [
  { id:1, name:"Sarah M.", avatar:"S", story:"Three years ago I hit rock bottom. Today I'm 18 months sober and just got my dream job. Finding Peace helped me realize I wasn't alone. If you're struggling — there is light on the other side. 💙", date:"March 28, 2025", likes:47, milestone:"18 months sober" },
  { id:2, name:"Jake T.", avatar:"J", story:"Anxiety used to rule my life. I couldn't leave my house some days. Through daily affirmations and this community, I've learned to take it one moment at a time. This week I went to a concert — first one in 4 years!", date:"March 25, 2025", likes:34, milestone:"First concert in 4 years" },
  { id:3, name:"Maria L.", avatar:"M", story:"I found Finding Peace during my darkest hour. The funny affirmations made me laugh when all I wanted to do was cry. Sometimes you just need someone to say 'hey, this is hard, but you're still here and that matters.'", date:"March 20, 2025", likes:62, milestone:"6 months of therapy" },
  { id:4, name:"Anonymous", avatar:"A", story:"Day 47. Just needed to say it out loud somewhere: I'm doing this. It's hard and I cry a lot but I am actually doing this.", date:"March 15, 2025", likes:88, milestone:"Day 47 clean" },
]

const milestones: any[] = [
  { id:1, name:"Alex R.", avatar:"A", milestone:"1 Year Sober 🎉", description:"One full year! Never thought I'd say that. To anyone reading — it IS possible.", date:"April 1, 2025", likes:89 },
  { id:2, name:"Devon K.", avatar:"D", milestone:"1 Week No Social Media", description:"Digital detox complete. My anxiety dropped SO much.", date:"March 30, 2025", likes:23 },
  { id:3, name:"Priya S.", avatar:"P", milestone:"90 Days Clean 💪", description:"90 days. One day at a time. Still here. Still fighting.", date:"March 27, 2025", likes:71 },
  { id:4, name:"Chris B.", avatar:"C", milestone:"Started Therapy", description:"Finally asked for help. It took everything I had. But I did it.", date:"March 22, 2025", likes:55 },
  { id:5, name:"River T.", avatar:"R", milestone:"First AA Meeting 🌿", description:"Shook the whole time. Didn't say a word. But I showed up.", date:"March 18, 2025", likes:102 },
]

// ─── HOME ────────────────────────────────────────────────────────────
app.get('/', c => c.html(page('Welcome Home', '/', `

<section style="position:relative;overflow:hidden;background:linear-gradient(155deg,#fdf6ec 0%,#f5ede0 45%,#eef5f0 100%);padding:5rem 1.5rem 4.5rem">
  <div class="blob" style="width:480px;height:480px;background:var(--gold);top:-100px;right:-100px"></div>
  <div class="blob" style="width:380px;height:380px;background:var(--teal);bottom:-80px;left:-80px"></div>
  <div class="blob" style="width:260px;height:260px;background:var(--lav);top:35%;left:35%"></div>
  <div style="position:absolute;top:1.5rem;right:9%;font-size:3rem;opacity:.05;transform:rotate(15deg)">☮</div>
  <div style="position:absolute;bottom:3rem;left:5%;font-size:4rem;opacity:.05;transform:rotate(-10deg)">🌸</div>
  <div class="container" style="position:relative;z-index:1">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center">
      <div>
        <div style="display:inline-flex;align-items:center;gap:.5rem;background:rgba(200,146,58,.12);border:1px solid rgba(200,146,58,.3);padding:.42rem .95rem;border-radius:20px;margin-bottom:1.4rem">
          <span>🌿</span><span style="font-size:.78rem;font-weight:800;color:var(--gold);letter-spacing:.08em;text-transform:uppercase">Mental Health &amp; Addiction Recovery</span>
        </div>
        <h1 style="font-family:'Dancing Script',cursive;font-size:clamp(3rem,7vw,5.5rem);color:var(--dark);line-height:1.05;margin-bottom:.8rem">
          Finding<br><span style="color:var(--gold)">Peace</span>
        </h1>
        <p style="font-family:'Playfair Display',serif;font-size:1.12rem;color:var(--mid);font-style:italic;margin-bottom:1.4rem;line-height:1.6">
          "You don't have to have it all figured out to move forward."
        </p>
        <p style="font-size:.98rem;color:var(--muted);line-height:1.8;margin-bottom:2rem;max-width:470px">
          Hey — I'm Devon. Based in New Jersey, dog mom to Odin, and someone who talks about the parts of mental health &amp; addiction recovery that usually get polished away. No toxic positivity. Just real talk, real tools, and a real community.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:.8rem;margin-bottom:2rem">
          <a href="https://www.tiktok.com/@findingpeace" target="_blank" rel="noopener" class="btn" style="background:linear-gradient(135deg,#ff0050,#cc0040);color:#fff;box-shadow:0 4px 18px rgba(255,0,80,.3)">${tiktokIcon} Follow on TikTok</a>
          <a href="/community" class="btn btn-teal"><i class="fas fa-heart"></i> Join the Community</a>
          <a href="/about" class="btn btn-ghost">My Story →</a>
        </div>
        <div style="display:flex;gap:2rem;flex-wrap:wrap">
          <div style="text-align:center"><div style="font-family:'Playfair Display',serif;font-size:1.5rem;font-weight:700;color:var(--gold)">Daily</div><div style="font-size:.75rem;color:var(--muted);font-weight:800;text-transform:uppercase;letter-spacing:.06em">Affirmations</div></div>
          <div style="width:1px;background:var(--border)"></div>
          <div style="text-align:center"><div style="font-family:'Playfair Display',serif;font-size:1.5rem;font-weight:700;color:var(--teal)">100%</div><div style="font-size:.75rem;color:var(--muted);font-weight:800;text-transform:uppercase;letter-spacing:.06em">Zero Fluff</div></div>
          <div style="width:1px;background:var(--border)"></div>
          <div style="text-align:center"><div style="font-family:'Playfair Display',serif;font-size:1.5rem;font-weight:700;color:var(--lav)">NJ</div><div style="font-size:.75rem;color:var(--muted);font-weight:800;text-transform:uppercase;letter-spacing:.06em">Based</div></div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:1.4rem">
        <div style="position:relative">
          <div style="width:255px;height:255px;border-radius:50%;background:linear-gradient(135deg,rgba(200,146,58,.14),rgba(74,155,142,.14));display:flex;align-items:center;justify-content:center;border:2px solid rgba(200,146,58,.22)">
            <img src="https://www.genspark.ai/api/files/s/Gzabg75Z" alt="Finding Peace" style="width:225px;height:225px;object-fit:contain;border-radius:50%" onerror="this.parentElement.innerHTML='<div style=\\'font-family:Dancing Script,cursive;font-size:2.8rem;color:var(--gold);text-align:center;padding:1.5rem;\\'>Finding<br>Peace</div>'">
          </div>
          <div style="position:absolute;top:-8px;right:-8px;background:linear-gradient(135deg,var(--teal),var(--teal-l));color:#fff;border-radius:14px;padding:.45rem .85rem;font-size:.76rem;font-weight:800;box-shadow:0 4px 14px rgba(74,155,142,.35)">🌿 Real. Honest. Healing.</div>
        </div>
        <div class="card" style="padding:1.2rem 1.4rem;max-width:310px;width:100%;background:linear-gradient(135deg,#fffdf7,#fdf6ec);border-color:var(--gold-p)">
          <div style="font-size:.7rem;font-weight:800;color:var(--gold);text-transform:uppercase;letter-spacing:.1em;margin-bottom:.45rem">✨ Today's Affirmation</div>
          <p id="heroAff" style="font-family:'Playfair Display',serif;font-style:italic;font-size:.93rem;color:var(--dark);line-height:1.55;transition:opacity .4s">"You survived 100% of your worst days. That's actually a pretty impressive track record."</p>
        </div>
      </div>
    </div>
  </div>
  <style>@media(max-width:768px){section .container>div{grid-template-columns:1fr!important}section .container>div>div:last-child{display:none!important}}</style>
</section>

<!-- WHAT I'M ABOUT -->
<section class="section" style="background:#fff">
  <div class="container">
    <div style="text-align:center;margin-bottom:3.5rem" class="reveal">
      <div style="color:var(--gold-l);font-size:1.4rem;letter-spacing:.5rem;margin-bottom:.7rem">✿ ☮ ✿</div>
      <h2 class="section-title">What I'm <span>About</span></h2>
      <p class="section-sub" style="margin:.6rem auto 0">Three pillars that guide everything I create and every conversation I have.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem">
      <div class="card reveal" style="padding:2rem;background:linear-gradient(160deg,#fffdf7,#fdf6ec)">
        <div style="width:54px;height:54px;border-radius:16px;background:linear-gradient(135deg,var(--gold),var(--gold-l));display:flex;align-items:center;justify-content:center;font-size:1.4rem;margin-bottom:1.1rem;box-shadow:0 4px 14px rgba(200,146,58,.3)">🎯</div>
        <div style="font-size:.7rem;font-weight:800;color:var(--gold);text-transform:uppercase;letter-spacing:.1em;margin-bottom:.4rem">The Mission</div>
        <h3 style="font-family:'Playfair Display',serif;font-size:1.15rem;margin-bottom:.6rem;color:var(--dark)">Real Talk</h3>
        <p style="color:var(--muted);font-size:.9rem;line-height:1.65">Real talk on mental health and sustainable addiction recovery. No glossing over the hard parts — the struggle is real and deserves to be treated that way.</p>
      </div>
      <div class="card reveal" style="padding:2rem;background:linear-gradient(160deg,#f5fdf8,#eef5f0)">
        <div style="width:54px;height:54px;border-radius:16px;background:linear-gradient(135deg,var(--teal),var(--teal-l));display:flex;align-items:center;justify-content:center;font-size:1.4rem;margin-bottom:1.1rem;box-shadow:0 4px 14px rgba(74,155,142,.3)">💬</div>
        <div style="font-size:.7rem;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:.1em;margin-bottom:.4rem">The Vibe</div>
        <h3 style="font-family:'Playfair Display',serif;font-size:1.15rem;margin-bottom:.6rem;color:var(--dark)">Casual &amp; Honest</h3>
        <p style="color:var(--muted);font-size:.9rem;line-height:1.65">Casual, honest, and zero fluff. Sometimes recovery is messy and awkward and even kind of funny — and that's okay.</p>
      </div>
      <div class="card reveal" style="padding:2rem;background:linear-gradient(160deg,#f8f5ff,#f0ecfa)">
        <div style="width:54px;height:54px;border-radius:16px;background:linear-gradient(135deg,var(--lav),#b8acdc);display:flex;align-items:center;justify-content:center;font-size:1.4rem;margin-bottom:1.1rem;box-shadow:0 4px 14px rgba(155,142,196,.3)">🌸</div>
        <div style="font-size:.7rem;font-weight:800;color:var(--lav);text-transform:uppercase;letter-spacing:.1em;margin-bottom:.4rem">The Goal</div>
        <h3 style="font-family:'Playfair Display',serif;font-size:1.15rem;margin-bottom:.6rem;color:var(--dark)">Achievable Peace</h3>
        <p style="color:var(--muted);font-size:.9rem;line-height:1.65">Building a space where "finding peace" feels achievable, not just like a buzzword. Community, tools, and a daily reminder you're not alone.</p>
      </div>
    </div>
  </div>
</section>

<!-- AFFIRMATIONS TEASER -->
<section style="background:linear-gradient(160deg,#1a2e28,#0d2318);padding:5rem 1.5rem;position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;background-image:radial-gradient(circle at 20% 50%,rgba(74,155,142,.15) 0%,transparent 50%),radial-gradient(circle at 80% 50%,rgba(200,146,58,.1) 0%,transparent 50%)"></div>
  <div style="position:absolute;top:2rem;left:5%;font-size:5rem;opacity:.04;color:#fff">☮</div>
  <div style="position:absolute;bottom:2rem;right:5%;font-size:4rem;opacity:.04;color:#fff">🌿</div>
  <div class="container" style="position:relative;z-index:1">
    <div style="text-align:center;margin-bottom:3rem" class="reveal">
      <div style="color:var(--teal-l);font-size:1.2rem;letter-spacing:.5rem;margin-bottom:.7rem">✦ ✦ ✦</div>
      <h2 style="font-family:'Dancing Script',cursive;font-size:clamp(2rem,5vw,3.5rem);color:#fff;margin-bottom:.6rem">Daily Affirmations</h2>
      <p style="color:rgba(255,255,255,.6);font-size:.98rem;max-width:480px;margin:0 auto">The kind that actually work because they're rooted in truth, not denial.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.2rem;margin-bottom:2.5rem">
      <div class="card reveal" style="padding:1.5rem;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);box-shadow:none"><div style="font-size:1.8rem;margin-bottom:.7rem">📊</div><p style="font-family:'Playfair Display',serif;font-style:italic;color:rgba(255,255,255,.88);font-size:.93rem;line-height:1.6">"You survived 100% of your worst days. That's actually a pretty impressive track record."</p></div>
      <div class="card reveal" style="padding:1.5rem;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);box-shadow:none"><div style="font-size:1.8rem;margin-bottom:.7rem">🌮</div><p style="font-family:'Playfair Display',serif;font-style:italic;color:rgba(255,255,255,.88);font-size:.93rem;line-height:1.6">"Progress, not perfection. Unless we're talking about tacos — then perfection only."</p></div>
      <div class="card reveal" style="padding:1.5rem;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);box-shadow:none"><div style="font-size:1.8rem;margin-bottom:.7rem">🧠</div><p style="font-family:'Playfair Display',serif;font-style:italic;color:rgba(255,255,255,.88);font-size:.93rem;line-height:1.6">"Your brain is healing. It's just doing it at its own stubborn little pace."</p></div>
    </div>
    <div style="text-align:center"><a href="/affirmations" class="btn btn-primary"><i class="fas fa-sun"></i> See All 30 Affirmations</a></div>
  </div>
</section>

<!-- COMMUNITY SPOTLIGHT -->
<section class="section" style="background:var(--cream)">
  <div class="container">
    <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:3rem;flex-wrap:wrap;gap:1rem" class="reveal">
      <div>
        <div style="color:var(--gold-l);font-size:1.1rem;letter-spacing:.4rem;margin-bottom:.5rem">✿ ✿ ✿</div>
        <h2 class="section-title">Community <span>Voices</span></h2>
        <p class="section-sub" style="margin-top:.5rem">Real stories from real people finding their way forward.</p>
      </div>
      <a href="/community" class="btn btn-outline">See All Stories →</a>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem" id="spotlight">
      <div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--muted)">🌿 Loading...</div>
    </div>
  </div>
</section>

<!-- JOIN CTA -->
<section style="padding:5rem 1.5rem;background:linear-gradient(135deg,var(--teal-p),var(--lav-p),var(--rose-p))">
  <div style="max-width:680px;margin:0 auto;text-align:center" class="reveal">
    <div style="font-size:3rem;margin-bottom:1rem">🌸</div>
    <h2 style="font-family:'Playfair Display',serif;font-size:clamp(1.8rem,4vw,2.7rem);color:var(--dark);margin-bottom:1rem">You Don't Have to <span style="color:var(--teal);font-style:italic">Figure It Out Alone</span></h2>
    <p style="color:var(--muted);font-size:1rem;line-height:1.75;margin-bottom:2rem">This community is built for the messy, in-progress version of you — not some future perfect version. Share your story, celebrate wins, ask the hard questions, and find people who actually get it.</p>
    <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
      <a href="/community" class="btn btn-teal"><i class="fas fa-users"></i> Join the Community</a>
      <a href="/resources" class="btn btn-ghost"><i class="fas fa-hands-helping"></i> Find Resources</a>
    </div>
  </div>
</section>

<!-- TIKTOK CTA -->
<section style="padding:4rem 1.5rem;background:#fff">
  <div style="max-width:780px;margin:0 auto" class="reveal">
    <div style="background:linear-gradient(135deg,#0d0d0d,#1a1a2e);border-radius:22px;padding:2.8rem;display:flex;align-items:center;gap:2.2rem;flex-wrap:wrap">
      <div style="width:76px;height:76px;border-radius:18px;background:linear-gradient(135deg,#ff0050,#00f2ea);display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 6px 24px rgba(255,0,80,.35)">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.86a8.19 8.19 0 004.79 1.52V6.91a4.85 4.85 0 01-1.02-.22z"/></svg>
      </div>
      <div style="flex:1;min-width:200px">
        <div style="color:rgba(255,255,255,.45);font-size:.75rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;margin-bottom:.4rem">Daily Content on TikTok</div>
        <h3 style="font-family:'Playfair Display',serif;font-size:1.55rem;color:#fff;margin-bottom:.55rem">@findingpeace</h3>
        <p style="color:rgba(255,255,255,.62);font-size:.88rem;line-height:1.55">Daily funny affirmations, real recovery talk, and content that makes you go "omg same" — come hang.</p>
      </div>
      <a href="https://www.tiktok.com/@findingpeace" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:.5rem;background:#fff;color:#0d0d0d;padding:.75rem 1.45rem;border-radius:25px;font-weight:800;font-size:.88rem;text-decoration:none;transition:transform .2s;flex-shrink:0" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">Follow <i class="fas fa-arrow-right"></i></a>
    </div>
  </div>
</section>

<script>
const avs=['av-gold','av-teal','av-rose','av-sage','av-lav','av-or'];
fetch('/api/stories').then(r=>r.json()).then(s=>{
  document.getElementById('spotlight').innerHTML=s.slice(0,3).map((x,i)=>
    '<div class="card reveal" style="padding:1.7rem">'+
    '<div style="display:flex;align-items:center;gap:.8rem;margin-bottom:.9rem">'+
    '<div class="avatar '+avs[i%6]+'">'+x.avatar+'</div>'+
    '<div><div style="font-weight:800;font-size:.9rem;color:var(--dark)">'+x.name+'</div>'+
    '<div style="font-size:.76rem;color:var(--muted)">'+x.date+'</div></div></div>'+
    (x.milestone?'<span class="tag tag-teal" style="margin-bottom:.8rem;display:inline-flex">\uD83C\uDFC6 '+x.milestone+'</span>':'')+
    '<p style="color:var(--muted);font-size:.89rem;line-height:1.65">'+(x.story.length>155?x.story.slice(0,155)+'...':x.story)+'</p></div>'
  ).join('');
  document.querySelectorAll('#spotlight .reveal').forEach(el=>setTimeout(()=>el.classList.add('visible'),100));
}).catch(()=>{document.getElementById('spotlight').innerHTML='<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--muted)">Could not load stories right now.</div>'});

const affs=["You survived 100% of your worst days. That's actually a pretty impressive track record.","Healing isn't linear. It's more like a Spotify shuffle on a really weird playlist.","Today's goal: exist. Tomorrow we can aim higher.","Your feelings are valid even when your brain is being a dramatic little gremlin.","You're not broken. You're mid-renovation.","Progress counts even when it's microscopic and ugly."];
let ai=0;const el=document.getElementById('heroAff');
if(el){setInterval(()=>{ai=(ai+1)%affs.length;el.style.opacity='0';setTimeout(()=>{el.textContent='"'+affs[ai]+'"';el.style.opacity='1'},400)},5000)}
</script>
`)))

// ─── ABOUT ───────────────────────────────────────────────────────────
app.get('/about', c => c.html(page("My Story", '/about', `

<section style="position:relative;overflow:hidden;background:linear-gradient(160deg,#fdf6ec,#f0f7f4);padding:5rem 1.5rem 4rem">
  <div class="blob" style="width:380px;height:380px;background:var(--gold);top:-80px;right:-80px"></div>
  <div class="blob" style="width:320px;height:320px;background:var(--teal);bottom:-60px;left:-60px"></div>
  <div class="container" style="position:relative;z-index:1;text-align:center">
    <div style="display:inline-flex;align-items:center;gap:.5rem;background:rgba(200,146,58,.1);border:1px solid rgba(200,146,58,.25);padding:.42rem .95rem;border-radius:20px;margin-bottom:1.4rem">
      <span>🌿</span><span style="font-size:.76rem;font-weight:800;color:var(--gold);letter-spacing:.1em;text-transform:uppercase">My Story · My Mission</span>
    </div>
    <h1 style="font-family:'Dancing Script',cursive;font-size:clamp(3rem,7vw,5rem);color:var(--dark);line-height:1.1;margin-bottom:1.1rem">Hi, I'm <span style="color:var(--gold)">Devon</span> 🌸</h1>
    <p style="font-family:'Playfair Display',serif;font-style:italic;font-size:1.12rem;color:var(--mid);line-height:1.7;max-width:650px;margin:0 auto 1.4rem">"The road to finding peace isn't a straight line — it's often messy, occasionally funny, and always a work in progress."</p>
    <div style="display:flex;flex-wrap:wrap;gap:.65rem;justify-content:center">
      <span class="tag tag-gold">📍 New Jersey</span>
      <span class="tag tag-teal">🐕 Dog Mom to Odin</span>
      <span class="tag tag-rose">💙 Mental Health Advocate</span>
      <span class="tag tag-sage">🌿 Recovery Advocate</span>
      <span class="tag tag-lav">🎵 TikTok Creator</span>
    </div>
  </div>
</section>

<section class="section" style="background:#fff">
  <div class="container">
    <div style="display:grid;grid-template-columns:320px 1fr;gap:4rem;align-items:start">

      <div class="reveal" style="position:sticky;top:90px">
        <div style="background:linear-gradient(160deg,var(--teal-p),var(--lav-p));border-radius:24px;padding:2.3rem;text-align:center;border:1.5px solid var(--border)">
          <div style="width:130px;height:130px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--teal));display:flex;align-items:center;justify-content:center;margin:0 auto 1.3rem;box-shadow:0 8px 28px rgba(200,146,58,.28);font-size:3.5rem">🌸</div>
          <h3 style="font-family:'Dancing Script',cursive;font-size:1.75rem;color:var(--dark);margin-bottom:.15rem">Devon</h3>
          <p style="color:var(--muted);font-size:.86rem;margin-bottom:1.2rem">Substance Abuse Advocate · Creator</p>
          <div style="background:#fff;border-radius:12px;padding:1rem;margin-bottom:.7rem;border:1px solid var(--border)">
            <div style="font-size:.68rem;font-weight:800;color:var(--gold);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.3rem">Based in</div>
            <div style="font-weight:800;color:var(--dark)">📍 New Jersey</div>
          </div>
          <div style="background:#fff;border-radius:12px;padding:1rem;margin-bottom:1.1rem;border:1px solid var(--border)">
            <div style="font-size:.68rem;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.3rem">Dog Mom To</div>
            <div style="font-weight:800;color:var(--dark)">🐕 Odin</div>
          </div>
          <a href="https://www.tiktok.com/@findingpeace" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:.45rem;background:linear-gradient(135deg,#ff0050,#cc0040);color:#fff;text-decoration:none;padding:.7rem 1.1rem;border-radius:20px;font-weight:800;font-size:.86rem;box-shadow:0 4px 14px rgba(255,0,80,.28)">
            ${tiktokIcon} @findingpeace
          </a>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:.7rem;margin-top:1rem">
          <img src="https://www.genspark.ai/api/files/s/SIGm46tR" alt="Finding Peace logo" style="border-radius:14px;width:100%;object-fit:cover;border:1px solid var(--border)" onerror="this.style.display='none'">
          <img src="https://www.genspark.ai/api/files/s/yYh5D2hy" alt="Finding Peace logo" style="border-radius:14px;width:100%;object-fit:cover;border:1px solid var(--border)" onerror="this.style.display='none'">
        </div>
      </div>

      <div>
        <div class="reveal" style="margin-bottom:2.8rem">
          <div style="display:flex;align-items:center;gap:.7rem;margin-bottom:.8rem"><div style="height:2px;width:50px;background:linear-gradient(to right,var(--gold),transparent);border-radius:2px"></div><span style="font-size:1rem;color:var(--gold)">🌿</span></div>
          <h2 class="section-title" style="margin-bottom:.9rem">The <span>Unpolished</span> Truth</h2>
          <div style="font-size:.98rem;color:var(--muted);line-height:1.82">
            <p style="margin-bottom:1.1rem">I'm Devon, and I'm here to talk about the parts of mental health and addiction recovery that usually get polished away. Based in New Jersey, I'm a creator, a dog mom to Odin, and someone who knows firsthand that the road to finding peace isn't a straight line — it's often messy, occasionally funny, and always a work in progress.</p>
            <p style="margin-bottom:1.1rem">Through my channel, Finding Peace, I advocate for a recovery process that prioritizes authenticity over perfection. I don't do "toxic positivity." Instead, I share realistic tools, direct advice, and those funny affirmations that actually work because they're rooted in the truth of the struggle.</p>
            <p>Whether you're navigating addiction recovery or just trying to keep your head above water, I'm here to show you that you don't have to have it all figured out to move forward.</p>
          </div>
        </div>

        <div class="reveal" style="background:linear-gradient(135deg,#1a2e28,#0d2318);border-radius:20px;padding:2rem 2.3rem;margin-bottom:2.8rem;position:relative;overflow:hidden">
          <div style="position:absolute;top:-8px;right:1rem;font-size:5.5rem;color:rgba(255,255,255,.05);font-family:Georgia,serif;line-height:1">"</div>
          <p style="font-family:'Playfair Display',serif;font-style:italic;font-size:1.15rem;color:rgba(255,255,255,.9);line-height:1.65;position:relative;z-index:1">I believe in being blunt, staying relatable, and using every tool available — from community support to the latest tech — to help us all find a little more clarity in the chaos.</p>
          <div style="margin-top:.9rem;color:var(--teal-l);font-weight:800;font-size:.86rem">— Devon, Finding Peace</div>
        </div>

        <div class="reveal" style="margin-bottom:2.8rem">
          <h3 style="font-family:'Playfair Display',serif;font-size:1.35rem;color:var(--dark);margin-bottom:1.3rem">What I'm About</h3>
          <div style="display:flex;flex-direction:column;gap:.9rem">
            <div style="display:flex;gap:1.1rem;align-items:flex-start;padding:1.4rem;background:linear-gradient(135deg,#fdf6ec,#f8f0e4);border-radius:16px;border:1.5px solid var(--border)">
              <div style="width:46px;height:46px;border-radius:13px;background:linear-gradient(135deg,var(--gold),var(--gold-l));display:flex;align-items:center;justify-content:center;font-size:1.25rem;flex-shrink:0">🎯</div>
              <div><div style="font-size:.7rem;font-weight:800;color:var(--gold);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.28rem">The Mission</div><h4 style="font-family:'Playfair Display',serif;font-size:.98rem;margin-bottom:.35rem;color:var(--dark)">Real Talk on Mental Health &amp; Sustainable Recovery</h4><p style="color:var(--muted);font-size:.88rem;line-height:1.6">No sugarcoating. No wellness-speak. Just honest conversations about what recovery actually looks like when you're living it.</p></div>
            </div>
            <div style="display:flex;gap:1.1rem;align-items:flex-start;padding:1.4rem;background:linear-gradient(135deg,#f0f7f4,#e8f3f0);border-radius:16px;border:1.5px solid var(--border)">
              <div style="width:46px;height:46px;border-radius:13px;background:linear-gradient(135deg,var(--teal),var(--teal-l));display:flex;align-items:center;justify-content:center;font-size:1.25rem;flex-shrink:0">💬</div>
              <div><div style="font-size:.7rem;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.28rem">The Vibe</div><h4 style="font-family:'Playfair Display',serif;font-size:.98rem;margin-bottom:.35rem;color:var(--dark)">Casual, Honest, and Zero Fluff</h4><p style="color:var(--muted);font-size:.88rem;line-height:1.6">I believe in being blunt, staying relatable, and using every tool available to help us all find a little more clarity in the chaos.</p></div>
            </div>
            <div style="display:flex;gap:1.1rem;align-items:flex-start;padding:1.4rem;background:linear-gradient(135deg,#f5f0ff,#ede8ff);border-radius:16px;border:1.5px solid var(--border)">
              <div style="width:46px;height:46px;border-radius:13px;background:linear-gradient(135deg,var(--lav),#b8acdc);display:flex;align-items:center;justify-content:center;font-size:1.25rem;flex-shrink:0">🌸</div>
              <div><div style="font-size:.7rem;font-weight:800;color:var(--lav);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.28rem">The Goal</div><h4 style="font-family:'Playfair Display',serif;font-size:.98rem;margin-bottom:.35rem;color:var(--dark)">Building a Space Where Peace Feels Achievable</h4><p style="color:var(--muted);font-size:.88rem;line-height:1.6">Not a buzzword. A daily practice. A community holding it together one honest conversation at a time.</p></div>
            </div>
          </div>
        </div>

        <div class="reveal" style="background:linear-gradient(135deg,var(--teal-p),var(--lav-p));border-radius:20px;padding:1.9rem;border:1.5px solid var(--border)">
          <h3 style="font-family:'Playfair Display',serif;font-size:1.25rem;color:var(--dark);margin-bottom:.55rem">Come find your people 🌿</h3>
          <p style="color:var(--muted);font-size:.88rem;line-height:1.65;margin-bottom:1.1rem">Join the community, share your story, or just lurk — all of it is valid and welcome here.</p>
          <div style="display:flex;gap:.75rem;flex-wrap:wrap">
            <a href="/community" class="btn btn-teal"><i class="fas fa-heart"></i> Join Community</a>
            <a href="/affirmations" class="btn btn-ghost">Daily Affirmations</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>@media(max-width:900px){.container>div[style*="grid-template-columns:320px"]{grid-template-columns:1fr!important}}</style>
`)))

// ─── AFFIRMATIONS ────────────────────────────────────────────────────
app.get('/affirmations', c => c.html(page("Daily Affirmations", '/affirmations', `

<section style="background:linear-gradient(160deg,#1a2e28,#0d2318,#1a2438);padding:4.5rem 1.5rem;position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;background-image:radial-gradient(circle at 25% 50%,rgba(74,155,142,.18) 0%,transparent 50%),radial-gradient(circle at 75% 50%,rgba(200,146,58,.12) 0%,transparent 50%)"></div>
  <div style="position:absolute;top:1rem;left:5%;font-size:6rem;opacity:.03;color:#fff">☮</div>
  <div style="position:absolute;bottom:1rem;right:5%;font-size:5rem;opacity:.03;color:#fff">🌸</div>
  <div class="container" style="position:relative;z-index:1;text-align:center">
    <div style="display:inline-flex;align-items:center;gap:.5rem;background:rgba(74,155,142,.2);border:1px solid rgba(74,155,142,.3);padding:.42rem .95rem;border-radius:20px;margin-bottom:1.4rem">
      <span>✨</span><span style="font-size:.76rem;font-weight:800;color:var(--teal-l);letter-spacing:.1em;text-transform:uppercase">Daily Affirmations by Devon</span>
    </div>
    <h1 style="font-family:'Dancing Script',cursive;font-size:clamp(2.5rem,6vw,4.5rem);color:#fff;margin-bottom:.9rem">Affirmations That <span style="color:var(--gold-l)">Actually Work</span></h1>
    <p style="color:rgba(255,255,255,.62);font-size:.98rem;max-width:540px;margin:0 auto 2rem;line-height:1.7">Because they're rooted in the truth of the struggle — not some fantasy version of healing. Honest, sometimes funny, always real.</p>
    <div style="max-width:580px;margin:0 auto;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:22px;padding:2.3rem">
      <div style="font-size:3.8rem;line-height:1;margin-bottom:.9rem" id="affEmoji">😤</div>
      <p id="featAff" style="font-family:'Playfair Display',serif;font-style:italic;font-size:1.2rem;color:#fff;line-height:1.6;transition:opacity .35s">"You survived 100% of your worst days. That's actually a pretty impressive track record."</p>
      <div style="margin-top:1.4rem;display:flex;justify-content:center;align-items:center;gap:.75rem">
        <button onclick="prevA()" style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#fff;width:38px;height:38px;border-radius:50%;cursor:pointer;font-size:1rem;transition:background .2s" onmouseover="this.style.background='rgba(255,255,255,.2)'" onmouseout="this.style.background='rgba(255,255,255,.1)'">&#8249;</button>
        <span id="affCtr" style="color:rgba(255,255,255,.4);font-size:.83rem">1 / 30</span>
        <button onclick="nextA()" style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#fff;width:38px;height:38px;border-radius:50%;cursor:pointer;font-size:1rem;transition:background .2s" onmouseover="this.style.background='rgba(255,255,255,.2)'" onmouseout="this.style.background='rgba(255,255,255,.1)'">&#8250;</button>
      </div>
    </div>
  </div>
</section>

<section style="padding:1.6rem 1.5rem;background:#fff;border-bottom:1.5px solid var(--border)">
  <div class="container"><div style="display:flex;gap:.6rem;flex-wrap:wrap;justify-content:center">
    <button class="filter-btn active" onclick="fAff('all',this)">🌿 All</button>
    <button class="filter-btn" onclick="fAff('recovery',this)">💪 Recovery</button>
    <button class="filter-btn" onclick="fAff('anxiety',this)">🧘 Anxiety</button>
    <button class="filter-btn" onclick="fAff('self-love',this)">💛 Self-Love</button>
    <button class="filter-btn" onclick="fAff('progress',this)">📈 Progress</button>
    <button class="filter-btn" onclick="fAff('bad-days',this)">🌧 Bad Days</button>
    <button class="filter-btn" onclick="fAff('funny',this)">😂 Funny Ones</button>
  </div></div>
</section>

<section class="section" style="background:var(--cream)">
  <div class="container">
    <div style="text-align:center;margin-bottom:2.8rem" class="reveal">
      <h2 class="section-title">The Full <span>Collection</span></h2>
      <p class="section-sub" style="margin:.5rem auto 0">30 affirmations. Click any to copy &amp; share with someone who needs it.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(295px,1fr));gap:1.1rem" id="affGrid"></div>
  </div>
</section>

<section style="padding:4rem 1.5rem;background:#fff">
  <div style="max-width:620px;margin:0 auto;text-align:center" class="reveal">
    <div style="font-size:2.4rem;margin-bottom:.9rem">📲</div>
    <h2 style="font-family:'Playfair Display',serif;font-size:1.75rem;color:var(--dark);margin-bottom:.75rem">Want More Daily?</h2>
    <p style="color:var(--muted);font-size:.96rem;line-height:1.7;margin-bottom:1.7rem">I post daily affirmations and recovery content on TikTok. Come hang — bring your messy, unfinished self. That's literally the vibe.</p>
    <a href="https://www.tiktok.com/@findingpeace" target="_blank" rel="noopener" class="btn" style="background:linear-gradient(135deg,#ff0050,#cc0040);color:#fff;box-shadow:0 4px 18px rgba(255,0,80,.3)">${tiktokIcon} Follow @findingpeace</a>
  </div>
</section>

<script>
const affs=[
  {t:"You survived 100% of your worst days. That's actually a pretty impressive track record.",e:"📊",c:["funny","progress","recovery"]},
  {t:"Healing isn't linear. It's more like a Spotify shuffle on a really weird playlist.",e:"🎵",c:["funny","progress","recovery"]},
  {t:"Today's goal: exist. Tomorrow we can aim higher.",e:"🌅",c:["bad-days","anxiety","self-love"]},
  {t:"Your feelings are valid even when your brain is being a dramatic little gremlin.",e:"🧠",c:["anxiety","self-love","funny"]},
  {t:"You're not broken. You're mid-renovation.",e:"🔨",c:["recovery","self-love","progress"]},
  {t:"Progress counts even when it's microscopic and ugly.",e:"🔬",c:["progress","recovery","bad-days"]},
  {t:"You don't have to have it all figured out to move forward.",e:"🚶",c:["recovery","anxiety","progress"]},
  {t:"Bad days are data, not destiny.",e:"📉",c:["bad-days","anxiety","progress"]},
  {t:"Rest is not the same as giving up. Your body knows the difference even when your brain doesn't.",e:"😴",c:["self-love","bad-days","anxiety"]},
  {t:"You've come too far to go back. Also, back there was bad. Remember? Don't go back.",e:"🔄",c:["funny","recovery","progress"]},
  {t:"One day at a time. Or one hour. Or one minute. Whatever works, we're not judging.",e:"⏰",c:["recovery","anxiety","bad-days"]},
  {t:"Your story matters. Even the parts you're still figuring out. Especially those parts.",e:"📖",c:["self-love","recovery"]},
  {t:"Asking for help is not a weakness. It's actually the hardest thing a lot of people will ever do.",e:"🤝",c:["recovery","self-love","anxiety"]},
  {t:"You are not your worst moment. You are every single time you got up after it.",e:"⬆️",c:["recovery","self-love","bad-days"]},
  {t:"Being a work in progress doesn't mean you're less valuable. Diamonds start as coal and go through a lot.",e:"💎",c:["self-love","progress","recovery"]},
  {t:"Your mess isn't a character flaw. It's just Tuesday.",e:"📅",c:["funny","bad-days","self-love"]},
  {t:"Boundaries are not walls. They're the velvet rope to your own well-being. VIP only.",e:"🚧",c:["self-love","recovery","funny"]},
  {t:"You're allowed to feel proud of surviving something that wasn't supposed to be survivable.",e:"🏆",c:["recovery","self-love","progress"]},
  {t:"The fact that you're reading this means your brain is still trying. That counts.",e:"💙",c:["bad-days","anxiety","self-love"]},
  {t:"Relapse is not the end of the story. Chapter 47 can still be a comeback chapter.",e:"📝",c:["recovery","bad-days","progress"]},
  {t:"Anxiety told me today was going to be terrible. Anxiety has been wrong before.",e:"😤",c:["funny","anxiety","bad-days"]},
  {t:"You deserve peace. Not the 'everything is perfect' kind, but the 'I can handle this' kind.",e:"🌿",c:["self-love","recovery","anxiety"]},
  {t:"Crying is not a sign of weakness. It's your body pressure-washing your soul.",e:"😭",c:["funny","self-love","bad-days"]},
  {t:"You made it through every single difficult day so far. Your track record is flawless.",e:"✅",c:["progress","recovery","bad-days"]},
  {t:"Some days the bravest thing you can do is take a shower and make a sandwich. And that's valid.",e:"🥪",c:["funny","bad-days","self-love"]},
  {t:"Recovery is not about becoming a different person. It's about finally meeting the real one.",e:"🪞",c:["recovery","self-love"]},
  {t:"Your past is not a life sentence. It's a chapter. You're the author. Keep writing.",e:"✍️",c:["recovery","progress","self-love"]},
  {t:"Comparison is the thief of recovery. Your timeline is your own and it's exactly right.",e:"⏳",c:["recovery","self-love","progress"]},
  {t:"It's okay to not be okay. It's also okay to be okay. You don't have to perform anything.",e:"🎭",c:["self-love","anxiety","bad-days"]},
  {t:"You are braver than you believe, stronger than you think, and definitely more fun at parties sober.",e:"🎉",c:["funny","recovery","self-love"]}
];
const catC={recovery:['var(--teal-p)','var(--teal)'],anxiety:['var(--lav-p)','var(--lav)'],'self-love':['var(--rose-p)','var(--rose)'],progress:['var(--sage-p)','var(--sage)'],'bad-days':['var(--orange-p)','var(--orange)'],funny:['var(--gold-p)','var(--gold)']};
let ci=0,cf='all';
function updA(i){const el=document.getElementById('featAff'),em=document.getElementById('affEmoji'),ct=document.getElementById('affCtr');el.style.opacity='0';setTimeout(()=>{el.textContent='"'+affs[i].t+'"';em.textContent=affs[i].e;ct.textContent=(i+1)+' / '+affs.length;el.style.opacity='1'},300)}
function nextA(){ci=(ci+1)%affs.length;updA(ci)}
function prevA(){ci=(ci-1+affs.length)%affs.length;updA(ci)}
setInterval(nextA,8000);
function renderAff(){
  document.getElementById('affGrid').innerHTML=affs.map((a,i)=>{
    const cat=a.c[0],[bg,col]=catC[cat]||['#f5f5f5','#666'];
    const vis=cf==='all'||a.c.includes(cf);
    return '<div class="aff-card reveal'+(vis?'':' hidden')+'" data-cats="'+a.c.join(',')+'" onclick="cpAff('+i+')">'+
    '<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,'+col+',transparent);border-radius:18px 18px 0 0"></div>'+
    '<div style="display:flex;align-items:flex-start;gap:.7rem;margin-bottom:.75rem">'+
    '<div style="font-size:1.9rem;line-height:1">'+a.e+'</div>'+
    '<div style="display:flex;flex-wrap:wrap;gap:.35rem">'+a.c.map(x=>'<span style="background:'+(catC[x]?.[0]||'#f5f5f5')+';color:'+(catC[x]?.[1]||'#666')+';font-size:.68rem;font-weight:800;padding:.18rem .55rem;border-radius:10px;text-transform:capitalize">'+x+'</span>').join('')+'</div></div>'+
    '<p style="font-family:Playfair Display,serif;font-style:italic;color:var(--dark);font-size:.92rem;line-height:1.58">"'+a.t+'"</p>'+
    '<div style="margin-top:.9rem;color:var(--muted);font-size:.75rem;font-weight:700"><i class="fas fa-copy"></i> Click to copy &amp; share</div></div>';
  }).join('');
  document.querySelectorAll('#affGrid .reveal').forEach(el=>setTimeout(()=>el.classList.add('visible'),100));
}
function fAff(cat,btn){
  cf=cat;document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  document.querySelectorAll('.aff-card').forEach(c=>{
    if(cat==='all'||c.dataset.cats.split(',').includes(cat))c.classList.remove('hidden');else c.classList.add('hidden');
  });
}
function cpAff(i){
  navigator.clipboard.writeText('"'+affs[i].t+'" — Finding Peace with Devon').then(()=>showToast('✨ Copied! Share it with someone who needs it.','s')).catch(()=>showToast('💙 Affirmation noted!','s'));
}
renderAff();
</script>
`)))

// ─── COMMUNITY ────────────────────────────────────────────────────────
app.get('/community', c => c.html(page("Community", '/community', `

<section style="background:linear-gradient(160deg,#f5fdf8,#fdf6ec,#f5f0ff);padding:4.5rem 1.5rem 3.5rem;position:relative;overflow:hidden">
  <div class="blob" style="width:320px;height:320px;background:var(--teal);top:-70px;right:-55px"></div>
  <div class="blob" style="width:280px;height:280px;background:var(--lav);bottom:-55px;left:-35px"></div>
  <div class="container" style="position:relative;z-index:1;text-align:center">
    <div style="display:inline-flex;align-items:center;gap:.5rem;background:rgba(74,155,142,.12);border:1px solid rgba(74,155,142,.25);padding:.42rem .95rem;border-radius:20px;margin-bottom:1.4rem">
      <span>🌸</span><span style="font-size:.76rem;font-weight:800;color:var(--teal);letter-spacing:.1em;text-transform:uppercase">Safe Haven Community</span>
    </div>
    <h1 class="section-title" style="margin-bottom:.9rem">Your <span>People</span> Are Here</h1>
    <p style="color:var(--muted);font-size:1rem;max-width:540px;margin:0 auto 1.8rem;line-height:1.7">A judgment-free space to share your story, ask for real feedback, celebrate milestones, and find people who actually get it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:.62rem;justify-content:center;margin-bottom:1.8rem">
      <span class="tag tag-sage">✅ No Judgment</span>
      <span class="tag tag-teal">🤝 Real Support</span>
      <span class="tag tag-rose">💙 All Stages Welcome</span>
      <span class="tag tag-gold">🔒 Safe Space</span>
    </div>
    <div style="display:inline-flex;background:#fff;border-radius:30px;padding:.32rem;border:1.5px solid var(--border);gap:.28rem">
      <button class="tab-btn active" onclick="swTab('stories',this)">📖 Stories</button>
      <button class="tab-btn" onclick="swTab('milestones',this)">🏆 Milestones</button>
      <button class="tab-btn" onclick="swTab('feedback',this)">💬 Ask for Feedback</button>
    </div>
  </div>
</section>

<section class="section" style="background:var(--cream)">
  <div class="container">

    <div id="t-stories">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.8rem;flex-wrap:wrap;gap:1rem">
        <div><h2 class="section-title" style="font-size:1.75rem">Community <span>Stories</span></h2><p style="color:var(--muted);font-size:.88rem;margin-top:.25rem">Real people, real journeys. You're not alone.</p></div>
        <button onclick="openModal('storyMod')" class="btn btn-primary"><i class="fas fa-pen"></i> Share Your Story</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(310px,1fr));gap:1.4rem" id="storiesGrid">
        <div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--muted)">🌿 Loading stories...</div>
      </div>
    </div>

    <div id="t-milestones" style="display:none">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.8rem;flex-wrap:wrap;gap:1rem">
        <div><h2 class="section-title" style="font-size:1.75rem">Milestones &amp; <span>Wins</span></h2><p style="color:var(--muted);font-size:.88rem;margin-top:.25rem">Every win counts. Every. Single. One.</p></div>
        <button onclick="openModal('msMod')" class="btn btn-teal"><i class="fas fa-trophy"></i> Share a Milestone</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(295px,1fr));gap:1.2rem" id="msGrid">
        <div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--muted)">🏆 Loading milestones...</div>
      </div>
    </div>

    <div id="t-feedback" style="display:none">
      <div style="max-width:700px;margin:0 auto">
        <div style="text-align:center;margin-bottom:2.2rem">
          <h2 class="section-title" style="font-size:1.75rem">Ask for <span>Feedback</span></h2>
          <p style="color:var(--muted);font-size:.93rem;margin-top:.5rem;line-height:1.7">Whether you need advice, want accountability, or just need to vent — this is your space.</p>
        </div>
        <div class="card" style="padding:1.9rem;margin-bottom:1.8rem">
          <h3 style="font-family:'Playfair Display',serif;font-size:1.15rem;margin-bottom:.35rem;color:var(--dark)">Post a Question or Ask for Support</h3>
          <p style="color:var(--muted);font-size:.86rem;margin-bottom:1.3rem">Judgment-free zone. Ask away.</p>
          <div class="form-group"><label class="form-label">Your name (or stay anonymous)</label><input class="form-input" id="fbName" placeholder="Your name or 'Anonymous'"></div>
          <div class="form-group"><label class="form-label">Category</label><select class="form-select" id="fbCat"><option value="advice">Asking for Advice</option><option value="accountability">Accountability Check-in</option><option value="resources">Looking for Resources</option><option value="venting">Just Need to Vent</option><option value="celebrating">Celebrating a Win</option></select></div>
          <div class="form-group"><label class="form-label">What's on your mind?</label><textarea class="form-textarea" id="fbText" placeholder="No filtering required here..."></textarea></div>
          <button onclick="subFb()" class="btn btn-teal" style="width:100%"><i class="fas fa-paper-plane"></i> Post to Community</button>
        </div>
        <div id="fbList"></div>
      </div>
    </div>

  </div>
</section>

<!-- STORY MODAL -->
<div class="modal-overlay" id="storyMod">
  <div class="modal">
    <button class="modal-close" onclick="closeModal('storyMod')">✕</button>
    <div style="font-size:1.9rem;margin-bottom:.45rem">📖</div>
    <h3>Share Your Story</h3>
    <p class="sub">You don't need to have it figured out. Just be honest.</p>
    <div class="form-group"><label class="form-label">Your name (or stay anonymous)</label><input class="form-input" id="sName" placeholder="e.g. Jamie M. or Anonymous"></div>
    <div class="form-group"><label class="form-label">Your milestone (optional)</label><input class="form-input" id="sMile" placeholder="e.g. 6 months sober, started therapy..."></div>
    <div class="form-group"><label class="form-label">Your story <span style="color:var(--muted)">(required)</span></label><textarea class="form-textarea" id="sText" placeholder="Whatever you want to share — all of it is welcome." style="min-height:120px"></textarea></div>
    <button onclick="subStory()" class="btn btn-primary" style="width:100%"><i class="fas fa-heart"></i> Share with the Community</button>
    <p style="font-size:.76rem;color:var(--muted);margin-top:.9rem;text-align:center">This community is moderated with care. You're safe here. 🌿</p>
  </div>
</div>

<!-- MILESTONE MODAL -->
<div class="modal-overlay" id="msMod">
  <div class="modal">
    <button class="modal-close" onclick="closeModal('msMod')">✕</button>
    <div style="font-size:1.9rem;margin-bottom:.45rem">🏆</div>
    <h3>Celebrate a Milestone</h3>
    <p class="sub">Big or small — it all counts. We're here for it.</p>
    <div class="form-group"><label class="form-label">Your name</label><input class="form-input" id="msName" placeholder="e.g. Alex or Anonymous"></div>
    <div class="form-group"><label class="form-label">Your milestone <span style="color:var(--muted)">(required)</span></label><input class="form-input" id="msMile" placeholder="e.g. 1 Year Sober 🎉, First therapy session..."></div>
    <div class="form-group"><label class="form-label">Tell us about it (optional)</label><textarea class="form-textarea" id="msDesc" placeholder="What does this milestone mean to you?"></textarea></div>
    <button onclick="subMs()" class="btn btn-teal" style="width:100%"><i class="fas fa-trophy"></i> Celebrate with Us!</button>
  </div>
</div>

<script>
const avCls=['av-gold','av-teal','av-rose','av-sage','av-lav','av-or'];
function getAv(i){return avCls[i%avCls.length]}
function swTab(tab,btn){
  ['stories','milestones','feedback'].forEach(t=>document.getElementById('t-'+t).style.display=t===tab?'block':'none');
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
}
function loadStories(){
  fetch('/api/stories').then(r=>r.json()).then(s=>{
    const g=document.getElementById('storiesGrid');
    if(!s.length){g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--muted)">No stories yet — be the first! 🌸</div>';return}
    g.innerHTML=s.map((x,i)=>'<div class="card" style="padding:1.7rem">'+
      '<div style="display:flex;align-items:center;gap:.8rem;margin-bottom:.9rem"><div class="avatar '+getAv(i)+'">'+x.avatar+'</div>'+
      '<div><div style="font-weight:800;font-size:.9rem;color:var(--dark)">'+x.name+'</div><div style="font-size:.75rem;color:var(--muted)">'+x.date+'</div></div></div>'+
      (x.milestone?'<span class="tag tag-teal" style="margin-bottom:.85rem;display:inline-flex">\uD83C\uDFC6 '+x.milestone+'</span>':'')+
      '<p style="color:var(--muted);font-size:.9rem;line-height:1.7;margin-bottom:1.1rem">'+x.story+'</p>'+
      '<button class="like-btn" onclick="likeIt(\'story\','+x.id+',this)"><i class="fas fa-heart"></i> <span>'+x.likes+'</span></button></div>'
    ).join('');
  });
}
function loadMs(){
  fetch('/api/milestones').then(r=>r.json()).then(ms=>{
    const g=document.getElementById('msGrid');
    if(!ms.length){g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--muted)">No milestones yet. Be brave! 🏆</div>';return}
    g.innerHTML=ms.map((m,i)=>'<div class="card" style="padding:1.7rem;position:relative;overflow:hidden">'+
      '<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--gold),var(--teal))"></div>'+
      '<div style="display:flex;align-items:center;gap:.8rem;margin-bottom:.9rem"><div class="avatar '+getAv(i)+'">'+m.avatar+'</div>'+
      '<div><div style="font-weight:800;font-size:.9rem;color:var(--dark)">'+m.name+'</div><div style="font-size:.75rem;color:var(--muted)">'+m.date+'</div></div></div>'+
      '<div style="font-family:Playfair Display,serif;font-size:1.08rem;color:var(--dark);margin-bottom:.55rem;font-weight:700">'+m.milestone+'</div>'+
      (m.description?'<p style="color:var(--muted);font-size:.88rem;line-height:1.6;margin-bottom:.9rem">'+m.description+'</p>':'')+
      '<button class="like-btn" onclick="likeIt(\'milestone\','+m.id+',this)"><i class="fas fa-fire"></i> <span>'+m.likes+'</span></button></div>'
    ).join('');
  });
}
function likeIt(type,id,btn){
  if(btn.classList.contains('liked'))return;
  fetch('/api/'+type+'s/'+id+'/like',{method:'POST'}).then(r=>r.json()).then(d=>{btn.classList.add('liked');btn.querySelector('span').textContent=d.likes;showToast('💙 Thanks for the love!','s')});
}
function subStory(){
  const name=document.getElementById('sName').value.trim(),story=document.getElementById('sText').value.trim(),milestone=document.getElementById('sMile').value.trim();
  if(!story){showToast('Please share something — anything! 💙','e');return}
  fetch('/api/stories',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:name||'Anonymous',story,milestone})})
    .then(r=>r.json()).then(()=>{closeModal('storyMod');showToast('🌸 Your story has been shared. Thank you.','s');document.getElementById('sName').value='';document.getElementById('sText').value='';document.getElementById('sMile').value='';loadStories()})
    .catch(()=>showToast('Something went wrong. Try again.','e'));
}
function subMs(){
  const name=document.getElementById('msName').value.trim(),milestone=document.getElementById('msMile').value.trim(),description=document.getElementById('msDesc').value.trim();
  if(!milestone){showToast('What milestone are you celebrating? 🏆','e');return}
  fetch('/api/milestones',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:name||'Anonymous',milestone,description})})
    .then(r=>r.json()).then(()=>{closeModal('msMod');showToast('🎉 Milestone shared! We are SO proud!','s');document.getElementById('msName').value='';document.getElementById('msMile').value='';document.getElementById('msDesc').value='';loadMs()})
    .catch(()=>showToast('Something went wrong.','e'));
}
const fbPosts=[
  {id:1,name:"Someone going through it",cat:"advice",text:"How do you handle cravings when they hit at 2am and there's no one to call? Some nights feel impossible.",date:"Today",replies:4},
  {id:2,name:"Anonymous",cat:"accountability",text:"Day 3 clean. Just checking in. Feeling shaky but still here.",date:"Yesterday",replies:7},
  {id:3,name:"River T.",cat:"celebrating",text:"I made it to my first AA meeting. Shook the whole time. Didn't say a word. But I went.",date:"2 days ago",replies:12}
];
const catL={advice:'🙋 Advice',accountability:'✅ Accountability',resources:'📚 Resources',venting:'💨 Venting',celebrating:'🎉 Celebrating'};
const catT={advice:'tag-teal',accountability:'tag-sage',resources:'tag-lav',venting:'tag-rose',celebrating:'tag-gold'};
function renderFb(){
  document.getElementById('fbList').innerHTML=fbPosts.map((p,i)=>
    '<div class="card" style="padding:1.7rem;margin-bottom:1.1rem">'+
    '<div style="display:flex;align-items:center;gap:.7rem;margin-bottom:.9rem;flex-wrap:wrap">'+
    '<div class="avatar '+getAv(i)+'" style="width:36px;height:36px;font-size:.82rem">'+p.name[0].toUpperCase()+'</div>'+
    '<span style="font-weight:800;font-size:.88rem;color:var(--dark)">'+p.name+'</span>'+
    '<span style="color:var(--muted);font-size:.76rem">'+p.date+'</span>'+
    '<span class="tag '+(catT[p.cat]||'tag-gold')+'">'+(catL[p.cat]||p.cat)+'</span></div>'+
    '<p style="color:var(--muted);font-size:.91rem;line-height:1.7;margin-bottom:.9rem">'+p.text+'</p>'+
    '<div style="display:flex;gap:.8rem"><button class="like-btn"><i class="fas fa-comment"></i> '+p.replies+' replies</button>'+
    '<button class="like-btn" onclick="var c=this.classList.contains(\'liked\');this.classList.toggle(\'liked\');this.querySelector(\'span\').textContent=parseInt(this.querySelector(\'span\').textContent)+(c?-1:1)"><i class="fas fa-heart"></i> <span>0</span></button></div></div>'
  ).join('');
}
function subFb(){
  const name=document.getElementById('fbName').value.trim(),text=document.getElementById('fbText').value.trim(),cat=document.getElementById('fbCat').value;
  if(!text){showToast("Share what's on your mind 💙",'e');return}
  fbPosts.unshift({id:fbPosts.length+1,name:name||'Anonymous',cat,text,date:'Just now',replies:0});
  document.getElementById('fbName').value='';document.getElementById('fbText').value='';
  renderFb();showToast('💙 Posted! The community is here for you.','s');
}
loadStories();loadMs();renderFb();
</script>
`)))

// ─── RESOURCES ────────────────────────────────────────────────────────
app.get('/resources', c => c.html(page("Resources", '/resources', `

<section style="background:linear-gradient(160deg,#fdf6ec,#f0f7f4);padding:4.5rem 1.5rem 3.5rem;position:relative;overflow:hidden">
  <div class="blob" style="width:340px;height:340px;background:var(--sage);top:-70px;right:-55px"></div>
  <div class="blob" style="width:280px;height:280px;background:var(--teal);bottom:-55px;left:-35px"></div>
  <div class="container" style="position:relative;z-index:1;text-align:center">
    <div style="display:inline-flex;align-items:center;gap:.5rem;background:rgba(122,158,126,.12);border:1px solid rgba(122,158,126,.25);padding:.42rem .95rem;border-radius:20px;margin-bottom:1.4rem">
      <span>🌿</span><span style="font-size:.76rem;font-weight:800;color:var(--sage);letter-spacing:.1em;text-transform:uppercase">Resources &amp; Support</span>
    </div>
    <h1 class="section-title" style="margin-bottom:.9rem">Get the <span>Help You Deserve</span></h1>
    <p style="color:var(--muted);font-size:1rem;max-width:560px;margin:0 auto 1.8rem;line-height:1.7">Asking for help is not weakness. It is literally the bravest thing you can do. Real resources — vetted and actually useful.</p>
    <div style="display:inline-flex;align-items:center;gap:1.4rem;background:linear-gradient(135deg,#1a3a4a,#0d2b3a);color:#fff;padding:1rem 2rem;border-radius:16px;flex-wrap:wrap;justify-content:center">
      <div style="display:flex;align-items:center;gap:.55rem"><span style="font-size:1.1rem">🆘</span><div><div style="font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;opacity:.65;margin-bottom:.08rem">Crisis? Call or Text</div><a href="tel:988" style="color:var(--teal-l);font-size:1.3rem;font-weight:800;text-decoration:none">988</a></div></div>
      <div style="width:1px;height:38px;background:rgba(255,255,255,.15)"></div>
      <div style="display:flex;align-items:center;gap:.55rem"><span style="font-size:1.1rem">💬</span><div><div style="font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;opacity:.65;margin-bottom:.08rem">Crisis Text Line</div><div style="color:var(--teal-l);font-size:.95rem;font-weight:800">Text HELLO to 741741</div></div></div>
      <div style="width:1px;height:38px;background:rgba(255,255,255,.15)"></div>
      <div style="display:flex;align-items:center;gap:.55rem"><span style="font-size:1.1rem">📞</span><div><div style="font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;opacity:.65;margin-bottom:.08rem">SAMHSA (Free)</div><a href="tel:18006624357" style="color:var(--teal-l);font-size:.95rem;font-weight:800;text-decoration:none">1-800-662-4357</a></div></div>
    </div>
  </div>
</section>

<section style="padding:1.6rem 1.5rem;background:#fff;border-bottom:1.5px solid var(--border)">
  <div class="container"><div style="display:flex;gap:.6rem;flex-wrap:wrap;justify-content:center">
    <button class="filter-btn filter-btn-teal active" onclick="fRes('all',this)">🌿 All</button>
    <button class="filter-btn filter-btn-teal" onclick="fRes('crisis',this)">🆘 Crisis</button>
    <button class="filter-btn filter-btn-teal" onclick="fRes('recovery',this)">💪 Recovery</button>
    <button class="filter-btn filter-btn-teal" onclick="fRes('mental-health',this)">🧠 Mental Health</button>
    <button class="filter-btn filter-btn-teal" onclick="fRes('community',this)">👥 Communities</button>
    <button class="filter-btn filter-btn-teal" onclick="fRes('apps',this)">📱 Apps</button>
    <button class="filter-btn filter-btn-teal" onclick="fRes('nj',this)">📍 NJ Local</button>
  </div></div>
</section>

<section class="section" style="background:var(--cream)">
  <div class="container">
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(295px,1fr));gap:1.2rem" id="resGrid"></div>
  </div>
</section>

<section style="padding:4rem 1.5rem;background:#fff">
  <div style="max-width:660px;margin:0 auto" class="reveal">
    <div style="background:linear-gradient(135deg,#fdf6ec,#f0f7f4);border-radius:22px;padding:2.3rem;border:1.5px solid var(--border);position:relative;overflow:hidden">
      <div style="position:absolute;top:-8px;right:1rem;font-size:5.5rem;color:rgba(200,146,58,.07);font-family:Georgia,serif;line-height:1">"</div>
      <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:1.1rem">
        <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--teal));display:flex;align-items:center;justify-content:center;font-size:1.1rem">🌸</div>
        <div><div style="font-weight:800;font-size:.92rem;color:var(--dark)">A note from Devon</div><div style="font-size:.76rem;color:var(--muted)">Finding Peace</div></div>
      </div>
      <p style="font-family:'Playfair Display',serif;font-style:italic;font-size:1.02rem;color:var(--mid);line-height:1.75;margin-bottom:.9rem">"I put this list together because I know what it's like to be in crisis at 2am and not know where to turn. These are real resources that real people have used. None of them are perfect — but they can help you get through tonight. And tonight is what matters right now."</p>
      <p style="color:var(--muted);font-size:.86rem;line-height:1.65">Have a resource to add? Post it in the <a href="/community" style="color:var(--teal);font-weight:800;text-decoration:none">Community section</a>.</p>
    </div>
  </div>
</section>

<script>
const res=[
  {n:"988 Suicide & Crisis Lifeline",d:"Call or text 988 anytime, 24/7. Free, confidential support for people in distress.",i:"🆘",cat:"crisis",href:"tel:988",badge:"Call/Text 988",bc:"var(--rose)"},
  {n:"Crisis Text Line",d:"Text HOME to 741741 for free, 24/7 crisis counseling via text. Great when you can't talk.",i:"💬",cat:"crisis",href:"https://www.crisistextline.org",badge:"Text 741741",bc:"var(--rose)"},
  {n:"NAMI Helpline",d:"National Alliance on Mental Illness. Helpline: 1-800-950-6264. Extensive resources and support groups.",i:"🧠",cat:"crisis",href:"https://www.nami.org/help",badge:"1-800-950-6264",bc:"var(--lav)"},
  {n:"SAMHSA National Helpline",d:"Free, confidential, 24/7 treatment referral for substance use and mental health. 1-800-662-4357.",i:"💪",cat:"recovery",href:"https://www.samhsa.gov/find-help/national-helpline",badge:"Free & 24/7",bc:"var(--teal)"},
  {n:"SAMHSA Treatment Locator",d:"Find local treatment facilities, support groups, and community organizations near you.",i:"🗺️",cat:"recovery",href:"https://findtreatment.gov",badge:"Find Local Help",bc:"var(--teal)"},
  {n:"Alcoholics Anonymous",d:"AA meetings worldwide — in person and online. No commitment required to attend.",i:"🤝",cat:"recovery",href:"https://www.aa.org",badge:"Free Meetings",bc:"var(--sage)"},
  {n:"Narcotics Anonymous",d:"NA meetings for drug addiction recovery. Worldwide fellowship, online and in-person.",i:"🌿",cat:"recovery",href:"https://www.na.org",badge:"Free Meetings",bc:"var(--sage)"},
  {n:"SMART Recovery",d:"Science-based addiction recovery. Alternative to 12-step for those who prefer a secular approach.",i:"🔬",cat:"recovery",href:"https://www.smartrecovery.org",badge:"Science-Based",bc:"var(--teal)"},
  {n:"In The Rooms",d:"Online recovery meetings 24/7. AA, NA, Al-Anon and more. Great for late nights at home.",i:"🏠",cat:"recovery",href:"https://www.intherooms.com",badge:"Online 24/7",bc:"var(--gold)"},
  {n:"Psychology Today Therapist Finder",d:"Find therapists, psychiatrists, and support groups. Filter by insurance, specialty, and more.",i:"🧘",cat:"mental-health",href:"https://www.psychologytoday.com/us/therapists",badge:"Find a Therapist",bc:"var(--lav)"},
  {n:"Open Path Collective",d:"Affordable therapy sessions ($30-$80) for individuals and families in financial need.",i:"💸",cat:"mental-health",href:"https://openpathcollective.org",badge:"Affordable Therapy",bc:"var(--sage)"},
  {n:"7 Cups",d:"Free, anonymous chat with trained listeners 24/7. Also offers therapy and online support.",i:"💙",cat:"mental-health",href:"https://www.7cups.com",badge:"Free Chat Support",bc:"var(--teal)"},
  {n:"Mental Health America",d:"Free mental health screenings, resources, and advocacy. Take a screening online right now.",i:"📋",cat:"mental-health",href:"https://mhanational.org",badge:"Free Screenings",bc:"var(--lav)"},
  {n:"r/addiction (Reddit)",d:"Active, supportive online community for people dealing with addiction. Real talk, no judgment.",i:"👥",cat:"community",href:"https://www.reddit.com/r/addiction",badge:"Online Community",bc:"var(--gold)"},
  {n:"r/sobriety (Reddit)",d:"Community for people pursuing sobriety from any substance. Daily check-ins and support.",i:"🌱",cat:"community",href:"https://www.reddit.com/r/sobriety",badge:"Online Community",bc:"var(--sage)"},
  {n:"Sober Grid",d:"Recovery-focused social network. Connect with sober people globally, get &amp; give support 24/7.",i:"🌐",cat:"community",href:"https://sobergrid.com",badge:"Recovery Network",bc:"var(--teal)"},
  {n:"Woebot (Free)",d:"AI-powered mental health support using CBT techniques. Great for daily check-ins.",i:"🤖",cat:"apps",href:"https://woebothealth.com",badge:"Free App",bc:"var(--lav)"},
  {n:"I Am Sober",d:"Track sobriety milestones, build habits, and connect with others in recovery.",i:"📱",cat:"apps",href:"https://iamsober.com",badge:"Free App",bc:"var(--teal)"},
  {n:"Headspace",d:"Guided meditation and mindfulness. Specific courses for anxiety, stress, and sleep.",i:"🧘",cat:"apps",href:"https://www.headspace.com",badge:"Meditation App",bc:"var(--sage)"},
  {n:"Finch (Self-Care Pet App)",d:"Care for a virtual bird by completing self-care goals. Weirdly effective on hard days.",i:"🐦",cat:"apps",href:"https://finchcare.com",badge:"Free App",bc:"var(--gold)"},
  {n:"NJ MentalHealthCares",d:"NJ's mental health information and referral service. 1-866-202-HELP.",i:"📍",cat:"nj",href:"https://www.njmentalhealthcares.org",badge:"NJ Specific",bc:"var(--rose)"},
  {n:"NJ Division of Mental Health",d:"Official NJ state mental health services, crisis screening, and treatment program locator.",i:"🏛️",cat:"nj",href:"https://www.state.nj.us/humanservices/dmhs/home/",badge:"NJ State",bc:"var(--teal)"},
  {n:"NJ Addiction Services Hotline",d:"1-844-276-2777. Free 24/7 substance abuse helpline for New Jersey residents.",i:"📞",cat:"nj",href:"tel:18442762777",badge:"1-844-276-2777",bc:"var(--sage)"},
];
let rf='all';
function renderRes(){
  document.getElementById('resGrid').innerHTML=res.map((r,i)=>{
    const vis=rf==='all'||r.cat===rf;
    return '<a href="'+r.href+'"'+(r.href.startsWith('http')?' target="_blank" rel="noopener"':'')+' class="res-card reveal'+(vis?'':' hidden')+'" data-cat="'+r.cat+'" style="display:flex;flex-direction:column;gap:.55rem;text-decoration:none">'+
    '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.35rem">'+
    '<div style="width:44px;height:44px;border-radius:13px;background:'+r.bc+'22;display:flex;align-items:center;justify-content:center;font-size:1.35rem">'+r.i+'</div>'+
    '<span style="background:'+r.bc+'1a;color:'+r.bc+';font-size:.7rem;font-weight:800;padding:.22rem .65rem;border-radius:12px">'+r.badge+'</span></div>'+
    '<div style="font-family:Playfair Display,serif;font-size:.97rem;font-weight:700;color:var(--dark);line-height:1.3">'+r.n+'</div>'+
    '<p style="color:var(--muted);font-size:.86rem;line-height:1.58;flex:1">'+r.d+'</p>'+
    '<div style="color:'+r.bc+';font-size:.8rem;font-weight:800">Visit <i class="fas fa-arrow-right" style="font-size:.68rem"></i></div></a>';
  }).join('');
  document.querySelectorAll('#resGrid .reveal').forEach(el=>setTimeout(()=>el.classList.add('visible'),100));
}
function fRes(cat,btn){
  rf=cat;document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  document.querySelectorAll('.res-card').forEach(c=>{if(cat==='all'||c.dataset.cat===cat)c.classList.remove('hidden');else c.classList.add('hidden')});
}
renderRes();
</script>
`)))

// ─── REDIRECT stubs ───────────────────────────────────────────────────
app.get('/stories', c => c.redirect('/community'))
app.get('/milestones', c => c.redirect('/community'))

// ─── API ──────────────────────────────────────────────────────────────
app.get('/api/stories', c => c.json(stories))
app.post('/api/stories', async c => {
  const b = await c.req.json()
  const s = { id: stories.length + 1, name: b.name || 'Anonymous', avatar: (b.name || 'A')[0].toUpperCase(), story: b.story, date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), likes: 0, milestone: b.milestone || '' }
  stories.unshift(s); return c.json(s, 201)
})
app.post('/api/stories/:id/like', async c => {
  const s = stories.find(x => x.id === parseInt(c.req.param('id')))
  if (s) { s.likes++; return c.json({ likes: s.likes }) }
  return c.json({ error: 'Not found' }, 404)
})
app.get('/api/milestones', c => c.json(milestones))
app.post('/api/milestones', async c => {
  const b = await c.req.json()
  const m = { id: milestones.length + 1, name: b.name || 'Anonymous', avatar: (b.name || 'A')[0].toUpperCase(), milestone: b.milestone, description: b.description || '', date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), likes: 0 }
  milestones.unshift(m); return c.json(m, 201)
})
app.post('/api/milestones/:id/like', async c => {
  const m = milestones.find(x => x.id === parseInt(c.req.param('id')))
  if (m) { m.likes++; return c.json({ likes: m.likes }) }
  return c.json({ error: 'Not found' }, 404)
})

export default app
