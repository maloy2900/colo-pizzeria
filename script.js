// Efekt pojawiania się tła pod nawigacją po przescrollowaniu
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hamburger Menu dla telefonów
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    if(navLinks.classList.contains('active')){
        hamburger.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Zamknięcie menu po kliknięciu w link (na mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Płynne animacje pojawiania się elementów menu (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-anim').forEach(element => {
    observer.observe(element);
});

// Lightbox - Powiększenie zdjęć z Galerii
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(imgSrc) {
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Zablokowanie scrolla w tle
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Przywrócenie scrolla
}

// Zamknięcie lightboxa po kliknięciu w czarne tło
lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) {
        closeLightbox();
    }
});

// Zamknięcie lightboxa klawiszem ESC
document.addEventListener('keydown', (e) => {
    if(e.key === "Escape" && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});