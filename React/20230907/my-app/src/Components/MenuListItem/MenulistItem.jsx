import React from 'react'
import './MenulistItem.css'

export default function MenulistItem(props) {
  return (
    <button onClick={()=>props.setCurrentMood(props.mood)} className='btn-item'>기분이 : {props.mood}</button>
  )
}
