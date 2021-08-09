//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
//import Hello from './components/Hello'

//import Table from './components/Table'
//import Table from './components/func'
//import Table from './components/prop';
//import Frag from './components/fragmen'
import Demo from './components/refDemo'







class App extends Component{

  render (){
    return (
      <div className = "App"> 
      <div className = 'container'>
        <div className = 'form'>
          <p>Hello</p>
        </div>
      </div>
      <Demo />
      {/*  <Hello /> */}
      {/*  <Table />  
      <Frag /> */}
     {/* <Table /> */}

      </div>

    );//Jumping to matching brackets ctrl+shift+\
  }
}


export default App;