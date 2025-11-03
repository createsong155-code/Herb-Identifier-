// 🌿 Herb Identifier App (Full A–C Data)
// Detailed herbal information version – matches previous index.html data

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
        description: "Akapulko, also known as Sibukaw, is a tall shrub with bright yellow flowers often seen along village paths. It is one of the most trusted herbal remedies in the Philippines for fungal skin infections. Its fresh green leaves contain natural antifungal compounds that heal ringworm, scabies, and other skin problems. Many families keep it as a natural skin medicine, used much like an herbal ointment.",
        purpose: "Used for treating ringworm, scabies, and other fungal skin infections.",
        preparation: "1. Fresh Leaf Rub: Rub crushed fresh leaves on affected skin twice daily.\n2. Herbal Ointment: Mix crushed leaves with coconut oil; apply on affected area.\n3. Decoction Wash: Boil leaves, let cool, and use water for washing infected skin.",
        whenToApply: "For fungal skin infections such as ringworm, scabies, and itchiness.",
        cautions: "For external use only. Ingestion may cause stomach upset."
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
      },
      {
        name: "Caimito – Star Apple",
        description: "A tropical fruit tree with sweet, milky flesh; its leaves and bark are used medicinally in traditional remedies.",
        purpose: "Used for diabetes, diarrhea, and skin irritation.",
        preparation: "1. For Diabetes: Boil 5–7 fresh leaves in 2 cups water for 10–15 min; drink 1 cup twice daily.\n2. For Diarrhea: Use decoction from bark and leaves 2–3 times daily.\n3. For Skin Irritation: Crush fresh leaves and apply as poultice.",
        whenToApply: "For high blood sugar, loose bowel, or minor skin irritation.",
        cautions: "Avoid excessive use in pregnancy; bark decoction may cause constipation if overconsumed."
      },
      {
        name: "Calamansi – Philippine Lime",
        description: "A small citrus fruit rich in vitamin C, commonly used in Filipino homes for both culinary and medicinal purposes.",
        purpose: "Used for cough, sore throat, fever, and skin brightening.",
        preparation: "1. For Cough & Sore Throat: Mix juice with honey and take 1 tbsp 2–3 times daily.\n2. For Skin Whitening: Apply diluted juice on dark spots for 5–10 minutes before rinsing.\n3. For Fever: Drink juice mixed with warm water.",
        whenToApply: "For cough, fever, or minor skin discoloration.",
        cautions: "Acidic—may irritate stomach in people with ulcers or GERD; avoid on open wounds."
      },
      {
        name: "Camote Tops – Sweet Potato Leaves",
        description: "Nutritious leafy vegetable rich in antioxidants and medicinal value, often used to promote recovery and improve blood health.",
        purpose: "Used for dengue recovery, anemia, and constipation.",
        preparation: "1. For Dengue Recovery: Boil leaves for 15–20 minutes; drink decoction to support platelet count.\n2. For Anemia: Eat steamed leaves regularly.\n3. For Constipation: Eat blanched leaves.",
        whenToApply: "For weakness, low blood count, or constipation.",
        cautions: "Safe as food, but excessive decoction may cause diarrhea."
      },
      {
        name: "Camphor Tree – Tagulamos (Kapur / Laurus camphora)",
        description: "An evergreen tree with aromatic leaves used in traditional medicine for muscle pain and respiratory relief.",
        purpose: "Used for muscle pain, cough, and congestion.",
        preparation: "1. For Muscle Pain: Mix camphor oil with coconut oil and massage on affected area.\n2. For Cough Relief: Inhale steam from hot water with 2–3 drops of camphor oil.",
        whenToApply: "For body aches or congested chest.",
        cautions: "Do not ingest camphor oil; toxic in large amounts; avoid use on infants."
      },
      {
        name: "Carrot – Lugas",
        description: "Root vegetable rich in vitamins and beta-carotene, beneficial for eyesight and digestion.",
        purpose: "Used for vision health, wound healing, and constipation.",
        preparation: "1. For Vision: Eat raw or lightly steamed carrots daily.\n2. For Wound Healing: Apply grated raw carrot on wounds.\n3. For Constipation: Drink fresh carrot juice in the morning.",
        whenToApply: "For eye health, constipation, or wound healing.",
        cautions: "Too much beta-carotene may cause skin yellowing; monitor sugar levels if diabetic."
      },
      {
        name: "Cassava – Kamoteng Kahoy",
        description: "A starchy root crop and leafy plant widely used as food and medicine in rural areas.",
        purpose: "Used for fatigue and skin irritation.",
        preparation: "1. For Fatigue: Boil young leaves for 15–20 minutes to remove toxins; eat with meals.\n2. For Skin Irritation: Apply mashed boiled leaves on affected area.",
        whenToApply: "For tiredness or minor skin irritation.",
        cautions: "Raw cassava contains toxins — must be thoroughly cooked; avoid in people with kidney problems."
      },
      {
        name: "Catmon – Dillenia philippinensis",
        description: "Native fruit tree with sour fruit; leaves and bark have medicinal properties.",
        purpose: "Used for cough and mouth sores.",
        preparation: "1. For Cough: Decoction of bark and leaves taken twice daily.\n2. For Mouth Sores: Gargle with cooled decoction.",
        whenToApply: "For cough or mouth inflammation.",
        cautions: "Avoid excessive intake — may irritate stomach lining."
      },
      {
        name: "Chili Pepper – Siling Labuyo",
        description: "Small, spicy pepper rich in capsaicin.",
        purpose: "Used for arthritis pain, nasal congestion, and metabolism boost.",
        preparation: "1. For Arthritis Pain: Apply oil infused with crushed chili to affected area.\n2. For Nasal Congestion: Inhale steam with chili-infused water.\n3. For Weight Loss Aid: Add small amounts to meals to boost metabolism.",
        whenToApply: "For joint pain, stuffy nose, or metabolism support.",
        cautions: "May cause skin and eye irritation; avoid excessive intake for those with ulcers or heartburn."
      },
      {
        name: "Chayote – Sayote",
        description: "A green pear-shaped vegetable with edible fruits, shoots, and leaves. Commonly used as a food and medicine for kidney and blood pressure health.",
        purpose: "Used for kidney stones, hypertension, and skin rashes.",
        preparation: "1. For Kidney Stones: Boil leaves in water and drink twice daily.\n2. For Hypertension: Eat boiled or steamed fruit regularly.\n3. For Skin Rashes: Crush fresh leaves and apply as poultice.",
        whenToApply: "For urinary or blood pressure issues, or skin rashes.",
        cautions: "Generally safe; may cause mild stomach discomfort if eaten raw in large amounts."
      },
      {
        name: "Coconut – Lubi",
        description: "Known as the 'Tree of Life,' coconut provides both food and medicine. Coconut water and oil are valued for hydration, wound care, and hair and skin health.",
        purpose: "Used for dehydration, skin burns, and lice removal.",
        preparation: "1. For Dehydration: Drink fresh coconut water.\n2. For Skin Burns: Apply virgin coconut oil gently to affected area.\n3. For Lice Removal: Apply coconut oil to scalp overnight, then rinse in morning.",
        whenToApply: "For dehydration, sunburns, or scalp care.",
        cautions: "Generally safe; excessive coconut water may affect electrolyte balance."
      },
      {
        name: "Coriander – Wansoy",
        description: "An aromatic culinary herb that supports digestion and helps relieve inflammation. Its seeds and leaves contain soothing oils beneficial to the stomach and joints.",
        purpose: "Used for indigestion, bloating, and mild joint pain.",
        preparation: "1. For Indigestion: Boil 1 tsp of seeds in 1 cup water for 10 minutes, drink warm after meals.\n2. For Joint Pain: Crush fresh leaves into a paste and apply to sore joints.",
        whenToApply: "For upset stomach, bloating, or mild body pain.",
        cautions: "Avoid if allergic to coriander or similar herbs."
      },
      {
        name: "Cucumber – Pipino",
        description: "A hydrating vegetable rich in water and nutrients, used for cooling, soothing, and refreshing the body. Helps lower blood pressure and reduce puffiness.",
        purpose: "Used for skin cooling, high blood pressure, and eye puffiness.",
        preparation: "1. For Skin Cooling: Apply fresh cucumber slices on the face for 10 minutes.\n2. For High Blood Pressure: Drink cucumber juice daily.\n3. For Eye Puffiness: Place chilled slices over eyes for 10 minutes.",
        whenToApply: "For tired eyes, heat rash, or high blood pressure.",
        cautions: "Safe for general use; avoid excessive juice intake for those with kidney problems."
      },
      {
        name: "Dalandan – Native Orange",
        description: "A local citrus fruit with a sour-sweet taste and rich vitamin C content, often used for treating colds and boosting immunity.",
        purpose: "Used for cough, cold, sore throat, and general body weakness.",
        preparation: "1. For Cough & Cold: Mix fresh dalandan juice with honey and drink 1–2 times daily.\n2. For Sore Throat: Gargle warm water mixed with dalandan juice and a pinch of salt.\n3. For Weakness: Eat the fresh fruit or drink juice to restore energy.",
        whenToApply: "During cough, colds, sore throat, or fatigue.",
        cautions: "Acidic; avoid in people with stomach ulcers or GERD. May erode tooth enamel if taken in excess."
      },
      {
        name: "Damong Maria – Mugwort (Artemisia vulgaris)",
        description: "Aromatic shrub with silvery-green leaves and strong medicinal aroma. Traditionally valued as a stomach and menstrual pain reliever.",
        purpose: "Used for stomach ache, menstrual pain, and wound care.",
        preparation: "1. For Stomach Ache: Boil 5–7 leaves in 2 cups of water; drink ½ cup as needed.\n2. For Menstrual Pain: Drink the decoction twice daily during the menstrual cycle.\n3. For Skin Wounds: Crush fresh leaves and apply on affected area.",
        whenToApply: "For stomach discomfort, menstrual cramps, or minor wounds.",
        cautions: "Avoid during pregnancy; large doses may cause nausea or vomiting."
      },
      {
        name: "Duhat – Java Plum",
        description: "A tropical tree with purple, sweet-astringent fruits. Its bark and leaves are also used in folk medicine for blood sugar and digestion.",
        purpose: "Used for diabetes, diarrhea, and mouth ulcers.",
        preparation: "1. For Diabetes: Boil bark or leaves in water; drink ½ cup twice daily.\n2. For Diarrhea: Eat ripe fruit or take leaf decoction twice daily.\n3. For Mouth Ulcers: Gargle with fruit decoction or leaf tea.",
        whenToApply: "For high blood sugar, loose bowel, or mouth sores.",
        cautions: "May lower blood sugar significantly; monitor if on diabetic medication."
      },
      {
        name: "Dahon ng Saging – Banana Leaf",
        description: "Common household plant whose large green leaves are used as natural bandages and cooling wraps for wounds or burns.",
        purpose: "Used for burns, wounds, and skin inflammation.",
        preparation: "1. For Burns & Scalds: Wash banana leaf and apply directly to affected area to cool the skin.\n2. For Wound Dressing: Wrap wounds with a cleaned leaf as a natural bandage.\n3. For Fever: Use banana leaves for a cool compress.",
        whenToApply: "For fresh burns, cuts, or feverish body heat.",
        cautions: "External use only. Make sure the leaf is clean and pesticide-free before applying."
      },
      {
        name: "Duhat-duhat – Local Shrub",
        description: "A small local shrub similar to duhat but mainly valued for its astringent bark and leaves used to manage diarrhea.",
        purpose: "Used for diarrhea and stomach upset.",
        preparation: "1. Decoction: Boil bark and leaves in 3 cups water for 15 minutes; drink ½ cup twice daily.\n2. Gargle: Use cooled decoction for oral rinsing to relieve mouth ulcers.",
        whenToApply: "For loose bowel or mouth inflammation.",
        cautions: "Overuse may cause constipation; avoid long-term daily use."
      },
      {
        name: "Euphorbia – Tawa-tawa (Asthma Weed)",
        description: "A small grass-like weed known in Filipino folk medicine as a natural remedy for dengue recovery and asthma. It supports platelet count and strengthens the lungs.",
        purpose: "Used for dengue recovery, asthma, and skin wounds.",
        preparation: "1. For Dengue: Boil the whole washed plant (roots, stems, leaves) in 4 cups of water until reduced to half; drink ½ cup 3–4 times daily.\n2. For Asthma: Boil a handful of leaves and drink the decoction in small amounts once daily.\n3. For Wounds: Crush leaves and apply directly as poultice.",
        whenToApply: "For dengue recovery, breathing difficulty, or small cuts.",
        cautions: "Avoid overdose — can cause nausea and liver irritation. Not recommended for pregnant women or long-term use."
      },
      {
        name: "Eucalyptus – Kalipay Tree",
        description: "A tall aromatic tree with camphor-like scent; its oil and leaves are widely used to relieve cough, cold, and muscle pain.",
        purpose: "Used for cough, asthma, and muscle aches.",
        preparation: "1. For Cough & Cold: Inhale steam from hot water with 3–4 drops of eucalyptus oil.\n2. For Asthma Relief: Mix a few drops of eucalyptus oil with coconut oil and use as chest rub.\n3. For Wounds: Boil leaves and use cooled decoction to wash infected skin.",
        whenToApply: "For congestion, asthma, or muscle stiffness.",
        cautions: "Oil must always be diluted; ingestion is toxic. Avoid using on small children or near eyes."
      },
      {
        name: "Eggplant – Talong",
        description: "A common vegetable with purple skin, rich in fiber and antioxidants. It supports heart health and aids digestion.",
        purpose: "Used for high cholesterol, burns, and constipation.",
        preparation: "1. For High Cholesterol: Eat roasted or boiled eggplant regularly as part of meals.\n2. For Burns: Apply roasted eggplant skin directly to minor burns.\n3. For Constipation: Include in diet for fiber support.",
        whenToApply: "For high cholesterol, mild burns, or bowel sluggishness.",
        cautions: "Safe in moderation; may cause mild allergic reaction in sensitive individuals."
      },
      {
        name: "Elemi – Pili Resin Tree (Canarium luzonicum)",
        description: "A native tree producing fragrant resin used for healing wounds and relieving respiratory issues. Known locally as a natural disinfectant and aromatic healer.",
        purpose: "Used for cough, bronchitis, wounds, and stomach pain.",
        preparation: "1. For Cough & Bronchitis: Inhale steam with a small piece of resin or add a few drops of resin oil to hot water.\n2. For Wounds: Apply resin directly to affected area or mix with coconut oil.\n3. For Stomach Pain: Boil bark in water and drink as mild tea.",
        whenToApply: "For cough, wounds, or mild stomach discomfort.",
        cautions: "Resin may irritate sensitive skin. Avoid ingestion in large amounts; not recommended for pregnant women."
      }
];

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let currentCategory = "all";

const herbList = document.getElementById("herb-list");
const categoryButtons = document.querySelectorAll(".category");
const viewToggle = document.getElementById("viewToggle");

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

  document.querySelectorAll(".herb-card h3").forEach(title => {
    title.addEventListener("click", () => {
      const details = title.parentElement.querySelector(".herb-details");
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
