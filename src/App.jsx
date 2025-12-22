import { Fragment, useState } from "react";
import "./App.css";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from "./pages/recipes/recipes";
import RecipeContextProvider from "./context/RecipeContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <RecipeContextProvider>
        <Routes>
          // aditya
          <Route path="/" element={<Home />}></Route>
          // ajinkya
          <Route path="/recipes" element={<Recipes />}></Route>
        </Routes>
        {/* /home information about you */}
        {/* recipeList */}
      </RecipeContextProvider>
    </BrowserRouter>
  );
}

export default App;
