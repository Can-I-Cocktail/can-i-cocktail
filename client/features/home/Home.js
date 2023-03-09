import React from "react";
import { useSelector } from "react-redux";
import SearchForm from "../searchForm/searchForm";

/**
 * COMPONENT
 */
const Home = (props) => {
  return (
    <div>
      <h3>Can I Cocktail?</h3>
      <SearchForm />
    </div>
  );
};

export default Home;
