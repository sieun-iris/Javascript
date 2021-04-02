const fs = require('fs');
let input = fs.readFileSync('10773.txt').toString().split('\r\n');

// const caseCount = Number(input[0]);
// const stack =  [];

// for (let i = 1; i <= caseCount; i += 1) {
//   const value = Number(input[i]);
//   if (value === 0) {
//     stack.pop();
//   } else {
//     stack.push(value);
//   }
// }

// let result = 0;
// for (let i = 0; i < stack.length; i += 1) {
//   result += stack[i];
// }
// console.log(result);




const n = input.shift()
// for (var i = 0; i < input.length; i++) {
//     console.log(input.pop())
//     // console.log(i)
// }
// console.log(input)

for (let i in input) {
    if (input[i] === '0') {
        input.splice(i-1, 2)
    }
}
console.log(input)

// lineArray.map(numStr => parseInt(numStr));
// console.log(lineArray)
// const n = lineArray.shift()
// for (let i of lineArray) {
//     let a = parseInt(i)
//     console.log(typeof a)
//     console.log(typeof i)
// }

