import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import rootReducer from "./modules";
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const container = document.getElementById("root");
const root = createRoot(container);
const store = createStore(rootReducer) //스토어만들기
root.render(
    //모든 컴포넌트 리덕스 store에 접근할수 있다.
    <Provider store={store}>
        <App3 />
    </Provider>
);
