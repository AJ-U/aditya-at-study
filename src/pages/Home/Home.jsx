import React, { Fragment, useContext, useState } from "react";
import "./Home.css";
import useCounter from "../../hooks/useCounter";
import { RecipeContext } from "../../context/RecipeContext";

function Home() {
  const things = useContext(RecipeContext);
  const { list, printGlobal } = things; 
  const updateList = () => {
    things.setList([2, 3]);
  };
  return (
    <Fragment>
      <h1>Aditya's Fav recipes</h1>
      {things.list}
      <button onClick={updateList}>change</button>
      <button onClick={things.printGlobal}>Call global function</button>

      {/* rec ipes */}
      {list}
    </Fragment>
  );
}

export default Home;
