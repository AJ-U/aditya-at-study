import { createContext } from "react";

// this value should be available globally so that i can use it in any component
export const contextValue = {money: 100, food: "pizza"}// money

// Context API instance created
export const RecipeContext = createContext(contextValue); //papa

