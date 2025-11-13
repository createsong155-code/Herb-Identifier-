// FULL HERBS DATABASE
const herbs = [
  {
    "id": 1,
    "name": "Akapulko",
    "local": "Akapulko",
    "bisaya": "Katanda",
    "english": "Ringworm Bush",
    "scientific": "Senna alata",
    "description": "A shrub with yellow flowers and long pods. Leaves contain antifungal compounds effective against ringworm and scabies.",
    "category": "Wound / Skin Conditions",
    "partUsed": "Leaves",
    "use": ["Ringworm", "Scabies", "Eczema", "Fungal Infections"],
    "preparation": {
      "Ringworm": "Crush fresh leaves into a paste and apply directly to affected skin twice daily. Wash after 30 minutes.",
      "Scabies": "Boil about 10 leaves in 2 cups of water for 10 minutes. Let it cool and use the liquid to wash the affected area twice a day.",
      "Eczema": "Apply leaf paste thinly over the area for soothing relief; discontinue if irritation occurs.",
      "Fungal Infections": "Use decoction (boiled leaves) as a skin rinse after bathing once daily until symptoms improve."
    },
    "caution": "Conduct a patch test before use. Avoid application on open wounds. Not for internal consumption. Discontinue if rash or irritation occurs. Keep out of reach of children and avoid contact with eyes.",
    "images": [
      { "part": "Leaf", "url": "akapulko-leaf.jpg" },
      { "part": "Flower", "url": "akapulko-flower.jpg" }
    ]
  }
];

// STORAGE
const storage = { 
  load() { 
    const d = JSON.parse(localStorage.getItem('herbApp') || '{}'); 
    herbs.forEach(h => { 
      h.notes = d.notes?.[h.id] || ''; 
      h.favorite = d.favorites?.includes(h.id) || false; 
    }); 
  }, 
  save() { 
    const d = { notes: {}, favorites: herbs.filter(h => h.favorite).map(h => h.id) }; 
    herbs.forEach(h => { if (h.notes) d.notes[h.id] = h.notes; }); 
    localStorage.setItem('herbApp', JSON.stringify(d)); 
  } 
}; 
storage.load();

// RENDER
function render(f = herbs) {
  const list = document.getElementById('herb-list');
  if (!list) return;
  list.innerHTML = f.map(h => `
    <div class="herb-card" onclick="openModal(${h.id})">
      ${document.body.classList.contains('grid') ? `<img src="${h.images[0].url}" alt="${h.name}">` : ''}
      <div class="card-content">
        <h3>
          ${h.name} | ${h.bisaya} | ${h.english}
          <span class="tag">${h.category}</span>
        </h3>
        <span class="star-btn ${h.favorite ? 'favorited' : ''}" onclick="toggleFav(${h.id}, event)"></span>
      </div>
    </div>
  `).join('');
}

// TOGGLE FAV
function toggleFav(id, e) {
  e.stopPropagation();
  const h = herbs.find(x => x.id === id);
  h.favorite = !h.favorite;
  storage.save();
  render();
}

// VIEW TOGGLE
document.getElementById('viewToggle')?.addEventListener('click', () => { 
  document.body.classList.toggle('grid'); 
  document.getElementById('viewToggle').textContent = document.body.classList.contains('grid') ? 'List' : 'Grid'; 
});

// CATEGORY FILTER
document.querySelectorAll('.category').forEach(b => b.addEventListener('click', () => { 
  document.querySelectorAll('.category').forEach(x => x.classList.remove('active')); 
  b.classList.add('active'); 
  const c = b.dataset.category; 
  render(c === 'Favorites' ? herbs.filter(h => h.favorite) : c === 'all' ? herbs : herbs.filter(h => h.category === c)); 
}));

// SEARCH
document.getElementById('searchInput')?.addEventListener('input', e => 
  render(herbs.filter(h => h.name.toLowerCase().includes(e.target.value.toLowerCase())))
);

// MODAL
const modal = document.getElementById('herb-modal'); 
document.querySelector('.close')?.addEventListener('click', () => modal.style.display = 'none'); 
window.addEventListener('click', e => e.target === modal && (modal.style.display = 'none'));

function openModal(id) {
  const h = herbs.find(x => x.id === id);
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <h2>${h.name} | ${h.bisaya} | ${h.english}${h.favorite ? ' Star' : ''}</h2>

    <!-- SWIPE GALLERY (TAP TO FULLSCREEN) -->
    <div class="image-swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          ${h.images.map((img, index) => `
            <div class="swiper-slide" onclick="openFullscreen(${id}, ${index})">
              <img src="${img.url}" alt="${h.name} ${img.part}" style="width:100%; height:180px; object-fit:cover; border-radius:12px; cursor:pointer;">
            </div>
          `).join('')}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <!-- INFO LIST -->
    <div class="info-list">
      <p><strong>Local:</strong> ${h.local}</p>
      <p><strong>English:</strong> ${h.english}</p>
      <p><strong>Scientific:</strong> <i>${h.scientific}</i></p>
      <p><strong>Description:</strong> <i>${h.description}</i></p>
      <p><strong>Part Used:</strong> <span class="part-badge">${h.partUsed}</span></p>

      <div class="prep-list">
        <strong>Preparation by Use:</strong>
        ${Object.entries(h.preparation || {}).map(([use, prep]) => `
          <p class="prep-item">
            <span class="use-label">${use}:</span> ${prep}
          </p>
        `).join('')}
      </div>

      <hr>
      <p><strong>Use:</strong> ${h.use}</p>
      <p><strong>Caution:</strong> ${h.caution}</p>
    </div>

    <div class="notes-section">
      <textarea id="notes-input" placeholder="Add your notes...">${h.notes}</textarea>
    </div>

    <div class="modal-buttons">
      <button class="modal-btn save-btn" onclick="save(${id},false)">Save</button>
      <button class="modal-btn save-suggest-btn" onclick="save(${id},true)">Save & Suggest</button>
      <button class="modal-btn ${h.favorite?'save-btn':'save-suggest-btn'}" onclick="fav(${id})">
        ${h.favorite?'Unfav':'Fav'}
      </button>
    </div>
  `;

  setTimeout(() => {
    new Swiper('.swiper-container', {
      loop: h.images.length > 1,
      pagination: { el: '.swiper-pagination', clickable: true },
      grabCursor: true,
    });
  }, 0);

  modal.style.display = 'block';
}

// SAVE & FAV
window.save = (id, suggest) => { 
  const h = herbs.find(x => x.id === id); 
  h.notes = document.getElementById('notes-input').value; 
  storage.save(); 
  alert(suggest ? "Saved! Try with Luya." : "Saved!"); 
  modal.style.display = 'none'; 
  render(); 
};

window.fav = (id) => { 
  const h = herbs.find(x => x.id === id); 
  h.favorite = !h.favorite; 
  storage.save(); 
  render(); 
  openModal(id); 
};

// MENU & FOOTER
document.getElementById('hamburgerMenu')?.addEventListener('click', () => {
  document.getElementById('sideMenu').classList.add('active');
});
document.getElementById('closeMenu')?.addEventListener('click', () => {
  document.getElementById('sideMenu').classList.remove('active');
});
window.addEventListener('click', (e) => {
  const menu = document.getElementById('sideMenu');
  if (menu.classList.contains('active') && !menu.contains(e.target) && e.target.id !== 'hamburgerMenu') {
    menu.classList.remove('active');
  }
});

function filterCategory(cat) {
  document.querySelectorAll('.footer-btn').forEach(btn => btn.classList.remove('active'));
  event.target.closest('.footer-btn').classList.add('active');
  const target = cat === 'all' ? document.querySelector('.category[data-category="all"]') 
               : cat === 'Favorites' ? document.querySelector('.category[data-category="Favorites"]') : null;
  if (target) target.click();
}

function openSupport() {
  alert("Support Center\n\nEmail: support@herbapp.com\nPhone: +63 912 345 6789\n\nOr tap 'Support / Help Center' in Menu");
}

function openDashboard() {
  const favCount = herbs.filter(h => h.favorite).length;
  const noteCount = Object.keys(JSON.parse(localStorage.getItem('herbApp') || '{}').notes || {}).length;
  alert(`My Dashboard\n\nFavorites: ${favCount}\nSaved Notes: ${noteCount}\n\nComing soon: Full dashboard view!`);
}

// RENDER AFTER DOM
document.addEventListener('DOMContentLoaded', () => {
  render();
});

// FULLSCREEN SWIPER GALLERY — FULL IMAGE + PINCH ZOOM
let fullscreenSwiper;

function openFullscreen(herbId, startIndex = 0) {
  const h = herbs.find(x => x.id === herbId);
  const modal = document.getElementById('fullscreen-modal');
  const wrapper = document.getElementById('fullscreen-swiper-wrapper');
  
  wrapper.innerHTML = '';
  
  h.images.forEach(img => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <div class="swiper-zoom-container">
        <img src="${img.url}" alt="${img.part}">
      </div>
    `;
    wrapper.appendChild(slide);
  });
  
  modal.style.display = 'block';
  
  if (fullscreenSwiper) {
    fullscreenSwiper.destroy(true, true);
  }
  
  setTimeout(() => {
    fullscreenSwiper = new Swiper('.fullscreen-swiper-container', {
      initialSlide: startIndex,
      loop: h.images.length > 1,
      pagination: { el: '.fullscreen-pagination', clickable: true },
      grabCursor: true,
      zoom: { maxRatio: 5, minRatio: 1 },
    });
    
    let lastTap = 0;
    wrapper.querySelectorAll('img').forEach(img => {
      img.onclick = (e) => {
        const now = Date.now();
        if (now - lastTap < 300) {
          const zoom = fullscreenSwiper.zoom;
          if (fullscreenSwiper.zoom.scale > 1) {
            zoom.out();
          } else {
            zoom.in();
          }
        }
        lastTap = now;
      };
    });
  }, 0);
}

// Close fullscreen
document.querySelector('.fullscreen-close').onclick = () => {
  document.getElementById('fullscreen-modal').style.display = 'none';
};

document.getElementById('fullscreen-modal').onclick = (e) => {
  if (e.target === document.getElementById('fullscreen-modal')) {
    e.target.style.display = 'none';
  }
};
