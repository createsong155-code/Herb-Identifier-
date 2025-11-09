const herbs = [
  { id: 1, name: "Lagundi", local: "Lagundi", english: "Five-Leaved Chaste Tree", category: "Cough", image: "https://via.placeholder.com/400x300/2e8b57/white?text=Lagundi", description: "Anti-asthma and cough remedy.", preparation: "Boil leaves in water.", use: "Cough, asthma.", caution: "Avoid if pregnant.", notes: "", favorite: false },
  { id: 2, name: "Akapulko", local: "Akapulko", english: "Ringworm Bush", category: "Wound", image: "https://via.placeholder.com/400x300/2e8b57/white?text=Akapulko", description: "For skin infections.", preparation: "Crush leaves.", use: "Ringworm, wounds.", caution: "Patch test.", notes: "", favorite: false },
  { id: 3, name: "Luya", local: "Luya", english: "Ginger", category: "Stomach Ache", image: "https://via.placeholder.com/400x300/2e8b57/white?text=Luya", description: "Relieves nausea.", preparation: "Brew as tea.", use: "Stomach ache.", caution: "Safe.", notes: "", favorite: false },
  { id: 4, name: "Bayabas", local: "Bayabas", english: "Guava", category: "Wound", image: "https://via.placeholder.com/400x300/2e8b57/white?text=Bayabas", description: "Antiseptic leaves.", preparation: "Boil leaves.", use: "Wounds, diarrhea.", caution: "Safe.", notes: "", favorite: false },
  { id: 5, name: "Sambong", local: "Sambong", english: "Blumea", category: "Fever", image: "https://via.placeholder.com/400x300/2e8b57/white?text=Sambong", description: "Fever reducer.", preparation: "Drink as tea.", use: "Fever, stones.", caution: "Moderate use.", notes: "", favorite: false },
  { id: 6, name: "Malunggay", local: "Malunggay", english: "Moringa", category: "Kidney", image: "https://via.placeholder.com/400x300/2e8b57/white?text=Malunggay", description: "Superfood.", preparation: "Add to soup.", use: "Nutrition.", caution: "Safe.", notes: "", favorite: false },
  { id: 7, name: "Kalabo", local: "Kalabo", english: "Oregano", category: "Cough", image: "https://via.placeholder.com/400x300/2e8b57/white?text=Kalabo", description: "For cough.", preparation: "Steep leaves.", use: "Colds.", caution: "Safe.", notes: "", favorite: false },
  { id: 8, name: "Tanglad", local: "Tanglad", english: "Lemongrass", category: "Cough", image: "https://via.placeholder.com/400x300/2e8b57/white?text=Tanglad", description: "Calming tea.", preparation: "Boil stalks.", use: "Cough, stress.", caution: "Safe.", notes: "", favorite: false }
];

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

// RENDER WITH GOLDEN STAR
function render(f = herbs) {
  const list = document.getElementById('herb-list');
  list.innerHTML = f.map(h => `
    <div class="herb-card" onclick="openModal(${h.id})">
      ${document.body.classList.contains('grid') ? `<img src="${h.image}" alt="${h.name}">` : ''}
      <div class="card-content">
        <h3>${h.name} <span class="tag">${h.category}</span></h3>
        <span class="star-btn ${h.favorite ? 'favorited' : ''}" onclick="toggleFav(${h.id}, event)">★</span>
      </div>
    </div>
  `).join('');
}
render();

// TOGGLE FAVORITE (Golden Star)
function toggleFav(id, e) {
  e.stopPropagation(); // Prevent modal from opening
  const h = herbs.find(x => x.id === id);
  h.favorite = !h.favorite;
  storage.save();
  render(); // Re-render to update star
}

// VIEW TOGGLE (Grid / List)
document.getElementById('viewToggle').onclick = () => { 
  document.body.classList.toggle('grid'); 
  document.getElementById('viewToggle').textContent = document.body.classList.contains('grid') ? 'List' : 'Grid'; 
};

// CATEGORY FILTER
document.querySelectorAll('.category').forEach(b => b.onclick = () => { 
  document.querySelectorAll('.category').forEach(x => x.classList.remove('active')); 
  b.classList.add('active'); 
  const c = b.dataset.category; 
  render(c === 'Favorites' ? herbs.filter(h => h.favorite) : c === 'all' ? herbs : herbs.filter(h => h.category === c)); 
});

// SEARCH
document.getElementById('searchInput').oninput = e => 
  render(herbs.filter(h => h.name.toLowerCase().includes(e.target.value.toLowerCase())));

// MODAL
const modal = document.getElementById('herb-modal'); 
document.querySelector('.close').onclick = () => modal.style.display = 'none'; 
window.onclick = e => e.target === modal && (modal.style.display = 'none');

function openModal(id) {
  const h = herbs.find(x => x.id === id);
  document.getElementById('modal-body').innerHTML = `
    <h2>${h.name}</h2>
    <img src="${h.image}" alt="${h.name}">
    <div class="detail-section"><h4>Local:</h4><p>${h.local}</p></div>
    <div class="detail-section"><h4>English:</h4><p>${h.english}</p></div>
    <div class="detail-section"><h4>Description:</h4><p>${h.description}</p></div>
    <div class="detail-section"><h4>Preparation:</h4><p>${h.preparation}</p></div>
    <div class="detail-section"><h4>Use:</h4><p>${h.use}</p></div>
    <div class="detail-section"><h4>Caution:</h4><p>${h.caution}</p></div>
    <div class="detail-section"><h4>Notes:</h4><textarea id="notes-input">${h.notes}</textarea></div>
    <div class="modal-buttons">
      <button class="modal-btn save-btn" onclick="save(${id},false)">Save</button>
      <button class="modal-btn save-suggest-btn" onclick="save(${id},true)">Save & Suggest</button>
      <button class="modal-btn ${h.favorite?'save-btn':'save-suggest-btn'}" onclick="fav(${id})">${h.favorite?'Unfav':'Fav'}</button>
    </div>
  `;
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

// HAMBURGER MENU
document.getElementById('hamburgerMenu').onclick = () => {
  document.getElementById('sideMenu').classList.add('active');
};

document.getElementById('closeMenu').onclick = () => {
  document.getElementById('sideMenu').classList.remove('active');
};

window.addEventListener('click', (e) => {
  const menu = document.getElementById('sideMenu');
  if (menu.classList.contains('active') && !menu.contains(e.target) && e.target.id !== 'hamburgerMenu') {
    menu.classList.remove('active');
  }
});

// FOOTER: FULLY WORKING
function filterCategory(cat) {
  document.querySelectorAll('.footer-btn').forEach(btn => btn.classList.remove('active'));
  event.target.closest('.footer-btn').classList.add('active');

  let targetCategory = null;
  if (cat === 'all') {
    targetCategory = document.querySelector('.category[data-category="all"]');
  } else if (cat === 'Favorites') {
    targetCategory = document.querySelector('.category[data-category="Favorites"]');
  }
  if (targetCategory) targetCategory.click();
}

function openSupport() {
  alert("Support Center\n\nEmail: support@herbapp.com\nPhone: +63 912 345 6789\n\nOr tap 'Support / Help Center' in Menu");
}

function openDashboard() {
  const favCount = herbs.filter(h => h.favorite).length;
  const noteCount = Object.keys(JSON.parse(localStorage.getItem('herbApp') || '{}').notes || {}).length;
  alert(`My Dashboard\n\nFavorites: ${favCount}\nSaved Notes: ${noteCount}\n\nComing soon: Full dashboard view!`);
}

/* CARD CONTENT & STAR */
.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
}

.star-btn {
  font-size: 1.3rem;
  cursor: pointer;
  color: #ccc;
  transition: all 0.3s ease;
}

.star-btn.favorited {
  color: #ffd700;
  text-shadow: 0 0 8px #ffd700;
}

.star-btn:hover {
  transform: scale(1.2);
}
