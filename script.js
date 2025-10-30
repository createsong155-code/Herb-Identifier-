// ======== Herb Identifier Script with Smooth Animation ========

// Herb data
const herbs = [
  {
    name: "Lagundi",
    purpose: "Relieves cough and asthma",
    description: "Lagundi (Vitex negundo) is a traditional herb used to relieve respiratory issues such as cough, asthma, and fever.",
    preparation: "Boil leaves in water for 10–15 minutes. Drink as tea 2–3 times daily.",
    cautions: "Avoid excessive intake during pregnancy. Consult a doctor if symptoms persist.",
    category: "Fever"
  },
  {
    name: "Sambong",
    purpose: "For kidney stones and urinary problems",
    description: "Sambong (Blumea balsamifera) helps in treating kidney stones and promotes urination.",
    preparation: "Boil dried or fresh leaves for 10 minutes. Drink half a cup before meals.",
    cautions: "May cause dehydration if taken too often.",
    category: "Kidney"
  },
  {
    name: "Tsaang Gubat",
    purpose: "For stomach pain and diarrhea",
    description: "Tsaang Gubat (Carmona retusa) is known for its ability to ease stomach pain and diarrhea.",
    preparation: "Boil the leaves for 10–15 minutes. Let cool and drink as tea.",
    cautions: "Avoid high doses. Not for long-term use without guidance.",
    category: "Stomachache"
  },
  {
    name: "Bayabas",
    purpose: "For wounds and mouth infections",
    description: "Bayabas (Guava leaves) are used for washing wounds and as mouth rinse for infections.",
    preparation: "Boil leaves and use the decoction to wash affected areas or gargle.",
    cautions: "External use only unless advised by a professional.",
    category: "Wound"
  }
];

// Display herbs
function displayHerbs(filteredHerbs) {
  const herbList = document.getElementById('herb-list');
  herbList.innerHTML = '';

  filteredHerbs.forEach(herb => {
    const herbCard = document.createElement('div');
    herbCard.classList.add('herb-card');

    herbCard.innerHTML = `
      <h3>${herb.name}</h3>
      <p class="purpose">${herb.purpose}</p>
      <div class="details">
        <p><strong>Description:</strong> ${herb.description}</p>
        <p><strong>Preparation:</strong> ${herb.preparation}</p>
        <p><strong>Cautions:</strong> ${herb.cautions}</p>
      </div>
    `;

    // Start hidden
    const details = herbCard.querySelector('.details');
    details.style.maxHeight = '0';
    details.style.overflow = 'hidden';
    details.style.transition = 'max-height 0.4s ease, padding 0.3s ease';

    // Toggle expand/collapse on click
    herbCard.addEventListener('click', () => {
      if (details.style.maxHeight === '0px' || !details.style.maxHeight) {
        details.style.maxHeight = details.scrollHeight + 'px';
        details.style.padding = '8px 0';
      } else {
        details.style.maxHeight = '0';
        details.style.padding = '0';
      }
    });

    herbList.appendChild(herbCard);
  });
}

// Filter logic
function filterHerbs(category) {
  if (category === 'All') {
    displayHerbs(herbs);
  } else {
    const filtered = herbs.filter(h => h.category === category);
    displayHerbs(filtered);
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  displayHerbs(herbs);

  document.getElementById('filter-all').addEventListener('click', () => filterHerbs('All'));
  document.getElementById('filter-kidney').addEventListener('click', () => filterHerbs('Kidney'));
  document.getElementById('filter-fever').addEventListener('click', () => filterHerbs('Fever'));
  document.getElementById('filter-stomachache').addEventListener('click', () => filterHerbs('Stomachache'));
  document.getElementById('filter-wound').addEventListener('click', () => filterHerbs('Wound'));
});
