import NewNewsPage from "./NewNewsPage";
import {BrowserRouter, Link, Routes, Route} from "react-router-dom"
import Weather from "./Weather";

function App() {
  
  return (
    <BrowserRouter>
      <Link to="/">G-News</Link>
      <Link to="/weather">날씨</Link>

      <Routes>
        <Route path="" element={<NewNewsPage/>}/>
        <Route path="/weather" element={<Weather/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
