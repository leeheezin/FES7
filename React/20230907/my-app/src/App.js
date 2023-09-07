import './App.css';

function App() {
  const name = '라이켓'
  function 함수(){
    return '함수'
  }
  const someStyle = {color:'red'}
  const time = new Date()
  const year = time.getFullYear()
  const month = time.getMonth()+1
  const date = time.getDate()
  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()
  return (
    <div>
      <h1 className="hi">안녕 라이켓 {함수() ? '함수': 'JSX'}!</h1>
      <h1 className="newClass">안녕 라이켓</h1>
      <input type="text" style={{someStyle}}/>
      <div style={someStyle}>년: {year}</div>
      <div>월/일: {month}/{date}</div>
      <div>시간: {hour}시 {minute}분 {second}초</div>
    </div>
  );
}

export default App;
