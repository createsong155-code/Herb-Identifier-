const herbs = [
  {
    name: "Lagundi",
    description: "Relieves cough, asthma, and fever.",
    uses: "For cough, asthma, and fever relief.",
    preparation: "Boil leaves and drink as tea 3x daily.",
    caution: "Avoid excessive intake during pregnancy.",
    category: "Cough"
  },
  {
    name: "Sambong",
    description: "Aids kidney function and helps with wounds.",
    uses: "Used for kidney stones and wound cleansing.",
    preparation: "Boil leaves and drink as tea.",
    caution: "Consult doctor if taking other diuretics.",
    category: "Kidney"
  },
  {
    name: "Tanglad (Lemongrass)",
    description: "Aids digestion and relieves stomach discomfort.",
    uses: "Helps with bloating and gas.",
    preparation: "Boil 1 stalk in 2 cups of water, drink as tea.",
    caution: "Avoid if you have low blood pressure.",
    category: "Stomach Ache"
  },
  {
    name: "Bayabas (Guava)",
    description: "Heals wounds and helps diarrhea.",
    uses: "Use as wound wash or drink decoction for diarrhea.",
    preparation: "Boil leaves for 15 minutes; use when cool.",
    caution: "Do not use on deep wounds without cleaning.",
    category: "Wound"
  },
  {
    name: "Ampalaya (Bitter Gourd)",
    description: "Helps regulate blood sugar and cleanses body.",
    uses: "Used for diabetes and as tonic vegetable.",
    preparation: "Boil leaves or eat as cooked vegetable.",
    caution: "Avoid during pregnancy due to possible side effects.",
    category: "Fever"
  }
];

const herbList = document.getElementById("herb-list");
const viewToggle = document.getElementById("viewToggle");
const cameraBtn = document.getElementById("cameraBtn");
let gridMode = false;

// Display herbs
function displayHerbs(filter = "All") {
  herbList.innerHTML = "";
  const filtered = filter === "All" ? herbs : herbs.filter(h => h.category === filter);
  herbList.className = gridMode ? "grid-view" : "";

  filtered.forEach(herb => {
    const card = document.createElement("li");
    card.className = "herb-card";
    card.innerHTML = `
      <h3>${herb.name}</h3>
      ${!gridMode ? `
      <p><strong>Description:</strong> ${herb.description}</p>
      <p><strong>Uses:</strong> ${herb.uses}</p>
      <p><strong>Preparation:</strong> ${herb.preparation}</p>
      <p><strong>Caution:</strong> ${herb.caution}</p>` : ""}
    `;
    herbList.appendChild(card);
  });
}

// Filter buttons
document.querySelectorAll("#categories button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#categories button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    displayHerbs(btn.textContent);
  });
});

// View toggle (List/Grid)
viewToggle.addEventListener("click", () => {
  gridMode = !gridMode;
  viewToggle.textContent = gridMode ? "📋 List" : "🔳 View";
  displayHerbs(document.querySelector("#categories .active").textContent);
});

// Camera button (future use)
cameraBtn.addEventListener("click", () => {
  alert("📸 Camera feature coming soon!");
});

displayHerbs();
