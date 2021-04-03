const fs = require('fs');
let input = fs.readFileSync('10871.txt').toString().split('\r\n');

let lineOne = input[0].split(' ')
let lineTwo = input[1].split(' ')

let X = lineOne[1]

result = []
for (let i of lineTwo) {
    if (Number(i) < X) {
        // result.push(i)
        result.push(Number(i))
    }
}

// 결과 가로출력
let space = " "
for (let i = 0; i < result.length; i++) {
    space += result[i] + " ";
}
console.log(space)


