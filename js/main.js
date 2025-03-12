// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form verilerini al
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Burada form verilerini işleyebilir veya bir API'ye gönderebilirsiniz
        console.log('Form verileri:', formObject);
        
        // Formu temizle
        this.reset();
    });
}

// Sayfa yüklendiğinde animasyon
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }
});

// Particle Animation
function createParticle() {
    const particles = document.querySelector('.hero-particles');
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random size with more variation
    const size = Math.random() * 4 + 1;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random animation duration and delay
    const duration = Math.random() * 15 + 15;
    const delay = Math.random() * 2;
    particle.style.animationDuration = duration + 's';
    particle.style.animationDelay = delay + 's';
    
    // Random brightness
    const brightness = Math.random() * 0.5 + 0.5;
    particle.style.opacity = brightness;
    
    particles.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, (duration + delay) * 1000);
}

// Create particles periodically with varying intervals
function initParticles() {
    // Initial particles
    for(let i = 0; i < 30; i++) {
        setTimeout(createParticle, i * 200);
    }
    
    // Continue creating particles with random intervals
    setInterval(() => {
        const count = Math.floor(Math.random() * 3) + 1;
        for(let i = 0; i < count; i++) {
            setTimeout(createParticle, i * 100);
        }
    }, 500);
}

// Initialize particles when page loads
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    
    // Add parallax effect to hero content
    const heroContent = document.querySelector('.hero-content');
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        if (heroContent) {
            heroContent.style.transform = `
                perspective(1000px)
                rotateY(${mouseX * 5}deg)
                rotateX(${-mouseY * 5}deg)
                translateZ(10px)
            `;
        }
    });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    root: null,
    rootMargin: '8px',
    threshold: 0.0
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Add fade-in class to skill cards
    document.querySelectorAll('.skill-card').forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Enhanced Particle System
    initEnhancedParticles();
});

// Enhanced Particle System
function initEnhancedParticles() {
    const particles = document.querySelector('.hero-particles');
    if (!particles) return;

    const particleCount = 50;
    const particleColors = ['#2c7a7b', '#285e61', '#e6f1ff'];
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 4 + 1;
        const color = particleColors[Math.floor(Math.random() * particleColors.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        const blur = Math.random() * 2;
        
        // Apply styles
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${left}%;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
            filter: blur(${blur}px);
        `;
        
        particles.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, (duration + delay) * 1000);
    }

    // Initial particles
    for (let i = 0; i < particleCount; i++) {
        setTimeout(createParticle, i * 100);
    }

    // Continue creating particles
    setInterval(() => {
        createParticle();
    }, 1000);
}

// Enhanced Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Parallax Effect for Hero Section
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero-content');
    if (!hero) return;

    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    hero.style.transform = `
        perspective(1000px)
        rotateY(${mouseX * 8}deg)
        rotateX(${-mouseY * 8}deg)
        translateZ(10px)
    `;
});

// Remove project card related code
document.querySelectorAll('.project-card').forEach(card => {
    // Remove all event listeners
    const newCard = card.cloneNode(true);
    card.parentNode.replaceChild(newCard, card);
});

// Typing Animation
function typeText(element, text, speed = 50) {
    return new Promise(resolve => {
        let index = 0;
        element.textContent = '';
        element.style.opacity = '1';

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }

        type();
    });
}

// Initialize typing animation
async function initTypingAnimation() {
    const title = document.querySelector('.hero-content h1');
    const role = document.querySelector('.hero-content p');
    
    if (title && role) {
        const titleText = "Merhaba, Ben Serhat Erdem";
        const roleText = "Full Stack Developer";
        
        // First type the title
        await typeText(title, titleText, 70);
        // Then type the role with a small delay
        setTimeout(() => typeText(role, roleText, 70), 500);
    }
}

// Enhanced Navigation
function handleNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    // Handle scroll direction for header
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add shadow and more opacity when scrolling down
        if (currentScrollY > 100) {
            header.style.backgroundColor = 'rgba(10, 11, 14, 0.95)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.backgroundColor = 'rgba(10, 11, 14, 0.85)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Update active section on scroll
    function updateActiveSection() {
        const currentScrollPos = window.scrollY;
        const headerOffset = 100; // Adjust based on header height

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerOffset;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Smooth scroll to section
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const headerOffset = 80;
            const targetPosition = targetSection.offsetTop - headerOffset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Update active section on scroll with throttling
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveSection();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial active section check
    updateActiveSection();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    initTypingAnimation();
    initParticles();
    handleNavigation();
    
    // Rest of your existing DOMContentLoaded code...
}); 