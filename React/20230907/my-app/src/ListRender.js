import './ListRender.css'



// function ListItem({data}) {
//     return <li className={data.visited?"visited":''}>{data.area}</li>
// }
function ListRender() {
    let list = [
        { no: 1, area: "대전", visited: false },
        { no: 2, area: "부산", visited: true },
        { no: 3, area: "목포", visited: false },
        { no: 4, area: "제주도", visited: false },
    ];
    const fruit = [
        { no: 1, area: "사과", visited: false },
        { no: 2, area: "바나나", visited: true },
        { no: 3, area: "키위", visited: false },
        { no: 4, area: "포도", visited: false },
    ];
    const areas = list.map((item,index)=>{
        return(
            <li key={index} className={item.visited?"visited":''}>{item.area}</li>
        )
    })
    const fruits = fruit.map((i,index)=>{
        console.log(i)
        return(
            <li key={index}>{i.area}</li>
        )
    })
    
    return(
        <ul className='list-area'>
            {/* <ListItem data={list[0]}/>
            <ListItem data={list[1]}/>
            <ListItem data={list[2]}/>
            <ListItem data={list[3]}/> */}
            {areas}
            {fruits}
        </ul>
    )
}
export default ListRender