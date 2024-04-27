  document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const headerRight = document.querySelector('.header-right');
    
    menuIcon.addEventListener('click', function() {
      headerRight.style.display = headerRight.style.display === 'block' ? 'none' : 'block';
    });
  });