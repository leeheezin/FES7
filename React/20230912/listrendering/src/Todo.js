import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function Todo() {
  const [todos, setTodos] = useState([]); // todos 배열로 관리

    const addId = useRef(1);

    const todo = () => {
        const newTodo = {
        id: addId.current,
        name: add.name,
        };

        setTodos([...todos, newTodo]); //기존 todos 배열에 새로운 todo 추가
        addId.current += 1;
        //입력필드 초기화
        setAdd({
        name: '',
        });
    };

    const [add, setAdd] = useState({
        name: '',
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setAdd({
        ...add,
        [name]: value,
        });
    };

    return (
        <div>
        <h1>todo</h1>
        <input name="name" value={add.name} onChange={onChange} type="text" />
        <button onClick={todo}>추가</button>
        

        {todos.map((todo)=>(
            <li key={todo.id}>{todo.name}</li>
        ))}
        
	</div>
	);
}
