// const number = +prompt("Введите число") * .1
// console.log(number)



// const num1 = prompt("Введите певрое число")
// const num2 = prompt("Введите второе число")
// if(num1 >= num2) {
//     console.log(num2)
// }else if (num2 >=num1) {
//     console.log(num1)
// }


// const num = +prompt("Введите число")
// if(num < 100) {
//     console.log(`число меньше 100`)
// } else if(num > 100) {
//     console.log("Число больше 100")
// }else if(num == 100) {
//     console.log("Число равно 100")
// }




const name = prompt("Введите имя")
const age = 2023 - +prompt("Введите ваш год рождения") 
if (age >= 18) {
    console.log(`Hello, ${name}`)
} else if (age < 18) {
    console.log(`Hi, ${name}`)
}
 