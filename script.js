const herbs = [
  {
    name: "Lagundi",
    description: "A traditional herb for coughs and respiratory problems.",
    uses: "Relieves cough, asthma, and fever.",
    preparations: "Boil leaves and drink as tea 2–3 times daily.",
    cautions: "Avoid excessive intake; consult if pregnant.",
    category: "cough",
    image: "https://via.placeholder.com/150?text=Lagundi"
  },
  {
    name: "Sambong",
    description: "Used as a diuretic and kidney cleanser.",
    uses: "For kidney stones and high blood pressure.",
    preparations: "Boil leaves and drink as tea.",
    cautions: "Not for long-term use.",
    category: "kidney",
    image: "https://via.placeholder.com/150?text=Sambong"
  }
];

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let currentView = "list";
let currentFilter = "all";
let showingFavorites = false;

const herbList = document.getElementById("herb-list");
const filterButtons = document.querySelectorAll(".filter-btn");
const viewToggle = document.getElementById("view-toggle");
const favoritesBtn = document.getElementById("favorites-btn");

function displayHerbs() {
  herbList.innerHTML = "";
  let filtered = herbs.filter(h =>
    (currentFilter === "all" || h.category === currentFilter) &&
    (!showingFavorites || favorites.includes(h.name))
  );

  herbList.classList.toggle("grid-view", currentView === "grid");

  filtered.forEach(herb => {
    const card = document.createElement("div");
    card.classList.add("herb-card");

    const isFav = favorites.includes(herb.name);
    const star = `<span class="herb-favorite ${isFav ? 'active' : ''}" data-name="${herb.name}">★</span>`;

    if (currentView === "list") {
      card.innerHTML = `
        <div class="herb-header">
          <h3>${herb.name}</h3>
          ${star}
        </div>
        <div class="herb-details">
          <p><b>Description:</b> ${herb.description}</p>
          <p><b>Uses:</b> ${herb.uses}</p>
          <p><b>Preparations:</b> ${herb.preparations}</p>
          <p><b>Cautions:</b> ${herb.cautions}</p>
        </div>
      `;
      card.addEventListener("click", e => {
        if (e.target.classList.contains("herb-favorite")) return;
        card.classList.toggle("expanded");
      });
    } else {
      card.innerHTML = `
        <img class="herb-image" src="${herb.image}" alt="${herb.name}">
        <h3>${herb.name}</h3>
        ${star}
      `;
    }

    card.querySelector(".herb-favorite").addEventListener("click", e => {
      e.stopPropagation();
      toggleFavorite(herb.name);
    });

    herbList.appendChild(card);
  });
}

function toggleFavorite(name) {
  if (favorites.includes(name)) {
    favorites = favorites.filter(f => f !== name);
  } else {
    favorites.push(name);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  displayHerbs();
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    showingFavorites = false;
    displayHerbs();
  });
});

viewToggle.addEventListener("click", () => {
  currentView = currentView === "list" ? "grid" : "list";
  displayHerbs();
});

favoritesBtn.addEventListener("click", () => {
  showingFavorites = !showingFavorites;
  displayHerbs();
});

displayHerbs();
