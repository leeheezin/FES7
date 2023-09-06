// js console
// let x = 10;
// let y = 20;

// console.log(x)
// x = x+y
// console.log(y)
// console.log(x)

// 자주 사용하는 console 종류
console.clear() // 콘솔창 청소 함수객체로 괄호()필요함
console.dir() // 가진 요소(점으로 찍어서 접근할 수 있는요소)보여줌
console.log() //콘솔창에 출력
let data = {a:1, b:2, c:3}
console.table (data) //테이블 형태로 출력

console.group('one')
console.log('몽룡/팀원')
console.log('길동/팀원')
console.log('춘향/팀원')
console.group('two')
console.log('철수/팀원')
console.log('영희/팀원')
console.log('철수/팀원')
console.groupEnd()
console.log('갑돌이/팀장')
console.groupEnd()


console.group('one')
for (let i = 0; i < 3; i++) {
    console.log(i)
    console.group('two')
    for (let j = 0; j < 10; j++) {
        console.log(j)
    }
    console.groupEnd()
}
console.groupEnd()

console.error('에러발생')
console.warn('경고발생')

// 잊으셔도 괜찮습니다.
// %s: String 
// %d: Number 
// %i: parseInt(value, 10)
// %f: parseFloat(value)
// %j: JSON
// %o: Object (including non-enumerable properties and proxies)
// %O: Object (not including non-enumerable properties and proxies)
// %c: CSS
// %%: single p
console.log("%chello world", "color:red;font-size:32px");
console.log(
    "%chello world%chello",
    "color:red;font-size:32px",
    "color:blue;font-size:16px"
);
// https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20

// 변수는 포스트잇이다.

            // 변수 선언 방법 X
            // 변수로 가져올 수 있는 값
            let x = 10;
            let y = 100;
            x = 15;
            console.log(x + y);

            // 한글(대부분 권장하지 않습니다. 저는 권장합니다.)
            let 호준 = 100;
            console.log(호준 + 호준);

            // 숫자(X)
            // let 10 = 100;

            // 숫자 + 문자(X)
            // let 1a = 100;

            // 문자(대소문자를 가립니다.)
            let abc = 100;
            let Abc = 200;
            let aBc = 300;
            // let iiiIIiiIIiiIi = 10 // 이렇게 쓰지마세요.

            // 특수문자
            // let ..\user\document  = 10; //error
            // let $__$ = 548; // 이렇게 쓰지마세요.
            // let $,_ = 10; // 이렇게 쓰지마세요.
            let _ = 100; // 반복문 돌 때 의미없는 변수에 사용
            // let __ = 100; // 이렇게 쓰지마세요.

            // let π = 100; // 사용하지는 않는데 책에 잘못된 내용이 많습니다.
            // let ✂ = 100;
            // let ➕ = 100;
            // console.log(π + π);

            // 변수는 let, const, var, if, else 이런 지정된 키워드로(예약어) 사용하지 않습니다.

            const submitBtn = document.querySelector("#submitBtn")
            submitBtn. addEventListener('click', function(){
                alert('눌렀다!')
            })
