const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

if (menu && navLinks) {
  menu.addEventListener('click', () => navLinks.classList.toggle('open'));
}

const progress = document.querySelector('.progress');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

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
