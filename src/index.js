import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const personList = [
  { personName: 'Johnny Cash', email: 'cookies@netzero.net', job: 'backend' },
  { personName: 'Dwayne Johnson', email: 'brownies@hotmail.com', job: 'front-end' },
  { personName: 'Abba Dabba', email: 'Roman@gmail.com', job: 'full-stack' },
]

ReactDOM.render(
  <React.StrictMode>
    <App people={personList}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
