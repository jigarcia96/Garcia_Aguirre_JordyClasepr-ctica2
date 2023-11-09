let slideIndex = 1;

showSlide(slideIndex);

function showSlide(n) {
    const slides = document.querySelectorAll('.carrusel-slide');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

function moveSlide(n) {
    showSlide(slideIndex += n);
}

document.getElementById('prevBtn').addEventListener('click', () => {
    moveSlide(-1);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    moveSlide(1);
});
