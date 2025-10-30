// 🌿 Herb data
const herbs = [
  {
    name: "Lagundi",
    purpose: "For cough, asthma, and fever",
    uses: "Traditionally used to relieve cough and asthma symptoms.",
    preparation: "Boil the leaves for 10–15 minutes and drink as tea twice daily.",
    cautions: "Avoid excessive use during pregnancy or if allergic to mint family plants.",
    category: "cough"
  },
  {
    name: "Sambong",
    purpose: "For kidney stones and hypertension",
    uses: "Acts as a natural diuretic and helps dissolve kidney stones.",
    preparation: "Boil the leaves for 15 minutes; drink the decoction once daily.",
    cautions: "Use moderately; consult a doctor if you have kidney issues.",
    category: "kidney"
  },
  {
    name: "Bayabas (Guava)",
    purpose: "For wounds and oral infections",
    uses: "Commonly used for washing wounds and gargling for mouth infections.",
    preparation: "Boil the leaves for 10 minutes; use the water to clean wounds or gargle.",
    cautions: "Do not drink excessively; may cause stomach upset in high doses.",
    category: "wound"
  },
  {
    name: "Tanglad (Lemongrass)",
    purpose: "For stomach pain and relaxation",
    uses: "Relieves stomach discomfort and helps reduce stress.",
    preparation: "Boil stalks and leaves; drink the tea warm after meals.",
    cautions: "Avoid large doses during pregnancy.",
    category: "stomach"
  },
  {
    name: "Ampalaya (Bitter Gourd)",
    purpose: "For diabetes and skin problems",
    uses: "Used to help lower blood sugar and treat skin rashes.",
    preparation: "Drink juice from fresh leaves or eat cooked fruit.",
    cautions: "Avoid if pregnant; may cause uterine contractions.",
    category: "diabetes"
  }
];

// 🌿 Display herbs
function displayHerbs(filteredCategory = "all") {
  const list = document.getElementById("herb-list");
  list.innerHTML = "";

  herbs.forEach((herb) => {
    if (filteredCategory === "all" || herb.category === filteredCategory) {
      const herbCard = document.createElement("div");
      herbCard.classList.add("herb-card");
      herbCard.innerHTML = `
        <h3>${herb.name}</h3>
        <p class="purpose">${herb.purpose}</p>
        <div class="details">
          <p><strong>Uses:</strong> ${herb.uses}</p>
          <p><strong>Preparation:</strong> ${herb.preparation}</p>
          <p><strong>Cautions:</strong> ${herb.cautions}</p>
        </div>
      `;

      // Toggle expand/collapse
      herbCard.addEventListener("click", () => {
        const details = herbCard.querySelector(".details");
        if (details.style.maxHeight && details.style.maxHeight !== "0px") {
          details.style.maxHeight = "0";
          details.style.padding = "0";
        } else {
          details.style.maxHeight = details.scrollHeight + "px";
          details.style.padding = "8px 0";
        }
      });

      list.appendChild(herbCard);
    }
  });
}

// 🌿 Category filtering
function setupFilters() {
  const buttons = document.querySelectorAll("#categories button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;
      displayHerbs(category);
    });
  });
}

// 🌿 Initialize
document.addEventListener("DOMContentLoaded", () => {
  displayHerbs();
  setupFilters();
});
