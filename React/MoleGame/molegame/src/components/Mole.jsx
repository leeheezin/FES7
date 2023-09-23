import React from 'react'
import moleImg from '../images/mole.png'
import '../index.css'

export default function Mole({show}) {
    return (
        <img src={moleImg} alt="mole" className={`mole ${show ? 'show' : 'hidden'}`}/>
    )
}

//두더지 생성
//두더지 클릭이벤트