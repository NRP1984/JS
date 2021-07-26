// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clients = [
//     new Client(1, 'Roman', 'Fedoriv', 'roman@gmail.com', '+380671234567', ['Bread', 'Cake']),
//     new Client(2, 'Ivan', 'Katerynchuk', 'ivan@gmail.com', '+380677654321', ['Bread', 'Milk', 'Meat', 'Eggs', 'Butter', 'Apples', 'Tomatoes', 'Soap', 'Cheese', 'Cake']),
//     new Client(3, 'Petro', 'Husar', 'petro@gmail.com', '+380673456789', ['Bread', 'Milk', 'Meat', 'Eggs', 'Butter', 'Apples', 'Tomatoes', 'Cheese', 'Cake']),
//     new Client(4, 'Vasyl', 'Zrovko', 'vasyl@gmail.com', '+380679876543', ['Butter', 'Apples', 'Tomatoes', 'Soap', 'Cheese', 'Cake', 'Bread']),
//     new Client(5, 'Olena', 'Nahirna', 'olena@gmail.com', '+380670987654', ['Bread', 'Milk', 'Butter', 'Apples', 'Tomatoes']),
//     new Client(6, 'Viktoria', 'Pavliuk', 'viktoria@gmail.com', '+380674567890', ['Bread', 'Meat', 'Eggs', 'Butter', 'Apples', 'Tomatoes']),
//     new Client(7, 'Nazar', 'Staryk', 'nazar@gmail.com', '+380671029384', ['Eggs', 'Butter', 'Apples', 'Tomatoes']),
//     new Client(8, 'Yulia', 'Alkhimova', 'yulia@gmail.com', '+380674839201', ['Eggs', 'Butter', 'Apples']),
//     new Client(9, 'Kateryna', 'Vaskiv', 'kateryna@gmail.com', '+380679775555', ['Bread', 'Milk', 'Meat', 'Eggs', 'Butter', 'Apples', 'Tomatoes', 'Soap']),
//     new Client(10, 'Andrii', 'Hataliak', 'andrii@gmail.com', '+380673413399', ['Milk'])
// ];
//
// let sort = clients.sort(function (client1, client2) {
//     return client1.order.length - client2.order.length
// });
//
// console.log(sort);

//----------------------------------------------------------------------------------------------------------------------

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(model, brand, year, maxSpeed, engine) {
//     this.model = model;
//     this.brand = brand;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} км за годину.`);
//     }
//     this.info = function() {
//         console.log(`Марка: ${this.brand} | Модель:${this.model} | Рік випуску:${this.year} | Максимальна швидкість:${this.maxSpeed}км за годину | Об'єм двигуна:${this.engine}л`);
//     }
//     this.increaseMaxSpeed = function (newSpeed = 0) {
//         this.maxSpeed += newSpeed;
//         console.log(`Нова максимальна швидкість: ${this.maxSpeed}км за годину`);
//     }
//     this.changeYear = function(newYear) {
//         this.year = newYear;
//         console.log(`Змінений рік випуску: ${this.year}`);
//     }
//     this.addDriver = function(driver) {
//         this.driver = driver;
//         console.log(`Водій: ${this.driver.name} ${this.driver.surname}`);
//     }
// }
//
// let car = new Car('5 series', 'BMW', 2008, 250, 3.2);
//
// car.drive()
// car.info()
// car.increaseMaxSpeed(20);
// car.changeYear(2018);
// car.addDriver({name: 'Роман', surname: 'Наконечний'});
//
// console.log(car);




//----------------------------------------------------------------------------------------------------------------------

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(model, brand, year, maxSpeed, engine) {
//         this.model = model;
//         this.brand = brand;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} км за годину.`);
//     }
//     info() {
//         console.log(`Марка: ${this.brand} | Модель:${this.model} | Рік випуску:${this.year} | Максимальна швидкість:${this.maxSpeed}км за годину | Об'єм двигуна:${this.engine}л`);
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(`Нова максимальна швидкість: ${this.maxSpeed}км за годину`);
//     }
//     changeYear(newYear) {
//         this.year = newYear;
//         console.log(`Змінений рік випуску: ${this.year}`);
//     }
//     addDriver(driver) {
//         this.driver = driver;
//         console.log(`Водій: ${this.driver.name} ${this.driver.surname}`);
//     }
// }
//
// let car = new Car('5 series', 'BMW', 2008, 250, 3.2);
//
// car.drive()
// car.info()
// car.increaseMaxSpeed(20);
// car.changeYear(2018);
// car.addDriver({name: 'Роман', surname: 'Наконечний'});
//
// console.log(car);

//----------------------------------------------------------------------------------------------------------------------

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let cinderellas = [
    new Cinderella('Yulia', 18, 32),
    new Cinderella('Viktoria', 20, 31),
    new Cinderella('Katya', 21, 30),
    new Cinderella('Khrystyna', 16, 39),
    new Cinderella('Oksana', 17, 38),
    new Cinderella('Iryna', 22, 35),
    new Cinderella('Olena', 15, 34),
    new Cinderella('Natalia', 23, 36),
    new Cinderella('Svitlana', 25, 37),
    new Cinderella('Roksolana', 14, 33),
]

class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let prince = new Prince('Viktor', 28, 36);

for (cinderella of cinderellas) {
    if (prince.size === cinderella.size) {
        console.log(`My cinderella - ${cinderella.name}`);
    } else {
        console.log('I not find my cinderella');
    }
}

function findCinderella() {
    let find = null;
    find = cinderellas.find(item => item.size === prince.size);
    find
        ? console.log(`My cinderella - ${find.name}`)
        : console.log('I not find my cinderella');
}

findCinderella();


