import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap'; 
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { MDBIcon, MDBModal, MDBModalHeader } from 'mdbreact';

class RecipeInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal14: true
        };
        // Clear recipe button bind
        this.clearRecipes = this.clearRecipes.bind(this);
    }
    // Clear modal toggle function
    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
    }
    render() {
        const htmlRecipeSummary = `<div>${this.props.recipeInfo.summary}</div>`
        const recipeImage = this.props.recipeInfo.image;
        const recipeTitle = this.props.recipeInfo.title;
        return (
            <div>
                {this.props.recipeInfo && 
                    <MDBModal isOpen={this.state.modal14} toggle={this.handleClose} centered>
                        <MDBModalHeader toggle={this.toggle(14)}>
                            <MDBIcon icon='utensils' />
                            {recipeTitle}
                        </MDBModalHeader>
                        <img src={`${recipeImage}`} alt=""/>
                        {ReactHtmlParser(htmlRecipeSummary)}
                        <br></br>
                        <a href={this.props.recipeInfo.sourceUrl}>Get detailed cooking instructions here!</a>
                    </MDBModal>
                // Generate Recipe info if get recipe info is clicked
                // Want to add an "X" button here to close the recipe info
                }
          
            </div>
        )
    }
    clearRecipes(event) {
        this.props.clearRecipes(); 
        event.preventDefault();
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

// working render
// render() {
//     const htmlRecipeSummary = `<div>${this.props.recipeInfo.summary}</div>`
//     const recipeImage = this.props.recipeInfo.image;
//     return (
//         <div>
//             <Card>
//                 {this.props.recipeInfo && 
//                     <div>
//                         <img src={`${recipeImage}`} alt=""/>
//                         {ReactHtmlParser(htmlRecipeSummary)}
//                         <br></br>
//                         <a href={this.props.recipeInfo.sourceUrl}>Get detailed cooking instructions here!</a>
//                     </div>
//                 // Generate Recipe info if get recipe info is clicked
//                 // Want to add an "X" button here to close the recipe info
//                 }
//             </Card>
//             {this.props.recipes.length > 1 &&
//           // Generate clear screen button after recipes are generated
//           <Button variant="outline-secondary" onClick={this.clearRecipes}>Clear all recipes</Button>
//         }  
//         </div>
//     )
// }

// WORKING with no close button
// class RecipeInfo extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             modal14: false
//         };
//         this.clearRecipes = this.clearRecipes.bind(this);
//       }
//       toggle = nr => () => {
//         let modalNumber = 'modal' + nr
//         this.setState({
//           [modalNumber]: !this.state[modalNumber]
//         });
//       }
//     render() {
//         const htmlRecipeSummary = `<div>${this.props.recipeInfo.summary}</div>`
//         const recipeImage = this.props.recipeInfo.image;
//         return (
//             <div>
//                 {this.props.recipeInfo && 
//                     <MDBModal isOpen={true} toggle={this.toggle(14)} centered>
//                         <MDBModalHeader toggle={this.toggle(14)}>MDBModal title</MDBModalHeader>
//                         <img src={`${recipeImage}`} alt=""/>
//                         {ReactHtmlParser(htmlRecipeSummary)}
//                         <br></br>
//                         <a href={this.props.recipeInfo.sourceUrl}>Get detailed cooking instructions here!</a>
//                     </MDBModal>
//                 // Generate Recipe info if get recipe info is clicked
//                 // Want to add an "X" button here to close the recipe info
//                 }
//             {this.props.recipes.length > 1 &&
//             // Generate clear screen button after recipes are generated
//             <Button variant="outline-secondary" onClick={this.clearRecipes}>Clear all recipes</Button>
//             }  
//             </div>
//         )
//     }
//     clearRecipes(event) {
//         this.props.clearRecipes(); 
//         event.preventDefault();
//     }
// }