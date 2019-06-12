import React, { Component } from 'react';
import Ace1 from './assets/AS.png';
import King1 from './assets/KD.png';
import Queen1 from './assets/QH.png';
import Jack1 from './assets/JC.png';
import Ten1 from './assets/10S.png';
import Nine1 from './assets/9D.png';
import Eight1 from './assets/8H.png';
import Seven1 from './assets/7C.png';
import Six1 from './assets/6S.png';
import Five1 from './assets/5D.png';
import Ace2 from './assets/AS.png';
import King2 from './assets/KD.png';
import Queen2 from './assets/QH.png';
import Jack2 from './assets/JC.png';
import Ten2 from './assets/10S.png';
import Nine2 from './assets/9D.png';
import Eight2 from './assets/8H.png';
import Seven2 from './assets/7C.png';
import Six2 from './assets/6S.png';
import Five2 from './assets/5D.png';
// add the following for decks larger than 20
// import Four1 from './assets/4H.png';
// import Three1 from './assets/3C.png';
// import Two1 from './assets/2S.png';
// import Four2 from './assets/4H.png';
// import Three2 from './assets/3C.png';
// import Two2 from './assets/2S.png';
import CardBack from './assets/gray_back.png';



class Board extends Component {
    state = {
        deck: [
            {King1}, {King2}, {Ace1}, {Ace2}, {Queen1}, {Queen2}, {Jack1}, {Jack2}, {Ten1}, {Ten2}, {Nine1}, {Nine2}, {Eight1}, {Eight2}, {Seven1}, {Seven2}, {Six1}, {Six2}, {Five1}, {Five2}
        ],
    };

    shuffleArray = (array) => {
        const shuffledDeck = array;
        let i = 0;
        for (i = shuffledDeck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            console.log(shuffledDeck);
        };
        return shuffledDeck;
    };

    componentDidMount() {
        this.shuffleArray(this.state.deck);
    }

    render(props) {
        return(
            <React.Fragment>
                <div>
                    {this.state.deck.map(d => (
                        <span>
                            <img src={d} className="card" style={this.props.cardStyles} key={d}/>
                            <img src={CardBack} className="cardBack" style={{ height: "90px"}}/>
                        </span>
                    ))};
                </div>
            </React.Fragment>


        )
    }


}

export default Board;