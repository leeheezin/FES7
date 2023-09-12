import React from 'react'
import { useState } from 'react'
import Counter from './Counter'

export default function App2() {

    const [productList, setProductList] = useState([
        {
            title: "개발자 무릎 담요",
            price: 17500,
            id: 101,
        },
        {
            title: "Hack Your Life 개발자 노트북 파우치",
            price: 29000,
            id: 102,
        },
        {
            title: "우당탕탕 라이켓의 실험실 스티커북",
            price: 29000,
            id: 103,
        },
        {
            title: "버그를 Java라 버그잡는 개리씨 키링",
            price: 29000,
            id: 104,
        },
        ])
        const del = (id) =>{ //버튼 클릭하지 않은 요소들만 새로운 배열 반환
            const update = productList.filter((item)=> item.id !== id)
            setProductList(update)
        }

        // function del(id) {
    //     setProductList(
    //         data.filter((item) => {
    //             return item.id !== id
    //         })
    //     )
    // }
    //아래코드가 함수형 업데이트. 장점은 콜백함수의 인자에 이전의 상태가 들어가는것을 리액트가 보장한다.
    // function del(id) {
    //     setProductList((prevData) => {
    //         prevData.filter((item) => {
    //             return item.id !== id
    //         })
    //     }
    //     );
    // }
    return (
        <>
            <ul>
                {productList.map((item)=>{
                    
                    return (
                        <li key={item.id}>
                            <h2>{item.title}</h2>
                            <span>{item.price}</span>
                            <button onClick={()=>del(item.id)}>삭제</button>
                        </li>
                    )
                })}
            </ul>
            <Counter/>
        </>
    )
}
