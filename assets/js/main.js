// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links-container');
const navLinks = document.querySelector('.nav-links');
const themeSwitch = document.getElementById('theme-switch');
const backToTop = document.querySelector('.back-to-top');
const colorPickerToggle = document.querySelector('.color-picker-toggle');
const colorOptions = document.querySelector('.color-options');
const contactForm = document.getElementById('contactForm');
const formMessage = document.querySelector('.form-message');

// Mobile Navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
    document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinksContainer.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Smooth scrolling for anchor links with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
    
    // Back to top button
    backToTop.classList.toggle('active', window.scrollY > 300);
});

// Back to top button
backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize Radar Chart
const initRadarChart = () => {
    const radarCtx = document.getElementById('skillsRadarChart');
    if (!radarCtx) return;
    
    const radarChart = new Chart(radarCtx, {
        type: 'radar',
        data: {
            labels: [
                'Medical Diagnosis',
                'Clinical Research',
                'HTML/CSS',
                'JavaScript',
                'Python',
                'Data Analysis',
                'Patient Care',
                'Technical Writing'
            ],
            datasets: [{
                label: 'Skill Level',
                data: [96, 95, 85, 70, 75, 80, 94, 88],
                backgroundColor: 'rgba(58, 134, 255, 0.2)',
                borderColor: 'rgba(58, 134, 255, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(58, 134, 255, 1)',
                pointBorderColor: '#fff',
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(58, 134, 255, 1)',
                pointHoverBorderColor: '#fff',
                pointHitRadius: 10,
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        display: true,
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        backdropColor: 'transparent',
                        color: document.body.classList.contains('dark-mode') ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    pointLabels: {
                        color: document.body.classList.contains('dark-mode') ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            elements: {
                line: {
                    tension: 0.1
                }
            }
        }
    });
};

// Contact Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        formMessage.textContent = 'Your message has been sent successfully! I will get back to you soon.';
        formMessage.classList.add('success');
        formMessage.style.display = 'block';
        
        // Reset form
        this.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
            formMessage.classList.remove('success');
        }, 5000);
    });
}

// Initialize Particle.js
const initParticles = () => {
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#3a86ff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#3a86ff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
};

// Testimonial Slider
const initTestimonialSlider = () => {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    
    if (!testimonials.length) return;
    
    let currentIndex = 0;
    
    const showTestimonial = (index) => {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        testimonials[index].classList.add('active');
    };
    
    const updateDots = (index) => {
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        dots[index].classList.add('active');
    };
    
    const nextTestimonial = () => {
        currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
        showTestimonial(currentIndex);
        updateDots(currentIndex);
    };
    
    const prevTestimonial = () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
        showTestimonial(currentIndex);
        updateDots(currentIndex);
    };
    
    // Show initial testimonial
    showTestimonial(currentIndex);
    updateDots(currentIndex);
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showTestimonial(currentIndex);
            updateDots(currentIndex);
        });
    });
    
    // Button navigation
    if (nextBtn) nextBtn.addEventListener('click', nextTestimonial);
    if (prevBtn) prevBtn.addEventListener('click', prevTestimonial);
    
    // Auto-rotate testimonials
    let testimonialInterval = setInterval(nextTestimonial, 5000);
    
    // Pause auto-rotation on hover
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        testimonialSlider.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });
        
        testimonialSlider.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(nextTestimonial, 5000);
        });
    }
};

// Theme Color Picker
const initColorPicker = () => {
    if (!colorPickerToggle) return;
    
    colorPickerToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        colorOptions.classList.toggle('active');
    });
    
    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            document.documentElement.style.setProperty('--primary', color);
            
            // Update theme color meta tag for mobile browsers
            document.querySelector('meta[name="theme-color"]').setAttribute('content', color);
            
            // Close color picker
            colorOptions.classList.remove('active');
        });
    });
    
    // Close color picker when clicking outside
    document.addEventListener('click', (e) => {
        if (!colorPickerToggle.contains(e.target) && !colorOptions.contains(e.target)) {
            colorOptions.classList.remove('active');
        }
    });
};

// Animate Skill Bars on Scroll
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width + '%';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        bar.style.width = '0';
        observer.observe(bar);
    });
};

// Initialize VanillaTilt for card hover effects
const initTiltEffects = () => {
    if (typeof VanillaTilt !== 'undefined') {
        const tiltElements = document.querySelectorAll('[data-tilt]');
        tiltElements.forEach(element => {
            VanillaTilt.init(element, {
                max: 15,
                speed: 400,
                glare: true,
                'max-glare': 0.2,
                scale: 1.05
            });
        });
    }
};

// Typewriter Effect
const initTypewriter = () => {
    const typewriterElement = document.querySelector('.typewriter');
    if (!typewriterElement) return;
    
    const texts = typewriterElement.getAttribute('data-text').split('|');
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    
    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        
        typewriterElement.textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 100);
        }
    })();
};

// Lazy Load Images
const lazyLoadImages = () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        observer.observe(img);
    });
};

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initRadarChart();
    initParticles();
    initTestimonialSlider();
    initColorPicker();
    animateSkillBars();
    initTiltEffects();
    initTypewriter();
    lazyLoadImages();
});

// Handle window resize
window.addEventListener('resize', () => {
    // Reinitialize anything that might need it
    initRadarChart();
});

// Handle reduced motion preference
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (reduceMotion.matches) {
    document.documentElement.style.setProperty('--transition', 'none');
    document.documentElement.style.setProperty('--transition-slow', 'none');
}