const herbContainer = document.getElementById('herbContainer');
const listViewBtn = document.getElementById('listView');
const gridViewBtn = document.getElementById('gridView');

function displayHerbs(view = 'list') {
  herbContainer.innerHTML = '';

  herbs.forEach(herb => {
    const card = document.createElement('div');
    card.classList.add('herb-card');
    card.innerHTML = `
      <img src="${herb.image}" alt="${herb.name}">
      <h3>${herb.name}</h3>
      <p><strong>Use:</strong> ${herb.use}</p>
      <p><strong>Preparation:</strong> ${herb.preparation}</p>
      <p><strong>Caution:</strong> ${herb.caution}</p>
    `;
    herbContainer.appendChild(card);
  });

  if (view === 'grid') {
    herbContainer.classList.add('grid-view');
  } else {
    herbContainer.classList.remove('grid-view');
  }
}

listViewBtn.addEventListener('click', () => {
  listViewBtn.classList.add('active');
  gridViewBtn.classList.remove('active');
  displayHerbs('list');
});

gridViewBtn.addEventListener('click', () => {
  gridViewBtn.classList.add('active');
  listViewBtn.classList.remove('active');
  displayHerbs('grid');
});

displayHerbs('list');
