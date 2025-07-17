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

let lastScrollTop = 0;
const header = document.querySelector('header');
const profilePicContainer = document.querySelector('.profile-pic-container');

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // alas
    header.style.top = "-160px";
    if (profilePicContainer) profilePicContainer.style.top = "-250px";
  } else {
    // ylös
    header.style.top = "0";
    if (profilePicContainer) profilePicContainer.style.top = "150px";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// kielivalikko
const switcher = document.getElementById('languageSwitcher');
switcher.value = 'fi'; // default suomi

function updateLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

switcher.addEventListener('change', () => {
  updateLanguage(switcher.value);
});

updateLanguage('fi');


document.getElementById('dropdownBtn').addEventListener('click', () => {
  const dropdown = document.getElementById('dropdownContent');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});
