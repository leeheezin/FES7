import React, {createContext, useContext} from 'react'
const themeDefault = {border:'1px solid green'}
const themeContext = createContext(themeDefault)

export default function App5() {
    const theme = useContext(themeContext)
    console.log('theme',theme)
    return (
        <div>
            <div>App5</div>
            <Sub1/>
        </div>
    )
}
function Sub1() {
    return(
        <div>
            <h1>sub1</h1>
            <Sub2/>
        </div>
    )
}
function Sub2() {
    return(
        <div>
            <h1>sub1</h1>
            <Sub3/>
        </div>
    )
}
function Sub3() {
    return(
        <div>
            <h1>sub1</h1>
        </div>
    )
}


