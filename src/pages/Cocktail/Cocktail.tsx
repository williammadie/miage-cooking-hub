import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailPage from "../../components/DetailPage/DetailPage";
import FullRecipeDTO from "../../dto/FullRecipeDTO";
import CocktailService from "../../services/CocktailService";

export default function Cocktail() {
  const id: string = String(useParams().id);
  const [drink, setDrink] = useState<FullRecipeDTO>();
  const [loading, setLoading] = useState<boolean>(true);

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
        <div>Loading...</div>;
      </section>
    );
  }

  if (!drink) {
    // Gérer le cas où aucune donnée n'est trouvée pour cet ID
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
        id={drink.id}
        name={drink.name}
        instruction={drink.instructions}
        area={drink.area}
        category={drink.category}
        thumbnailUrl={drink.thumbnailUrl}
        youtubeRecipe={drink.youtubeRecipe}
        tags={drink.tags}
        source={drink.source}
        ingredients={drink.ingredients}
      ></DetailPage>
    </section>
  );
}
