import React, { useContext } from "react";
import {CircularProgress } from "@mui/material";
import { useRandomMeal } from "../../hooks/meals/useRandomMeal";
import RandomRecipeCard from "../../components/RandomRecipeCard/RandomRecipeCard";
import { DarkModeContext } from "../../context/DarkModeContext";
import {useRandomCocktail} from "../../hooks/cocktails/useRandomCocktail";
import RecipeType from "../../constants/RecipeType";

import "./style.css";
import {useNavigate} from "react-router-dom";

export default function Home() {
  const { dataM, isLoadingM, errorM } = useRandomMeal();
  const { dataC, isLoadingC, errorC } = useRandomCocktail();
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();

  if (isLoadingM && isLoadingC) {
    return (
      <section className={`main ${darkMode ? "background-dark " : ""}`}>
        <div className="loading-wrapper">
          <CircularProgress />
        </div>
      </section>
    );
  }

  let searchResultsM;
  if (!dataM || errorM) {
    const failureInfoMsg = errorM
      ? "Service unavailable at the moment :("
      : "No meal found";
    searchResultsM = (
      <section className="no-recipe-found">
        <p>{failureInfoMsg}</p>
      </section>
    );
  }

  let searchResultsC;
  if (!dataC || errorC) {
    const failureInfoMsg = errorC
        ? "Service unavailable at the moment :("
        : "No cocktail found";
    searchResultsC = (
        <section className="no-recipe-found">
          <p>{failureInfoMsg}</p>
        </section>
    );
  }

  if (dataM) {
    searchResultsM = (
      <RandomRecipeCard
        title={dataM.name}
        description={dataM.instructions}
        img={dataM.thumbnailUrl}
        category={dataM.category}
        ytLink={dataM.youtubeRecipe}
        onClickAction={() => navigate(`/${RecipeType.Meal}/${dataM.id}`)}
      />
    );
  }

  if (dataC) {
    searchResultsC = (
        <RandomRecipeCard
            title={dataC.name}
            description={dataC.instructions}
            img={dataC.thumbnailUrl}
            category={dataC.category}
            ytLink={dataC.youtubeRecipe}
            onClickAction={() => navigate(`/${RecipeType.Cocktail}/${dataC.id}`)}
        />
    );
  }

  return (
    <section className={`main ${darkMode ? "background-dark " : ""}`}>
      <div className="title">
        <h1 className={"title-1 primary-color"}>Home Page</h1>
      </div>
        <div className="Remarque">
            <h1 className="TitreRemarque">Une petite idée de repas ?</h1>
        </div>
      <div className="RandomRecipeCards">
          <div className="card">{searchResultsM}</div>
          <div className="card">{searchResultsC}</div>
      </div>
    </section>
  );
}
