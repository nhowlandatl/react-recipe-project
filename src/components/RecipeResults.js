import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Row, Container, CardDeck } from 'react-bootstrap'; 

class RecipeResults extends Component {
    render() { 
        // Create each ingredient card
        const recipes = this.props.recipes;
        return (
            // To do: 
            // Render out more info with each recipe
            <div>
                {recipes.map(recipe => {
                    return (
                        
                            <CardDeck>
                                <Card style={{width: '18rem'}}>
                                    {recipe.title}
                                    <img src={recipe.image} alt=""/>
                                </Card>
                            </CardDeck>
                        
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