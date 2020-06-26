import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
  return {
    recipe: state.recipe
  }
}

class Recipe extends Component {

  componentDidMount() {

  }

  render() {
      return (
              <div>
                  {this.props.recipe}
              </div>
          )
    }
}

export default connect(mapStateToProps)(Recipe);