const sliderWrapper = document.querySelector('.slider-wrapper');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const sliderItems = document.querySelectorAll('.slider-item');

let currentIndex = 0;
let animationStartTime;
const animationDuration = 20000; // 1 секунда

function showCurrentSlide() {
  sliderWrapper.style.transform = `translateX(-${currentIndex * sliderItems[0].offsetWidth}px)`;
}

function animate(currentTime) {
  if (!animationStartTime) {
    animationStartTime = currentTime;
  }
  const timeElapsed = currentTime - animationStartTime;
  const progress = Math.min(timeElapsed / animationDuration, 1);
  const currentPosition = currentIndex * sliderItems[0].offsetWidth;
  const targetPosition = (currentIndex + 1) % sliderItems.length * sliderItems[0].offsetWidth;
  const position = currentPosition + (targetPosition - currentPosition) * progress;
  sliderWrapper.style.transform = `translateX(-${position}px)`;

  if (progress < 1) {
    requestAnimationFrame(animate);
  } else {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    animationStartTime = null;
    showCurrentSlide();
    requestAnimationFrame(animate);
  }
}

function moveNext() {
  stopAnimation();
  currentIndex = (currentIndex + 1) % sliderItems.length;
  showCurrentSlide();
  startAnimation();
}

function movePrev() {
  stopAnimation();
  currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
  showCurrentSlide();
  startAnimation();
}

function startAnimation() {
  animationStartTime = null;
  requestAnimationFrame(animate);
}

function stopAnimation() {
  animationStartTime = null;
}

function handleMouseEnter() {
  startAnimation();
}

function handleMouseLeave() {
  stopAnimation();
}

prevButton.addEventListener('click', movePrev);
nextButton.addEventListener('click', moveNext);

sliderWrapper.addEventListener('mouseenter', handleMouseEnter);
sliderWrapper.addEventListener('mouseleave', handleMouseLeave);

showCurrentSlide();
