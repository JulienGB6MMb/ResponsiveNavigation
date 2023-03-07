// Code to toggle menu on click of hamburger icon
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', function() {
  menuIcon.classList.toggle('active');
  menu.classList.toggle('active');
});

// Code to close menu when user navigates to another page
const links = document.querySelectorAll('.menu a');

links.forEach(function(link) {
  link.addEventListener('click', function() {
    menuIcon.classList.remove('active');
    menu.classList.remove('active');
  });
});