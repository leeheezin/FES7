import React from 'react'
import './Main.css'
import { useState } from 'react'

export default function Main() {
    const [hours, setHours] = useState(0)
    const [remainingHours, setRemainingHours] = useState(null)
    const [job, setJob] = useState('')

    const calculator = () => {
        const total = 10000
        const hoursEnd = parseInt(hours)
        //입력값 숫자, 양수만
        if(!isNaN(hoursEnd) &&  hoursEnd>=0) {
            const remainingHoursValue = Math.ceil(total / hoursEnd) //10000시간 - 입력시간 / 입력시간으로 남은일수 계산
            setRemainingHours(remainingHoursValue)
        } else {
            setRemainingHours(null)
        }
    }
return (
    <main>
        <form className="cont-input">
            <p>나는 <input type="text" className="txt-wannabe" placeholder="프로그래밍" onChange={(e)=> setJob(e.target.value)}/>전문가가 될것이다.</p>
            <p class="txt-time">그래서 앞으로 매일 하루에 <input type="number" placeholder="5" onChange={(e)=> setHours(e.target.value)}/>시간씩 훈련할 것이다.</p>
            <button type="button" onClick={calculator}class="btn-exc">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
        </form>
        <section className="cont-result">
            <h2 class="a11y">결과 확인</h2> 
            {remainingHours !== null && <p class="txt-wannabe">당신은 <strong>{job}</strong>전문가가 되기 위해서<br/>대략 <strong>{remainingHours}</strong>일 이상 훈련하셔야됩니다.</p>}
            <button type="button" class="btn-go">훈련하러가기 GO!GO!</button>
            <button type="button" class="btn-share">공유하기</button>
        </section>
    </main>
)
}
