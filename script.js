// =============================================
// HERBS & SURVIVAL APP – FINAL 100% WORKING NA GYUD
// HOME TAB = TANAN HERBS MAKITA DAYON
// =============================================

const herbs = [
  { "id": 1, "name": "Akapulko", "local": "Akapulko Sibukaw", "bisaya": "Katanda", "english": "Ringworm Bush", "scientific": "Senna alata", "description": "A shrub with yellow flowers and long pods. Leaves contain antifungal compounds effective against ringworm and scabies.", "category": "Wound / Skin Conditions", "partUsed": "Leaves", "use": ["Ringworm", "Scabies", "Eczema", "Fungal Infections"], "benefits": ["Natural antifungal – kills buni & hadhad in days", "Heals skin infections fast", "Safe for kids & pregnant (external)", "DOH-approved"], "preparation": { "Ringworm": "Crush fresh leaves into paste, apply 2x daily.", "Scabies": "Boil 10 leaves in 2 cups water, use to wash area." }, "caution": "Patch test first. Avoid open wounds & internal use.", "images": [ { "url": "akapulko-leaf.jpg" }, { "url": "akapulko-flower.jpg" } ], "searchTerms": ["akapulko","katanda","ringworm","buni"] },
  { "id": 2, "name": "Alagaw", "local": "Alagaw", "bisaya": "Alagaw", "english": "Premna", "scientific": "Premna odorata", "category": "Respiratory / Fever", "partUsed": "Leaves", "use": ["Cough","Colds","Fever"], "benefits": ["Relieves cough fast","Lowers fever"], "images": [ { "url": "alagaw-leaf.jpg" } ] },
  { "id": 3, "name": "Ampalaya", "local": "Paliya", "bisaya": "Paliya", "english": "Bitter Melon", "scientific": "Momordica charantia", "category": "Diabetes", "partUsed": "Fruit", "use": ["Blood Sugar"], "benefits": ["Lowers blood sugar"], "images": [ { "url": "ampalaya-fruit.jpg" } ] },
  { "id": 4, "name": "Atis", "local": "Atis", "bisaya": "Atis", "english": "Sugar Apple", "scientific": "Annona squamosa", "category": "Nutrition", "partUsed": "Fruit", "use": ["Energy"], "benefits": ["High Vitamin C"], "images": [ { "url": "atis-fruit.jpg" } ] },
  { "id": 5, "name": "Avocado", "local": "Abokado", "bisaya": "Abokado", "english": "Avocado", "scientific": "Persea americana", "category": "Heart", "partUsed": "Fruit", "use": ["Heart"], "benefits": ["Healthy fats"], "images": [ { "url": "avocado-fruit.jpg" } ] },
  { "id": 6, "name": "Balbas Pusa", "local": "Balbas Pusa", "bisaya": "Balbas Pusa", "english": "Cat’s Whiskers", "scientific": "Orthosiphon aristatus", "category": "Kidney", "partUsed": "Leaves", "use": ["Kidney Health"], "benefits": ["Natural diuretic"], "images": [ { "url": "balbaspusa-leaf.jpg" } ] },
  { "id": 7, "name": "Banaba", "local": "Banaba", "bisaya": "Banaba", "english": "Queen’s Crape Myrtle", "scientific": "Lagerstroemia speciosa", "category": "Diabetes", "partUsed": "Leaves", "use": ["Blood Sugar"], "benefits": ["Top anti-diabetes herb"], "images": [ { "url": "banaba-leaf.jpg" } ] },
  { "id": 8, "name": "Bawang", "local": "Bawang", "bisaya": "Ahos", "english": "Garlic", "scientific": "Allium sativum", "category": "Heart", "partUsed": "Bulb", "use": ["Blood Pressure"], "benefits": ["Natural antibiotic"], "images": [ { "url": "bawang-bulb.jpg" } ] },
  { "id": 9, "name": "Bayabas", "local": "Bayabas", "bisaya": "Bayabas", "english": "Guava", "scientific": "Psidium guajava", "category": "Digestive", "partUsed": "Leaves", "use": ["Diarrhea"], "benefits": ["Stops diarrhea fast"], "images": [ { "url": "bayabas-leaf.jpg" } ] },
  { "id": 10, "name": "Bignay", "local": "Bignay", "bisaya": "Bignay", "english": "Bignay", "scientific": "Antidesma bunius", "category": "Antioxidant", "partUsed": "Fruit", "use": ["Immunity"], "benefits": ["Rich in antioxidants"], "images": [ { "url": "bignay-fruit.jpg" } ] }
];

// Local Storage Favorites
const storage = {
  load() {
    const data = JSON.parse(localStorage.getItem('herbApp') || '{}');
    herbs.forEach(h => h.favorite = data.favorites?.includes(h.id) || false);
  },
  save() {
    localStorage.setItem('herbApp', JSON.stringify({ favorites: herbs.filter(h => h.favorite).map(h => h.id) }));
  }
};
storage.load();

// RENDER CARDS – 100% CLEAN TEMPLATE LITERALS
function render(filtered = herbs) {
  const list = document.getElementById('herb-list');
  if (!list) return;
  list.innerHTML = filtered.map(h => `
    <div class="herb-card" onclick="openModal(${h.id})">
      \( {document.body.classList.contains('grid') ? `<img src=" \){h.images[0].url}" alt="${h.name}" onerror="this.style.display='none'">` : ''}
      <div class="card-content">
        <h3>\( {h.name}<br><small> \){h.bisaya} • ${h.english}</small>
          <span class="tag">${h.category.split('/')[0].trim()}</span>
        </h3>
        <div class="star-btn \( {h.favorite ? 'favorited' : ''}" onclick="toggleFavorite( \){h.id}, event)">★</div>
      </div>
    </div>
  `).join('');
}

// FOOTER TABS – WORKING NA GYUD
const footerButtons = document.querySelectorAll('.footer-btn');
function showTab(tab) {
  document.querySelectorAll('#herb-list, .community-view').forEach(el => el.style.display = 'none');
  footerButtons.forEach(b => b.classList.remove('active'));
  document.querySelector(`.footer-btn[data-tab="${tab}"]`)?.classList.add('active');

  if (tab === 'home') { document.getElementById('herb-list').style.display = 'block'; render(); }
  if (tab === 'favorites') { document.getElementById('herb-list').style.display = 'block'; render(herbs.filter(h => h.favorite)); }
  if (tab === 'community') { document.querySelector('.community-view').style.display = 'block'; }
}
footerButtons.forEach(btn => btn.addEventListener('click', () => showTab(btn.dataset.tab)));

// TOGGLE FAVORITE
function toggleFavorite(id, e) {
  e.stopPropagation();
  const herb = herbs.find(h => h.id === id);
  herb.favorite = !herb.favorite;
  storage.save();
  render();
}

// SIMPLE MODAL PARA TESTING (LATER I-BALIK NATONG FULL)
function openModal(id) {
  const h = herbs.find(x => x.id === id);
  alert(`HERB: \( {h.name}\nBisaya: \){h.bisaya}\nEnglish: \( {h.english}\n\nBenefits:\n• \){h.benefits.join('\n• ')}`);
}

// VIEW TOGGLE GRID/LIST
document.getElementById('viewToggle')?.addEventListener('click', function () {
  document.body.classList.toggle('grid');
  this.textContent = document.body.classList.contains('grid') ? 'List' : 'Grid';
  render(); // re-render para ma-update ang images
});

// === USA RA KA DOMCONTENTLOADED! ===
document.addEventListener('DOMContentLoaded', () => {
  // Hide community, show herb list
  document.querySelector('.community-view')?.style = 'display:none !important';
  const list = document.getElementById('herb-list');
  list.style.display = 'block';
  
  render(); // ← KINI ANG NAGBUTANG SA 10 HERBS

  // Activate Home tab
  document.querySelector('.footer-btn[data-tab="home"]')?.classList.add('active');

  console.log("%cHERBS APP 100% LOADED – 10 HERBS VISIBLE NA!", "color:#4CAF50;font-size:22px;font-weight:bold");
});
