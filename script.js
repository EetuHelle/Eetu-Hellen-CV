// Fade-in effect for sections
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

// Header and profile image hide/show on scroll
let lastScrollTop = 0;
const header = document.querySelector('header');
const profilePicContainer = document.querySelector('.profile-pic-container');

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.style.top = "-160px";
    if (profilePicContainer) profilePicContainer.style.top = "-250px";
  } else {
    // Scrolling up
    header.style.top = "0";
    if (profilePicContainer) profilePicContainer.style.top = "150px";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Language switcher
const switcher = document.getElementById('languageSwitcher');
switcher.value = 'fi'; // set default to Finnish

function updateLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

switcher.addEventListener('change', () => {
  updateLanguage(switcher.value);
});

// On initial load → set to Finnish
updateLanguage('fi');


// Dropdown toggle for Links & Contact
document.getElementById('dropdownBtn').addEventListener('click', () => {
  const dropdown = document.getElementById('dropdownContent');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});
