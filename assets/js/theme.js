document.addEventListener('DOMContentLoaded', function() {
    // Theme elements
    const themeToggle = document.getElementById('theme-switch');
    const themeStyle = document.getElementById('theme-style');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Theme color picker elements
    const colorPickerToggle = document.querySelector('.color-picker-toggle');
    const colorOptions = document.querySelector('.color-options');
    const colorOptionsButtons = document.querySelectorAll('.color-option');
    
    // Apply saved theme or system preference
    function applyTheme() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = prefersDarkScheme.matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            enableDarkMode();
        } else {
            enableLightMode();
        }
        
        // Apply saved color if exists
        const savedColor = localStorage.getItem('theme-color');
        if (savedColor) {
            document.documentElement.style.setProperty('--primary-color', savedColor);
            updateThemeColorMeta(savedColor);
        }
    }
    
    // Theme switching functions
    function enableDarkMode() {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeStyle.href = 'assets/css/dark-mode.css';
        localStorage.setItem('theme', 'dark');
        if (themeToggle) themeToggle.checked = true;
    }
    
    function enableLightMode() {
        document.documentElement.setAttribute('data-theme', 'light');
        themeStyle.href = 'assets/css/light-mode.css';
        localStorage.setItem('theme', 'light');
        if (themeToggle) themeToggle.checked = false;
    }
    
    // Theme toggle handler
    function handleThemeToggle(e) {
        if (e.target.checked) {
            enableDarkMode();
        } else {
            enableLightMode();
        }
    }
    
    // Update theme-color meta tag
    function updateThemeColorMeta(color) {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', color);
    }
    
    // Color picker functions
    function toggleColorPicker() {
        colorOptions.classList.toggle('active');
    }
    
    function handleColorSelection(e) {
        const color = e.target.getAttribute('data-color');
        document.documentElement.style.setProperty('--primary-color', color);
        updateThemeColorMeta(color);
        localStorage.setItem('theme-color', color);
        colorOptions.classList.remove('active');
    }
    
    // Close color picker when clicking outside
    function handleClickOutside(e) {
        if (!colorPickerToggle.contains(e.target) && !colorOptions.contains(e.target)) {
            colorOptions.classList.remove('active');
        }
    }
    
    // Initialize theme
    applyTheme();
    
    // Event listeners
    if (themeToggle) {
        themeToggle.addEventListener('change', handleThemeToggle);
    }
    
    // System preference changes
    prefersDarkScheme.addListener((e) => {
        if (!localStorage.getItem('theme')) {
            e.matches ? enableDarkMode() : enableLightMode();
        }
    });
    
    // Color picker functionality
    if (colorPickerToggle) {
        colorPickerToggle.addEventListener('click', toggleColorPicker);
        
        colorOptionsButtons.forEach(button => {
            button.addEventListener('click', handleColorSelection);
        });
        
        document.addEventListener('click', handleClickOutside);
    }
    
    // Smooth transitions after load
    setTimeout(() => {
        document.documentElement.style.transition = 'all 0.3s ease';
    }, 500);
});