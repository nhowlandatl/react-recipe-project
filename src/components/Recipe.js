import React, { Component } from 'react';
import { connect } from 'react-redux';
require('dotenv').config();

// Unirest API handler
// const unirest = require("unirest");

// const API_KEY = "40cb3a8377mshdada20219265609p14adc3jsn41c73db521e2";

// const INGREDIENT_LIST = ['bananas', 'apples', 'cheese', 'crackers'];
// let requestString = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/find" +
// "ByIngredients?number=5&ranking=1&ingredients=";
// const ingredientsString = INGREDIENT_LIST.map(ingredient =>
//    ingredient + '%2C'
// );

// requestString = requestString + ingredientsString;
// unirest.get(requestString)
//     .header("X-RapidAPI-Key",  API_KEY)
//     .end(function (result) {
//         if (result.status === 200){
//             getRecipeData(result.body);
//     };
// });


const unirest = require("unirest");

var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients");

req.query({
	"number": "5",
	"ranking": "1",
	"ignorePantry": "false",
	"ingredients": "apples%2Cflour%2Csugar"
});

req.headers({
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"x-rapidapi-key": "40cb3a8377mshdada20219265609p14adc3jsn41c73db521e2",
	"useQueryString": true
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});




const apiKey = process.env.API_KEY;

class Recipe extends Component {
    render() {
        return (
            <div>Hello world</div>
        )
    }
}

export default Recipe;

