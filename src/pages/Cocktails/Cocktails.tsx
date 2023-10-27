import React, { useEffect, useState } from "react";
import PreviewRecipeCard from "../../components/PreviewRecipeCard/PreviewRecipeCard";
import PreviewRecipeDTO from "../../dto/PreviewRecipeDTO";
import CocktailService from "../../services/CocktailService";

export default function Cocktails() {
  const [cocktails, setCocktails] = useState<PreviewRecipeDTO[]>([]);

  useEffect(() => {
    async function fetchCocktailsbyName() {
      const cocktailsData: PreviewRecipeDTO[] = await CocktailService.getRecipesByName(
        "daiquiri"
      );
      setCocktails(cocktailsData);
      console.log(cocktails.length);
    }

    fetchCocktailsbyName();
  }, [cocktails.length]);

  return (
    <section className="main">
      <h1>Cocktails Page</h1>
      <section className="search-results">
        {cocktails.map((item) => (
          <PreviewRecipeCard
            title={item.name}
            img={item.thumbnailUrl}
          ></PreviewRecipeCard>
        ))}
      </section>
    </section>
  );
}
