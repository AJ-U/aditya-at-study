import React, { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";

function Recipes() {
    const saman = useContext(RecipeContext);
  return (
    <div>
        {saman.list}
      <h1>All recipes that I prepare</h1>
    </div>
  );
}

export default Recipes;
