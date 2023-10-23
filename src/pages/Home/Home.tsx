import React from "react";
import ServiceContainer from "../../services/ServiceContainer";
import IRecipeService from "../../services/IRecipeService";

export default function Home() {
  const mealService: IRecipeService = ServiceContainer.mealService;

  async function getRandomMeal() {
    const randomMealDto = await mealService.getRandomRecipe();
    console.log(randomMealDto.name);
  }
  getRandomMeal();

  return (
    <section className="main">
      <h1>Home Page</h1>
    </section>
  );
}
