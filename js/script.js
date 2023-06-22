// Change The theme dark and light
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const navbar = document.querySelector('.navbar');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', function () {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-bs-theme', newTheme);

    // Change the icon based on the theme
    themeIcon.classList.toggle('fa-moon', newTheme === 'dark');
    themeIcon.classList.toggle('fa-sun', newTheme === 'light');

    // Change BG color
    navbar.classList.remove('bg-dark', 'bg-light');
    navbar.classList.add(newTheme === 'dark' ? 'bg-dark' : 'bg-light');
});
