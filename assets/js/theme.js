// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const themeStyle = document.getElementById('theme-style');
    const themeMeta = document.getElementById('theme-meta');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply the saved theme
    if (savedTheme === 'dark') {
        themeSwitch.checked = true;
        themeStyle.href = 'assets/css/dark-mode.css';
        document.body.setAttribute('data-theme', 'dark');
        themeMeta.setAttribute('content', '#1a1423');
    } else {
        themeStyle.href = 'assets/css/light-mode.css';
        document.body.setAttribute('data-theme', 'light');
        themeMeta.setAttribute('content', '#ff85a2');
    }
    
    // Theme switch event
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            themeStyle.href = 'assets/css/dark-mode.css';
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeMeta.setAttribute('content', '#1a1423');
        } else {
            themeStyle.href = 'assets/css/light-mode.css';
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeMeta.setAttribute('content', '#ff85a2');
        }
        
        // Update radar chart colors if it exists
        updateRadarChartColors();
    });
    
    // Update radar chart colors based on theme
    function updateRadarChartColors() {
        const radarChart = Chart.getChart('skillsRadarChart');
        if (radarChart) {
            const isDark = document.body.getAttribute('data-theme') === 'dark';
            
            // Update colors
            radarChart.data.datasets[0].backgroundColor = isDark ? 'rgba(248, 165, 194, 0.2)' : 'rgba(255, 133, 162, 0.2)';
            radarChart.data.datasets[0].borderColor = isDark ? 'rgba(248, 165, 194, 1)' : 'rgba(255, 133, 162, 1)';
            radarChart.data.datasets[0].pointBackgroundColor = isDark ? 'rgba(248, 165, 194, 1)' : 'rgba(255, 133, 162, 1)';
            radarChart.data.datasets[0].pointHoverBackgroundColor = isDark ? 'rgba(248, 165, 194, 1)' : 'rgba(255, 133, 162, 1)';
            
            // Update scale colors
            radarChart.options.scales.r.angleLines.color = isDark ? 'rgba(226, 217, 243, 0.2)' : 'rgba(90, 74, 106, 0.2)';
            radarChart.options.scales.r.ticks.color = isDark ? 'rgba(226, 217, 243, 0.8)' : 'rgba(90, 74, 106, 0.8)';
            radarChart.options.scales.r.grid.color = isDark ? 'rgba(226, 217, 243, 0.2)' : 'rgba(90, 74, 106, 0.2)';
            radarChart.options.scales.r.pointLabels.color = isDark ? 'rgba(226, 217, 243, 0.8)' : 'rgba(90, 74, 106, 0.8)';
            
            radarChart.update();
        }
    }
    
    // Watch for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) { // Only if user hasn't set a preference
            const newTheme = e.matches ? 'dark' : 'light';
            themeSwitch.checked = e.matches;
            themeStyle.href = `assets/css/${newTheme}-mode.css`;
            document.body.setAttribute('data-theme', newTheme);
            themeMeta.setAttribute('content', newTheme === 'dark' ? '#1a1423' : '#ff85a2');
            updateRadarChartColors();
        }
    });
});