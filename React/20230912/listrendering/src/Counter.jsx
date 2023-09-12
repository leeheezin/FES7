import React from 'react'
import { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        //state함수가 실행되면 state가 변경되고, 컴포넌트가 다시 렌더링
        //(비동기)바로 실행되지않고, 기다렸다가 한번에 마지막state만 실행(동일한함수는)
        //언제 상태가 바뀔지 몰라서!!!!
    }
    const decrement = () =>{
        setCount(count-1)
    }
    const reset = () =>{
        setCount(0)
    }
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
