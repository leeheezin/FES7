import React from 'react'
import { useState } from 'react'

export default function App3() {
    const data = [
        { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
        { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
    ]
    const [info, setInfo] = useState()

    const showInfo = (id) =>{
        const item = data.find((i)=> i.id === id)
        setInfo(item)
    }
    return (
        <div>
            <ul>
                {data.map((i)=>{
                    return( //onClick함수자체가 전달되야함
                        <li onClick={()=>showInfo(i.id)}key={i.id}>
                            {i.name}
                        </li>
                    )
                })}
                {info && (
                    <span>
                        <p>{info.email}</p>
                        <p>{info.job}</p>
                    </span>
                )
                }
            </ul>
            
        </div>
    )
}
//다른 풀이
// function UserItem({ user }) {

//     const [showInfo, setShowInfo] = useState(false);

//     return (
//         <li onClick={() => setShowInfo(!showInfo)}>
//             {user.name}
//             {showInfo ? <div>
//                 <div>email : {user.email}</div>
//                 <div>job : {user.job}</div>
//             </div> : null}
//         </li>
//     )
// }

// function UserList({ users }) {
//     return (
//         <ul>
//             {users.map((item) => {
//                 return <UserItem key={item.id} user={item} />
//             })}
//         </ul>
//     );
// }

// export default function App3() {

//     const users = [
//         { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
//         { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
//         { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
//     ];


//     return (
//         <div>
//             <h1>user list</h1>
//             <UserList users={users} />
//         </div>
//     )
// }