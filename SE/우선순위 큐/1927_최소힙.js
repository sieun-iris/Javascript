const fs = require('fs');
let input = fs.readFileSync('1927.txt').toString().split('\r\n');

const n = input.shift()

result = []
for (let i of input) {
    console.log(i)
    if (Number(i) === 0 && result.length === 0) {
        result.push(i)
    }
}
console.log(result.length)

