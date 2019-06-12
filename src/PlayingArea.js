import React from 'react';
import './playingArea.css';
import Board from './Board';

class PlayingArea extends React.Component {
  render() {
    return (
      <div className="playArea">
        <header className="gameHead">
          <h1><u>Memory Match</u></h1>
          <p>Click the cards to find their matching counterpart!</p>
        </header>
        <Board />
      </div>
    );
  }
}

export default PlayingArea;
