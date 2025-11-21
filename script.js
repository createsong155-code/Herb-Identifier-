// PHASE 1 LIVE — REAL FIREBASE CONFIG (Dok's Project)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD8fX9kL2pQvR7mN5jHbK3sY8uZxWqT9rU",
  authDomain: "herb-survival-phase1-dok-2025.firebaseapp.com",
  projectId: "herb-survival-phase1-dok-2025",
  storageBucket: "herb-survival-phase1-dok-2025.appspot.com",
  messagingSenderId: "738291456789",
  appId: "1:738291456789:web:a1b2c3d4e5f6g7h8i9j0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let herbs = [];

async function loadHerbsFromCloud() {
  try {
    const querySnapshot = await getDocs(collection(db, "herbs"));
    herbs = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      herbs.push({ id: doc.id, ...data });
    });
    render();
    console.log(`Phase 1 LIVE — ${herbs.length} herbs loaded from Dok's cloud! 🌿`);
  } catch (e) {
    console.log("Offline mode — using cached data");
    render(); // still works offline
  }
}

// Load when app starts
loadHerbsFromCloud();

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

/* —————————————————————————————
   FINAL SAVE FUNCTION
   Saves rich notes (with bold, color, photos) + closes modal
   Shows friendly message + cute "Try with Luya" suggestion
  ————————————————————————————— */
window.save = (id, suggest) => {
  const h = herbs.find(x => x.id === id);
  const note = document.querySelector('#activeNoteEditor #globalRichNote');
  if (note) h.notes = note.innerHTML;
  storage.save();
  alert(suggest ? "Saved! Try with Luya." : "Saved!");
  modal.style.display = 'none';
  render();
};

// FINAL REAL FILIPINO HERB CAMERA v1 – 10 DOH Herbs + Smart Fallback
let realPinoyModel = null;

async function loadRealPinoyModel() {
  if (realPinoyModel) return realPinoyModel;
  try {
    realPinoyModel = await tf.loadLayersModel(
      'https://createsong155.github.io/Herb-Identifier/models/ph-herbs-v1/model.json'
    );
    console.log("Real Pinoy Herb Model v1 LOADED!");
    return realPinoyModel;
  } catch (e) {
    console.warn("Real model not available, using fallback");
    return null;
  }
}

async function openCamera() {
  if (!navigator.mediaDevices?.getUserMedia) return alert("Camera not supported");

  const overlay = document.createElement('div');
  overlay.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;background:#000;z-index:9999;display:flex;flex-direction:column;font-family:Poppins,sans-serif;`;
  const video = document.createElement('video');
  video.autoplay = video.playsInline = true;
  video.style.cssText = 'width:100%;height:70%;object-fit:cover;';

  const bottom = document.createElement('div');
  bottom.style.cssText = 'height:30%;background:#111;color:white;padding:20px;text-align:center;display:flex;flex-direction:column;gap:20px;';

  const result = document.createElement('div');
  result.style.cssText = 'font-size:21px;line-height:1.4;';
  result.innerHTML = "Starting camera...";

  const captureBtn = document.createElement('button');
  captureBtn.textContent = "Capture & Identify";
  captureBtn.style.cssText = 'padding:16px 50px;background:#4CAF50;color:white;border:none;border-radius:50px;font-size:19px;font-weight:bold;cursor:pointer;';

  const closeBtn = document.createElement('button');
  closeBtn.textContent = "×";
  closeBtn.style.cssText = 'position:absolute;top:15px;right:15px;width:50px;height:50px;background:rgba(255,255,255,0.2);border:none;border-radius:50%;color:white;font-size:36px;';

  bottom.append(result, captureBtn);
  overlay.append(closeBtn, video, bottom);
  document.body.appendChild(overlay);

  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
    video.srcObject = stream;

    result.innerHTML = "Loading REAL Filipino herb model...<br><small>First time only (4.8 MB)</small>";

    const model = await loadRealPinoyModel();

    const doh10 = ["Akapulko","Lagundi","Sambong","Tsaang Gubat","Yerba Buena","Bayabas","Bawang","Ampalaya","Niyog-niyogan","Ulasimang Bato"];

    const identify = async (canvas) => {
      if (model) {
        let img = tf.browser.fromPixels(canvas);
        img = tf.image.resizeBilinear(img, [224, 224]).toFloat();
        img = img.div(127.5).sub(1);
        const input = img.expandDims(0);

        const scores = await model.predict(input).data();
        const max = Math.max(...scores);
        const idx = scores.indexOf(max);
        const name = doh10[idx];

        const herb = herbs.find(h => 
          h.name === name || 
          h.bisaya === name || 
          h.english.toLowerCase().includes(name.toLowerCase())
        );

        if (herb && max > 0.3) {
          result.innerHTML = `
            <div style="color:#4CAF50;font-size:28px;font-weight:bold;">${herb.name}</div>
            <div style="font-size:18px;margin:8px 0;">${herb.bisaya} • ${herb.english}</div>
            <div style="color:#8f8">Confidence: ${(max*100).toFixed(1)}%</div>
            <button style="margin-top:20px;padding:14px 40px;background:#2196F3;color:white;border:none;border-radius:50px;font-size:18px;">
              Open Herb Info
            </button>
          `;
          result.querySelector('button').onclick = () => {
            overlay.remove();
            stream.getTracks().forEach(t => t.stop());
            openModal(herb.id);
          };
          return;
        }
      }

      // Smart fallback
      result.innerHTML = `
        <div style="color:#ff9800">Plant detected!</div>
        <div>Real model still learning...<br>Try Lagundi, Bayabas, Sambong</div>
        <small>v1 recognizes 10 DOH herbs • v2 coming soon</small>
      `;
    };

    captureBtn.onclick = () => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);
      result.innerHTML = "Identifying with REAL Filipino model...";
      identify(canvas);
    };

    video.onloadedmetadata = () => {
      result.innerHTML = "Camera ready!<br>Point at Akapulko, Lagundi, Bayabas, Sambong...<br>Tap <strong>Capture & Identify</strong>";
    };

    closeBtn.onclick = () => {
      overlay.remove();
      stream.getTracks().forEach(t => t.stop());
    };

  } catch (err) {
    result.innerHTML = "Camera access denied.<br>Please allow camera permission.";
  }
}
      
