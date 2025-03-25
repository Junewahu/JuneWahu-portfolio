// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize Radar Chart
const radarCtx = document.getElementById('skillsRadarChart').getContext('2d');
const radarChart = new Chart(radarCtx, {
    type: 'radar',
    data: {
        labels: [
            'Clinical Knowledge',
            'Technical Skills',
            'Research Methodology',
            'Problem Solving',
            'Patient Communication',
            'Innovation'
        ],
        datasets: [{
            label: 'Skill Level',
            data: [95, 80, 90, 85, 92, 88],
            backgroundColor: 'rgba(78, 205, 196, 0.2)',
            borderColor: 'rgba(78, 205, 196, 1)',
            borderWidth: 2,
            pointBackgroundColor: '#FF6B6B',
            pointRadius: 4
        }]
    },
    options: {
        scales: {
            r: {
                angleLines: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: {
                    backdropColor: 'transparent'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would normally send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Initialize Particle.js
document.addEventListener('DOMContentLoaded', function() {
    particlesJS.load('particles-js', 'assets/js/particles.json', function() {
        console.log('Particles.js loaded');
    });
});

// Project Modals
const modalToggles = document.querySelectorAll('.project-modal-toggle');
const modals = document.querySelectorAll('.project-modal');
const closeButtons = document.querySelectorAll('.modal-close');

modalToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('href');
        document.querySelector(modalId).style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.project-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// Close modal when clicking outside
modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Tab functionality for code examples
const tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Add active class to clicked button and corresponding content
        this.classList.add('active');
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
});

// Article search functionality
const performSearch = (query) => {
    // In a real implementation, this would filter articles
    console.log(`Searching for: ${query}`);
    // For now, we'll just highlight matching articles
    document.querySelectorAll('.blog-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query.toLowerCase())) {
            card.style.boxShadow = '0 0 0 2px var(--primary)';
        } else {
            card.style.boxShadow = 'none';
        }
    });
};