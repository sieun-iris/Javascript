const fs = require('fs');

// 공백으로 구분된 input값을 불러온다.
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

// shift()는 배열의 맨 앞의 값을 제거한다.
const N = input.shift();

input.sort(function(a, b) { return a - b;});

for (i = 0; i != input.length; i++) {
  console.log(input[i])
}

