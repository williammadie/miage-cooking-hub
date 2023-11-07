import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import DetailPage from "../../components/DetailRecipeCard/DetailRecipeCard";
import FullRecipeDTO from "../../dto/FullRecipeDTO";
import CocktailService from "../../services/CocktailService";

import "./style.css";

export default function Cocktail() {
  const id: string = String(useParams().id);
  const [drink, setDrink] = useState<FullRecipeDTO>();
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDrinkById() {
      const drinkData = await CocktailService.getFullRecipeById(id);
      setDrink(drinkData);
      setLoading(false);
    }
    fetchDrinkById();
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

  if (!drink) {
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
        id={drink.id}
        name={drink.name}
        instructions={drink.instructions}
        area={drink.area}
        category={drink.category}
        thumbnailUrl={drink.thumbnailUrl}
        youtubeRecipe={drink.youtubeRecipe}
        tags={drink.tags}
        source={drink.source}
        ingredients={drink.ingredients}
        goBackAction={() => navigate("/cocktails")}
      ></DetailPage>
    </section>
  );
}
