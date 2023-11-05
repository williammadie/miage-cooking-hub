import React, { useEffect, useState } from "react";
import PreviewRecipeDTO from "../../dto/PreviewRecipeDTO";
import PreviewRecipeCard from "../../components/PreviewRecipeCard/PreviewRecipeCard";
import MealService from "../../services/MealService";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import "./style.css";
import NoResultFoundError from "../../errors/NoResultFoundError";

export default function Meals() {
  const [meals, setMeals] = useState<PreviewRecipeDTO[]>([]);
  const [searchInput, setSearchInput] = useState("chicken");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cannotReachAPI, setCannotReachAPI] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMealsbyName() {
      try {
        const mealsData: PreviewRecipeDTO[] = 
        await MealService.getRecipesByName(searchInput);
        setMeals(mealsData);
        setIsLoading(false);
      } catch (err) {
        if (err instanceof NoResultFoundError) {
          setCannotReachAPI(true);
          setIsLoading(false);
        } else {
          throw err;
        }
      }
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
  }
  
  const failureInfoMsg = cannotReachAPI ? "Service unavailable at the moment :(": "No meal found";
  let searchResults = (
      <section className="no-meal-found">
        <p>{failureInfoMsg}</p>
      </section>
  )

  if (meals.length > 0) {
    searchResults = (
    <section className="search-results">
      {meals.map((item) => (
        <PreviewRecipeCard
          title={item.name}
          img={item.thumbnailUrl}
          onClickAction={() => navigate(`/meal/${item.id}`)}
        ></PreviewRecipeCard>
      ))}
    </section>
    )
  }
  
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
      {searchResults}
    </section>
  );
}
