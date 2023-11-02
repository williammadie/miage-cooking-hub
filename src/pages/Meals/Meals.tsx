import React, { useEffect, useState } from "react";
import PreviewRecipeDTO from "../../dto/PreviewRecipeDTO";
import PreviewRecipeCard from "../../components/PreviewRecipeCard/PreviewRecipeCard";
import MealService from "../../services/MealService";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import "./style.css";

export default function Meals() {
  const [meals, setMeals] = useState<PreviewRecipeDTO[]>([]);
  const [searchInput, setSearchInput] = useState("chicken");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMealsbyName() {
      const mealsData: PreviewRecipeDTO[] = await MealService.getRecipesByName(
        searchInput
      );
      setMeals(mealsData);
      setIsLoading(false);
    }

    fetchMealsbyName();
  }, [meals.length, searchInput]);

  if (isLoading) {
    return (
      <section className="main">
        <div className="loading-wrapper">
          <CircularProgress />
        </div>
      </section>
    );
  } else {
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
              onClickAction={() => navigate(`/meal/${item.id}`)}
            ></PreviewRecipeCard>
          ))}
        </section>
      </section>
    );
  }
}
