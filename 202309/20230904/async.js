//async & await 연습

//1. async
function fetchUser() {
    //do network request in 10 secs..
    
    return new Promise((resolve, reject)=>{ //이 둘을 호출하지않으면 펜딩상태
        resolve ('eli') //return -> resolve로 바꾸면 fulfilled 결과 
    }) //유저데이터 준비되면 콜백함수 불러준다
}

//위 코드에서 아래코드로 바꿔 함수앞에 async붙이면 자동으로 함수블록 promise로 변환

async function fetchUser() {
    //do network request in 10 secs..
        return ('eli') 
}

const user = fetchUser()
user.then(console.log)
console.log(user)

//2. await
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}
async function getApple(){
    await delay(1000)
    return '🍎'
}
async function getBanana(){
    await delay(1000)
    return '🍌'
}
async function pickFruit(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple}+${banana}`

}

pickFruit().then(console.log)

//3. useful Promise APIs

//Promise.all 모든 Promise들이 병렬적으로 받을때까지 모아줌
function pickAllFruits() {
    return Promise.all([getApple(),getBanana()]) 
    .then(fruits=>fruits.join('+'))
}
pickAllFruits().then(console.log)


//Promise.race 가장 먼저 값을 리턴하는 함수 전달
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()])
}
pickOnlyOne().then(console.log)