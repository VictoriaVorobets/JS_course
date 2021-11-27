// 1)
// в перемінну
// function calcThreeNumbers(firstNumber, secondNumber, thirdNumber) {
//     return firstNumber + secondNumber + thirdNumber;
// }
// calcThreeNumbers(10, 20, 30);


// в консоль
// function calcThreeNumbers(firstNumber, secondNumber, thirdNumber) {
//     console.log(firstNumber + secondNumber + thirdNumber);
// }
// // calcThreeNumbers(1, 2, 3);
// calcThreeNumbers(10, 20, 30);


// в алерт
// function calcThreeNumbers(firstNumber, secondNumber, thirdNumber) {

// }
// calcThreeNumbers(10, 20, 30);
// alert(10 + 20 + 30);

// 2)
// множення 2 цифр
// function calcTwoNumbers(firstNumber, secondNumber, thirdNumber) {
//     console.log(firstNumber * secondNumber);
// }
// calcTwoNumbers(3, 3);


// множення 3 цифр
// function calcThreeNumbers(firstNumber, secondNumber, thirdNumber) {
//     console.log(firstNumber * secondNumber * thirdNumber);
// }
// calcThreeNumbers(2, 2, 2);


// виведення в степінь
// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result = result * x;
//     }
//     return (result);
// }
// console.log(pow(5, 2));

// або
// function powTwoNumbers(x, n) {
//     console.log(x ** n);
// }
// powTwoNumbers(5, 2);

// 3)
// function question(yes, no) {
//     let answer = confirm('Що мені треба спитати?');
//     if (answer) {
//         yes();
//     } else {
//         no();
//     }
// }

// function goodAnswer() {
//     alert('sayYes')
// }

// function badAnswer() {
//     alert('sayNo')
// }
// question(goodAnswer, badAnswer);


// 4)

// function age() {
//     let age = prompt('How old are you?');

//     if (age < 18 && age >= 0) {
//         alert('Sorry, no')
//     } else if (age > 99 && age <= 120) {
//         alert('You are cool!')
//     } else if (age >= 18 && age <= 99) {
//         alert('Welcome')
//     } else {
//         alert('???')
//     }
// }
// age();


// 5) 
// function showMessage(text, name) {
//     console.log('sayHi, Peter');
// }
// showMessage();

// 6)
// 6.1

// в перемінну
// function declaration:
// calcThreeNumbers();

// function calcThreeNumbers() {
//     let ThreeNumbers = 10 + 20 + 30;
//     return ThreeNumbers;
// };

// // function expression:
// calcThreeNumbers = function () {
//     let ThreeNumbers = 10 + 20 + 30;
//     return ThreeNumbers;
// }
// calcThreeNumbers();


// в консоль
// function declaration:
// calcThreeNumbers();

// function calcThreeNumbers() {
//     let ThreeNumbers = 10 + 20 + 30;
//     console.log(ThreeNumbers);
// };

// // function expression:
// calcThreeNumbers = function () {
//     let ThreeNumbers = 10 + 20 + 30;
//     console.log(ThreeNumbers);
// }
// calcThreeNumbers();


// в алерт
// function declaration:
// calcThreeNumbers();

// function calcThreeNumbers() {
//     let ThreeNumbers = 10 + 20 + 30;
//     alert(ThreeNumbers);
// };
// // function expression:
// calcThreeNumbers = function () {
//     let ThreeNumbers = 10 + 20 + 30;
//     alert(ThreeNumbers);
// }
// calcThreeNumbers();


// 6.2
// множення 2 цифр
// function declaration:
// calcTwoNumbers();

// function calcTwoNumbers() {
//     let TwoNumbers = 3 * 3;
//     console.log(TwoNumbers);
// };

// // function expression:
// calcTwoNumbers = function () {
//     let TwoNumbers = 3 * 3;
//     console.log(TwoNumbers);
// }
// calcTwoNumbers();


// множення 3 цифр
// function declaration:
// calcThreeNumbers();

// function calcThreeNumbers() {
//     let ThreeNumbers = 2 * 2 * 2;
//     console.log(ThreeNumbers);
// };

// // function expression:
// calcThreeNumbers = function () {
//     let ThreeNumbers = 2 * 2 * 2;
//     console.log(ThreeNumbers);
// }
// calcThreeNumbers();


// виведення в степінь
// function declaration:

// powTwoNumbers();

// function powTwoNumbers() {
//     let TwoNumbers = 5 ** 2;
//     console.log(TwoNumbers);
// };

// // function expression:

// powTwoNumbers = function () {
//     let TWoNumbers = 5 ** 2;
//     console.log(TWoNumbers);
// }
// powTwoNumbers();