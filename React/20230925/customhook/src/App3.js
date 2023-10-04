import React from 'react'
import {createStore}  from 'redux'

//리듀서 함수. 두가지 파라미터 state,action 받아옴
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
const store = createStore(counter)
store.subscribe(()=> console.log(store.getState()))

//상태를 바로 변경하는 대신 액션으로 변경할거 명시
//type은 필수로 넣어줘야함
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})

export default function App3() {
    return 
}
