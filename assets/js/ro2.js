// Создаем новый контроллер
var controller = new ScrollMagic.Controller();

// Создаем сцену для анимации перемещения экрана
var screenScene = new ScrollMagic.Scene({
  triggerElement: '.header1.sticked',
  triggerHook: 'onEnter',
  duration: '200%',
})
.setPin('.header1.sticked') // Закрепляем ноутбук на месте во время анимации
.addTo(controller); // Добавляем сцену в контроллер
var allCircles = document.querySelectorAll('.circle1');
// Создаем анимацию перемещения экрана
var moveToCenter = anime.timeline({
  endDelay: 50,
  easing: 'easeOutCubic',
  direction: 'normal',
  loop: false,
  autoplay: false
})
.add({
  targets: '.circle1',
  opacity: 1,
  position: 'absolute',
  top: '17%',
  left: '295%',
  translateX: '-50%',
  translateY: '-50%',
  duration: 20,
})


// Запускаем анимацию при прокрутке страницы вниз
screenScene.on('progress', function(event) {
  moveToCenter.seek(moveToCenter.duration * event.progress);
});

// Возвращаем экран в исходное положение при прокрутке страницы вверх
screenScene.on('leave', function(event) {
  moveToCenter.seek(moveToCenter.duration * (1 - event.progress));
});

