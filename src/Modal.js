import React, { Component } from 'react';

class Modal extends Component {
    render() {
        const user = this.props.user;

        return (
            <div>
                <h1>Hello world, I am the Modal</h1>
                <p>Firstname: { user.name }</p>
                <p>Age: { user.age }</p>
                <p>Position: { user.position }</p>
                <p>Card: { user.card }</p>
            </div>
        );
    }
}



export default Modal;