import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrease, increase, setDiff } from '../modules/counter'
import Counter from '../components/Counter'

export default function CounterContainer() {
    // useSelector 리덕스스토어의 상태를 조회하는 훅
    // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일하다
    const {number,diff} = useSelector(state=>({
        number: state.counter.number,
        diff: state.counter.diff
    }))

    // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용할수있게 해주는 훅
    const dispatch = useDispatch()
    // 각 액션들을 디스패치하는 함수들 만들기
    const onIncrease = () => dispatch(increase())
    const onDecrease = () => dispatch(decrease())
    const onSetDiff = () => dispatch(setDiff(diff))

    return (
        <Counter
            //상태와
            number={number}
            diff={diff}
            //액션을 디스패치하는 함수들을 props로 넣어준다
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    )
}
