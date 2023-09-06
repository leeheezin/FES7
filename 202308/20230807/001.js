// 중요도 높습니다!
// push - 배열의 뒤에 값을 추가한다
// 반환값: undefined
// pop - 뒤에서 값을 꺼내고 반환
// 반환값: 꺼낸 값

// unshift - 배열의 앞에 값을 추가한다
// 반환값: 배열의 길이
// shift - 앞에서 값을 꺼내고 반환
// 반환값: 꺼낸 값

// 문제
// push, pop, unshift, shift를 이용하여 다음과 같은 배열을 만들어보세요.
// 입력값: [10, 20, 30, 40]
// 출력값: [10, 100, 20, 30, 50]

// arr.splice(start, deleteCount, item1, item2, ...)
let arr = [10, 20, 30]
arr.splice(1, 0, 100) // 1번째에, 0개를 지우고, 100을 넣어라
//splice 사용

let arr2 = [10,20,30,40]
arr.pop()
arr.push(50)
arr.shift()
arr.unshift(10,100)

//같이 풀 문제
let arr3 = [10,20,30,40]
let x = [1,2,3]
//만들고 싶은 값: [10,1,2,3,20,30,40,1,2,3,100]
arr3.splice(1,0, ...x)
arr3.push(1,2,3,100)

//2. slice
//arr.slice(start,end)
//주의! 원본 수정되지 않는다
let arr4 = [10,20,30,40]
arr4.slice(1,3) // 1번째부터 3번째전까지(2번째까지자른다)
arr4.slice(1,1000) //index에 없는값도 오류가 생기지않음. splice도 마찬가지