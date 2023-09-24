import React from 'react'
import moleImg from '../images/mole.png'
import '../index.css'

export default function Mole({show}) {
    return (
        <img src={moleImg} alt="mole" className={`mole ${show ? 'show' : 'hidden'}`}/>
    )
}

