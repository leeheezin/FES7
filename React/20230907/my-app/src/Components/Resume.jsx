import { useState } from "react"


function Resume(props) {

    // console.log(useState(0))
    let [like, setLike] = useState('')

    function clickLike() {
        if(like===''){
            setLike('like')
        } else {
            setLike('')
        }
    }
    
    return(
        <div style={{border: '1px solid black'}}>
            <h1>{props.name} 자기소개서</h1>
            <h1>{props.hello}</h1>
            <h2>취미 : {props.hobby}</h2>
            <h2>좋아하는 음식 : {props.food}</h2>
            <h2>좋아하는 색 : <span style={{color:props.color}}>{props.color}</span></h2>
            <button onClick={clickLike}>like <span>{like}</span></button>
        </div>
    )
}
export default Resume