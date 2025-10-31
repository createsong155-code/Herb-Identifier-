const herbs = [
  {
    name: "Abang-abang – Bloodleaf / Joseph’s Coat",
    description: "A colorful plant with deep red, purple, and green leaves. Traditionally used to cleanse and strengthen the blood, stop bleeding, and ease mild cough.",
    purpose: "Stops bleeding, treats wounds, and eases cough. Believed to boost blood health.",
    preparation: "1. Fresh Poultice: Crush fresh leaves and apply directly to cuts.\n2. Decoction for Cough: Boil a handful of leaves in 2 cups of water for 10 minutes; drink half a cup twice daily.",
    whenToApply: "For minor wounds, cough, or blood nourishment.",
    cautions: "Avoid internal use during pregnancy. May cause mild stomach upset in sensitive individuals."
  },
  {
    name: "Abtik-abtik – Speedwell",
    description: "A low-growing herb with small blue flowers found in moist soil. Used in village remedies for cough, skin rashes, and throat irritation.",
    purpose: "For cough, mild skin rashes, and sore throat.",
    preparation: "1. Tea: Steep 1 tsp dried leaves in hot water for 5–7 minutes.\n2. Leaf Wash: Boil leaves in water, cool, and use to wash affected areas.",
    whenToApply: "For mild cough, skin irritation, or throat discomfort.",
    cautions: "Avoid if allergic to similar wild herbs."
  },
  {
    name: "Abubot – Sensitive Plant (Mimosa pudica)",
    description: "Known as the 'touch-me-not' plant for its folding leaves. Used for calming nerves, aiding sleep, and healing small wounds.",
    purpose: "Used for insomnia, wounds, and urinary tract issues.",
    preparation: "1. Sleep Tea: Boil roots for 15 minutes; drink before bed.\n2. Poultice: Crush leaves and apply on wounds.",
    whenToApply: "For sleeplessness, wounds, or mild UTI.",
    cautions: "Avoid during pregnancy. May lower blood pressure."
  },
  {
    name: "Akapulko / Sibukaw – Ringworm Bush (Senna alata)",
    description: "A tall shrub with bright yellow flowers. Its leaves are well-known for treating skin fungal infections such as ringworm and scabies.",
    purpose: "Treats ringworm, scabies, and other skin infections.",
    preparation: "1. Leaf Rub: Crush leaves and rub on affected skin twice daily.\n2. Herbal Ointment: Mix crushed leaves with coconut oil; apply on infected area.",
    whenToApply: "For fungal infections and scabies.",
    cautions: "External use only; do not ingest."
  },
  {
    name: "Alugbati – Malabar Spinach",
    description: "A climbing vine with thick, glossy green leaves. Commonly eaten as food and used as a cooling and cleansing herb.",
    purpose: "Relieves constipation, cools the body, and improves skin health.",
    preparation: "1. Eat boiled leaves with meals.\n2. Make soup with leaves for a cooling effect.\n3. Drink boiled leaf decoction for internal cleansing.",
    whenToApply: "For constipation, body heat, or skin care.",
    cautions: "May cause loose stools if overeaten."
  },
  {
    name: "Ampalaya – Bitter Gourd",
    description: "A climbing vine with bitter fruits, widely used to control blood sugar and purify the body.",
    purpose: "For diabetes, digestion improvement, and immunity boost.",
    preparation: "1. Diabetes Tea: Boil sliced leaves or fruit in water for 10 minutes.\n2. Food Use: Stir-fry or add to soups.\n3. Juice: Blend leaves with water; drink small amounts.",
    whenToApply: "For high blood sugar, poor digestion, or low immunity.",
    cautions: "Avoid excessive intake during pregnancy; may lower blood sugar."
  },
  {
    name: "Anis – Anise",
    description: "A fragrant seed used as both food and medicine to ease gas, soothe cough, and freshen the breath.",
    purpose: "For stomach gas, cough, and bad breath.",
    preparation: "1. Anise Tea: Boil 1 tsp seeds in 1 cup water for 5 minutes.\n2. Mouth Freshener: Chew seeds after meals.",
    whenToApply: "For indigestion, cough, or bad breath.",
    cautions: "Avoid if allergic to carrot or celery family plants."
  },
  {
    name: "Anonas – Custard Apple",
    description: "A small tropical tree with sweet fruit. Its bark and leaves are used to treat diarrhea and wounds.",
    purpose: "For diarrhea, dysentery, and wound healing.",
    preparation: "1. Diarrhea Remedy: Boil bark in water; drink small sips.\n2. Poultice: Crush leaves and apply to wounds.",
    whenToApply: "For diarrhea or skin injuries.",
    cautions: "May cause constipation if overused."
  },
  {
    name: "Atis – Sugar Apple",
    description: "A fruit-bearing tree with creamy sweet flesh. Leaves and seeds are used for fever and lice treatment.",
    purpose: "For dysentery, fever, and head lice.",
    preparation: "1. Fever Relief: Boil leaves for sponge bath.\n2. Anti-Lice: Mix crushed seeds with coconut oil; apply to scalp for 30 mins then rinse.",
    whenToApply: "For fever or lice.",
    cautions: "Seeds are toxic if swallowed."
  },
  {
    name: "Balbas Pusa – Cat’s Whiskers",
    description: "An herb with long white flowers like cat whiskers. Helps cleanse the kidneys and lower blood pressure.",
    purpose: "For kidney stones, urinary infections, and mild hypertension.",
    preparation: "1. Tea: Boil leaves for 15 minutes; drink twice daily.\n2. Regular Tea: Drink moderately for blood pressure support.",
    whenToApply: "For urinary or kidney problems.",
    cautions: "Avoid long-term use; may lower blood pressure too much."
  },
  {
    name: "Banaba – Giant Crape Myrtle",
    description: "A tall tree with purple flowers, known for lowering blood sugar and aiding weight control.",
    purpose: "For diabetes, weight loss, and kidney cleansing.",
    preparation: "1. Tea: Boil dried leaves for 10 minutes; drink twice daily.\n2. Regular Tea: Drink daily for metabolism support.",
    whenToApply: "For high blood sugar or weight management.",
    cautions: "May enhance diabetic medicine effects."
  },
  {
    name: "Bawang – Garlic",
    description: "A staple household remedy used for heart health, infection prevention, and immune support.",
    purpose: "For high blood pressure, colds, and infection prevention.",
    preparation: "1. Eat 1–2 raw cloves daily.\n2. Garlic Oil: Warm in coconut oil; use drops for earache.\n3. Include in daily cooking.",
    whenToApply: "For hypertension, colds, or infections.",
    cautions: "May irritate stomach; avoid excess before surgery."
  },
  {
    name: "Bayabas – Guava",
    description: "A powerful antiseptic leaf used for cleansing wounds, treating diarrhea, and maintaining oral health.",
    purpose: "For diarrhea, wound washing, and oral hygiene.",
    preparation: "1. Tea: Boil leaves and drink twice daily.\n2. Wound Wash: Use cooled boiled leaves.\n3. Mouthwash: Gargle decoction for gum health.",
    whenToApply: "For wounds, diarrhea, or mouth sores.",
    cautions: "May cause constipation if overused."
  },
  {
    name: "Caimito – Star Apple",
    description: "A tropical fruit tree with sweet, milky flesh. Its leaves and bark are used for diabetes and diarrhea.",
    purpose: "For diabetes, diarrhea, and skin irritation.",
    preparation: "1. Diabetes: Boil 5–7 leaves; drink twice daily.\n2. Diarrhea: Boil bark and leaves; drink 2–3 times daily.\n3. Skin: Crush fresh leaves and apply as poultice.",
    whenToApply: "For blood sugar, diarrhea, or rashes.",
    cautions: "Avoid excessive use; may cause constipation."
  },
  {
    name: "Calamansi – Philippine Lime",
    description: "A citrus fruit rich in vitamin C used for cough, sore throat, and skin brightening.",
    purpose: "For cough, fever, sore throat, and skin whitening.",
    preparation: "1. Cough: Mix juice with honey; take 1 tbsp 2–3 times daily.\n2. Skin: Apply diluted juice for 5–10 mins before rinsing.\n3. Fever: Drink juice mixed with warm water.",
    whenToApply: "For cough, fever, or skin discoloration.",
    cautions: "May irritate stomach; avoid on open wounds."
  },
  {
    name: "Camote Tops – Sweet Potato Leaves",
    description: "Nutritious leafy vegetable used to promote recovery, improve blood health, and relieve constipation.",
    purpose: "For dengue recovery, anemia, and constipation.",
    preparation: "1. Dengue: Boil leaves 15–20 mins; drink decoction.\n2. Anemia: Eat steamed leaves daily.\n3. Constipation: Eat blanched leaves.",
    whenToApply: "For weakness, low blood count, or constipation.",
    cautions: "Safe as food; excessive decoction may cause diarrhea."
  },
  {
    name: "Camphor Tree – Tagulamos (Kapur / Laurus camphora)",
    description: "An aromatic evergreen tree used for relieving body pain and clearing nasal congestion.",
    purpose: "For muscle pain, cough, and congestion.",
    preparation: "1. Muscle Pain: Mix camphor oil with coconut oil; massage area.\n2. Cough: Inhale steam with 2–3 drops camphor oil.",
    whenToApply: "For body ache or colds.",
    cautions: "Do not ingest; toxic in large amounts."
  },
  {
    name: "Carrot – Lugas",
    description: "A root vegetable rich in vitamins and beta-carotene, great for eyesight and digestion.",
    purpose: "For vision, wound healing, and constipation.",
    preparation: "1. Eat raw or lightly steamed.\n2. Apply grated carrot on wounds.\n3. Drink juice in morning.",
    whenToApply: "For eye health or digestion.",
    cautions: "Too much may cause skin yellowing."
  },
  {
    name: "Cassava – Kamoteng Kahoy",
    description: "A starchy root crop and leafy plant used for energy and skin healing.",
    purpose: "For fatigue and skin irritation.",
    preparation: "1. Fatigue: Boil young leaves for 20 mins; eat cooked.\n2. Skin: Apply mashed boiled leaves on affected area.",
    whenToApply: "For tiredness or irritation.",
    cautions: "Raw cassava is toxic; always cook well."
  },
  {
    name: "Catmon – Dillenia philippinensis",
    description: "A native fruit tree with sour fruits and medicinal bark used for cough and mouth sores.",
    purpose: "For cough and mouth inflammation.",
    preparation: "1. Cough: Boil bark and leaves; drink twice daily.\n2. Mouth Sores: Gargle cooled decoction.",
    whenToApply: "For cough or mouth problems.",
    cautions: "Avoid overuse; may irritate stomach."
  },
  {
    name: "Chili Pepper – Siling Labuyo",
    description: "A small hot pepper rich in capsaicin, used for stimulating circulation and relieving pain.",
    purpose: "For arthritis, nasal congestion, and metabolism.",
    preparation: "1. Arthritis: Apply oil with crushed chili.\n2. Nasal: Inhale steam from chili-infused water.\n3. Weight Loss: Add small amounts to meals.",
    whenToApply: "For joint pain or cold symptoms.",
    cautions: "Avoid eyes or open skin; can cause irritation."
  },
  {
    name: "Chayote – Sayote",
    description: "A pear-shaped vegetable whose fruits and leaves are used for kidney and skin conditions.",
    purpose: "For kidney stones, hypertension, and rashes.",
    preparation: "1. Kidney: Drink leaf decoction twice daily.\n2. Hypertension: Eat boiled fruit.\n3. Skin: Apply mashed leaves as poultice.",
    whenToApply: "For urinary or blood pressure issues.",
    cautions: "Generally safe; may cause stomach discomfort raw."
  },
  {
    name: "Coconut – Lubi",
    description: "Known as the 'Tree of Life,' used for hydration, skin healing, and lice removal.",
    purpose: "For dehydration, burns, and lice.",
    preparation: "1. Drink coconut water.\n2. Apply virgin coconut oil for burns.\n3. Use oil overnight for lice.",
    whenToApply: "For dehydration or skin issues.",
    cautions: "Safe; too much water may affect electrolytes."
  },
  {
    name: "Coriander – Wansoy",
    description: "An aromatic herb that supports digestion and relieves joint inflammation.",
    purpose: "For indigestion and joint pain.",
    preparation: "1. Indigestion: Boil 1 tsp seeds in 1 cup water.\n2. Pain: Apply paste of crushed leaves.",
    whenToApply: "For stomach upset or pain.",
    cautions: "Avoid if allergic."
  },
  {
    name: "Cucumber – Pipino",
    description: "A hydrating vegetable used for cooling and soothing effects. Commonly used to refresh the skin, regulate blood pressure, and reduce puffiness.",
    purpose: "Used for skin cooling, high blood pressure, and eye puffiness.",
    preparation: "1. For Skin Cooling: Apply fresh slices on the face.\n2. For High Blood Pressure: Drink cucumber juice daily.\n3. For Eye Puffiness: Place chilled slices over eyes for 10 minutes.",
    whenToApply: "For tired eyes, high blood pressure, or skin care.",
    cautions: "Safe; avoid excessive juice intake in people with kidney problems."
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
        <p><strong>Purpose:</strong> ${h.purpose}</p>
        <p><strong>Preparation:</strong> ${h.preparation}</p>
        <p><strong>When to Apply:</strong> ${h.whenToApply}</p>
        <p><strong>Cautions:</strong> ${h.cautions}</p>
      </div>
    `;
    herbList.appendChild(card);
  });

  document.querySelectorAll(".herb-card h3").forEach(title => {
    title.addEventListener("click", () => {
      const details = title.nextElementSibling.nextElementSibling;
      details.style.display = details.style.display === "block" ? "none" : "block";
    });
  });

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
