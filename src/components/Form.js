import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { FormControl, Button, InputGroup } from 'react-bootstrap';
// I think i need to refactor this. I think im using a mix of react state and redux


// Do I need to have an export in front of this?
class Form extends Component {

  constructor(props) {
    super(props);
    // Do I need this stuff below? I need to take user form input
    this.state = {
      value: '',
      recipe: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Should all this be in the reducer in the index.js file? Where should this be?
  handleChange(event) {    
    this.setState({value: event.target.value});  
  }

  handleSubmit(event) {
    this.getRecipe();
    // alert('An ingredient was submitted: ' + this.state.value); 
    event.preventDefault();
  }
    // does this logic go here or in index.js??
    getRecipe = () => {
        return axios({
            "method":"GET",
            "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key":"40cb3a8377mshdada20219265609p14adc3jsn41c73db521e2",
            "useQueryString":true
            },"params":{
            "number":"5",
            "ranking":"1",
            "ignorePantry":"false",
            "ingredients":"apples%2Cflour%2Csugar"
            }
            })
            .then((response)=>{
              console.log(response)
              // This dispatches the action to redux
              this.props.getRecipe(response.data);
            })
            .catch((error)=>{
              console.log(error)
            })
    }
    
    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <Button variant="outline-secondary" onClick={this.handleSubmit}>Click to add ingredient</Button>
                  </InputGroup.Prepend>
                  <FormControl aria-describedby="basic-addon1" type="text" value={this.state.value} placeholder="Enter an ingredient" onChange={this.handleChange}/> 
                </InputGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    value: state.value,
    recipe: state.recipe
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // Need to pass in a parameter, any name, such as recipes (this is the array of recipes)
    // It's passed in as a payload that contains all the data
    getRecipe: function(recipes) {
      dispatch({type: 'GET_RECIPE', payload: recipes})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);