const herbs = [
  { name: "Lagundi", use: "Cough", description: "Treats cough and asthma." },
  { name: "Sambong", use: "Kidney", description: "Good for kidney and urinary tract." },
  { name: "Tanglad (Lemongrass)", use: "Fever", description: "Reduces fever and relieves pain." },
  { name: "Bayabas (Guava)", use: "Wound", description: "Cleans wounds and prevents infection." },
  { name: "Ampalaya (Bitter Gourd)", use: "Stomach Ache", description: "Helps digestion and blood sugar." },
];

let currentFilter = "all";
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let isListView = true;

const herbList = document.getElementById("herbList");
const viewToggle = document.getElementById("viewToggle");
const cameraButton = document.getElementById("cameraButton");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderHerbs() {
  herbList.innerHTML = "";

  const filteredHerbs = herbs.filter((herb) => {
    if (currentFilter === "all") return true;
    if (currentFilter === "favorites") return favorites.includes(herb.name);
    return herb.use.toLowerCase() === currentFilter.toLowerCase();
  });

  filteredHerbs.forEach((herb) => {
    const herbCard = document.createElement("div");
    herbCard.className = "herb-card";

    const star = document.createElement("span");
    star.classList.add("favorite-star");
    if (favorites.includes(herb.name)) star.classList.add("active");
    star.textContent = "★";
    star.onclick = () => toggleFavorite(herb.name, star);

    herbCard.innerHTML = `
      <h3>${herb.name}</h3>
      <p><strong>Use:</strong> ${herb.use}</p>
      <p>${herb.description}</p>
    `;

    herbCard.appendChild(star);
    herbList.appendChild(herbCard);
  });
}

function toggleFavorite(herbName, starElement) {
  const index = favorites.indexOf(herbName);
  if (index === -1) {
    favorites.push(herbName);
    starElement.classList.add("active");
  } else {
    favorites.splice(index, 1);
    starElement.classList.remove("active");
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.getAttribute("data-filter");
    renderHerbs();
  });
});

viewToggle.addEventListener("click", () => {
  isListView = !isListView;
  herbList.className = isListView ? "list-view" : "grid-view";
  viewToggle.textContent = isListView ? "📄 View" : "🖼️ View";
});

cameraButton.addEventListener("click", () => {
  alert("📷 Camera feature coming soon!");
});

renderHerbs();
