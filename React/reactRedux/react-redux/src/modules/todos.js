import React from 'react'

// 액션타입선언
const ADD_TODO = 'todos/ADD_TODO'
const TOGGLE_TODO = 'todos/TOGGLE_TODO'

// 액션생섬함수선언
let nextId = 1;  // todo데이터에서 사용할 고유 id
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++, //새항목을 추가하고, nextId값에 1을 더해준다
        text
    }
})
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})
// 초기상태선언 - 객체아니어도됨 배열,원시타입 전부 가능
const initialState = [
    {
        id: 1,
        text: '예시',
        done: false
    }
]
export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo)
        case TOGGLE_TODO:
            return state.map(
                todo =>
                    todo.id === action.id //id가 일치하면
                    ? {...todo, done: !todo.done} //done 값을 반전시키고
                    : todo // 아니라면 그대로 둠
            )
        default:
            return state
    }
}
