import { layout } from '../components/layout'

export const AffirmationsPage = () => layout("Daily Affirmations", `

  <!-- Hero -->
  <section style="background:linear-gradient(160deg,#1a2e28,#0d2318,#1a2438);padding:4.5rem 1.5rem;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background-image:radial-gradient(circle at 25% 50%,rgba(74,155,142,0.18) 0%,transparent 50%),radial-gradient(circle at 75% 50%,rgba(200,146,58,0.12) 0%,transparent 50%);"></div>
    <div style="position:absolute;top:1rem;left:5%;font-size:6rem;opacity:0.04;color:white;">☮</div>
    <div style="position:absolute;bottom:1rem;right:5%;font-size:5rem;opacity:0.04;color:white;">🌸</div>
    <div style="position:absolute;top:30%;right:15%;font-size:3rem;opacity:0.04;color:white;">✿</div>

    <div class="container" style="position:relative;z-index:1;text-align:center;">
      <div style="display:inline-flex;align-items:center;gap:0.5rem;background:rgba(74,155,142,0.2);border:1px solid rgba(74,155,142,0.3);padding:0.45rem 1rem;border-radius:20px;margin-bottom:1.5rem;">
        <span>✨</span>
        <span style="font-size:0.78rem;font-weight:700;color:var(--teal-light);letter-spacing:0.1em;text-transform:uppercase;">Daily Affirmations by Devon</span>
      </div>
      <h1 style="font-family:'Dancing Script',cursive;font-size:clamp(2.5rem,6vw,4.5rem);color:white;margin-bottom:1rem;">Affirmations That <span style="color:var(--gold-light);">Actually Work</span></h1>
      <p style="color:rgba(255,255,255,0.65);font-size:1rem;max-width:560px;margin:0 auto 2rem;line-height:1.7;">Because they're rooted in the truth of the struggle — not some fantasy version of healing. Honest, sometimes funny, always real.</p>

      <!-- Featured affirmation rotator -->
      <div style="max-width:600px;margin:0 auto;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:24px;padding:2.5rem;position:relative;overflow:hidden;">
        <div style="font-size:4rem;line-height:1;margin-bottom:1rem;" id="affEmoji">😤</div>
        <p style="font-family:'Playfair Display',serif;font-style:italic;font-size:1.25rem;color:white;line-height:1.6;transition:opacity 0.4s ease;" id="featuredAff">
          "You survived 100% of your worst days. That's actually a pretty impressive track record."
        </p>
        <div style="margin-top:1.5rem;display:flex;justify-content:center;gap:0.8rem;">
          <button onclick="prevAff()" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:white;width:40px;height:40px;border-radius:50%;cursor:pointer;font-size:1rem;transition:all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">‹</button>
          <span style="color:rgba(255,255,255,0.4);font-size:0.85rem;align-self:center;" id="affCounter">1 / 30</span>
          <button onclick="nextAff()" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:white;width:40px;height:40px;border-radius:50%;cursor:pointer;font-size:1rem;transition:all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">›</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Categories -->
  <section style="padding:2rem 1.5rem;background:white;border-bottom:1.5px solid var(--border);">
    <div class="container">
      <div style="display:flex;gap:0.7rem;flex-wrap:wrap;justify-content:center;">
        <button class="aff-filter active" onclick="filterAff('all',this)">🌿 All</button>
        <button class="aff-filter" onclick="filterAff('recovery',this)">💪 Recovery</button>
        <button class="aff-filter" onclick="filterAff('anxiety',this)">🧘 Anxiety</button>
        <button class="aff-filter" onclick="filterAff('self-love',this)">💛 Self-Love</button>
        <button class="aff-filter" onclick="filterAff('progress',this)">📈 Progress</button>
        <button class="aff-filter" onclick="filterAff('bad-days',this)">🌧 Bad Days</button>
        <button class="aff-filter" onclick="filterAff('funny',this)">😂 Funny Ones</button>
      </div>
    </div>
  </section>

  <style>
    .aff-filter {
      padding: 0.5rem 1.2rem;
      border-radius: 20px;
      border: 1.5px solid var(--border);
      background: white;
      color: var(--mid);
      font-family: 'Nunito', sans-serif;
      font-weight: 700;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .aff-filter:hover { background: var(--gold-pale); border-color: var(--gold-light); color: var(--mid); }
    .aff-filter.active { background: var(--gold); border-color: var(--gold); color: white; }

    .aff-card {
      background: white;
      border: 1.5px solid var(--border);
      border-radius: 20px;
      padding: 1.8rem;
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .aff-card:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(44,36,24,0.12); }
    .aff-card.hidden { display: none; }
  </style>

  <!-- All Affirmations Grid -->
  <section class="section" style="background:var(--cream);">
    <div class="container">
      <div style="text-align:center;margin-bottom:3rem;" class="reveal">
        <h2 class="section-title">The Full <span>Collection</span></h2>
        <p class="section-subtitle" style="margin:0.6rem auto 0;">30 affirmations. Share the ones that hit different.</p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.2rem;" id="affGrid">
      </div>
    </div>
  </section>

  <!-- Share CTA -->
  <section style="padding:4rem 1.5rem;background:white;">
    <div style="max-width:650px;margin:0 auto;text-align:center;" class="reveal">
      <div style="font-size:2.5rem;margin-bottom:1rem;">📲</div>
      <h2 style="font-family:'Playfair Display',serif;font-size:1.8rem;color:var(--dark);margin-bottom:0.8rem;">Want More Daily?</h2>
      <p style="color:var(--muted);font-size:0.98rem;line-height:1.7;margin-bottom:1.8rem;">
        I post daily affirmations and recovery content on TikTok. Come hang — bring your messy, unfinished self. That's literally the vibe.
      </p>
      <a href="https://www.tiktok.com/@findingpeace" target="_blank" rel="noopener" class="btn btn-primary" style="background:linear-gradient(135deg,#ff0050,#cc0040);box-shadow:0 4px 18px rgba(255,0,80,0.3);">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.86a8.19 8.19 0 004.79 1.52V6.91a4.85 4.85 0 01-1.02-.22z"/></svg>
        Follow @findingpeace on TikTok
      </a>
    </div>
  </section>

  <script>
    const affirmations = [
      { text: "You survived 100% of your worst days. That's actually a pretty impressive track record.", emoji: "📊", cat: ["funny","progress","recovery"] },
      { text: "Healing isn't linear. It's more like a Spotify shuffle on a really weird playlist.", emoji: "🎵", cat: ["funny","progress","recovery"] },
      { text: "Today's goal: exist. Tomorrow we can aim higher.", emoji: "🌅", cat: ["bad-days","anxiety","self-love"] },
      { text: "Your feelings are valid even when your brain is being a dramatic little gremlin.", emoji: "🧠", cat: ["anxiety","self-love","funny"] },
      { text: "You're not broken. You're mid-renovation.", emoji: "🔨", cat: ["recovery","self-love","progress"] },
      { text: "Progress counts even when it's microscopic and ugly.", emoji: "🔬", cat: ["progress","recovery","bad-days"] },
      { text: "You don't have to have it all figured out to move forward.", emoji: "🚶", cat: ["recovery","anxiety","progress"] },
      { text: "Bad days are data, not destiny.", emoji: "📉", cat: ["bad-days","anxiety","progress"] },
      { text: "Rest is not the same as giving up. Your body knows the difference even when your brain doesn't.", emoji: "😴", cat: ["self-love","bad-days","anxiety"] },
      { text: "You've come too far to go back. Also, back there was bad. Remember? Don't go back.", emoji: "🔄", cat: ["funny","recovery","progress"] },
      { text: "One day at a time. Or one hour. Or one minute. Whatever works, we're not judging.", emoji: "⏰", cat: ["recovery","anxiety","bad-days"] },
      { text: "Your story matters. Even the parts you're still figuring out. Especially those parts.", emoji: "📖", cat: ["self-love","recovery"] },
      { text: "Asking for help is not a weakness. It's actually the hardest thing a lot of people will ever do.", emoji: "🤝", cat: ["recovery","self-love","anxiety"] },
      { text: "You are not your worst moment. You are every single time you got up after it.", emoji: "⬆️", cat: ["recovery","self-love","bad-days"] },
      { text: "Being a work in progress doesn't mean you're less valuable. Diamonds start as coal and go through a lot.", emoji: "💎", cat: ["self-love","progress","recovery"] },
      { text: "Your mess isn't a character flaw. It's just Tuesday.", emoji: "📅", cat: ["funny","bad-days","self-love"] },
      { text: "Boundaries are not walls. They're the velvet rope to your own well-being. VIP only.", emoji: "🚧", cat: ["self-love","recovery","funny"] },
      { text: "You're allowed to feel proud of surviving something that wasn't supposed to be survivable.", emoji: "🏆", cat: ["recovery","self-love","progress"] },
      { text: "The fact that you're reading this means your brain is still trying. That counts.", emoji: "💙", cat: ["bad-days","anxiety","self-love"] },
      { text: "Relapse is not the end of the story. Chapter 47 can still be a comeback chapter.", emoji: "📝", cat: ["recovery","bad-days","progress"] },
      { text: "Anxiety told me today was going to be terrible. Anxiety has been wrong before.", emoji: "😤", cat: ["funny","anxiety","bad-days"] },
      { text: "You deserve peace. Not the 'everything is perfect' kind, but the 'I can handle this' kind.", emoji: "🌿", cat: ["self-love","recovery","anxiety"] },
      { text: "Crying is not a sign of weakness. It's your body pressure-washing your soul.", emoji: "😭", cat: ["funny","self-love","bad-days"] },
      { text: "You made it through every single difficult day so far. Your track record is flawless.", emoji: "✅", cat: ["progress","recovery","bad-days"] },
      { text: "Some days the bravest thing you can do is take a shower and make a sandwich. And that's valid.", emoji: "🥪", cat: ["funny","bad-days","self-love"] },
      { text: "Recovery is not about becoming a different person. It's about finally meeting the real one.", emoji: "🪞", cat: ["recovery","self-love"] },
      { text: "Your past is not a life sentence. It's a chapter. You're the author. Keep writing.", emoji: "✍️", cat: ["recovery","progress","self-love"] },
      { text: "Comparison is the thief of recovery. Your timeline is your own and it's exactly right.", emoji: "⏳", cat: ["recovery","self-love","progress"] },
      { text: "It's okay to not be okay. It's also okay to be okay. You don't have to perform anything.", emoji: "🎭", cat: ["self-love","anxiety","bad-days"] },
      { text: "You are braver than you believe, stronger than you think, and definitely more fun at parties sober.", emoji: "🎉", cat: ["funny","recovery","self-love"] }
    ];

    let currentIdx = 0;
    let activeFilter = 'all';

    function updateFeatured(idx) {
      const el = document.getElementById('featuredAff');
      const em = document.getElementById('affEmoji');
      const ct = document.getElementById('affCounter');
      el.style.opacity = '0';
      setTimeout(() => {
        el.textContent = '"' + affirmations[idx].text + '"';
        em.textContent = affirmations[idx].emoji;
        ct.textContent = (idx+1) + ' / ' + affirmations.length;
        el.style.opacity = '1';
      }, 300);
    }

    function nextAff() { currentIdx = (currentIdx + 1) % affirmations.length; updateFeatured(currentIdx); }
    function prevAff() { currentIdx = (currentIdx - 1 + affirmations.length) % affirmations.length; updateFeatured(currentIdx); }

    setInterval(nextAff, 8000);

    const catColors = {
      'recovery': ['var(--teal-pale)', 'var(--teal)'],
      'anxiety': ['var(--lavender-pale)', 'var(--lavender)'],
      'self-love': ['var(--rose-pale)', 'var(--dusty-rose)'],
      'progress': ['var(--sage-pale)', 'var(--sage)'],
      'bad-days': ['var(--orange-pale)', 'var(--burnt-orange)'],
      'funny': ['var(--gold-pale)', 'var(--gold)'],
    };

    function renderGrid() {
      const grid = document.getElementById('affGrid');
      grid.innerHTML = affirmations.map((a, i) => {
        const cat = a.cat[0];
        const [bg, color] = catColors[cat] || ['#f5f5f5', '#666'];
        const visible = activeFilter === 'all' || a.cat.includes(activeFilter);
        return \`
          <div class="aff-card reveal \${visible ? '' : 'hidden'}" data-cats="\${a.cat.join(',')}" onclick="copyAff(this, \${i})">
            <div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,\${color},transparent);border-radius:20px 20px 0 0;"></div>
            <div style="display:flex;align-items:flex-start;gap:0.8rem;margin-bottom:0.8rem;">
              <div style="font-size:2rem;line-height:1;">\${a.emoji}</div>
              <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
                \${a.cat.map(c => \`<span style="background:\${catColors[c]?.[0]||'#f5f5f5'};color:\${catColors[c]?.[1]||'#666'};font-size:0.7rem;font-weight:700;padding:0.2rem 0.6rem;border-radius:10px;text-transform:capitalize;">\${c}</span>\`).join('')}
              </div>
            </div>
            <p style="font-family:'Playfair Display',serif;font-style:italic;color:var(--dark);font-size:0.95rem;line-height:1.6;">"\${a.text}"</p>
            <div style="margin-top:1rem;display:flex;align-items:center;gap:0.5rem;color:var(--muted);font-size:0.78rem;font-weight:600;">
              <i class="fas fa-copy"></i> Click to copy & share
            </div>
          </div>
        \`;
      }).join('');
      document.querySelectorAll('#affGrid .reveal').forEach(el => {
        setTimeout(() => el.classList.add('visible'), 100);
      });
    }

    function filterAff(cat, btn) {
      activeFilter = cat;
      document.querySelectorAll('.aff-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.aff-card').forEach(card => {
        const cats = card.dataset.cats.split(',');
        if (cat === 'all' || cats.includes(cat)) { card.classList.remove('hidden'); }
        else { card.classList.add('hidden'); }
      });
    }

    function copyAff(card, idx) {
      const text = '"' + affirmations[idx].text + '" — Finding Peace with Devon';
      navigator.clipboard.writeText(text).then(() => {
        showToast('✨ Copied! Share it with someone who needs it.', 'success');
      }).catch(() => {
        showToast('💙 Affirmation noted!', 'success');
      });
    }

    renderGrid();
  </script>

`, 'affirmations')
