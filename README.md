# commit 규칙

추후 업데이트



# Javascript

## js파일 로컬 실행

node + 파일이름.js



## 텍스트 파일 읽기

```javascript
const fs = require('fs');

const article = fs.readFileSync("a.txt");
lineArray = article.toString().split('\r\n');
console.log(lineArray)
```



```javascript
// 띄어쓰기가 없는 한 줄 입력 받을때
lineArray2 = lineArray.toString().split('');

// 띄어쓰기가 있는 한 줄 입력을 받을때
lineArray2 = lineArray.toString().split(' ');

// 입력값
// 123
// 45
const article = fs.readFileSync("a.txt");
lineArray = article.toString().split('\r\n');

const c = []
for (let a of lineArray) {
    const b = a.toString().split('');
    c.push(b)
}
console.log(c)

// 출력값
// [ [ '1', '2', '3' ], [ '4', '5' ] ]
```





## 입력 참고

```javascript
var fs = require("fs")

// 문자 하나
var input = fs.readFileSync("/dev/stdin").toString()

// 한 칸 띄어쓰기로 구분
// input[0], input[1] 배열에서 꺼내쓰면 된다.
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")

// 줄바꿈으로 구분
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")

// 만약 인풋값이 숫자라면
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(function(a) {
    return +a
  })
```



## 함수 참고

`parseInt` : 문자열 숫자 변환



