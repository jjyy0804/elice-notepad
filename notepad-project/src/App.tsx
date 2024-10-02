import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Notepad from './pages/Notepad';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/notepad' element={<Notepad/>}></Route>
      </Routes>
    </Router>
   
  );
}

export default App;
