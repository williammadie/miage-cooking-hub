import React from "react";
import MealService from "../../services/MealService";

export default function Home() {
  async function getRandomMeal() {
    const randomMealDto = await MealService.getRandomRecipe();
    console.log(randomMealDto.name);
  }
  getRandomMeal();

  return (
    <section className="main">
      <h1>Home Page</h1>
    </section>
  );
}
