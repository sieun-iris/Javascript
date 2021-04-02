const fs = require('fs');
const article = fs.readFileSync("2751.txt");
lineArray = article.toString().split('\r\n');

// slice 문법
// array.slice(start, end)
// 배열의 start에 해당하는 요소부터, end 바로 전까지 요소를 선택하여 새로운 배열을 만든다.
answer = []
for (let i of lineArray.slice(1, 6)) {
    answer.push(i)
}

for (let j of answer.sort()) {
    console.log(j)
}



// let input = fs.readFileSync('/dev/stdin').toString().split('\r\n');

// let fs = require('fs');
// let input = fs.readFileSync("2751.txt").toString().split('\r\n');

// answer = []
// for (let i of input.slice(1, 6)) {
//     answer.push(i)
// }

// for (let j of answer.sort()) {
//     console.log(j)
// }