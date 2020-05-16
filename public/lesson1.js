import { name6 } from "_subfiles.js";
let student = {
    name: "Anton",
    surname: "Komarnitskyi",
    age: 99,
};
console.log(student.name);
let { name, surname, age } = student; // робимо змінні з властивостей об'ектів
console.log(age);

let [name, surname] = ["Anton", "Valentinovi4"];

let student1 = {
    name: "Anton",
    surname: "Komarnitskyi",
    age: 99,
    info() {
        alert(this.name);
    },
};
// student1.info();


let {
    name1,
    ...all
} = student1;
console.log(all);

let numbers = [1, 5, 7, 8, 9, 10, 266, 84];
console.log(Math.max(...numbers)); // spread operator

function summ(a, b) {
    return a + b;
}
console.log(summ(5, 5));

let summnum = (x, y) => { return x + y }; // arrow function
console.log(summnum(5, 100));

// let myAge = 100;
// console.log('Myage =
//     $ { myAge }
//     '
// );

let p = new Promise((resolve, reject) => {
    throw new Error("ERROR NOT FOUND");
});
p.catch();