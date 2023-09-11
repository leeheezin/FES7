import ColorText from "./Components/ColorText";
import Hello from "./Components/Hello";
import HElloProps from "./Components/HelloProps";
import Resume from "./Components/Resume";
import Time from "./Components/Time";

function App() {

  return (
    <div>
      <Hello name="gary"/>
      <Time />
      <ColorText color="skyblue"/>
      <ColorText color="yellow"/>
      <ColorText color="green"/>
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
      <HElloProps name="jaehyun" age={15} someFunc={()=>'aswesome!!!'} someJsx={<img src="https://picsum.photos/id/237/200/300"/>} someArr={[1,2,3,4]} someObj={{one:1}}/>
    </div>
  );
}

export default App
