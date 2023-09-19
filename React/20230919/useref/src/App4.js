import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

function Count() {
    //useRef는 돔요소접근하거나, 특정값유지할때 주로 사용
    const [count, setCount] = useState(0)
    const ref = useRef(0) //초기값 처음렌더링후 무시됨

    useEffect(() => {
        ref.current = count
    })

    const prevCount = ref.current //객체의 현재값을 나타냄
    console.log(prevCount)
    return (
        <div>
            <p>현재 카운트: {count}</p>
            <p>이전 카운트: {prevCount}</p>
            <button onClick={()=> setCount(count+1)}>up</button>
        </div>
    )
}
function Focus() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return(
        <div>
            <input ref={inputRef} type='text'></input>
        </div>
    )
}
export default function App4() {
    return(
        <>
            <Count/>
            <Focus/>
        </>
    )
}