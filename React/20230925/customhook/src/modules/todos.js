// 액션타입 선언
const ADD_TODO = 'todos/ADD_TODO'
const TOGGLE_TODO = 'todos/TOGGLE_TODO'

// 액션 생성함수 선언
let nextId = 1 //todo데이터에서 사용할 고유 id
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++, //새항목추가 nextId값에 1더해줌
        text
    }
})
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})
// 초기상태선언
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
                todo=>
                todo.id === action.id
                ? {...todo, done: !todo.done}
                : todo
            )
        default:
            return state;
    }
}