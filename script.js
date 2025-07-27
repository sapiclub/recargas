const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });

  currentIndex = (currentIndex + 1) % dots.length;
}

setInterval(updateCarousel, 4000); // Cambia cada 4 segundos