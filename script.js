// data
const herbs = [
  {
    name: "Lagundi",
    category: "Cough",
    description: "Boil 5–10 leaves for cough and asthma relief.",
    uses: "Cough, asthma",
    preparation: "Boil leaves; drink warm.",
    cautions: "Avoid excess during pregnancy."
  },
  {
    name: "Sambong",
    category: "Kidney",
    description: "Diuretic properties, used for kidney stones.",
    uses: "Kidney health",
    preparation: "Boil leaves; drink decoction.",
    cautions: "Ask doctor if on meds."
  },
  {
    name: "Tanglad (Lemongrass)",
    category: "Fever",
    description: "Reduces fever and aids digestion.",
    uses: "Fever, digestion",
    preparation: "Boil stalks; drink tea.",
    cautions: "Avoid if allergic."
  },
  {
    name: "Bayabas (Guava)",
    category: "Wound",
    description: "Antibacterial for wounds and mouth.",
    uses: "Wound wash, mouth rinse",
    preparation: "Boil leaves; use cooled water.",
    cautions: "External use for wounds."
  },
  {
    name: "Ampalaya (Bitter Gourd)",
    category: "Stomach Ache",
    description: "Used for digestion and blood sugar control.",
    uses: "Stomach, blood sugar",
    preparation: "Boil leaves or eat cooked fruit.",
    cautions: "Avoid during pregnancy."
  }
];

// state
let favorites = JSON.parse(localStorage.getItem("herbFavorites") || "[]");
let currentFilter = "all";
let isGrid = false;

// elements
const herbListEl = document.getElementById("herbList");
const filterBtns = document.querySelectorAll(".filter-btn");
const viewToggle = document.getElementById("viewToggle");
const cameraBtn = document.getElementById("cameraBtn");

// render
function render() {
  // set body class for grid/list
  document.body.classList.toggle("grid", isGrid);

  // filter herbs
  let list = herbs.slice();
  if (currentFilter === "favorites") {
    list = list.filter(h => favorites.includes(h.name));
  } else if (currentFilter !== "all") {
    list = list.filter(h => h.category.toLowerCase() === currentFilter.toLowerCase());
  }

  herbListEl.innerHTML = "";
  if (list.length === 0) {
    herbListEl.innerHTML = '<p style="text-align:center;color:#666;margin-top:20px">No herbs found.</p>';
    return;
  }

  list.forEach(h => {
    const card = document.createElement("div");
    card.className = "herb-card";

    // star button
    const star = document.createElement("button");
    star.className = "star-btn";
    if (favorites.includes(h.name)) star.classList.add("active");
    star.textContent = "★";
    star.title = favorites.includes(h.name) ? "Remove favorite" : "Add favorite";
    star.onclick = (e) => {
      e.stopPropagation();
      toggleFavorite(h.name);
    };

    // content
    card.innerHTML = `
      <h3>${h.name}</h3>
      <p><strong>Uses:</strong> ${h.uses || h.uses === "" ? h.uses : h.category}</p>
      <div class="herb-desc" style="display:none">
        <p><strong>Description:</strong> ${h.description}</p>
        <p><strong>Preparation:</strong> ${h.preparation}</p>
        <p><strong>Cautions:</strong> ${h.cautions}</p>
      </div>
    `;

    card.appendChild(star);
    // click to toggle details
    card.querySelector("h3").addEventListener("click", () => {
      const d = card.querySelector(".herb-desc");
      d.style.display = d.style.display === "block" ? "none" : "block";
    });

    herbListEl.appendChild(card);
  });
}

// toggle favorite
function toggleFavorite(name) {
  if (favorites.includes(name)) {
    favorites = favorites.filter(n => n !== name);
  } else {
    favorites.push(name);
  }
  localStorage.setItem("herbFavorites", JSON.stringify(favorites));
  // visual update
  render();
  // update favorites button highlight
  updateFavoritesIndicator();
}

// wire filters
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.getAttribute("data-filter");
    render();
  });
});

// view toggle
viewToggle.addEventListener("click", () => {
  isGrid = !isGrid;
  viewToggle.textContent = isGrid ? "🖼️ Grid" : "📋 View";
  render();
});

// camera placeholder
cameraBtn.addEventListener("click", () => {
  alert("Camera feature coming soon — will open camera or upload.");
});

// favorites indicator: turn favorites button gold if have favorites
function updateFavoritesIndicator() {
  const favBtn = document.querySelector('.filter-btn[data-filter="favorites"]');
  if (!favBtn) return;
  if (favorites.length > 0) {
    favBtn.style.background = "#ffd54f";
    favBtn.style.color = "#4e342e";
  } else {
    favBtn.style.background = "";
    favBtn.style.color = "";
  }
}

// initial render
updateFavoritesIndicator();
render();
