import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Card } from 'react-bootstrap'; 

class Recipe extends Component {
  render() { 
    // Here you need to map over the array of recipes to display
      return (
              <div>
                {this.props.recipes[0].image}
              </div>
          )
    }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(Recipe);