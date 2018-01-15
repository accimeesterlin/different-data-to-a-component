import React, { Component } from 'react';
import { Button, Modal, Input } from 'semantic-ui-react'
import Info from './Modal';
import Card from './Card';
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
        card: 1,
        seed:''
      },
      open: false,
      count:0
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

  show = size => (event) => {
    event.preventDefault();
    let count = this.state.count;

    this.setState({ 
      size, 
      open: true,
      count: count + 1 
    })
  };
  close = () => this.setState({ open: false })



  get_values = (event) => {
    const name = event.target.name;
    const values = event.target.value;
    this.setState({ [name]: values });
  };


  check_answer = (val) => {
    console.log('Values: ', val);
    
    if(val === this.state.seed){
      console.log("You got it!!!");
    } else{
      this.setState({count: this.state.count - 1});
    }
  };

  render() {
    const { open, size } = this.state

    return (
      <div>
        <h1>Hello World</h1>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>
            Delete Your Account
          </Modal.Header>
          <Modal.Content>

            {
              this.state.count > 2 ? <Card seed = {this.state.seed} check_answer = {this.check_answer}/> : <Info user = {this.state.current_data} seed = {this.state.seed}/>
            }
            

            
          </Modal.Content>
          <Modal.Actions>
            <Button negative>
              No
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' />
          </Modal.Actions>
        </Modal>

        

        
        <button onClick={() => this.get_data("first_button")}>First Name</button>
        <button onClick={() => this.get_data("second_button")}>Second Name</button>
        <button onClick={() => this.get_data("third_button")}>Third Name</button>
       

        <form>
          <Input placeholder = "Add your seed" name ="seed" type = "text" onChange = {this.get_values}/>
          <button onClick = {this.show('small')}> Submit </button> 
        </form>


        
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
























