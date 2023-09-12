import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReactFragment from './ReactFragment';
import ListRender from './ListRender';
import App2 from './App2';
import App3 from './App3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App3/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals