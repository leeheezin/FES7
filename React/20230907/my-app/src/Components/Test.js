import { useState } from "react"
import MenuList from "./MenuList/MenuList"
import DisplayMood from "./DisplayMood/DisplayMood"

function Test(props) {
    let [currentMood, setCurrentMood] = useState('오늘의기분')

    return(
        <div>
            <h1>오늘의 기분을 선택해주세요😄</h1>
            <div>
                <MenuList setCurrentMood={setCurrentMood}/>
                <DisplayMood mood={currentMood}/>
            </div>
        </div>
    )
}

export default Test