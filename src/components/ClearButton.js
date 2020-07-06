import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap'; 

export class ClearButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearRecipes = this.clearRecipes.bind(this);
      }
    render() {
        return (
            <div>
                {(this.props.recipes.length > 1 || this.props.ingredients.length > 0) ?
              // Generate clear screen button after ingredients are generated
              <Button variant="outline-secondary" onClick={this.handleSubmit}>Clear all ingredients</Button> : null
            }  
            {(this.props.recipes.length > 1 || this.props.recipes.length == 0) ?
              // Generate clear screen button after recipes are generated
              <Button variant="outline-secondary" onClick={this.clearRecipes}>Clear all recipes</Button> : null
            }
            </div>
        )
    }
     // Clear recipe results
     handleSubmit(event) {
        this.props.clearResults(); 
        event.preventDefault();
      }
      clearRecipes(event) {
        this.props.clearRecipes(); 
        event.preventDefault();
      }
}

function mapStateToProps(state) {
    return {
      recipes: state.recipes,
      ingredients: state.ingredients,
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      clearResults: function() {
        dispatch({type: 'RESET_ITEM'})
      },
      clearRecipes: function() {
        dispatch({type: 'RESET_RECIPES'})
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ClearButton)