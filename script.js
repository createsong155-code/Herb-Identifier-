// ----------------- Data -----------------
const herbs = [
  {
    name: "Lagundi",
    category: "Cough",
    description: "Lagundi is used for cough, asthma and related respiratory issues.",
    uses: "Relieves cough and reduces bronchial spasms.",
    preparation: "Boil 5–10 leaves in 2 cups water; drink warm twice daily.",
    cautions: "Avoid large amounts during pregnancy.",
    image: "https://via.placeholder.com/300x200?text=Lagundi"
  },
  {
    name: "Sambong",
    category: "Kidney",
    description: "Sambong is a diuretic used to help treat kidney stones and hypertension.",
    uses: "Diuretic, helps kidney health.",
    preparation: "Boil leaves and drink decoction.",
    cautions: "Check with doctor if on meds.",
    image: "https://via.placeholder.com/300x200?text=Sambong"
  },
  {
    name: "Tanglad (Lemongrass)",
    category: "Fever",
    description: "Lemongrass reduces fever and aids digestion.",
    uses: "Calms digestion; anti-fever.",
    preparation: "Boil stalks and drink tea.",
    cautions: "Avoid if allergic to grasses.",
    image: "https://via.placeholder.com/300x200?text=Tanglad"
  },
  {
    name: "Bayabas (Guava)",
    category: "Wound",
    description: "Guava leaves have antibacterial properties for wound cleansing.",
    uses: "Wound wash, mouth rinse.",
    preparation: "Boil leaves; use cooled liquid.",
    cautions: "Avoid contact with eyes.",
    image: "https://via.placeholder.com/300x200?text=Bayabas"
  },
  {
    name: "Ampalaya (Bitter Gourd)",
    category: "Stomach Ache",
    description: "Bitter gourd helps digestion and supports blood sugar control.",
    uses: "Digestive aid; blood sugar support.",
    preparation: "Boil leaves or eat as vegetable.",
    cautions: "Avoid during pregnancy.",
    image: "https://via.placeholder.com/300x200?text=Ampalaya"
  }
];

// ----------------- State -----------------
let favorites = JSON.parse(localStorage.getItem('herbFavorites') || '[]');
let currentFilter = 'all';            // 'all', 'favorites' or category string
let currentView = 'list';             // 'list' or 'grid'

// ----------------- Elements -----------------
const herbListEl = document.getElementById('herbList');
const filtersEl = document.getElementById('filters');
const viewToggleBtn = document.getElementById('viewToggle');
const cameraBtn = document.getElementById('cameraBtn');

// ----------------- Render -----------------
function render() {
  // set view class on container
  herbListEl.className = 'herb-list ' + (currentView === 'grid' ? 'grid' : 'list');

  // compute filtered list
  let list = herbs.slice();
  if (currentFilter === 'favorites') {
    list = list.filter(h => favorites.includes(h.name));
  } else if (currentFilter !== 'all') {
    list = list.filter(h => h.category.toLowerCase() === currentFilter.toLowerCase());
  }

  // clear
  herbListEl.innerHTML = '';
  if (list.length === 0) {
    herbListEl.innerHTML = '<p style="text-align:center;color:#666;margin:18px 0">No herbs found.</p>';
    return;
  }

  // build cards
  list.forEach(h => {
    const card = document.createElement('div');
    card.className = 'herb-card';

    // star button
    const star = document.createElement('button');
    star.className = 'star-btn' + (favorites.includes(h.name) ? ' favorited' : '');
    star.setAttribute('aria-label', 'favorite');
    star.innerText = '★';
    star.addEventListener('click', (ev) => {
      ev.stopPropagation(); // prevent card click
      toggleFavorite(h.name);
    });

    if (currentView === 'grid') {
      // grid card (image + name + star)
      card.innerHTML = `
        <img class="herb-image" src="${h.image}" alt="${escapeHtml(h.name)}">
        <h3>${escapeHtml(h.name)}</h3>
      `;
      card.appendChild(star);
      // clicking star handled above
    } else {
      // list card (details visible collapsed; click title to toggle)
      card.innerHTML = `
        <div class="herb-left">
          <h3 class="herb-title">${escapeHtml(h.name)}</h3>
          <p><strong>Use:</strong> ${escapeHtml(h.category)}</p>
          <div class="herb-details" style="display:none">
            <p><strong>Description:</strong> ${escapeHtml(h.description)}</p>
            <p><strong>Uses:</strong> ${escapeHtml(h.uses)}</p>
            <p><strong>Preparation:</strong> ${escapeHtml(h.preparation)}</p>
            <p><strong>Cautions:</strong> ${escapeHtml(h.cautions)}</p>
          </div>
        </div>
      `;
      card.appendChild(star);

      // toggle details on title click
      const titleToggle = card.querySelector('.herb-title');
      titleToggle.addEventListener('click', () => {
        const details = card.querySelector('.herb-details');
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
        card.classList.toggle('expanded');
      });
    }

    herbListEl.appendChild(card);
  });
}

// ----------------- Helpers -----------------
function toggleFavorite(name) {
  if (favorites.includes(name)) {
    favorites = favorites.filter(n => n !== name);
  } else {
    favorites.push(name);
  }
  localStorage.setItem('herbFavorites', JSON.stringify(favorites));
  render();
  updateFavoritesButtonStyle();
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}

function updateFavoritesButtonStyle() {
  const favBtn = document.querySelector('.filter[data-filter="favorites"], .filter[data-filter="favorites"]') || document.querySelector('[data-filter="favorites"]');
  // simpler: color the Favorites filter if any favorites
  const favFilter = document.querySelector('.filter[data-filter="favorites"]');
  if (favFilter) {
    if (favorites.length > 0) {
      favFilter.style.background = '#ffd54f';
      favFilter.style.color = '#4e342e';
    } else {
      favFilter.style.background = '';
      favFilter.style.color = '';
    }
  }
}

// ----------------- Wire UI -----------------

// filter buttons (delegation)
filtersEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter');
  if (!btn) return;
  // remove active
  filtersEl.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const f = btn.getAttribute('data-filter');
  if (f === 'favorites') {
    currentFilter = 'favorites';
  } else {
    currentFilter = f || 'all';
  }
  render();
});

// view toggle
viewToggleBtn.addEventListener('click', () => {
  currentView = currentView === 'list' ? 'grid' : 'list';
  viewToggleBtn.textContent = currentView === 'list' ? '🔳 List' : '🖼 Grid';
  render();
});

// favorites filter via clicking the favorites filter works above; also allow double-control:
// (no extra code needed — filter button handles it)

// camera placeholder
cameraBtn.addEventListener('click', () => {
  alert('Camera feature coming soon — will open camera or upload.');
});

// initial render
updateFavoritesButtonStyle();
render();
