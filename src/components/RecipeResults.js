import React, { Component } from 'react';
import { connect } from 'react-redux';
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
            // To do: 
            // Render out more info with each recipe
            // How can I add a "if array is populated, then show a clear results button" below here?
            <div>
                <CardDeck>
                    {recipes.map(recipe => {
                        return (
                            <Card style={{width: '18rem'}}>
                                {recipe.title}
                                <img src={recipe.image} alt=""/>
                            </Card>
                        )
                    })}
                </CardDeck>
                {this.props.recipes.length > 1 &&
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