<script>
const herbs = [
  // 🌿 A SERIES
  {
    name: "Abang-abang – Bloodleaf / Joseph’s Coat",
    description: "A colorful plant with red, purple, and green leaves used to stop bleeding and ease cough.",
    purpose: "Stops bleeding, heals small wounds, relieves mild cough, and boosts blood health.",
    preparation: "1. Crush leaves and apply on wounds. 2. Boil a handful of leaves in 2 cups of water for 10 mins; drink half a cup twice daily.",
    whenToApply: "For wounds, bleeding, or cough.",
    cautions: "Avoid internal use during pregnancy."
  },
  {
    name: "Abtik-abtik – Speedwell",
    description: "A creeping herb with small blue flowers used for cough, rashes, and sore throat.",
    purpose: "Soothes throat, reduces skin irritation, and relieves mild cough.",
    preparation: "1. Steep 1 tsp dried leaves in hot water; drink warm. 2. Boil leaves and use water to wash affected skin.",
    whenToApply: "When having cough or skin irritation.",
    cautions: "Avoid if allergic to herbal plants."
  },
  {
    name: "Abubot – Sensitive Plant (Mimosa pudica)",
    description: "A shy plant whose leaves close when touched, used for calming and wound healing.",
    purpose: "For insomnia, wounds, and urinary tract discomfort.",
    preparation: "1. Boil roots for 15 mins; drink before bed. 2. Crush fresh leaves and apply on wounds.",
    whenToApply: "For sleeplessness or small wounds.",
    cautions: "Avoid use during pregnancy; may lower blood pressure."
  },
  {
    name: "Akapulko / Sibukaw – Ringworm Bush",
    description: "A tall shrub with yellow flowers used as natural antifungal medicine.",
    purpose: "Cures ringworm, scabies, and other fungal skin infections.",
    preparation: "1. Rub crushed leaves on skin twice daily. 2. Mix with coconut oil to make ointment.",
    whenToApply: "For fungal skin infections.",
    cautions: "External use only."
  },
  {
    name: "Alugbati – Malabar Spinach",
    description: "A leafy vine used as food and medicine, known for cooling and cleansing the body.",
    purpose: "Relieves constipation, cools the body, and improves skin health.",
    preparation: "1. Eat steamed or boiled leaves. 2. Drink boiled leaf water as cooling tea.",
    whenToApply: "For constipation or heat in the body.",
    cautions: "Overeating may cause loose stools."
  },
  {
    name: "Ampalaya – Bitter Gourd",
    description: "A bitter vine known for its health benefits, especially for blood sugar and digestion.",
    purpose: "For diabetes, digestion, and immunity.",
    preparation: "1. Boil sliced leaves or fruit for 10 mins; drink half cup twice daily. 2. Eat as vegetable dish or juice.",
    whenToApply: "For diabetes or low immunity.",
    cautions: "Avoid excessive use during pregnancy."
  },
  {
    name: "Anis – Anise",
    description: "A sweet-scented seed used for stomach gas and cough relief.",
    purpose: "Eases bloating, cough, and bad breath.",
    preparation: "1. Boil 1 tsp seeds in water for 5 mins; drink warm. 2. Chew a few seeds after meals.",
    whenToApply: "For stomach gas or cough.",
    cautions: "Avoid if allergic to celery or carrot family."
  },
  {
    name: "Anonas – Custard Apple",
    description: "A fruit tree with bark and leaves used to treat diarrhea and wounds.",
    purpose: "Treats diarrhea, dysentery, and aids wound healing.",
    preparation: "1. Boil bark in water; sip as tea. 2. Crush leaves and apply to wounds.",
    whenToApply: "For diarrhea or wounds.",
    cautions: "Overuse may cause constipation."
  },
  {
    name: "Atis – Sugar Apple",
    description: "A sweet fruit whose leaves and seeds have medicinal use for fever and lice.",
    purpose: "Used for dysentery, fever, and head lice.",
    preparation: "1. Boil leaves for fever bath. 2. Crush seeds, mix with coconut oil, apply to scalp, rinse after 30 mins.",
    whenToApply: "For fever or lice.",
    cautions: "Seeds are toxic if swallowed."
  },
  {
    name: "Balbas Pusa – Cat’s Whiskers",
    description: "An herb with white flowers resembling whiskers, used for kidney cleansing.",
    purpose: "Treats kidney stones, UTI, and high blood pressure.",
    preparation: "Boil leaves for 15 mins; drink twice daily.",
    whenToApply: "For urinary or kidney issues.",
    cautions: "Avoid overuse; may lower blood pressure too much."
  },
  {
    name: "Banaba – Giant Crape Myrtle",
    description: "A tree with purple flowers, known for lowering blood sugar and aiding weight loss.",
    purpose: "For diabetes, weight loss, and kidney cleansing.",
    preparation: "Boil dried leaves for 10 mins; drink 1 cup twice daily.",
    whenToApply: "For high blood sugar or kidney issues.",
    cautions: "May enhance effect of anti-diabetic drugs."
  },
  {
    name: "Bawang – Garlic",
    description: "A common kitchen remedy for infections and high blood pressure.",
    purpose: "For colds, infection, and heart health.",
    preparation: "Eat 1–2 raw cloves daily or use in food. Warm in coconut oil for earache.",
    whenToApply: "For hypertension, colds, or infections.",
    cautions: "Avoid excess use before surgery."
  },
  {
    name: "Bayabas – Guava",
    description: "A common herbal plant used for diarrhea, oral health, and wounds.",
    purpose: "Used for diarrhea, wound washing, and mouth sores.",
    preparation: "1. Boil leaves and drink tea. 2. Use cooled water to wash wounds or gargle.",
    whenToApply: "For diarrhea, wounds, or mouth sores.",
    cautions: "Avoid overuse; may cause constipation."
  },

  // 🌿 C SERIES
  {
    name: "Caimito – Star Apple",
    description: "A tropical tree with sweet fruit; leaves and bark are medicinal.",
    purpose: "Used for diabetes, diarrhea, and skin irritation.",
    preparation: "Boil 5–7 leaves for 10–15 mins; drink 1 cup twice daily. Apply crushed leaves on skin.",
    whenToApply: "For diabetes or diarrhea.",
    cautions: "Avoid in pregnancy; bark may cause constipation."
  },
  {
    name: "Calamansi – Philippine Lime",
    description: "A small citrus fruit rich in vitamin C, used for cough and sore throat.",
    purpose: "For cough, sore throat, and skin care.",
    preparation: "Mix juice with honey; take 1 tbsp 3x daily. Use diluted juice on skin for 5 mins.",
    whenToApply: "For cough, fever, or dark spots.",
    cautions: "Avoid on open wounds; may irritate stomach."
  },
  {
    name: "Camote Tops – Sweet Potato Leaves",
    description: "Nutritious leaves known to help dengue recovery and anemia.",
    purpose: "Used for dengue recovery, anemia, and constipation.",
    preparation: "Boil leaves for 15 mins; drink or eat. Eat steamed for anemia.",
    whenToApply: "For dengue recovery or anemia.",
    cautions: "Overuse may cause diarrhea."
  },
  {
    name: "Camphor Tree – Tagulamos / Kapur",
    description: "Aromatic tree used for muscle pain and cough relief.",
    purpose: "Used for muscle pain and cough.",
    preparation: "Mix camphor oil with coconut oil and massage; inhale steam with 2–3 drops oil.",
    whenToApply: "For cough or sore muscles.",
    cautions: "Do not ingest; avoid on infants."
  },
  {
    name: "Carrot – Roots and Leaves",
    description: "A root vegetable high in vitamins and beta-carotene.",
    purpose: "Good for vision, wounds, and digestion.",
    preparation: "Eat raw or steamed; apply grated carrot to wounds; drink juice for constipation.",
    whenToApply: "For vision and digestion.",
    cautions: "Overuse may yellow the skin."
  },
  {
    name: "Cassava – Leaves and Roots",
    description: "A starchy root used as food and energy source.",
    purpose: "Used for fatigue and skin irritation.",
    preparation: "Boil young leaves 15–20 mins; eat with meals; mash boiled leaves for skin.",
    whenToApply: "For fatigue or skin irritation.",
    cautions: "Never eat raw; may contain toxins."
  },
  {
    name: "Catmon – Dillenia philippinensis",
    description: "A native tree with sour fruit used for cough and mouth sores.",
    purpose: "Treats cough and mouth sores.",
    preparation: "Boil bark and leaves; drink or gargle twice daily.",
    whenToApply: "For cough or mouth ulcers.",
    cautions: "May irritate stomach if overused."
  },
  {
    name: "Chili Pepper – Siling Labuyo",
    description: "Small spicy pepper rich in capsaicin, used for pain and metabolism.",
    purpose: "Used for arthritis, nasal congestion, and metabolism boost.",
    preparation: "Apply oil infused with crushed chili to affected area; inhale steam for congestion.",
    whenToApply: "For pain or congestion.",
    cautions: "Avoid eyes; may irritate stomach."
  },
  {
    name: "Chayote – Sayote",
    description: "A green pear-shaped vegetable used for kidney and skin issues.",
    purpose: "For kidney stones, hypertension, and rashes.",
    preparation: "Boil fruit or leaves and drink decoction twice daily.",
    whenToApply: "For kidney stones or hypertension.",
    cautions: "Safe; avoid eating raw in excess."
  },
  {
    name: "Coconut – Lubi",
    description: "The ‘tree of life,’ with many medicinal and food uses.",
    purpose: "For dehydration, skin burns, and lice.",
    preparation: "Drink fresh water; apply virgin coconut oil to skin or scalp.",
    whenToApply: "For dehydration, burns, or lice.",
    cautions: "Too much water may imbalance electrolytes."
  },
  {
    name: "Coriander – Wansoy",
    description: "An aromatic herb used for cooking and digestion.",
    purpose: "For indigestion and joint pain.",
    preparation: "Boil seeds for tea; apply fresh paste for joint pain.",
    whenToApply: "For digestion or pain.",
    cautions: "Avoid if allergic."
  },
  {
    name: "Cucumber – Pipino",
    description: "Hydrating vegetable used for cooling and soothing the body.",
    purpose: "For skin cooling, high blood pressure, and puffy eyes.",
    preparation: "Apply slices on skin or eyes; drink juice daily.",
    whenToApply: "For hot weather or high blood pressure.",
    cautions: "Avoid excessive juice if kidney issues."
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
