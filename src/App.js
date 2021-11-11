import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css';
import Arkanoid from './games/arkanoid';
import Saper from './games/saper';


function App() {
  return (
    <div className="App">
      <Router>
        <ul className='list'>
          <li>
            <Link className='link' to="/">Home</Link>
          </li>
          <li>
            <Link className='link' to="/arkanoid">Arkanoid</Link>
          </li>
          <li>
            <Link className='link' to="/saper">Saper</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/arkanoid" element={<Arkanoid />} />
          <Route path="/saper" element={<Saper />} />
        </Routes>
    </Router>
    </div>
  );
}

function Home() {
  return (
    <div className='home'>
      <h1>Games catalogue</h1>
      <h2>Catalogue of games made with React.</h2>
      <p>The goal of the project is to create a few classic games coded with React and Vue. Backend is ment to be provided with MERN technology.</p>
      <div>
        <h2>For now only 2 possitions:</h2>
        <ul>
          <li><h4>Arkanoid (canvas) </h4></li>
          <li><h4>Saper</h4></li>
        </ul>
      </div>
      <div>
        <h2>Goals: </h2>
        <ul>
          <li>"high score" implemented in backend.</li>
          <li>inputs to provide player name, as well as game detalis - like difficulty</li>
          <li>More games: tetris, space invaders etc..</li>
          <li>version @mobile</li>
        </ul>
      </div>
      
    </div>
  );
}

export default App;
