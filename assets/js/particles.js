{
    "particles": {
        "number": {
            "value": 120,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": ["#3a86ff", "#8338ec", "#ff006e"]
        },
        "shape": {
            "type": ["circle", "triangle", "polygon"],
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 6
            }
        },
        "opacity": {
            "value": 0.7,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1.5,
                "opacity_min": 0.2,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 3,
                "size_min": 1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 180,
            "color": "#4cc9f0",
            "opacity": 0.3,
            "width": 1.5,
            "blink": true
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": true,
            "attract": {
                "enable": true,
                "rotateX": 800,
                "rotateY": 1600
            }
        },
        "twinkle": {
            "particles": {
                "enable": true,
                "frequency": 0.05,
                "opacity": 1
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse",
                "parallax": {
                    "enable": true,
                    "force": 30,
                    "smooth": 20
                }
            },
            "onclick": {
                "enable": true,
                "mode": "bubble",
                "toggle": true
            },
            "resize": true,
            "ondiv": {
                "selectors": ["#hero"],
                "enable": true,
                "mode": "bounce",
                "type": "rectangle"
            }
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4,
                "speed": 1
            },
            "bubble": {
                "distance": 200,
                "size": 10,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3,
                "color": "#ff006e"
            },
            "grab": {
                "distance": 180,
                "line_linked": {
                    "opacity": 0.8,
                    "color": "#8338ec"
                }
            },
            "push": {
                "particles_nb": 6
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "background": {
        "color": "transparent",
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    },
    "themes": [
        {
            "name": "light",
            "default": {
                "value": true,
                "mode": "light"
            },
            "options": {
                "particles": {
                    "color": {
                        "value": ["#3a86ff", "#8338ec", "#ff006e"]
                    },
                    "line_linked": {
                        "color": "#3a86ff"
                    }
                }
            }
        },
        {
            "name": "dark",
            "default": {
                "value": false,
                "mode": "dark"
            },
            "options": {
                "particles": {
                    "color": {
                        "value": ["#4cc9f0", "#b5179e", "#f72585"]
                    },
                    "line_linked": {
                        "color": "#4cc9f0"
                    }
                }
            }
        }
    ],
    "autoPlay": true,
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "zIndex": -1,
    "fullScreen": {
        "enable": false,
        "zIndex": -1
    },
    "motion": {
        "disable": false,
        "reduce": {
            "factor": 4,
            "value": true
        }
    }
}