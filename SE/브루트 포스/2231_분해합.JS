const fs = require('fs');
// let num = fs.readFileSync('2231.txt').toString();

const num = parseInt(require("fs").readFileSync("2231.txt").toString());
let start = num - (num+"").length*9;
let answer = 0;
if (start < 0) start = 0;
for (let i=start; i<num; i++) {
    if (i.toString().split("").map(n => parseInt(n)).reduce((acc, n) => acc + n, 0) + i === num) {
        answer = i;
        break;
    }
}
console.log(answer);

// let input = Number(fs.readFileSync('2231.txt').toString());
// console.log(input)
// let inputLen = (input.length) * 10
// console.log(inputLen)


// check = 0
// for (let i=10; i < input; i++) {
//     for (let j=0; j < input.length; j++) {
//         if (check += i + String(i))
//     }
// }

