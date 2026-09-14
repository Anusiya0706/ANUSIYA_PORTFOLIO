// ============================================
// MOBILE NAV TOGGLE
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// close menu when a link is clicked (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ============================================
// TYPEWRITER EFFECT (role text in hero)
// ============================================
const roles = [
  'Data Science Enthusiast',
  'Machine Learning',
  'Deep Learning',
  'NLP Explorer'
];

const typewriterEl = document.getElementById('typewriter');
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    typewriterEl.textContent = currentRole.slice(0, charIndex);
    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeLoop, 1400); // pause at full word
      return;
    }
  } else {
    charIndex--;
    typewriterEl.textContent = currentRole.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, deleting ? 40 : 80);
}

typeLoop();

// ============================================
// HERO SCATTER VISUAL (subtle data-point motif)
// ============================================
const svg = document.getElementById('scatterSvg');
const NUM_POINTS = 42;
const svgNS = 'http://www.w3.org/2000/svg';

// a few connecting lines first (drawn behind dots)
for (let i = 0; i < 10; i++) {
  const line = document.createElementNS(svgNS, 'line');
  line.setAttribute('x1', Math.random() * 400);
  line.setAttribute('y1', Math.random() * 400);
  line.setAttribute('x2', Math.random() * 400);
  line.setAttribute('y2', Math.random() * 400);
  line.setAttribute('stroke', 'rgba(62, 214, 185, 0.12)');
  line.setAttribute('stroke-width', '1');
  svg.appendChild(line);
}

for (let i = 0; i < NUM_POINTS; i++) {
  const circle = document.createElementNS(svgNS, 'circle');
  const cx = Math.random() * 400;
  const cy = Math.random() * 400;
  const r = 2 + Math.random() * 5;
  circle.setAttribute('cx', cx);
  circle.setAttribute('cy', cy);
  circle.setAttribute('r', r);
  const isAccent = Math.random() > 0.65;
  circle.setAttribute('fill', isAccent ? '#3ED6B9' : 'rgba(144, 160, 194, 0.35)');
  circle.style.opacity = 0;
  circle.style.transition = `opacity 0.6s ease ${i * 0.02}s`;
  svg.appendChild(circle);

  requestAnimationFrame(() => {
    circle.style.opacity = 1;
  });
}

// ============================================
// CONTACT FORM (front-end only — no backend yet)
// ============================================
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = "Thanks! I'll get back to you soon.";
  contactForm.reset();
});
