import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';
import { List, Map } from 'immutable'
import { Test } from './pages/Test'
import MyMobx from './pages/mobx';

function App() {

  return (
    <MyMobx />
  );
}

export default App;
