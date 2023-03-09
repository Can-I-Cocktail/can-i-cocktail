import React, { useState } from "react";
import cocktailData from "../../../script/cocktailData";

/*
Function for matching a cocktail to ingredients
Checks the array of userIngredients against the array of cocktail ingredients for each cocktail in cocktailData

example:
- user inputs "vodka" "rum" "vermouth" "olives" "pineapple juice"
- matches with dirty martini ["vodka", "vermouth", "olives"]
- renders dirty martini card component 
*/

// set up each of the inputs as state
// do an on change that updates the input with the input from the event

const SearchForm = () => {
  // console.log(cocktailData);
  const recipeList = cocktailData;
  const [ingredient1, setIngredient1] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");
  const [ingredient4, setIngredient4] = useState("");
  const [ingredient5, setIngredient5] = useState("");
  const [possibleRecipes, setPossibleRecipes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userIngredients = [
      ingredient1.toLowerCase(),
      ingredient2.toLowerCase(),
      ingredient3.toLowerCase(),
      ingredient4.toLowerCase(),
      ingredient5.toLowerCase(),
    ];
    console.log(userIngredients);

    // es

    document.getElementById("searchForm").reset();
  };

  return (
    <div>
      <form id="searchForm" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setIngredient1(e.target.value)}
          required
        ></input>
        <input
          type="text"
          onChange={(e) => setIngredient2(e.target.value)}
          required
        ></input>
        <input
          type="text"
          onChange={(e) => setIngredient3(e.target.value)}
          required
        ></input>
        <input
          type="text"
          onChange={(e) => setIngredient4(e.target.value)}
          required
        ></input>
        <input
          type="text"
          onChange={(e) => setIngredient5(e.target.value)}
          required
        ></input>
        <button type="submit">Can I Cocktail?</button>
      </form>
    </div>
  );
};

export default SearchForm;
