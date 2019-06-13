import React, { Component } from 'react';

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

function flipCard() {
    display === "none" ?
    display = "block" :
    display = "none"
};

const shuffledDeck = shuffle(deck);

const cardStyles={ 
    width: "11.111vw", // 1/9th of screen vw for 5 cards and six spaces between and on each end
    float: "left", 
    marginLeft:"11.111vw", // see above
}

const cardBackStyles={ 
    width: "11.111vw", // 1/9th of screen vw for 5 cards and six spaces between and on each end
    float: "left", 
    marginLeft:"11.111vw", // see above
    display: "none"
}

const images = shuffledDeck.map(image => {
    return <div style={{ display: "inline" }} key={image}>
        <img src={require(`./assets/${image}.png`)} alt={image} className="cardResponsive"  style={cardStyles} onClick={flipCard}/>
        <img src={require(`./assets/gray_back.png`)} alt="" className="cardResponsive"  style={cardBackStyles} onClick={flipCard}/>
        </div>
}); 

class Board extends Component {
    
    render(props) {
        return(
            <React.Fragment>
                <div>
                   { images }
                </div>
            </React.Fragment>


        )
    }


}

export default Board;