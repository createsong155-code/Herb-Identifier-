const herbs = [
  {
    name: "Lagundi",
    category: "Cough",
    description: "Relieves cough and asthma symptoms.",
    uses: "Good for colds and respiratory problems.",
    preparation: "Boil leaves in water, drink as tea.",
    caution: "Avoid excessive use if pregnant.",
    image: "images/lagundi.jpg"
  },
  {
    name: "Sambong",
    category: "Kidney",
    description: "Aids in dissolving kidney stones and uric acid.",
    uses: "Used for urinary tract infections and kidney health.",
    preparation: "Boil leaves in 2 cups of water, drink daily.",
    caution: "Consult doctor if using with other medication.",
    image: "images/sambong.jpg"
  },
  {
    name: "Tanglad (Lemongrass)",
    category: "Stomach Ache",
    description: "Aids digestion and relieves stomach discomfort.",
    uses: "Helps with bloating and gas.",
    preparation: "Boil 1 stalk in 2 cups of water, drink as tea.",
    caution: "Avoid if you have low blood pressure.",
    image: "images/tanglad.jpg"
  },
  {
    name: "Bayabas (Guava)",
    category: "Wound",
    description: "Used as an antiseptic and for wound washing.",
    uses: "Helps clean cuts and wounds.",
    preparation: "Boil young leaves and use for washing wounds.",
    caution: "For external use only.",
    image: "images/bayabas.jpg"
  },
  {
    name: "Ampalaya (Bitter Gourd)",
    category: "Fever",
    description: "Reduces fever and helps control blood sugar.",
    uses: "Also used for diabetes management.",
    preparation: "Boil leaves or fruit in water, drink as tea.",
    caution: "Avoid excessive use if pregnant or hypoglycemic.",
    image: "images/ampalaya.jpg"
  }
];

const herbList = document.getElementById('herb-list');
const toggleBtn = document.getElementById('toggleViewBtn');
let isGridView = false;

// 🧩 RENDER FUNCTION
function renderHerbs(filteredHerbs) {
  herbList.innerHTML = '';

  filteredHerbs.forEach(herb => {
    const li = document.createElement('li');
    li.classList.add('herb-card');
    li.innerHTML = `
      ${herb.image ? `<img src="${herb.image}" alt="${herb.name}">` : ''}
      <h3>${herb.name}</h3>
      <div class="details">
        <p><b>Description:</b> ${herb.description}</p>
        <p><b>Uses:</b> ${herb.uses}</p>
        <p><b>Preparation:</b> ${herb.preparation}</p>
        <p><b>Caution:</b> ${herb.caution}</p>
      </div>
    `;
    herbList.appendChild(li);
  });
}

// 🌿 Filter by Category
function filterHerbs(category) {
  const filtered = category === 'All'
    ? herbs
    : herbs.filter(h => h.category === category);
  renderHerbs(filtered);
}

// 🔳 Toggle View Button
toggleBtn.addEventListener('click', () => {
  isGridView = !isGridView;

  if (isGridView) {
    herbList.classList.remove('list-view');
    herbList.classList.add('grid-view');
    toggleBtn.textContent = '📃 List';
  } else {
    herbList.classList.remove('grid-view');
    herbList.classList.add('list-view');
    toggleBtn.textContent = '🔳 View';
  }
});

// 🌿 Load default (All Herbs)
renderHerbs(herbs);
