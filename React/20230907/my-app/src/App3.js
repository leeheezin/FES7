import React, { useState } from 'react'
import Login from './Components/Login'
import Homepage from './Homepage'

export default function App3({id,handleLogout}) {

    
        const user = {
            idUser: 'loopy@naver.com',
            pwUser: 1234
        }
        const [login, setLogin] = useState(false)
    
    return (
        login ? <Homepage id={id} onLogout={handleLogout}/> : <Login infoUser={user} setLogin={setLogin}/> 
        
        
    )
}
