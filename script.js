const herbs = [
  {
    name: "Abang-abang – Bloodleaf / Joseph’s Coat",
    description: "Abang-abang is a colorful plant with deep red, purple, and green leaves, often grown in home gardens not only for its beauty but also for its healing reputation. Traditionally used in Filipino folk medicine, it is believed to cleanse and strengthen the blood, stop bleeding from small wounds, and ease mild cough. Elders often crush the leaves fresh and apply them to minor injuries to help blood clot faster.",
    purpose: "Traditionally used to stop bleeding, treat wounds, and ease cough. Believed to boost blood health.",
    preparation: "1. Fresh Poultice: Crush fresh leaves and apply directly to cuts or wounds to stop bleeding.\n2. Decoction for Cough: Boil a handful of fresh leaves in 2 cups of water for 10 minutes; drink half cup twice daily.",
    whenToApply: "For minor wounds, cough, or blood nourishment.",
    cautions: "Avoid internal use during pregnancy without medical advice. May cause mild stomach upset in sensitive individuals."
  },
  {
    name: "Abtik-abtik – Speedwell",
    description: "Abtik-abtik is a low-growing creeping herb with small blue flowers found near fields and moist soil. It has long been used in village remedies for cough, skin rashes, and throat irritation. The plant is believed to cool the body and gently cleanse inflammation, making it a simple yet effective home remedy for minor ailments.",
    purpose: "Used in folk remedies for cough, mild skin rashes, and sore throat.",
    preparation: "1. Tea for Cough/Sore Throat: Steep 1 tsp dried leaves in hot water for 5–7 minutes; drink warm.\n2. Leaf Wash for Skin: Boil leaves in water, cool, and wash affected skin areas.",
    whenToApply: "When having mild cough, skin irritation, or throat discomfort.",
    cautions: "Not recommended for people with plant allergies."
  },
  {
    name: "Abubot – Sensitive Plant (Mimosa pudica)",
    description: "Abubot is the shy or ‘touch-me-not’ plant known for its leaves that fold when touched. In traditional healing, it symbolizes gentleness yet holds power as a calming herb. It is used as a mild sedative for sleeplessness and anxiety, and for washing wounds or easing urinary discomfort. Its roots and leaves are valued for their cooling and soothing qualities.",
    purpose: "Used for insomnia, wounds, and urinary tract issues.",
    preparation: "1. Sleep Aid Tea: Boil roots in water for 15 minutes; drink before bed.\n2. Poultice for Wounds: Crush fresh leaves, apply on wound, and cover with clean cloth.",
    whenToApply: "For trouble sleeping, minor wounds, or mild UTI.",
    cautions: "Avoid use during pregnancy. May lower blood pressure."
  },
  {
    name: "Akapulko / Sibukaw – Ringworm Bush (Senna alata)",
    description: "Akapulko is a tall shrub with bright yellow flowers often seen along village paths. It is one of the most trusted herbal remedies in the Philippines for fungal skin infections. Its fresh green leaves contain natural antifungal compounds that heal ringworm, scabies, and other skin problems. Many families keep it as a natural skin medicine, used much like an herbal ointment.",
    purpose: "Used for treating ringworm, scabies, and other skin fungal infections.",
    preparation: "1. Fresh Leaf Rub: Rub fresh, crushed leaves on affected skin twice daily.\n2. Herbal Ointment: Mix crushed leaves with coconut oil; apply as antifungal cream.\n3. Bughat, kulafo ug sanga nga pinikas hinuluman.",
    whenToApply: "For fungal skin infections like ringworm and scabies.",
    cautions: "External use only; can cause stomach upset if taken internally."
  },
  {
    name: "Alugbati – Malabar Spinach",
    description: "Alugbati is a soft, climbing vine with thick green leaves often used as both food and medicine. It cools the body, promotes bowel movement, and supports skin health. In Filipino homes, it is cooked in soups or eaten steamed for its gentle cleansing effect and high nutritional value. The plant symbolizes simple, nourishing healing straight from the garden.",
    purpose: "Used to relieve constipation, cool body heat, and improve skin health.",
    preparation: "1. Food Use: Cook leaves in soups or sautéed dishes.\n2. Constipation Remedy: Eat lightly boiled leaves with meals.\n3. Cooling Drink: Boil leaves, strain, and drink as a cooling tea.",
    whenToApply: "For constipation, body heat, or as a nutritious vegetable.",
    cautions: "Overeating may cause loose stools."
  },
  {
    name: "Ampalaya – Bitter Gourd",
    description: "Ampalaya is a climbing vine with distinct bitter fruit, deeply rooted in Filipino herbal tradition as a symbol of cleansing and discipline. Its bitterness is believed to purify the blood and balance the body’s energy. Elders drink ampalaya tea to manage diabetes, aid digestion, and strengthen the immune system, while its leaves and fruits are also cooked as a daily food for health maintenance.",
    purpose: "Used for diabetes management, digestion improvement, and as an immune booster.",
    preparation: "1. Diabetes Tea: Boil sliced leaves or fruit in water for 10 minutes; drink half cup twice daily.\n2. Food Use: Stir-fry or cook in soups.\n3. Juice for Immunity: Blend leaves with water; drink small amounts.",
    whenToApply: "For high blood sugar, digestion problems, and low immunity.",
    cautions: "Avoid excessive intake during pregnancy; may cause low blood sugar."
  },
  {
    name: "Anis – Anise",
    description: "Anis is a fragrant seed used for both food and medicine, known for its sweet aroma that comforts the chest and stomach. In traditional herbal healing, it is used to ease gas, soothe cough, and freshen the breath after meals. Many healers recommend it for those who need warmth in the body and gentle respiratory relief.",
    purpose: "Used for stomach gas, cough, and bad breath.",
    preparation: "1. Anise Tea: Boil 1 tsp seeds in 1 cup water for 5 minutes; drink warm.\n2. Mouth Freshener: Chew a few seeds after meals.",
    whenToApply: "For digestive discomfort, cough, or bad breath.",
    cautions: "Avoid in people with allergies to carrots or celery family plants."
  },
  {
    name: "Anonas – Custard Apple",
    description: "Anonas is a small tropical tree that bears soft, sweet fruit but is also treasured for its bark and leaves in folk medicine. The bark decoction is used to treat diarrhea and dysentery, while crushed leaves are applied to skin wounds. It represents the balance between nourishment and healing, showing how even fruit trees hold medicinal strength.",
    purpose: "Used for diarrhea, dysentery, and wound healing.",
    preparation: "1. Diarrhea Remedy: Boil bark in water and drink small sips.\n2. Poultice: Crush leaves and apply to skin wounds.",
    whenToApply: "For diarrhea or skin injuries.",
    cautions: "Bark tea may cause constipation if overused."
  },
  {
    name: "Atis – Sugar Apple",
    description: "Atis is a sweet tropical fruit with creamy flesh and medicinal leaves. In traditional households, its leaves are boiled for fever baths, while the crushed seeds are used externally for treating lice. The plant is valued for its cooling nature and cleansing effect on the skin and scalp, showing how even common fruit-bearing trees can be part of healing traditions.",
    purpose: "Used for dysentery, fever, and head lice.",
    preparation: "1. Fever Relief: Boil leaves in water and use for sponge bath.\n2. Anti-lice Treatment: Crush seeds, mix with coconut oil, apply to scalp for 30 minutes then rinse.",
    whenToApply: "For fever or lice infestation.",
    cautions: "Seeds are toxic if swallowed. Avoid internal seed use."
  },
  {
    name: "Balbas Pusa – Cat’s Whiskers",
    description: "Balbas Pusa is a graceful herb named for its delicate white flowers that resemble a cat’s whiskers. In traditional Filipino medicine, it is prized for cleansing the kidneys and promoting urination. It is often brewed into tea to relieve water retention, urinary infections, and mild high blood pressure, making it a staple herbal drink in many homes.",
    purpose: "Used for kidney stones, urinary tract infections, and high blood pressure.",
    preparation: "1. Kidney Tea: Boil leaves in water for 15 minutes; drink twice daily.\n2. Blood Pressure Support: Drink as tea regularly in moderation.",
    whenToApply: "For urinary issues or mild hypertension.",
    cautions: "Avoid long-term excessive use; may lower blood pressure too much."
  },
  {
    name: "Banaba – Giant Crape Myrtle",
    description: "Banaba is a tall tree with striking purple flowers and leaves widely known in the Philippines for lowering blood sugar. It is often used as a natural remedy for diabetes, weight management, and kidney cleansing. Many drink banaba tea daily as part of their wellness habit, valuing it for its gentle yet powerful effect on the body’s metabolism.",
    purpose: "Used for diabetes, weight loss, and kidney health.",
    preparation: "1. Diabetes Tea: Boil dried leaves in water for 10 minutes; drink 1 cup twice daily.\n2. Weight Loss Support: Drink as a daily tea.",
    whenToApply: "For high blood sugar, weight control, and kidney health.",
    cautions: "May enhance effect of anti-diabetic drugs."
  },
  {
    name: "Bawang – Garlic",
    description: "Bawang is one of the oldest and most versatile healing plants in Filipino homes. Beyond its role in cooking, garlic is celebrated for strengthening the heart, fighting infections, and warming the body. It is a symbol of natural protection, often eaten raw or used as oil to ease earache or cold symptoms.",
    purpose: "Used for high blood pressure, colds, and infection prevention.",
    preparation: "1. Fresh Garlic: Eat 1–2 raw cloves daily for immunity.\n2. Oil for Earache: Warm garlic in coconut oil; apply drops to affected ear.\n3. Food Use: Include in daily cooking.",
    whenToApply: "For hypertension, colds, or infections.",
    cautions: "May cause stomach irritation in sensitive people. Avoid excess before surgery."
  },
  {
    name: "Bayabas – Guava",
    description: "Bayabas is one of the most common and powerful healing plants in the Philippines. Its leaves are known for their antiseptic and anti-inflammatory properties, used for centuries to cleanse wounds, treat diarrhea, and maintain oral health. It embodies the simplicity of nature’s medicine—effective, safe, and available in every backyard.",
    purpose: "Used for diarrhea, wound washing, and oral health.",
    preparation: "1. Diarrhea Remedy: Boil leaves and drink tea twice daily.\n2. Wound Wash: Boil leaves, cool, and wash wounds.\n3. Mouthwash: Use cooled decoction for gargling.",
    whenToApply: "For diarrhea, wounds, or mouth sores.",
    cautions: "Avoid overuse internally; may cause constipation."
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
});const herbs = [
  {
    name: "Abang-abang – Bloodleaf / Joseph’s Coat",
    description: "Abang-abang is a colorful plant with deep red, purple, and green leaves, often grown in home gardens not only for its beauty but also for its healing reputation. Traditionally used in Filipino folk medicine, it is believed to cleanse and strengthen the blood, stop bleeding from small wounds, and ease mild cough. Elders often crush the leaves fresh and apply them to minor injuries to help blood clot faster.",
    purpose: "Traditionally used to stop bleeding, treat wounds, and ease cough. Believed to boost blood health.",
    preparation: "1. Fresh Poultice: Crush fresh leaves and apply directly to cuts or wounds to stop bleeding.\n2. Decoction for Cough: Boil a handful of fresh leaves in 2 cups of water for 10 minutes; drink half cup twice daily.",
    whenToApply: "For minor wounds, cough, or blood nourishment.",
    cautions: "Avoid internal use during pregnancy without medical advice. May cause mild stomach upset in sensitive individuals."
  },
  {
    name: "Abtik-abtik – Speedwell",
    description: "Abtik-abtik is a low-growing creeping herb with small blue flowers found near fields and moist soil. It has long been used in village remedies for cough, skin rashes, and throat irritation. The plant is believed to cool the body and gently cleanse inflammation, making it a simple yet effective home remedy for minor ailments.",
    purpose: "Used in folk remedies for cough, mild skin rashes, and sore throat.",
    preparation: "1. Tea for Cough/Sore Throat: Steep 1 tsp dried leaves in hot water for 5–7 minutes; drink warm.\n2. Leaf Wash for Skin: Boil leaves in water, cool, and wash affected skin areas.",
    whenToApply: "When having mild cough, skin irritation, or throat discomfort.",
    cautions: "Not recommended for people with plant allergies."
  },
  {
    name: "Abubot – Sensitive Plant (Mimosa pudica)",
    description: "Abubot is the shy or ‘touch-me-not’ plant known for its leaves that fold when touched. In traditional healing, it symbolizes gentleness yet holds power as a calming herb. It is used as a mild sedative for sleeplessness and anxiety, and for washing wounds or easing urinary discomfort. Its roots and leaves are valued for their cooling and soothing qualities.",
    purpose: "Used for insomnia, wounds, and urinary tract issues.",
    preparation: "1. Sleep Aid Tea: Boil roots in water for 15 minutes; drink before bed.\n2. Poultice for Wounds: Crush fresh leaves, apply on wound, and cover with clean cloth.",
    whenToApply: "For trouble sleeping, minor wounds, or mild UTI.",
    cautions: "Avoid use during pregnancy. May lower blood pressure."
  },
  {
    name: "Akapulko / Sibukaw – Ringworm Bush (Senna alata)",
    description: "Akapulko is a tall shrub with bright yellow flowers often seen along village paths. It is one of the most trusted herbal remedies in the Philippines for fungal skin infections. Its fresh green leaves contain natural antifungal compounds that heal ringworm, scabies, and other skin problems. Many families keep it as a natural skin medicine, used much like an herbal ointment.",
    purpose: "Used for treating ringworm, scabies, and other skin fungal infections.",
    preparation: "1. Fresh Leaf Rub: Rub fresh, crushed leaves on affected skin twice daily.\n2. Herbal Ointment: Mix crushed leaves with coconut oil; apply as antifungal cream.\n3. Bughat, kulafo ug sanga nga pinikas hinuluman.",
    whenToApply: "For fungal skin infections like ringworm and scabies.",
    cautions: "External use only; can cause stomach upset if taken internally."
  },
  {
    name: "Alugbati – Malabar Spinach",
    description: "Alugbati is a soft, climbing vine with thick green leaves often used as both food and medicine. It cools the body, promotes bowel movement, and supports skin health. In Filipino homes, it is cooked in soups or eaten steamed for its gentle cleansing effect and high nutritional value. The plant symbolizes simple, nourishing healing straight from the garden.",
    purpose: "Used to relieve constipation, cool body heat, and improve skin health.",
    preparation: "1. Food Use: Cook leaves in soups or sautéed dishes.\n2. Constipation Remedy: Eat lightly boiled leaves with meals.\n3. Cooling Drink: Boil leaves, strain, and drink as a cooling tea.",
    whenToApply: "For constipation, body heat, or as a nutritious vegetable.",
    cautions: "Overeating may cause loose stools."
  },
  {
    name: "Ampalaya – Bitter Gourd",
    description: "Ampalaya is a climbing vine with distinct bitter fruit, deeply rooted in Filipino herbal tradition as a symbol of cleansing and discipline. Its bitterness is believed to purify the blood and balance the body’s energy. Elders drink ampalaya tea to manage diabetes, aid digestion, and strengthen the immune system, while its leaves and fruits are also cooked as a daily food for health maintenance.",
    purpose: "Used for diabetes management, digestion improvement, and as an immune booster.",
    preparation: "1. Diabetes Tea: Boil sliced leaves or fruit in water for 10 minutes; drink half cup twice daily.\n2. Food Use: Stir-fry or cook in soups.\n3. Juice for Immunity: Blend leaves with water; drink small amounts.",
    whenToApply: "For high blood sugar, digestion problems, and low immunity.",
    cautions: "Avoid excessive intake during pregnancy; may cause low blood sugar."
  },
  {
    name: "Anis – Anise",
    description: "Anis is a fragrant seed used for both food and medicine, known for its sweet aroma that comforts the chest and stomach. In traditional herbal healing, it is used to ease gas, soothe cough, and freshen the breath after meals. Many healers recommend it for those who need warmth in the body and gentle respiratory relief.",
    purpose: "Used for stomach gas, cough, and bad breath.",
    preparation: "1. Anise Tea: Boil 1 tsp seeds in 1 cup water for 5 minutes; drink warm.\n2. Mouth Freshener: Chew a few seeds after meals.",
    whenToApply: "For digestive discomfort, cough, or bad breath.",
    cautions: "Avoid in people with allergies to carrots or celery family plants."
  },
  {
    name: "Anonas – Custard Apple",
    description: "Anonas is a small tropical tree that bears soft, sweet fruit but is also treasured for its bark and leaves in folk medicine. The bark decoction is used to treat diarrhea and dysentery, while crushed leaves are applied to skin wounds. It represents the balance between nourishment and healing, showing how even fruit trees hold medicinal strength.",
    purpose: "Used for diarrhea, dysentery, and wound healing.",
    preparation: "1. Diarrhea Remedy: Boil bark in water and drink small sips.\n2. Poultice: Crush leaves and apply to skin wounds.",
    whenToApply: "For diarrhea or skin injuries.",
    cautions: "Bark tea may cause constipation if overused."
  },
  {
    name: "Atis – Sugar Apple",
    description: "Atis is a sweet tropical fruit with creamy flesh and medicinal leaves. In traditional households, its leaves are boiled for fever baths, while the crushed seeds are used externally for treating lice. The plant is valued for its cooling nature and cleansing effect on the skin and scalp, showing how even common fruit-bearing trees can be part of healing traditions.",
    purpose: "Used for dysentery, fever, and head lice.",
    preparation: "1. Fever Relief: Boil leaves in water and use for sponge bath.\n2. Anti-lice Treatment: Crush seeds, mix with coconut oil, apply to scalp for 30 minutes then rinse.",
    whenToApply: "For fever or lice infestation.",
    cautions: "Seeds are toxic if swallowed. Avoid internal seed use."
  },
  {
    name: "Balbas Pusa – Cat’s Whiskers",
    description: "Balbas Pusa is a graceful herb named for its delicate white flowers that resemble a cat’s whiskers. In traditional Filipino medicine, it is prized for cleansing the kidneys and promoting urination. It is often brewed into tea to relieve water retention, urinary infections, and mild high blood pressure, making it a staple herbal drink in many homes.",
    purpose: "Used for kidney stones, urinary tract infections, and high blood pressure.",
    preparation: "1. Kidney Tea: Boil leaves in water for 15 minutes; drink twice daily.\n2. Blood Pressure Support: Drink as tea regularly in moderation.",
    whenToApply: "For urinary issues or mild hypertension.",
    cautions: "Avoid long-term excessive use; may lower blood pressure too much."
  },
  {
    name: "Banaba – Giant Crape Myrtle",
    description: "Banaba is a tall tree with striking purple flowers and leaves widely known in the Philippines for lowering blood sugar. It is often used as a natural remedy for diabetes, weight management, and kidney cleansing. Many drink banaba tea daily as part of their wellness habit, valuing it for its gentle yet powerful effect on the body’s metabolism.",
    purpose: "Used for diabetes, weight loss, and kidney health.",
    preparation: "1. Diabetes Tea: Boil dried leaves in water for 10 minutes; drink 1 cup twice daily.\n2. Weight Loss Support: Drink as a daily tea.",
    whenToApply: "For high blood sugar, weight control, and kidney health.",
    cautions: "May enhance effect of anti-diabetic drugs."
  },
  {
    name: "Bawang – Garlic",
    description: "Bawang is one of the oldest and most versatile healing plants in Filipino homes. Beyond its role in cooking, garlic is celebrated for strengthening the heart, fighting infections, and warming the body. It is a symbol of natural protection, often eaten raw or used as oil to ease earache or cold symptoms.",
    purpose: "Used for high blood pressure, colds, and infection prevention.",
    preparation: "1. Fresh Garlic: Eat 1–2 raw cloves daily for immunity.\n2. Oil for Earache: Warm garlic in coconut oil; apply drops to affected ear.\n3. Food Use: Include in daily cooking.",
    whenToApply: "For hypertension, colds, or infections.",
    cautions: "May cause stomach irritation in sensitive people. Avoid excess before surgery."
  },
  {
    name: "Bayabas – Guava",
    description: "Bayabas is one of the most common and powerful healing plants in the Philippines. Its leaves are known for their antiseptic and anti-inflammatory properties, used for centuries to cleanse wounds, treat diarrhea, and maintain oral health. It embodies the simplicity of nature’s medicine—effective, safe, and available in every backyard.",
    purpose: "Used for diarrhea, wound washing, and oral health.",
    preparation: "1. Diarrhea Remedy: Boil leaves and drink tea twice daily.\n2. Wound Wash: Boil leaves, cool, and wash wounds.\n3. Mouthwash: Use cooled decoction for gargling.",
    whenToApply: "For diarrhea, wounds, or mouth sores.",
    cautions: "Avoid overuse internally; may cause constipation."
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
