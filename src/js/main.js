gsap.registerPlugin(ScrollTrigger);

// Fix language switcher links for local file:// protocol
if (location.protocol === 'file:') {
  document.querySelectorAll('a[data-lang]').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href.endsWith('/')) {
      link.setAttribute('href', href + 'index.html');
    }
  });
}

document.querySelectorAll('a[data-lang]').forEach((link) => {
  link.addEventListener('click', () => {
    try {
      localStorage.setItem('gauchofilms-lang', link.getAttribute('data-lang'));
      localStorage.setItem('gauchofilms-lang-manual', '1');
    } catch (err) {
      /* ignore quota / private mode */
    }
  });
});

(function markCurrentLangFlag() {
  var match = location.pathname.match(/\/(es|en|pt)(?:\/|$)/i);
  var current = match ? match[1].toLowerCase() : null;
  if (!current && location.protocol === 'file:') {
    var fileMatch = location.pathname.match(/[\\/](es|en|pt)[\\/]/i);
    if (fileMatch) current = fileMatch[1].toLowerCase();
  }
  if (!current) return;
  document.querySelectorAll('a[data-lang="' + current + '"]').forEach((link) => {
    link.classList.add('lang-flag--current');
    link.setAttribute('aria-current', 'page');
  });
})();


// Hero intro + subtle parallax
const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
heroTimeline
  .from('.hero-bg', { scale: 1.18, duration: 2.2, ease: 'power2.out' }, 0)
  .from('h1', { y: 50, opacity: 0, duration: 1.2 }, 0.25)
  .from('section:first-of-type p', { y: 22, opacity: 0, duration: 0.9 }, 0.55);

gsap.to('.hero-bg', {
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

// Map stats — count up from zero when the section enters the viewport
(function initMapStats() {
  const statsBlock = document.querySelector('.map-stats');
  if (!statsBlock || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const values = Array.from(statsBlock.querySelectorAll('.map-stats__value'));
  if (!values.length) return;

  const DURATION = 1600;

  const countUp = (el) => {
    const match = el.textContent.trim().match(/^(\D*)(\d+)(.*)$/);
    if (!match) return;
    const [, prefix, digits, suffix] = match;
    const target = parseInt(digits, 10);
    const start = performance.now();

    el.textContent = prefix + '0' + suffix;

    const step = (now) => {
      const progress = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const statsObserver = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      values.forEach(countUp);
      statsObserver.disconnect();
    },
    { threshold: 0.4 }
  );

  statsObserver.observe(statsBlock);
})();

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

// Scroll to top — visible near page bottom
const scrollTopBtn = document.getElementById('scrollTopBtn');
const pageFooter = document.querySelector('footer');
if (scrollTopBtn && pageFooter) {
  const scrollTopObserver = new IntersectionObserver(
    ([entry]) => scrollTopBtn.classList.toggle('is-visible', entry.isIntersecting),
    { threshold: 0.08 }
  );
  scrollTopObserver.observe(pageFooter);
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/*
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
*/

// Infinite carousel loop — duplicate items exactly for seamless -50% animation
function initInfiniteLoopRow(row) {
  if (!row || row.dataset.loopInit === 'true') return;

  row.querySelectorAll('[aria-hidden="true"]').forEach((el) => el.remove());

  const originals = Array.from(row.children);
  originals.forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    row.appendChild(clone);
  });

  row.dataset.loopInit = 'true';
}

document.querySelectorAll('.clients-row, .distro-row').forEach(initInfiniteLoopRow);

// Work cards — inline YouTube playback
function buildYouTubeEmbed(id, start) {
  const params = new URLSearchParams({
    autoplay: '1',
    start: String(start),
    rel: '0',
    playsinline: '1',
    modestbranding: '1',
  });

  if (window.location.origin && window.location.origin !== 'null') {
    params.set('origin', window.location.origin);
  }

  return (
    '<iframe src="https://www.youtube.com/embed/' +
    id +
    '?' +
    params.toString() +
    '" title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>'
  );
}

function closeWorkCard(card) {
  if (!card) return;
  card.classList.remove('is-playing');
  const player = card.querySelector('.work-card-player');
  const closeBtn = card.querySelector('.work-card-close');
  if (player) {
    player.innerHTML = '';
    player.classList.add('hidden');
  }
  closeBtn?.classList.add('hidden');
}

document.querySelectorAll('.work-card-play').forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.work-card');
    const id = card.dataset.youtubeId;
    const start = card.dataset.youtubeStart || '0';
    const player = card.querySelector('.work-card-player');
    const closeBtn = card.querySelector('.work-card-close');
    if (!id || !player) return;

    document.querySelectorAll('.work-card.is-playing').forEach((other) => {
      if (other !== card) closeWorkCard(other);
    });

    card.classList.add('is-playing');
    player.classList.remove('hidden');
    closeBtn?.classList.remove('hidden');
    player.innerHTML = buildYouTubeEmbed(id, start);
  });
});

document.querySelectorAll('.work-card-close').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeWorkCard(btn.closest('.work-card'));
  });
});

// Gentle service card interaction
document.querySelectorAll('.service-card').forEach((row) => {
  row.addEventListener('mouseenter', () =>
    gsap.to(row, { x: 8, duration: 0.35, ease: 'power2.out' })
  );
  row.addEventListener('mouseleave', () =>
    gsap.to(row, { x: 0, duration: 0.45, ease: 'power2.out' })
  );
});
