import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button } from 'react-bootstrap'; 

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
// Use relative and absolute positioning to get this lined up correctly below the recipe cards
// Conditional statement: if recipe array is populated, generate a submit recipe button
  render() {
    if (this.props.ingredients.length > 0 ) {
      return (
        <div>
          <Button variant="outline-secondary" onClick={this.handleSubmit}>Click to find recipes</Button>
        </div>
      )
    }
    else return null
  }
  

  // Kick off the find recipe function on submit
  handleSubmit(event) {
    // convert the ingredient array into a string for Axios get request
    this.getRecipe(); 
    // this.getRecipe(); 
    event.preventDefault();
  }
  
  // Get recipe function
  // To do: pass in the ingredients below
    getRecipe = () => {
      let recipeString = this.props.ingredients.join('%');
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
        "ingredients": `${recipeString}`
        }
        })
        .then((response)=>{
          console.log(response)
          // This dispatches the action to redux
          // This needs to eventually change to an add-ingredient function, pushing them to array
          this.props.getRecipe(response.data);
          console.log(this.props.recipes)
        })
        .catch((error)=>{
          console.log(error)
        })
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

// Need ingredient array to pass into find recipe function
function mapStateToProps(state) {
  return {
    // recipes: state.recipes 
    ingredients: state.ingredients,
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);