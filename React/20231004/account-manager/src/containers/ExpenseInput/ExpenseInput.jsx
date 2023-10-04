import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpenseAction } from '../../store/expense/expense-slice'

export default function ExpenseInput() {

    const dispatch = useDispatch()
    // 지출이름을 관리
    const [name,setName] = useState('')
    // 지출금액을 관리
    const [price,setPrice] = useState(0)

    function submit(event) {
        event.preventDefault()
        dispatch(addExpenseAction({name,price}))
    }
    return (
        <form action="" onSubmit={submit}>
            <div>
                <label>
                    지출 상품명 : 
                    <input type="text" placeholder='예: 사과' onChange={(e)=> setName(e.target.value)}/>
                </label>
            </div>
            <div>
                <label>
                    지출 상품금액 : 
                    <input type="number" placeholder='예: 5000' onChange={(e)=> setPrice(~~(e.target.value))}/>
                </label>
            </div>
            <button type='submit'>추가</button>
        </form>
    )
}
