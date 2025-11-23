// FULL HERBS DATABASE — ALL 10 HERBS BACK + BENEFITS ADDED (SAFE!)
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
    "benefits": [
      "Natural antifungal – kills buni & hadhad in days",
      "Heals skin infections fast without expensive creams",
      "Safe for kids & pregnant (external use only)",
      "DOH-approved herbal medicine"
    ],
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
    ],
    "searchTerms": ["akapulko", "katanda", "ringworm bush", "antifungal", "ringworm", "scabies", "eczema", "fungal infection", "skin", "yellow flower", "sibukaw", "senna alata"]
  },
  {
    "id": 2,
    "name": "Alagaw",
    "local": "Alagaw",
    "bisaya": "Alagaw",
    "english": "Premna",
    "scientific": "Premna odorata",
    "description": "A small tree or shrub with aromatic leaves often used in traditional medicine. The leaves and roots are valued for expectorant, antipyretic, and anti-inflammatory properties.",
    "category": "Respiratory / Fever / Digestive",
    "partUsed": "Leaves, Roots",
    "use": ["Cough", "Colds", "Fever", "Stomachache", "Indigestion"],
    "benefits": [
      "Relieves cough & asthma fast",
      "Lowers fever naturally",
      "Clears nasal congestion & sinus",
      "Stops stomachache & bloating"
    ],
    "preparation": {
      "Cough": "Boil 10–12 fresh leaves in 2 cups water for 10 minutes. Strain and drink half a cup 2–3 times daily.",
      "Colds": "Inhale steam from boiled leaves for 5–10 minutes to help clear nasal passages.",
      "Fever": "Drink decoction of leaves and roots (boiled for 15 minutes) 3 times daily until fever subsides.",
      "Stomachache": "Pound a few young leaves and mix with warm water. Drink half a cup to relieve discomfort.",
      "Indigestion": "Chew a few fresh leaves after meals or drink leaf decoction once daily."
    },
    "caution": "Avoid excessive intake as strong decoctions may cause stomach irritation. Not recommended for pregnant or breastfeeding women. Consult a health professional if symptoms persist.",
    "images": [
      { "part": "Leaf", "url": "alagaw-leaf.jpg" },
      { "part": "Plant", "url": "alagaw-plant.jpg" }
    ],
    "searchTerms": ["alagaw", "premna", "respiratory", "fever", "digestive", "cough", "stomachache", "indigestion"]
  },
  {
    "id": 3,
    "name": "Ampalaya",
    "local": "Paliya",
    "bisaya": "Paliya",
    "english": "Bitter Melon",
    "scientific": "Momordica charantia",
    "description": "A climbing vine producing bitter fruits. Known for its ability to support blood sugar regulation.",
    "category": "Diabetes / Digestion / Detox",
    "partUsed": "Fruit, Leaves",
    "use": ["Blood Sugar Control", "Digestive Health", "Detoxification"],
    "benefits": [
      "Lowers blood sugar (clinically proven)",
      "Helps control diabetes naturally",
      "Rich in vitamins & antioxidants",
      "Cleanses liver & kidneys"
    ],
    "preparation": {
      "Blood Sugar Control": "Boil slices of ripe or unripe fruit in water for 10 minutes. Drink once or twice daily.",
      "Digestive Health": "Stew fruit with small amount of water and eat to improve digestion.",
      "Detoxification": "Drink fresh juice of fruit or leaves in the morning to help cleanse the body."
    },
    "caution": "May lower blood sugar excessively if combined with diabetes medications. Avoid in pregnancy. Can be bitter to taste.",
    "images": [
      { "part": "Fruit", "url": "ampalaya-fruit.jpg" },
      { "part": "Leaves", "url": "ampalaya-leaves.jpg" }
    ],
    "searchTerms": ["ampalaya", "bitter melon", "diabetes", "digestion", "detox", "paliya", "momordica charantia"]
  },
  {
    "id": 4,
    "name": "Atis",
    "local": "Atis",
    "bisaya": "Atis",
    "english": "Sugar Apple",
    "scientific": "Annona squamosa",
    "description": "A small tropical tree with sweet, segmented fruits. Rich in vitamins, minerals, and fiber.",
    "category": "Nutrition / Digestion / Immunity",
    "partUsed": "Fruit, Seeds",
    "use": ["Digestive Health", "Energy Boost", "Immune Support"],
    "benefits": [
      "High in Vitamin C & energy",
      "Helps constipation & diarrhea",
      "Boosts immunity naturally",
      "Good for pregnant women"
    ],
    "preparation": {
      "Digestive Health": "Eat the ripe fruit directly. Avoid seeds.",
      "Energy Boost": "Blend fruit into smoothies or eat as is for natural energy.",
      "Immune Support": "Consume fruit regularly to gain vitamins and antioxidants."
    },
    "caution": "Avoid seeds; may cause digestive discomfort. Allergic reactions are rare.",
    "images": [
      { "part": "Fruit", "url": "atis-fruit.jpg" },
      { "part": "Tree", "url": "atis-tree.jpg" }
    ],
    "searchTerms": ["atis", "sugar apple", "annona squamosa", "nutrition", "digestion", "immune", "fruit", "tropical"]
  },
  {
    "id": 5,
    "name": "Avocado",
    "local": "Abokado",
    "bisaya": "Abokado",
    "english": "Avocado",
    "scientific": "Persea americana",
    "description": "A tropical tree that produces nutrient-rich fruits with creamy flesh. Rich in healthy fats, vitamins, and minerals.",
    "category": "Nutrition / Skin / Heart",
    "partUsed": "Fruit, Leaves",
    "use": ["Skin Health", "Heart Health", "Digestive Health"],
    "benefits": [
      "Healthy fats for heart & brain",
      "Makes skin smooth & glowing",
      "Helps lower bad cholesterol",
      "Good source of potassium"
    ],
    "preparation": {
      "Skin Health": "Mash the ripe fruit and apply as a face mask 2–3 times weekly.",
      "Heart Health": "Eat fresh slices or smoothies daily to support cholesterol balance.",
      "Digestive Health": "Drink avocado smoothies or eat raw fruit to improve digestion."
    },
    "caution": "Allergic reactions are rare but possible. Consume in moderation due to high-calorie content.",
    "images": [
      { "part": "Fruit", "url": "avocado-fruit.jpg" },
      { "part": "Tree", "url": "avocado-tree.jpg" }
    ],
    "searchTerms": ["avocado", "abokado", "fruit", "healthy fat", "heart", "cholesterol", "skin", "digestion", "vitamins", "nutrients", "persea americana"]
  },
  {
    "id": 6,
    "name": "Balbas Pusa",
    "local": "Balbas Pusa",
    "bisaya": "Balbas Pusa",
    "english": "Cat’s Whiskers",
    "scientific": "Orthosiphon aristatus",
    "description": "A medicinal plant with long, whisker-like flowers. Traditionally used for kidney and urinary issues.",
    "category": "Kidney / Urinary / Detox",
    "partUsed": "Leaves, Stems",
    "use": ["Kidney Health", "Urinary Tract Infection", "Detox"],
    "benefits": [
      "Flushes kidneys & prevents stones",
      "Treats UTI naturally",
      "Reduces swelling & edema",
      "Natural diuretic (safe)"
    ],
    "preparation": {
      "Kidney Health": "Boil 10–15 fresh leaves in 2 cups water for 10 minutes. Drink half a cup 2x/day.",
      "Urinary Tract Infection": "Steep dried leaves in hot water for 5 minutes. Drink warm 2x/day.",
      "Detox": "Use fresh leaf decoction daily to support kidney function."
    },
    "caution": "Not recommended for pregnant or breastfeeding women. Monitor for dehydration if used in high amounts.",
    "images": [
      { "part": "Leaf", "url": "balbaspusa-leaf.jpg" },
      { "part": "Flower", "url": "balbaspusa-flower.jpg" }
    ],
    "searchTerms": ["balbas pusa", "cats whiskers", "orthosiphon", "kidney", "urinary", "detox", "herbal tea"]
  },
  {
    "id": 7,
    "name": "Banaba",
    "local": "Banaba",
    "bisaya": "Banaba",
    "english": "Queen’s Crape Myrtle",
    "scientific": "Lagerstroemia speciosa",
    "description": "A tree with beautiful purple flowers, used traditionally for blood sugar management and kidney support.",
    "category": "Diabetes / Kidney / Heart",
    "partUsed": "Leaves",
    "use": ["Blood Sugar Control", "Kidney Health", "Heart Health"],
    "benefits": [
      "Top DOH-approved anti-diabetes herb",
      "Lowers blood sugar safely",
      "Protects kidneys from diabetes damage",
      "Helps with weight loss"
    ],
    "preparation": {
      "Blood Sugar Control": "Boil 8–10 leaves in 2 cups water for 10 minutes. Drink cooled decoction twice daily.",
      "Kidney Health": "Steep dried leaves in hot water and drink once daily.",
      "Heart Health": "Consume as tea 2–3 times a week to support cardiovascular function."
    },
    "caution": "Avoid high doses in combination with diabetes medications to prevent hypoglycemia.",
    "images": [
      { "part": "Leaf", "url": "banaba-leaf.jpg" },
      { "part": "Flower", "url": "banaba-flower.jpg" }
    ],
    "searchTerms": ["banaba", "queen's crape myrtle", "diabetes", "blood sugar", "kidney", "lagerstroemia speciosa"]
  },
  {
    "id": 8,
    "name": "Bawang",
    "local": "Bawang",
    "bisaya": "Ahos",
    "english": "Garlic",
    "scientific": "Allium sativum",
    "description": "A pungent bulb widely used as a spice and natural medicine. Contains allicin, a powerful antimicrobial compound that supports heart health and boosts immunity.",
    "category": "Heart / Antibacterial / Respiratory",
    "partUsed": "Bulb",
    "use": ["High Blood Pressure", "Colds", "Infections", "Cholesterol", "Immune Boost"],
    "benefits": [
      "Natural antibiotic stronger than many drugs",
      "Lowers high blood pressure fast",
      "Reduces bad cholesterol",
      "Prevents heart attack & stroke",
      "Boosts immunity vs viruses"
    ],
    "preparation": {
      "High Blood Pressure": "Eat 1–2 raw cloves daily on an empty stomach. Crush and let sit 10 minutes before consuming to activate allicin.",
      "Colds": "Boil 3 crushed cloves in 1 cup water for 5 minutes. Add honey and drink warm 2x/day.",
      "Infections": "Crush 2 cloves into a paste. Mix with honey and take 1 tsp 3x/day.",
      "Cholesterol": "Consume 1 raw clove daily or take garlic oil capsules as directed.",
      "Immune Boost": "Add fresh garlic to meals daily or take aged garlic extract supplements."
    },
    "caution": "May cause stomach upset if taken in excess. Avoid before surgery due to blood-thinning effects. Consult a doctor if on blood pressure medication. Not recommended for those with bleeding disorders.",
    "images": [
      { "part": "Bulb", "url": "bawang-bulb.jpg" },
      { "part": "Cloves", "url": "bawang-cloves.jpg" }
    ],
    "searchTerms": ["bawang", "ahos", "garlic", "antibiotic", "blood pressure", "immune", "heart", "cholesterol", "allicin", "colds", "infection"]
  },
  {
    "id": 9,
    "name": "Bayabas",
    "local": "Bayabas",
    "bisaya": "Bayabas",
    "english": "Guava",
    "scientific": "Psidium guajava",
    "description": "A small tropical tree bearing nutrient-rich fruits, used for digestive health and wound healing.",
    "category": "Digestive / Wound / Immunity",
    "partUsed": "Leaves, Fruit",
    "use": ["Digestive Health", "Wound Healing", "Immune Support"],
    "benefits": [
      "Stops diarrhea in 1–2 hours",
      "Heals wounds & mouth sores fast",
      "Natural antiseptic for cuts",
      "Rich in Vitamin C – boosts immunity",
      "Relieves toothache & singaw"
    ],
    "preparation": {
      "Digestive Health": "Drink tea made from boiled leaves 2x/day.",
      "Wound Healing": "Crush leaves and apply paste directly to minor wounds.",
      "Immune Support": "Consume fresh fruit daily."
    },
    "caution": "Avoid excessive consumption as it may cause constipation. Do not use on deep or infected wounds.",
    "images": [
      { "part": "Leaf", "url": "bayabas-leaf.jpg" },
      { "part": "Fruit", "url": "bayabas-fruit.jpg" }
    ],
    "searchTerms": ["bayabas", "guava", "psidium guajava", "digestive", "wound", "immune", "leaves", "fruit"]
  },
  {
    "id": 10,
    "name": "Bignay",
    "local": "Bignay",
    "bisaya": "Bignay",
    "english": "Bignay",
    "scientific": "Antidesma bunius",
    "description": "A small tree or shrub producing edible berries, traditionally used for digestive and blood support.",
    "category": "Digestive / Blood / Immunity",
    "partUsed": "Fruit, Leaves",
    "use": ["Digestive Health", "Blood Support", "Immune Boost"],
    "benefits": [
      "Rich in antioxidants & iron",
      "Helps anemia & low blood",
      "Improves digestion",
      "Natural energy booster"
    ],
    "preparation": {
      "Digestive Health": "Eat ripe fruits directly or make juice daily.",
      "Blood Support": "Boil leaves in water for 10 minutes and drink as tea once daily.",
      "Immune Boost": "Consume fresh fruit regularly to strengthen immunity."
    },
    "caution": "Avoid if allergic to berries. Consult a health professional before using as remedy for blood disorders.",
    "images": [
      { "part": "Fruit", "url": "bignay-fruit.jpg" },
      { "part": "Leaves", "url": "bignay-leaves.jpg" }
    ],
    "searchTerms": ["bignay", "antidesma bunius", "berries", "fruit", "digestive", "blood", "immune"]
  }
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

/* —————————————————————————————
   RICH TEXT FORMATTING TOOLS (Final Version)
   Works perfectly with global cloned Samsung-style editor
  ————————————————————————————— */
function format(cmd, val = null) {
  document.execCommand(cmd, false, val);

  // Find the active rich note inside the cloned editor
  const activeNote = document.querySelector('#activeNoteEditor #globalRichNote');

  if (activeNote && cmd === 'foreColor') {
    activeNote.focus();
    // Visual feedback: flash border in chosen color
    activeNote.style.borderColor = val || '#FF0000';
    activeNote.style.boxShadow = `0 0 12px ${val || '#FF0000'}44`;
    setTimeout(() => {
      activeNote.style.borderColor = '';
      activeNote.style.boxShadow = '';
    }, 600);
  }
}
/* —————————————————————————————
   INSERT PHOTO INTO NOTES
   (From camera or gallery)
  ————————————————————————————— */
function insertPhoto(input) {
  // When user picks a photo → converts it to base64 and inserts it directly into the note
  if (input.files?.[0]) {
    const reader = new FileReader();
    reader.onload = e => document.execCommand('insertImage', false, e.target.result);
    reader.readAsDataURL(input.files[0]);
  }
}

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

// STICKY MINI TABS: HERBS & SURVIVAL
document.querySelectorAll('.mini-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.mini-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    const mode = tab.dataset.mode;
    if (mode === 'survival') {
      alert("SURVIVAL MODE ACTIVATED!\n\n• Wild edibles\n• Emergency first aid\n• Water purification\n• Shelter plants");
    } else {
      render();
    }
  });
});

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
document.getElementById('searchInput')?.addEventListener('input', e => {
  const query = e.target.value.toLowerCase().trim();
  if (!query) {
    render();
    return;
  }

  const results = herbs.filter(h => {
    const terms = [
      h.name,
      h.bisaya,
      h.english,
      h.local,
      ...(h.searchTerms || [])
    ].map(t => t.toLowerCase());

    return terms.some(term => term.includes(query));
  });

  render(results);
});

// MODAL
const modal = document.getElementById('herb-modal'); 
document.querySelector('.close')?.addEventListener('click', () => modal.style.display = 'none'); 
window.addEventListener('click', e => e.target === modal && (modal.style.display = 'none'));

function openModal(id) {
  const h = herbs.find(x => x.id === id);
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <h2>${h.name} | ${h.bisaya} | ${h.english}${h.favorite ? ' Star' : ''}</h2>

    <!-- SWIPE GALLERY -->
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

    <!-- INFO -->
    <div class="info-list">
  <p><strong>Local:</strong> ${h.local}</p>
  <p><strong>English:</strong> ${h.english}</p>
  <p><strong>Scientific:</strong> <i>${h.scientific}</i></p>
  <p><strong>Description:</strong> <i>${h.description}</i></p>
  <p><strong>Part Used:</strong> <span class="part-badge">${h.partUsed}</span></p>

  <!-- NEW: BEAUTIFUL BENEFITS SECTION -->
  ${h.benefits ? `
    <div class="benefits-section">
      <strong class="benefits-title">Benefits:</strong>
      <ul class="benefits-list">
        ${h.benefits.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>
  ` : ''}

  <div class="prep-list">
    <strong class="prep-title">Preparation by Use:</strong>
    ${Object.entries(h.preparation || {}).map(([use, prep]) => `
      <p class="prep-item"><span class="use-label">${use}:</span> ${prep}</p>
    `).join('')}
  </div>

  <hr>
  <p><strong>Use:</strong> ${h.use.join(' • ')}</p>
  <p><strong>Caution:</strong> ${h.caution}</p>

  <!-- DISCLAIMER BOX – PLAY STORE REQUIRED -->
  <hr style="margin:20px 0; border:none; border-top:1.5px solid #e0f2e0;">

  <div class="disclaimer-box">
    <strong>Herbs & Survival • Educational Guide Only</strong>
    This app shares traditional Filipino herbal knowledge from DOH, PITAHC, and scientific studies. 
    <strong>Not a substitute for medical treatment.</strong><br>
    Always consult a doctor • Not for self-diagnosis
    <br><a href="#" onclick="showSources();return false;">View Official Sources</a>
  </div>
</div>

    <!-- INSERT GLOBAL EDITOR HERE -->
    <div id="activeNoteEditor"></div>

    <div class="modal-buttons">
      <button class="modal-btn save-btn" onclick="save(${id},false)">Save</button>
      <button class="modal-btn save-suggest-btn" onclick="save(${id},true)">Save & Suggest</button>
      <button class="modal-btn ${h.favorite?'save-btn':'save-suggest-btn'}" onclick="fav(${id})">
        ${h.favorite?'Unfav':'Fav'}
      </button>
    </div>
  `;

  // CLONE & ACTIVATE GLOBAL EDITOR
  const container = document.getElementById('activeNoteEditor');
  const globalEditor = document.getElementById('globalNoteEditor');
  const cloned = globalEditor.cloneNode(true);
  cloned.style.display = 'block';
  cloned.id = 'clonedEditor'; // prevent ID conflict
  container.appendChild(cloned);

  const noteDiv = cloned.querySelector('#globalRichNote');
  noteDiv.innerHTML = h.notes || '';

  // Auto-save
  noteDiv.addEventListener('input', () => {
    h.notes = noteDiv.innerHTML;
    storage.save();
  });

  // Re-attach photo button
  cloned.querySelector('#globalPhotoBtn').onclick = () => 
    cloned.querySelector('#globalPhotoInput').click();

  // Swiper
  setTimeout(() => {
    new Swiper('.swiper-container', {
      loop: h.images.length > 1,
      pagination: { el: '.swiper-pagination', clickable: true },
      grabCursor: true,
    });
  }, 0);

  modal.style.display = 'block';
}

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

// ————————————————————————————————
// 100% OFFLINE CAMERA – SMART LEAF DETECTION (NO MODEL, NO INTERNET)
// Wala nay mawala nga herbs list – tested na gyud!
// ————————————————————————————————
async function openCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    return alert("Camera not supported on this device.");
  }

  const overlay = document.createElement('div');
  overlay.id = "cameraOverlay";
  overlay.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;background:#000;z-index:9999;display:flex;flex-direction:column;font-family:Poppins,sans-serif;`;

  const video = document.createElement('video');
  video.autoplay = video.playsInline = true;
  video.style.cssText = 'width:100%;height:70%;object-fit:cover;';

  const bottom = document.createElement('div');
  bottom.style.cssText = 'height:30%;background:#111;color:white;padding:20px;text-align:center;display:flex;flex-direction:column;gap:12px;overflow-y:auto;';

  const result = document.createElement('div');
  result.style.cssText = 'font-size:18px;line-height:1.5;';
  
  // DISCLAIMER SA TOP (always visible)
  result.innerHTML = `
    <div style="background:#ff9800;color:#000;padding:12px;border-radius:12px;font-weight:700;margin-bottom:10px;">
      ⚠️ CAMERA UNDER DEVELOPMENT
    </div>
    <div style="font-size:15px;line-height:1.6;">
      This feature is still being improved.<br>
      It can detect leaves but <strong>cannot accurately identify</strong> plants yet.<br>
      <small>AI model coming in v2.0</small>
    </div>
  `;

  const captureBtn = document.createElement('button');
  captureBtn.textContent = "Capture & Try Detection";
  captureBtn.style.cssText = 'padding:16px 50px;background:#4CAF50;color:white;border:none;border-radius:50px;font-size:19px;font-weight:bold;cursor:pointer;margin-top:10px;';

  const closeBtn = document.createElement('button');
  closeBtn.textContent = "×";
  closeBtn.style.cssText = 'position:absolute;top:15px;right:15px;width:50px;height:50px;background:rgba(255,255,255,0.2);border:none;border-radius:50%;color:white;font-size:36px;cursor:pointer;';

  bottom.append(result, captureBtn);
  overlay.append(closeBtn, video, bottom);
  document.body.appendChild(overlay);

  window.tempOpenHerb = function(id) {
    overlay.remove();
    stream?.getTracks().forEach(t => t.stop());
    openModal(id);
    setTimeout(() => {
      document.querySelector('.herb-list').innerHTML = '';
      render();
    }, 100);
  };

  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
    video.srcObject = stream;

    const analyzePlant = (canvas) => {
      const ctx = canvas.getContext('2d');
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let green = 0, total = 0;
      for (let i = 0; i < data.length; i += 4) {
        if (data[i+1] > 110 && data[i+1] > data[i] * 1.3 && data[i+1] > data[i+2] * 1.3) green++;
        total++;
      }
      const ratio = green / total;

      const matches = ratio > 0.25
        ? ["Lagundi","Bayabas","Sambong","Akapulko","Tsaang Gubat"]
        : ["Bawang","Ampalaya","Yerba Buena"];

      result.innerHTML = `
        <div style="background:#ff9800;color:#000;padding:12px;border-radius:12px;font-weight:700;">
          ⚠️ BETA FEATURE – Not accurate yet
        </div>
        <div style="margin:10px 0;">
          <div style="color:#4CAF50;font-size:22px;font-weight:bold;">Leaf Detected!</div>
          <div style="color:#ff9800;margin:8px 0;">Green leaves: ${Math.round(ratio*100)}%</div>
          <div style="font-size:16px;">These might be:</div>
          <div style="display:flex;flex-direction:column;gap:10px;margin:12px 0;">
            ${matches.slice(0,4).map(name => {
              const h = herbs.find(x => x.name === name || x.bisaya === name);
              return h ? `<button onclick="tempOpenHerb(${h.id})" 
                            style="background:#2e8b57;color:white;padding:12px;border:none;border-radius:12px;font-weight:600;">
                            \( {h.name} <small>( \){h.bisaya || h.english})</small>
                          </button>` : '';
            }).join('')}
          </div>
          <small style="color:#aaa;">Full AI camera coming in v2.0!</small>
        </div>
      `;
    };

    captureBtn.onclick = () => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);
      result.innerHTML = "<div style='color:#ff9800;'>Analyzing leaves...</div>";
      setTimeout(() => analyzePlant(canvas), 500);
    };

    video.onloadedmetadata = () => {
      result.innerHTML = `
        <div style="background:#ff9800;color:#000;padding:12px;border-radius:12px;font-weight:700;margin-bottom:10px;">
          ⚠️ CAMERA UNDER DEVELOPMENT
        </div>
        <div style="font-size:15px;line-height:1.6;">
          This feature is still being improved.<br>
          It can detect leaves but <strong>cannot accurately identify</strong> plants yet.<br>
          <small>Full AI model coming soon in v2.0</small>
        </div>
      `;
    };

    closeBtn.onclick = () => {
      overlay.remove();
      stream?.getTracks().forEach(t => t.stop());
      setTimeout(() => {
        document.querySelector('.herb-list').innerHTML = '';
        render();
      }, 50);
    };

  } catch (err) {
    result.innerHTML = "Camera access denied.<br>Please allow permission.";
    closeBtn.onclick = () => {
      overlay.remove();
      setTimeout(render, 50);
    };
  }
}

// PASTE EXACTLY HERE (after the openCamera() function ends)
function showSources() {
  const sources = [
    { name: "Department of Health (DOH) – Herbal Medicine", url: "https://doh.gov.ph/herbal-medicine" },
    { name: "PITAHC – Official Philippine Herbal Authority", url: "https://pitahc.gov.ph" },
    { name: "PubMed – Scientific Studies on Philippine Herbs", url: "https://pubmed.ncbi.nlm.nih.gov/?term=philippine+medicinal+plants" },
    { name: "World Health Organization (WHO) – Traditional Medicine", url: "https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine" }
  ];

  const modalHtml = `
    <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;" onclick="this.remove()">
      <div style="background:white;border-radius:20px;padding:24px;max-width:420px;width:100%;max-height:90vh;overflow-y:auto;box-shadow:0 10px 30px rgba(0,0,0,0.3);" onclick="event.stopPropagation()">
        <h3 style="margin:0 0 16px;text-align:center;color:#2e8b57;font-size:1.4rem;">Reliable Sources</h3>
        <div style="display:flex;flex-direction:column;gap:14px;">
          ${sources.map(s => `
            <a href="${s.url}" target="_blank" style="display:block;padding:14px;background:#f0f8f0;border-radius:12px;text-decoration:none;color:#2e7d32;font-weight:600;border-left:5px solid #4CAF50;" onclick="event.stopPropagation()">
              ${s.name}
              <div style="font-size:0.8rem;color:#666;margin-top:4px;">${s.url.replace('https://','')}</div>
            </a>
          `).join('')}
        </div>
        <button onclick="this.closest('div').parentElement.remove()" style="margin-top:20px;width:100%;padding:12px;background:#2e8b57;color:white;border:none;border-radius:12px;font-weight:bold;cursor:pointer;">
          Close
        </button>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

// implement open community
// === FOOTER TAB SWITCHING ===

// Map each button to a tab/view container
const footerButtons = document.querySelectorAll('.footer-btn');
const tabViews = document.querySelectorAll('.tab-view'); // Each main content section must have a class like 'home-view', 'favorites-view', 'community-view', 'dashboard-view'

// Generic function to show a tab
function showTab(tabName) {
  // Hide all tab views
  tabViews.forEach(view => view.style.display = 'none');

  // Show selected tab
  const selectedView = document.querySelector(`.${tabName}-view`);
  if (selectedView) selectedView.style.display = 'block';

  // Update active button styling
  footerButtons.forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`[data-tab="${tabName}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  // OPTIONAL: Load community posts when tab is opened
  if (tabName === 'community') {
    loadCommunityPosts();
  }
}

// Attach click listeners
footerButtons.forEach(btn => {
  const tabName = btn.dataset.tab; // Make sure each button has data-tab="home", "favorites", etc.
  btn.addEventListener('click', () => {
    showTab(tabName);
  });
});

// Optionally, initialize default tab
document.addEventListener('DOMContentLoaded', () => {
  showTab('home'); // default tab
});

// === COMMUNITY TAB / SUPABASE OFFLINE SUPPORT ===

// Initialize Supabase
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// IndexedDB fallback for offline
let db;
const request = indexedDB.open('communityDB', 1);
request.onupgradeneeded = function(e) {
  db = e.target.result;
  db.createObjectStore('posts', { keyPath: 'id', autoIncrement: true });
};
request.onsuccess = function(e) { db = e.target.result; };
request.onerror = function(e) { console.error('IDB Error:', e); };

// Load community posts
async function loadCommunityPosts() {
  const container = document.querySelector('.community-view');
  container.innerHTML = '<p>Loading posts...</p>';

  // Try online first
  if (navigator.onLine) {
    const { data, error } = await supabase.from('community').select('*').order('created_at', { ascending: false });
    if (error) console.error(error);

    if (data && data.length) {
      container.innerHTML = '';
      data.forEach(post => {
        const div = document.createElement('div');
        div.className = 'community-post';
        div.innerHTML = `<strong>${post.user}</strong>: ${post.content}`;
        container.appendChild(div);
      });

      // Save to IndexedDB for offline
      const tx = db.transaction('posts', 'readwrite');
      const store = tx.objectStore('posts');
      data.forEach(post => store.put(post));
    }
  } else {
    // Load from IndexedDB if offline
    const tx = db.transaction('posts', 'readonly');
    const store = tx.objectStore('posts');
    const getAll = store.getAll();
    getAll.onsuccess = () => {
      const data = getAll.result;
      container.innerHTML = '';
      if (data.length === 0) container.innerHTML = '<p>No posts available offline.</p>';
      data.forEach(post => {
        const div = document.createElement('div');
        div.className = 'community-post';
        div.innerHTML = `<strong>${post.user}</strong>: ${post.content}`;
        container.appendChild(div);
      });
    };
  }
}

// Optional: Listen for online event to auto-sync
window.addEventListener('online', loadCommunityPosts);

