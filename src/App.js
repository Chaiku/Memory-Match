import React from 'react';
import './App.css';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <header className="gameHead">
        <h1><u>Memory Match</u></h1>
        <p>Click the cards to find their matching counterpart!</p>
        <Board />
      </header>
    </div>
  );
}

export default App;
