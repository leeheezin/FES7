// filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter((v) => v % 2 === 0);

//filter 메서드 체이닝으로 많이 사용된다.
//return 값이 true인것만 모아서 새로운 배열을 만든다.


//reduce - 배열의 요소를 모두 더해주고 싶을때 사용
[10,20,30,40,50].reduce((a,c)=> a+c, 0) //암기코드  누적되서 더해짐
//파라미터 이름은 자유롭게 지정가능하다. 
//forEach, map, filter, reduce 메서드 모두 마찬가지

//includes - 포함시 true, 미포함 false
const arr1 = ['hello', 'world', 'hojun']
arr1.includes('world')

const arr1 = ['hello', 'world', 'hojun']
arr1.includes('leehojun')

const arr1 = ['hello', 'world', 'hojun']
arr1.includes('jun')


//join(***)
const arr1 = ['hello','world','hojun']
arr1.join('!')
//'hello!world!hojun'

let arr2 = ['hello', 'world', 'hojun']
arr.join('!')

let arr3 = ['hello', 'world', 'hojun']
arr.join(' ')

let arr4 = ['010', '5044', '2903']
arr.join('-')

let arr5 = ['안녕하세요', '제이름은 이호준입니다.', '저는 제주에 살아요']
arr5.join('\n')
console.log(arr5.join('\n')) //개행됨


//reverse
[10,20,30].reverse() // [30,20,10]