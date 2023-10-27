import React, { useEffect, useState } from "react";
import PreviewRecipeDTO from "../../dto/PreviewRecipeDTO";
import PreviewRecipeCard from "../../components/PreviewRecipeCard/PreviewRecipeCard";
import MealService from "../../services/MealService";

import "./style.css";

export default function Meals() {
  const [meals, setMeals] = useState<PreviewRecipeDTO[]>([]);

  useEffect(() => {
    async function fetchMealsbyName() {
      const mealsData: PreviewRecipeDTO[] = await MealService.getRecipesByName(
        "chicken"
      );
      setMeals(mealsData);
      console.log(meals.length);
    }

    fetchMealsbyName();
  }, [meals.length]);

  return (
    <section className="main">
      <h1>Meals Page</h1>
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
