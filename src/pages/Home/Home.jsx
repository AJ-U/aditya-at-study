import React, { Fragment, useContext, useState } from "react";
import "./Home.css";
import useCounter from "../../hooks/useCounter";
import { RecipeContext } from "../../context/recipeContext";

function Home() {
  const things = useContext(RecipeContext);
  return (
    <Fragment>
      <h1>Aditya's Fav recipes</h1>
      {things.money}
      {things.food}
      {/* rec ipes */}
    </Fragment>
  );
}

export default Home;
