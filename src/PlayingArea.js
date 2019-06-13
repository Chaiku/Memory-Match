import React from 'react';
import './playingArea.css';
import Board from './Board';

class PlayingArea extends React.Component {
  flip = (clicked_id) => {
    alert(clicked_id);
    document.getElementById(`${clicked_id}`).toggleClass('flipped');
};
  render() {
    return (
      <div className="playArea">
        <header className="gameHead">
          <h1><u>Memory Match</u></h1>
          <p>Click the cards to find their matching counterpart!</p>
        </header>
        <Board handleClick={this.flip} />
      </div>
    );
  }
}

export default PlayingArea;
