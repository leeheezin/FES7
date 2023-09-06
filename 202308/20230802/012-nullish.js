// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필이(최신 문법을 구식 부라우저에서도 사용할 수 있도록 해주는 것) 필요합니다.

let firstName = null;
let lastName = 'hojun';
let nickName = 'licat';

console.log(firstName ?? nickName) //licat
console.log(firstName ?? lastName ?? nickName) //licat
console.log(firstName || nickName) 

let a = null;
let b = 10;
let c = null;
console.log( a?? b?? c)

//nullish와 단락회로평가 차이점?
let height = 0;
console.log(height ?? 100) //0이 null인가요? nullish 입장에선 0도 value
console.log(height || 100) //0을 만났을때 뒤를 봐야하나요?

let height2;
console.log(height2 ?? 100)
console.log(height2 || 100)

let height3;
console.log(height3 ?? 'world') //''을 출력/ ''가 null이아니니까. 앞에가 null인지 확인
console.log(height3 || 'hello') //''만났을때 뒤를 봐야하나요?

//nullish 문제
let username;
let nickname;

console.log(username || nickname || 'guest') //guest


let username1='';
let nickname1='';

console.log(username1 || nickname1 || 'guest') //guest

let username2='';
let nickname2='';

console.log(username2 ?? nickname2 ?? 'guest') //username 공백 출력

let username3;
let nickname3;

console.log(username3 ?? nickname3 ?? 'guest') //guest

