import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { RecoilRoot } from 'recoil';
import App from './App2';
import { BrowserRouter } from 'react-router-dom';
import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 저장소 사용 범위 지정
    <BrowserRouter>
        <RecoilRoot>
            <App2 />
        </RecoilRoot>
    </BrowserRouter>
);