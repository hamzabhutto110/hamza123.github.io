let slideIndex = 0;

function showSlide() {
  const slides = document.querySelector(".carousel-track");
  const totalSlides = document.querySelectorAll(".carousel-image").length;

  if (slideIndex === -1) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex === totalSlides) {
    slideIndex = 0;
  }

  const translateValue = -slideIndex * 100 + "%";
  slides.style.transform = "translateX(" + translateValue + ")";
}

function changeSlide(n) {
  slideIndex += n;
  showSlide();
}

function autoSlide() {
  changeSlide(1);
}


showSlide();


setInterval(autoSlide, 5000);