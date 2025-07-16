// Animate sections when they come into view
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// Hide/show header on scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down → hide header
    header.style.top = "-190px"; // Adjust to match header height
  } else {
    // Scrolling up → show header
    header.style.top = "0";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Language switcher
const switcher = document.getElementById('languageSwitcher');
switcher.addEventListener('change', () => {
  const lang = switcher.value;
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});

// Set Finnish on load
switcher.value = 'fi'; // make dropdown show Finnish
document.querySelectorAll('[data-en]').forEach(el => {
  el.textContent = el.getAttribute('data-fi');
});

// ✅ Force Finnish at load
switcher.value = 'fi';
document.querySelectorAll('[data-en]').forEach(el => {
  el.textContent = el.getAttribute('data-fi');
});

switcher.addEventListener('change', () => {
  const lang = switcher.value;
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});

