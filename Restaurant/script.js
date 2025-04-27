// Mobile nav toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
  document.body.classList.toggle('nav-open');
});

// Optional: Close nav on link click (mobile)
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      navLinks.classList.add('hidden');
      document.body.classList.remove('nav-open');
    }
  });
});
