//Task 1
let a = 'true';
let b = false;
let c = 17;
let d = undefined;
let e = null;

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)

//Task 2
let height = 15
let width = 20

if (height > width) {
    console.log(height)
} else {
    console.log(width)
}

//Task 3

for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

//Task 4
let key = true
let documents = true
let pen = true
let apple = false
let orange = true

let shouldGoToWork = (key && documents && pen && apple || orange)

console.log(shouldGoToWork)

//Task 5
let prom = prompt("Write some number:");

if (prom % 5 == 0 && prom % 3 == 0) {
    console.log("Fizbuz");
}
if (prom % 5 == 0 && prom % 3 != 0) {
    console.log("Fiz");
}
if (prom % 5 != 0 && prom % 3 == 0) {
    console.log("Buz");
}

//Task 6
let age = prompt("Enter your age:");

if (age > 18) {
    console.log("Попей пивка");
}

if (age < 16) {
    console.log("Пей колу");
}

if (age >= 16 && age <= 18) {
    console.log("Можешь выкурить сигаретку, только маме не говори");
}

//Task 7

let direction = prompt("Choose direction");

switch (direction) {
    case "юг":
        console.log("на юг пойдешь счастье найдешь");
        break;
    case "север":
        console.log("на север пойдешь много денег найдешь");
        break;
    case "запад":
        console.log("на запад пойдешь верного друга найдешь");
        break;
    case "восток":
        console.log("на восток пойдешь разработчиком станешь");
        break;
    default:
        console.log("попробуй еше");
        break;
}



