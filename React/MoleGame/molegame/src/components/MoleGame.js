import React, { useState, useEffect } from 'react';
import Mole from './Mole';
import moleImg from '../images/mole.png';
import '../index.css';

export default function MoleGame() {
  const [moles, setMoles] = useState(Array.from({ length: 5 * 5 }, () => false));
    const [isGameRunning, setIsGameRunning] = useState(false);

    useEffect(() => {
        let moleInterval;

        if (isGameRunning) {
        // 게임이 시작된 경우, 1초 간격으로 랜덤한 두더지를 나타내도록 설정
        moleInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * moles.length);
            const newMoles = [...moles];
            newMoles[randomIndex] = true;
            setMoles(newMoles);

            // 1초 후에 두더지를 다시 숨김
            setTimeout(() => {
            newMoles[randomIndex] = false;
            setMoles(newMoles);
            }, 1000);
        }, 1000);
        }

        // 컴포넌트 언마운트 시 clearInterval을 통해 간격을 해제
        return () => {
        clearInterval(moleInterval);
        };
    }, [isGameRunning, moles]);

    const startGame = () => {
        setIsGameRunning(true);
    };
    const stopGame = () => {
        setIsGameRunning(false);
    };
    const endGame = () => {
        setIsGameRunning(false);
        setMoles(Array.from({ length: 5 * 5 }, () => false))
    }
    return (
        <div>
        <h1>두더지 게임</h1>
        <div className="startEnd">
            <button onClick={startGame} type="button" disabled={isGameRunning}>
            start
            </button>
            <button onClick={stopGame} type="button" disabled={!isGameRunning}>
            stop
            </button>
            <button onClick={endGame} type="button">
            end
            </button>
        </div>
        <ol>
            {moles.map((show, index) => (
            <li key={index}>
                <Mole show={show} />
            </li>
            ))}
        </ol>
        </div>
    );
}