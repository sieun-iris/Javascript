# Javascript 문법정리

> Array와 Arrow Function, map() 메서드에 대해 정리해보았습니다 :)



### Array 생성하는 법

```javascript
// 권장
1. var arr = [];

// 배열의 크기를 지정할 수도 있다. 
2. var arr = new Array();
ex) var arr = new Array(3);

```

### Arrow Function (화살표 함수)

> 함수 표현식보다 단순하고 간결한 문법으로 함수를 만드는 방법

```javasript
let func = (arg1, arg2, ... argN) => expression
let func = function(arg1, arg2, ...argN) {
	return expression;
};

* 참고 : https://ko.javascript.info/arrow-functions-basics
```



### map() 메서드

> 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 `배열`을 반환한다.

```javascript
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

* 참고 : MDN Web Docs [Array.prototype.map()]
```

- map() 메서드 까다로운 예제

  ```javascript
  // 아래 라인을 보시면...
  ['1', '2', '3'].map(parseInt);
  // 결과를 [1, 2, 3] 으로 기대할 수 있습니다.
  // 그러나 실제 결과는 [1, NaN, NaN] 입니다.
  
  // parseInt 함수는 보통 하나의 인자만 사용하지만, 두 개를 받을 수 있습니다.
  // 첫 번째 인자는 변환하고자 하는 표현이고 두 번째는 숫자로 변환할 때 사용할 진법입니다.
  // Array.prototype.map은 콜백에 세 가지 인자를 전달합니다.
  // 배열의 값, 값의 인덱스, 그리고 배열
  // 세 번째 인자는 parseInt가 무시하지만 두 번째 인자는 아닙니다.
  // 따라서 혼란스러운 결과를 도출할 수 있습니다. 자세한 내용은 블로그 포스트를 참고하시길 바랍니다.
  
  function returnInt(element) {
    return parseInt(element, 10);
  }
  
  ['1', '2', '3'].map(returnInt); // [1, 2, 3]
  // 실제 결과가 예상한 대로 배열의 숫자와 같습니다.
  
  // 위와 같지만 더 간단한 화살표 표현식
  ['1', '2', '3'].map(str => parseInt(str));
  
  // 더 간단하게 해결할 수 있는 방법
  ['1', '2', '3'].map(Number); // [1, 2, 3]
  // 그러나 `parseInt`와 달리 float이나 지수표현도 반환합니다.
  ['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]
  
  * 참고 : MDN Web Docs [Array.prototype.map()]
  ```

