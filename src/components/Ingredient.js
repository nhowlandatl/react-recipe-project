import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Container, CardDeck } from 'react-bootstrap'; 

class Ingredient extends Component {
    render() { 
        // Create each ingredient card
        let ingredientCard = this.props.ingredients.map(ingredient => {
            return (
                <Card style={{width: '18rem'}}>
                {ingredient}
                </Card>
            )
        })
      // Display all the ingredients inside a card deck
        return (
                <div>
                    <Container>
                        <CardDeck>
                            {ingredientCard}
                        </CardDeck>
                    </Container>
                </div>
            )
      }
  }

  function mapStateToProps(state) {
    return {
      ingredients: state.ingredients 
    }
  }
  
  export default connect(mapStateToProps)(Ingredient);