import React from 'react';
import './board.css';

class Board extends React.Component {
    renderCard() {
        return <Card value={i} />;
    }
    render() {
        return (
            <div className="board">
                <p>some cards will go here</p>
            </div>
        )
    }
}