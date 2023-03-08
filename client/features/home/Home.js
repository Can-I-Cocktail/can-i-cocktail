import React from "react";
import { useSelector } from "react-redux";
import SearchForm from "../search/searchForm";

/**
 * COMPONENT
 */
const Home = (props) => {
  return (
    <div>
      <h1>Can I Cocktail?</h1>
      <h3>
        Enter up to five types of booze and ingredients to find a matching
        cocktail recipe
      </h3>
      <SearchForm />
    </div>
  );
};

export default Home;
