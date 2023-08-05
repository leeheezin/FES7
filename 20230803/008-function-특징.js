function add(a, b){
    let answer = a + b
}

let result1 = add(10, 20)

///////////////

function add(a, b){
    let answer = a + b
    return
}

let result2 = add(10, 20)

///////////////

function add(a, b){
    let answer = a + b
    return undefined
}

let result3 = add(10, 20)
////
function test() {
    console.log('hello')
    console.log('hello')
    console.log('hello')
    return
    console.log('hello')
    console.log('hello')
    console.log('hello')
}
test() // 3번 출력 - return이후는 출력 안함. 에러코드가 있어도, js엔진이 보지않는 공간에서는 에러를 출력하지 않는다.
//return이 undefined 값을 갖고 있다. 

//단락평가에서도 마찬가지다.
function errorCode() {
    console.loggg('error')
}
let value = true
let result = true || errorCode()
//errorCode 실행하지 않았다.

///
//return(반환보다는 종료에 느낌으로 쓰는 코드)
function test() {
    if(true){
        if(true){
            console.log('1')
            return
        }
    }
    console.log('2')
    //여러 코드..
    return
}
/////

// 함수의 이름은 결국 변수이다!
console.log('hello') // 'hello'는 아규먼트
let leehojun = console.log
leehojun('hello')

function test(){
    console.log('hello')
}
test()
let hojun = test
hojun()

///////////////

// 함수의 이름은 결국 변수이기 때문에 아규먼트로도 전달할 수 있을까요?
// 또는 리턴값으로도 전달할 수 있을까요?
// 답은 '네'입니다!

function add(a,b){
    return a + b
}
let x = 10
let y = 20
console.log(add(x,y))


// 1. 함수를 아규먼트로 전달
// 아래와 같이 아규먼트 전달된 함수를 콜백함수라고 부릅니다. 
function add(x, y) {
    return x + y
}

function addAndMultiply(x, y, z) {
    let sum = z(x, y) * z(x, y)
    return sum
}
addAndMultiply(1, 2, add)

// 2. 함수를 리턴값으로 전달(스코프와 클로저 배우고나서 다시 다룰 예정입니다.)
function one(x){
    function two(y){
        return x+y
    }
    return two
}
let result4 = one(10)
result4(100)

one(10)