import React, { useEffect, useState } from "react";
import PreviewRecipeDTO from "../../dto/PreviewRecipeDTO";
import PreviewRecipeCard from "../../components/PreviewRecipeCard/PreviewRecipeCard";
import MealService from "../../services/MealService";

import "./style.css";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Meals() {
  const [meals, setMeals] = useState<PreviewRecipeDTO[]>([]);
  const [searchInput, setSearchInput] = useState("chicken");

  useEffect(() => {
    async function fetchMealsbyName() {
      const mealsData: PreviewRecipeDTO[] = await MealService.getRecipesByName(
        searchInput
      );
      setMeals(mealsData);
    }

    fetchMealsbyName();
  }, [meals.length, searchInput]);

  return (
    <section className="main">
      <div className="title">
        <h1>Meals Page</h1>
        <div className="search-bar">
          <SearchBar
            receiveMeals={(searchInput) => setSearchInput(searchInput)}
          />
        </div>
      </div>
      <section className="search-results">
        {meals.map((item) => (
          <PreviewRecipeCard
            title={item.name}
            img={item.thumbnailUrl}
          ></PreviewRecipeCard>
        ))}
      </section>
    </section>
  );
}
