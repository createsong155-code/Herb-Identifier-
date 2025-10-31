<script>
const herbs = [
  // 🌿 A–C HERBS
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
    description: "Abubot is the shy or ‘touch-me-not’ plant known for its leaves that fold when touched. In traditional healing, it symbolizes gentleness yet holds power as a calming herb. It is used as a mild sedative for sleeplessness and anxiety, and for washing wounds or easing urinary discomfort.",
    purpose: "Used for insomnia, wounds, and urinary tract issues.",
    preparation: "1. Sleep Aid Tea: Boil roots in water for 15 minutes; drink before bed.\n2. Poultice for Wounds: Crush fresh leaves, apply on wound, and cover with clean cloth.",
    whenToApply: "For trouble sleeping, minor wounds, or mild UTI.",
    cautions: "Avoid use during pregnancy. May lower blood pressure."
  },
  {
    name: "Akapulko / Sibukaw – Ringworm Bush (Senna alata)",
    description: "Akapulko is a tall shrub with bright yellow flowers often seen along village paths. It is one of the most trusted herbal remedies in the Philippines for fungal skin infections.",
    purpose: "Used for treating ringworm, scabies, and other skin fungal infections.",
    preparation: "1. Fresh Leaf Rub: Rub fresh, crushed leaves on affected skin twice daily.\n2. Herbal Ointment: Mix crushed leaves with coconut oil; apply as antifungal cream.",
    whenToApply: "For fungal skin infections like ringworm and scabies.",
    cautions: "External use only; can cause stomach upset if taken internally."
  },
  {
    name: "Alugbati – Malabar Spinach",
    description: "A climbing vine with fleshy green leaves, often eaten as a vegetable; known for cooling and cleansing effects.",
    purpose: "Used to relieve constipation, cool body heat, and improve skin health.",
    preparation: "1. Cook leaves in soups or sautéed dishes.\n2. Eat lightly boiled leaves for constipation.\n3. Boil leaves, strain, and drink as cooling tea.",
    whenToApply: "For constipation, body heat, or as a nutritious vegetable.",
    cautions: "Overeating may cause loose stools."
  },
  {
    name: "Ampalaya – Bitter Gourd",
    description: "A vine with bitter-tasting fruit; used to purify blood, improve digestion, and manage diabetes.",
    purpose: "Used for diabetes management, digestion improvement, and as an immune booster.",
    preparation: "1. Boil sliced leaves or fruit for 10 minutes; drink half cup twice daily.\n2. Stir-fry or cook in soups.\n3. Blend leaves for juice.",
    whenToApply: "For high blood sugar, digestion problems, and low immunity.",
    cautions: "Avoid excessive intake during pregnancy; may cause low blood sugar."
  },
  {
    name: "Cucumber – Pipino",
    description: "A hydrating vegetable used for cooling, soothing, and cleansing effects.",
    purpose: "Used for skin cooling, high blood pressure, and eye puffiness.",
    preparation: "1. For Skin Cooling: Apply fresh slices on face.\n2. For High Blood Pressure: Drink cucumber juice daily.\n3. For Eye Puffiness: Place chilled slices over eyes for 10 minutes.",
    whenToApply: "For cooling, relaxation, or skin care.",
    cautions: "Safe; avoid excessive juice intake if you have kidney problems."
  },

  // 🌿 D–G HERBS
  {
    name: "Dalandan – Native Orange",
    description: "A local citrus fruit with a sour-sweet taste, rich in Vitamin C, used for colds and energy.",
    purpose: "Used for cough, colds, sore throat, and weakness.",
    preparation: "1. For Cough & Cold: Drink fresh juice with honey 1–2x daily.\n2. For Sore Throat: Gargle with warm water, dalandan juice, and salt.\n3. For Energy: Eat fresh fruit.",
    whenToApply: "During cough, sore throat, or when feeling weak.",
    cautions: "Acidic — avoid in people with ulcers or GERD."
  },
  {
    name: "Damong Maria – Mugwort (Artemisia vulgaris)",
    description: "An aromatic shrub valued in traditional medicine for its strong scent and healing properties.",
    purpose: "Used for stomach ache, menstrual pain, and skin wounds.",
    preparation: "1. For Stomach Ache: Boil 5–7 leaves in 2 cups of water; drink ½ cup as needed.\n2. For Menstrual Pain: Take decoction twice daily during cycle.\n3. For Skin Wounds: Apply crushed fresh leaves.",
    whenToApply: "For stomach cramps, menstrual discomfort, or wounds.",
    cautions: "Avoid during pregnancy; large doses may cause vomiting."
  },
  {
    name: "Duhat – Java Plum",
    description: "A purple fruit tree with sweet-astringent fruit; bark and leaves used for medicine.",
    purpose: "Used for diabetes, diarrhea, and mouth ulcers.",
    preparation: "1. For Diabetes: Boil bark or leaves, drink ½ cup twice daily.\n2. For Diarrhea: Eat ripe fruit or drink leaf decoction.\n3. For Mouth Ulcers: Gargle with decoction.",
    whenToApply: "For high blood sugar or digestive issues.",
    cautions: "May lower blood sugar significantly; caution in diabetics."
  },
  {
    name: "Dahon ng Saging – Banana Leaf",
    description: "Common household plant whose leaves are used as natural first aid for wounds and burns.",
    purpose: "Used for burns, scalds, and wound dressing.",
    preparation: "1. For Burns: Apply clean banana leaf on affected area.\n2. For Wound Dressing: Wrap wounds with sanitized leaf.",
    whenToApply: "For minor burns and wounds.",
    cautions: "External use only; ensure leaf is clean."
  },
  {
    name: "Euphorbia – Tawa-tawa / Asthma Weed",
    description: "A grass-like weed traditionally used in the Philippines for dengue recovery and asthma relief.",
    purpose: "Used for dengue, asthma, and wounds.",
    preparation: "1. For Dengue: Boil whole washed plant in 4 cups water until half remains; drink ½ cup 3–4x daily.\n2. For Asthma: Take small doses of decoction daily.\n3. For Wounds: Apply crushed leaves as poultice.",
    whenToApply: "For dengue recovery, asthma, or wound healing.",
    cautions: "Avoid overdose; may cause nausea or liver irritation. Not for pregnant women."
  },
  {
    name: "Eucalyptus",
    description: "An aromatic tree with camphor-like scent, used for respiratory relief and wound cleaning.",
    purpose: "Used for cough, asthma, and wounds.",
    preparation: "1. For Cough: Inhale steam with 3–4 drops eucalyptus oil.\n2. For Asthma: Use oil as chest rub diluted with coconut oil.\n3. For Wounds: Wash with cooled decoction.",
    whenToApply: "For colds, cough, or skin care.",
    cautions: "Oil must be diluted; ingestion is toxic. Avoid use on small children."
  },
  {
    name: "Eggplant – Talong",
    description: "Common vegetable with medicinal uses; both fruit and leaves used for wellness.",
    purpose: "Used for high cholesterol, burns, and constipation.",
    preparation: "1. For Cholesterol: Eat roasted or boiled eggplant.\n2. For Burns: Apply roasted skin on affected area.\n3. For Constipation: Include in diet.",
    whenToApply: "For heart health, burns, or digestion aid.",
    cautions: "Safe in moderation; may cause allergy in some individuals."
  },
  {
    name: "Elemi – Canarium luzonicum",
    description: "A native Philippine tree that produces aromatic resin with healing and soothing effects.",
    purpose: "Used for cough, bronchitis, wounds, and stomach pain.",
    preparation: "1. For Cough: Inhale steam with resin.\n2. For Wounds: Apply resin directly to skin.\n3. For Stomach Pain: Drink decoction of bark.",
    whenToApply: "For cough, skin infections, or mild stomach issues.",
    cautions: "Resin may irritate sensitive skin; avoid large ingestion."
  },
  {
    name: "Fennel – Anis",
    description: "Aromatic herb used to ease digestion, cough, and increase milk flow in nursing mothers.",
    purpose: "Used for bloating, cough, and lactation support.",
    preparation: "1. For Bloating: Crush 1 tsp fennel seeds, steep 10 mins, drink warm.\n2. For Cough: Boil 1 tbsp seeds in 2 cups water; sip throughout day.\n3. For Lactation: Mix 1 tsp seeds in warm milk daily.",
    whenToApply: "After meals or during breastfeeding.",
    cautions: "Avoid during pregnancy unless prescribed; may cause allergy."
  },
  {
    name: "Gabi – Taro",
    description: "A root crop with edible leaves and tubers, high in fiber and minerals.",
    purpose: "Used for boils, swelling, digestion, and energy.",
    preparation: "1. For Swelling: Heat gabi leaves, apply warm compress.\n2. For Boils: Crush leaves, mix with oil, apply to skin.\n3. For Nutrition: Boil tubers until soft, eat as meal.",
    whenToApply: "For swelling, boils, or as food.",
    cautions: "Always cook before eating; raw gabi can irritate mouth and throat."
  },
  {
    name: "Galing-galing – Red Ginger",
    description: "A spicy aromatic root used for inflammation, digestion, and respiratory relief.",
    purpose: "Used for sore throat, nausea, and cough.",
    preparation: "1. For Sore Throat: Boil slices in 1 cup water, gargle warm.\n2. For Nausea: Chew raw slice or make tea.\n3. For Cough: Mix ginger decoction with honey twice daily.",
    whenToApply: "For sore throat, nausea, or cough.",
    cautions: "Avoid excessive use in people with bleeding disorders."
  },
  {
    name: "Gatas-gatas – Asthma Weed",
    description: "A small herb with white latex sap, used for respiratory and skin conditions.",
    purpose: "Used for asthma, cough, wounds, and skin rashes.",
    preparation: "1. For Asthma: Boil fresh plant in 2 cups water 15 mins, drink ½ cup twice daily.\n2. For Wounds: Crush leaves, apply on wound.\n3. For Skin Rashes: Pound leaves with coconut oil, apply.",
    whenToApply: "For asthma, skin rash, or wounds.",
    cautions: "Latex sap may irritate skin; avoid during pregnancy."
  },
  {
    name: "Ginger – Luya",
    description: "A kitchen spice with strong medicinal benefits for nausea, pain, and sore throat.",
    purpose: "Used for nausea, joint pain, and cough.",
    preparation: "1. For Nausea: Steep sliced ginger in hot water 10 mins.\n2. For Pain: Apply warm ginger compress.\n3. For Cough: Boil slices with honey and drink.",
    whenToApply: "For nausea, pain, or cough.",
    cautions: "Avoid excess use in people with gallstones or bleeding disorders."
  },
  {
    name: "Gumamela – Hibiscus",
    description: "A common ornamental flower used as herbal remedy for cough, fever, and skin irritation.",
    purpose: "Used for cough, wounds, and rashes.",
    preparation: "1. For Cough: Boil flowers in 2 cups water 10 mins; drink twice daily.\n2. For Wounds: Pound flowers, apply juice.\n3. For Rashes: Soak flowers in warm water and use as bath.",
    whenToApply: "For cough or skin irritation.",
    cautions: "Generally safe; avoid consumption if exposed to pesticides."
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
</script>
