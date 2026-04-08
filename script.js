const input = document.getElementById('myInput');
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
    button.textContent = input.value;
});

const image = document.getElementById('mainImage');
// Меняем путь к картинке
image.src = 'images/703.png';

// 1. Меняссылкуем 
const link = document.getElementById('myLink');
link.href = 'https://github.com';

// 2. Добавляем атрибут alt для изображения
const taskImg = document.getElementById('taskImage');
taskImg.alt = 'Красивый пейзаж';


const firstItem = document.querySelector('#myList li');
firstItem.textContent = 'Обновленный первый элемент';