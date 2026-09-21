/* Premium redesign for Allied School Qaswa Campus */
:root {
  --navy: #0b2547;
  --navy-2: #133b63;
  --primary: #06a8df;
  --primary-2: #1cc6ff;
  --sky: #eaf9ff;
  --sky-2: #dff5ff;
  --ink: #172b45;
  --muted: #667a8d;
  --line: #dfeaf3;
  --white: #ffffff;
  --red: #e83645;
  --red-2: #b91f2d;
  --green: #1bbf7a;
  --shadow-soft: 0 18px 35px rgba(10, 54, 94, 0.10);
  --shadow-strong: 0 28px 60px rgba(8, 42, 74, 0.16);
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'DM Sans', Arial, sans-serif;
  color: var(--ink);
  background:
    radial-gradient(circle at top left, rgba(30, 184, 255, 0.18), transparent 28%),
    linear-gradient(180deg, #f5fbff 0%, #f0f8ff 100%);
  line-height: 1.7;
  overflow-x: hidden;
}

a { text-decoration: none; color: inherit; }
img { max-width: 100%; display: block; }
button, input, select, textarea { font: inherit; }
.wrap { width: min(1180px, 90%); margin: auto; }

.topbar {
  background: linear-gradient(90deg, var(--navy), var(--navy-2));
  color: #eaf8ff;
  font-size: 12px;
  letter-spacing: 0.02em;
}
.topbar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 9px 0;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255,255,255,0.78);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(17, 74, 117, 0.08);
  box-shadow: 0 8px 24px rgba(12, 47, 76, 0.04);
}
.nav {
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--navy);
}
.brand b {
  display: block;
  font-size: 19px;
  line-height: 1.1;
  font-family: 'Playfair Display', serif;
}
.brand small {
  display: block;
  font-size: 10px;
  color: var(--red);
  font-weight: 700;
  letter-spacing: 0.2px;
}
.mini-logo {
  width: 48px;
  height: 52px;
  display: grid;
  place-items: center;
  position: relative;
  color: var(--white);
  background: linear-gradient(145deg, var(--primary), #0c7ec0);
  clip-path: polygon(8% 0, 92% 0, 92% 62%, 50% 100%, 8% 62%);
  box-shadow: 0 14px 30px rgba(6, 168, 223, 0.28);
}
.mini-logo::after {
  content: "";
  position: absolute;
  inset: 8px 12px 10px 12px;
  border: 2px solid rgba(255,255,255,0.55);
  transform: rotate(45deg);
}
.mini-logo span {
  position: relative;
  z-index: 1;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.06em;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 4px;
  align-items: center;
}
.nav-links a {
  display: block;
  padding: 10px 13px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 700;
  color: var(--ink);
  transition: 0.25s ease;
}
.nav-links a:hover,
.nav-links a.active {
  background: linear-gradient(180deg, #edf9ff, #dff6ff);
  color: var(--primary);
  box-shadow: inset 0 0 0 1px rgba(6,168,223,0.12);
}

.menu {
  display: none;
  background: transparent;
  border: 0;
  font-size: 26px;
  color: var(--navy);
  cursor: pointer;
}

.hero {
  position: relative;
  min-height: 720px;
  background:
    radial-gradient(circle at 30% 20%, rgba(89, 210, 255, 0.42), transparent 12%),
    linear-gradient(125deg, #07254d 0%, #0d3d71 28%, #0d6ea8 60%, #1ac1ef 100%);
  color: var(--white);
  overflow: hidden;
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: linear-gradient(to right, transparent, #000, transparent);
}
.hero-glow {
  position: absolute;
  right: -120px;
  top: -140px;
  width: 620px;
  height: 620px;
  border-radius: 50%;
  border: 84px solid rgba(255,255,255,0.06);
}
.hero-grid {
  position: relative;
  z-index: 1;
  min-height: 720px;
  display: grid;
  grid-template-columns: 1.15fr 0.9fr;
  align-items: center;
  gap: 30px;
}
.eyebrow {
  display: inline-block;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 800;
  color: #c4f5ff;
}
.eyebrow.blue {
  color: #1ca4dd;
}
.hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(52px, 5vw, 84px);
  line-height: 0.96;
  letter-spacing: -0.03em;
  margin: 22px 0 18px;
}
.hero h1 em {
  color: #a7f0ff;
  font-style: normal;
}
.hero-copy p {
  max-width: 580px;
  color: #dff5ff;
  font-size: 16px;
}
.actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 22px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.01em;
  transition: 0.25s ease;
  border: 1px solid transparent;
}
.btn:hover { transform: translateY(-3px); }
.btn-primary {
  background: linear-gradient(180deg, #acfbff, #a9eaff);
  color: var(--navy);
  box-shadow: 0 15px 30px rgba(11, 37, 71, 0.22);
}
.btn-ghost {
  background: rgba(255,255,255,0.04);
  border-color: rgba(255,255,255,0.25);
  color: var(--white);
}
.btn-ghost.dark {
  background: transparent;
  border-color: rgba(11,37,71,0.18);
  color: var(--navy);
}
.btn-ghost.dark:hover {
  background: var(--navy);
  color: var(--white);
}
.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 36px;
  color: #d6f3ff;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
.hero-meta strong {
  display: block;
  font-size: 22px;
  color: var(--white);
  letter-spacing: 0px;
  text-transform: none;
  font-family: 'Playfair Display', serif;
}

.hero-mark {
  position: relative;
  display: grid;
  place-items: center;
  height: 520px;
}
.logo-card {
  position: relative;
  z-index: 2;
  width: min(330px, 70vw);
  aspect-ratio: 0.85;
  display: grid;
  place-items: center;
  background: rgba(255,255,255,0.96);
  clip-path: polygon(6% 0%, 94% 0%, 94% 62%, 50% 100%, 6% 62%);
  box-shadow: 0 35px 60px rgba(0, 0, 0, 0.18);
  animation: floatLogo 5s ease-in-out infinite;
}
.crest {
  width: 82%;
  height: 82%;
}
.crest-shield { fill: #ffffff; stroke: rgba(10, 153, 210, 0.45); stroke-width: 4; }
.crest-title { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 700; fill: #1a7ab7; }
.crest-ray { fill: none; stroke-linecap: round; }
.crest-ray.main { stroke: #f03c4b; stroke-width: 7; }
.crest-ray.secondary { stroke: #143d77; stroke-width: 7; }
.crest-small { font-family: 'DM Sans', sans-serif; font-size: 9px; font-weight: 800; letter-spacing: 0.12em; fill: #eb3a45; }

.orbit {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.22);
  animation: spin 18s linear infinite;
}
.orbit-one { width: 430px; height: 430px; }
.orbit-two { width: 500px; height: 500px; border-style: dashed; animation-direction: reverse; animation-duration: 26s; }

.floating-chip {
  position: absolute;
  z-index: 3;
  background: rgba(255,255,255,0.9);
  border: 1px solid rgba(19, 59, 99, 0.08);
  color: var(--navy);
  border-radius: 999px;
  padding: 9px 16px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  box-shadow: 0 15px 25px rgba(9, 25, 38, 0.14);
  animation: floatChip 5s ease-in-out infinite;
}
.chip-one { right: 15px; top: 24%; }
.chip-two { left: 18px; bottom: 18%; animation-delay: 1.5s; }

.announcement { padding: 26px 0 0; }
.announcement-box {
  display: flex;
  align-items: center;
  gap: 18px;
  background: rgba(255,255,255,0.82);
  border: 1px solid rgba(17, 74, 117, 0.08);
  border-left: 4px solid var(--red);
  border-radius: 16px;
  padding: 18px 22px;
  box-shadow: var(--shadow-soft);
}
.notice-icon {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  color: var(--red);
  font-size: 22px;
  background: rgba(232, 54, 69, 0.07);
  border-radius: 10px;
}
.announcement-box b {
  font-size: 13px;
  color: var(--navy);
}
.announcement-box p {
  color: var(--muted);
  font-size: 13px;
  margin-top: 6px;
}
.pulse-dot {
  margin-left: auto;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 0 8px rgba(27, 191, 122, 0.14);
  animation: pulse 2s infinite;
}

.section {
  padding: 92px 0;
}
.section-head {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 42px;
}
.section-head h2 {
  font-family: 'Playfair Display', serif;
  color: var(--navy);
  font-size: clamp(34px, 4vw, 46px);
  line-height: 1.08;
  margin: 10px 0 12px;
}
.section-head p {
  color: var(--muted);
}
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}
.feature {
  position: relative;
  overflow: hidden;
  background: rgba(255,255,255,0.88);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 26px 22px 20px;
  box-shadow: var(--shadow-soft);
  transition: 0.28s ease;
}
.feature::after {
  content: "";
  position: absolute;
  width: 150px;
  height: 150px;
  right: -60px;
  top: -60px;
  background: radial-gradient(circle, rgba(28,198,255,0.12), transparent 65%);
  transition: 0.3s ease;
}
.feature:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-strong);
  border-color: rgba(1, 176, 225, 0.35);
}
.feature:hover::after { transform: scale(1.5); }
.feature-number {
  position: absolute;
  right: 18px;
  top: 16px;
  font-size: 11px;
  font-weight: 800;
  color: rgba(11, 37, 71, 0.34);
  letter-spacing: 0.12em;
}
.feature .icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--sky), #d8f3ff);
  color: var(--primary);
  font-size: 22px;
  box-shadow: inset 0 0 0 1px rgba(6,168,223,0.08);
  margin-bottom: 16px;
}
.feature h3 {
  color: var(--navy);
  font-size: 19px;
  margin-bottom: 8px;
}
.feature p {
  color: var(--muted);
  font-size: 14px;
  margin-bottom: 14px;
}
.feature .arrow {
  color: #0d83be;
  font-size: 12px;
  font-weight: 800;
}

.quote-band {
  background: linear-gradient(180deg, var(--sky), #e0f3ff 100%);
  padding: 60px 0;
  border-top: 1px solid rgba(11,37,71,0.06);
  border-bottom: 1px solid rgba(11,37,71,0.06);
}
.quote-inner {
  text-align: center;
  max-width: 780px;
}
.quote-mark {
  display: block;
  font-family: 'Playfair Display', serif;
  color: var(--primary);
  font-size: 72px;
  line-height: 0.8;
}
.quote-inner p {
  font-family: 'Playfair Display', serif;
  font-size: clamp(26px, 4vw, 38px);
  line-height: 1.2;
  color: var(--navy);
  margin-bottom: 12px;
}
.quote-inner small {
  color: var(--muted);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

footer {
  background: linear-gradient(180deg, #081f45 0%, #0a244d 100%);
  color: #c9dbef;
  padding-top: 48px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 36px;
}
.footer-grid h3 {
  color: var(--white);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
}
.footer-grid p,
.footer-grid a {
  color: #cfe4f5;
  font-size: 13px;
  margin: 7px 0;
}
.footer-brand { margin-bottom: 14px; }
.footer-grid a:hover { color: #8fe9ff; }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.12);
  padding: 18px 5%;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: #d8e6fa;
  font-size: 12px;
}

#stars {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
#stars i {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.8);
  box-shadow: 0 0 12px rgba(255,255,255,0.35);
}
.progress {
  position: fixed;
  left: 0;
  top: 0;
  height: 3px;
  background: linear-gradient(90deg, #a9f0ff, #06a8df);
  z-index: 200;
  width: 0;
  box-shadow: 0 0 12px rgba(6,168,223,0.7);
}

.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }

.page-hero {
  padding: 90px 0 74px;
  background: linear-gradient(180deg, #edf9ff 0%, #ffffff 100%);
  border-bottom: 1px solid rgba(11,37,71,0.08);
}
.page-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(42px, 6vw, 68px);
  line-height: 1;
  color: var(--navy);
  margin: 16px 0 8px;
}
.page-hero p {
  color: var(--muted);
}

.about-grid,
.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 20px;
}
.info-card,
.form-card,
.contact-card {
  background: rgba(255,255,255,0.9);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 30px;
  box-shadow: var(--shadow-soft);
}
.info-card h2,
.form-card h2,
.contact-card h3,
.principal-card h2 {
  font-family: 'Playfair Display', serif;
  color: var(--navy);
  margin: 12px 0 8px;
}
.info-card p,
.contact-card p,
.principal-card p,
.form-note,
.result-note {
  color: var(--muted);
}
.check-list {
  list-style: none;
  color: var(--muted);
  margin-top: 15px;
}
.check-list li {
  padding: 9px 0;
  border-bottom: 1px solid var(--line);
}
.check-list li::before {
  content: '✓';
  color: var(--primary);
  font-weight: 900;
  margin-right: 10px;
}

.pale { background: linear-gradient(180deg, #f0faff 0%, #edf7ff 100%); }
.principal-card {
  display: flex;
  align-items: center;
  gap: 22px;
  background: rgba(255,255,255,0.9);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 30px;
  box-shadow: var(--shadow-soft);
}
.principal-avatar {
  width: 92px;
  height: 92px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(145deg, var(--primary), var(--navy));
  color: var(--white);
  font-weight: 900;
  font-size: 24px;
  box-shadow: 0 18px 30px rgba(11, 37, 71, 0.18);
}

.teacher-grid,
.class-grid,
.subject-grid {
  display: grid;
  gap: 18px;
}
.teacher-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.teacher {
  text-align: center;
  background: rgba(255,255,255,0.9);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 24px 14px;
  box-shadow: var(--shadow-soft);
  transition: 0.25s ease;
}
.teacher:hover,
.class-card:hover,
.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-strong);
}
.teacher > b {
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--navy));
  color: var(--white);
  font-size: 18px;
}
.teacher h3 { color: var(--navy); font-size: 16px; }
.teacher p {
  color: var(--red);
  font-size: 12px;
  font-weight: 800;
  margin-top: 6px;
}

.class-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.class-card {
  background: rgba(255,255,255,0.9);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 26px 20px;
  box-shadow: var(--shadow-soft);
  transition: 0.25s ease;
}
.class-card b {
  display: block;
  font-size: 36px;
  font-family: 'Playfair Display', serif;
  color: #9fdaf1;
}
.class-card h3 { color: var(--navy); margin: 10px 0 8px; }
.class-card p { color: var(--muted); font-size: 13px; }
.class-card.special {
  background: linear-gradient(180deg, #0b2547, #12396a);
  color: var(--white);
}
.class-card.special h3,
.class-card.special p,
.class-card.special b { color: var(--white); }

.subject-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.subject-grid > div {
  background: rgba(255,255,255,0.9);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 20px 16px;
}
.subject-grid h3 { color: var(--navy); font-size: 16px; }
.subject-grid p { color: #0a87be; font-size: 13px; margin-top: 4px; }

.form-card {
  max-width: 920px;
  margin: 0 auto;
}
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}
.form-grid label {
  display: block;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: var(--navy);
}
.form-grid input,
.form-grid select,
.form-grid textarea {
  width: 100%;
  margin-top: 7px;
  display: block;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: #fbfeff;
  padding: 13px 14px;
  color: var(--ink);
  transition: 0.2s ease;
}
.form-grid input:focus,
.form-grid select:focus,
.form-grid textarea:focus {
  outline: 0;
  border-color: rgba(6,168,223,0.55);
  box-shadow: 0 0 0 4px rgba(6,168,223,0.11);
}
.form-grid textarea {
  min-height: 120px;
  resize: vertical;
}
.form-grid .full { grid-column: 1 / -1; }
.form-grid button { border: none; cursor: pointer; }
.form-note {
  background: rgba(6,168,223,0.05);
  border: 1px solid rgba(6,168,223,0.1);
  border-radius: 10px;
  padding: 14px 16px;
  margin-top: 20px;
  font-size: 13px;
}

.result-note {
  background: rgba(255,255,255,0.9);
  border-left: 4px solid var(--red);
  border-radius: 12px;
  padding: 18px 20px;
  margin-bottom: 24px;
  box-shadow: var(--shadow-soft);
}
.table-wrap {
  overflow-x: auto;
  background: rgba(255,255,255,0.9);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow-soft);
}
table {
  width: 100%;
  min-width: 700px;
  border-collapse: collapse;
}
th {
  text-align: left;
  background: linear-gradient(180deg, var(--navy), var(--navy-2));
  color: var(--white);
  padding: 14px 16px;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  font-size: 13px;
}
tr:last-child td { border-bottom: none; }
.grade {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  padding: 6px 8px;
  border-radius: 8px;
  background: rgba(6,168,223,0.08);
  color: #0a8ec6;
  font-weight: 800;
}
.pass { color: var(--green); font-weight: 800; }

.contact-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.contact-card { text-align: center; }
.contact-card .icon,
.info-card .icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--sky), #daf4ff);
  color: var(--primary);
  font-size: 22px;
  margin-bottom: 12px;
}
.social { text-align: center; }
.social .btn { margin: 5px; }

@keyframes floatLogo {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
@keyframes floatChip {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(27,191,122,0.35); }
  70% { box-shadow: 0 0 0 12px rgba(27,191,122,0); }
  100% { box-shadow: 0 0 0 0 rgba(27,191,122,0); }
}

@media (max-width: 900px) {
  .feature-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .teacher-grid, .class-grid, .subject-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .contact-grid { grid-template-columns: 1fr; }
  .about-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 760px) {
  .topbar-inner { flex-direction: column; text-align: center; }
  .menu { display: block; }
  .nav-links {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 80px;
    background: rgba(255,255,255,0.98);
    border-bottom: 1px solid rgba(11,37,71,0.08);
    padding: 14px 5%;
    gap: 8px;
    flex-direction: column;
    align-items: stretch;
    box-shadow: var(--shadow-soft);
  }
  .nav-links.open { display: flex; }
  .hero-grid { grid-template-columns: 1fr; padding: 70px 0 80px; }
  .hero { min-height: auto; }
  .hero-mark { height: 390px; }
  .logo-card { width: min(300px, 72vw); }
  .feature-grid, .teacher-grid, .class-grid, .subject-grid, .form-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom { display: block; }
}

@media (max-width: 520px) {
  .hero h1 { font-size: 52px; }
  .hero-meta { gap: 18px; }
  .chip-one, .chip-two { display: none; }
  .principal-card { flex-direction: column; align-items: flex-start; }
}
