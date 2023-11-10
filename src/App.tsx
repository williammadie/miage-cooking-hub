import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import Meal from "./pages/Meal/Meal";
import Cocktail from "./pages/Cocktail/Cocktail";
import RecipeType from "./constants/RecipeType";
import Cocktails from "./pages/Cocktails/Cocktails";
import Meals from "./pages/Meals/Meals";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} key={RecipeType.Meal} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/meal/:id" element={<Meal />} />
        <Route path="/cocktail/:id" element={<Cocktail />} />
      </Routes>
    </Router>
  );
}

export default App;
