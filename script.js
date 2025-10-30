// Herb data
const herbs = [
  { name: "Lagundi", use: "Cough", description: "Treats cough and asthma." },
  { name: "Sambong", use: "Kidney", description: "Good for kidney and urinary tract." },
  { name: "Tanglad (Lemongrass)", use: "Fever", description: "Reduces fever and relieves pain." },
  { name: "Bayabas (Guava)", use: "Wound", description: "Cleans wounds and prevents infection." },
  { name: "Ampalaya (Bitter Gourd)", use: "Stomach Ache", description: "Helps digestion and blood sugar." }
];

let currentCategory = "All";
let viewMode = "list";
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

const herbList = document.getElementById("herbList");
const filterButtons = document.querySelectorAll(".filter-btn");
const favoritesBtn = document.getElementById("favoritesBtn");
const viewToggle = document.getElementById("viewToggle");

function renderHerbs() {
  herbList.innerHTML = "";

  let filteredHerbs = [];
  if (currentCategory === "Favorites") {
    filteredHerbs = herbs.filter(h => favorites.includes(h.name));
  } else if (currentCategory === "All") {
    filteredHerbs = herbs;
  } else {
    filteredHerbs = herbs.filter(h => h.use === currentCategory);
  }

  herbList.className = viewMode === "grid" ? "grid-view" : "list-view";

  filteredHerbs.forEach(herb => {
    const card = document.createElement("div");
    card.classList.add("herb-card");

    const info = document.createElement("div");
    info.innerHTML = `<h3>${herb.name}</h3>
      <p><b>Use:</b> ${herb.use}</p>
      <p>${herb.description}</p>`;

    const favoriteButton = document.createElement("button");
    favoriteButton.classList.add("favorite-btn");
    favoriteButton.innerHTML = favorites.includes(herb.name) ? "⭐" : "☆";
    if (favorites.includes(herb.name)) favoriteButton.classList.add("favorited");

    favoriteButton.addEventListener("click", () => {
      toggleFavorite(herb.name);
      favoriteButton.innerHTML = favorites.includes(herb.name) ? "⭐" : "☆";
      favoriteButton.classList.toggle("favorited");
    });

    card.appendChild(info);
    card.appendChild(favoriteButton);
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
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    renderHerbs();
  });
});

favoritesBtn.addEventListener("click", () => {
  filterButtons.forEach(b => b.classList.remove("active"));
  favoritesBtn.classList.add("active");
  currentCategory = "Favorites";
  renderHerbs();
});

viewToggle.addEventListener("click", () => {
  viewMode = viewMode === "list" ? "grid" : "list";
  renderHerbs();
});

renderHerbs();
