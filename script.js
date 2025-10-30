const herbs = [
  { name: "Lagundi", category: "Cough" },
  { name: "Sambong", category: "Kidney" },
  { name: "Tanglad (Lemongrass)", category: "Fever" },
  { name: "Bayabas (Guava)", category: "Wound" },
  { name: "Ampalaya (Bitter Gourd)", category: "Stomach Ache" }
];

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let currentCategory = "all";

const herbList = document.getElementById("herb-list");
const categoryButtons = document.querySelectorAll(".category");
const viewToggle = document.getElementById("viewToggle");

// Function: display herbs
function displayHerbs() {
  herbList.innerHTML = "";

  let filtered = herbs.filter(h =>
    currentCategory === "all"
      ? true
      : currentCategory === "Favorites"
      ? favorites.includes(h.name)
      : h.category === currentCategory
  );

  if (filtered.length === 0) {
    herbList.innerHTML = `<p>No herbs found.</p>`;
    return;
  }

  filtered.forEach(h => {
    const card = document.createElement("div");
    card.className = "herb-card";
    card.innerHTML = `
      <h3>${h.name}</h3>
      <p><strong>Category:</strong> ${h.category}</p>
      <button class="star-btn ${favorites.includes(h.name) ? "favorited" : ""}" data-herb="${h.name}">⭐</button>
    `;
    herbList.appendChild(card);
  });

  // Add star button functionality
  document.querySelectorAll(".star-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const herbName = e.target.dataset.herb;
      if (favorites.includes(herbName)) {
        favorites = favorites.filter(f => f !== herbName);
      } else {
        favorites.push(herbName);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
      displayHerbs();
    });
  });
}

// Initial load
displayHerbs();

// Category selection
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentCategory = btn.dataset.category;
    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    displayHerbs();
  });
});

// View toggle
viewToggle.addEventListener("click", () => {
  document.body.classList.toggle("grid");
});
