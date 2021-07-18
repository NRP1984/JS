// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

// let str = 'Привіт';
// let num = 123;
// let flag = true;
// let txt = 'true';

// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);


// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
//     Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11

// let a1 = 8;
// let a2 = 7;
// let a3 = 3;
// let a4 = 5;
// let a5 = 2;

// console.log(a2 * a3 + a1 + a4);
// console.log((a3 + a4) / a5 * a3);
// console.log(a1 * a2 + a4 * a5);
// console.log((a4 * a5 + a1) * a4);
// console.log(a5 * a1 * a4 + a2)





// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

// let a6;
// let a7;
// let a8;
// let a9;
// let a10;

// a6 = 5 % 3
// a7 = 3 % 5
// a8 = 5 + '3'
// a9 = '5' - 3
// a10 = 75 + 'кг'

// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);





// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значееня площі зберігати в змінній s.

// let height = 23;
// let width = 10;
// let s;

// s = height * width

// console.log(s);





// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// let heightC = 10;
// let dC = 4;
// let v;

// v = heightC * dC

// console.log(v);





// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n = 3;
// let m = 4;
// let k;

// k = Math.pow((Math.pow(n, 2) + Math.pow(m, 2)), 0.5)

// console.log(k)





// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// let NameSurname = 'Name & Surname: Roman Nakonechnyi\n';
// let age = 'Age: 36 years\n';
// let hobby = 'Hobby: Tourism';
// let inf = NameSurname + age + hobby;

// alert(inf);





// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Who';
// let str2 = 'are';
// let str3 = 'you?';
// let concatenation;

// concatenation = (`${str1} ${str2} ${str3}`)

// document.write(concatenation);






// 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");
//      document.write(str - a + "<br/>");
//      document.write(str * "2" + "<br/>");
//      document.write(str / 2 + "<br/>");



// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

// let x = +prompt('Enter numeric 1');
// let y = +prompt('Enter numeric 2');

// alert(x + y);





// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// let name = prompt('Імя')
// let surname = prompt('Прізвище')
// let yourAge = prompt('Вік')

// alert(`Доброго вечора ${name} ${surname}, вітаю що вам ${yourAge}`);




// =====================
// ======ДОП============
// =====================




// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let numA = +prompt('Число 1');
// let numB = +prompt('Число 2');
// let numC = +prompt('Число 3');

// if (numA > numB && numB > numC) {
//     console.log(numC, numB, numA)
// } else if (numA > numC && numC > numB) {
//     console.log(numB, numC, numA)
// } else if (numB > numA && numA > numC) {
//     console.log(numC, numA, numB)
// } else if (numB > numC && nuC > numA) {
//     console.log(numA, numC, numB)
// } else if (numC > numB && numB > numA) {
//     console.log(numA, numB, numC)
// } else if (numC > numA && numA > numB) {
//     console.log(numB, numA, numC)
// }





// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let color = prompt('Color');

// switch (color) {
//     case 'green':
//         console.log('Go')
//         break;
//     case 'yellow':
//         console.log('Wait')
//         break;
//     case 'red':
//         console.log('Stop')
//         break;
//     default:
//         console.log('Do what you want')
// }





// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

let isRoadClear = confirm('Is road clear?');
let color = prompt('Color');

switch (color) {
    case 'green':
        isRoadClear ? console.log('Іди') : console.log('Почекай поки порушники проїдуть')
        break;
    case 'yellow':
        isRoadClear ? console.log('Всерівно чекай') : console.log('Чекай')
        break;
    case 'red':
        isRoadClear ? console.log('Стій всерівно') : console.log('Стій і чекай')
        break;
    default:
        console.log ('Роби що хочеш')    
}