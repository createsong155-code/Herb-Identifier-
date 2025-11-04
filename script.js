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
      },
      {
        name: "Fennel – Anis",
        description: "An aromatic herb with feathery leaves and sweet seeds, used to aid digestion and relieve respiratory discomfort.",
        purpose: "Used for bloating, cough, sore throat, and improving milk flow in nursing mothers.",
        preparation: "1. For Bloating: Crush 1 tsp fennel seeds, steep in 1 cup hot water for 10 mins, drink warm after meals.\n2. For Cough: Boil 1 tbsp seeds in 2 cups water until reduced by half, sip throughout the day.\n3. For Lactation: Mix 1 tsp fennel seeds in warm milk and drink once daily.",
        whenToApply: "For digestive gas, sore throat, or breastfeeding support.",
        cautions: "Avoid during pregnancy unless prescribed; may cause allergic reactions in sensitive people."
      },
      {
        name: "Gabi – Taro",
        description: "A root crop with edible tubers and leaves rich in fiber and minerals, often used in Filipino cuisine and folk remedies.",
        purpose: "Used for boils, insect bites, and digestive energy support.",
        preparation: "1. For Swelling: Wash gabi leaves, warm slightly, and apply as compress.\n2. For Boils: Crush leaves, mix with coconut oil, apply on affected area, and cover with clean cloth.\n3. For Nutrition: Boil tubers and eat as part of meal.",
        whenToApply: "For skin swelling, boils, or as a nutritious energy food.",
        cautions: "Always cook before eating; raw gabi contains calcium oxalate which can irritate mouth and throat."
      },
      {
        name: "Galing-galing – Red Ginger",
        description: "A spicy root known for anti-inflammatory and digestive properties, commonly used in herbal teas.",
        purpose: "Used for sore throat, nausea, and respiratory conditions.",
        preparation: "1. For Sore Throat: Boil 2–3 slices in 1 cup water, gargle while warm.\n2. For Nausea: Chew a thin slice raw or steep in hot water for tea.\n3. For Cough: Mix ginger decoction with honey and drink twice daily.",
        whenToApply: "During cough, nausea, or throat irritation.",
        cautions: "May cause heartburn; avoid excess if you have ulcers or bleeding disorders."
      },
      {
        name: "Gatas-gatas – Asthma Weed",
        description: "A small herb with white sap used in folk medicine for asthma, cough, and skin rashes.",
        purpose: "Used for asthma, cough, and wound healing.",
        preparation: "1. For Asthma: Boil a handful of plant in 2 cups water for 15 mins, drink ½ cup twice daily.\n2. For Wounds: Crush leaves, apply to affected skin.\n3. For Skin Rashes: Pound leaves, mix with coconut oil, apply to rash.",
        whenToApply: "For breathing issues or skin inflammation.",
        cautions: "Latex sap may irritate skin; avoid during pregnancy and breastfeeding."
      },
      {
        name: "Ginger – Luya",
        description: "Common kitchen spice with strong anti-inflammatory, antioxidant, and digestive benefits.",
        purpose: "Used for nausea, cough, sore throat, and joint pain.",
        preparation: "1. For Nausea: Slice fresh ginger, steep in hot water for 10 mins, drink warm.\n2. For Joint Pain: Crush ginger, wrap in cloth, and apply as a warm compress.\n3. For Cough: Boil ginger slices, add honey, drink twice daily.",
        whenToApply: "For cough, upset stomach, or body aches.",
        cautions: "Avoid excessive use in those with gallstones or bleeding disorders."
      },
      {
        name: "Gonggong – Sea Snail Herb",
        description: "A coastal delicacy sometimes used in traditional remedies for skin issues and nutrition.",
        purpose: "Used for skin ailments and as nutritious food.",
        preparation: "1. For Skin: Crush cooked snail meat with salt, apply to skin (folk use).\n2. For Food: Boil in salted water and eat.",
        whenToApply: "For skin ailments or as high-protein nourishment.",
        cautions: "Avoid if allergic to shellfish; improper preparation can cause food poisoning."
      },
      {
        name: "Gumamela – Hibiscus",
        description: "An ornamental flower widely used in Filipino folk medicine for cough, fever, and skin problems.",
        purpose: "Used for cough, colds, wounds, and skin rashes.",
        preparation: "1. For Cough: Boil flowers in 2 cups water for 10 mins, drink warm twice daily.\n2. For Wounds: Pound fresh flowers, apply juice on affected skin.\n3. For Rashes: Soak flowers in warm water and use as a skin bath.",
        whenToApply: "For cough, fever, or irritated skin.",
        cautions: "Generally safe; ensure flowers are pesticide-free before use."
      },
      {
        name: "Hagonoy – Chromolaena odorata",
        description: "A wild shrub with small white flowers used for wound healing, inflammation, and stomach ailments.",
        purpose: "Used for wounds, inflammation, and diarrhea.",
        preparation: "1. For Wounds: Crush leaves and apply to bleeding wound to stop bleeding.\n2. For Inflammation: Boil 10–15 leaves in 3 cups water, drink 1 cup twice daily.\n3. For Stomach Relief: Boil roots and drink warm decoction for diarrhea.",
        whenToApply: "For cuts, swelling, or digestive problems.",
        cautions: "Avoid prolonged use; not recommended for pregnant women due to possible liver effects."
      },
      {
        name: "Hilbas – Mugwort (Artemisia vulgaris)",
        description: "A traditional Visayan herb with a bitter taste, used for regulating menstruation and aiding digestion.",
        purpose: "Used for menstrual pain, stomach ache, and postpartum baths.",
        preparation: "1. For Menstrual Aid: Boil leaves in 3 cups water, drink ½ cup twice daily.\n2. For Stomach Ache: Make tea from dried leaves and drink after meals.\n3. For Postpartum Bath: Boil leaves in a pot of water and use for bathing.",
        whenToApply: "For menstrual cramps, postpartum recovery, or stomach pain.",
        cautions: "Avoid during pregnancy; may trigger uterine contractions."
      },
      {
        name: "Iba – Kamias (Averrhoa bilimbi)",
        description: "A sour fruit-bearing tree with medicinal fruits and leaves used in various home remedies.",
        purpose: "Used for sore throat, skin rashes, and high blood pressure.",
        preparation: "1. For Sore Throat: Boil fruits and gargle the decoction.\n2. For Skin Rash: Pound leaves and apply to itchy skin.\n3. For Hypertension: Drink diluted juice once daily.",
        whenToApply: "For throat inflammation, rashes, or high blood pressure.",
        cautions: "Highly acidic — may irritate stomach lining; avoid if you have ulcers."
      },
      {
        name: "Ikmo – Betel Leaf (Piper betle)",
        description: "A heart-shaped aromatic leaf commonly used in traditional medicine for oral and chest ailments.",
        purpose: "Used for toothache, chest congestion, and wound cleansing.",
        preparation: "1. For Toothache: Chew fresh leaf and hold juice near affected tooth.\n2. For Congestion: Warm leaf and place on chest for relief.\n3. For Wound Cleaning: Boil leaves and use cooled water to wash wounds.",
        whenToApply: "For chest cold, toothache, or wound cleaning.",
        cautions: "Avoid long-term chewing with areca nut — linked to oral cancer; external use is safer."
      },
      {
        name: "Fennel – Anis",
        description: "An aromatic herb with feathery leaves and sweet seeds, used to aid digestion and relieve respiratory discomfort.",
        purpose: "Used for bloating, cough, sore throat, and improving milk flow in nursing mothers.",
        preparation: "1. For Bloating: Crush 1 tsp fennel seeds, steep in 1 cup hot water for 10 mins, drink warm after meals.\n2. For Cough: Boil 1 tbsp seeds in 2 cups water until reduced by half, sip throughout the day.\n3. For Lactation: Mix 1 tsp fennel seeds in warm milk and drink once daily.",
        whenToApply: "For digestive gas, sore throat, or breastfeeding support.",
        cautions: "Avoid during pregnancy unless prescribed; may cause allergic reactions in sensitive people."
      },
      {
        name: "Gabi – Taro",
        description: "A root crop with edible tubers and leaves rich in fiber and minerals, often used in Filipino cuisine and folk remedies.",
        purpose: "Used for boils, insect bites, and digestive energy support.",
        preparation: "1. For Swelling: Wash gabi leaves, warm slightly, and apply as compress.\n2. For Boils: Crush leaves, mix with coconut oil, apply on affected area, and cover with clean cloth.\n3. For Nutrition: Boil tubers and eat as part of meal.",
        whenToApply: "For skin swelling, boils, or as a nutritious energy food.",
        cautions: "Always cook before eating; raw gabi contains calcium oxalate which can irritate mouth and throat."
      },
      {
        name: "Galing-galing – Red Ginger",
        description: "A spicy root known for anti-inflammatory and digestive properties, commonly used in herbal teas.",
        purpose: "Used for sore throat, nausea, and respiratory conditions.",
        preparation: "1. For Sore Throat: Boil 2–3 slices in 1 cup water, gargle while warm.\n2. For Nausea: Chew a thin slice raw or steep in hot water for tea.\n3. For Cough: Mix ginger decoction with honey and drink twice daily.",
        whenToApply: "During cough, nausea, or throat irritation.",
        cautions: "May cause heartburn; avoid excess if you have ulcers or bleeding disorders."
      },
      {
        name: "Gatas-gatas – Asthma Weed",
        description: "A small herb with white sap used in folk medicine for asthma, cough, and skin rashes.",
        purpose: "Used for asthma, cough, and wound healing.",
        preparation: "1. For Asthma: Boil a handful of plant in 2 cups water for 15 mins, drink ½ cup twice daily.\n2. For Wounds: Crush leaves, apply to affected skin.\n3. For Skin Rashes: Pound leaves, mix with coconut oil, apply to rash.",
        whenToApply: "For breathing issues or skin inflammation.",
        cautions: "Latex sap may irritate skin; avoid during pregnancy and breastfeeding."
      },
      {
        name: "Ginger – Luya",
        description: "Common kitchen spice with strong anti-inflammatory, antioxidant, and digestive benefits.",
        purpose: "Used for nausea, cough, sore throat, and joint pain.",
        preparation: "1. For Nausea: Slice fresh ginger, steep in hot water for 10 mins, drink warm.\n2. For Joint Pain: Crush ginger, wrap in cloth, and apply as a warm compress.\n3. For Cough: Boil ginger slices, add honey, drink twice daily.",
        whenToApply: "For cough, upset stomach, or body aches.",
        cautions: "Avoid excessive use in those with gallstones or bleeding disorders."
      },
      {
        name: "Gonggong – Sea Snail Herb",
        description: "A coastal delicacy sometimes used in traditional remedies for skin issues and nutrition.",
        purpose: "Used for skin ailments and as nutritious food.",
        preparation: "1. For Skin: Crush cooked snail meat with salt, apply to skin (folk use).\n2. For Food: Boil in salted water and eat.",
        whenToApply: "For skin ailments or as high-protein nourishment.",
        cautions: "Avoid if allergic to shellfish; improper preparation can cause food poisoning."
      },
      {
        name: "Gumamela – Hibiscus",
        description: "An ornamental flower widely used in Filipino folk medicine for cough, fever, and skin problems.",
        purpose: "Used for cough, colds, wounds, and skin rashes.",
        preparation: "1. For Cough: Boil flowers in 2 cups water for 10 mins, drink warm twice daily.\n2. For Wounds: Pound fresh flowers, apply juice on affected skin.\n3. For Rashes: Soak flowers in warm water and use as a skin bath.",
        whenToApply: "For cough, fever, or irritated skin.",
        cautions: "Generally safe; ensure flowers are pesticide-free before use."
      },
      {
        name: "Hagonoy – Chromolaena odorata",
        description: "A wild shrub with small white flowers used for wound healing, inflammation, and stomach ailments.",
        purpose: "Used for wounds, inflammation, and diarrhea.",
        preparation: "1. For Wounds: Crush leaves and apply to bleeding wound to stop bleeding.\n2. For Inflammation: Boil 10–15 leaves in 3 cups water, drink 1 cup twice daily.\n3. For Stomach Relief: Boil roots and drink warm decoction for diarrhea.",
        whenToApply: "For cuts, swelling, or digestive problems.",
        cautions: "Avoid prolonged use; not recommended for pregnant women due to possible liver effects."
      },
      {
        name: "Hilbas – Mugwort (Artemisia vulgaris)",
        description: "A traditional Visayan herb with a bitter taste, used for regulating menstruation and aiding digestion.",
        purpose: "Used for menstrual pain, stomach ache, and postpartum baths.",
        preparation: "1. For Menstrual Aid: Boil leaves in 3 cups water, drink ½ cup twice daily.\n2. For Stomach Ache: Make tea from dried leaves and drink after meals.\n3. For Postpartum Bath: Boil leaves in a pot of water and use for bathing.",
        whenToApply: "For menstrual cramps, postpartum recovery, or stomach pain.",
        cautions: "Avoid during pregnancy; may trigger uterine contractions."
      },
      {
        name: "Iba – Kamias (Averrhoa bilimbi)",
        description: "A sour fruit-bearing tree with medicinal fruits and leaves used in various home remedies.",
        purpose: "Used for sore throat, skin rashes, and high blood pressure.",
        preparation: "1. For Sore Throat: Boil fruits and gargle the decoction.\n2. For Skin Rash: Pound leaves and apply to itchy skin.\n3. For Hypertension: Drink diluted juice once daily.",
        whenToApply: "For throat inflammation, rashes, or high blood pressure.",
        cautions: "Highly acidic — may irritate stomach lining; avoid if you have ulcers."
      },
      {
        name: "Ikmo – Betel Leaf (Piper betle)",
        description: "A heart-shaped aromatic leaf commonly used in traditional medicine for oral and chest ailments.",
        purpose: "Used for toothache, chest congestion, and wound cleansing.",
        preparation: "1. For Toothache: Chew fresh leaf and hold juice near affected tooth.\n2. For Congestion: Warm leaf and place on chest for relief.\n3. For Wound Cleaning: Boil leaves and use cooled water to wash wounds.",
        whenToApply: "For chest cold, toothache, or wound cleaning.",
        cautions: "Avoid long-term chewing with areca nut — linked to oral cancer; external use is safer."
      },
      {
        name: "Jatropha – Tuba-tuba (Jatropha curcas)",
        description: "A small tree with milky sap, commonly grown as a backyard medicinal plant. Known for its strong anti-inflammatory and healing properties.",
        purpose: "Used for rheumatism, insect bites, and wound cleaning.",
        preparation: "1. For Rheumatism: Heat leaves lightly and apply as a warm compress on aching joints.\n2. For Insect Bites: Crush fresh leaves and apply directly on the bite.\n3. For Wound Cleaning: Boil leaves in water and wash wounds with the decoction.",
        whenToApply: "For joint pain, skin irritation, or minor wounds.",
        cautions: "Sap is toxic if swallowed; external use only. Wash hands after handling."
      },
      {
        name: "Jasmine – Sampaguita (Jasminum sambac)",
        description: "The national flower of the Philippines, known for its fragrant white blooms and soothing properties. Used in folk medicine for calming and treating headaches.",
        purpose: "Used for headaches, fever, and relaxation.",
        preparation: "1. For Headache: Crush fresh flowers and apply on the forehead.\n2. For Fever: Boil leaves and use as sponge bath.\n3. For Relaxation: Soak flowers in warm water and use for aromatherapy or bath.",
        whenToApply: "For stress, fever, or headaches.",
        cautions: "Safe for external use; avoid internal ingestion of large amounts."
      },
      {
        name: "Jampong – Mixed Garden Herbs (Folk Blend)",
        description: "A traditional Visayan herbal mixture of boiled backyard herbs like alugbati, oregano, and tanglad used to cleanse the body and relieve cough or fatigue.",
        purpose: "Used for cough, fever, and body detox.",
        preparation: "1. Decoction: Combine handfuls of mixed herbs (e.g., oregano, alugbati, tanglad), boil in 4 cups of water until reduced to half, drink ½ cup twice daily.\n2. Steam Inhalation: Use hot decoction for steam bath to relieve congestion.",
        whenToApply: "For fever, cough, or fatigue.",
        cautions: "Avoid excessive intake; may cause dizziness if too concentrated."
      },
      {
        name: "Jus Kalabo – Oregano Juice",
        description: "A strong herbal juice extracted from fresh oregano leaves; used for cough, sore throat, and mild infections.",
        purpose: "Used for cough, colds, and sore throat.",
        preparation: "1. For Cough Relief: Crush fresh leaves, extract the juice, and take 1 tablespoon twice daily.\n2. For Sore Throat: Mix juice with honey and sip slowly.\n3. For Nasal Congestion: Inhale steam from oregano leaf decoction.",
        whenToApply: "For cough, sore throat, or nasal congestion.",
        cautions: "Concentrated juice may cause throat irritation; dilute with water if too strong."
      },      
      {
        name: "Kalabo – Oregano",
        description: "A fragrant herb with antibacterial and anti-inflammatory properties, widely used in Filipino households as a remedy for cough and colds.",
        purpose: "Used for cough, colds, asthma, and skin infections.",
        preparation: "1. For Cough & Colds: Boil 5–7 fresh leaves in 1 cup water for 5 minutes; drink warm.\n2. For Asthma: Crush leaves and inhale steam from boiled leaves for 10 minutes.\n3. For Skin Infections: Crush leaves and apply juice directly to affected area twice daily.",
        whenToApply: "When experiencing cough, colds, or skin irritation.",
        cautions: "Avoid excessive use during pregnancy. May cause allergic reactions in sensitive skin."
      },
      {
        name: "Kalabasa – Squash",
        description: "A nutrient-rich vegetable high in vitamin A and antioxidants. Commonly eaten and used for eye and skin health in folk medicine.",
        purpose: "Used for eye health, constipation, and skin soothing.",
        preparation: "1. For Eye Health: Eat steamed or boiled squash daily.\n2. For Constipation: Drink squash soup twice daily.\n3. For Skin Soothing: Mash boiled squash and apply as warm compress.",
        whenToApply: "For improving eyesight, relieving constipation, or calming skin irritation.",
        cautions: "Avoid overconsumption for people with diabetes unless blood sugar is monitored."
      },
      {
        name: "Kalachuchi – Frangipani (Plumeria acuminata)",
        description: "A fragrant flowering tree with milky sap, traditionally used for its anti-inflammatory and healing properties. Commonly found near homes and gardens in the Philippines.",
        purpose: "Used for wound cleaning, skin ulcers, and toothache.",
        preparation: "1. For Wound Cleaning: Boil bark or flowers in water; use cooled decoction to wash wounds.\n2. For Skin Ulcers: Apply mashed fresh leaves or sap (diluted) to affected skin.\n3. For Toothache: Warm a few drops of diluted sap and apply carefully to affected tooth using cotton.",
        whenToApply: "For wounds, ulcers, or minor pain relief.",
        cautions: "Latex sap may irritate skin; toxic if swallowed in large amounts. Avoid contact with eyes and open wounds."
      },
      {
        name: "Kamantigi – Touch-Me-Not / Impatiens balsamina",
        description: "A colorful flowering plant known for its soft stems and seed pods that burst when touched. Traditionally used for treating wounds, boils, and urinary issues.",
        purpose: "Used for wounds, boils, and urinary tract infections.",
        preparation: "1. For Wounds: Crush fresh leaves and apply directly to affected skin.\n2. For Boils: Pound leaves, mix with a small amount of coconut oil, and apply as poultice.\n3. For Urinary Problems: Boil 10 fresh leaves in 2 cups water until reduced by half; drink once daily.",
        whenToApply: "When having boils, minor wounds, or urinary discomfort.",
        cautions: "Avoid internal use during pregnancy. May cause mild skin irritation in sensitive individuals."
      },
      {
        name: "Kamias – Bilimbi (Averrhoa bilimbi)",
        description: "A sour fruit-bearing tree whose fruits and leaves are used for cough, skin care, and high blood pressure. Its natural acidity provides strong cleansing and detoxifying effects.",
        purpose: "Used for cough, sore throat, itchy skin, and high blood pressure.",
        preparation: "1. For Cough: Boil sliced fruits with sugar and water; drink syrup twice daily.\n2. For Skin Itch: Rub fresh sliced fruit on affected skin.\n3. For High Blood Pressure: Blend fruit with water and drink in small amounts.",
        whenToApply: "For respiratory issues, itchy skin, or hypertension.",
        cautions: "Avoid use in people with ulcers or acid reflux due to high acidity."
      },
      {
        name: "Kamote – Sweet Potato",
        description: "A starchy, nutritious root crop rich in beta-carotene, fiber, and antioxidants. Commonly eaten for energy and used in herbal traditions to improve digestion and skin health.",
        purpose: "Used for constipation, skin nourishment, and energy support.",
        preparation: "1. For Constipation: Eat steamed or boiled tubers daily.\n2. For Skin Care: Mash boiled kamote and apply on dry or irritated skin.\n3. For Energy: Eat baked or roasted tubers as part of meals.",
        whenToApply: "For constipation, low energy, or skin dryness.",
        cautions: "Safe when cooked; avoid raw consumption as it may cause stomach discomfort. Diabetics should monitor sugar intake."
      },
      {
        name: "Kamoteng Kahoy – Cassava (Manihot esculenta)",
        description: "A staple starchy root crop known for its leaves and tubers used as food and medicine in rural areas. Provides strength and supports skin recovery when properly cooked.",
        purpose: "Used for fatigue and skin irritation.",
        preparation: "1. For Fatigue: Boil young cassava leaves for 15–20 minutes to remove toxins; eat with meals.\n2. For Skin Irritation: Apply mashed boiled leaves on affected area as poultice.\n3. For Nutrition: Eat boiled or grilled root as a source of energy.",
        whenToApply: "For tiredness, weak body, or skin irritation.",
        cautions: "Raw cassava contains cyanide compounds — always cook thoroughly. Avoid in people with kidney issues or thyroid problems."
      },
      {
        name: "Kangkong – Water Spinach",
        description: "A common leafy vegetable rich in iron and fiber, often used both as food and herbal remedy in the Philippines.",
        purpose: "Used for constipation, anemia, and minor burns.",
        preparation: "1. For Constipation: Eat steamed or sautéed kangkong leaves.\n2. For Anemia: Include fresh leaves in daily meals.\n3. For Burns: Apply crushed fresh leaves directly to affected area.",
        whenToApply: "During constipation, low iron levels, or minor skin burns.",
        cautions: "Avoid excessive intake for people prone to kidney stones (contains oxalates)."
      },
      {
        name: "Kantutay – Lantana (Lantana camara)",
        description: "A flowering plant with antiseptic and aromatic leaves. Widely used in rural herbal medicine for skin, respiratory, and mild headache relief.",
        purpose: "Used for skin rashes, cough, and mild headaches.",
        preparation: "1. For Skin Rashes: Boil leaves and use the water for washing.\n2. For Cough: Boil leaves in water, add honey, and drink moderately.\n3. For Headache: Crush leaves and inhale their aroma.",
        whenToApply: "When having skin irritation, cough, or mild headache.",
        cautions: "Leaves and unripe berries are toxic if ingested in large amounts; use only in small doses."
      },
      {
        name: "Kape – Coffee Plant",
        description: "The coffee plant produces beans and leaves used for energy and mild medicinal purposes. In folk medicine, its leaves are brewed for asthma and fatigue.",
        purpose: "Used for fatigue, asthma, and mild respiratory relief.",
        preparation: "1. For Fatigue: Drink brewed coffee in moderation.\n2. For Asthma: Boil coffee leaves in water for 10 minutes; drink small portions.\n3. For Cough: Inhale steam from boiled leaves mixed with ginger.",
        whenToApply: "For tiredness or mild breathing discomfort.",
        cautions: "Avoid excessive intake — may raise blood pressure or cause palpitations."
      },
      {
        name: "Kasla – Cassia Alata / Ringworm Bush",
        description: "A tall shrub similar to Akapulko, used for treating fungal skin infections such as ringworm and scabies. Known for its strong antifungal action.",
        purpose: "Used for fungal infections and skin cleansing.",
        preparation: "1. For Fungal Infections: Crush fresh leaves and apply paste twice daily.\n2. For Skin Cleansing: Boil leaves and use decoction as body wash.",
        whenToApply: "When treating ringworm, scabies, or itchy skin.",
        cautions: "For external use only. Avoid ingestion; may cause stomach discomfort."
      },
      {
        name: "Katuray – Vegetable Hummingbird Tree (Sesbania grandiflora)",
        description: "A small tree with edible white or pink flowers and leaves, used traditionally to relieve colds and soothe skin irritations.",
        purpose: "Used for cough, colds, and skin irritation.",
        preparation: "1. For Colds: Boil flowers in water for 10 minutes; drink as tea.\n2. For Skin Irritation: Crush flowers and apply to affected area.\n3. For Cough: Drink flower tea twice daily with honey.",
        whenToApply: "When having cold, cough, or skin rashes.",
        cautions: "Avoid excessive use during pregnancy; consult a doctor if taken internally."
      },
      {
        name: "Lagundi – Five-Leaved Chaste Tree (Vitex negundo)",
        description: "A widely recognized medicinal shrub in the Philippines, officially endorsed by the DOH for its proven benefits in treating cough, asthma, and fever.",
        purpose: "Used for cough, asthma, fever, and headache relief.",
        preparation: "1. For Cough & Asthma: Boil 5–7 fresh leaves in 2 cups of water for 10–15 minutes; drink half a cup 3× daily.\n2. For Headache: Pound fresh leaves and apply to forehead as poultice.\n3. For Fever: Drink leaf decoction twice daily until temperature lowers.",
        whenToApply: "During cough, colds, fever, or headache episodes.",
        cautions: "Avoid use during pregnancy unless advised by a healthcare provider. Prolonged excessive use may cause mild stomach irritation."
      },
      {
        name: "Lemongrass – Tanglad",
        description: "An aromatic tropical grass known for its refreshing citrus scent. It helps relieve stomach pain, fever, stress, and promotes relaxation.",
        purpose: "Used for stomach pain, fever, and stress relief.",
        preparation: "1. For Stomach Pain: Boil 3–5 stalks in 3 cups water for 10 minutes; drink ½ cup while warm.\n2. For Fever: Bathe in cooled boiled lemongrass water or apply compress.\n3. For Stress Relief: Inhale steam from boiling lemongrass or use as tea before bed.",
        whenToApply: "For stomach discomfort, fever, or anxiety.",
        cautions: "Avoid in early pregnancy as it may stimulate uterine contractions. May slightly lower blood pressure."
      },
      {
        name: "Linga – Sesame (Sesamum indicum)",
        description: "Small nutrient-rich seeds known for their high calcium, iron, and healthy fat content. Often used in Filipino food and traditional medicine.",
        purpose: "Used to improve lactation, soften skin, and strengthen bones.",
        preparation: "1. For Lactating Mothers: Eat 1–2 tablespoons of roasted sesame seeds daily or mix in meals.\n2. For Skin Softening: Apply sesame oil directly on skin after bath.\n3. For Nutritional Support: Add ground sesame to porridge or desserts.",
        whenToApply: "Daily for nourishment or as topical oil for dry skin.",
        cautions: "Avoid if allergic to nuts or seeds. Consume moderately due to high calorie content."
      },
      {
        name: "Luya – Ginger (Zingiber officinale)",
        description: "A common kitchen spice with strong anti-inflammatory and warming properties. Used traditionally to relieve sore throat, nausea, and colds.",
        purpose: "Used for sore throat, nausea, cough, and body pain.",
        preparation: "1. For Sore Throat: Boil 4–5 slices of ginger in 2 cups of water for 10 minutes; drink warm tea.\n2. For Nausea: Chew a thin raw slice or sip ginger tea slowly.\n3. For Joint Pain: Pound ginger and apply as warm compress over sore area.",
        whenToApply: "During cold weather, sore throat, or after meals to aid digestion.",
        cautions: "Avoid excessive intake during pregnancy; may interact with blood-thinning medicines. May cause mild heartburn if taken on an empty stomach."
      },
      {
        name: "Lumboy – Java Plum (Syzygium cumini)",
        description: "A tropical tree producing dark purple fruits with sweet-astringent flavor. Its bark, leaves, and fruits are known for blood sugar and digestive benefits.",
        purpose: "Used for diabetes, diarrhea, and mouth ulcers.",
        preparation: "1. For Diabetes: Boil bark or leaves in water and drink half a cup twice daily.\n2. For Diarrhea: Eat ripe fruit or take leaf decoction twice daily.\n3. For Mouth Ulcers: Gargle with fruit decoction or tea made from leaves.",
        whenToApply: "For high blood sugar, loose bowel, or mouth sores.",
        cautions: "May lower blood sugar significantly; monitor glucose levels if taking diabetic medication."
      },
      {
        name: "Lunas-bagon – Wild Pepper Leaf",
        description: "A local medicinal herb used for fever, inflammation, and digestive relief. The leaves are aromatic and used in decoction form in rural areas.",
        purpose: "Used for fever, stomach ache, and swelling.",
        preparation: "1. For Fever: Boil 5 leaves in 2 cups water for 10 minutes; drink half a cup warm.\n2. For Stomach Ache: Chew a fresh leaf or drink decoction.\n3. For Swelling: Pound leaves and apply as poultice on swollen area.",
        whenToApply: "For fever, indigestion, or local inflammation.",
        cautions: "Avoid long-term daily use; may cause mild drowsiness."
      },
      {
        name: "Malunggay – Moringa (Moringa oleifera)",
        description: "A highly nutritious tree known as the 'Miracle Tree', rich in vitamins A, C, calcium, and iron. Traditionally used to boost immunity and enhance milk production in mothers.",
        purpose: "Used to strengthen the immune system, support lactation, and improve overall vitality.",
        preparation: "1. For Immunity: Boil 1 cup fresh leaves in 2 cups of water for 10 minutes; drink daily as tea.\n2. For Nursing Mothers: Eat cooked leaves in soups or mix dried leaf powder into meals.\n3. For Energy: Drink tea made from dried leaves once daily.",
        whenToApply: "For low energy, weak immunity, or for breastfeeding support.",
        cautions: "Avoid excessive intake during pregnancy as it may stimulate uterine contractions. Overuse may cause digestive upset."
      },
      {
        name: "Mansanilya – Chamomile (Matricaria chamomilla)",
        description: "A fragrant flower known for its calming and soothing effects. Used as tea for relaxation, stomach pain, and inflammation.",
        purpose: "Used to relieve anxiety, promote sleep, and soothe digestion.",
        preparation: "1. For Relaxation: Steep 1 tablespoon dried flowers in 1 cup hot water for 10 minutes; drink before bedtime.\n2. For Stomach Pain: Drink chamomile tea after meals.\n3. For Inflammation: Soak a cloth in cooled tea and apply as warm compress.",
        whenToApply: "During anxiety, stress, or stomach pain episodes.",
        cautions: "Avoid if allergic to daisy or ragweed family plants. May interact with blood-thinning medications."
      },
      {
        name: "Mansanitas – Indian Jujube (Ziziphus mauritiana)",
        description: "A small fruit-bearing tree with vitamin-rich berries. Used for energy, digestion, and mild diarrhea treatment.",
        purpose: "Used for low energy, stomach upset, and mild diarrhea.",
        preparation: "1. For Digestion: Eat 3–5 fresh fruits daily.\n2. For Diarrhea: Boil leaves in 2 cups of water for 10 minutes; drink ½ cup twice daily.\n3. For Fatigue: Eat fruit regularly or drink fruit decoction.",
        whenToApply: "During digestive imbalance, fatigue, or diarrhea.",
        cautions: "Avoid excess intake if diabetic, as the fruit may increase blood sugar levels."
      },
      {
        name: "Mangosteen – Mangosteen (Garcinia mangostana)",
        description: "A tropical fruit known as the 'Queen of Fruits' due to its rich antioxidants and healing properties. The rind and pulp are used in folk medicine.",
        purpose: "Used for skin health, boosting immunity, and reducing inflammation.",
        preparation: "1. For Immunity: Eat fresh mangosteen pulp daily when in season.\n2. For Skin Health: Boil dried rind in 2 cups water for 15 minutes; drink half a cup daily.\n3. For Inflammation: Apply cooled rind decoction as wash on affected skin.",
        whenToApply: "For low immunity, skin issues, or inflammation.",
        cautions: "Avoid excessive rind tea; tannins may cause constipation or stomach upset."
      },
      {
        name: "Marigold – Marigold (Tagetes erecta)",
        description: "A bright yellow-orange flower commonly grown in gardens, known for its anti-inflammatory and wound-healing properties.",
        purpose: "Used for wounds, skin rashes, and inflammation.",
        preparation: "1. For Wounds: Crush fresh petals and apply directly to affected area.\n2. For Skin Inflammation: Steep petals in hot water for 10 minutes and use as warm wash.\n3. For Eye Relief: Apply cooled infusion with clean cloth on eyelids.",
        whenToApply: "For minor wounds, eye irritation, or skin redness.",
        cautions: "Test on small skin area before use. Avoid contact with open deep wounds."
      },
      {
        name: "Mustasa – Mustard Greens (Brassica juncea)",
        description: "A leafy vegetable with a spicy flavor, rich in vitamins and minerals. Traditionally used to improve circulation and digestion.",
        purpose: "Used for poor digestion, chest congestion, and joint pain.",
        preparation: "1. For Digestion: Eat cooked or fresh leaves regularly.\n2. For Chest Congestion: Crush mustard seeds, mix with warm water, and apply on chest for 10 minutes.\n3. For Joint Pain: Use seed poultice wrapped in cloth and apply to joints.",
        whenToApply: "During colds, congestion, or poor appetite.",
        cautions: "Do not apply mustard poultice on broken skin; may cause burns. Avoid large amounts for those with thyroid problems."
      },
      {
        name: "Nangka – Jackfruit (Artocarpus heterophyllus)",
        description: "A large tropical fruit rich in fiber and natural sugars. Young fruits and leaves are used medicinally for digestion and blood circulation.",
        purpose: "Used for energy, digestion, and constipation relief.",
        preparation: "1. For Energy: Eat fresh ripe fruit or boil unripe fruit for savory dishes.\n2. For Digestion: Boil young leaves in water for 10 minutes and drink as tea.\n3. For Constipation: Eat ripe fruit regularly with water.",
        whenToApply: "When fatigued, constipated, or low in energy.",
        cautions: "Avoid eating raw seeds. Excess fruit intake may raise blood sugar levels."
      },
      {
        name: "Neem – Neem Tree (Azadirachta indica)",
        description: "A powerful antibacterial and antifungal tree used in traditional Filipino and Indian medicine. Known for skin cleansing and detoxification.",
        purpose: "Used for acne, dandruff, and skin infections.",
        preparation: "1. For Skin Wash: Boil 10 leaves in 2 cups of water for 10 minutes; use as skin rinse.\n2. For Dandruff: Mix neem leaf decoction with coconut oil; apply on scalp for 20 minutes before rinsing.\n3. For Detox: Drink weak tea made from 2–3 leaves once a week only.",
        whenToApply: "For acne, itchy scalp, or skin infection.",
        cautions: "Avoid internal use during pregnancy. Strong decoctions may irritate stomach or liver if taken frequently."
      },
      {
        name: "Niyog – Coconut (Cocos nucifera)",
        description: "A versatile tropical tree known as the 'Tree of Life' — every part has food and medicinal value. Coconut water and oil are widely used in folk remedies.",
        purpose: "Used for hydration, skin and hair health, and wound healing.",
        preparation: "1. For Hydration: Drink fresh coconut water daily.\n2. For Skin & Hair: Apply virgin coconut oil to skin or scalp.\n3. For Burns & Wounds: Apply oil to affected area to promote healing.",
        whenToApply: "For dehydration, dry skin, or minor wounds.",
        cautions: "Avoid excessive coconut water if you have kidney issues or high potassium levels."
      },
      {
        name: "Niyog-niyogan – Chinese Honeysuckle (Quisqualis indica)",
        description: "A native climbing vine with fragrant flowers and medicinal seeds. Traditionally used as a deworming remedy for children and adults.",
        purpose: "Used to expel intestinal worms and improve digestion.",
        preparation: "1. For Deworming: Eat 2–4 toasted mature seeds for children or 8–10 for adults, once a month; chew thoroughly.\n2. For Stomach Cleansing: Boil leaves and drink as weak tea once weekly.",
        whenToApply: "Once monthly for deworming or as mild stomach cleanser.",
        cautions: "Seeds are toxic in excess; do not eat immature seeds. Avoid during pregnancy."
      },
      {
        name: "Naranja – Orange (Citrus sinensis)",
        description: "A vitamin C-rich fruit that strengthens immunity and promotes healthy skin. Also used for colds and fatigue.",
        purpose: "Used for colds, sore throat, and vitamin C deficiency.",
        preparation: "1. For Colds: Drink freshly squeezed orange juice 1–2× daily.\n2. For Sore Throat: Mix juice with warm water and honey for gargling.\n3. For Skin: Rub orange peel gently on dark spots, then rinse.",
        whenToApply: "For colds, low energy, or skin discoloration.",
        cautions: "Avoid in people with acid reflux or citrus allergy."
      },
      
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
