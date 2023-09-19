import React, { useState } from 'react'
import Login from './Components/Login'
import Homepage from './Homepage'
import Modal from './Components/Modal'

export default function App3({id,handleLogout}) {

        const user = {
            idUser: 'loopy@naver.com',
            pwUser: 1234
        }
        const [login, setLogin] = useState(false)
        const [modalShow, setModalShow] = useState(true)
    
    return (
        <>
            {login ? <Homepage setLogin={setLogin} id={id} onLogout={handleLogout}/> : <Login infoUser={user} setLogin={setLogin}/>}
            {modalShow && <Modal setModalShow={setModalShow}/>}
        </>
    )
}
