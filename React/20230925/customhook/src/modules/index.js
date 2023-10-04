// 루트리듀서
// 리듀서를 합치는 작업은 combineReducers() 사용

import {combineReducers} from 'redux'
import counter from './counter'
import todos from './todos'

const rootReducer = combineReducers({
    counter,
    todos
})
export default rootReducer