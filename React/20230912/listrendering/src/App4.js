import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export default function App4() {
    const [datas, setDatas] = useState ([
        { name: "벨라", species: "고양이", age: "5", id: 111 },
        { name: "루시", species: "강아지", age: "3", id: 112 },
        { name: "데이지", species: "토끼", age: "2", id: 113 },
        { name: "몰리", species: "고양이", age: "1", id: 114 },
        { name: "매기", species: "강아지", age: "6", id: 115 }
    ])
    const [update, setUpdate] = useState({
        name: '',
        species: '',
        age: ''
    })
    const updateId = useRef(6) //시작id
    const dataUpdate = () =>{ //새로운 데이터 생성
        const data = {
            ...update,
            id: updateId.current, //새로운데이터에 고유한id할당때문에
            
        }
        setDatas([...datas,data]) //기존 datas배열에 추가
        updateId.current+=1 //id도 증가

        //입력초기화
        setUpdate({
            name: '',
            species: '',
            age: ''
        })
    }
    const onChange = (e) =>{
        const {name,value} = e.target
        setUpdate({
            ...update,
            [name]: value,
        })
    }
    return (
        <div>
            <h1>애완동물 정보 리스트</h1>
            <div>
                <p>새로운 애완동물을 추가하세요!</p>
                <input name="name" value={update.name} onChange={onChange} type="text" placeholder='이름'/>
                <input name="species" value={update.species} onChange={onChange} type="text" placeholder='species'/>
                <input name="age" value={update.age} onChange={onChange} type="text" placeholder='나이'/>
                <button onClick={dataUpdate} type='button'>추가하기</button>
            </div>
            <ul>
                {datas.map((item,id)=>{
                    return <li key={id}>{item.name}는 {item.species}입니다. 그리고 {item.age}입니다.</li>
                })}
            </ul>
        </div>
    )
}
