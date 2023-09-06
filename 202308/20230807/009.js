//n이하의 짝수를 모두 더한값을 return n이10
function solution(n) {
    return Array(n).fill(0).map((_,i)=>i+1).filter(v => v % 2 === 0).reduce((a,c)=> a+c, 0)
}

//머쓱이보다 키큰사람
let result = 0;
[149,180,192,170].forEach(v=>{
    v> 168 ? result++ : null
})
result
//3


function solution(array, height){
    return array.filter(v => v > height).length
}
[149, 180, 192, 170].filter(v => v > 168).length

// 문제 3
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120849
// 문제 : 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
    var answer = '';
    return answer;
}

let my_string = 'hello world'
let 모음 = ['a', 'e', 'i', 'o', 'u']
my_string.split('').filter(v=>!모음.includes(v)).join('')

//join 주의사항
//문제4
//1-100숫자중 3의배수만 더한값 map,filter,reduce
Array(100).fill(0).map((_,i)=>i+1).filter(v => v % 3 === 0).reduce((a,c)=> a+c, 0)


//문제5
//1-100숫자중 1이라는 숫자가 들어간 숫자는 모두 더해주세요.
Array(100).fill(0).map((_,i)=>i+1).filter(v=> v.toString().includes('1')).reduce((a,c)=> a+c, 0)
