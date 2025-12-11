// ============================================
// HEADER SCROLL BEHAVIOR
// ============================================
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('hide');
        header.classList.add('show');
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling DOWN
        header.classList.add('hide');
        header.classList.remove('show');
    } else {
        // Scrolling UP
        header.classList.remove('hide');
        header.classList.add('show');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// CARDS SCROLL ANIMATION
// ============================================
const cardsSection = document.querySelector('.cards-section');
const cardsWrapper = document.querySelector('.cards-wrapper');


// ============================================
// CTA BUTTON CLICK
// ============================================
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        // Aquí puedes agregar la funcionalidad del contacto
        alert('¡Pronto nos pondremos en contacto contigo!');
        // O redireccionar a una sección de contacto
        // window.location.href = '#contacto';
    });
}

console.log('✅ Website loaded successfully!');

// ============================================
// TESTIMONIAL CAROUSEL
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.testimonial-track');
    if (track) {
        const cards = track.querySelectorAll('.testimonial-card');
        let currentIndex = 0;
        
        function slide() {
            currentIndex++;
            if (currentIndex >= cards.length) {
                currentIndex = 0;
            }
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        setInterval(slide, 5000);
    }

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animatedElements = document.querySelectorAll(
        '.hero-content, .cards-title h2, .about-card, .section-header, .service-card, .testimonial-carousel, .contact-card, .map-container, .faq-item, .footer-content'
    );

    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    

// ===================================
// Protección contra inspección y copia
// ===================================

// Deshabilitar click derecho
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});

// Deshabilitar selección de texto
document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
});


// Deshabilitar atajos de teclado para inspeccionar
document.addEventListener('keydown', (e) => {
    // F12
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+Shift+I (Inspeccionar)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+Shift+J (Consola)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+Shift+C (Selector de elementos)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+U (Ver código fuente)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+S (Guardar página)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
    }
});

// Deshabilitar arrastrar imágenes
document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

    // ============================================
    // CUSTOM CURSOR
    // ============================================
    const cursor = document.querySelector('.custom-cursor');
    
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

    }
});