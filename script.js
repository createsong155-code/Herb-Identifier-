function filterHerbs(type) {
  const herbs = document.querySelectorAll('.herb-card');
  herbs.forEach(herb => {
    if (type === 'all' || herb.dataset.type === type) {
      herb.style.display = 'block';
    } else {
      herb.style.display = 'none';
    }
  });
}
