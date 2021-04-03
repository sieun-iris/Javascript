const fs = require('fs');
let input = fs.readFileSync('10952.txt').toString().split('\r\n');

console.log(input)

let i = 0
while (i < input.length-1) {
    let num = input[i].split(' ')
    console.log(Number(num[0]) + Number(num[1]))
    i++
}