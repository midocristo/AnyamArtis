const filterMap = {
    'Semua':           'all',
    'Anyam':           'anyam',
    'Batik':           'batik',
    'Perhiasan':       'perhiasan',
};

function applyFilter(category) {
    const cards = document.querySelectorAll('#product-grid .pcard');
    let visible = 0;
    cards.forEach(card => {
        const match = category === 'all' || card.dataset.category === category;
        card.classList.toggle('hidden', !match);
        if (match) visible++;
            });
      const empty = document.getElementById('emptyState');
      empty.classList.toggle('visible', visible === 0);
    }

document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const category = filterMap[tab.textContent.trim()] || 'all';
        applyFilter(category);
      });
});
