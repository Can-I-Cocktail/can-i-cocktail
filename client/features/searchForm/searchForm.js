import React, { useState } from "react";
import cocktailData from "../../../script/cocktailData";

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
