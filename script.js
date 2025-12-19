// =============================================
// script.js – Fully Offline Herb App (Philippines)
// =============================================

const herbs = [
  // Your Akapulko and Lagundi objects (perfect)
  // ... (keep exactly as you have)
];

// Elements
const herbList = document.getElementById('herb-list');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('herb-modal');
const modalBody = document.getElementById('modal-body');
const loading = document.querySelector('.loading');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');

// Hamburger menu toggle
hamburgerMenu.addEventListener('click', () => {
  sideMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('active');
});

sideMenu.addEventListener('click', (e) => {
  if (e.target === sideMenu) {
    sideMenu.classList.remove('active');
  }
});

// Render herb cards
function renderHerbs(list) {
  herbList.innerHTML = '';
  if (list.length === 0) {
    herbList.innerHTML = '<p style="text-align:center;padding:50px;color:#666;">No herbs found</p>';
    return;
  }

  list.forEach(herb => {
    const card = document.createElement('div');
    card.className = 'herb-card';
    card.innerHTML = `
      <img src="\( {herb.images[0].url}" onerror="this.src='icons/icon-192.png'" alt=" \){herb.name}">
      <h3>${herb.name}</h3>
      <p class="scientific">${herb.scientific}</p>
      <p class="local">${herb.local}</p>
      <span class="category-tag">${herb.category}</span>
    `;
    card.onclick = () => openModal(herb);
    herbList.appendChild(card);
  });
}

// Open modal with Swiper gallery
function openModal(herb) {
  modalBody.innerHTML = `
    <h2>${herb.name}</h2>
    <p><strong>Scientific:</strong> ${herb.scientific}</p>
    <p><strong>Local names:</strong> ${herb.local} • ${herb.bisaya || ''}</p>
    
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        ${herb.images.map(img => `
          <div class="swiper-slide">
            <img src="${img.url}" onerror="this.src='icons/icon-192.png'">
            <p>${img.part}</p>
          </div>
        `).join('')}
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <h3>Benefits</h3>
    <ul>\( {herb.benefits.map(b => `<li> \){b}</li>`).join('')}</ul>

    <h3>How to Use</h3>
    ${Object.entries(herb.preparation).map(([key, val]) => `
      <p><strong>${key}:</strong> ${val}</p>
    `).join('')}

    <h3>Caution</h3>
    <p style="background:#fff3cd;padding:15px;border-radius:10px;">${herb.caution}</p>
  `;

  modal.style.display = 'block';

  // Initialize Swiper
  new Swiper('.mySwiper', {
    loop: herb.images.length > 1,
    pagination: { el: '.swiper-pagination', clickable: true }
  });
}

// Close modal
document.querySelector('.close').onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

// Search
searchInput.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase().trim();
  if (!term) {
    renderHerbs(herbs);
    return;
  }
  const filtered = herbs.filter(herb =>
    herb.name.toLowerCase().includes(term) ||
    herb.scientific.toLowerCase().includes(term) ||
    herb.local.toLowerCase().includes(term) ||
    (herb.bisaya && herb.bisaya.toLowerCase().includes(term)) ||
    herb.searchTerms.some(t => t.toLowerCase().includes(term))
  );
  renderHerbs(filtered);
});

// Category filter
document.querySelectorAll('.category').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.category.active').classList.remove('active');
    btn.classList.add('active');
    const cat = btn.dataset.category;
    if (cat === 'all') {
      renderHerbs(herbs);
    } else {
      const filtered = herbs.filter(h => h.category.toLowerCase().includes(cat.toLowerCase()));
      renderHerbs(filtered);
    }
  });
});

// Camera button
document.getElementById('cameraBtn')?.addEventListener('click', () => {
  alert('Camera AI coming soon – stay tuned!');
});

// App start
document.addEventListener('DOMContentLoaded', () => {
  loading?.remove();
  renderHerbs(herbs);
});
