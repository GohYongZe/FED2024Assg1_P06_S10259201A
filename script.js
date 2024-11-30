const carouselContainer = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.featuring-photos');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

let currentIndex = 0;

function updateCarousel() {
  const imageWidth = images[0].clientWidth;
  carouselContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length; // Loop back to the start
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the end
  updateCarousel();
});

