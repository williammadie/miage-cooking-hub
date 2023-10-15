import React, { useEffect, useState } from "react";
import IRecipeService from "../../services/IRecipeService";
import ServiceContainer from "../../services/ServiceContainer";
import PreviewRecipeDTO from "../../dto/PreviewRecipeDTO";
import PreviewRecipeCard from "../../components/PreviewRecipeCard/PreviewRecipeCard";

import "./style.css";

export default function Meals() {
  const mealService: IRecipeService = ServiceContainer.mealService;
  const [meals, setMeals] = useState<PreviewRecipeDTO[]>([]);

  useEffect(() => {
    async function fetchMealsbyName() {
      const mealsData: PreviewRecipeDTO[] = await mealService.getRecipesByName("chicken");
      setMeals(mealsData);
      console.log(meals.length);
    }

    fetchMealsbyName();
  }, [mealService, meals.length]);
  
  
  return (
    <section className="main">
      <h1>Meals Page</h1>
      <section className="search-results">
        {meals.map((item) => (
          <PreviewRecipeCard title={item.name} img={item.thumbnailUrl}></PreviewRecipeCard>
        ))
        }
      </section>
    </section>
  );
}
