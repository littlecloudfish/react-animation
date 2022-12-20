import React from 'react';
import ReactDom from 'react-dom/client';
import './';
import Router from './router/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';


const App = ()=>(
  <div className="hey">
    <Router/>
  </div>
)
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>)
