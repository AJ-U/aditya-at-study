import React, { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";
import { useRecipeContext } from "../../hooks/useRecipeContext";

function Recipes() {
    // const saman = useContext(RecipeContext);
    const saman = useRecipeContext();
  return (
    <div>
        {saman.list}
      <h1>All recipes that I prepare</h1>
    </div>
  );
}

export default Recipes;
