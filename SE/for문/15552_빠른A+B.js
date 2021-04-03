const fs = require('fs');
let input = fs.readFileSync('15552.txt').toString().split('\r\n');

const N = input.shift()
for (let i of input) {
    let tc = i.split(" ")
    console.log(Number(tc[0]) + Number(tc[1]))
}


// 참고
// let max = Number(input[0]);
// let answer = '';

// for (let i = 1; i <= max; i++) {
//     let num = input[i].split(' ');
//     answer += Number(num[0]) + Number(num[1]) + "\n";
// }

// console.log(answer);
