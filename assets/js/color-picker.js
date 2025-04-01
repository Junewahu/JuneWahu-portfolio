// Color Picker Functionality
document.addEventListener('DOMContentLoaded', function() {
    const colorPickerToggle = document.querySelector('.color-picker-toggle');
    const colorOptions = document.querySelector('.color-options');
    const colorOptionsButtons = document.querySelectorAll('.color-option');
    const root = document.documentElement;
    const themeMeta = document.getElementById('theme-meta');
    
    // Toggle color picker visibility
    if (colorPickerToggle) {
        colorPickerToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            colorOptions.classList.toggle('active');
        });
    }
    
    // Close color picker when clicking outside
    document.addEventListener('click', function(e) {
        if (!colorPickerToggle.contains(e.target) && !colorOptions.contains(e.target)) {
            colorOptions.classList.remove('active');
        }
    });
    
    // Color selection
    colorOptionsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            
            // Update CSS variable
            root.style.setProperty('--primary', color);
            
            // Update theme color meta tag
            themeMeta.setAttribute('content', color);
            
            // Save to localStorage
            localStorage.setItem('primaryColor', color);
            
            // Close the color picker
            colorOptions.classList.remove('active');
            
            // Update button styles if needed
            updateButtonStyles(color);
        });
    });
    
    // Apply saved color preference on page load
    const savedColor = localStorage.getItem('primaryColor');
    if (savedColor) {
        root.style.setProperty('--primary', savedColor);
        themeMeta.setAttribute('content', savedColor);
        updateButtonStyles(savedColor);
    }
    
    // Update button styles based on selected color
    function updateButtonStyles(color) {
        const buttons = document.querySelectorAll('.btn-primary, .btn-outline');
        buttons.forEach(button => {
            if (button.classList.contains('btn-primary')) {
                button.style.boxShadow = `0 4px 15px ${hexToRgba(color, 0.4)}`;
                button.addEventListener('mouseenter', () => {
                    button.style.boxShadow = `0 8px 25px ${hexToRgba(color, 0.6)}`;
                });
                button.addEventListener('mouseleave', () => {
                    button.style.boxShadow = `0 4px 15px ${hexToRgba(color, 0.4)}`;
                });
            }
        });
    }
    
    // Helper function to convert hex to rgba
    function hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
});