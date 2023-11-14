import React, { useContext } from "react";
import { CircularProgress } from "@mui/material";
import { useRandomMeal } from "../../hooks/meals/useRandomMeal";
import RandomRecipeCard from "../../components/RandomRecipeCard/RandomRecipeCard";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Home() {
  const { data, isLoading, error } = useRandomMeal();
  const { darkMode } = useContext(DarkModeContext);

  if (isLoading) {
    return (
      <section className={`main ${darkMode ? "background-dark " : ""}`}>
        <div className="loading-wrapper">
          <CircularProgress />
        </div>
      </section>
    );
  }

  let searchResults;
  if (!data || error) {
    const failureInfoMsg = error
      ? "Service unavailable at the moment :("
      : "No meal found";
    searchResults = (
      <section className="no-recipe-found">
        <p
          className={
            darkMode
              ? "color-font-light hover-shadow-light"
              : "color-font-dark hover-shadow-dark"
          }
        >
          {failureInfoMsg}
        </p>
      </section>
    );
  }

  if (data) {
    searchResults = (
      <RandomRecipeCard
        title={data.name}
        description={data.instructions}
        img={data.thumbnailUrl}
        category={data.category}
        ytLink={data.youtubeRecipe}
      />
    );
  }

  // TODO: add the case where the recipes are found.
  // this should add the results in searchResults variable

  return (
    <section className={`main ${darkMode ? "background-dark " : ""}`}>
      <div className="title">
        <h1 className={"title-1 primary-color"}>Home Page</h1>
      </div>
      {searchResults}
    </section>
  );
}
