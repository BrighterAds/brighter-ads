// All page content is visible without JavaScript.
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
function closeMenu() {
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navLinks.classList.contains('open')) {
    closeMenu();
    navToggle.focus();
  }
});

// Collapse the mobile menu only after its controls are ready.
document.documentElement.classList.add('nav-ready');

// Repeat one complete group so the expertise strip loops without a jump.
const ticker = document.querySelector('.ticker-section');
const tickerTrack = document.getElementById('tickerTrack');
const tickerToggle = document.querySelector('.ticker-toggle');
const tickerCopy = tickerTrack.querySelector('.ticker-group').cloneNode(true);
tickerCopy.setAttribute('aria-hidden', 'true');
tickerTrack.appendChild(tickerCopy);
tickerToggle.hidden = false;
tickerToggle.addEventListener('click', () => {
  const paused = ticker.classList.toggle('ticker-paused');
  tickerToggle.setAttribute('aria-pressed', String(paused));
});
ticker.classList.add('ticker-ready');
