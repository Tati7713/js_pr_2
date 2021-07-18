// // Завдання 1
// // --створити масив з:
// //     - з 5 числових значень
// //     - з 5 стічкових значень
// //     - з 5 значень стрічкового, числового та булевого типу
// //     - та вивести його в консоль
//
// // Спосіб 1
// let arr = [
//     [101, 102, 103, 104, 105],
//     ['red', 'blue', 'green', 'silver', 'black'],
//     ['white', 106, true, 'lemon', false]
// ];
// for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j< arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }
//
// //Спосіб 2
// let arr2 = [
//      [101, 102, 103, 104, 105],
//      ['red', 'blue', 'green', 'silver', 'black'],
//      ['white', 106, true, 'lemon', false]
//  ];
// arr2.forEach(item => {
//     console.log(item);
// });
//
// //Спосіб 3
// let arr3 = [101, 102, 103, 104, 105, 'red', 'blue', 'green', 'silver', 'black', 'white', 106, true, 'lemon', false];
// for (let i = 0; i < arr3.length; i++) {
//     console.log(arr3[i])
// }
//
// // Завдання 2
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let mass = [];
// mass [0] = 1;
// mass [1] = 'lemon';
// mass [2] = true;
// mass [3] = 144;
// mass [4] = 74;
// mass [5] = false;
// mass [6] = 'chery';
// mass [7] = 'mango';
// mass [8] = false;
// mass [9] = 22;
//
//console.log(mass);


// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// document.write(`<div>`);
//
// for (let i = 0; i < 10; i++) {
//     document.write(
//         `<div>
//            индекс
//         </div>`
//     )
// }
//
// document.write(`</div>`);
//
// // // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// document.write(`<div>`);
//
// for (let j = 0; j < 10; j++) {
//     document.write(
//         `<div>
//            индекс-${j}
//         </div>`
//     )
// }
//
// document.write(`</div>`);

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// document.write(`<div>`);
//
// let i = 0;
// while (i < 20) {
//
//     document.write(
//         `<div>
//             <h1>Very interesting text</h1>
//         </div>`
//     )
//     i++;
// }
//
// document.write(`</div>`);




// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// document.write(`<div>`);
//
// let i = 0;
// while (i < 20) {
//
//     document.write(
//         `<div>
//             <h1>Very interesting text - ${i} </h1>
//         </div>`
//     )
//     i++;
// }
//
// document.write(`</div>`);

//
// // Завдання 3
// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//
// let i = 0;
// while (i < arrNum.length) {
//     console.log(arrNum[i]);
//     i++;
// }
//
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arrStr = ['lemon', 'chery', 'banana', 'mango', 'apple', 'watermelon', 'pineapple', 'grape', 'orange', 'peach', 'pear'];
//
// let j = 0;
// while (j < arrNum.length) {
//     console.log(arrStr[j]);
//     j++;
// }
//
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let arrMain = [true, 'lemon', 11, false, 77, 'chery', 'apple', 45, true, 84];
//
// let u = 0;
// while (u < arrMain.length) {
//     console.log(arrMain[u]);
//     u++;
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrMain1 = [true, 'lemon', 11, false, 77, 'chery', 'apple', 45, true, 84];
//
// for (let boolean of arrMain1) {
//     if (typeof boolean === 'boolean') {
//
//         console.log(boolean);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arrMain1 = [true, 'lemon', 11, false, 77, 'chery', 'apple', 45, true, 84];
//
// for (let number of arrMain1) {
//     if (typeof number === 'number') {
//
//         console.log(number);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arrMain1 = [true, 'lemon', 11, false, 77, 'chery', 'apple', 45, true, 84];
//
// for (let string of arrMain1) {
//     if (typeof string === 'string') {
//
//         console.log(string);
//     }
// }

// Завдання 4
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let mass41 = [];
// mass41 [0] = 1;
// mass41 [1] = 'lemon';
// mass41 [2] = true;
// mass41 [3] = 144;
// mass41 [4] = 74;
// mass41 [5] = false;
// mass41 [6] = 'chery';
// mass41 [7] = 'mango';
// mass41 [8] = false;
// mass41 [9] = 22;
//
// for (i = 0; i < mass41.length; i++) {
//     console.log(mass41[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`${i} </br>`);
// }
//
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`${i} </br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(`${i} </br>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0 && i !== 0) {
//         console.log(i);
//         document.write(`${i} </br>`);
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//         document.write(`${i} </br>`);
//     }
// }

// Завдання 5
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

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

let usersWithCities = [];

for (let user of usersWithId) {
    for (let city of citiesWithId) {
        if (user.id === city.user_id) {
            usersWithCities.push({...user, city});
        }
    }
}
console.log(usersWithCities);