import React, { Component } from 'react';
import CardBack from './assets/gray_back.png';

class Card extends Component {
    render(){
        return(
                <div>
                    <img src={CardBack} alt="" style={{ height: "100px" }}/>
                    <img src={this.props.value} alt=""  />
                </div>
        )
    }
}

export default Card;