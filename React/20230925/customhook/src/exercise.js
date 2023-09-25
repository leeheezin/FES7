import { createStore } from 'redux'

//store는 하나만 만들어서 사용한다.
//createStore는 store만들어주는 함수

//관리할 상태 정의
const initialState = {
    counter: 0,
    text: '',
    list: []
}
//액션 타입 정의 주로 대문자 사용
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const CHANE_TEXT = 'CHANE_TEXT'
const ADD_TO_LIST = 'ADD_TO_LIST'

//액션 생성함수 정의
const increase = () => {
    return {
        type: INCREASE //액션객체에는 type값 필수
    }
}
const decrease = () => ({
    type: DECREASE
})
const chaneText = (text) => ({
    type: CHANE_TEXT,
    text //액션안에서 type외에 추가필드 원하는대로 넣을수있음
})
const addToList = (item) => ({
    type: ADD_TO_LIST,
    item
})

//리듀서 만들기 새로운 상태를 만드는함수
function reducer(state=initialState, action) {
    switch (action.type) {
        case INCREASE:
            return{
                ...state,
                counter: state.counter + 1
            }
        case DECREASE:
            return{
                ...state,
                counter: state.counter - 1
            }
        case CHANE_TEXT:
            return{
                ...state,
                text: action.text
            }
        case ADD_TO_LIST:
            return{
                ...state,
                list: state.list.concat(action.item)
            }
        default:
            return state
    }
}
// 스토어 만들기
const store = createStore(reducer)
console.log(store.getState()) //현재상태조회

// 스토어안에 상태가 바뀔때마다 호출되는 함수
const listener = () => {
    const state = store.getState()
    console.log(state) //상태변화 출력
}

// 구독해제하고 싶을때 unsubscribe() 호출
const unsubscribe = store.subscribe(listener)

//액션->디스패치
store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(chaneText('안녕하세요'))
store.dispatch(addToList({id: 1, text: '와우'}))
