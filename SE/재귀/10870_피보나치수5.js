// input = 10, output = 55

const fs = require('fs');
const input = fs.readFileSync("10870.txt").toString();


//// 재귀 삼항연산자로 변형
function fibo(input) {
    return input >= 2 ? fibo(input-1) + fibo(input-2) : input;
}
for (let i=0; i <= input; i++) {
    console.log(i, fibo(i))
}


//// 기본 재귀
// function fibonacci(input) {
//     if (input == 0) return 0;
//     else if (input == 1) return 1;
//     else return fibonacci(input-1) + fibonacci(input-2);
// }
// console.log(fibonacci(input));



//// 반복적 동적 계획법 풀이
// const N = Number(input)
// const TC = []

// for (let i=0; i <= N; i++) {
//     TC.push(0)
// }
// TC[1] = 1

// for (let i=2; i <=N; i++) {
//     TC[i] = TC[i-1] + TC[i-2]
// }
// console.log(TC[N])