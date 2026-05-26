/* ============================================================
   main.js — All interactive logic
   Depends on: games-data.js (loaded before this file)
   ============================================================ */

/* ─── NAV: Scroll shadow ─── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar')
    .classList.toggle('scrolled', window.scrollY > 60);
});

/* ─── GAMES GRID: Render from data ─── */
function buildGamesGrid() {
  const grid = document.getElementById('gamesGrid');
  if (!grid) return;

  Object.entries(GAMES_DATA).forEach(([id, g]) => {
    const highlightHTML = g.highlights.map(h =>
      `<span class="highlight-tag ${h.cls || ''}">${h.text}</span>`
    ).join('');

    // Thumbnail: real GIF/image if provided, otherwise placeholder
    const thumbInner = g.gif
      ? `<img src="${g.gif}" alt="${g.title} gameplay preview" loading="lazy">`
      : `<div class="game-thumb-placeholder ${g.thumbClass}">${g.thumbText}</div>`;

    const card = document.createElement('div');
    card.className = 'game-card fade-up';
    card.dataset.tags = g.tags;
    card.setAttribute('onclick', `openModal('${id}')`);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View details for ${g.title}`);

    card.innerHTML = `
      <div class="game-thumb">
        ${thumbInner}
        <div class="gif-overlay">
          <span class="gif-label">${g.gif ? '▶ Preview' : '📹 Add GIF'}</span>
        </div>
        <span class="game-badge ${g.badge.cls}">${g.badge.text}</span>
      </div>
      <div class="game-info">
        <div class="game-meta">
          <span class="game-genre">${g.genre}</span>
          <span class="game-platform">${g.platform}</span>
        </div>
        <h3 class="game-title">${g.title}</h3>
        <p class="game-desc">${g.desc}</p>
        <span class="game-role">${g.role}</span>
        <div class="game-highlights">${highlightHTML}</div>
      </div>
    `;

    // Keyboard accessibility
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openModal(id);
    });

    grid.appendChild(card);
  });

  // Trigger entrance animations after render
  initFadeUp();
  staggerCards();
}

/* ─── FILTER ─── */
function filterGames(tag, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.game-card').forEach(card => {
    const show = tag === 'all' || card.dataset.tags.includes(tag);
    card.style.display = show ? '' : 'none';
  });
}
// Expose to HTML onclick attributes
window.filterGames = filterGames;

/* ─── MODAL ─── */
function buildLegacyBody(g) {
  const contribHTML = g.contribs.map(c => `<li>${c}</li>`).join('');
  const achieveHTML = g.achievements.map(a => `<div class="achieve-pill">${a}</div>`).join('');
  return `
    <p style="font-size:0.92rem;color:var(--ink-soft);line-height:1.7;">${g.fullDesc}</p>
    <h3 class="modal-section-title">Role: ${g.role}</h3>
    <h3 class="modal-section-title">Contributions</h3>
    <ul class="modal-contrib-list">${contribHTML}</ul>
    <h3 class="modal-section-title">Achievements</h3>
    <div class="modal-achieve">${achieveHTML}</div>
    <h3 class="modal-section-title">Code Highlight</h3>
    <div class="code-sample">
      <div class="code-label">${g.code.label}</div>
      <div class="code-desc">${g.code.desc}</div>
    </div>
  `;
}

function buildMediaHTML(s) {
  // Text-only section — skip media block entirely
  if (s.mediaType === 'none') return '';

  if (s.media) {
    if (s.mediaType === 'youtube') {
      return `
        <div class="story-media story-media--youtube">
          <iframe
            src="${s.media}?rel=0&modestbranding=1"
            title="${s.mediaLabel}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>`;
    }
    if (s.mediaType === 'video') {
      return `<div class="story-media"><video src="${s.media}" autoplay loop muted playsinline></video></div>`;
    }
    return `<div class="story-media"><img src="${s.media}" alt="${s.mediaLabel}" loading="lazy"></div>`;
  }
  return `
    <div class="story-media story-media--placeholder">
      <span class="story-media-label">📹 ${s.mediaLabel}</span>
    </div>`;
}

function buildBodyHTML(body) {
  return body
    .split('\n\n')
    .map(p => `<p class="story-body">${p.trim()}</p>`)
    .join('');
}

function buildSectionsBody(g) {
  const sectionsHTML = g.sections.map(s => `
    <div class="story-section">
      ${buildMediaHTML(s)}
      <div class="story-text">
        ${s.title ? `<h3 class="story-section-title">${s.title}</h3>` : ''}
        ${buildBodyHTML(s.body)}
      </div>
    </div>
  `).join('');

  const achieveHTML = g.achievements.map(a => `<div class="achieve-pill">${a}</div>`).join('');
  return `
    ${sectionsHTML}
    <h3 class="modal-section-title">Achievements</h3>
    <div class="modal-achieve">${achieveHTML}</div>
  `;
}

function openModal(id) {
  const g = GAMES_DATA[id];
  if (!g) return;

  const useSections = !!g.sections;
  const linksHTML = g.links
    .map(l => `<a href="${l.url}" class="modal-link ${l.type}" ${l.url !== '#' ? 'target="_blank" rel="noopener"' : ''}>${l.label}</a>`)
    .join('');

  // Legacy format keeps the coloured thumb banner; sections format skips it
  const thumbHTML = useSections ? '' : (() => {
    const inner = g.gif
      ? `<img src="${g.gif}" alt="${g.title} gameplay" style="width:100%;height:100%;object-fit:cover;">`
      : `<div class="modal-thumb-text ${g.thumbClass}">${g.thumbText}</div>`;
    return `<div class="modal-thumb">${inner}</div>`;
  })();

  document.getElementById('modalContent').innerHTML = `
    <button class="modal-close" id="modalCloseBtn" aria-label="Close modal">✕</button>
    ${thumbHTML}
    <div class="modal-body">
      <div class="modal-header">
        <h2 class="modal-title">${g.title}</h2>
        <div class="modal-meta">
          <span class="modal-tag teal">${g.genre}</span>
          <span class="modal-tag teal">${g.platform}</span>
          <span class="modal-tag dark">${g.team}</span>
        </div>
      </div>
      ${useSections ? buildSectionsBody(g) : buildLegacyBody(g)}
      <div class="modal-links">${linksHTML}</div>
    </div>
  `;

  document.getElementById('modalCloseBtn').addEventListener('click', closeModalDirect);
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
window.openModal = openModal;

function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOnOverlay(e) {
  if (e.target === document.getElementById('modalOverlay')) {
    closeModalDirect();
  }
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModalDirect();
});

/* ─── CONTACT FORM ─── */
function handleSubmit(e) {
  e.preventDefault();
  /*
    TO GO LIVE — replace this with Formspree or EmailJS:

    Formspree (easiest):
      1. Sign up at formspree.io
      2. Create a form, get your endpoint
      3. Change <form action="https://formspree.io/f/YOUR_ID" method="POST">
         in index.html and remove onsubmit + this function entirely.

    EmailJS:
      1. Sign up at emailjs.com
      2. Replace the alert below with:
         emailjs.sendForm('YOUR_SERVICE', 'YOUR_TEMPLATE', e.target)
           .then(() => showToast('Message sent!'))
           .catch(() => showToast('Something went wrong.'));
  */
  showToast('Message sent! (Connect Formspree/EmailJS to activate)');
  e.target.reset();
}
window.handleSubmit = handleSubmit;

function showToast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position: 'fixed', bottom: '2rem', left: '50%',
    transform: 'translateX(-50%)',
    background: 'var(--teal-main)', color: 'white',
    fontFamily: "'DM Mono', monospace", fontSize: '0.8rem',
    letterSpacing: '0.04em', padding: '0.75rem 1.5rem',
    borderRadius: '4px', zIndex: '999',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    transition: 'opacity 0.4s',
  });
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 400); }, 3000);
}

/* ─── ENTRANCE ANIMATIONS ─── */
function initFadeUp() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

function staggerCards() {
  document.querySelectorAll('.game-card.fade-up').forEach((el, i) => {
    el.style.transitionDelay = (i % 3) * 0.1 + 's';
  });
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  buildGamesGrid();

  // Wire overlay close
  document.getElementById('modalOverlay')
    .addEventListener('click', closeModalOnOverlay);

  // Wire static fade-up elements (achievements, etc.)
  initFadeUp();
  document.querySelectorAll('.achieve-card.fade-up').forEach((el, i) => {
    el.style.transitionDelay = (i % 3) * 0.1 + 's';
  });
});
