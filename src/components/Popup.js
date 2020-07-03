import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          show: true
      };
      this.handleClose = this.handleClose.bind(this);
  }
  
  // Close the greeting popup
  handleClose (){
      this.setState({ show: false });
  };
  
  // Show greeting popup when page loads
  componentDidMount() {
    this.setState({ show: true });
  }
  
  render() {
      return(
        <div>



          <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Welcome to the Pantry Assistant!</Modal.Title>
              </Modal.Header>
              <Modal.Body>This app is designed to help you maximize the use of your pantry and spend less money eating out. You can input ingredients and find suitable recipes. You can also select whether recipes use any or all of the ingredients you've input.</Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
          </Modal>
          
        </div>
      );
  }
}

export default(App);