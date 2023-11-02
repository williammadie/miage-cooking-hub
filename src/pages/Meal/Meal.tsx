import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailPage from "../../components/DetailPage/DetailPage";
import MealService from "../../services/MealService";
import FullRecipeDTO from "../../dto/FullRecipeDTO";

export default function Meal() {
  const id: string = String(useParams().id);
  const [meal, setMeal] = useState<FullRecipeDTO>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchMealsById() {
      const mealData = await MealService.getFullRecipeById(id);
      setMeal(mealData);
      setLoading(false);
    }

    fetchMealsById();
  }, [id]);

  if (loading) {
    return (
      <section className="main">
        <div>Loading...</div>;
      </section>
    );
  }

  if (!meal) {
    return (
      <section className="main">
        <div>No recipes found for this ID.</div>
      </section>
    );
  }

  // Les données sont prêtes, affichez-les
  return (
    <section className="main">
      <DetailPage
        id={meal.id}
        name={meal.name}
        instruction={meal.instructions}
        area={meal.area}
        category={meal.category}
        thumbnailUrl={meal.thumbnailUrl}
        youtubeRecipe={meal.youtubeRecipe}
        tags={meal.tags}
        source={meal.source}
        ingredients={meal.ingredients}
      ></DetailPage>
    </section>
  );
}
