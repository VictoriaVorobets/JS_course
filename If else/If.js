// Перевірка на пароль
const password = prompt('Введіть пароль');
if (password == 787898) {
    console.log('Пароль вірний');
} else {
    console.log('Хибний пароль');
}


// Кількість столів
let number = prompt('Введіть число');
let remainderByTen = number % 10;
let remainderByOneHundred = number % 100;
// console.log(Остача від ділення + remainderByTen);

if (number >= 1) {
    if (remainderByOneHundred > 11 && remainderByOneHundred < 19) {
        console.log(number + 'столів');
    } else if (remainderByTen == 1) {
        console.log(number + 'стіл');
    } else if (remainderByTen >= 2 && remainderByTen <= 4) {
        console.log(number + 'столи');
    } else {
        console.log(number + 'столів');
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