import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import Form from './components/Form';
import Recipe from './components/Recipe';
import Ingredient from './components/Ingredient'; 
import RecipeResults from './components/RecipeResults';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 

// Redux store setup
const initialState = {
  value: '',
  recipes: [{title: 'test recipe'}],
  ingredients: [],
  recipeString: ''
}

// Write functions for your reducer here
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_RECIPE':
      return {
        ...state,
        recipes: action.payload
      }
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: state.ingredients.concat(action.payload)
      }
  default:
    return state;
  }
}

// Reducer store
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
      <Form/>
      <Ingredient/>
      <Recipe/>
      <RecipeResults/>
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

