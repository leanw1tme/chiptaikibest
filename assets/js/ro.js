var colorsExamples = anime.timeline({
  easing: 'linear',
  direction: 'alternate',
  loop: true
})
.add({
  targets: '.circle1',
  backgroundColor: [
    { value: '#FFD700', duration: 3000 },
    { value: '#008B8B', duration: 3000 },
    { value: '#00FF7F', duration: 3000 },
    { value: '#7B68EE', duration: 3000 },
    { value: '#1E90FF', duration: 3000 },
    { value: '#EE82EE', duration: 3000 },
    { value: '#DAA520', duration: 3000 },
    { value: '#FF0000', duration: 3000 },
    { value: '#808080', duration: 3000 },
    { value: '#17171a', duration: 1500 },       
// добавляем первое значение в конец массива
  ],
  duration: 1000,
  delay: anime.stagger(80),
}, 0);
