import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Listkeys from './components/Listkeys'

const numbers = [1,2,3,5,6]

ReactDOM.render(
 <div><Listkeys numbers = {numbers} />
 <App />
 </div>,
    
    
  
  document.getElementById('root')
);


