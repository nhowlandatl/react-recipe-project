import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormControl, Button, InputGroup } from 'react-bootstrap';

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

  // This should change to use the Redux store to save the ingredients as an array
  // Ingredient list can map to redux store
  handleChange(event) {    
    this.setState({value: event.target.value});  
  }
// Kick off add ingredient function on submit
  handleSubmit(event) {
    this.addIngredient(); 
    // this.getRecipe(); 
    event.preventDefault();
  }
  // Add ingredient function
  addIngredient = () => {
    // Here I want to add the local react state value (what was just typed) to the redux store as an ingredient
    this.props.addIngredient(this.state.value);
  }
    // getRecipe = () => {
    //     return axios({
    //         "method":"GET",
    //         "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
    //         "headers":{
    //         "content-type":"application/octet-stream",
    //         "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    //         "x-rapidapi-key":"40cb3a8377mshdada20219265609p14adc3jsn41c73db521e2",
    //         "useQueryString":true
    //         },"params":{
    //         "number":"5",
    //         "ranking":"1",
    //         "ignorePantry":"false",
    //         "ingredients":"apples%2Cflour%2Csugar"
    //         }
    //         })
    //         .then((response)=>{
    //           console.log(response)
    //           // This dispatches the action to redux
    //           // This needs to eventually change to an add-ingredient function, pushing them to array
    //           this.props.getRecipe(response.data);
    //         })
    //         .catch((error)=>{
    //           console.log(error)
    //         })
    // }
    
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