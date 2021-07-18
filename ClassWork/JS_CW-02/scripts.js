// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numbers = [1, 88, 101, 34, 7];
// let names = ['Yulia', 'Dmytro', 'Vasyl', 'Victoria', 'Olena'];
// let items = [82, 'Dmytro', true, 77, false]

// console.log(numbers);
// console.log(names);
// console.log(items);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let skills = [];

// skills[0] = 'html';
// skills[1] = 'css';
// skills[2] = 'js';
// skills[3] = 'react';
// skills[4] = 'angular';

// console.log(skills);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// let items = ['html', 'css', 'js', 'react', 'angular', 'python', 'java', 'mongodb', 'node.js', 'mysql'];

// document.write('<div>');

// for (item of items) {
//     document.write(`
//         <div class="item">
//             <h2>${item}</h2>
//         </div>
//     `)
// }

// document.write('</div>');


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// let items = ['html', 'css', 'js', 'react', 'angular', 'python', 'java', 'mongodb', 'node.js', 'mysql'];

// document.write('<div>');

// for (let i = 0; i < items.length; i++) {
//     document.write(`<div>${i} - java</div>`)
// }

// document.write('</div>');


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let items = ['html', 'css', 'js', 'react', 'angular', 'python', 'java', 'mongodb', 'node.js', 'mysql', 'html', 'css', 'js', 'react', 'angular', 'python', 'java', 'mongodb', 'node.js', 'mysql'];

// let i = 0;

// while (i < items.length) {
//     document.write(`<h1>${i}</h1>`)
//     i++
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let items = ['html', 'css', 'js', 'react', 'angular', 'python', 'java', 'mongodb', 'node.js', 'mysql', 'html', 'css', 'js', 'react', 'angular', 'python', 'java', 'mongodb', 'node.js', 'mysql'];

// let i = 0;

// while (i < items.length) {
//     document.write(`<h1>${i} - skill</h1>`)
//     i++
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (item of items) {
//     console.log(item)
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let items = ['html', 'css', 'js', 'react', 'angular', 'python', 'java', 'mongodb', 'node.js', 'mysql'];

// for (item of items) {
//     console.log(item)
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let items = ['html', 'css', 'js', false, 'angular', 56, true, 'mongodb', 'node.js', 100500];

// for (item of items) {
//     console.log(item)
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let items = ['html', 'css', 'js', false, 'angular', 56, true, 'mongodb', 'node.js', 100500];

// for (item of items) {
//     if (typeof item === "boolean") {console.log(item)}
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let items = ['html', 'css', 'js', false, 'angular', 56, true, 'mongodb', 'node.js', 100500];

// for (item of items) {
//     if (typeof item === "number") {console.log(item)}
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let items = ['html', 'css', 'js', false, 'angular', 56, true, 'mongodb', 'node.js', 100500];

// for (item of items) {
//     if (typeof item === "string") {console.log(item)}
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let items = [];

// items[0] = "html"
// items[1] = 12
// items[2] = true
// items[3] = false
// items[4] = 345
// items[5] = "css"
// items[6] = true
// items[7] = "76"
// items[8] = "java"
// items[9] = "js"

// for (let item of items) {
//     console.log(item)
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// for (let i = 0; i < 10; i++) {
//     console.log('step:', i );
//     document.write(`<div>step: ${i}</div>`);
// };


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log('step:', i );
//     document.write(`<div>step: ${i}</div>`);
// };


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// let num = 0;
// for (let i = 0; i < 100; i++) {
//     console.log(`step:`, num);
//     document.write(`<div>step: ${num}</div>`);
//     num += 2;
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i=0; i < 100; i++) {
//     if (i%2 === 0) {
//         console.log('step:', i);
//         document.write(`<div>step: ${i}</div>`)
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i=0; i < 100; i++) {
//     if (i%2 === 1) {
//         console.log('step:', i);
//         document.write(`<div>step: ${i}</div>`)
//     }
// }


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id){
            user.address = city.country + ', ' + city.city;
        }
    }
}
console.log(usersWithId);




//     // TO BE CONTINUED .....
// ]
// © 2021 GitHub, Inc.