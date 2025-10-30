document.addEventListener("DOMContentLoaded", function () {
  const herbList = document.getElementById("herb-list");

  const herbs = [
    {
      name: "Lagundi",
      description: "Used for coughs, asthma, and fever.",
      preparation: "Boil leaves for 10 minutes and drink the decoction.",
      cautions: "Not recommended for pregnant women.",
      category: "Fever"
    },
    {
      name: "Sambong",
      description: "Helps with kidney stones and urinary problems.",
      preparation: "Boil leaves and drink as tea twice daily.",
      cautions: "Avoid excessive use for those with low blood pressure.",
      category: "Kidney"
    },
    {
      name: "Tanglad (Lemongrass)",
      description: "Relieves headaches and helps digestion.",
      preparation: "Boil stalks and drink the liquid as tea.",
      cautions: "Avoid if allergic to grass family plants.",
      category: "Headache"
    },
    {
      name: "Bayabas (Guava)",
      description: "Used for wounds and mouth infections.",
      preparation: "Boil leaves and use the decoction for washing wounds.",
      cautions: "External use only for wound washing.",
      category: "Wound"
    },
    {
      name: "Ampalaya (Bitter Gourd)",
      description: "Helps lower blood sugar levels.",
      preparation: "Boil or eat cooked leaves/fruit regularly.",
      cautions: "Avoid high doses for those taking diabetes medicine.",
      category: "Stomachache"
    }
  ];

  function renderHerbs(filter = "All") {
    herbList.innerHTML = "";

    herbs
      .filter((herb) => filter === "All" || herb.category === filter)
      .forEach((herb) => {
        const card = document.createElement("div");
        card.className = "herb-card";
        card.innerHTML = `
          <div class="herb-header">
            <h3>${herb.name}</h3>
          </div>
          <div class="herb-details">
            <p><strong>Description:</strong> ${herb.description}</p>
            <p><strong>Preparation:</strong> ${herb.preparation}</p>
            <p><strong>Cautions:</strong> ${herb.cautions}</p>
          </div>
        `;

        const details = card.querySelector(".herb-details");
        details.style.display = "none";

        card.querySelector(".herb-header").addEventListener("click", () => {
          details.style.display =
            details.style.display === "none" ? "block" : "none";
        });

        herbList.appendChild(card);
      });
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.textContent.trim();
      renderHerbs(category);
    });
  });

  renderHerbs("All");
});
