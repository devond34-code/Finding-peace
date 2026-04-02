import { layout } from '../components/layout'

export function StoriesPage(): string {
  const content = `
  <div class="pt-24 pb-20">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-blue-300 text-sm mb-6">
          <i class="fas fa-book-open text-blue-400"></i> Community Stories
        </div>
        <h1 class="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
          Your Story <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Matters</span>
        </h1>
        <p class="text-gray-400 text-xl max-w-2xl mx-auto">Every story shared here is someone choosing to be seen. Read theirs. Share yours. Someone out there needs to hear it.</p>
      </div>
      <div class="glass rounded-2xl p-6 mb-10 border border-blue-500/20">
        <h3 class="font-serif text-xl font-bold text-white mb-2">📖 Share Your Story</h3>
        <p class="text-gray-400 text-sm mb-5">Anonymous or with your name — your story could be exactly what someone else needs to read today.</p>
        <div class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" id="storyName" placeholder="Your name (or 'Anonymous')" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
            <input type="text" id="storyMilestone" placeholder="Your milestone (e.g. 6 months sober, started therapy)" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
          </div>
          <textarea id="storyContent" rows="5" placeholder="Tell your story... Where were you? Where are you now? What helped? 💙" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"></textarea>
          <div class="flex items-center justify-between flex-wrap gap-3">
            <p class="text-gray-500 text-xs">💙 Your story is safe here.</p>
            <button onclick="submitStory()" class="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all">
              <i class="fas fa-heart mr-2"></i>Share My Story
            </button>
          </div>
        </div>
      </div>
      <div id="storiesFeed" class="space-y-6"></div>
    </div>
  </div>
  <script>
    const avatarColors = ['from-purple-500 to-indigo-600','from-blue-500 to-cyan-600','from-pink-500 to-rose-600','from-green-500 to-emerald-600','from-yellow-500 to-orange-600','from-red-500 to-pink-600'];
    let stories = [];
    async function loadStories() {
      try { const res = await fetch('/api/stories'); stories = await res.json(); } catch(e) {}
      renderStories();
    }
    function renderStories() {
      const feed = document.getElementById('storiesFeed');
      feed.innerHTML = stories.map((story, i) => \`
        <div class="glass rounded-2xl p-7 card-hover">
          <div class="flex items-start gap-4">
            <div class="story-avatar bg-gradient-to-br \${avatarColors[i % avatarColors.length]} flex-shrink-0">\${story.avatar}</div>
            <div class="flex-1">
              <div class="flex items-start justify-between flex-wrap gap-2 mb-3">
                <div>
                  <span class="font-semibold text-white text-lg">\${story.name}</span>
                  \${story.milestone ? \`<div class="text-sm text-green-400 font-medium mt-0.5">🏆 \${story.milestone}</div>\` : ''}
                </div>
                <span class="text-gray-500 text-xs mt-1">\${story.date}</span>
              </div>
              <p class="text-gray-200 leading-relaxed text-base">\${story.story}</p>
              <div class="flex items-center gap-5 mt-5 pt-4 border-t border-white/10">
                <button onclick="likeItem('stories', \${story.id}, this)" class="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm">
                  <i class="fas fa-heart"></i><span class="like-count">\${story.likes}</span>
                </button>
                <span class="text-gray-500 text-xs">💙 Thank you for sharing your journey</span>
              </div>
            </div>
          </div>
        </div>
      \`).join('');
    }
    async function submitStory() {
      const name = document.getElementById('storyName').value.trim();
      const milestone = document.getElementById('storyMilestone').value.trim();
      const story = document.getElementById('storyContent').value.trim();
      if (!story || story.length < 20) { showToast('Please write at least a little bit of your story 💙', 'info'); return; }
      try {
        const res = await fetch('/api/stories', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({name: name || 'Anonymous', story, milestone}) });
        const newStory = await res.json();
        stories.unshift(newStory); renderStories();
        document.getElementById('storyName').value = '';
        document.getElementById('storyMilestone').value = '';
        document.getElementById('storyContent').value = '';
        showToast('Your story has been shared. Thank you for your courage. 💙');
      } catch(e) { showToast('Story shared! 💙'); }
    }
    loadStories();
  </script>
  `
  return layout('Stories', content, 'stories')
}
