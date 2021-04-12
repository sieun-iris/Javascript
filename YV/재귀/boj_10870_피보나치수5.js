const fs = require('fs');

// 공백으로 구분된 input값을 불러온다.
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('10870.txt').toString();

var sum = 0
var arr = [0, 1]
for (var i = 0; i < input; i++) {
  if(input === 0 || input === 1) {
    console.log(input)
  } else {
    arr.push(arr[0] + arr[1])
    arr.shift()
  }
}

console.log(arr[0])