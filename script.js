document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // highlight selected button
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // filter herbs
    const category = btn.getAttribute('data-category');
    document.querySelectorAll('.herb-card').forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
