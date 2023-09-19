import React from 'react'
import Detail from './Detail'
import Question from './Question'
import Review from './Review'
import { useState } from 'react'

const ContContainer = ({listName}) => {
    if(listName === 'detail') {
        return <Detail/>
    } else if (listName === 'qa'){
        return <Question/>
    } else if (listName === 'review'){
        return <Review/>
    }

}

const NavBar = () => {
    const [listName, setListName] = useState('detail')

    function checkId(e) {
        setListName(e.target.id)
    }
    return (
        <>
            <nav>
                <ul>
                    <li id='detail' style={listName === 'detail' ? {color:'red'} : {color: 'black'}} onClick={checkId}>상세정보</li>
                    <li id='qa' style={listName === 'qa' ? {color:'red'} : {color: 'black'}} onClick={checkId}>Q&A</li>
                    <li id='review' style={listName === 'review' ? {color:'red'} : {color: 'black'}} onClick={checkId}>Review</li>
                </ul>
            </nav>
            <ContContainer listName={listName}/>
        </>
    )
}

export default function App5() {
    return (
        // && : 첫번째 falsy값을 반환하거나 혹은 마지막 truthy값을 반환한다(둘다참이면 뒤에값을 반환)
        // || : 첫번째 truthy값을 반환하거나, 마지막 falsy값을 반환한다
        true && <NavBar/> 
    )
}
