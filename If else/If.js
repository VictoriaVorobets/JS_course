// Перевірка на пароль
const пароль = prompt('Введіть пароль');
if (пароль == 787898) {
    console.log('Пароль вірний');
} else {
    console.log('Хибний пароль');
}


// Кількість столів
let number = prompt('Введіть число');


if (number == 1 && number + 1) {
    console.log(number + 'стіл');
} else if (number == 2 && number == 3 && number == 4 && number + 2 && number + 3 && number + 4){
    console.log(number + 'столи');
}
 else {
    console.log(number + 'столів')
}





// Повідомлення відносно ролі
let name = prompt('Як вас звати?');
if (name == 'Ігор')
    alert('Привіт, адмін ' + name);

if (name == 'Сергій') {
    alert('Привіт, адмін ' + name);
}
if (name == 'Паша') {
    alert('Привіт, хворий ' + name);
}
if (name == 'Оля') {
    alert('Вітання Вам, ' + name);
} else if (name !== 'Ігор' && name !== 'Сергій' && name !== 'Паша' && name !== 'Оля') {
    console.log('Постороннім вхід заборонено, коронавірус');
}