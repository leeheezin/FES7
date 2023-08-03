function add(x,y) {
    return x+y
}

add(1,2)

function multiply(z,g){
    return z*g
}
multiply(3,4)

//'10,000'문자를 숫자로 반환하는 함수
function stringToNumber(str) {
    let answer = parseInt(str.replaceAll(',',''))
    return answer
}

//입력된 문자열을 출력하고, 입력된 문자열을 쪼개서 출력하는 함수를 만들어주세요.
function stringSplit(str) {
    console.log(str)
    return str.split('')
}
stringSplit('world')

//2개의 숫자 입력되면, 2개숫자를 더하고, 2개의숫자를 곱하기
//1번째풀이
function add(x,y){
    return x+y
}
function string(x,y) {
    return add(x,y) * add(x,y)
}
string(1,2)

//2번째풀이 - 메모리효율 위해 함수를 내부에서 만들어 사용
function addAndMultiply(x,y) {
    function add(x,y){
        return x+y
    }
    let sum = add(x,y) * add(x,y)
    return sum
}
string(1,2)


//x**2 + 4x -12를 구해주는 함수를 만들어주세요
//입력 3
//출력 9 +12 - 12 = 9
function QuadraticEquation(b) {
    return b**2 + 4*b - 12
}
QuadraticEquation(3)