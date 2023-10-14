import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import {createStore} from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";

const container = document.getElementById("root");
const root = createRoot(container);
const store = createStore(rootReducer)
// provider로 감싸서 모든 컴포넌트가 스토어 접근할수 있다
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
