import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React,{useState} from 'react';
import Nav from './Navbar';
import Body from './Body';
import Footer from './Footer';
import {BrowserRouter as Router, Route,Routes, Link} from "react-router-dom";
import Home from './Home';
import Checkout from './checkout'

function App() {
 
  return (
    <div className="App">
     
        
       
        <Router>
        <Nav/>
      <Routes>
     
        <Route exact path='/' element={<Home/>} />
        <Route exact  path='/menu' element={<Body/>} />
       <Route exact path='/checkout' element={<Checkout/>}/>
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
