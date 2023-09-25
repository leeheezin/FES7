
import useMouseLocation from "./Hook/useMouseLodation";
import useScroll from "./Hook/useScroll";
import InputComponent from "./components/inputComponent";
import SomethingComponent from "./components/somethingComponent";

function App() {

  const mouseLocation = useMouseLocation();
  const isBottom = useScroll();


  return (
    <div style={{ height: 3000 }}>
      {/* <div style={{ height: 100, width: 100, backgroundColor: mouseLocation.y > 100 ? "royalblue" : "hotpink" }}></div> */}
      <InputComponent />
      <SomethingComponent />
    </div>
  );
}
export default App;