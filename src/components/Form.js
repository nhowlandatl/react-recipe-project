import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { FormControl, Button, InputGroup } from 'react-bootstrap';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      recipe: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
    this.setState({value: event.target.value});  
  }

  handleSubmit(event) {
    this.getRecipe();
    // alert('An ingredient was submitted: ' + this.state.value); 
    event.preventDefault();
  }

    getRecipe = () => {
        return axios({
            "method":"GET",
            "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            
            "useQueryString":true
            },"params":{
            "number":"5",
            "ranking":"1",
            "ignorePantry":"false",
            "ingredients":"apples%2Cflour%2Csugar"
            }
            })
            .then((response)=>{
              console.log(response)
              this.setState({recipe: response})
            })
            .catch((error)=>{
              console.log(error)
            })
    }
    
    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <Button variant="outline-secondary" onClick={this.handleSubmit}>Click to add ingredient</Button>
                  </InputGroup.Prepend>
                  <FormControl aria-describedby="basic-addon1" type="text" value={this.state.value} placeholder="Enter an ingredient" onChange={this.handleChange}/> 
                </InputGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    value: state.value,
    recipe: state.recipe
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getRecipe: function() {
      dispatch({type: 'GET_RECIPE'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);