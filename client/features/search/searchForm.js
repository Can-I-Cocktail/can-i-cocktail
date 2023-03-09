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

const ingredientCheck = (mergedSortedIngredients, recipeIngredients) => {
  console.log("we're checking ingredients");
  let ingredientMatchCount = 0;
  let j = 0;
  while (
    j < mergedSortedIngredients.length &&
    ingredientMatchCount !== recipeIngredients.length
  ) {
    console.log("j:", j);
    let current = mergedSortedIngredients[j];
    let next = mergedSortedIngredients[j + 1];
    if (current === next) {
      console.log("found a matching ingredient");
      ingredientMatchCount++;
      j += 2;
    }
    if (current !== next) {
      console.log(current, "does not equal", next);
      j += 1;
    }
  }
  return ingredientMatchCount === recipeIngredients.length;
};

const recipeCheck = (recipeList, userIngredients) => {
  // a place to store the cocktail objects that are matches
  const cocktailMatches = [];
  // loop through the recipeList checking each recipe's ingreidents array against the userIngredients array
  for (let i = 0; i < recipeList.length; i++) {
    const recipeIngredients = recipeList[i].ingredients;
    // merge and sort the ingredient list for the cocktail we are on with the user's ingredients
    const mergedSortedIngredients = recipeIngredients
      .concat(userIngredients)
      .sort();
    console.log("mergedSortedIngredients", mergedSortedIngredients);
    if (ingredientCheck(mergedSortedIngredients, recipeIngredients) === true) {
      cocktailMatches.push(recipeList[i]);
    }
  }
  console.log("cocktailMatches:", cocktailMatches);
};

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
    console.log("userIngredients:", userIngredients);
    recipeCheck(recipeList, userIngredients);
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
