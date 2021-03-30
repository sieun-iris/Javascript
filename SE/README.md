# TIL

## 21.03.30

### slice

```javascript
// slice 문법
array.slice(start, end)
배열의 start에 해당하는 요소부터, end 바로 전까지 요소를 선택하여 새로운 배열을 만든다.

값이 음수면 마지막 요소를 기준으로 선택
```



ex)

```javascript
test = [1, 2, 3, 4, 5, 6]

test.slice(1, 4)
// 결과: 2, 3, 4

test.slice(2)
// 결과: 3, 4, 5, 6

test.slice(-4, -1)
// 결과: 3, 4, 5
```



test