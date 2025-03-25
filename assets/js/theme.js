const toggle = document.getElementById('dark-mode-toggle');
const themeStyle = document.getElementById('theme-style');

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggle.checked = true;
        themeStyle.href = 'assets/css/dark-mode.css';
    }
}

// Theme toggle function
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeStyle.href = 'assets/css/dark-mode.css';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeStyle.href = 'assets/css/light-mode.css';
        localStorage.setItem('theme', 'light');
    }
}

toggle.addEventListener('change', switchTheme);