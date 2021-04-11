// input = 10, output = 55

const fs = require('fs');
const input = fs.readFileSync("10870.txt").toString();
const N = Number(input)

const TC = []

for (let i=0; i <= N; i++) {
    TC.push(0)
}
TC[1] = 1

for (let i=2; i <=N; i++) {
    TC[i] = TC[i-1] + TC[i-2]
}
console.log(TC[N])