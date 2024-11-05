let currentSlide = 0;

setInterval(nextSlide, 3000);

function nextSlide() {
    changeSlide(1); // Move to the next slide
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active'); // Remove active class from current slide
    currentSlide = (currentSlide + direction + slides.length) % slides.length; // Wrap around
    slides[currentSlide].classList.add('active'); // Add active class to the new slide
    updateSliderPosition(); // Update the slider position
}

function updateSliderPosition() {
    const slidesContainer = document.querySelector('.slides'); // Select the slides container
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`; // Adjust slider position based on the current slide
}

// Initialize the slider by setting the first slide as active
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.add('active'); // Set first slide as active
    updateSliderPosition(); // Set initial position of the slider

    // Add event listeners for buttons
    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));
});
