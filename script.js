/* Existing site behavior plus one targeted visibility repair for the Home page. */
(function () {
  const menu = document.querySelector('.menu');
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('.site-header');

  if (menu && navLinks) {
    menu.setAttribute('aria-expanded', 'false');
    menu.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menu.classList.toggle('is-open', open);
      menu.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menu.classList.remove('is-open');
      menu.setAttribute('aria-expanded', 'false');
    }));
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks?.querySelectorAll('a').forEach((link) => {
    const page = (link.getAttribute('href') || '').split('/').pop().split('#')[0] || 'index.html';
    if (page === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  const updateHeader = () => header?.classList.toggle('nav-scrolled', window.scrollY > 18);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const progress = document.querySelector('.progress');
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  }, { passive: true });

  /* Targeted fix: the existing Home nodes were interactive but retained the
     base reveal state. Reset only their visual state; no content or layout is
     replaced, and the reset does not affect the other pages. */
  const home = document.querySelector('.modern-home');
  if (home) {
    const visible = document.createElement('style');
    visible.textContent = `
      .modern-home .modern-hero-inner,
      .modern-home .modern-hero-inner > *,
      .modern-home .modern-hero h1,
      .modern-home .modern-hero h1 span,
      .modern-home .modern-kicker,
      .modern-home .modern-hero-copy,
      .modern-home .modern-actions,
      .modern-home .modern-actions > *,
      .modern-home .modern-stats,
      .modern-home .modern-stats > *,
      .modern-home .logo-stage,
      .modern-home .logo-panel,
      .modern-home .logo-panel img,
      .modern-home .modern-notice,
      .modern-home .modern-section,
      .modern-home .modern-events,
      .modern-home .modern-gallery,
      .modern-home .modern-holidays,
      .modern-home .modern-bottom,
      .modern-home footer,
      .modern-home .modern-feature,
      .modern-home .event-card,
      .modern-home .gallery-item,
      .modern-home .holiday-card {
        opacity: 1 !important;
        visibility: visible !important;
        transform: none !important;
        animation: none !important;
      }
      .modern-home .modern-hero-inner { position: relative !important; z-index: 2 !important; }
      .modern-home .modern-hero-inner > * { position: relative !important; z-index: 3 !important; }
      .modern-home .logo-stage, .modern-home .logo-panel { z-index: 4 !important; }
      .modern-home .modern-hero h1, .modern-home .modern-hero-copy { position: relative !important; z-index: 4 !important; }
      @media (max-width: 980px) {
        .modern-home .modern-hero-inner { display: block !important; }
        .modern-home .modern-hero-inner > * { display: block !important; }
        .modern-home .modern-hero-copy, .modern-home .modern-actions, .modern-home .modern-stats { display: block !important; }
        .modern-home .modern-actions > * { display: inline-flex !important; }
        .modern-home .modern-stats > * { display: inline-block !important; }
      }
    `;
    document.head.appendChild(visible);

    home.querySelectorAll('.reveal').forEach((element) => {
      element.classList.add('visible');
      element.style.setProperty('opacity', '1', 'important');
      element.style.setProperty('visibility', 'visible', 'important');
      element.style.setProperty('transform', 'none', 'important');
    });
  }

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.12 }) : null;
  document.querySelectorAll('.reveal').forEach((element) => observer ? observer.observe(element) : element.classList.add('visible'));

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

  document.querySelectorAll('.feature, .class-card, .teacher, .contact-card, .info-card').forEach((item) => {
    item.addEventListener('pointermove', (event) => {
      const rect = item.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      item.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 6}deg) translateY(-4px)`;
    });
    item.addEventListener('pointerleave', () => { item.style.transform = ''; });
  });
})();
