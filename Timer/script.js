const timerHrs = document.querySelector('.timer-hrs span')
const timerMin = document.querySelector('.timer-min span')
const timerSec = document.querySelector('.timer-sec span')
const startPause = document.querySelector('.start-pause')
const startPauseImg = document.querySelector('.start-pause img')
const reset = document.querySelector('.reset')
const resetImg = document.querySelector('.reset img')

let hrs = 0;
let min = 0;
let sec = 0;
let interval;
timerHrs.addEventListener('click', ()=>{
    hrs+=1;
    timerHrs.textContent = hrs.toString()
})
timerMin.addEventListener('click', ()=>{
    min+=1;
    timerMin.textContent = min.toString()
})
timerSec.addEventListener('click', ()=>{
    sec+=10;
    timerSec.textContent = sec.toString()
})
startPause.addEventListener('click',()=>{
    startPauseImg.src = './images/pause.png';
    if(!interval){
        interval = setInterval(()=>{
            if(sec>0){
                sec-=1;
            } else if(min> 0){
                min-=1;
                sec=59;
            } else if (hrs > 0) {
                hrs -= 1;
                min = 59;
                sec = 59;
            }
            timerHrs.textContent = hrs.toString()
            timerMin.textContent = min.toString()
            timerSec.textContent = sec.toString()
            
            if(hrs===0 && min===0 && sec===0) {
                clearInterval(interval)
                interval=null
                timerHrs.textContent = '00'
                timerMin.textContent = '00'
                timerSec.textContent = '00'
                startPauseImg.src = './images/start-disabled.png';
                resetImg.src = './images/reset-disabled.png'
                alert('Finish')
            }
        },1000)
    } else {
        clearInterval(interval)
        interval=null
    }
})
reset.addEventListener('click',()=>{
    timerHrs.textContent = '00'
    timerMin.textContent = '00'
    timerSec.textContent = '00'
})