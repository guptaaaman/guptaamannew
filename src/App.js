import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useState } from 'react';
import Nav from './Navbar';
import Body from './Body';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import Checkout from './checkout'
import Loginform from './Login';
import cartReducer from './Reducer';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { applyMiddleWare, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware } from 'redux';
import Cart from './Cart';

function App() {
  const store = createStore(cartReducer,
    compose(
      applyMiddleware(
        thunkMiddleware,
      )
    ));
  return (
    <div className="App">

      <Provider store={store}>

        <Router>
          <Nav />
          <Routes>
            <Route exact path='/' element={<Loginform />} />
            <Route exact path='/menu' element={<Body />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/checkout' element={<Checkout />} />
          </Routes>

        </Router>
      </Provider>
    </div>
  );
}

export default App;
