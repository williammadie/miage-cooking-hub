import React, { useState } from "react";
import MealService from "../../services/MealService";
import NoResultFoundError from "../../errors/NoResultFoundError";
import { CircularProgress } from "@mui/material";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cannotReachAPI, setCannotReachAPI] = useState<boolean>(false);

  async function getRandomMeal() {
    try {
      const randomMealDto = await MealService.getRandomRecipe();
      setIsLoading(false);
      console.log(randomMealDto.name);
    } catch (err) {
      if (err instanceof NoResultFoundError) {
        setCannotReachAPI(true);
        setIsLoading(false);
      } else {
      }
    }
  }
  getRandomMeal();

  if (isLoading) {
    return (
      <section className="main">
        <div className="loading-wrapper">
          <CircularProgress />
        </div>
      </section>
    );
  }

  const failureInfoMsg = cannotReachAPI
    ? "Service unavailable at the moment :("
    : "No meal found";
  const searchResults = (
    <section className="no-recipe-found">
      <p>{failureInfoMsg}</p>
    </section>
  );

  // TODO: add the case where the recipes are found.
  // this should add the results in searchResults variable

  return (
    <section className="main">
      <div className="title">
        <h1 className={"title-1 primaryColor"}>Home Page</h1>
      </div>
      {searchResults}
    </section>
  );
}
