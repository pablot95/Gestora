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
        '.cards-title h2, .about-card, .section-header, .service-card, .testimonial-carousel, .contact-card, .map-container, .faq-item, .footer-content'
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

// ============================================
// LANGUAGE SWITCHER
// ============================================
const translations = {
    es: {
        'nav-home': 'Inicio',
        'nav-services': 'Servicios',
        'nav-contact': 'Contacto',
        'nav-process': 'Proceso',
        'hero-title': 'Ciudadanía <br> Italiana',
        'hero-desc': 'Asesoramos y gestionamos todo el proceso para que puedas tramitar tu pasaporte europeo sin vueltas.',
        'hero-btn': 'Contactanos',
        'cards-title-1': 'Tu Pasaporte',
        'cards-title-2': 'al Futuro Europeo',
        'card-italian-title': 'Ciudadanía Italiana',
        'card-italian-desc': 'Reconocimiento jure sanguinis, matrimonio y residencia',
        'card-btn-more': 'Saber más',
        'card-additional-title': 'Servicios Adicionales',
        'card-additional-desc': 'Traducciones, apostillas y asesoría legal migratoria',
        'about-title': 'Quiénes Somos',
        'about-subtitle': 'Expertos en ciudadanía italiana',
        'about-desc': 'Con más de 10 años de experiencia, hemos ayudado a miles de familias a reconectar con sus raíces europeas. Nuestro equipo de abogados y gestores especializados se encarga de cada detalle, desde la búsqueda de actas hasta la presentación de la carpeta consular, garantizando un proceso transparente y efectivo.',
        'services-title': 'Nuestros Servicios',
        'services-subtitle': 'Soluciones integrales para tu trámite de ciudadanía',
        'service-1-title': 'Búsqueda de actas',
        'service-1-desc': 'Localizamos actas en Italia, Francia, Polonia, Croacia y Argentina para que tu carpeta esté completa.',
        'service-2-title': 'Armado de Carpetas',
        'service-2-desc': 'Revisamos y organizamos tu documentación para que cumpla con todos los requisitos legales y se presente sin demoras.',
        'service-3-title': 'Asistencia Legal y Traducciones',
        'service-3-desc': 'Desarchivos de sentencias judiciales, legalizaciones, apostillas urgentes y traducciones certificadas en múltiples idiomas.',
        'service-4-title': 'Ciudadanías Internacionales',
        'service-4-desc': 'Asesoramos y gestionamos trámites de ciudadanía en países de Europa y Latinoamérica, acompañándote en cada paso.',
        'testimonials-title': 'Historias de Éxito',
        'testimonials-subtitle': 'Lo que dicen quienes ya tienen su pasaporte.',
        'testimonial-1-quote': '"Increíble servicio. En menos de un año logré obtener mi ciudadanía italiana. El equipo se encargó de todo."',
        'testimonial-1-role': 'Ciudadanía Italiana',
        'testimonial-2-quote': '"Profesionalismo puro. Me asesoraron con la Ley de Nietos y hoy ya tengo mi pasaporte. ¡Gracias!"',
        'testimonial-2-role': 'Ley de Memoria Democrática',
        'contact-title': 'Solicita una consulta gratuita',
        'contact-name-placeholder': 'Nombre',
        'contact-lastname-placeholder': 'Apellido',
        'contact-email-placeholder': 'Correo electrónico',
        'contact-phone-placeholder': 'Teléfono',
        'contact-place-avo-placeholder': 'Lugar de nacimiento del antepasado italiano',
        'contact-year-avo-placeholder': 'Año de nacimiento del antepasado italiano',
        'contact-interest-default': '¿En qué estás interesado?',
        'contact-interest-maternal': 'Ciudadanía por vía materna',
        'contact-interest-paternal': 'Ciudadanía por vía paterna',
        'contact-interest-marriage': 'Ciudadanía por matrimonio',
        'contact-interest-search': 'Búsqueda de actas',
        'contact-interest-other': 'Otro',
        'contact-participants-placeholder': 'Número de participantes en el juicio',
        'contact-message-placeholder': 'Mensaje',
        'contact-submit': 'Enviar Consulta',
        'faq-title': 'Preguntas Frecuentes',
        'faq-1-q': '¿Cuánto tiempo demora el trámite?',
        'faq-1-a': 'El tiempo varía según la vía (consular o judicial) y el consulado correspondiente. En promedio, la vía judicial en Italia demora entre 12 y 18 meses.',
        'faq-2-q': '¿Qué documentos necesito para empezar?',
        'faq-2-a': 'Lo fundamental es contar con las actas de nacimiento, matrimonio y defunción de toda la línea de descendencia, desde el avo italiano hasta vos.',
        'faq-3-q': '¿Realizan búsquedas de actas en Italia?',
        'faq-3-a': 'Sí, contamos con gestores en Italia para localizar actas de nacimiento y matrimonio en comunas y parroquias.',
        'footer-desc': 'Tu puente hacia Europa. Expertos en gestión de ciudadanías y servicios migratorios.',
        'footer-links-title': 'Enlaces Rápidos',
        'footer-contact-title': 'Contacto',
        'footer-rights': '&copy; 2025 Cittadinanza. Todos los derechos reservados.'
    },
    pt: {
        'nav-home': 'Início',
        'nav-services': 'Serviços',
        'nav-contact': 'Contato',
        'nav-process': 'Processo',
        'hero-title': 'Cidadania <br> Italiana',
        'hero-desc': 'Assessoramos e gerenciamos todo o processo para que você possa obter seu passaporte europeu sem complicações.',
        'hero-btn': 'Contate-nos',
        'cards-title-1': 'Seu Passaporte',
        'cards-title-2': 'para o Futuro Europeu',
        'card-italian-title': 'Cidadania Italiana',
        'card-italian-desc': 'Reconhecimento jure sanguinis, casamento e residência',
        'card-btn-more': 'Saiba mais',
        'card-additional-title': 'Serviços Adicionais',
        'card-additional-desc': 'Traduções, apostilas e assessoria jurídica migratória',
        'about-title': 'Quem Somos',
        'about-subtitle': 'Especialistas em cidadania italiana',
        'about-desc': 'Com mais de 10 anos de experiência, ajudamos milhares de famílias a se reconectarem com suas raízes europeias. Nossa equipe de advogados e gestores especializados cuida de cada detalhe, desde a busca de certidões até a apresentação da pasta consular, garantindo um processo transparente e eficaz.',
        'services-title': 'Nossos Serviços',
        'services-subtitle': 'Soluções completas para o seu processo de cidadania',
        'service-1-title': 'Busca de certidões',
        'service-1-desc': 'Localizamos certidões na Itália, França, Polônia, Croácia e Argentina para que sua pasta esteja completa.',
        'service-2-title': 'Montagem de Pastas',
        'service-2-desc': 'Revisamos e organizamos sua documentação para que cumpra todos os requisitos legais e seja apresentada sem atrasos.',
        'service-3-title': 'Assistência Jurídica e Traduções',
        'service-3-desc': 'Desarquivamento de sentenças judiciais, legalizações, apostilas urgentes e traduções juramentadas em vários idiomas.',
        'service-4-title': 'Cidadanias Internacionais',
        'service-4-desc': 'Assessoramos e gerenciamos processos de cidadania em países da Europa e América Latina, acompanhando você em cada etapa.',
        'testimonials-title': 'Histórias de Sucesso',
        'testimonials-subtitle': 'O que dizem aqueles que já têm seu passaporte.',
        'testimonial-1-quote': '"Serviço incrível. Em menos de um ano consegui obter minha cidadania italiana. A equipe cuidou de tudo."',
        'testimonial-1-role': 'Cidadania Italiana',
        'testimonial-2-quote': '"Profissionalismo puro. Me assessoraram com a Lei de Netos e hoje já tenho meu passaporte. Obrigado!"',
        'testimonial-2-role': 'Lei de Memória Democrática',
        'contact-title': 'Solicite uma consulta gratuita',
        'contact-name-placeholder': 'Nome',
        'contact-lastname-placeholder': 'Sobrenome',
        'contact-email-placeholder': 'E-mail',
        'contact-phone-placeholder': 'Telefone',
        'contact-place-avo-placeholder': 'Local de nascimento do antepassado italiano',
        'contact-year-avo-placeholder': 'Ano de nascimento do antepassado italiano',
        'contact-interest-default': 'Em que você está interessado?',
        'contact-interest-maternal': 'Cidadania via materna',
        'contact-interest-paternal': 'Cidadania via paterna',
        'contact-interest-marriage': 'Cidadania por casamento',
        'contact-interest-search': 'Busca de certidões',
        'contact-interest-other': 'Outro',
        'contact-participants-placeholder': 'Número de participantes no processo',
        'contact-message-placeholder': 'Mensagem',
        'contact-submit': 'Enviar Consulta',
        'faq-title': 'Perguntas Frequentes',
        'faq-1-q': '¿Quanto tempo demora o processo?',
        'faq-1-a': 'O tempo varia de acordo com a via (consular ou judicial) e o consulado correspondente. Em média, a via judicial na Itália demora entre 12 e 18 meses.',
        'faq-2-q': '¿Quais documentos preciso para começar?',
        'faq-2-a': 'O fundamental é ter as certidões de nascimento, casamento e óbito de toda a linha de descendência, desde o avo italiano até você.',
        'faq-3-q': '¿Realizam buscas de certidões na Itália?',
        'faq-3-a': 'Sim, contamos com gestores na Itália para localizar certidões de nascimento e casamento em comunas e paróquias.',
        'footer-desc': 'Sua ponte para a Europa. Especialistas em gestão de cidadanias e serviços migratórios.',
        'footer-links-title': 'Links Rápidos',
        'footer-contact-title': 'Contato',
        'footer-rights': '&copy; 2025 Cittadinanza. Todos os direitos reservados.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            langButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
});

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if element has HTML content (like <br>)
            if (translations[lang][key].includes('<')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    
    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update WhatsApp Link & Footer Phone
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const footerPhone = document.getElementById('footer-phone');

    if (whatsappBtn) {
        if (lang === 'pt') {
            whatsappBtn.href = 'https://wa.me/5522999497665';
            if (footerPhone) footerPhone.textContent = '+55 22 99949-7665';
        } else {
            whatsappBtn.href = 'https://wa.me/5491144087309';
            if (footerPhone) footerPhone.textContent = '+54 9 11 4408-7309';
        }
    }
}
// ============================================
// HERO ANIMATION ON LOAD
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        setTimeout(() => {
            hero.classList.add('loaded');
        }, 500);
    }
});
