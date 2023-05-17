// const div = document.querySelector(".numbers")
// for(let i = 100; i >= 50; i -= 10) {
//     div.innerHTML += `<p>${i}</p>`
// }




// const div = document.querySelector(".strings_container")
// const array = ["hi", "world", "front"]
// for (let i = 0; i <array.length; i++) {
//     div.innerHTML += `<p>${array[i]}</p>`
// }



const div = document.querySelector(".users_container")
const array = [
    {
      first_name:  "Lera", 
      last_name: "Larkina",
      age: 27
    },
    {
        first_name:  "Leonard", 
        last_name: "Larkin",
        age: 2
      }
]
for (let i = 0; i < array.length; i++) {
    if(array[i].age >= 18) {
        div.innerHTML += `<p>${array[i].first_name} ${array[i].last_name} ${array[i].age}</p>`
    }
}
