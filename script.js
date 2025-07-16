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

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrollaa alas → Otsikko katoaa
      header.style.top = "-160px"; // Otsikon koko
    } else {
      // Scrollaa ylös → Otsikko näkyy
      header.style.top = "0";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

