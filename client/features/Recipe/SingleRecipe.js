import React from "react";
import { cocktailData } from "./script/cocktailData";

const SingleRecipe= () => {
    const { name, ingredients, recipe, directions} = cocktailData;
    return (
        <div>
            <h2>{name}</h2>
            <h3>{ingredients}</h3>
            <h3>{recipe}</h3>
            <h3>{directions}</h3>
        </div>
    )
}

export default SingleRecipe;