import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../features/home/Home";
import SingleRecipe from "../features/recipe/SingleRecipe";
import SearchForm from "../features/searchForm/searchForm";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route to="/home" element={<Home />} />
        <Route to="/drinks" element={<SingleRecipe />} />
        <Route to="/search" element={<SearchForm />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
