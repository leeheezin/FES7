import React from "react";
import styled , {css} from "styled-components"

const BorderNone = css` border: none;`;

const BorderRadius = css` border-radius: 8px;`;

const BoxShadow = css` box-shadow: 0 0 5px #33333333;`;

const Btn = styled.button`
    background-color: blue;
    color: ${(props)=>props.name};
`
// Btn 스타일드컴포넌트를 확장! styled(확장하고싶은컴포넌트)
const Btn2 = styled(Btn)`
    ${BorderNone}
    ${BorderRadius}
    ${BoxShadow}
    border-radius: 5px;
    border: none;
`
const Btn3 = styled(Btn2)`
    background-color: green;
    color: ${(props)=>props.name};
`


const App = () => {
    return (
        <>
        <Btn name="white">버튼1</Btn>
        <Btn2>버튼2</Btn2>
        <Btn3 name="white">버튼3</Btn3>
        </>
    );
};

export default App;