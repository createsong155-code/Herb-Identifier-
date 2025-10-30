const herbs = [
  {
    name: "Lagundi",
    category: "Cough",
    description: "Lagundi (Vitex negundo) is a traditional herbal medicine used to treat cough, asthma, and colds.",
    uses: "Relieves cough, asthma, and bronchial spasms.",
    preparation: "Boil 5 leaves in 2 cups of water for 10–15 minutes; drink 1 cup 3x a day.",
    cautions: "Avoid excessive use during pregnancy."
  },
  {
    name: "Sambong",
    category: "Kidney",
    description: "Sambong (Blumea balsamifera) is known for its diuretic properties.",
    uses: "Helps treat kidney stones and hypertension.",
    preparation: "Boil leaves and drink decoction twice a day.",
    cautions: "Consult a doctor for prolonged use."
  },
  {
    name: "Tanglad (Lemongrass)",
    category: "Fever",
    description: "Lemongrass is a common herb that reduces fever and aids digestion.",
    uses: "Used for fever, stomach discomfort, and as a calming tea.",
    preparation: "Boil chopped leaves; drink warm.",
    cautions: "Avoid if allergic to grass family."
  },
  {
    name: "Bayabas (Guava)",
    category: "Wound",
    description: "Guava leaves have antibacterial properties ideal for wound cleaning.",
    uses: "For mouth ulcers and wound washing.",
    preparation: "Boil leaves and use the cooled water for rinsing or cleaning wounds.",
    cautions: "For external use, avoid contact with eyes."
  },
  {
    name: "Ampalaya (Bitter Gourd)",
    category: "Stomach Ache",
    description: "Bitter gourd is used for diabetes and digestive issues.",
    uses: "Helps control blood sugar and ease stomach pain.",
    preparation: "Boil the leaves or fruit; drink once or twice daily.",
    cautions: "Avoid during pregnancy and breastfeeding."
  }
];

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let currentCategory = "all";

const herbList = document.getElementById("herb-list");
const categoryButtons = document.querySelectorAll(".category");
const viewToggle = document.getElementById("viewToggle");

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
    const isFav = favorites.includes(h.name);

    card.innerHTML = `
      <h3>${h.name}</h3>
      <button class="star-btn ${isFav ? "favorited" : ""}" data-herb="${h.name}">★</button>
      <div class="herb-details">
        <p><strong>Description:</strong> ${h.description}</p>
        <p><strong>Uses:</strong> ${h.uses}</p>
        <p><strong>Preparation:</strong> ${h.preparation}</p>
        <p><strong>Cautions:</strong> ${h.cautions}</p>
      </div>
    `;
    herbList.appendChild(card);
  });

  // Toggle details
  document.querySelectorAll(".herb-card h3").forEach(title => {
    title.addEventListener("click", () => {
      const details = title.nextElementSibling.nextElementSibling;
      details.style.display = details.style.display === "block" ? "none" : "block";
    });
  });

  // Toggle favorites
  document.querySelectorAll(".star-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
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

displayHerbs();

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentCategory = btn.dataset.category;
    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    displayHerbs();
  });
});

viewToggle.addEventListener("click", () => {
  document.body.classList.toggle("grid");
});
