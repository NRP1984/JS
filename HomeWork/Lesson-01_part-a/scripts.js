// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

// let a01 = 'hello';
// let a02 = 'owu';
// let a03 = 'com';
// let a04 = 'ua';
// let a05 = 1;
// let a06 = 10;
// let a07 = -999;
// let a08 = 123;
// let a09 = 3.14;
// let a10 = 2.7;
// let a11 = 16;
// let a12 = true;
// let a13 = false;

// console.log(a01, a02, a03, a04, a05, a06, a07, a08, a09, a10, a11, a12, a13);

// alert(a01 + ' ' + a02 + ' ' + a03 + ' ' + a04 + ' ' + a05 + ' ' + a06 + ' ' + a07 + ' ' + a08 + ' ' + a09 + ' ' + a10 + ' ' + a11 + ' ' + a12 + ' ' + a13);

// document.write('<div>' + a01 + ' ' + a02 + ' ' + a03 + ' ' + a04 + ' ' + a05 + ' ' + a06 + ' ' + a07 + ' ' + a08 + ' ' + a09 + ' ' + a10 + ' ' + a11 + ' ' + a12 + ' ' + a13 + '</div>');

// a01 = -876;
// a02 = 1;
// a03 = 34;
// a04 = 'NRP2021';
// a05 = 45;
// a06 = 3;
// a07 = 'okten';
// a08 = 100500;
// a09 = 9.8;
// a10 = 'hello';
// a11 = 'owu';
// a12 = 'com';
// a13 = 'ua';

// console.log(a01, a02, a03, a04, a05, a06, a07, a08, a09, a10, a11, a12, a13);

// alert(a01 + ' ' + a02 + ' ' + a03 + ' ' + a04 + ' ' + a05 + ' ' + a06 + ' ' + a07 + ' ' + a08 + ' ' + a09 + ' ' + a10 + ' ' + a11 + ' ' + a12 + ' ' + a13);

// document.write('<div>' + a01 + ' ' + a02 + ' ' + a03 + ' ' + a04 + ' ' + a05 + ' ' + a06 + ' ' + a07 + ' ' + a08 + ' ' + a09 + ' ' + a10 + ' ' + a11 + ' ' + a12 + ' ' + a13 + '</div>');





// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.

// let firstName = 'Roman';
// let middleName = 'Petrovych';
// let lastName = 'Nakonechnyi';

// let fullName = (firstName + ' ' + middleName + ' ' + lastName);

// console.log(fullName);






// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let firstName = prompt('First Name:');
// let middleName = prompt('Middle Name:');
// let age = prompt('Age:')

// console.log(`Вітаю ${firstName} ${middleName}. Тобі ${age} років`);






// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);






// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразаї не використовувати однакові оператори!!!

//   5 ? 6 -> true
// console.log(5 < 6);

//   5 ? 6 -> false
// console.log(5 > 6);

//   5 ? 6 -> false
// console.log(5 == 6);

//   5 ? 6 -> false
// console.log(5 >= 6);



//   10 ? 10 -> true
// console.log(10 == 10);

//   10 ? 10 -> true
// console.log(10 === 10);

//   10 ? 10 -> false
// console.log(10 < 10);

//   10 ? 10 -> false
// console.log(10 > 10);

//   10 ? 10 -> false
// console.log(10 !== 10);



//   123 ? '123' -> false
// console.log(123 === '123');

//   123 ? '123' -> true
// console.log(123 == '123');

// Додатково:
// - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 );
// console.log(34 > 33 && 23 < 90 );
// console.log(99 > 100 && 45 > 12 );
// console.log(132 > 100 || 45 < 12 );
// console.log(111 > 11 || 45 < 111 );
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
// console.log(!!'-1');
// console.log(!!-1);
// console.log(!!'0');
// console.log(!!'null');
// console.log(!!'undefined');
// console.log(!!(3/'owu'));
// console.log((111 > 11 || 45 < 111) ||  !!'0');
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));
// © 2021 GitHub, Inc.