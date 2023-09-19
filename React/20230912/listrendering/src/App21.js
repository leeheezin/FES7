import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export default function App21() {
    const [person, setPerson] = useState([
        {
            "_id": "65004f1a2759fdb18a391723",
            "age": 39,
            "eyeColor": "green",
            "name": "Lucinda Buck",
            "gender": "female"
        },
        {
            "_id": "65004f1a818be000844fcbfe",
            "age": 29,
            "eyeColor": "blue",
            "name": "Wade Hogan",
            "gender": "male"
        },
        {
            "_id": "65004f1a02d23f9c2962a64b",
            "age": 34,
            "eyeColor": "green",
            "name": "Kristine Manning",
            "gender": "female"
        },
        {
            "_id": "65004f1a337807edc6e6f863",
            "age": 39,
            "eyeColor": "brown",
            "name": "Christina Meyer",
            "gender": "female"
        },
        {
            "_id": "65004f1a0c5b21bea19d496c",
            "age": 29,
            "eyeColor": "brown",
            "name": "Martina Acevedo",
            "gender": "female"
        },
        {
            "_id": "65004f1a0f131d96686c12cd",
            "age": 29,
            "eyeColor": "brown",
            "name": "Estelle Baird",
            "gender": "female"
        },
        {
            "_id": "65004f1a836b7668db85960e",
            "age": 33,
            "eyeColor": "green",
            "name": "Fuentes Knowles",
            "gender": "male"
        }
    ])
    //새로운 데이터 상태초기화
    const [add, setAdd] = useState({
        name: '',
        age: '',
        gender: ''
    })
    const onChange = e => { //name과 값을 추출해서 add상태에 업데이트
        const { value, name } = e.target
        setAdd({
            ...add, //기존객체복사
            [name]: value //name키 가진값 value로설정
        })
    }
    const addId = useRef(1) //Ref생성 고유id할당
    const addPerson = () =>{ //새데이터 새객체로 만듬
        const addList = {
            ...add,
            id: addId.current,
        }
        //기존 배열에 추가, id도 증가
        setPerson([addList, ...person]) //새데이터 위로가게함
        addId.current+=1
        //입력필드값은 다시 초기화
        setAdd({ 
            name: '',
            age: '',
            gender: ''
        })
    }
    
    const del = (_id) => {
        const update = person.filter((item)=> item._id !== _id)
        setPerson(update)
    }
    return (
        <div>
            <h1>person list</h1>
            <div>
                <input name="name" value={add.name} onChange={onChange} type="text" placeholder='name'/>
                <input name="age" value={add.age} onChange={onChange}  type="text" placeholder='age'/>
                <input name="gender" value={add.gender} onChange={onChange}  type="text" placeholder='gender'/>
                <button onClick={addPerson} type='button'>추가</button>
            </div>
            <ul>
                {person.map((item,_id)=>{
                    return (
                            <li key={_id}>제 이름은 {item.name}
                                <p>나이는 {item.age} 입니다.</p>
                                <span>{item.gender}</span>
                                <button onClick={()=>del(item._id)}>삭제</button>
                            </li>
                    )
                })}
            </ul>
        </div>
    )
}
