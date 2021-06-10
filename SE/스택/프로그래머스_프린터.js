function solution(priorities, location) {
    let record = []
    for (let i = 0; i < priorities.length; i++) {
        if (i === location) {
            record.push(1)
        } else {
            record.push(0)
        }
    }

    let answer = []
    let position = []
    while (priorities.length > 0) {
        let first = priorities.shift()
        let copy = record.shift()
        
        let maxValue = Math.max(...priorities)
        if (first >= maxValue) {
            answer.push(first)
            position.push(copy)
        } else if (first >= maxValue && copy === 1) {
            answer.push(first)
            position.push(copy)
            break
        } 
        else {
            priorities.push(first)
            record.push(copy)
        }
    }
    return position.indexOf(1) + 1
}

console.log(solution([2, 1, 3, 2], 2))   // 출력용