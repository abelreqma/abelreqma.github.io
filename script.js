// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (persisted)
const root = document.documentElement;
const stored = (() => { try { return localStorage.getItem('theme'); } catch { return null; } })();
if (stored === 'light' || stored === 'dark') root.setAttribute('data-theme', stored);

document.getElementById('theme-toggle').addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch {}
});

// Scroll reveal
const revealEls = document.querySelectorAll('.section, .hero__cta, .stats, .card, .stack__cat, .repo, .paper, .htb-card');
revealEls.forEach(el => el.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}
