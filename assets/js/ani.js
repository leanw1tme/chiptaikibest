// Создаем контроллер ScrollMagic
var controller = new ScrollMagic.Controller();

    var modalData = [
      {title: 'Тип 2. Альтруист.', 
       stress: 'Стресс: 8',
       rost: 'Рост: 4 ',
       content3: 'Фиксация: Стремление к теплым взаимоотношениям. ',
       content: 'Двойки применяют свой дар на удовлетворение нужд других людей, на заботу об их здоровье, питании, образовании и благосостоянии. ',
       content1: 'Поиск эмоций за счёт других людей управляет жизнью двоек. ',
       content2: 'Тип альтруист относится к триаде релятивистов. ',
       image: 'assets/img/belos.jpg'},
      {title: '1 тип. Перфекционист.', 
       stress: 'Стресс: 4',
       rost: 'Рост: 7',
       content3: 'Фиксация: Быть компетентным, улучшить окружение и/или себя.  ',
       content: 'Единицы – идеалисты, ими движет сильное стремление к правде, справедливости, морали. ',
       content1: 'Поиск совершенства управляет жизнью единиц. ',
       content2: 'Тип перфекционист относится к триаде идеализации. ',
       image: 'assets/img/elsa.jpg'},
      {title: 'Тип 9. Посредник..', 
       stress: 'Стресс: 6',
       rost: 'Рост:3',
       content3: 'Фиксация: Мир во всем мире.',
       content: 'Девятки мотивированы потребностью сохранять мир, ладить с другими, избегать конфликтов. Т.к. они в особенности перенимают качества других восьми типов. У девяток есть много вариаций их личностей, от нежного и мягкого до независимого и сильного.',
       content1: 'Поиск комфорта управляет жизнью девятки. ',
       content2: 'Тип посредник относится к триаде прагматиков.  ',
       image: 'assets/img/posred.jpg'},
      {title: 'Тип 8. Босс.', 
       stress: 'Стресс: 5',
       rost: 'Рост: 2',
       content3: 'Фиксация: Амбиции.',
       content: 'Восьмерки мотивированы потребностью быть уверенными в себе и сильными, а также избегать чувства слабости или зависимости. Восьмерки производят впечатление сильных и мощных, и даже способны вселять ощущение силы в окружающих.',
       content1: 'Поиск собственной силы воли управляет жизнью восьмерки. ',
       content2: 'Тип босс относится к триаде релятивистов. ',
       image: 'assets/img/photo_2023-04-03_15-06-21.jpg'},
      {title: 'Тип 7. Энтузиаст.', 
       stress: 'Стресс: 1',
       rost: 'Рост: 5',
       content3: 'Фиксация: Оптимизм, многогранность.',
       content: 'Семерки мотивированы необходимостью быть счастливыми и планируют доставляющие удовольствие занятия, чтобы внести свой вклад в мир, а также избегают страданий и боли.',
       content1: 'Поиск новых граней управляет жизнью семерки. ',
       content2: 'Тип энтузиаст относится к триаде идеализации. ',
       image: 'assets/img/photo_2023-04-03_15-07-11.jpg'},
      {title: 'Тип 6. Скептик.', 
       stress: 'Стресс: 3',
       rost: 'Рост: 9',
       content3: 'Фиксация: Страх.',
       content: 'Шестерки мотивированы необходимостью безопасности. Фобические шестерки внешне выглядят испуганными и ищут одобрения. Контрфобические шестерки борются со своими страхами. Фобические и контрфобические проявления могут присутствовать одновременно или проявляться по очереди.',
       content1: 'Поиск решения своих страхов управляет жизнью шестерки. ',
       content2: 'Тип скептик относится к триаде прагматиков. ',
       image: 'assets/img/mulan.jpg'},
      {title: 'Тип 5. Мыслитель.', 
       stress: 'Стресс: 7',
       rost: 'Рост: 8',
       content3: 'Фиксация: Аналитика. ',
       content: 'Особый дар пятерок состоит в том, что они открыты для новых фактов и впечатлений. Пятерки открыватели новых идей, исследователи, изобретатели, которые заинтересованы в изучении вещей в деталях.',
       content1: 'Поиск новых просторов управляет жизнью пятерок.',
       content2: 'Тип мыслитель относится к триаде релятивистов. ',
       image: 'assets/img/mis.jpg'},
      {title: 'Тип 4. Индивидуалист.', 
       stress: 'Стресс: 2',
       rost: 'Рост: 1',
       content3: 'Фиксация: Поиск собственной индивидуальности. ',
       content: 'Четверок легко распознать. Они не зависят от чьего либо мнения и кажутся отрешенными и эмоциональными, с нотками меланхоличности. Они часто ищут себе хобби, в которых смогут в полной мере выражать себя, т.к. это представляет для них особую ценность. ',
       content1: 'Поиск себя и своей значимости управляют жизнью четверки. ',
       content2: 'Тип достигатель относится к триаде идеализации. ',
       image: 'assets/img/ariel.jpg'},
      {title: 'Тип 3. Достигатель.', 
       stress: 'Стресс: 9',
       rost: 'Рост: 6 ',
       content3: 'Фиксация: Стремление стать частью общества. ',
       content: 'Тройки черпают энергию из своего успеха.  Тройки показывают себя людям достигателями, карьеристами, стремящимися к статусу, и они справляются с каждой ролью лучше, чем со своим истинным Я, с которым они едва знакомы. ',
       content1: 'Поиск собственного успеха и желание самоутвердиться управляют жизнью тройки. ',
       content2: 'Тип достигатель относится к триаде прагматиков. ',
       image: 'assets/img/tiana.jpg'},
    ];
// Определяем массив из 9 элементов
var circles = document.querySelectorAll('.circlez');

var cards = document.querySelectorAll('.card');

var colorsExamples = anime.timeline({
  endDelay: 1000,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
});

// Массив цветов для каждого элемента
var colors = ['#FF0000', '#808080', '#FFD700', '#008B8B', '#00FF7F', '#7B68EE', '#1E90FF', '#EE82EE', '#DAA520'];
var values = ['2', '1', '9', '8', '7', '6', '5', '4', '3'];

circles.forEach(function(circlez, index) {
  circlez.style.backgroundColor = 'transparent';
  circlez.style.boxShadow = '0 0 20px ' + colors[index];
  circlez.style.transition = 'box-shadow 0.3s';

    
  // Добавляем обработчики событий для эффекта свечения
circlez.addEventListener('mouseenter', function() {
  circlez.style.boxShadow = '0 0 40px ' + colors[index];
  var cards = document.querySelector('#card' + (index + 1));
  cards.classList.add('show');
  cards.style.zIndex = '1';
    var color = this.style.backgroundColor;
  document.querySelector('#circle').style.stroke = color;
});

circlez.addEventListener('mouseleave', function() {
  circlez.style.boxShadow = '0 0 20px ' + colors[index];
  var cards = document.querySelector('#card' + (index + 1));
  timeoutId = setTimeout(function() {
    cards.classList.remove('show');
    cards.style.zIndex = '-1';
    document.querySelector('#circle').style.stroke = '#eee';
  }); // устанавливаем задержку на 500 мс (можно изменить значение)
});
    
  circlez.addEventListener('click', function() {
        // Отображаем модальное окно
        var modal = document.querySelector('.modal');
        modal.style.display = 'block';
        // Заполняем содержимое модального окна
  var modalContent = document.querySelector('.modal-content');
modalContent.innerHTML = '<img src="' + modalData[index].image + '">' +'<h2 style="margin-left: 130px; margin-top: 10px;">' + modalData[index].title + '</h2>' +
    '<p class="my-custom-class1">' + modalData[index].stress + '</p>' +
    '<p class="my-custom-class2">' + modalData[index].rost + '</p>' +
    '<p class="my-custom-p3">' + modalData[index].content3 + '</p>' +
    '<p class="my-custom-p">' + modalData[index].content + '</p>' +
    '<p class="my-custom-p1">' + modalData[index].content1 + '</p>' +
    '<p class="my-custom-p2">' + modalData[index].content2 + '</p>';

      });
    
        var modal = document.querySelector('.modal');
    modal.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });



  // Вычисляем угол поворота для текущего элемента
  var angle = (index * 40) + 10;

  // Задаем начальные значения для анимации
  anime.set(circlez, {
    rotate: angle + 'deg',
    opacity: 0,
    translateX: '100px',
    rotate: '-' + angle + 'deg',
    backgroundColor: colors[index],
    innerHTML: '<div class="text-container"><div class="value">' + values[index] + '</div></div>'
  });

  // Добавляем стили для центрирования текста внутри круга
  var textContainer = circlez.querySelector('.text-container');
  textContainer.style.display = 'flex';
  textContainer.style.alignItems = 'center';
  textContainer.style.justifyContent = 'center';
  textContainer.style.width = '100%';
  textContainer.style.height = '100%';
  textContainer.style.transform = 'rotate(' + angle + 'deg)';

  // Создаем анимацию для текущего элемента
  var animation = anime({
    targets: circlez,
    opacity: [0, 0.8, 1],
    borderRadius: ['25%', '50%'],
    rotate: angle + 360 + 'deg',
    translateX: '200px',
    rotate: '-' + (angle + 360) + 'deg',
    duration: 1000,
    easing: 'easeOutQuad',
    loop: false, 
  border: '5px solid ' + colors[index],
  borderColor: [
    { value: colors[index] },
    { value: '#ffffff' },
    { value: colors[index] }
  ],
  });

  // Создаем сцену ScrollMagic для текущего элемента
  var scene = new ScrollMagic.Scene({
    triggerElement: '..header1.sticked',
    triggerHook: 'onLeave',
    duration: '100%'
  })
  .addTo(controller);

  // Запускаем анимацию при прокручивании вниз
  scene.on('progress', function(event) {
    animation.seek(animation.duration * event.progress);
  });

  // Возвращаем элемент в исходное положение при прокрутке страницы вверх
  scene.on('leave', function(event) {
    animation.seek(animation.duration * (1 - event.progress));
  });
});

// Получить все карточки на странице

// Добавить обработчики событий для каждой карточки
cards.forEach(function(card) {
  // Обработчик события при наведении на карточку
  card.addEventListener('mouseenter', function() {
    this.classList.add('show'); // Показать карточку
    this.style.zIndex = '1'; // Установить z-index для перекрытия остальных элементов
  });

  // Обработчик события при уходе мыши с карточки
  card.addEventListener('mouseleave', function() {
    this.classList.remove('show'); // Скрыть карточку
    this.style.zIndex = '-1'; // Установить стандартный z-index
  });
});
