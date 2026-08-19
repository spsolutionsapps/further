gsap.registerPlugin(ScrollTrigger);

// Hero intro + subtle parallax
const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
heroTimeline
  .from('.hero-bg', { scale: 1.18, duration: 2.2, ease: 'power2.out' }, 0)
  .from('h1', { y: 50, opacity: 0, duration: 1.2 }, 0.25)
  .from('section:first-of-type p', { y: 22, opacity: 0, duration: 0.9 }, 0.55);

gsap.to('#heroImage', {
  yPercent: 8,
  scale: 1.12,
  ease: 'none',
  scrollTrigger: {
    trigger: 'section:first-of-type',
    start: 'top top',
    end: 'bottom top',
    scrub: 1.2,
  },
});

// Global reveals
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Header state
const header = document.getElementById('siteHeader');
addEventListener(
  'scroll',
  () => {
    header.classList.toggle('bg-black/55', scrollY > 30);
    header.classList.toggle('backdrop-blur-xl', scrollY > 30);
    header.classList.toggle('border-b', scrollY > 30);
    header.classList.toggle('border-white/5', scrollY > 30);
  },
  { passive: true }
);

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
mobileMenu.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => mobileMenu.classList.add('hidden'))
);

// Cursor glow
const glow = document.getElementById('cursorGlow');
addEventListener(
  'pointermove',
  (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  },
  { passive: true }
);

// Gentle service row interaction
document.querySelectorAll('.service-row').forEach((row) => {
  row.addEventListener('mouseenter', () =>
    gsap.to(row, { x: 8, duration: 0.35, ease: 'power2.out' })
  );
  row.addEventListener('mouseleave', () =>
    gsap.to(row, { x: 0, duration: 0.45, ease: 'power2.out' })
  );
});
