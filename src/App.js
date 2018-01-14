import React, { Component } from 'react';
import Modal from './Modal';
import user from './user';

class App extends Component {
  constructor() {
    super();

    this.state = {
      current_data: {
        id: '',
        name: "Esterling",
        age: 5,
        position: "Full Stack Position",
        card: 1
      },
    };
  }

  componentDidMount() {
    // TODO

    this.setState(user);
  }

  componentWillMount() {
    // TODO
    // console.log("Component will mount");
  }

  get_data = (val) => {
    const current_data = this.state[val]; // new values
    this.setState({ current_data });
  };

  render() {



    return (
      <div>
        <h1>Hello World</h1>

        <Modal user={this.state.current_data} />
        <button onClick={() => this.get_data("first_button")}>First Name</button>
        <button onClick={() => this.get_data("second_button")}>Second Name</button>
        <button onClick={() => this.get_data("third_button")}>Third Name</button>
      </div>
    );
  }
}

export default App;






























// LifeCycle
  // componentDidMount()
  // componentWillMount()
  // componentWillReceiveProps()
  // componentWillUpdate()
  // componentDidUpdate()
// Components
// State
// Props
























