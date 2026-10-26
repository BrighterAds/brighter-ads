// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.focus();
  }
});

// Ticker content
const tickerItems = [
  { cls:'t-blue',    text:'USER ACQUISITION' },
  { cls:'t-lime',    text:'MONETIZATION' },
  { cls:'t-magenta', text:'CREATIVE STRATEGY' },
  { cls:'t-violet',  text:'DATA ANALYTICS' },
  { cls:'t-blue',    text:'GROWTH STRATEGY' },
];
const track = document.getElementById('tickerTrack');
function renderTicker(){
  const html = tickerItems.map(i => `<div class="ticker-item ${i.cls}"><span class="dot"></span>${i.text}</div>`).join('');
  track.innerHTML = html + html; // duplicate for seamless loop
}
renderTicker();

// Scroll reveal
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion && 'IntersectionObserver' in window){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
}
