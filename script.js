// FULL HERBS DATABASE
const herbs = [
  {
    "id": 1,
    "name": "Akapulko",
    "local": "Akapulko Sibukaw",
    "bisaya": "Katanda",
    "english": "Ringworm Bush",
    "scientific": "Senna alata",
    "description": "A shrub with yellow flowers and long pods. Leaves contain antifungal compounds effective against ringworm and scabies.",
    "category": "Wound / Skin Conditions",
    "partUsed": "Leaves",
    "use": ["Ringworm", "Scabies", "Eczema", "Fungal Infections"],
    "preparation": {
      "Ringworm": "Crush fresh leaves into a paste and apply directly to affected skin twice daily. Wash after 30 minutes.",
      "Scabies": "Boil about 10 leaves in 2 cups of water for 10 minutes. Let it cool and use the liquid to wash the affected area twice a day.",
      "Eczema": "Apply leaf paste thinly over the area for soothing relief; discontinue if irritation occurs.",
      "Fungal Infections": "Use decoction (boiled leaves) as a skin rinse after bathing once daily until symptoms improve."
    },
    "caution": "Conduct a patch test before use. Avoid application on open wounds. Not for internal consumption. Discontinue if rash or irritation occurs. Keep out of reach of children and avoid contact with eyes.",
    "images": [
      { "part": "Leaf", "url": "akapulko-leaf.jpg" },
      { "part": "Flower", "url": "akapulko-flower.jpg" }
    ]
  },

  {
    "id": 2,
    "name": "Alagaw",
    "local": "Alagaw",
    "bisaya": "Alagaw",
    "english": "Premna / Fragrant Premna",
    "scientific": "Premna odorata",
    "description": "A small tree or shrub with aromatic leaves often used in traditional medicine. The leaves and roots are valued for their expectorant, antipyretic, and anti-inflammatory properties.",
    "category": "Respiratory / Fever / Digestive",
    "partUsed": "Leaves, Roots",
    "use": ["Cough", "Colds", "Fever", "Stomachache", "Indigestion"],
    "preparation": {
      "Cough": "Boil 10–12 fresh leaves in 2 cups of water for 10 minutes. Strain and drink half a cup 2–3 times daily.",
      "Colds": "Inhale steam from boiled leaves for 5–10 minutes to help clear nasal passages.",
      "Fever": "Drink decoction of leaves and roots (boiled for 15 minutes) 3 times daily until fever subsides.",
      "Stomachache": "Pound a few young leaves and mix with warm water. Drink half a cup to relieve discomfort.",
      "Indigestion": "Chew a few fresh leaves after meals or drink leaf decoction once daily."
    },
    "caution": "Avoid excessive intake as strong decoctions may cause stomach irritation. Not recommended for pregnant or breastfeeding women. Always consult a health professional if symptoms persist.",
    "images": [
      { "part": "Leaf", "url": "alagaw-leaf.jpg" },
      { "part": "Plant", "url": "alagaw-plant.jpg" }
    ]
  },

  {
    "id": 3,
    "name": "Ampalaya",
    "local": "Ampalaya",
    "bisaya": "Paliya",
    "english": "Bitter Melon",
    "scientific": "Momordica charantia",
    "description": "A climbing vine with bitter fruit widely used in traditional medicine. Known for its blood sugar–lowering properties and digestive benefits.",
    "category": "Diabetes / Digestion / Skin",
    "partUsed": "Leaves, Fruit",
    "use": ["Diabetes", "Indigestion", "Skin Rashes", "Worm Infestation"],
    "preparation": {
      "Diabetes": "Boil chopped leaves or sliced fruit (1 cup) in 2 cups of water for 10 minutes. Drink ½ cup before meals twice daily.",
      "Indigestion": "Eat sautéed young ampalaya leaves or drink a mild leaf decoction once daily after meals.",
      "Skin Rashes": "Pound fresh leaves and apply the juice to affected skin twice daily until rash subsides.",
      "Worm Infestation": "Eat 2 tablespoons of ampalaya seed pulp early morning on an empty stomach for 3 consecutive days."
    },
    "caution": "May lower blood sugar excessively if combined with diabetes medication. Avoid during pregnancy and breastfeeding due to potential uterine contractions. Not for small children in large amounts.",
    "images": [
      { "part": "Fruit", "url": "ampalaya-fruit.jpg" },
      { "part": "Leaf", "url": "ampalaya-leaf.jpg" }
    ]
  },

  {
    "id": 4,
    "name": "Atis",
    "local": "Atis",
    "bisaya": "Atis",
    "english": "Sugar Apple",
    "scientific": "Annona squamosa",
    "description": "A small fruit tree bearing sweet, scaly green fruit. Its leaves and seeds are used in folk medicine for skin and stomach ailments.",
    "category": "Digestive / Skin / Parasitic",
    "partUsed": "Leaves, Seeds, Fruit",
    "use": ["Indigestion", "Dysentery", "Lice", "Skin Infections"],
    "preparation": {
      "Indigestion": "Boil 5 leaves in 2 cups of water for 10 minutes. Strain and drink warm, once or twice daily.",
      "Dysentery": "Pound young leaves and extract the juice. Mix with a small amount of honey and drink twice a day.",
      "Lice": "Grind seeds into paste, mix with coconut oil, and apply on scalp for 15 minutes. Rinse thoroughly. Avoid contact with eyes.",
      "Skin Infections": "Apply crushed fresh leaves as poultice once daily on affected area."
    },
    "caution": "Seed paste is toxic if ingested; for external use only. Avoid during pregnancy. May cause skin irritation—do a patch test first.",
    "images": [
      { "part": "Fruit", "url": "atis-fruit.jpg" },
      { "part": "Leaf", "url": "atis-leaf.jpg" }
    ]
  },

  {
    "id": 5,
    "name": "Avocado",
    "local": "Abokado",
    "bisaya": "Abokado",
    "english": "Avocado",
    "scientific": "Persea americana",
    "description": "A fruit-bearing tree valued for its nutritious fruit. Leaves and seeds are used in traditional medicine for hypertension and digestive problems.",
    "category": "Heart / Digestive / Skin",
    "partUsed": "Leaves, Seed, Fruit",
    "use": ["High Blood Pressure", "Diarrhea", "Wound Healing"],
    "preparation": {
      "High Blood Pressure": "Boil 10 avocado leaves in 3 cups of water for 15 minutes. Drink 1 cup morning and evening.",
      "Diarrhea": "Dry and grind seed into fine powder. Mix 1 teaspoon with warm water and drink once daily until symptoms stop.",
      "Wound Healing": "Mash ripe fruit and apply as skin mask or paste to minor wounds to promote healing and moisturize skin."
    },
    "caution": "Avoid excessive leaf decoction as it may affect liver function. Pregnant women should not take concentrated leaf extracts. Seed preparations must be used cautiously and never raw.",
    "images": [
      { "part": "Fruit", "url": "avocado-fruit.jpg" },
      { "part": "Leaf", "url": "avocado-leaf.jpg" }
    ]
  },

  {
    "id": 6,
    "name": "Balbas Pusa",
    "local": "Balbas Pusa",
    "bisaya": "Balbas Pusa",
    "english": "Cat’s Whiskers",
    "scientific": "Orthosiphon aristatus",
    "description": "An herb with white, whisker-like flowers. Traditionally used as a diuretic and to help manage kidney and urinary problems.",
    "category": "Urinary / Kidney / Detox",
    "partUsed": "Leaves",
    "use": ["Kidney Stones", "Urinary Tract Infection", "Water Retention", "Detoxification"],
    "preparation": {
      "Kidney Stones": "Boil 1 cup of fresh leaves in 3 cups of water for 15 minutes. Drink 1 cup three times daily.",
      "Urinary Tract Infection": "Drink a mild decoction (10 leaves in 2 cups water, boiled 10 mins) twice daily for 5 days.",
      "Water Retention": "Drink one cup of decoction daily to stimulate urination.",
      "Detoxification": "Take as herbal tea (1 tsp dried leaves per cup) once daily for 1 week."
    },
    "caution": "Avoid excessive use to prevent electrolyte imbalance. Not advised for pregnant or breastfeeding women. Always stay hydrated when using this herb.",
    "images": [
      { "part": "Leaf", "url": "balbas-pusa-leaf.jpg" },
      { "part": "Flower", "url": "balbas-pusa-flower.jpg" }
    ]
  },

  {
    "id": 7,
    "name": "Banaba",
    "local": "Banaba",
    "bisaya": "Banaba",
    "english": "Queen’s Crape Myrtle",
    "scientific": "Lagerstroemia speciosa",
    "description": "A tree with purple flowers known for its leaves’ ability to lower blood sugar and promote urinary health.",
    "category": "Diabetes / Urinary / Weight Management",
    "partUsed": "Leaves",
    "use": ["Diabetes", "Urinary Problems", "Weight Loss"],
    "preparation": {
      "Diabetes": "Boil 1 cup of dried leaves in 4 cups of water for 15 minutes. Drink 1 cup before meals twice daily.",
      "Urinary Problems": "Drink ½ cup of the decoction three times daily for relief.",
      "Weight Loss": "Use as daily herbal tea (2–3 dried leaves steeped in hot water for 10 minutes)."
    },
    "caution": "May enhance the effect of diabetes medication. Avoid if experiencing low blood sugar. Long-term high doses are not advised.",
    "images": [
      { "part": "Leaf", "url": "banaba-leaf.jpg" },
      { "part": "Flower", "url": "banaba-flower.jpg" }
    ]
  },

  {
    "id": 8,
    "name": "Bawang",
    "local": "Bawang",
    "bisaya": "Ahos",
    "english": "Garlic",
    "scientific": "Allium sativum",
    "description": "A common kitchen herb and potent natural antibiotic used for high blood pressure, cholesterol, and infections.",
    "category": "Heart / Antibacterial / Respiratory",
    "partUsed": "Bulb",
    "use": ["High Blood Pressure", "Cholesterol", "Cough", "Infection"],
    "preparation": {
      "High Blood Pressure": "Eat 1–2 raw cloves daily or mix with honey on an empty stomach.",
      "Cholesterol": "Crush 3 cloves and steep in warm water for 10 minutes. Drink once daily.",
      "Cough": "Boil 3 crushed cloves in 1 cup of milk and drink before bedtime.",
      "Infection": "Apply crushed garlic directly on affected area; mix with coconut oil for milder effect."
    },
    "caution": "May cause stomach upset or burning when eaten raw. Avoid excessive use before surgery. Not recommended for people on blood-thinning medication.",
    "images": [
      { "part": "Bulb", "url": "bawang-bulb.jpg" },
      { "part": "Plant", "url": "bawang-plant.jpg" }
    ]
  },

  {
    "id": 9,
    "name": "Bayabas",
    "local": "Bayabas",
    "bisaya": "Bayabas",
    "english": "Guava",
    "scientific": "Psidium guajava",
    "description": "A small tropical tree with edible fruit and medicinal leaves known for treating wounds and stomach ailments.",
    "category": "Wound / Digestive / Oral Health",
    "partUsed": "Leaves, Fruit",
    "use": ["Wounds", "Diarrhea", "Toothache", "Mouth Ulcers"],
    "preparation": {
      "Wounds": "Boil 10 leaves in 2 cups of water for 10 minutes. Use cooled decoction to wash wounds twice daily.",
      "Diarrhea": "Drink ½ cup of leaf decoction 3 times a day until symptoms improve.",
      "Toothache": "Chew 2–3 fresh leaves for instant relief.",
      "Mouth Ulcers": "Use decoction as mouth rinse after meals."
    },
    "caution": "Avoid overuse as strong decoction may cause constipation. Not for chronic diarrhea without medical advice.",
    "images": [
      { "part": "Leaf", "url": "bayabas-leaf.jpg" },
      { "part": "Fruit", "url": "bayabas-fruit.jpg" }
    ]
  },

  {
    "id": 10,
    "name": "Bignay",
    "local": "Bignay",
    "bisaya": "Bignay",
    "english": "Bignay",
    "scientific": "Antidesma bunius",
    "description": "A tree producing small red fruits used for detoxification and managing blood pressure.",
    "category": "Heart / Detox / Urinary",
    "partUsed": "Leaves, Fruit",
    "use": ["High Blood Pressure", "Detoxification", "Urinary Problems"],
    "preparation": {
      "High Blood Pressure": "Boil 10 leaves in 3 cups of water for 15 minutes. Drink 1 cup twice daily.",
      "Detoxification": "Drink juice made from fresh ripe fruits once a day.",
      "Urinary Problems": "Drink mild leaf decoction (5 leaves per 2 cups water) twice daily."
    },
    "caution": "Avoid unripe fruits in large amounts—they can be slightly toxic. Pregnant women should avoid strong decoctions.",
    "images": [
      { "part": "Fruit", "url": "bignay-fruit.jpg" },
      { "part": "Leaf", "url": "bignay-leaf.jpg" }
    ]
  },

  {
    "id": 11,
    "name": "Bitter Cola",
    "local": "Ampalaya",
    "bisaya": "Paliya",
    "english": "Bitter Gourd",
    "scientific": "Momordica charantia",
    "description": "A repeat entry referring to Bitter Gourd, also known as Ampalaya. Commonly used for diabetes and skin problems.",
    "category": "Diabetes / Skin / Digestion",
    "partUsed": "Leaves, Fruit",
    "use": ["Diabetes", "Fungal Infections", "Indigestion"],
    "preparation": {
      "Diabetes": "Drink ½ cup of boiled fruit decoction twice daily before meals.",
      "Fungal Infections": "Apply crushed leaf juice to affected skin twice daily.",
      "Indigestion": "Eat sautéed young leaves or drink light decoction after meals."
    },
    "caution": "Same as Ampalaya: avoid during pregnancy; excessive use may cause hypoglycemia.",
    "images": [
      { "part": "Fruit", "url": "bitter-gourd-fruit.jpg" },
      { "part": "Leaf", "url": "bitter-gourd-leaf.jpg" }
    ]
  },

  {
    "id": 12,
    "name": "Blumea",
    "local": "Sambong",
    "bisaya": "Sambong",
    "english": "Blumea",
    "scientific": "Blumea balsamifera",
    "description": "A fragrant medicinal shrub used for kidney stones, cough, and body detoxification.",
    "category": "Kidney / Respiratory / Detox",
    "partUsed": "Leaves",
    "use": ["Kidney Stones", "Cough", "Body Detox"],
    "preparation": {
      "Kidney Stones": "Boil 10 leaves in 2 cups of water for 15 minutes. Drink 1 cup twice daily for 5 days.",
      "Cough": "Boil leaves and drink the warm decoction twice a day.",
      "Body Detox": "Drink one cup of mild tea from dried leaves daily for 1 week."
    },
    "caution": "Avoid use in pregnancy and breastfeeding. May cause increased urination; drink plenty of water.",
    "images": [
      { "part": "Leaf", "url": "sambong-leaf.jpg" },
      { "part": "Plant", "url": "sambong-plant.jpg" }
    ]
  },

  {
    "id": 13,
    "name": "Caimito",
    "local": "Kaymito",
    "bisaya": "Kaymito",
    "english": "Star Apple",
    "scientific": "Chrysophyllum cainito",
    "description": "A fruit-bearing tree known for its sweet, milky fruit and medicinal leaves used for diabetes and diarrhea.",
    "category": "Diabetes / Digestive Health",
    "partUsed": "Leaves, Bark, Fruit",
    "use": ["Diabetes", "Diarrhea", "Cough"],
    "preparation": {
      "Diabetes": "Boil 10 young leaves in 2 cups of water for 15 minutes. Drink half a cup twice daily.",
      "Diarrhea": "Prepare a decoction of bark (1 tablespoon dried bark per cup of water). Drink one cup twice a day until symptoms improve.",
      "Cough": "Drink warm tea made from boiled leaves twice daily."
    },
    "caution": "Do not exceed recommended doses as the bark decoction may cause constipation. Pregnant women should avoid bark preparations. Always consult a doctor before long-term use.",
    "images": [
      { "part": "Leaf", "url": "caimito-leaf.jpg" },
      { "part": "Fruit", "url": "caimito-fruit.jpg" }
    ]
  },
  
  {
    "id": 14,
    "name": "Calamansi",
    "local": "Kalamansi",
    "bisaya": "Kalamansi",
    "english": "Calamondin",
    "scientific": "Citrofortunella microcarpa",
    "description": "A small citrus fruit rich in vitamin C. Commonly used for cough, sore throat, and skin whitening.",
    "category": "Cough / Skin Care / Digestive",
    "partUsed": "Fruit, Juice, Peel",
    "use": ["Cough", "Sore Throat", "Skin Whitening", "Indigestion"],
    "preparation": {
      "Cough": "Mix calamansi juice with honey and drink one tablespoon every 4 hours.",
      "Sore Throat": "Gargle with diluted calamansi juice (1 part juice to 3 parts warm water) twice daily.",
      "Skin Whitening": "Apply diluted juice on face or elbows for 5–10 minutes, then rinse. Use once daily only.",
      "Indigestion": "Drink a glass of warm water with calamansi juice before meals to stimulate digestion."
    },
    "caution": "Avoid applying undiluted juice on sensitive skin as it may cause irritation. Overuse may erode tooth enamel. Not advisable for those with acid reflux or ulcers.",
    "images": [
      { "part": "Fruit", "url": "calamansi-fruit.jpg" },
      { "part": "Tree", "url": "calamansi-tree.jpg" }
    ]
  },
  
  {
    "id": 15,
    "name": "Carmona",
    "local": "Tsaang Gubat",
    "bisaya": "Tsaang Gubat",
    "english": "Wild Tea",
    "scientific": "Carmona retusa",
    "description": "A shrub with glossy leaves used as herbal tea for stomach problems and skin allergies.",
    "category": "Digestive / Skin / Oral Health",
    "partUsed": "Leaves",
    "use": ["Stomachache", "Diarrhea", "Allergies", "Mouth Sores"],
    "preparation": {
      "Stomachache": "Boil 1 cup of leaves in 3 cups of water for 15 minutes. Drink half a cup 2–3 times daily.",
      "Diarrhea": "Drink 1/2 cup of strong leaf decoction three times a day after meals.",
      "Allergies": "Drink leaf tea daily and use cooled decoction to wash affected skin.",
      "Mouth Sores": "Use leaf decoction as mouth rinse twice daily."
    },
    "caution": "Do not drink excessively as it may cause nausea. Avoid during pregnancy. Stop use if allergic reaction occurs.",
    "images": [
      { "part": "Leaf", "url": "carmona-leaf.jpg" },
      { "part": "Plant", "url": "carmona-plant.jpg" }
    ]
  },
  
  {
    "id": 16,
    "name": "Cassava",
    "local": "Balanghoy",
    "bisaya": "Balanghoy",
    "english": "Cassava",
    "scientific": "Manihot esculenta",
    "description": "A root crop rich in carbohydrates, used both as food and traditional remedy for wounds and diarrhea.",
    "category": "Nutrition / Wound Care / Digestive",
    "partUsed": "Roots, Leaves",
    "use": ["Wounds", "Diarrhea", "Malnutrition"],
    "preparation": {
      "Wounds": "Apply grated raw cassava on minor wounds for cooling relief. Replace twice daily.",
      "Diarrhea": "Boil young leaves and drink the water once cooled, half a cup twice daily.",
      "Malnutrition": "Eat cooked cassava as part of a balanced diet. Avoid eating raw roots."
    },
    "caution": "Raw cassava contains cyanogenic compounds that can be toxic. Always cook thoroughly. Avoid for those with kidney disease or cyanide sensitivity.",
    "images": [
      { "part": "Root", "url": "cassava-root.jpg" },
      { "part": "Leaf", "url": "cassava-leaf.jpg" }
    ]
  },
  
  {
    "id": 17,
    "name": "Coconut",
    "local": "Lubi",
    "bisaya": "Lubi",
    "english": "Coconut",
    "scientific": "Cocos nucifera",
    "description": "A versatile tropical plant used for food, medicine, and skincare. Coconut water, oil, and meat all provide health benefits.",
    "category": "Hydration / Skin / Hair / Digestive",
    "partUsed": "Water, Oil, Meat, Shell",
    "use": ["Dehydration", "Dry Skin", "Hair Loss", "Constipation"],
    "preparation": {
      "Dehydration": "Drink fresh coconut water to replenish electrolytes.",
      "Dry Skin": "Apply virgin coconut oil to affected areas after bathing.",
      "Hair Loss": "Massage warm coconut oil into scalp and leave overnight. Rinse in the morning.",
      "Constipation": "Eat grated coconut meat or drink coconut milk once daily."
    },
    "caution": "Avoid excessive coconut water intake in kidney disease due to high potassium. People with oily skin should use coconut oil sparingly to prevent acne.",
    "images": [
      { "part": "Fruit", "url": "coconut-fruit.jpg" },
      { "part": "Oil", "url": "coconut-oil.jpg" }
    ]
  },

  {
    "id": 18,
    "name": "Damong Maria",
    "local": "Damong Maria",
    "bisaya": "Damong Maria",
    "english": "Wormwood",
    "scientific": "Artemisia vulgaris",
    "description": "A fragrant herb with gray-green leaves known for its healing and cleansing properties. Traditionally used for stomach pain, menstrual cramps, and wound disinfection.",
    "category": "Digestive / Women’s Health / Skin Care",
    "partUsed": "Leaves",
    "use": ["Stomachache", "Menstrual Cramps", "Wounds", "Appetite Loss"],
    "preparation": {
      "Stomachache": "Boil 10 leaves in 2 cups of water for 10 minutes. Strain and drink half a cup twice daily.",
      "Menstrual Cramps": "Prepare a warm compress using boiled leaves wrapped in cloth and place over the lower abdomen for relief.",
      "Wounds": "Pound fresh leaves and apply directly to the wound to prevent infection.",
      "Appetite Loss": "Drink a mild tea made from 5 leaves boiled in 1½ cups of water before meals."
    },
    "caution": "Do not use during pregnancy as it may cause uterine contractions. Avoid long-term use due to possible toxicity. Those with epilepsy should not use this herb internally.",
    "images": [
      { "part": "Leaf", "url": "damongmaria-leaf.jpg" },
      { "part": "Plant", "url": "damongmaria-plant.jpg" }
    ]
  },
  
  {
    "id": 19,
    "name": "Dangla",
    "local": "Dangla",
    "bisaya": "Dangla",
    "english": "Indian Mulberry",
    "scientific": "Vitex negundo",
    "description": "A medicinal shrub known for its aromatic leaves used in traditional remedies for cough, asthma, and rheumatism.",
    "category": "Respiratory / Pain Relief / Skin Care",
    "partUsed": "Leaves, Roots",
    "use": ["Cough", "Asthma", "Rheumatism", "Wounds"],
    "preparation": {
      "Cough": "Boil 10 leaves in 3 cups of water for 15 minutes. Strain and drink half a cup 3 times daily.",
      "Asthma": "Inhale steam from boiled leaves for 10 minutes daily to ease breathing.",
      "Rheumatism": "Pound leaves into a paste and apply warm on painful joints twice daily.",
      "Wounds": "Use leaf decoction as a wash to help disinfect and dry wounds."
    },
    "caution": "Avoid use during pregnancy and lactation. Large doses may cause stomach irritation. Always consult a doctor if respiratory symptoms persist.",
    "images": [
      { "part": "Leaf", "url": "dangla-leaf.jpg" },
      { "part": "Plant", "url": "dangla-plant.jpg" }
    ]
  },
  
  {
    "id": 20,
    "name": "Dita",
    "local": "Dita",
    "bisaya": "Dita",
    "english": "Devil’s Tree",
    "scientific": "Alstonia scholaris",
    "description": "A tall tree with milky sap traditionally used for fever, diarrhea, and malaria. Its bark is a known bitter tonic.",
    "category": "Fever / Malaria / Digestive",
    "partUsed": "Bark, Leaves",
    "use": ["Fever", "Malaria", "Diarrhea"],
    "preparation": {
      "Fever": "Boil 1 tablespoon of dried bark in 2 cups of water for 15 minutes. Drink ½ cup 2–3 times daily.",
      "Malaria": "Prepare a strong decoction from bark and drink one small cup twice daily during fever episodes.",
      "Diarrhea": "Drink a mild decoction from bark once in the morning and once at night until symptoms improve."
    },
    "caution": "Avoid excessive intake as the bark is highly bitter and can irritate the stomach. Not for pregnant women or children. Always consult a healthcare provider for suspected malaria.",
    "images": [
      { "part": "Bark", "url": "dita-bark.jpg" },
      { "part": "Leaf", "url": "dita-leaf.jpg" }
    ]
  },
  
  {
    "id": 21,
    "name": "Duhat",
    "local": "Lomboy",
    "bisaya": "Lomboy",
    "english": "Java Plum",
    "scientific": "Syzygium cumini",
    "description": "A tropical fruit tree producing dark purple fruits rich in antioxidants. Traditionally used for diabetes, diarrhea, and oral health.",
    "category": "Diabetes / Digestive / Oral Health",
    "partUsed": "Fruit, Leaves, Bark",
    "use": ["Diabetes", "Diarrhea", "Mouth Ulcers"],
    "preparation": {
      "Diabetes": "Eat fresh fruits daily or drink juice made from ripe duhat. Leaves can also be boiled for a mild tea twice daily.",
      "Diarrhea": "Drink decoction made from bark boiled for 10 minutes, half a cup twice daily.",
      "Mouth Ulcers": "Use leaf decoction as a gargle 2–3 times a day."
    },
    "caution": "Avoid excessive consumption as it may lower blood sugar too much. Not recommended for hypoglycemics. May cause constipation if eaten in large quantities.",
    "images": [
      { "part": "Fruit", "url": "duhat-fruit.jpg" },
      { "part": "Leaf", "url": "duhat-leaf.jpg" }
    ]
  },
  
  {
    "id": 22,
    "name": "Durian",
    "local": "Durian",
    "bisaya": "Durian",
    "english": "Durian",
    "scientific": "Durio zibethinus",
    "description": "A tropical fruit known as the 'king of fruits' for its strong odor and rich nutritional content. Used for energy, skin health, and fertility.",
    "category": "Energy / Skin / Reproductive Health",
    "partUsed": "Fruit, Seeds, Husk",
    "use": ["Fatigue", "Skin Health", "Fertility"],
    "preparation": {
      "Fatigue": "Eat small portions of ripe fruit for natural energy boost.",
      "Skin Health": "Use finely ground seeds mixed with honey as a facial mask once weekly.",
      "Fertility": "Consume fruit moderately as part of a balanced diet; it is believed to increase body warmth and vitality."
    },
    "caution": "Avoid overconsumption due to high sugar and fat content. Not recommended for diabetics or those with heart disease. Do not mix with alcohol—it may cause palpitations and indigestion.",
    "images": [
      { "part": "Fruit", "url": "durian-fruit.jpg" },
      { "part": "Seed", "url": "durian-seed.jpg" }
    ]
  },
];

// STORAGE
const storage = { 
  load() { 
    const d = JSON.parse(localStorage.getItem('herbApp') || '{}'); 
    herbs.forEach(h => { 
      h.notes = d.notes?.[h.id] || ''; 
      h.favorite = d.favorites?.includes(h.id) || false; 
    }); 
  }, 
  save() { 
    const d = { notes: {}, favorites: herbs.filter(h => h.favorite).map(h => h.id) }; 
    herbs.forEach(h => { if (h.notes) d.notes[h.id] = h.notes; }); 
    localStorage.setItem('herbApp', JSON.stringify(d)); 
  } 
}; 
storage.load();

// RENDER
function render(f = herbs) {
  const list = document.getElementById('herb-list');
  if (!list) return;
  list.innerHTML = f.map(h => `
    <div class="herb-card" onclick="openModal(${h.id})">
      ${document.body.classList.contains('grid') ? `<img src="${h.images[0].url}" alt="${h.name}">` : ''}
      <div class="card-content">
        <h3>
          ${h.name} | ${h.bisaya} | ${h.english}
          <span class="tag">${h.category}</span>
        </h3>
        <span class="star-btn ${h.favorite ? 'favorited' : ''}" onclick="toggleFav(${h.id}, event)"></span>
      </div>
    </div>
  `).join('');
}

// TOGGLE FAV
function toggleFav(id, e) {
  e.stopPropagation();
  const h = herbs.find(x => x.id === id);
  h.favorite = !h.favorite;
  storage.save();
  render();
}

// VIEW TOGGLE
document.getElementById('viewToggle')?.addEventListener('click', () => { 
  document.body.classList.toggle('grid'); 
  document.getElementById('viewToggle').textContent = document.body.classList.contains('grid') ? 'List' : 'Grid'; 
});

// CATEGORY FILTER
document.querySelectorAll('.category').forEach(b => b.addEventListener('click', () => { 
  document.querySelectorAll('.category').forEach(x => x.classList.remove('active')); 
  b.classList.add('active'); 
  const c = b.dataset.category; 
  render(c === 'Favorites' ? herbs.filter(h => h.favorite) : c === 'all' ? herbs : herbs.filter(h => h.category === c)); 
}));

// SEARCH
document.getElementById('searchInput')?.addEventListener('input', e => 
  render(herbs.filter(h => h.name.toLowerCase().includes(e.target.value.toLowerCase())))
);

// MODAL
const modal = document.getElementById('herb-modal'); 
document.querySelector('.close')?.addEventListener('click', () => modal.style.display = 'none'); 
window.addEventListener('click', e => e.target === modal && (modal.style.display = 'none'));

function openModal(id) {
  const h = herbs.find(x => x.id === id);
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <h2>${h.name} | ${h.bisaya} | ${h.english}${h.favorite ? ' Star' : ''}</h2>

    <!-- SWIPE GALLERY (TAP TO FULLSCREEN) -->
    <div class="image-swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          ${h.images.map((img, index) => `
            <div class="swiper-slide" onclick="openFullscreen(${id}, ${index})">
              <img src="${img.url}" alt="${h.name} ${img.part}" style="width:100%; height:180px; object-fit:cover; border-radius:12px; cursor:pointer;">
            </div>
          `).join('')}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <!-- INFO LIST -->
    <div class="info-list">
      <p><strong>Local:</strong> ${h.local}</p>
      <p><strong>English:</strong> ${h.english}</p>
      <p><strong>Scientific:</strong> <i>${h.scientific}</i></p>
      <p><strong>Description:</strong> <i>${h.description}</i></p>
      <p><strong>Part Used:</strong> <span class="part-badge">${h.partUsed}</span></p>

      <div class="prep-list">
        <strong>Preparation by Use:</strong>
        ${Object.entries(h.preparation || {}).map(([use, prep]) => `
          <p class="prep-item">
            <span class="use-label">${use}:</span> ${prep}
          </p>
        `).join('')}
      </div>

      <hr>
      <p><strong>Use:</strong> ${h.use}</p>
      <p><strong>Caution:</strong> ${h.caution}</p>
    </div>

    <div class="notes-section">
      <textarea id="notes-input" placeholder="Add your notes...">${h.notes}</textarea>
    </div>

    <div class="modal-buttons">
      <button class="modal-btn save-btn" onclick="save(${id},false)">Save</button>
      <button class="modal-btn save-suggest-btn" onclick="save(${id},true)">Save & Suggest</button>
      <button class="modal-btn ${h.favorite?'save-btn':'save-suggest-btn'}" onclick="fav(${id})">
        ${h.favorite?'Unfav':'Fav'}
      </button>
    </div>
  `;

  setTimeout(() => {
    new Swiper('.swiper-container', {
      loop: h.images.length > 1,
      pagination: { el: '.swiper-pagination', clickable: true },
      grabCursor: true,
    });
  }, 0);

  modal.style.display = 'block';
}

// SAVE & FAV
window.save = (id, suggest) => { 
  const h = herbs.find(x => x.id === id); 
  h.notes = document.getElementById('notes-input').value; 
  storage.save(); 
  alert(suggest ? "Saved! Try with Luya." : "Saved!"); 
  modal.style.display = 'none'; 
  render(); 
};

window.fav = (id) => { 
  const h = herbs.find(x => x.id === id); 
  h.favorite = !h.favorite; 
  storage.save(); 
  render(); 
  openModal(id); 
};

// MENU & FOOTER
document.getElementById('hamburgerMenu')?.addEventListener('click', () => {
  document.getElementById('sideMenu').classList.add('active');
});
document.getElementById('closeMenu')?.addEventListener('click', () => {
  document.getElementById('sideMenu').classList.remove('active');
});
window.addEventListener('click', (e) => {
  const menu = document.getElementById('sideMenu');
  if (menu.classList.contains('active') && !menu.contains(e.target) && e.target.id !== 'hamburgerMenu') {
    menu.classList.remove('active');
  }
});

function filterCategory(cat) {
  document.querySelectorAll('.footer-btn').forEach(btn => btn.classList.remove('active'));
  event.target.closest('.footer-btn').classList.add('active');
  const target = cat === 'all' ? document.querySelector('.category[data-category="all"]') 
               : cat === 'Favorites' ? document.querySelector('.category[data-category="Favorites"]') : null;
  if (target) target.click();
}

function openSupport() {
  alert("Support Center\n\nEmail: support@herbapp.com\nPhone: +63 912 345 6789\n\nOr tap 'Support / Help Center' in Menu");
}

function openDashboard() {
  const favCount = herbs.filter(h => h.favorite).length;
  const noteCount = Object.keys(JSON.parse(localStorage.getItem('herbApp') || '{}').notes || {}).length;
  alert(`My Dashboard\n\nFavorites: ${favCount}\nSaved Notes: ${noteCount}\n\nComing soon: Full dashboard view!`);
}

// RENDER AFTER DOM
document.addEventListener('DOMContentLoaded', () => {
  render();
});

// FULLSCREEN SWIPER GALLERY — FULL IMAGE + PINCH ZOOM
let fullscreenSwiper;

function openFullscreen(herbId, startIndex = 0) {
  const h = herbs.find(x => x.id === herbId);
  const modal = document.getElementById('fullscreen-modal');
  const wrapper = document.getElementById('fullscreen-swiper-wrapper');
  
  wrapper.innerHTML = '';
  
  h.images.forEach(img => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <div class="swiper-zoom-container">
        <img src="${img.url}" alt="${img.part}">
      </div>
    `;
    wrapper.appendChild(slide);
  });
  
  modal.style.display = 'block';
  
  if (fullscreenSwiper) {
    fullscreenSwiper.destroy(true, true);
  }
  
  setTimeout(() => {
    fullscreenSwiper = new Swiper('.fullscreen-swiper-container', {
      initialSlide: startIndex,
      loop: h.images.length > 1,
      pagination: { el: '.fullscreen-pagination', clickable: true },
      grabCursor: true,
      zoom: { maxRatio: 5, minRatio: 1 },
    });
    
    let lastTap = 0;
    wrapper.querySelectorAll('img').forEach(img => {
      img.onclick = (e) => {
        const now = Date.now();
        if (now - lastTap < 300) {
          const zoom = fullscreenSwiper.zoom;
          if (fullscreenSwiper.zoom.scale > 1) {
            zoom.out();
          } else {
            zoom.in();
          }
        }
        lastTap = now;
      };
    });
  }, 0);
}

// Close fullscreen
document.querySelector('.fullscreen-close').onclick = () => {
  document.getElementById('fullscreen-modal').style.display = 'none';
};

document.getElementById('fullscreen-modal').onclick = (e) => {
  if (e.target === document.getElementById('fullscreen-modal')) {
    e.target.style.display = 'none';
  }
};
