/* Critical first: the site must remain visible even if optional effects fail. */
(function () {
  var emergency = document.createElement('style');
  emergency.textContent = '.modern-home .reveal{opacity:1!important;visibility:visible!important;transform:none!important}.modern-home .modern-hero-inner,.modern-home .modern-hero-inner>*{position:relative;z-index:5}.modern-home .modern-hero h1,.modern-home .modern-hero-copy,.modern-home .modern-actions,.modern-home .modern-stats{visibility:visible!important;color:#fff}.modern-home .logo-stage,.modern-home .logo-panel{position:relative;z-index:6}.modern-home .modern-notice,.modern-home .modern-section,.modern-home .modern-events,.modern-home .modern-gallery,.modern-home .modern-holidays,.modern-home .modern-bottom,footer{visibility:visible!important}';
  document.head.appendChild(emergency);

  var menu = document.querySelector('.menu');
  var navLinks = document.querySelector('.nav-links');
  var header = document.querySelector('.site-header');
  if (menu && navLinks) {
    menu.setAttribute('aria-expanded', 'false');
    menu.onclick = function () {
      var open = navLinks.classList.toggle('open');
      menu.classList.toggle('is-open', open);
      menu.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.onclick = function () {
        navLinks.classList.remove('open');
        menu.classList.remove('is-open');
        menu.setAttribute('aria-expanded', 'false');
      };
    });
  }

  var page = location.pathname.split('/').pop() || 'index.html';
  if (navLinks) navLinks.querySelectorAll('a').forEach(function (link) {
    var target = (link.getAttribute('href') || '').split('/').pop().split('#')[0] || 'index.html';
    if (target === page) { link.classList.add('active'); link.setAttribute('aria-current', 'page'); }
  });
  function scrollState() {
    if (header) header.classList.toggle('nav-scrolled', window.scrollY > 18);
    var progress = document.querySelector('.progress');
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = (max > 0 ? window.scrollY / max * 100 : 0) + '%';
  }
  scrollState();
  window.addEventListener('scroll', scrollState, { passive: true });

  var lightbox = document.getElementById('lightbox');
  var lightboxImg = lightbox && lightbox.querySelector('img');
  var caption = lightbox && lightbox.querySelector('.lightbox-caption');
  function closeLightbox() { if (lightbox) { lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden', 'true'); } }
  document.querySelectorAll('.gallery-item img').forEach(function (img) {
    img.onclick = function () {
      if (!lightbox || !lightboxImg) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || 'School gallery photo';
      if (caption) { var cap = img.parentElement.querySelector('figcaption'); caption.textContent = cap ? cap.textContent : ''; }
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    };
  });
  var close = document.querySelector('.lightbox-close');
  if (close) close.onclick = closeLightbox;
  if (lightbox) lightbox.onclick = function (e) { if (e.target === lightbox) closeLightbox(); };
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });
})();
