

const allReveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
allReveals.forEach(el => revealObserver.observe(el));


const cards = document.querySelectorAll('.project-card');
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
cards.forEach(c => cardObserver.observe(c));


const filterBtns = document.querySelectorAll('.filter-btn');
const filterCount = document.getElementById('filter-count');
const emptyState = document.getElementById('empty-state');
const totalCountEl = document.getElementById('total-count');
const totalCards = cards.length;
totalCountEl.textContent = String(totalCards).padStart(2, '0');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        let visible = 0;

        cards.forEach(card => {
            const cats = card.dataset.category || '';
            const show = filter === 'all' || cats.includes(filter);

            if (show) {
                card.style.display = '';
                setTimeout(() => card.classList.add('visible'), 10);
                visible++;
            } else {
                card.classList.remove('visible');
                card.style.display = 'none';
            }
        });

        filterCount.textContent = visible + (visible === 1 ? ' projeto' : ' projetos');
        emptyState.classList.toggle('visible', visible === 0);
    });
});


const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});

mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
});


document.querySelectorAll('.card-thumb img').forEach(img => {
    img.addEventListener('load', () => img.classList.add('loaded'));
    if (img.complete) img.classList.add('loaded');
});
