var controller = new ScrollMagic.Controller();

// Получаем ссылки на элементы, которые мы хотим анимировать
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var circle = document.getElementById('circle');

// Создаем новую анимацию с помощью anime.js API
var animation = anime.timeline()
  .add({
    targets: line1,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    delay: 1000,
    duration: 1000
  })
  .add({
    targets: line2,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000
  })
  .add({
    targets: circle,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000
  })


var scene = new ScrollMagic.Scene({
    triggerElement: '..header1.sticked',
    triggerHook: 'onEnter',
    duration: '100%'
  })
  .addTo(controller);


scene.on('progress', function(event) {
  animation.seek(animation.duration * event.progress);
});

// Возвращаем элемент в исходное положение при прокрутке страницы вверх
scene.on('leave', function(event) {
  animation.seek(animation.duration * (1 - event.progress));
});


