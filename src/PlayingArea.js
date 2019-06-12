import React from 'react';
import './playingArea.css';

class PlayingArea extends React.Component {
  render() {
    return (
      <div className="playArea">
        <header className="gameHead">
          <h1><u>Memory Match</u></h1>
          <p>Click the cards to find their matching counterpart!</p>
        </header>
      </div>
    );
  }
}

export default PlayingArea;
