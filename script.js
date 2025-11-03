// 🌿 Herb Identifier App (A–C Herbs Data + Logic)
// -----------------------------------------------
// This file controls the herb list display, favorites system, and view toggle.
// Data covers herbs from A to C, each with detailed information.

// 🪴 1. HERB DATA
const herbs = [
  {
    name: "Abang-abang – Bloodleaf / Joseph’s Coat",
    description:
      "A colorful plant with red, purple, and green leaves, grown in home gardens for its healing properties. Traditionally believed to strengthen the blood, stop bleeding, and ease cough.",
    purpose: "Used to stop bleeding, treat wounds, and relieve cough.",
    preparation:
      "1. Fresh Poultice: Crush leaves and apply directly to wounds.\n2. Decoction for Cough: Boil a handful of leaves in 2 cups water for 10 minutes; drink half a cup twice daily.",
    whenToApply: "For wounds, cough, or blood nourishment.",
    cautions:
      "Avoid internal use during pregnancy. May cause mild stomach upset in sensitive individuals."
  },
  {
    name: "Abtik-abtik – Speedwell",
    description:
      "A low-growing herb with tiny blue flowers, often used for cough and skin irritation. Known for its cooling and anti-inflammatory effect.",
    purpose: "For cough, skin rashes, and sore throat.",
    preparation:
      "1. Tea: Steep 1 tsp dried leaves in hot water for 5–7 mins; drink warm.\n2. Skin Wash: Boil leaves, cool, and wash affected skin.",
    whenToApply: "For mild cough, rashes, or throat irritation.",
    cautions: "Avoid if allergic to similar herbs."
  },
  {
    name: "Abubot – Sensitive Plant (Mimosa pudica)",
    description:
      "A small, touch-sensitive plant used as a calming herb. Its leaves and roots are known for their soothing and cooling effects.",
    purpose: "For insomnia, wounds, and urinary issues.",
    preparation:
      "1. Sleep Tea: Boil roots in water for 15 minutes; drink before bed.\n2. Poultice: Crush leaves and apply to wounds.",
    whenToApply: "For sleeplessness, minor wounds, or urinary discomfort.",
    cautions: "Avoid during pregnancy; may lower blood pressure."
  },
  {
    name: "Akapulko / Sibukaw – Ringworm Bush (Senna alata)",
    description:
      "A tall shrub with yellow flowers, widely used to treat fungal infections like ringworm and scabies. Acts as a natural antifungal remedy.",
    purpose: "For fungal skin infections and itchiness.",
    preparation:
      "1. Leaf Rub: Rub crushed fresh leaves on affected area twice daily.\n2. Ointment: Mix crushed leaves with coconut oil.\n3. Decoction: Boil leaves and use as skin wash.",
    whenToApply: "For ringworm, scabies, or itchy skin.",
    cautions: "External use only; ingestion may cause stomach upset."
  },
  {
    name: "Alugbati – Malabar Spinach",
    description:
      "A vine vegetable rich in vitamins and iron. Used to cool the body, ease constipation, and promote healthy skin.",
    purpose: "For constipation, skin health, and cooling the body.",
    preparation:
      "1. As Food: Cook leaves in soups or sautéed dishes.\n2. Tea: Boil leaves, strain, and drink for cooling effect.",
    whenToApply: "For heatiness, constipation, or skin rashes.",
    cautions: "Overeating may cause loose stools."
  },
  {
    name: "Ampalaya – Bitter Gourd",
    description:
      "A climbing vine with bitter-tasting fruit used to purify the blood and control blood sugar levels. A common medicinal vegetable in Filipino homes.",
    purpose: "For diabetes, digestion, and immunity.",
    preparation:
      "1. Tea: Boil sliced leaves/fruit for 10 mins; drink half cup twice daily.\n2. Juice: Blend leaves with water, drink small amounts.",
    whenToApply: "For high blood sugar or digestive imbalance.",
    cautions: "Avoid excessive intake during pregnancy; may lower blood sugar."
  },
  {
    name: "Anis – Anise",
    description:
      "A fragrant seed used for both food and medicine, known to relieve gas, soothe cough, and freshen the breath.",
    purpose: "For bloating, cough, and bad breath.",
    preparation:
      "1. Tea: Boil 1 tsp seeds in 1 cup water for 5 mins; drink warm.\n2. Chew seeds after meals for digestion.",
    whenToApply: "After meals or when coughing.",
    cautions: "Avoid if allergic to celery or carrot family plants."
  },
  {
    name: "Anonas – Custard Apple",
    description:
      "A fruit tree with medicinal bark and leaves. Traditionally used for diarrhea and wound care.",
    purpose: "For diarrhea, dysentery, and wounds.",
    preparation:
      "1. Diarrhea Remedy: Boil bark, drink small sips.\n2. Poultice: Crush leaves and apply to skin wounds.",
    whenToApply: "For diarrhea or skin injuries.",
    cautions: "Overuse may cause constipation."
  },
  {
    name: "Atis – Sugar Apple",
    description:
      "A sweet fruit-bearing tree with medicinal leaves and seeds. Used for fever baths and lice treatment.",
    purpose: "For fever and head lice.",
    preparation:
      "1. Fever Bath: Boil leaves in water and use for sponge bath.\n2. Lice Remedy: Mix crushed seeds with coconut oil, apply for 30 mins then rinse.",
    whenToApply: "During fever or lice infestation.",
    cautions: "Seeds are toxic if swallowed."
  },
  {
    name: "Balbas Pusa – Cat’s Whiskers",
    description:
      "A herb known for cleansing the kidneys and lowering blood pressure. Commonly used as tea for urinary health.",
    purpose: "For kidney stones, UTI, and high blood pressure.",
    preparation:
      "1. Tea: Boil leaves in water for 15 mins; drink twice daily.\n2. Use regularly for cleansing effect.",
    whenToApply: "For urinary issues or mild hypertension.",
    cautions: "Avoid long-term use; may lower blood pressure too much."
  },
  {
    name: "Banaba – Giant Crape Myrtle",
    description:
      "A tree with purple flowers, known for lowering blood sugar and aiding weight loss.",
    purpose: "For diabetes, weight management, and kidney health.",
    preparation:
      "Boil dried leaves for 10 minutes; drink 1 cup twice daily.",
    whenToApply: "For high blood sugar or detox.",
    cautions: "May enhance anti-diabetic drugs."
  },
  {
    name: "Bawang – Garlic",
    description:
      "A healing kitchen staple that strengthens the heart, lowers blood pressure, and fights infections.",
    purpose: "For hypertension, colds, and immunity.",
    preparation:
      "1. Eat 1–2 raw cloves daily.\n2. Warm in coconut oil for ear drops.\n3. Include in cooking daily.",
    whenToApply: "For colds, infections, or high BP.",
    cautions: "May irritate stomach; avoid excess before surgery."
  },
  {
    name: "Bayabas – Guava",
    description:
      "A well-known herbal plant used to cleanse wounds, treat diarrhea, and maintain oral health.",
    purpose: "For diarrhea, wounds, and mouth sores.",
    preparation:
      "1. Boil leaves and drink tea twice daily.\n2. Use decoction for wound washing or gargling.",
    whenToApply: "For diarrhea, wounds, or oral care.",
    cautions: "Avoid excessive internal use; may cause constipation."
  },
  {
    name: "Caimito – Star Apple",
    description:
      "A tropical fruit tree whose leaves and bark are used for diabetes, diarrhea, and skin irritation.",
    purpose: "For diabetes, diarrhea, and skin irritation.",
    preparation:
      "Boil 5–7 fresh leaves in 2 cups water; drink 1 cup twice daily.",
    whenToApply: "For high blood sugar or loose bowel.",
    cautions: "Avoid excessive use during pregnancy."
  },
  {
    name: "Calamansi – Philippine Lime",
    description:
      "A citrus fruit rich in vitamin C, used to soothe cough, fever, and brighten skin.",
    purpose: "For cough, sore throat, fever, and skin care.",
    preparation:
      "1. Mix juice with honey; take 1 tbsp twice daily.\n2. Apply diluted juice to dark spots.",
    whenToApply: "For cough, sore throat, or fever.",
    cautions:
      "Acidic; avoid in people with ulcers or sensitive skin."
  },
  {
    name: "Camote Tops – Sweet Potato Leaves",
    description:
      "A nutritious vegetable for blood and recovery support, commonly used during dengue recovery.",
    purpose: "For dengue, anemia, and constipation.",
    preparation:
      "1. Boil leaves for 15–20 mins; drink decoction.\n2. Eat steamed leaves regularly.",
    whenToApply: "For weakness or low platelet count.",
    cautions: "Safe as food; excess may cause diarrhea."
  },
  {
    name: "Carrot – Lugas",
    description:
      "A vitamin-rich root used for vision, digestion, and wound healing.",
    purpose: "For eyesight, wounds, and digestion.",
    preparation:
      "1. Eat raw or steamed.\n2. Drink carrot juice for constipation.",
    whenToApply: "Daily for eye and digestive health.",
    cautions:
      "Too much may turn skin yellow-orange temporarily."
  },
  {
    name: "Cucumber – Pipino",
    description:
      "A hydrating vegetable for cooling and soothing the body, often used for skin care and blood pressure.",
    purpose: "For skin cooling, high BP, and puffiness.",
    preparation:
      "1. Apply slices to skin or eyes.\n2. Drink cucumber juice daily.",
    whenToApply: "For tired eyes or hot weather.",
    cautions: "Avoid excess juice if you have kidney issues."
  }
];

// 🧡 2. FAVORITES SYSTEM
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let currentCategory = "all";

// 🔗 3. DOM ELEMENTS
const herbList = document.getElementById("herb-list");
const categoryButtons = document.querySelectorAll(".category");
const viewToggle = document.getElementById("viewToggle");

// 🌱 4. DISPLAY HERBS FUNCTION
function displayHerbs() {
  herbList.innerHTML = "";
  let filtered = herbs;

  if (currentCategory === "Favorites") {
    filtered = herbs.filter(h => favorites.includes(h.name));
  }

  if (filtered.length === 0) {
    herbList.innerHTML = "<p>No herbs found.</p>";
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
        <p><strong>Purpose:</strong> ${h.purpose}</p>
        <p><strong>Preparation:</strong> ${h.preparation}</p>
        <p><strong>When to Apply:</strong> ${h.whenToApply}</p>
        <p><strong>Cautions:</strong> ${h.cautions}</p>
      </div>
    `;

    herbList.appendChild(card);
  });

  // 🌿 Toggle detail visibility
  document.querySelectorAll(".herb-card h3").forEach(title => {
    title.addEventListener("click", () => {
      const details = title.parentElement.querySelector(".herb-details");
      details.style.display = details.style.display === "block" ? "none" : "block";
    });
  });

  // ⭐ Favorite button logic
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

// 🌸 5. INITIALIZE DISPLAY
displayHerbs();

// 📂 6. CATEGORY FILTER BUTTONS
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentCategory = btn.dataset.category;
    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    displayHerbs();
  });
});

// 🖼️ 7. VIEW TOGGLE (List/Grid)
viewToggle.addEventListener("click", () => {
  document.body.classList.toggle("grid");
});
