import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import DetailPage from "../../components/DetailRecipeCard/DetailRecipeCard";

import "./style.css";
import { useCocktailById } from "../../hooks/cocktails/useCocktailById";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Cocktail() {
  const id: string = String(useParams().id);
  const { data, isLoading, error } = useCocktailById(id);
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);

  if (isLoading) {
    // Afficher un message de chargement tant que les données sont en cours de récupération
    return (
      <section className={`main ${darkMode ? "background-dark " : ""}`}>
        <div className="loading-wrapper">
          <CircularProgress />
        </div>
      </section>
    );
  }

  if (!data || error) {
    // Gérer le cas où aucune donnée n'est trouvée pour cet ID
    return (
      <section className={`main ${darkMode ? "background-dark " : ""}`}>
        <div>Nothing found for recipe with id {id}.</div>
      </section>
    );
  }

  // Les données sont prêtes, affichez-les
  return (
    <section className={`main ${darkMode ? "background-dark " : ""}`}>
      <DetailPage
        id={data.id}
        name={data.name}
        instructions={data.instructions}
        area={data.area}
        category={data.category}
        thumbnailUrl={data.thumbnailUrl}
        youtubeRecipe={data.youtubeRecipe}
        tags={data.tags}
        source={data.source}
        ingredients={data.ingredients}
        goBackAction={() => navigate("/cocktails")}
      ></DetailPage>
    </section>
  );
}
