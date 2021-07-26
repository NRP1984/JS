// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// function randomNums () {
//     let arr = [];
//     for (i = 0; i < 100; i++) {
//         arr.push(Math.round(Math.random()*100));
//     }
//     return arr;
// }
// console.log (randomNums());

//----------------------------------------------------------------------------------------------------------------------

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

// function randomNums (a) {
//     let arr = [];
//     for (i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random()*a));
//     }
//     return arr;
// }
// console.log (randomNums(50));

//----------------------------------------------------------------------------------------------------------------------

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let numbers = [1, 6, 9, 10, 22, 11, 8, 4, 1 ,-97, 5, 194892];
//
// let sort = numbers.sort(function (num1, num2) {
//     return num1 - num2;
// });
//
// console.log(sort);

//----------------------------------------------------------------------------------------------------------------------

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

// let numbers = [1, 6, 9, 10, 22, 11, 8, 4, 1 ,-97, 5, 194892];
//
// let filter = numbers.filter(function (num) {
//     return num % 2 === 0;
// })
//
// console.log(filter);

//----------------------------------------------------------------------------------------------------------------------

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

// let numbers = [1, 6, 9, 10, 22, 11, 8, 4, 1, -97, 5, 194892];
//
// let map = numbers.map(function (value) {
//     return value.toString();
// });
//
// console.log(map);

//----------------------------------------------------------------------------------------------------------------------

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(5, 'Roman', 'Fedoriv', 'roman@gmail.com', '+380671234567'),
    new User(8, 'Ivan', 'Katerynchuk', 'ivan@gmail.com', '+380677654321'),
    new User(4, 'Petro', 'Husar', 'petro@gmail.com', '+380673456789'),
    new User(3, 'Vasyl', 'Zrovko', 'vasyl@gmail.com', '+380679876543'),
    new User(2, 'Olena', 'Nahirna', 'olena@gmail.com', '+380670987654'),
    new User(9, 'Viktoria', 'Pavliuk', 'viktoria@gmail.com', '+380674567890'),
    new User(1, 'Nazar', 'Staryk', 'nazar@gmail.com', '+380671029384'),
    new User(7, 'Yulia', 'Alkhimova', 'yulia@gmail.com', '+380674839201'),
    new User(10, 'Kateryna', 'Vaskiv', 'kateryna@gmail.com', '+380679775555'),
    new User(6, 'Andrii', 'Hataliak', 'andrii@gmail.com', '+380673413399')
];

let filteredUsers = users.filter(function (user) {
    return user.id % 2 === 0;
});

console.log(filteredUsers);

let sort = users.sort(function (user1, user2) {
    return user1.id - user2.id;
});

console.log(sort);


