// Напишіть код, який :
// a) змінює текст елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let txtMain_header = document.getElementById('main_header');
console.log(txtMain_header);

txtMain_header.innerText = 'June-2021';

//----------------------------------------------------------------------------------------------------------------------

// b) робить шириниу елементу ul 400px

let elementUl = document.getElementsByTagName('ul');

for (let ul of elementUl) {
    ul.style.width = '400px';
}

//----------------------------------------------------------------------------------------------------------------------

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let classLinkList = document.getElementsByClassName('linkList');

for (let link of classLinkList) {
    link.style.width = '50%';
}

//----------------------------------------------------------------------------------------------------------------------

// d) отримує текст який зберігається в елементі з класом listElement2

let txtListElement2 = document.getElementsByClassName('listElement2');

for (let element of txtListElement2) {
    console.log(element.innerText);
}

//----------------------------------------------------------------------------------------------------------------------

// e) отримує всі елементи li та змінює ім колір фону на сірий

let listLi = document.getElementsByTagName('li');

for (let li of listLi) {
    li.style.background = 'silver'
}

//----------------------------------------------------------------------------------------------------------------------

// f) отримує всі елементи 'a' та додає їм клас anchor

let listA = document.getElementsByTagName('a');

for (let a of listA) {
    a.className = 'anchor';
}

//----------------------------------------------------------------------------------------------------------------------

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (let a of listA) {
    if (a.innerText === 'link3') {
        a.style.fontSize = '40px';
    }
}

//----------------------------------------------------------------------------------------------------------------------

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (let a of listA) {
    a.className = `'element_${a.innerText}'`;
}

//----------------------------------------------------------------------------------------------------------------------

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let listSubHeader = document.getElementsByClassName('sub-header');

for (let sh of listSubHeader) {
    sh.style.background = prompt('BG color', '');
    break
}

//----------------------------------------------------------------------------------------------------------------------

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

for (let sh of listSubHeader) {
    if (sh.innerText === 'content 2 segment') {
        sh.style.color = prompt('Text color');
        break
    }
}

//----------------------------------------------------------------------------------------------------------------------

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let elementsClassContent1 = document.getElementsByClassName('content_1');

for (let el of elementsClassContent1) {
    el.innerText = prompt('Text', '');
    break
}

//----------------------------------------------------------------------------------------------------------------------

// l) отримати елементи p та змінити їм padding на 20px

let listP = document.getElementsByTagName('p');

for (let p of listP) {
    p.style.padding = '20px'
}

//----------------------------------------------------------------------------------------------------------------------

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

let listClassText2 = document.getElementsByClassName('text2');

for (let txt of listClassText2) {
    txt.innerText = 'June-2021';
}

//----------------------------------------------------------------------------------------------------------------------
