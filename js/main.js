document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const primaryNav = document.querySelector('#primary-nav');
  const icon = menuToggle.querySelector('.hamburger-icon');

  menuToggle.addEventListener('click', function() {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    
    primaryNav.classList.toggle('active');

    if (icon.textContent.trim() === '☰') {
      icon.textContent = '×';
    } else {
      icon.textContent = '☰';
    }
  });
});