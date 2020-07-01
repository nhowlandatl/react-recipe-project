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
      }
    render() { 
        // Create each ingredient card
        const recipes = this.props.recipes;
        return (
          <div>
            <CardDeck>
                {recipes.map(recipe => {
                  // Axios button function to get recipe info based on recipe ID
                  // Ask James: why did this function only work after I prefaced with 'this'?
                  return (
                    <Card style={{width: '18rem'}}>
                        {recipe.title}
                        <img src={recipe.image}/>
                        {this.props.recipes.length > 1 &&
                        // Conditionally generate Recipe info button after recipe titles area rendered
                        <Button variant="outline-secondary" onClick={() => this.handleRecipe(recipe.id)}>Get recipe details</Button>
                        }
                    </Card>
                  )
                })}
            </CardDeck> 
            {this.props.recipes.length > 1 &&
              // Generate clear screen button after recipes are generated
              <Button variant="outline-secondary" onClick={this.handleSubmit}>Clear ingredients</Button>
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
    handleRecipe = id => {
      return axios({
        "method":"GET",
        "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key":"40cb3a8377mshdada20219265609p14adc3jsn41c73db521e2",
        "useQueryString":true
        }
        })
        .then((response)=>{
          this.props.getRecipeInfo(response.data)
          console.log(this.props.recipeInfo)
        })
        .catch((error)=>{
          console.log(error)
        })         
    }
  }
  
  function mapStateToProps(state) {
    return {
      recipes: state.recipes,
      ingredients: state.ingredients,
      recipeInfo: state.recipeInfo 
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      clearResults: function() {
        dispatch({type: 'RESET_ITEM'})
      },
      getRecipeInfo: function(recipeInfo) {
        dispatch({type: 'RECIPE_INFO', payload: recipeInfo})
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(RecipeResults);