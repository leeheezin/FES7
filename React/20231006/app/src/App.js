import { useState } from "react";
import JoinPage from "./components/JoinPage";
import LoginPage from "./components/LoginPage";
import axios from "axios"; // Axios를 임포트

function App() {
  // 로그인기능
  const [page, setPage] = useState(true)
  const [info, setInfo] = useState('')
  const handlePage = () => {
    setPage(prevPage=>{
      return !prevPage
    })
  }
  const getMyinfo = async () => {
    const token = localStorage.getItem('token')
    console.log(token)
    
    try {
      const response = await axios.get('https://api.mandarin.weniv.co.kr/user/myinfo', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      console.log(response.data); // 응답 데이터 출력
      setInfo(JSON.stringify(response.data));
    } catch (error) {
      console.error("오류 발생:", error);
    }
  }
  
  return (
    <div>
      <button type="button" onClick={getMyinfo}>내 정보 불러오기</button>
      {info}
      {page ? <LoginPage handlePage={handlePage}/> : <JoinPage handlePage={handlePage}/>}
    </div>
  );
}

export default App;
