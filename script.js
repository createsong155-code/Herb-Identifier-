// FULL HERBS DATABASE
const herbs = [
  [
  {
    "id": 1,
    "name": "Akapulko",
    "local": "Bayabas-bayabasan",
    "bisaya": "Katanda",
    "english": "Ringworm Bush",
    "scientific": "Senna alata",
    "description": "Akapulko is a shrub with bright yellow flowers and long seed pods. The leaves contain chrysophanic acid, a powerful antifungal compound traditionally used for skin problems.",
    "category": "Skin and Wound Care",
    "partUsed": "Leaves",
    "use": "Ringworm, Scabies, Eczema, Fungal skin infections",
    "preparation": {
      "Ringworm": "Pound fresh leaves to extract the juice. Apply directly to affected skin twice a day until healed.",
      "Scabies": "Boil a handful of leaves in 2 cups of water for 10 minutes. Use the cooled decoction as a skin wash daily.",
      "Eczema": "Crush leaves and mix with coconut oil. Apply gently to itchy or inflamed skin twice daily.",
      "Fungal Infections": "Dry leaves, powder them, and mix with petroleum jelly. Apply as an ointment twice daily."
    },
    "caution": "For external use only. Avoid applying on open wounds or broken skin. May cause mild irritation in sensitive individuals. Not recommended for infants, pregnant women, or those with severe skin allergies.",
    "images": [
      { "part": "Leaf", "url": "https://herbapp.ph/img/akapulko-leaf.jpg" },
      { "part": "Flower", "url": "https://herbapp.ph/img/akapulko-flower.jpg" }
    ]
  },
  {
    "id": 2,
    "name": "Alugbati",
    "local": "Alugbati",
    "bisaya": "Alugbati",
    "english": "Malabar Spinach",
    "scientific": "Basella alba",
    "description": "A soft-stemmed leafy vine often used as a vegetable. It has cooling, demulcent, and anti-inflammatory properties beneficial for digestion and skin.",
    "category": "Digestive and Skin Health",
    "partUsed": "Leaves and stems",
    "use": "Constipation, Ulcers, Acne, Burns",
    "preparation": {
      "Constipation": "Boil fresh leaves for 10 minutes and drink the decoction once daily until bowel movement improves.",
      "Ulcers": "Eat blanched leaves as part of meals to soothe and protect stomach lining.",
      "Acne": "Crush leaves and apply the mucilaginous sap to affected areas twice daily.",
      "Burns": "Pound leaves and apply as a poultice to the burn. Replace dressing twice daily."
    },
    "caution": "Safe in moderation. Overconsumption may cause bloating or loose stool due to high mucilage content. Wash thoroughly before use.",
    "images": [
      { "part": "Leaf", "url": "https://herbapp.ph/img/alugbati-leaf.jpg" },
      { "part": "Vine", "url": "https://herbapp.ph/img/alugbati-vine.jpg" }
    ]
  },
  {
    "id": 3,
    "name": "Ampalaya",
    "local": "Ampalaya",
    "bisaya": "Paliya",
    "english": "Bitter Gourd",
    "scientific": "Momordica charantia",
    "description": "A climbing vine with bitter fruits, known for its hypoglycemic, antioxidant, and antimicrobial properties. Widely used for diabetes and skin problems.",
    "category": "Metabolic and Skin Health",
    "partUsed": "Leaves, fruits",
    "use": "Diabetes, Acne, Worm infestation, Appetite stimulant",
    "preparation": {
      "Diabetes": "Boil 10 chopped leaves in 2 cups of water for 10 minutes. Drink ½ cup before meals twice daily.",
      "Acne": "Pound fresh leaves, extract the juice, and apply to pimples once daily.",
      "Worms": "Eat raw fruit slices on an empty stomach three mornings in a row.",
      "Appetite": "Boil young fruits and eat with meals to stimulate digestion."
    },
    "caution": "Avoid excessive intake; may cause stomach upset or hypoglycemia. Not advised for pregnant women as it may induce contractions. Avoid prolonged continuous use.",
    "images": [
      { "part": "Fruit", "url": "https://herbapp.ph/img/ampalaya-fruit.jpg" },
      { "part": "Leaf", "url": "https://herbapp.ph/img/ampalaya-leaf.jpg" }
    ]
  },
  {
    "id": 4,
    "name": "Anis",
    "local": "Anis",
    "bisaya": "Anis",
    "english": "Anise",
    "scientific": "Pimpinella anisum",
    "description": "A fragrant herb valued for its aromatic seeds used to treat coughs, bloating, and indigestion. Often used in teas and traditional oils.",
    "category": "Respiratory and Digestive Health",
    "partUsed": "Seeds",
    "use": "Cough, Indigestion, Bloating, Bad breath",
    "preparation": {
      "Cough": "Boil 1 teaspoon of seeds in 1 cup of water for 5 minutes. Drink warm twice daily.",
      "Indigestion": "Chew a few seeds after meals or brew as tea to ease digestion.",
      "Bloating": "Mix crushed seeds with warm water and drink after eating.",
      "Bad Breath": "Chew roasted seeds for fresh breath."
    },
    "caution": "Avoid excessive intake during pregnancy. May cause mild allergic reactions in sensitive individuals. Store seeds in a dry place to preserve aroma.",
    "images": [
      { "part": "Seeds", "url": "https://herbapp.ph/img/anis-seeds.jpg" },
      { "part": "Plant", "url": "https://herbapp.ph/img/anis-plant.jpg" }
    ]
  },
  {
    "id": 5,
    "name": "Bayabas",
    "local": "Bayabas",
    "bisaya": "Bayabas",
    "english": "Guava",
    "scientific": "Psidium guajava",
    "description": "A common fruit tree whose leaves and bark are valued for antibacterial and wound-healing properties. Used as mouthwash and wound cleanser.",
    "category": "Oral and Wound Care",
    "partUsed": "Leaves, bark",
    "use": "Wounds, Diarrhea, Mouth ulcers, Toothache",
    "preparation": {
      "Wounds": "Boil a handful of leaves in 1 liter of water for 10 minutes. Let cool and use as wound wash.",
      "Diarrhea": "Boil 10 young leaves in 2 cups of water. Drink ½ cup three times daily until relieved.",
      "Mouth Ulcers": "Use the decoction as mouth rinse twice daily.",
      "Toothache": "Chew a fresh leaf and let the juice sit on the affected tooth for several minutes."
    },
    "caution": "Avoid drinking decoction on an empty stomach as it may cause nausea. Excessive use may lead to constipation. Pregnant women should consult a doctor before use.",
    "images": [
      { "part": "Leaf", "url": "https://herbapp.ph/img/bayabas-leaf.jpg" },
      { "part": "Fruit", "url": "https://herbapp.ph/img/bayabas-fruit.jpg" }
    ]
  }
]

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
  <h2>${h.name} ${h.favorite ? 'Star' : ''}</h2>

  <!-- SWIPE GALLERY (NO LABEL) -->
  <div class="image-swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        ${h.images.map(img => `
          <div class="swiper-slide">
            <img src="${img.url}" alt="${h.name} ${img.part}">
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
    ${h.description ? `<p class="description"><strong>Description:</strong> ${h.description}</p>` : ''}
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

// RENDER AFTER DOM IS READY
document.addEventListener('DOMContentLoaded', () => {
  render();
});
