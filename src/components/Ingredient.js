import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap'; 
import { MDBContainer, MDBCol } from "mdbreact";

class Ingredient extends Component {
    render() { 
        // Create each ingredient card
        let ingredientCard = this.props.ingredients.map(ingredient => {
            return (
                <MDBCol className="d-flex border border-dark">
                {ingredient}
                </MDBCol>
            )
        })
      // Display all the ingredients inside a card deck
        return (
                <div>
                    <MDBContainer className="mt-5">
                         <Row xs={2} md={4} lg={6}>
                            {ingredientCard}
                         </Row>
                    </MDBContainer>
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