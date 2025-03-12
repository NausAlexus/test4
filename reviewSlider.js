let currentIndex = 0;
const slides = document.querySelectorAll('.reviews-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('reviews-active');
        if (i === index) {
            slide.classList.add('reviews-active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 5000);