import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import DetailPage from "../../components/DetailRecipeCard/DetailRecipeCard";
import MealService from "../../services/MealService";
import FullRecipeDTO from "../../dto/FullRecipeDTO";

import "./style.css";

export default function Meal() {
  const id: string = String(useParams().id);
  const [meal, setMeal] = useState<FullRecipeDTO>();
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMealById() {
      const mealData = await MealService.getFullRecipeById(id);
      setMeal(mealData);
      setLoading(false);
    }

    fetchMealById();
  }, [id]);

  if (loading) {
    // Afficher un message de chargement tant que les données sont en cours de récupération
    return (
      <section className="main">
        <div className="loading-wrapper">
          <CircularProgress />
        </div>
      </section>
    );
  }

  if (!meal) {
    // Gérer le cas où aucune donnée n'est trouvée pour cet ID
    return (
      <section className="main">
        <div>Nothing found for recipe with id {id}.</div>
      </section>
    );
  }

  // Les données sont prêtes, affichez-les
  return (
    <section className="main">
      <DetailPage
        id={meal.id}
        name={meal.name}
        instructions={meal.instructions}
        area={meal.area}
        category={meal.category}
        thumbnailUrl={meal.thumbnailUrl}
        youtubeRecipe={meal.youtubeRecipe}
        tags={meal.tags}
        source={meal.source}
        ingredients={meal.ingredients}
        goBackAction={() => navigate("/meals")}
      ></DetailPage>
    </section>
  );
}
