const fs = require('fs');
let TC = fs.readFileSync('10809.txt').toString().split('');

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 
                'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                'n', 'o', 'p', 'q', 'r', 's', 't', 
                'u', 'v', 'w', 'x', 'y', 'z']

// 결과 가로 출력
let result = " "
for (let i=0; i < 26; i++) {
    if (TC.indexOf(alphabet[i]) >= 0) {
        alphabet[i] = TC.indexOf(alphabet[i])
        result += alphabet[i] + " ";
    } else {
        alphabet[i] = -1
        result += alphabet[i] + " ";
    }
}
console.log(result)


