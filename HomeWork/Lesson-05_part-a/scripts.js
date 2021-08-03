//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :


// -- отримує текст з параграфа з id "content"

let text1 = document.getElementById('content');

console.log(text1.innerText);

//----------------------------------------------------------------------------------------------------------------------

// -- отримує текст з блоку з id "rules"

let text2 = document.getElementById('rules');

console.log(text2.innerText);

//----------------------------------------------------------------------------------------------------------------------

// -- замініть текст параграфа з id 'content' на будь-який інший

text1.innerText = 'HELLO WORLD!!!';

//----------------------------------------------------------------------------------------------------------------------

// -- замініть текст параграфа з id 'rules' на будь-який інший

text2.innerText = 'SomeText SomeText SomeText SomeText SomeText SomeText SomeText SomeText SomeText SomeText';

//----------------------------------------------------------------------------------------------------------------------

// -- змініть кожному елементу колір фону на червоний

let bgP = document.getElementsByTagName('p');
for (let p of bgP) {
    p.style.background = 'red';
}

let bgDiv = document.getElementsByTagName('div');
for (let div of bgDiv) {
    div.style.background = 'red';
}

let bgUl = document.getElementsByTagName('ul');
for (let ul of bgUl) {
    ul.style.background = 'red';
}

//----------------------------------------------------------------------------------------------------------------------

// -- змініть кожному елементу колір тексту на синій

let colorP = document.getElementsByTagName('p');
for (let p of colorP) {
    p.style.color = 'blue';
}

let colorDiv = document.getElementsByTagName('div');
for (let div of colorDiv) {
    div.style.color = 'blue';
}

let colorUl = document.getElementsByTagName('ul');
for (let ul of colorUl) {
    ul.style.color = 'blue';
}

//----------------------------------------------------------------------------------------------------------------------

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let classOfRules = document.getElementById('rules');
console.log(classOfRules.classList);

//----------------------------------------------------------------------------------------------------------------------

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна виводить текст елементу, інша довільний текст

let classOfFc_rules = document.getElementsByClassName('fc_rules');
console.log(classOfFc_rules);

for (let fcR of classOfFc_rules) {
    let li = fcR;
    fcR.onclick = function () {
    console.log(li.innerText);
    console.log('HELLO WORLD!!!');
    }
}

//----------------------------------------------------------------------------------------------------------------------

// -- поміняти колір тексту у всіх елементів fc_rules на жовтий

for (let fcR of classOfFc_rules) {
    fcR.style.color = 'yellow';
}

//----------------------------------------------------------------------------------------------------------------------
