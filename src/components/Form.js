import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormControl, Button, InputGroup } from 'react-bootstrap'; 
import { MDBInputGroup, MDBInput, MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

class Form extends Component {
// Need to refactor to stop using the local state
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Ingredient list maps to Redux store
  handleChange(event) {    
    this.setState({value: event.target.value});  
  }
// Kick off add ingredient function on submit
  handleSubmit(event) {
    event.preventDefault();
    event.target.className += " was-validated";
    this.addIngredient(); 
  }
  // Add ingredient function
  addIngredient = () => {
    if (this.state.value.length == 0) {
      console.log('alert')
    } else
    // Here I want to add the local react state value (what was just typed) to the redux store as an ingredient
    this.props.addIngredient(this.state.value);
  }
    render() {
      return (
        // Styled attempt somewhat working
        <MDBContainer>
          <form
            className="needs-validation"
            onSubmit={this.handleSubmit}
            noValidate
            >
              <MDBInput
              material
              value={this.state.value}
              onChange={this.handleChange}
              type="text"
              id="defaultFormRegisterPasswordEx4"
              className="form-control"
              name="ingredient"
              placeholder="Your ingredient"
              required
              >
              <MDBBtn color="secondary" className="m-1 px-3 py-2" type="submit">Click to add ingredient</MDBBtn>
               <div className="invalid-tooltip">
                Please enter an ingredient.
                </div>
              </MDBInput>
          </form>
        </MDBContainer>

            // Initial working 
            // <div>
            //     <InputGroup className="mb-3">
            //       <InputGroup.Prepend>
            //         <Button variant="outline-secondary" onClick={this.handleSubmit}>Click to add ingredient</Button>
            //       </InputGroup.Prepend>
            //       <FormControl aria-describedby="basic-addon1" type="text" value={this.state.value} placeholder="Enter an ingredient" onChange={this.handleChange}/> 
            //     </InputGroup>
            // </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    ingredients: state.ingredients
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // Need to pass in a parameter, any name, such as recipes (this is the array of recipes)
    // It's passed in as a payload that contains all the data
    getRecipe: function(recipes) {
      dispatch({type: 'GET_RECIPE', payload: recipes})
    },
    addIngredient: function(ingredient) {
      dispatch({type: 'ADD_INGREDIENT', payload: ingredient})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);