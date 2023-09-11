import React from 'react'
import MenulistItem from '../MenuListItem/MenulistItem'
import './MenuList.css'

export default function MenuList(props) {
    const menus = ["좋아요! 😃", "정말 좋아요! 🤭", "최고에요! 😄", "미쳤어요!! 🤪"]

  return (
    <div className='container-list'>
        <ul>
            {menus.map((moodEl, index)=>{
                return <MenulistItem key={index} mood={moodEl} setCurrentMood={props.setCurrentMood}/>
            })}
        </ul>
    </div>
)
}
