//Задание 1
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//     }

// let i = 0

// while (i < 3) {
//     i += 1;
//     alert(`number ${i}!`);
// };
//Задние 2
// Перепишите код с использованием тернарного оператора
// let male = true;
// let gender;
// if (male) {
//     gender = 'man';
// } else {
//     gender = 'woman'
// }


// let male = true;

// let gender =
//     male ? 'man' : 'woman';
// console.log(gender);

//Задание 3 
// Задать массив логических значений (true/false). Каждое значение обозначает мужчина (true) или женщина (false).
// Из этого массива сформировать массив объектов такой же длины, как и заданный массив.
// У каждого объекта должно быть одно поле, gender, которое равно man, если значение в заданном массиве - true, и woman, если значение в заданном массиве - false.
// Т.е. из
// [true, false]
// должно получиться
// [{ gender: 'man' }, { gender: 'woman' }]


// let arr = ['true', 'false', 'false', 'true', 'false'];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'true') {
//         newArr.push({ gender: 'man' });
//     } else {
//         newArr.push({ gender: 'woman' });
//     }
// }
// console.log(newArr)

//Задание 4
//1) Внутри функции должен определяться массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0] .
// Функция должна вывести в консоль все положительные числа по одному.
// function findPositiveNumbers() {
//     let arr = [5, 4, 3, -3,
//         -10, -1, 8, -20, 0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             console.log(arr[i])
//         }
//     }
// }
// findPositiveNumbers();
//Задание 4.1 Функция должна не выводить числа в консоль, а составить из них новый массив.
// В самом конце тела функции - вывести новый массив в консоль.

// function findPositiveNumbers() {
//     let arr = [5, 4, 3, -3,
//         -10, -1, 8, -20, 0]
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 0) {
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr)
// };

// findPositiveNumbers();

//Задание 4.3 Функция должна не выводить массив в консоль, а вернуть новый массив из положительных элементов arr.
// function findPositiveNumbers() {
//     let arr = [5, 4, 3, -3,
//         -10, -1, 8, -20, 0]
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 0) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// };

// console.log(findPositiveNumbers());


//Задание 4.4 Изначальный массив arr должен не описываться внутри функции, а поступать в нее как параметр.
// function findPositiveNumbers(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 0) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// };

// console.log(findPositiveNumbers([5, 4, 3, -3,
//     -10, -1, 8, -20, 0]));



//Задание 5 
// Напишите функцию, которая принимает два параметра: значение и количество элементов. 
// Функция создает новый массив и заполняет его этим значением в указанном количестве.
// Например: из переданных значений ('a', 3) получаем массив ['a', 'a', 'a']

// function mas(text, sum) {
//     let newMass = [];
//     for (let i = 0; i < sum; i++) {
//         newMass.push(text)
//     }
//     return newMass;
// };

// console.log(mas('a', 3));
// console.log(mas('a', 6));
// console.log(mas('gsgs', 2));


//Задание 6
// Определите массив, например let arr = [5, 4, 3, 8, 0].
// Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr,
// но в нем должны содержаться элементы, которые больше или равны (>=) значению переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// а запуск функции filterFor(arr, 10) дает результат []
// а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]


// let arr = [5, 4, 3, 8, 0];

// function filterFor(arr, a) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= a) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr
// };

// console.log(filterFor(arr, 3));
// console.log(filterFor(arr, 5));
// console.log(filterFor(arr, 8));


//Задание 7
// Написать функцию вывода в консоль случайного цвета. Это будет строка вида "rgb(10,55,250)"
// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения 
// случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):


// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// };

// function getRandomRGB() {
//     let r = getRandomInteger(0,255);
//     let g = getRandomInteger(0,255);
//     let b = getRandomInteger(0,255);
//     console.log(`rgb(${r},${g},${b})`);
// };
// getRandomRGB();

//Задание 8 
// Написать функцию pow(x, n),
// которая возвращает x в степени n. Иначе говоря,
//  умножает x на себя n раз и возвращает результат (!!! решить без оператора **)

// function pow(x, n) {
//     x = x ** n;
//     return x;
// };

// console.log(pow(4, 2));

//Задание 9 
// Написать функцию isInteger(x), которая определяет, 
// является ли число целым, и возвращает true либо false.

// function isInteger(x) {
//     if (x ^ 2 == 0) {
//         return true;
//     } else {
//         return false
//     }
// };
// console.log(isInteger(3));

//Задание 10 
// Написать функцию, которая принимает целое число n.   
// Внутри функции запустить цикл от 1 до n с шагом 0,5. На каждой итерации цикла выводить в консоль текущее число (i) и
// информацию о том, целое ли оно.
// Пример, при запуске функции с параметром 3:
// "1 integer"
// "1.5 decimal"
// "2 integer"
// "2.5 decimal"

// function sum(n) {
//     for (let i = 0; i < n; i = i + 0.5) {
//         if (i ^ 0 == 0) {
//             console.log(i, ' integer');
//         } else {
//             console.log(i, ' decimal')
//         }
//     }
// };
// sum(3);