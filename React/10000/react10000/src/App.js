import { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Modal from "./components/modal/Modal";


function App() {
  const [modal, setModal] = useState(false)

  return (
    <div id="app">
      <Header/>
      <Main setModal={setModal}/>
      <Footer/>
      {modal && <Modal setModal={setModal}/>}
    </div>
  );
}
export default App;