 //script.js

let currentImageIndex = 0;
const images = document.querySelectorAll('.slider-image');

function showNextImage() {
    images[currentImageIndex].style.display = 'none'; 
    currentImageIndex = (currentImageIndex + 1) % images.length; 
    images[currentImageIndex].style.display = 'block'; 
}


setInterval(showNextImage, 2000);
