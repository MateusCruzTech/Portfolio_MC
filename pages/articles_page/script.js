

const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
revealEls.forEach(el => revealObs.observe(el));


const cards = document.querySelectorAll('.post-card');
const cardObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
cards.forEach(c => cardObs.observe(c));


const filterBtns = document.querySelectorAll('.filter-btn');
const filterCountEl = document.getElementById('filter-count');
const emptyState = document.getElementById('empty-state');
const featured = document.querySelector('.featured-post');
const totalCountEl = document.getElementById('total-count');


const totalPosts = cards.length + 1;
totalCountEl.textContent = String(totalPosts).padStart(2, '0');
filterCountEl.textContent = totalPosts + ' texto';

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        let visible = 0;

     
        const featuredCat = featured.dataset.category || '';
        const showFeatured = filter === 'all' || featuredCat.includes(filter);
        featured.style.display = showFeatured ? '' : 'none';
        if (showFeatured) { setTimeout(() => featured.classList.add('visible'), 10); visible++; }
        else { featured.classList.remove('visible'); }

     
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

        filterCountEl.textContent = visible + (visible === 1 ? ' texto' : ' textos');
        emptyState.classList.toggle('visible', visible === 0);
    });
});


const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
hamburger.addEventListener('click', () => mobileNav.classList.toggle('open'));
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));


document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => img.classList.add('loaded'));
    if (img.complete) img.classList.add('loaded');
});
