// année footer
document.getElementById('year').textContent = new Date().getFullYear();

// thème clair/sombre (persistant)
const toggle = document.getElementById('theme-toggle');
const saved = localStorage.getItem('theme');
if (saved === 'light') document.body.classList.add('light');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});
toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';

// animation au scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); }
  });
},{ threshold: 0.12 });

document.querySelectorAll('.fade').forEach(el=>observer.observe(el));

// soulignement nav actif léger (section visible)
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header.nav nav a');

const spy = () => {
  let index = sections.length;
  while(--index && window.scrollY + 120 < sections[index].offsetTop){}
  navLinks.forEach(link => link.classList.remove('active'));
  const id = sections[index].id;
  const active = document.querySelector(`header.nav nav a[href="#${id}"]`);
  if (active) active.classList.add('active');
};
spy();
window.addEventListener('scroll', spy);
