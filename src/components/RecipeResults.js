import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Row, Container, CardDeck } from 'react-bootstrap'; 

class RecipeResults extends Component {
    render() { 
        // console.log(this.props.ingredients) 
        // Create each ingredient card
        const recipes = this.props.recipes;
        return (
            // To do: 
            // Render out more info with each recipe
            <div>
                {recipes.map(recipe => {
                    return (
                        <div>
                            {recipe.title}
                        </div>
                    )
                })}
            </div>
        )
      }
  }

  function mapStateToProps(state) {
    return {
      recipes: state.recipes 
    }
  }
  
  export default connect(mapStateToProps)(RecipeResults);