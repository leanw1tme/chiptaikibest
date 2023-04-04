// Определение переменных
var card = document.querySelector('#card1');
var scrollText = card.querySelector('.scroll-text');

// Установка высоты прокручиваемого текста
scrollText.style.height = scrollText.scrollHeight + 'px';
