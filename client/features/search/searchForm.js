import React from "react";

// function for matching a cocktail to ingredients
/*
Takes the user input values and checks them against the ingredients in the array of cocktail objects
example:
- user inputs "vodka" "rum" "vermouth" "olives" "pineapple juice"
- matches with dirty martini ["vodka", "vermouth", "olives"]
- renders dirty martini card component 

psuedocode
Gather the form inputs and put them in a array (an array of strings)
Loop through the cocktailData array, inspecting the ingredients array at each object
*/

const SearchForm = () => {
  return (
    <div>
      <form>
        <input type="text" name="ingredient1" required></input>
        <input type="text" name="ingredient2" required></input>
        <input type="text" name="ingredient3" required></input>
        <input type="text" name="ingredient4"></input>
        <input type="text" name="ingredient5"></input>
        <button type="submit">Can I Cocktail?</button>
      </form>
    </div>
  );
};

export default SearchForm;
