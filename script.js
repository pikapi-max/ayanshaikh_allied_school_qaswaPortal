/* Keep the existing navbar enhancement loaded on every page. */
if (!document.querySelector('link[data-nav-premium]')) {
  const navStyles = document.createElement('link');
  navStyles.rel = 'stylesheet';
  navStyles.href = 'nav-premium.css?v=2';
  navStyles.dataset.navPremium = 'true';
  document.head.appendChild(navStyles);
}

const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
const siteHeader = document.querySelector('.site-header');

if (menu && navLinks) {
  menu.setAttribute('aria-expanded', 'false');
  menu.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menu.classList.toggle('is-open', isOpen);
    menu.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menu.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
  }));
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks?.querySelectorAll('a').forEach((link) => {
  const linkPage = (link.getAttribute('href') || '').split('/').pop().split('#')[0] || 'index.html';
  if (linkPage === currentPage) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

const updateHeader = () => siteHeader?.classList.toggle('nav-scrolled', window.scrollY > 18);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const progress = document.querySelector('.progress');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}, { passive: true });

/* The old reveal animation left the entire home page at opacity:0 when the
   observer was missing or failed. Make home content visible immediately, then
   add the optional animation only when it is safe to do so. */
const visibleStyle = document.createElement('style');
visibleStyle.textContent = `
  .modern-home .reveal { opacity: 1 !important; visibility: visible !important; transform: none !important; }
  .modern-home .modern-hero-inner, .modern-home .modern-hero-inner > *,
  .modern-home .modern-notice, .modern-home .modern-section-heading,
  .modern-home .modern-feature, .modern-home .event-card,
  .modern-home .gallery-item, .modern-home .holiday-card,
  .modern-home .modern-bottom-inner { position: relative; z-index: 1; }
`;
document.head.appendChild(visibleStyle);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}

const stars = document.getElementById('stars');
if (stars) {
  for (let i = 0; i < 22; i += 1) {
    const dot = document.createElement('i');
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.width = `${Math.random() * 3 + 2}px`;
    dot.style.height = dot.style.width;
    dot.style.opacity = (Math.random() * 0.6 + 0.2).toFixed(2);
    stars.appendChild(dot);
  }
}

/* Preserve the existing card interaction without making it required for layout. */
document.querySelectorAll('.feature, .class-card, .teacher, .contact-card, .info-card').forEach((item) => {
  item.addEventListener('pointermove', (event) => {
    const rect = item.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    item.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 6}deg) translateY(-4px)`;
  });
  item.addEventListener('pointerleave', () => { item.style.transform = ''; });
});

/* Gallery lightbox */
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox?.querySelector('img');
const lightboxCaption = lightbox?.querySelector('.lightbox-caption');
const lightboxClose = lightbox?.querySelector('.lightbox-close');

document.querySelectorAll('.gallery-item img').forEach((img) => {
  img.addEventListener('click', () => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || 'School gallery photo';
    if (lightboxCaption) lightboxCaption.textContent = img.parentElement.querySelector('figcaption')?.textContent || 'School gallery image';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

const closeLightbox = () => {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
};
lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});
