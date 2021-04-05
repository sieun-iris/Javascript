# Commit 규칙

1. 문제 풀이 성공

   ```bash
   git commit -m '[Pass] 문제 사이트_문제 번호 문제 이름'
   
   예) git commit -m '[Pass] boj_2571 수 정렬하기2'
   ```

2. 문제 풀이 실패

   ```bash
   git commit -m '[Fail] 문제 사이트_문제 번호 문제 이름'
   ```

3. 런타임 에러

   ```bash
   git commit -m '[Runtime-error] 문제 사이트_문제 번호 문제 이름'
   ```

4. 진행중

   ```bash
   git commit -m '[Ongoing] 문제 사이트_문제 번호 문제 이름'
   ```

5. 코드 참고

   ```bash
   git commit -m '[Study] 문제 사이트_문제 번호 문제 이름'
   ```

   

<br>

<br>

# Javascript

## js파일 로컬 실행

```bash
node + 파일이름.js
```



<br>

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



<br>

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

<br>

## 함수 참고

`parseInt` : 문자열 숫자 변환



