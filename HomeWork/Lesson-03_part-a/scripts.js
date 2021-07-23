// - створити функцію яка обчислює та повертає площу прямокутника висотою

// function areaRect(a, b) {
//     return a * b;
// }
// console.log(areaRect(10, 20));

//----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу кола

// const pi = 3.14;
// function areaCircle(pi, r) {
//     return pi * r**2;
// }
// console.log(areaCircle(pi, 5));

//----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу циліндру

// const pi = 3.14;
// function areaСylinder(pi, r, h) {
//     let areaSide = 2 * pi * r * h;
//     let areaBase = pi * r**2;
//     return areaSide + areaBase;
// }
// console.log(areaСylinder(pi, 8, 20));

//----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function MaxMin () {
//     let max = arguments[0];
//     let min = arguments[0];
//
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//         if (arguments[i] < min) {
//             min = arguments[i];
//         }
//     }
//     console.log(max);
//     return min;
// }
// document.write(MaxMin(23, 76, 999, -378, 100500, 1, 777));

//----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка  створює блок з текстом. Текст задати через аргумент

//ВАРІАНТ №1
// function createTxt (text) {
//     document.write(`<p>${text}</p>`)
// }
// createTxt('HELLO WORLD!!!');

//ВАРІАНТ №2
// function createTxt () {
//     for (let i=0; i < arguments.length; i++) {
//         document.write(`<p>${arguments[i]}</p>`)
//     }
// }
// createTxt('HELLO WORLD!!!', 'HELLO EVERYONE!!!');

//----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// ВАРіАНТ №1:
// function unorderedList() {
//     document.write(`<ul>`);
//     for (let i = 0; i < arguments.length; i++) {
//         document.write(`
//             <li>${arguments[i]}</li>
//             <li>${arguments[i]}</li>
//             <li>${arguments[i]}</li>
//         `)
//     }
//     document.write(`</ul>`);
// }
// unorderedList('HELLO WORLD!!!');


// ВАРіАНТ №2:
// function unorderedList(a) {
//     document.write(`
//         <ul>
//             <li>${a}</li>
//             <li>${a}</li>
//             <li>${a}</li>
//         </ul>
//     `);
// }
// unorderedList('HELLO WORLD!!!');

//----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function unorderedList(a, b) {
//     let item = a;
//     let quantity = b;
//     document.write(`<ul>`);
//     for (let i = 0; i < quantity; i++) {
//         document.write(`
//             <li>${item}</li>
//         `)
//     }
//     document.write(`</ul>`);
// }
// unorderedList('HELLO WORLD!!!', 3);

//----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function arrOfItems () {
//     document.write(`<ul>`);
//     for (let i = 0; i < arguments.length; i++) {
//         document.write(`<li>${arguments[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
// arrOfItems(1, true, 'HELLO WORLD!!!', false, 100500);