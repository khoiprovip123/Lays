var slides = document.getElementsByClassName('slide');
var currentSlide = 0;

setSlide = function() {
  for (var i = 0; i < slides.length; i++) {
    if (currentSlide === i) {
      slides[i].style = '';
    } else {
      slides[i].style = 'display:none';
    }
  }
}

setSlide();

prevImage = function() {
  currentSlide = currentSlide - 1;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  setSlide();
}
nextImage = function() {
  currentSlide = currentSlide + 1;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  setSlide();
}