// TEMPORARY 8 HERBS (until herbs.json is ready)
const tempHerbs = [
  { id: 1, name: "Lagundi", local: "Lagundi", english: "Five-Leaved Chaste Tree", scientific: "Vitex negundo", category: "Cough", partUsed: "Leaves", use: "Cough, asthma.", preparation: "Boil leaves in water.", caution: "Avoid if pregnant.", notes: "", favorite: false, images: [{ part: "Leaf", url: "https://via.placeholder.com/400x300/2e8b57/white?text=Leaf" }] },
  { id: 2, name: "Akapulko", local: "Akapulko", english: "Ringworm Bush", scientific: "Senna alata", category: "Wound", partUsed: "Leaves", use: "Ringworm, wounds.", preparation: "Crush leaves.", caution: "Patch test.", notes: "", favorite: false, images: [{ part: "Leaf", url: "https://via.placeholder.com/400x300/2e8b57/white?text=Leaf" }] },
  { id: 3, name: "Luya", local: "Luya", english: "Ginger", scientific: "Zingiber officinale", category: "Stomach Ache", partUsed: "Rhizome", use: "Stomach ache.", preparation: "Brew as tea.", caution: "Safe.", notes: "", favorite: false, images: [{ part: "Root", url: "https://via.placeholder.com/400x300/2e8b57/white?text=Root" }] },
  { id: 4, name: "Bayabas", local: "Bayabas", english: "Guava", scientific: "Psidium guajava", category: "Wound", partUsed: "Leaves", use: "Wounds, diarrhea.", preparation: "Boil leaves.", caution: "Safe.", notes: "", favorite: false, images: [{ part: "Leaf", url: "https://via.placeholder.com/400x300/2e8b57/white?text=Leaf" }, { part: "Fruit", url: "https://via.placeholder.com/400x300/2e8b57/white?text=Fruit" }] },
  { id: 5, name: "Sambong", local: "Sambong", english: "Blumea", scientific: "Blumea balsamifera", category: "Fever", partUsed: "Leaves", use: "Fever, stones.", preparation: "Drink as tea.", caution: "Moderate use.", notes: "", favorite: false, images: [{ part: "Leaf", url: "https://via.placeholder.com/400x300/2e8b57/white?text=Leaf" }] },
  { id: 6, name: "Malunggay", local: "Malunggay", english: "Moringa", scientific: "Moringa oleifera", category: "Kidney", partUsed: "Leaves", use: "Nutrition.", preparation: "Add to soup.", caution: "Safe.", notes: "", favorite: false, images: [{ part: "Leaf", url: "https://via.placeholder.com/400x300/2e8b57/white?text=Leaf" }] },
  { id: 7, name: "Kalabo", local: "Kalabo", english: "Oregano", scientific: "Plectranthus amboinicus", category: "Cough", partUsed: "Leaves", use: "Colds.", preparation: "Steep leaves.", caution: "Safe.", notes: "", favorite: false, images: [{ part: "Leaf", url: "https://via.placeholder.com/400x300/2e8b57/white?text=Leaf" }] },
  { id: 8, name: "Tanglad", local: "Tanglad", english: "Lemongrass", scientific: "Cymbopogon citratus", category: "Cough", partUsed: "Stalk", use: "Cough, stress.", preparation: "Boil stalks.", caution: "Safe.", notes: "", favorite: false, images: [{ part: "Stalk", url: "https://via.placeholder.com/400x300/2e8b57/white?text=Stalk" }] }
];

let herbs = tempHerbs; // Use temp until full JSON

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
        <h3>${h.name} <span class="tag">${h.category}</span></h3>
        <span class="star-btn ${h.favorite ? 'favorited' : ''}" onclick="toggleFav(${h.id}, event)">★</span>
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

  function openModal(id) {
  const h = herbs.find(x => x.id === id);
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <h2>${h.name} ${h.favorite ? 'Star' : ''}</h2>

    <!-- SWIPE GALLERY -->
    <div class="image-swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          ${h.images.map(img => `
            <div class="swiper-slide">
              <img src="${img.url}" alt="${h.name} ${img.part}">
              <div class="image-label">${img.part}</div>
            </div>
          `).join('')}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <!-- ONE CLEAN LIST -->
    <div class="info-list">
      <p><strong>Local:</strong> ${h.local}</p>
      <p><strong>English:</strong> ${h.english}</p>
      <p><strong>Scientific:</strong> <i>${h.scientific}</i></p>
      <p><strong>Part Used:</strong> <span class="part-badge">${h.partUsed}</span></p>
      <hr>
      <p><strong>Use:</strong> ${h.use}</p>
      <p><strong>Preparation:</strong> ${h.preparation}</p>
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

  // INIT SWIPER
  new Swiper('.swiper-container', {
    loop: h.images.length > 1,
    pagination: { el: '.swiper-pagination', clickable: true },
    grabCursor: true,
  });

  modal.style.display = 'block';
}

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

// MENU & FOOTER (unchanged)
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

// RENDER ON LOAD
render();
