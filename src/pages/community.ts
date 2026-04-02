import { Layout } from '../components/layout'

export const CommunityPage = () => Layout("Community", `

  <section style="background:linear-gradient(160deg,#f5fdf8,#fdf6ec,#f5f0ff);padding:4.5rem 1.5rem 3.5rem;position:relative;overflow:hidden;">
    <div class="blob" style="width:350px;height:350px;background:var(--teal);top:-80px;right:-60px;"></div>
    <div class="blob" style="width:300px;height:300px;background:var(--lavender);bottom:-60px;left:-40px;"></div>
    <div class="container" style="position:relative;z-index:1;text-align:center;">
      <div style="display:inline-flex;align-items:center;gap:0.5rem;background:rgba(74,155,142,0.12);border:1px solid rgba(74,155,142,0.25);padding:0.45rem 1rem;border-radius:20px;margin-bottom:1.5rem;">
        <span>🌸</span><span style="font-size:0.78rem;font-weight:700;color:var(--teal);letter-spacing:0.1em;text-transform:uppercase;">Safe Haven Community</span>
      </div>
      <h1 class="section-title" style="margin-bottom:1rem;">Your <span>People</span> Are Here</h1>
      <p style="color:var(--muted);font-size:1.02rem;max-width:560px;margin:0 auto 2rem;line-height:1.7;">A judgment-free space to share your story, ask for real feedback, celebrate milestones (big and tiny), and find people who actually get it.</p>
      <div style="display:flex;flex-wrap:wrap;gap:0.7rem;justify-content:center;margin-bottom:2rem;">
        <span class="tag tag-sage">✅ No Judgment</span>
        <span class="tag tag-teal">🤝 Real Support</span>
        <span class="tag tag-rose">💙 All Stages Welcome</span>
        <span class="tag tag-gold">🔒 Safe Space</span>
      </div>
      <div style="display:inline-flex;background:white;border-radius:30px;padding:0.35rem;border:1.5px solid var(--border);gap:0.3rem;">
        <button class="tab-btn active" onclick="switchTab('stories',this)">📖 Stories</button>
        <button class="tab-btn" onclick="switchTab('milestones',this)">🏆 Milestones</button>
        <button class="tab-btn" onclick="switchTab('feedback',this)">💬 Ask for Feedback</button>
      </div>
    </div>
  </section>

  <style>
    .tab-btn{padding:0.6rem 1.3rem;border-radius:24px;border:none;background:none;font-family:'Nunito',sans-serif;font-weight:700;font-size:0.88rem;color:var(--muted);cursor:pointer;transition:all 0.2s ease;}
    .tab-btn:hover{color:var(--gold);}
    .tab-btn.active{background:var(--gold);color:white;box-shadow:0 3px 10px rgba(200,146,58,0.3);}
  </style>

  <section class="section" style="background:var(--cream);">
    <div class="container">

      <div id="tab-stories">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem;flex-wrap:wrap;gap:1rem;">
          <div>
            <h2 class="section-title" style="font-size:1.8rem;">Community <span>Stories</span></h2>
            <p style="color:var(--muted);font-size:0.9rem;margin-top:0.3rem;">Real people, real journeys. You're not alone.</p>
          </div>
          <button onclick="openModal('storyModal')" class="btn btn-primary"><i class="fas fa-pen"></i> Share Your Story</button>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:1.5rem;" id="storiesGrid">
          <div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--muted);"><div style="font-size:2rem;margin-bottom:0.5rem;">🌿</div>Loading stories...</div>
        </div>
      </div>

      <div id="tab-milestones" style="display:none;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem;flex-wrap:wrap;gap:1rem;">
          <div>
            <h2 class="section-title" style="font-size:1.8rem;">Milestones &amp; <span>Wins</span></h2>
            <p style="color:var(--muted);font-size:0.9rem;margin-top:0.3rem;">Every win counts. Every. Single. One.</p>
          </div>
          <button onclick="openModal('milestoneModal')" class="btn btn-teal"><i class="fas fa-trophy"></i> Share a Milestone</button>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.2rem;" id="milestonesGrid">
          <div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--muted);"><div style="font-size:2rem;margin-bottom:0.5rem;">🏆</div>Loading milestones...</div>
        </div>
      </div>

      <div id="tab-feedback" style="display:none;">
        <div style="max-width:720px;margin:0 auto;">
          <div style="text-align:center;margin-bottom:2.5rem;">
            <h2 class="section-title" style="font-size:1.8rem;">Ask for <span>Feedback</span></h2>
            <p style="color:var(--muted);font-size:0.95rem;margin-top:0.5rem;line-height:1.7;">Whether you need advice on a tough situation, want accountability, or just need someone to tell you if your recovery plan makes sense — post it here.</p>
          </div>
          <div class="card" style="padding:2rem;margin-bottom:2rem;background:white;">
            <h3 style="font-family:'Playfair Display',serif;font-size:1.2rem;margin-bottom:0.4rem;color:var(--dark);">Post a Question or Ask for Support</h3>
            <p style="color:var(--muted);font-size:0.88rem;margin-bottom:1.5rem;">This is a judgment-free zone. Ask away.</p>
            <div class="form-group">
              <label class="form-label">Your name (or stay anonymous)</label>
              <input class="form-input" id="fbName" placeholder="Your name or 'Anonymous'">
            </div>
            <div class="form-group">
              <label class="form-label">Category</label>
              <select class="form-select" id="fbCat">
                <option value="advice">Asking for Advice</option>
                <option value="accountability">Accountability Check-in</option>
                <option value="resources">Looking for Resources</option>
                <option value="venting">Just Need to Vent</option>
                <option value="celebrating">Celebrating a Win</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Your question or what you need support with</label>
              <textarea class="form-textarea" id="fbText" placeholder="What's on your mind? No filtering required here..."></textarea>
            </div>
            <button onclick="submitFeedback()" class="btn btn-teal" style="width:100%;"><i class="fas fa-paper-plane"></i> Post to Community</button>
          </div>
          <div id="feedbackList"></div>
        </div>
      </div>

    </div>
  </section>

  <!-- STORY MODAL -->
  <div class="modal-overlay" id="storyModal">
    <div class="modal">
      <button class="modal-close" onclick="closeModal('storyModal')">&#10005;</button>
      <div style="font-size:2rem;margin-bottom:0.5rem;">📖</div>
      <h3>Share Your Story</h3>
      <p class="sub">You don't need to have it figured out. You just need to be honest.</p>
      <div class="form-group"><label class="form-label">Your name (or stay anonymous)</label><input class="form-input" id="storyName" placeholder="e.g. Jamie M. or Anonymous"></div>
      <div class="form-group"><label class="form-label">Your milestone (optional)</label><input class="form-input" id="storyMilestone" placeholder="e.g. 6 months sober, started therapy..."></div>
      <div class="form-group"><label class="form-label">Your story <span style="color:var(--muted)">(required)</span></label><textarea class="form-textarea" id="storyText" placeholder="Whatever you want to share — how you're feeling, where you've been, where you're going. All of it is welcome." style="min-height:130px;"></textarea></div>
      <button onclick="submitStory()" class="btn btn-primary" style="width:100%;"><i class="fas fa-heart"></i> Share with the Community</button>
      <p style="font-size:0.78rem;color:var(--muted);margin-top:1rem;text-align:center;">This community is moderated with care. You're safe here. 🌿</p>
    </div>
  </div>

  <!-- MILESTONE MODAL -->
  <div class="modal-overlay" id="milestoneModal">
    <div class="modal">
      <button class="modal-close" onclick="closeModal('milestoneModal')">&#10005;</button>
      <div style="font-size:2rem;margin-bottom:0.5rem;">🏆</div>
      <h3>Celebrate a Milestone</h3>
      <p class="sub">Big or small — it all counts. We're here for it.</p>
      <div class="form-group"><label class="form-label">Your name</label><input class="form-input" id="msName" placeholder="e.g. Alex or Anonymous"></div>
      <div class="form-group"><label class="form-label">Your milestone <span style="color:var(--muted)">(required)</span></label><input class="form-input" id="msMilestone" placeholder="e.g. 1 Year Sober, First therapy session..."></div>
      <div class="form-group"><label class="form-label">Tell us about it (optional)</label><textarea class="form-textarea" id="msDesc" placeholder="What does this milestone mean to you?"></textarea></div>
      <button onclick="submitMilestone()" class="btn btn-teal" style="width:100%;"><i class="fas fa-trophy"></i> Celebrate with Us!</button>
    </div>
  </div>

  <script>
    function switchTab(tab,btn){
      ['stories','milestones','feedback'].forEach(t=>{
        document.getElementById('tab-'+t).style.display=t===tab?'block':'none';
      });
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
    }

    const avatarColors=['avatar-gold','avatar-teal','avatar-rose','avatar-sage','avatar-lavender','avatar-orange'];
    function getAC(i){return avatarColors[i%avatarColors.length];}

    function loadStories(){
      fetch('/api/stories').then(r=>r.json()).then(stories=>{
        const g=document.getElementById('storiesGrid');
        if(!stories.length){g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--muted);">No stories yet — be the first to share! 🌸</div>';return;}
        g.innerHTML=stories.map((s,i)=>
          '<div class="card" style="padding:1.8rem;">'+
          '<div style="display:flex;align-items:center;gap:0.9rem;margin-bottom:1rem;">'+
          '<div class="avatar '+getAC(i)+'">'+s.avatar+'</div>'+
          '<div style="flex:1;"><div style="font-weight:700;font-size:0.92rem;color:var(--dark);">'+s.name+'</div><div style="font-size:0.78rem;color:var(--muted);">'+s.date+'</div></div>'+
          '</div>'+
          (s.milestone?'<span class="tag tag-teal" style="margin-bottom:0.9rem;display:inline-flex;">\uD83C\uDFC6 '+s.milestone+'</span>':'')+
          '<p style="color:var(--muted);font-size:0.92rem;line-height:1.7;margin-bottom:1.2rem;">'+s.story+'</p>'+
          '<button class="like-btn" data-type="story" data-id="'+s.id+'" onclick="likeItem(this)"><i class="fas fa-heart"></i> <span>'+s.likes+'</span></button>'+
          '</div>'
        ).join('');
      });
    }

    function loadMilestones(){
      fetch('/api/milestones').then(r=>r.json()).then(items=>{
        const g=document.getElementById('milestonesGrid');
        if(!items.length){g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--muted);">No milestones yet. Be brave! 🏆</div>';return;}
        g.innerHTML=items.map((m,i)=>
          '<div class="card" style="padding:1.8rem;position:relative;overflow:hidden;">'+
          '<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--gold),var(--teal));"></div>'+
          '<div style="display:flex;align-items:center;gap:0.8rem;margin-bottom:1rem;">'+
          '<div class="avatar '+getAC(i)+'">'+m.avatar+'</div>'+
          '<div><div style="font-weight:700;font-size:0.92rem;color:var(--dark);">'+m.name+'</div><div style="font-size:0.78rem;color:var(--muted);">'+m.date+'</div></div>'+
          '</div>'+
          '<div style="font-family:Playfair Display,serif;font-size:1.1rem;color:var(--dark);margin-bottom:0.6rem;font-weight:700;">'+m.milestone+'</div>'+
          (m.description?'<p style="color:var(--muted);font-size:0.9rem;line-height:1.6;margin-bottom:1rem;">'+m.description+'</p>':'')+
          '<button class="like-btn" data-type="milestone" data-id="'+m.id+'" onclick="likeItem(this)"><i class="fas fa-fire"></i> <span>'+m.likes+'</span></button>'+
          '</div>'
        ).join('');
      });
    }

    function fbLike(btn){
      if(btn.classList.contains('liked'))return;
      btn.classList.add('liked');
      var span=btn.querySelector('span');
      span.textContent=parseInt(span.textContent)+1;
    }

    function likeItem(btn){
      if(btn.classList.contains('liked'))return;
      var type=btn.dataset.type;
      var id=btn.dataset.id;
      fetch('/api/'+type+'s/'+id+'/like',{method:'POST'}).then(r=>r.json()).then(d=>{
        btn.classList.add('liked');btn.querySelector('span').textContent=d.likes;
        showToast('💙 Thanks for the love!','success');
      });
    }

    function submitStory(){
      const name=document.getElementById('storyName').value.trim();
      const story=document.getElementById('storyText').value.trim();
      const milestone=document.getElementById('storyMilestone').value.trim();
      if(!story){showToast('Please share something — anything! 💙','error');return;}
      fetch('/api/stories',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:name||'Anonymous',story,milestone})})
        .then(r=>r.json()).then(()=>{
          closeModal('storyModal');
          showToast('🌸 Your story has been shared. Thank you for your courage.','success');
          document.getElementById('storyName').value='';document.getElementById('storyText').value='';document.getElementById('storyMilestone').value='';
          loadStories();
        }).catch(()=>showToast('Something went wrong. Try again.','error'));
    }

    function submitMilestone(){
      const name=document.getElementById('msName').value.trim();
      const milestone=document.getElementById('msMilestone').value.trim();
      const description=document.getElementById('msDesc').value.trim();
      if(!milestone){showToast('What milestone are you celebrating? 🏆','error');return;}
      fetch('/api/milestones',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:name||'Anonymous',milestone,description})})
        .then(r=>r.json()).then(()=>{
          closeModal('milestoneModal');
          showToast('🎉 Milestone shared! We are SO proud!','success');
          document.getElementById('msName').value='';document.getElementById('msMilestone').value='';document.getElementById('msDesc').value='';
          loadMilestones();
        }).catch(()=>showToast('Something went wrong.','error'));
    }

    const feedbackPosts=[
      {id:1,name:"Someone going through it",cat:"advice",text:"How do you handle cravings when they hit at 2am and there's no one to call? I've tried the usual stuff but some nights feel impossible.",date:"Today",replies:4},
      {id:2,name:"Anonymous",cat:"accountability",text:"Day 3 clean. Just checking in. Feeling shaky but still here.",date:"Yesterday",replies:7},
      {id:3,name:"River T.",cat:"celebrating",text:"Just wanted to share — I made it to my first AA meeting. Shook the whole time. But I went.",date:"2 days ago",replies:12}
    ];

    const catLabel={advice:'🙋 Advice',accountability:'✅ Accountability',resources:'📚 Resources',venting:'💨 Venting',celebrating:'🎉 Celebrating'};
    const catTagClass={advice:'tag-teal',accountability:'tag-sage',resources:'tag-lavender',venting:'tag-rose',celebrating:'tag-gold'};

    function renderFeedback(){
      document.getElementById('feedbackList').innerHTML=feedbackPosts.map((p,i)=>
        '<div class="card" style="padding:1.8rem;margin-bottom:1.2rem;">'+
        '<div style="display:flex;align-items:center;gap:0.8rem;margin-bottom:1rem;flex-wrap:wrap;">'+
        '<div class="avatar '+getAC(i)+'" style="width:36px;height:36px;font-size:0.85rem;">'+p.name[0].toUpperCase()+'</div>'+
        '<span style="font-weight:700;font-size:0.9rem;color:var(--dark);">'+p.name+'</span>'+
        '<span style="color:var(--muted);font-size:0.78rem;">'+p.date+'</span>'+
        '<span class="tag '+(catTagClass[p.cat]||'tag-gold')+'">'+(catLabel[p.cat]||p.cat)+'</span>'+
        '</div>'+
        '<p style="color:var(--muted);font-size:0.93rem;line-height:1.7;margin-bottom:1rem;">'+p.text+'</p>'+
        '<div style="display:flex;gap:1rem;">'+
        '<button class="like-btn"><i class="fas fa-comment"></i> '+p.replies+' replies</button>'+
        '<button class="like-btn" data-fb-like onclick="fbLike(this)"><i class="fas fa-heart"></i> <span>0</span></button>'+
        '</div></div>'
      ).join('');
    }

    function submitFeedback(){
      const name=document.getElementById('fbName').value.trim();
      const text=document.getElementById('fbText').value.trim();
      const cat=document.getElementById('fbCat').value;
      if(!text){showToast("Share what's on your mind 💙",'error');return;}
      feedbackPosts.unshift({id:feedbackPosts.length+1,name:name||'Anonymous',cat,text,date:'Just now',replies:0});
      document.getElementById('fbName').value='';document.getElementById('fbText').value='';
      renderFeedback();showToast('💙 Posted! The community is here for you.','success');
    }

    loadStories();loadMilestones();renderFeedback();
  </script>

`, 'community')
