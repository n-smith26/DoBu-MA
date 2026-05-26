// ⭐ SLIDESHOW SCRIPT ⭐
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}

slides[0].classList.add("active");
setInterval(showSlides, 4000);

