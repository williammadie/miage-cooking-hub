import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import Meal from "./pages/Meal/Meal";
import Cocktail from "./pages/Cocktail/Cocktail";
import Cocktails from "./pages/Cocktails/Cocktails";
import Meals from "./pages/Meals/Meals";
import { DarkModeProvider } from "./context/DarkModeContext";
import Nutrition from "./pages/Nutrition/Nutrition";

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/meal/:id" element={<Meal />} />
          <Route path="/cocktail/:id" element={<Cocktail />} />
          <Route path="/nutrition" element={<Nutrition />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
