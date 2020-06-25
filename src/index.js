import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Recipe from './components/Recipe';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 

// Redux store setup
const initialState = {
  count: 0
}

// Write functions for your reducer here
function reducer(state = initialState, action) {
  // blah blah
}

// Reducer store
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
      <Recipe/>
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

