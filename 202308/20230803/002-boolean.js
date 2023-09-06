// 1. 비교 연산을 했을 때
let x = 3
let y = 5
console.log(x > y)
//falses

// 2. 논리연산을 했을 때 각 비교값이 true나 false인 경우
// (ture나 false가 아닌 경우 단락회로평가가 일어남)
let z = true
let f = false
console.log(x && y)
//false

// 3. true나 false로 평가되는 것들
if('hello') {
    console.log('!!')
}
//문자열 true로 실행된다.
if('') {
    console.log('!!')
}
//빈문자열 false
if(' ') {
    console.log('!!')
}
// 공백은 true
//0은 false, 0이외 다른 숫자 true
Boolean('hello') // true
Boolean('') // false
Boolean(' ') // true
Boolean(0) // false
Boolean(1) // true
Boolean(-1) // true
Boolean(100) // true
Boolean(null) //false
Boolean(undefined) //false
Boolean(NaN) //false
!!null //false 보통 이런식으로 많이 씀

// 4. js에서 나를 힘들게 하는것들 true, false
x = [1,2,3]
x.pop()
x.pop()
x.pop() //js에서는 x가 가리킨 값은 변한적 없어서 true->false 바뀌는 것은 옳지 않다.

Boolean([1,2,3]) //true
Boolean([]) //true 
Boolean({'one': 1}) //true 
Boolean({}) //true 

null == undefined //true
null > undefined //false , 다른 비교도 false
null < 100 //true
undefined < 100 //false