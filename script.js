// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (persist)
const toggle = document.getElementById('theme-toggle');
const saved = localStorage.getItem('theme');
if (saved === 'light') document.body.classList.add('light');
toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); }
  });
},{ threshold: 0.12 });
document.querySelectorAll('.fade').forEach(el=>observer.observe(el));

// Active nav link while scrolling
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header.nav .nav-link');
function spy(){
  let idx = sections.length;
  while(--idx && window.scrollY + 120 < sections[idx].offsetTop){}
  navLinks.forEach(a=>a.classList.remove('active'));
  const id = sections[idx].id;
  const active = document.querySelector(`header.nav .nav-link[href="#${id}"]`);
  if(active) active.classList.add('active');
}
spy();
window.addEventListener('scroll', spy);
