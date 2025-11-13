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
