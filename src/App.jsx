import { Fragment, useState } from "react";
import "./App.css";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from "./pages/recipes/recipes";
import { contextValue, RecipeContext } from "./context/recipeContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <RecipeContext.Provider value={contextValue}>
        <Routes>
          // aditya
          <Route path="/" element={<Home />}></Route> 
          // ajinkya
          <Route path="/recipes" element={<Recipes />}></Route> 
        </Routes>
        {/* /home information about you */}
        {/* recipeList */}
      </RecipeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
