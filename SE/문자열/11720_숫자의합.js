const fs = require('fs');
let TC = fs.readFileSync('11720.txt').toString().split('\r\n');

let result = 0
let N = TC.shift()
for (let i=0; i < Number(N); i++) {
    result += Number(TC[0][i])
}
console.log(result)
