import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Row, Container, CardDeck, FormControl, Button, InputGroup } from 'react-bootstrap'; 

class Recipe extends Component {

  render() {
    const isLengthy = this.props.ingredients.length;
      return (
        <div>
            The array is{isLengthy ? 'yes' : 'no'}
        </div>
      )
  }
}

// Need ingredient array to pass into find recipe function
function mapStateToProps(state) {
  return {
    // recipes: state.recipes 
    ingredients: state.ingredients
  }
}

export default connect(mapStateToProps)(Recipe);