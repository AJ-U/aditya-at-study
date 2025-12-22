import { createContext, useState } from "react";

// Context API instance created
export const RecipeContext = createContext(); //tunnel 

function RecipeContextProvider({ children }) {
  const [list, setList] = useState([1,2]);

  const printGlobal = () => {
    console.log("global function called")
  }
  return (
    // Data to tunnel
    <RecipeContext.Provider value={{ list, setList, printGlobal }}> 
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeContextProvider;
