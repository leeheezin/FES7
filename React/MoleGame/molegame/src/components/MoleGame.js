import React, { useState, useEffect } from 'react';
import Mole from './Mole';
import moleImg from '../images/mole.png'
import '../index.css';

export default function MoleGame() {
  const [moles, setMoles] = useState(Array.from({ length: 5 * 5 }, () => false));
    const [isGameRunning, setIsGameRunning] = useState(false);
    //두더지 클릭시 점수
    const [score, setScore] = useState(0)
    const moleClickScore = () => {
        setScore(score+1)
    }
    //타이머 60초
    const [time, setTime] = useState(30)

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
            setTime((prevTime)=>{
                if(prevTime === 1){
                    alert(`짝짝짝! 점수는 ${score} 입니다.`)
                    setIsGameRunning(false)
                    setScore(0)
                    setTime(30)
                }
                return prevTime -1
            })
            }, 500);
        }, 500);
        }
        // 컴포넌트 언마운트 시 clearInterval을 통해 간격을 해제
        return () => {
        clearInterval(moleInterval);
        };
    }, [isGameRunning, moles, score]);

    const startGame = () => {
        setIsGameRunning(true);
    };
    const stopGame = () => {
        setIsGameRunning(false);
    };
    const endGame = () => {
        setIsGameRunning(false);
        setMoles(Array.from({ length: 5 * 5 }, () => false))
        setScore(0)
        setTime(30)
    }
    return (
        <div className='wrap'>
            <div className='moleTit'>
                <h1>
                    추억의<img src={moleImg} alt='logo'/><br/>
                    두더지 게임
                </h1>
                <div className="startEnd">
                    <button onClick={startGame} type="button" disabled={isGameRunning}>
                    Start
                    </button>
                    <button onClick={stopGame} type="button" disabled={!isGameRunning}>
                    Stop
                    </button>
                    <button onClick={endGame} type="button">
                    End
                    </button>
                </div>
                <div className="moleScoreTime">
                    <button type='button'>Score : {score}</button>
                    <button type='button'>Timer : {time}</button>
                </div>
            </div>
            <div className='moleList'>
                <ol>
                    {moles.map((show, index) => (
                    <li key={index} onClick={()=> show && moleClickScore()}>
                        <Mole show={show} />
                    </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
