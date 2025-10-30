const herbs = [
  {
    name: "Lagundi",
    category: ["cough", "fever"],
    uses: "Helps relieve cough, asthma, and fever.",
    preparation: "Boil leaves for 10–15 minutes; drink twice a day.",
    cautions: "Not for pregnant women or young children without doctor's advice."
  },
  {
    name: "Sambong",
    category: ["kidney"],
    uses: "Acts as a diuretic and helps dissolve kidney stones.",
    preparation: "Boil leaves; drink 1 cup morning and evening.",
    cautions: "Avoid excessive use; may affect people with low blood pressure."
  },
  {
    name: "Tanglad (Lemongrass)",
    category: ["stomach"],
    uses: "Eases stomach pain, colds, and high blood pressure.",
    preparation: "Boil stalks in water; drink as tea.",
    cautions: "Avoid overuse if pregnant or nursing."
  },
  {
    name: "Bayabas (Guava)",
    category: ["wound", "stomach"],
    uses: "Disinfects wounds and aids digestion.",
    preparation: "Boil leaves for washing wounds or drinking as tea.",
    cautions: "Avoid long-term heavy use."
  },
  {
    name: "Ampalaya (Bitter Gourd)",
    category: ["diabetes", "stomach"],
    uses: "Lowers blood sugar and improves digestion.",
    preparation: "Boil leaves or eat as vegetable.",
    cautions: "Avoid during pregnancy."
  }
];

const herbList = document.getElementById("herb-list");
const viewToggle = document.getElementById("viewToggle");
const cameraBtn = document.getElementById("cameraBtn");

let currentView = "list"; // 'list' or 'grid'

// Render herbs
function renderHerbs(filter = "all") {
  herbList.innerHTML = "";
  const filteredHerbs = herbs.filter(
    (herb) => filter === "all" || herb.category.includes(filter)
  );

  filteredHerbs.forEach((herb) => {
    const card = document.createElement("div");
    card.classList.add("herb-card");

    card.innerHTML = `
      <h3>${herb.name}</h3>
      <div class="herb-details">
        <p><strong>Uses:</strong> ${herb.uses}</p>
        <p><strong>Preparation:</strong> ${herb.preparation}</p>
        <p><strong>Cautions:</strong> ${herb.cautions}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });

    herbList.appendChild(card);
  });
}

// Category filter
document.querySelectorAll("#categories button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-category");
    renderHerbs(filter);
  });
});

// View toggle
viewToggle.addEventListener("click", () => {
  if (currentView === "list") {
    herbList.classList.remove("list-view");
    herbList.classList.add("grid-view");
    viewToggle.textContent = "📃 List";
    currentView = "grid";
  } else {
    herbList.classList.remove("grid-view");
    herbList.classList.add("list-view");
    viewToggle.textContent = "🔳 View";
    currentView = "list";
  }
});

// Camera button (temporary)
cameraBtn.addEventListener("click", () => {
  alert("📷 Herb identification feature coming soon!");
});

// Initial render
renderHerbs();
