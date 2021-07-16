import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style.css"


ReactDOM.render(
  <React.StrictMode>
  <div className="main">
    <App />
    <App />
    <App />
    <App />
  </div>
  </React.StrictMode>,
  document.getElementById('root')
);

