const fs = require('fs');
const [n, ...arr] = require("fs").readFileSync("1874.txt").toString().trim().split("\r\n")

let count = 1
let stack = []
let result = []

for (let i = 0; i < n; i++) {
    let data = arr[i]
    while (count <= data) {
        stack.push(count)
        count += 1
        result.push('+')
    }
    if (stack.slice(-1)[0] === Number(data)) {    
        stack.pop()
        result.push('-')
    } 
    else {
        console.log('NO')
        break
    }
}
console.log(result.join('\n'))
