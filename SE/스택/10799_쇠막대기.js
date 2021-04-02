const fs = require('fs');
let input = fs.readFileSync('10799.txt').toString().split('');

// '('가 나오면 스택에 저장하고, ')'가 나오면 스택에 '('을 pop시킨 후, 
// 스택에 있는 괄호의 갯수를 result에 저장
// ')' 나올때 레이저인 경우가 존재하기 때문에, 그 전 스택이 '('이라면 레이저라고 인식

function solution(arrangement) {
    let result = 0;
    let stack = [];

    for (let i = 0; i < arrangement.length; i++) {
        if (arrangement[i] === '('){
            stack.push(arrangement[i]);
        } else {
            stack.pop();
            if (arrangement[i-1] === '(') {
                result += stack.length;
            } else result += 1;
        }
    }
    return result ;
}
console.log(solution(input))


// for (let i in input) {
//     if (input[i] === '(' && input[i+1] === ')') {
//         input[i] = 0;
//         i += 2
//     }
// }
// console.log(input)