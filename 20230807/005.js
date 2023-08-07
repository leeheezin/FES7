//1.forEach는 return이 없습니다.
//2.map은 원본을 수정하여 새로운 배열을 만들고, forEach는 원본배열을 변경하지 않습니다.

//forEach의 경우 1~100까지 더하는 코드
let sum = 0
Array(100).fill(0).forEach((v,i)=>{
    sum+= i+1
})
console.log(sum)

//map사용해서 1-100까지 더하는 코드
let sum = 0
Array(100).fill(0).map((v,i)=>i)

[1,2,3,4].map(v=> 'hello world')
//['hello world', 'hello world', 'hello world', 'hello world']
//v는 1,2,3,4 index,arr는 들어가지 않았다

[1,2,3,4].map(v=>'hello'+v)
//['hello1', 'hello2', 'hello3', 'hello4']

let data = [1,2,3,4]
data.map(v=>'hello'+v)
data//원본은 수정되지 않는다

[1, 2, 3, 4].map(v => 'hello world')
// ['hello1', 'hello2', 'hello3', 'hello4']

[1,2,3,4].map(v=> 'hello'+v)
// ['hello1', 'hello2', 'hello3', 'hello4']

[1, 2, 3, 4].map((v, i) => 'hello' + (i + 1))
// ['hello1', 'hello2', 'hello3', 'hello4']

[1, 2, 3, 4].map((v, i) => 'hello' + i)
// ['hello0', 'hello1', 'hello2', 'hello3']


//자주쓰는건 1,4
// 같은 코드 1 
[1, 2, 3, 4].map(v => 'hello' + v)

// 같은 코드 2
function 함수(v) {
    return 'hello' + v
}
[1, 2, 3, 4].map(함수)

// 같은 코드 3
[1, 2, 3, 4].map(function (v) {
    return 'hello' + v
})

// 같은 코드 4
[1, 2, 3, 4].map((v) => {
    return 'hello' + v
})