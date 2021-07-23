// - створити функцію яка приймає масив та виводить його

// function someFunction() {
//     let arr = [];
//     for (let i = 0; i < arguments.length; i++) {
//         arr.push(arguments[i]);
//     }
//     console.log(arr)
// }
//
// someFunction(3, 4, 66, 77, 99);

//----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function numMin (a, b, c) {
//     let min = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] < min) {
//             min = arguments[i];
//         }
//     }
//     console.log(min);
// }
// numMin(23, 76, 999);

//----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function numMax (a, b, c) {
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     console.log(max);
// }
// numMax(23, 76, 999);

//----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка повертає найбільше число з масиву

// function numMax () {
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// console.log(numMax(1, 2, 3, 4, 5));

//----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка повертає найменьше число з масиву

// function numMin () {
//     let min = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] < min) {
//             min = arguments[i];
//         }
//     }
//     return min;
// }
// console.log(numMin(1, 2, 3, 4, 5));

//----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function sumArrItems () {
//     let item = null;
//     for (let i = 0; i < arguments.length; i++) {
//         if (i < arguments.length) {
//             item += arguments[i]
//         }
//     }
//     return item;
// }
// console.log(sumArrItems(1, 2, 10));

//----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function sumArrItems () {
//     let item = null;
//     for (let i = 0; i < arguments.length; i++) {
//         if (i < arguments.length) {
//             item += arguments[i] / arguments.length;
//         }
//     }
//     return item;
// }
// console.log(sumArrItems(8, 10, 12));

//----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.

// function randomNums () {
//     let arr = [];
//     for (i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random()*100));
//     }
//     return arr;
// }
// console.log (randomNums());


//----------------------------------------------------------------------------------------------------------------------

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let user = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function objKeys(arr) {
//     let arrKeys = [];
//     for (let item of arr) {
//         for (let key in item) {
//             arrKeys.push(key);
//         }
//     }
//     return arrKeys;
// }
// console.log(objKeys(user));



//----------------------------------------------------------------------------------------------------------------------

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let user = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function objValues(arr) {
    let arrValues = [];
    for (let obj of arr) {
        for (let val in obj) {
            arrValues.push(obj[val]);
        }
    }
    return arrValues;
}

console.log(objValues(user));