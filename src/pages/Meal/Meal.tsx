import React, {useContext, useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import DetailPage from "../../components/DetailRecipeCard/DetailRecipeCard";
import MealService from "../../services/MealService";
import FullRecipeDTO from "../../dto/FullRecipeDTO";

import "./style.css";
import {DarkModeContext} from "../../context/DarkModeContext";

export default function Meal() {
  const id: string = String(useParams().id);
  const [meal, setMeal] = useState<FullRecipeDTO>();
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const {darkMode} = useContext(DarkModeContext);

  useEffect(() => {
    async function fetchMealById() {
      const mealData = await MealService.getFullRecipeById(id);
      setMeal(mealData);
      setLoading(false);
    }

    fetchMealById();
  }, [id]);

  if (loading) {
    return (
      <section className={`main ${darkMode ?'background-dark ' : "" }`}>
        <div className="loading-wrapper">
          <CircularProgress />
        </div>
      </section>
    );
  }

  if (!meal) {
    return (
      <section className={`main ${darkMode ?'background-dark ' : "" }`}>
        <div>Nothing found for recipe with id {id}.</div>
      </section>
    );
  }

  return (
    <section className={`main ${darkMode ?'background-dark ' : "" }`}>
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
