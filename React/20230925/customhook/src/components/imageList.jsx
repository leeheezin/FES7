import React from 'react'
import ImageItem from './imageItem'

export default function ImageList({imageList}) {
  return (
    <ul>
        {imageList.map((imgData)=>{
            return(
                <li key={imgData.id}>
                    <ImageItem imgData={imgData}/>
                </li>
            )
        })}
    </ul>
  )
}
