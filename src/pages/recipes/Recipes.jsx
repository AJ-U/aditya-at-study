import React, { useContext } from "react";
import { RecipeContext } from "../../context/recipeContext";

function Recipes() {
    const saman = useContext(RecipeContext);
  return (
    <div>
        {saman.food}
      <h1>All recipes that I prepare</h1>
    </div>
  );
}

export default Recipes;
