import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../features/home/Home";
import SingleRecipe from "../features/recipe/SingleRecipe";

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
      </Routes>
    </div>
  );
};

export default AppRoutes;
