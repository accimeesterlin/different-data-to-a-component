import React, { Component } from 'react';

class Card extends Component {
    constructor() {
        super();
        
        this.state = {};
    }
    

    get_values = (event) => {
        const values = event.target.value;
        this.setState({answer: values});
    }

    render() {

        const seed = this.props.seed;

        return (
            <div>
                <p>Your is {seed.length} characters</p>
                <input type="text" placeholder="Do you remember your seed? " onChange=  {this.get_values}/>
                <button onClick = {() => this.props.check_answer(this.state.answer)}>Check</button>
            </div>
        );
    }
}

export default Card;