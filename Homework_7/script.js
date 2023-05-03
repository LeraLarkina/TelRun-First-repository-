// function getNumbers(num1, num2) {
//   if (num1 > num2) {
//     for (let i = num1; i >= num2; i--) {
//       if (i % 2 == 0) {
//         console.log(i);
//       }
//     }
//   } else {
//     for (let i = num2; i >= num1; i--) {
//       if (i % 2 == 0) {
//         console.log(i);
//       }
//     }
//   }
// }
// getNumbers(10, 1);
// getNumbers(1, 10);




// function power(num1, num2 = 2) {
//     console.log(num1 ** num2)
// }
// power(2, 3)




// function sumN(num) {
//     let total = 0;
//     console.log(`Total: ${total}`)
//     for (let i = 1; i <=num; i++) {
//         console.log(`Total: ${total}, i: ${i}`)
//         total += i; // total = total + i
//     }
//     console.log(`Total: ${total}`)
// } 
// sumN(4)






// function power(n, m) {
//   let event = 0;
//   let odd = 0;

//   if (n <= m) {
//     for (let i = n; i <= m; i++) {
//       if (i % 2 == 0) {
//         event += i;
//       }else {
//         odd +=i
//       }
//     }
//   }
//   if(n>m) {
//     for(i = m; i <= n; i++) {
//         if(i %2 == 0) {
//             event += i
//         } else {
//             odd += i
//         }
//     }
//   }
//   console.log(event)
//   console.log(odd)
// }

// power(3, 1)






function string(a) {
    if(a.length == 0) {
        return null
    }
    let max = a[0]
    for(let i = 0; i < a.length; i++) {
        if(a[i].length > max.length) {
            max = a[i]
        }
    }
    return max
}

console.log(string(["hi", "mir", "life", "I"]))
// console.log(string([]))