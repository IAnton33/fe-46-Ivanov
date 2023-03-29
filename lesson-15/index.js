// task 1
let x = 20
let y = 58
let z = 42
console.log(x+y+z)

// task 2
let secInMin = 60
let minInHour = 60
let hourInDay = 24
let dayInYear = 365
let age = 33
let myAgeInSeconds = (age*dayInYear*hourInDay*minInHour*secInMin)
console.log (myAgeInSeconds)

// task 3
let count = 42
let userName = '42'
console.log (count,typeof `${count}`, typeof String(count), typeof(``+ count),typeof count.toString())
console.log (userName,typeof +userName, typeof Number(userName), typeof parseInt(userName))

// task 4
let a = 1
let b = 2
let d = " "
let c = "белых медведей"
let text = (`${a}` + `${b}` + d + c)
console.log (`${text}`)

// task 5
let firstWord = "доступ"
let secondWord = "морпех"
let thirdWord = "наледь"
let fourthWord = "попрек"
let fifthWord = "рубило"
let lengthWords = (firstWord + secondWord + thirdWord + fourthWord + firstWord)
console.log (lengthWords.length)

//task 6
setTimeout(()=>{
    let prom = prompt("Enter your name:");
    console.log(prom);
    let age = prompt ("Enter your age:");
    console.log(age);
},3000)

// advansed
// task 1
let one = 4
let two = 3
console.log(one+two-one)
console.log(one+two-two)

//task 2
const codeWord1 = "обернись";
const codeWord2 = "неужели";
const codeWord3 = "огурцы";
const codeWord4 = "липкие";
const codeWord5 = "?!";


console.log(codeWord1.substr(1,1) + codeWord2.substr(1,1) + codeWord3.substr(1,1) + codeWord4.substr(1,1) + codeWord5.substr(1,1));
