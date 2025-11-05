// === DATA ===
const herbs = [
  { id: 1, name: "Lagundi", category: "Cough", description: "Relieves cough and asthma.", preparation: "Boil leaves for 10 mins.", use: "Cough, fever.", caution: "Not for pregnant.", notes: "", favorite: false },
  // Add more herbs...
];

// === STORAGE ===
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

// === RENDER HERBS ===
function renderHerbs(filtered = herbs) {
  const list = document.getElementById('herb-list');
  list.innerHTML = '';
  filtered.forEach(herb => {
    const card = document.createElement('div');
    card.className = 'herb-card';
    card.innerHTML = `
      <h3>${herb.name} <span class="tag">${herb.category}</span></h3>
      <p>${herb.description.substring(0, 100)}...</p> <!-- Small description -->
      <span class="star-btn ${herb.favorite ? 'favorited' : ''}" onclick="toggleFavorite(${herb.id}, event)">★</span>
    `;
    card.onclick = () => openModal(herb);
    list.appendChild(card);
  });
}
renderHerbs();

// === TOGGLE FAVORITE ===
function toggleFavorite(id, e) {
  e.stopPropagation(); // Prevent modal open on star click
  const herb = herbs.find(h => h.id === id);
  herb.favorite = !herb.favorite;
  storage.save();
  renderHerbs();
}

// === VIEW TOGGLE ===
document.getElementById('viewToggle').addEventListener('click', () => {
  document.body.classList.toggle('grid');
  document.getElementById('viewToggle').textContent = document.body.classList.contains('grid') ? '■■■■■■■■' : 'List'; // 8 squares
});

// === SEARCH ===
document.getElementById('searchInput').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = herbs.filter(h => h.name.toLowerCase().includes(term));
  renderHerbs(filtered);
});

// === CATEGORY FILTER ===
document.querySelectorAll('.category').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.category').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.category;
    let filtered = herbs;
    if (cat === 'Favorites') filtered = herbs.filter(h => h.favorite);
    else if (cat !== 'all') filtered = herbs.filter(h => h.category === cat);
    renderHerbs(filtered);
  });
});

// === MODAL ===
const modal = document.getElementById('herb-modal');
const closeBtn = document.querySelector('.close');
function openModal(herb) {
  document.getElementById('modal-body').innerHTML = `
    <h2>${herb.name}</h2>
    <p>Description: ${herb.description}</p>
    <p>Preparation: ${herb.preparation}</p>
    <p>When to Use: ${herb.use}</p>
    <p>Caution: ${herb.caution}</p>
    <textarea id="notes-input">${herb.notes}</textarea>
    <button onclick="saveNote(${herb.id})">Save</button>
    <button onclick="saveSuggest(${herb.id})">Save & Suggest</button>
  `;
  modal.style.display = 'block';
}
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

// === SAVE NOTE ===
function saveNote(id) {
  const note = document.getElementById('notes-input').value;
  const herb = herbs.find(h => h.id === id);
  herb.notes = note;
  storage.save();
  alert('Notes saved!');
  modal.style.display = 'none';
}
function saveSuggest(id) {
  saveNote(id);
  alert('Saved! Suggestion: Pair with Ginger for better effect.');
}

// === HAMBURGER MENU ===
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('sideMenu').classList.add('active');
});
document.querySelector('.close-menu').addEventListener('click', () => {
  document.getElementById('sideMenu').classList.remove('active');
});

// === TABS ===
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelector(`[data-tab="${tab.dataset.tab}"]`).classList.add('active');
  });
});

// === FLOATING CAMERA ===
document.getElementById('floatingCamera').addEventListener('click', () => {
  alert('Camera opened for herb scan!');
});
document.getElementById('capturedFolder').addEventListener('click', () => {
  alert('Captured images folder opened!');
});
