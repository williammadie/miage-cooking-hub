import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SearchRecipes from "./pages/SearchRecipes/SearchRecipes";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import Meal from "./pages/Meal/Meal";
import Cocktail from "./pages/Cocktail/Cocktail";
import RecipeType from "./constants/RecipeType";
import MealService from "./services/MealService";
import CocktailService from "./services/CocktailService";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/meals"
          element={
            <SearchRecipes
              recipeType={RecipeType.Meal}
              searchService={MealService}
            />
          }
          key={RecipeType.Meal}
        />
        <Route
          path="/cocktails"
          element={
            <SearchRecipes
              recipeType={RecipeType.Cocktail}
              searchService={CocktailService}
              key={RecipeType.Cocktail}
            />
          }
        />
        <Route path="/meal/:id" element={<Meal />} />
        <Route path="/cocktail/:id" element={<Cocktail />} />
      </Routes>
    </Router>
  );
}

export default App;
