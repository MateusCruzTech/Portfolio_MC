

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));


document.querySelectorAll('.projects-grid, .cursos-grid, .rec-grid, .artigos-list').forEach(container => {
    const children = container.querySelectorAll('.project-card, .curso-card, .rec-card, .artigo-item');
    children.forEach((child, i) => {
        child.style.transitionDelay = `${i * 0.08}s`;
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
