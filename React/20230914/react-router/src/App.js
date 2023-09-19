import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">home </Link>
      <Link to="/one">one </Link>
      <Link to="/two">two </Link>
      <Link to="/three">three</Link>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='loopy'/>}/>
        <Route path="/two" element={<Two two = 'aaa'/>}/>
        <Route path="/three" element={<Three />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One({name}){
  return <h1>{name} : hello world1</h1>
}

function Two({two}){
  return <h1>{two} hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

export default App;