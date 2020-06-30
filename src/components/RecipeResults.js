import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Card, Button, Row, Container, CardDeck } from 'react-bootstrap'; 

class RecipeResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRecipe = this.handleRecipe.bind(this);
      }
    render() { 
        // Create each ingredient card
        const recipes = this.props.recipes;
        return (
            // To do: 
            // Render out more info with each recipe
            // How can I add a "if array is populated, then show a clear results button" below here?
            <div>
                <CardDeck>
                    {recipes.map(recipe => {
                      // Axios button function to get recipe info based on recipe ID
                      this.getRecipeInfo = () => {
                        return axios({
                          "method":"GET",
                          "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipe.id}/information`,
                          "headers":{
                          "content-type":"application/octet-stream",
                          "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                          "x-rapidapi-key":"40cb3a8377mshdada20219265609p14adc3jsn41c73db521e2",
                          "useQueryString":true
                          }
                          })
                          .then((response)=>{
                            console.log(response)
                          })
                          .catch((error)=>{
                            console.log(error)
                          })
                      }
                        return (
                            <Card style={{width: '18rem'}}>
                                {recipe.title}
                                <img src={recipe.image} alt=""/>
                                <Button variant="outline-secondary" onClick={this.handleRecipe}>Click to get recipe info</Button>
                            </Card>
                            // Here I want to make it so when you click get recipe info, a big <div> is generated below the card deck with more info
                        )
                    })}
                </CardDeck> 
                {this.props.recipes.length > 1 &&
                // Generate clear screen button after recipes are generated
                    <Button variant="outline-secondary" onClick={this.handleSubmit}>Clear results</Button>
                }  
            </div>
        )
      }
    // Clear recipe results
    handleSubmit(event) {
        this.props.clearResults(); 
        event.preventDefault();
    }
    // Get recipe info
    handleRecipe(event) {
      this.getRecipeInfo();
      event.preventDefault();
  }
  }
  
  function mapStateToProps(state) {
    return {
      recipes: state.recipes,
      ingredients: state.ingredients
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      clearResults: function() {
        dispatch({type: 'RESET_ITEM'})
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(RecipeResults);