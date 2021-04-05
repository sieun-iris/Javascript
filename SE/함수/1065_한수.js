const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let count = 0

for (let i = 1; i <= input; i++) {
    if (i < 100) {
        count += 1
    } else {
        check(i)
    }
}

function check(number) {
    let a = String(number).split('')
    let result = []
    for (let i in a) {
        if (i < a.length - 1) {
            result.push(Number(a[Number(i)]) - Number(a[Number(i)+1]))
        }
    }
    let mySet = new Set()
    for (let j of result) {
        mySet.add(j)
    }
    if (mySet.size === 1) {
        count += 1
    }
}

console.log(count)