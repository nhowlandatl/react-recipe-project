import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, Row, Container, CardDeck } from 'react-bootstrap'; 
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class RecipeInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }
    render() {
        const htmlRecipeSummary = `<div>${this.props.recipeInfo.summary}</div>`
        const recipeImage = this.props.recipeInfo.image;
        return (
            <div>
                <Card>
                    {this.props.recipeInfo && 
                        <div>
                            <img src={`${recipeImage}`} alt=""/>
                            {ReactHtmlParser(htmlRecipeSummary)}
                            <br></br>
                            <a href={this.props.recipeInfo.sourceUrl}>Get detailed cooking instructions here!</a>
                        </div>
                    // Generate Recipe info if get recipe info is clicked
                    // Want to add an "X" button here to close the recipe info
                    }
                </Card>
                  
            </div>
        )
    }
    
}

function mapDispatchToProps(dispatch) {
    return {
      clearRecipes: function() {
        dispatch({type: 'RESET_RECIPES'})
        }
    }
  }

function mapStateToProps(state) {
    return {
      recipeInfo: state.recipeInfo,
      recipes: state.recipes
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(RecipeInfo);