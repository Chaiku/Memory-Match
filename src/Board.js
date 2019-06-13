import React, { Component } from 'react';
import Card from './Card';
import './board.css';

const deck =  [
    "aceS", "aceS2", "kingD", "kingD2", "queenH", "queenH2", "jackC", "jackC2", "tenS", "tenS2", "nineD", "nineD2", "eightH", "eightH2", "sevenC", "sevenC2", "sixS", "sixS2", "fiveD", "fiveD2"
];
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
return array;
};


class Board extends Component {

    componentDidMount(){
        shuffle(deck);
    };
    
    renderCard(i){
            return <Card value={i} className={i} />
        }

        render(){
           return(
            <div>
                <div className="boardRow">
                    {this.renderCard(`./assets/${deck[0]}.png`)}
                    {this.renderCard(`./assets/${deck[1]}.png`)}
                    {this.renderCard(deck[2])}
                    {this.renderCard(deck[3])}
                </div>            
                <div className="boardRow">
                    {this.renderCard(deck[4])}
                    {this.renderCard(deck[5])}
                    {this.renderCard(deck[6])}
                    {this.renderCard(deck[7])}
                </div>            
                <div className="boardRow">
                    {this.renderCard(deck[8])}
                    {this.renderCard(deck[9])}
                    {this.renderCard(deck[10])}
                    {this.renderCard(deck[11])}
                </div>
            </div>

        )
    }
};

export default Board;