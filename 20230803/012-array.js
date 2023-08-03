// 1. array에 여러가지 형태
let arr1 = []
let arr2 = [1,2,3]
let arr3 = [[1,2,3],
            [4,5,6],
            [7,8,9]
            ]
arr3[1][2] //6

let arr4 = ['leeheejin', 10, 100]// 이렇게 여러개의 타입이 혼합되어 쓰시는것을 권하진 않습니다.
arr4[0][3] //'h'

// 2. array에 길이 출력
let arr5 = [1,2,3]
arr1.length //3

// 이중 배열의 길이 출력
let arr6 = [[1,2,3],
            [4,5,6],
            [7,8,9]
            ]
arr3.flat().length //9
arr3.flat(Infinity).length //배열이 엄청 많을때 무한까지 