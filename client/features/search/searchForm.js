import React, { useState } from "react";

// function for matching a cocktail to ingredients
/*
Takes the user input values and checks them against the ingredients in the array of cocktail objects
example:
- user inputs "vodka" "rum" "vermouth" "olives" "pineapple juice"
- matches with dirty martini ["vodka", "vermouth", "olives"]
- renders dirty martini card component 

psuedocode
Gather the form inputs and put them in a array (an array of strings)
need a place to store matching cocktails
Loop through the cocktailData array, inspecting the ingredients array at each object 
    - if the first element in the array matches any of the elements in the user inputs array
        - move onto the next element and do the check
            - if we end up matching all of the cocktail ingredients, we store the cocktail object in our matching cocktails array
    - if the first element does not match and of the user inputs
        - move onto the next cocktail
*/

// set up each of the inputs as state
// do an on change that updates the input with the input from the event

const SearchForm = () => {
  const [ingredient1, setIngredient1] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");
  const [ingredient4, setIngredient4] = useState("");
  const [ingredient5, setIngredient5] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5
    );
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
