
function App() {
  return (
    <>
      <Hello name="licat"/>
      <Fruit/>
    </>
  );
}

function Hello(props) {
	const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.
  
  //forEach 로 리스트 작성해보기
  // const numComponentsArray = []
  // num.forEach((i,index)=>{
  //   numComponentsArray.push(<h1 key={index}>안녕, {name} {i}호</h1>)
  // })
	
  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const numComponentsArray = num.map((i)=><h1 key={i}>안녕, {name} {i}호</h1>);

  return(
    <div>
      {numComponentsArray}
    </div>
  )
}
function Fruit() {
  const fruits = ['strawberry', 'fodo', 'melon', 'watermelon']
  
  const fruitsItem = fruits.map((i)=> <p>{i}은 맛있어~</p>)
  return(
    <div>{fruitsItem}</div>
  )
}

export default App;