let chooseBtn = document.getElementById('choose');
let receiveBtn = document.getElementById('receive');
let heading = document.getElementsByTagName('h2')[0];
let nameInput = document.getElementsByClassName('contactform_name')[0];
//let phoneInput = document.getElementsByClassName('contactform_phone')[0];
let phoneInput = document.querySelector('.contactform_phone');
let mailInput = document.querySelectorAll('.contactform_mail')[0];
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close');
text = document.getElementsByName('message')[0];


//одна из форм записи обработчика события при наведении мыши на кнопку
// function hover () {
//     heading.textContent = 'Это действительно так!';
// }
// chooseBtn.addEventListener('mouseenter', hover)

//наводим мышь на кнопку
chooseBtn.addEventListener('mouseenter', function () {
    heading.textContent = 'Это действительно так';
});
//убираем мышь с кнопки
chooseBtn.addEventListener('mouseleave', function () {
    heading.textContent = 'Все включено';
});


//при нажатии на кнопку откривается форма 
receiveBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});
//при нажатии на крестик формы она закрывается
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

//событие input есть почти только у инпутов
nameInput.addEventListener('input', function () {
    //text.value - это то, что будет введено в строку
    text.value = `Меня зывут ${nameInput.value}. И я хочу спросить: `;
});